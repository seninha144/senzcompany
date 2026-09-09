import type { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { getContent, isLocale, locales, site } from '@/content';
import { Header } from '@/components/header';
import { Footer } from '@/components/sections';
import '../globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = { metadataBase: new URL(site.url) };

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const c = getContent(locale);
  return (
    <html lang={locale}>
      <body id="top">
        <Header
          locale={locale}
          c={{
            nav: c.nav,
            start: c.start,
            language: c.language,
            menu: c.menu,
            close: c.close,
            skip: c.skip,
          }}
        />
        {children}
        <Footer locale={locale} c={c} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: site.name,
              url: site.url,
              email: site.email,
              description: c.seo,
              founder: { '@type': 'Person', name: site.founder },
              knowsLanguage: locales,
            }).replace(/</g, '\\u003c'),
          }}
        />
      </body>
    </html>
  );
}
