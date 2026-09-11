'use client';
import Link from 'next/link';
import { useRef, useState, type FormEvent } from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import type { Content, Locale } from '@/content';

export function ContactForm({
  c,
  locale,
}: {
  c: Pick<Content, 'form' | 'services' | 'privacy'>;
  locale: Locale;
}) {
  const f = c.form;
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error' | 'unavailable'>(
    'idle',
  );
  const started = useRef(0);
  const busy = useRef(false);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy.current) return;
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    busy.current = true;
    setStatus('sending');
    const data = Object.fromEntries(new FormData(form));
    try {
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, locale, startedAt: started.current }),
        signal: AbortSignal.timeout(15000),
      });
      if (response.ok) {
        setStatus('success');
        form.reset();
      } else setStatus(response.status === 503 ? 'unavailable' : 'error');
    } catch {
      setStatus('error');
    } finally {
      busy.current = false;
    }
  }
  const budgets = [
    f.under,
    '€1,000–€2,500',
    '€2,500–€5,000',
    '€5,000–€10,000',
    '€10,000+',
    f.unsure,
  ];
  return (
    <form
      className="inquiry-form"
      onSubmit={submit}
      onFocusCapture={() => {
        if (!started.current) started.current = Date.now();
      }}
      aria-busy={status === 'sending'}
    >
      <div className="form-grid">
        <label>
          {f.name} <span aria-hidden="true">*</span>
          <input name="name" autoComplete="name" required maxLength={120} />
        </label>
        <label>
          {f.email} <span aria-hidden="true">*</span>
          <input name="email" type="email" autoComplete="email" required maxLength={254} />
        </label>
        <label>
          {f.company} <small>({f.optional})</small>
          <input name="company" autoComplete="organization" maxLength={160} />
        </label>
        <label>
          {f.country} <small>({f.optional})</small>
          <input name="country" autoComplete="country-name" maxLength={100} />
        </label>
        <label>
          {f.need} <span aria-hidden="true">*</span>
          <select name="need" required defaultValue="">
            <option value="" disabled>
              {f.select}
            </option>
            {[...c.services.map((s) => s.name), f.other].map((s, i) => (
              <option value={i} key={s}>
                {s}
              </option>
            ))}
          </select>
        </label>
        <label>
          {f.budget}
          <select name="budget" defaultValue="5">
            {budgets.map((b, i) => (
              <option key={b} value={i}>
                {b}
              </option>
            ))}
          </select>
        </label>
        <label className="full-field">
          {f.description} <span aria-hidden="true">*</span>
          <textarea
            name="description"
            required
            minLength={20}
            maxLength={5000}
            rows={5}
            placeholder={f.descriptionHint}
          />
        </label>
        <label className="full-field">
          {f.website} <small>({f.optional})</small>
          <input
            name="website"
            type="url"
            autoComplete="url"
            placeholder="https://"
            maxLength={500}
          />
        </label>
      </div>
      <div className="honeypot" aria-hidden="true">
        <label>
          Fax
          <input name="fax" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <p className="form-privacy">
        {f.consent} <Link href={`/${locale}/privacy`}>{c.privacy.toLowerCase()}</Link>.
      </p>
      <button
        className="button"
        type="submit"
        disabled={status === 'sending' || status === 'success'}
      >
        {status === 'sending' ? (
          f.sending
        ) : status === 'success' ? (
          <>
            <Check size={18} />
            {f.submit}
          </>
        ) : (
          <>
            {f.submit}
            <ArrowUpRight size={18} aria-hidden="true" />
          </>
        )}
      </button>
      <div className={`form-status status-${status}`} role="status" aria-live="polite">
        {status === 'success' ? (
          f.success
        ) : status === 'error' ? (
          f.error
        ) : status === 'unavailable' ? (
          <>
            {f.unavailable} <a href="mailto:senz@senzcompany.com">senz@senzcompany.com ↗</a>
          </>
        ) : null}
      </div>
    </form>
  );
}
