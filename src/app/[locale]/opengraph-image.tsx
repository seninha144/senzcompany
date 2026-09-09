import { ImageResponse } from 'next/og';
import { getContent, isLocale } from '@/content';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export default async function Image({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const c = getContent(isLocale(locale) ? locale : 'en');
  return new ImageResponse(
    <div
      style={{
        background: '#f4f3ee',
        color: '#22241f',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        padding: '60px 70px',
        justifyContent: 'space-between',
        fontFamily: 'sans-serif',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: 65, fontWeight: 700, letterSpacing: -5 }}>senz.</span>
        <span style={{ fontSize: 16, textTransform: 'uppercase', letterSpacing: 2 }}>
          {c.eyebrow}
        </span>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          fontSize: 80,
          letterSpacing: -4,
          lineHeight: 1.08,
        }}
      >
        <span>{c.headline[0]}</span>
        <span style={{ color: '#6a7061' }}>{c.headline[1]}</span>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: 18,
          borderTop: '1px solid #c8c9c0',
          paddingTop: 24,
        }}
      >
        <span>senzcompany.com</span>
        <span>
          {c.location} · {c.worldwide}
        </span>
      </div>
    </div>,
    size,
  );
}
