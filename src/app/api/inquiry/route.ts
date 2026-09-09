import { NextResponse } from 'next/server';
import { isLocale } from '@/content/types';

const recent = new Map<string, { count: number; until: number }>();
export async function POST(request: Request) {
  const origin = request.headers.get('origin');
  if (!origin || origin !== new URL(request.url).origin)
    return NextResponse.json({ error: 'origin' }, { status: 403 });
  if (!request.headers.get('content-type')?.startsWith('application/json'))
    return NextResponse.json({ error: 'content-type' }, { status: 415 });
  if (Number(request.headers.get('content-length') || 0) > 16000)
    return NextResponse.json({ error: 'size' }, { status: 413 });
  let data: Record<string, unknown>;
  try {
    const reader = request.body?.getReader();
    if (!reader) throw new Error('body');
    const chunks: Uint8Array[] = [];
    let size = 0;
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.length;
      if (size > 16000) {
        await reader.cancel();
        return NextResponse.json({ error: 'size' }, { status: 413 });
      }
      chunks.push(value);
    }
    data = JSON.parse(Buffer.concat(chunks).toString('utf8'));
    if (!data || typeof data !== 'object' || Array.isArray(data)) throw new Error('body');
  } catch {
    return NextResponse.json({ error: 'body' }, { status: 400 });
  }
  const string = (key: string, max: number) =>
    typeof data[key] === 'string' && (data[key] as string).length <= max
      ? (data[key] as string).trim()
      : null;
  const name = string('name', 120),
    email = string('email', 254),
    description = string('description', 5000),
    company = string('company', 160),
    country = string('country', 100),
    website = string('website', 500),
    need = string('need', 1),
    budget = string('budget', 1);
  if (data.fax || typeof data.startedAt !== 'number' || Date.now() - data.startedAt < 2000)
    return NextResponse.json({ error: 'validation' }, { status: 400 });
  if (
    !name ||
    !email ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    !description ||
    description.length < 20 ||
    company === null ||
    country === null ||
    website === null ||
    !need ||
    !/^[0-4]$/.test(need) ||
    !budget ||
    !/^[0-5]$/.test(budget) ||
    typeof data.locale !== 'string' ||
    !isLocale(data.locale)
  )
    return NextResponse.json({ error: 'validation' }, { status: 400 });
  if (website) {
    try {
      if (!['http:', 'https:'].includes(new URL(website).protocol)) throw new Error('url');
    } catch {
      return NextResponse.json({ error: 'validation' }, { status: 400 });
    }
  }
  const now = Date.now();
  for (const [key, value] of recent) if (value.until < now) recent.delete(key);
  const key = email.toLowerCase();
  const limit = recent.get(key);
  if (limit && limit.count >= 3)
    return NextResponse.json(
      { error: 'rate-limit' },
      { status: 429, headers: { 'Retry-After': '600' } },
    );
  if (recent.size >= 10000) return NextResponse.json({ error: 'busy' }, { status: 429 });
  recent.set(key, { count: (limit?.count || 0) + 1, until: limit?.until || now + 600000 });
  const endpoint = process.env.INQUIRY_WEBHOOK_URL;
  if (!endpoint) return NextResponse.json({ error: 'not-configured' }, { status: 503 });
  try {
    if (new URL(endpoint).protocol !== 'https:') throw new Error('configuration');
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(process.env.INQUIRY_WEBHOOK_TOKEN
          ? { Authorization: `Bearer ${process.env.INQUIRY_WEBHOOK_TOKEN}` }
          : {}),
      },
      body: JSON.stringify({
        name,
        email,
        company,
        country,
        website,
        need: Number(need),
        budget: Number(budget),
        description,
        locale: data.locale,
        submittedAt: new Date().toISOString(),
      }),
      signal: AbortSignal.timeout(10000),
      redirect: 'error',
    });
    if (!response.ok) throw new Error('delivery');
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'delivery' }, { status: 502 });
  }
}
