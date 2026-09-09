'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { getContent, isLocale } from '@/content';
export default function NotFound() {
  const segment = usePathname().split('/')[1];
  const locale = isLocale(segment) ? segment : 'en';
  const c = getContent(locale);
  return (
    <main id="main" className="page-intro container">
      <p className="eyebrow">404</p>
      <h1>{c.notFound}</h1>
      <Link className="text-link" href={`/${locale}`}>
        {c.home} ↗
      </Link>
    </main>
  );
}
