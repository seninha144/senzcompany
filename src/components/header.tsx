'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react';
import { locales, navigation, type Content, type Locale } from '@/content';

export type HeaderContent = Pick<Content, 'nav' | 'start' | 'language' | 'menu' | 'close' | 'skip'>;
export function Header({ locale, c }: { locale: Locale; c: HeaderContent }) {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const panel = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    panel.current?.querySelector<HTMLElement>('a')?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        trigger.current?.focus();
      }
      if (event.key === 'Tab') {
        const items = [
          trigger.current,
          ...Array.from(panel.current?.querySelectorAll<HTMLElement>('a, select') ?? []),
        ].filter(Boolean) as HTMLElement[];
        const first = items[0],
          last = items[items.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    const onResize = () => {
      if (window.innerWidth >= 1000) setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [open]);
  function languages(id: string) {
    return (
      <label className="language" htmlFor={id}>
        <span className="sr-only">{c.language}</span>
        <select
          id={id}
          value={locale}
          onChange={(e) => {
            setOpen(false);
            router.push(pathname.replace(/^\/(en|pt|fr|it|de)(?=\/|$)/, `/${e.target.value}`));
          }}
        >
          {locales.map((l) => (
            <option key={l} value={l}>
              {l.toUpperCase()}
            </option>
          ))}
        </select>
        <ChevronDown size={12} aria-hidden="true" />
      </label>
    );
  }
  const links = navigation.map((route, i) => (
    <Link
      key={route}
      href={`/${locale}/${route}`}
      aria-current={pathname.startsWith(`/${locale}/${route}`) ? 'page' : undefined}
      onClick={() => setOpen(false)}
    >
      {c.nav[i]}
    </Link>
  ));
  return (
    <>
      <a className="skip-link" href="#main">
        {c.skip}
      </a>
      <header className="header">
        <div className="header-inner">
          <Link
            className="wordmark"
            href={`/${locale}`}
            aria-label="SENZ"
            onClick={() => setOpen(false)}
          >
            senz<span className="brand-dot">.</span>
          </Link>
          <nav className="desktop-nav" aria-label={c.menu}>
            {links}
          </nav>
          <div className="header-actions">
            <div className="desktop-language">{languages('desktop-language')}</div>
            <Link className="header-cta" href={`/${locale}/contact`} onClick={() => setOpen(false)}>
              {c.start}
              <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
            <button
              ref={trigger}
              className="menu-button"
              aria-expanded={open}
              aria-controls="mobile-navigation"
              aria-label={open ? c.close : c.menu}
              onClick={() => setOpen(!open)}
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        <div ref={panel} id="mobile-navigation" className="mobile-panel" hidden={!open}>
          <nav aria-label={c.menu}>{links}</nav>
          <div className="mobile-panel-bottom">
            {languages('mobile-language')}
            <Link onClick={() => setOpen(false)} href={`/${locale}/contact`}>
              {c.start} ↗
            </Link>
          </div>
        </div>
      </header>
      {open && (
        <div
          className="menu-backdrop"
          onClick={() => {
            setOpen(false);
            trigger.current?.focus();
          }}
          aria-hidden="true"
        />
      )}
    </>
  );
}
