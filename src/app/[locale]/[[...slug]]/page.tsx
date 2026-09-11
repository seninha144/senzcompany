import { LuzenCase } from '@/components/luzen-case';
import { luzenMedia } from '@/content/luzen-media';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { getContent, isLocale, locales, navigation, site, slugs } from '@/content';
import { About, ContactCTA, Process, Services, Work } from '@/components/sections';
import { ActionLink, Eyebrow, PageIntro } from '@/components/ui';
import { ProjectVisual } from '@/components/project-visual';
import { ProjectScreens } from '@/components/project-screens';
import { projectMedia } from '@/content/media';
import { ContactForm } from '@/components/contact-form';
import { Capabilities } from '@/components/capabilities';
import { Founder, Principles } from '@/components/studio-sections';

type Params = { locale: string; slug?: string[] };
const pages = [
  '',
  'work',
  'services',
  'about',
  'contact',
  'privacy',
  'terms',
  ...slugs.map((s) => `work/${s}`),
];
export function generateStaticParams() {
  return locales.flatMap((locale) =>
    pages.map((page) => ({ locale, slug: page ? page.split('/') : [] })),
  );
}
export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { locale, slug = [] } = await params;
  if (!isLocale(locale)) notFound();
  const c = getContent(locale);
  const path = slug.join('/');
  if (!pages.includes(path)) notFound();
  const projectIndex =
    slug[0] === 'work' && slug[1] ? slugs.indexOf(slug[1] as (typeof slugs)[number]) : -1;
  const label =
    projectIndex >= 0
      ? c.projects[projectIndex].name
      : path === 'privacy'
        ? c.privacy
        : path === 'terms'
          ? c.terms
          : c.nav[navigation.indexOf(path)];
  const title =
    projectIndex === 0
      ? `${label} ? ${c.projects[0].category} | SENZ`
      : label
        ? `${label} — SENZ`
        : `SENZ — ${c.services
            .slice(0, 3)
            .map((s) => s.name)
            .join(', ')}`;
  const description =
    projectIndex >= 0
      ? c.projects[projectIndex].description
      : path === 'services'
        ? c.servicesIntro
        : path === 'about'
          ? c.aboutText
          : path === 'contact'
            ? c.contactIntro
            : c.seo;
  const suffix = path ? `/${path}` : '';
  const url = `${site.url}/${locale}${suffix}`;
  const socialImage =
    projectIndex === 0 && luzenMedia.cover ? luzenMedia.cover : `/${locale}/opengraph-image`;
  return {
    metadataBase: new URL(site.url),
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        ...Object.fromEntries(locales.map((l) => [l, `${site.url}/${l}${suffix}`])),
        'x-default': `${site.url}/en${suffix}`,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'SENZ',
      type: 'website',
      locale,
      alternateLocale: locales.filter((l) => l !== locale),
      images: [{ url: socialImage, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [socialImage],
    },
    robots: { index: true, follow: true },
  };
}
export default async function Page({ params }: { params: Promise<Params> }) {
  const { locale, slug = [] } = await params;
  if (!isLocale(locale)) notFound();
  const c = getContent(locale);
  const path = slug.join('/');
  if (!pages.includes(path)) notFound();
  if (path === '')
    return (
      <main id="main">
        <section className="hero container">
          <div className="hero-topline">
            <Eyebrow>
              <span className="status-dot" />
              {c.eyebrow}
            </Eyebrow>
            <span className="hero-location">
              {c.location}
              <span>{c.worldwide} ↗</span>
            </span>
          </div>
          <h1>
            <span>{c.headline[0]}</span>
            <span className="hero-second">
              {c.headline[1]}
              <span className="hero-period" aria-hidden="true" />
            </span>
          </h1>
          <div className="hero-bottom">
            <a className="scroll-cue" href="#selected-work" aria-label={c.viewWork}>
              <ArrowDown size={24} />
            </a>
            <div className="hero-description">
              <p>{c.intro}</p>
              <div className="hero-links">
                <ActionLink solid href={`/${locale}/contact`}>
                  {c.start}
                </ActionLink>
                <ActionLink href="#selected-work">{c.viewWork}</ActionLink>
              </div>
            </div>
            <span className="hero-index mono">SENZ — 001</span>
          </div>
        </section>
        <Work locale={locale} c={c} />
        <Services locale={locale} c={c} />
        <About locale={locale} c={c} />
        <ContactCTA locale={locale} c={c} />
      </main>
    );
  if (path === 'work')
    return (
      <main id="main">
        <PageIntro eyebrow={c.nav[0]} title={c.selected} text={c.workIntro} />
        <Work locale={locale} c={c} full />
        <ContactCTA locale={locale} c={c} />
      </main>
    );
  if (path === 'services')
    return (
      <main id="main">
        <PageIntro eyebrow={c.nav[1]} title={c.servicesTitle} text={c.servicesIntro} />
        <Services locale={locale} c={c} full />
        <Process c={c} />
        <ContactCTA locale={locale} c={c} />
      </main>
    );
  if (path === 'about')
    return (
      <main id="main">
        <PageIntro eyebrow={c.nav[2]} title={c.aboutTitle} text={c.aboutText} />
        <Founder locale={locale} c={c} />
        <Principles c={c} />
        <Capabilities content={c.capabilities} />
        <Process c={c} />
        <ContactCTA locale={locale} c={c} />
      </main>
    );
  if (path === 'contact')
    return (
      <main id="main" className="contact-page container">
        <section className="contact-intro">
          <Eyebrow>{c.nav[3]}</Eyebrow>
          <h1>{c.contactTitle}</h1>
          <p>{c.contactIntro}</p>
          <div className="contact-email">
            <span>{c.emailLabel}</span>
            <a className="text-link" href={`mailto:${site.email}`}>
              {site.email}
              <ArrowUpRight size={16} />
            </a>
          </div>
        </section>
        <ContactForm
          locale={locale}
          c={{ form: c.form, services: c.services, privacy: c.privacy }}
        />
      </main>
    );
  if (path === 'privacy' || path === 'terms')
    return (
      <main id="main">
        <PageIntro eyebrow={c.legalNote} title={path === 'privacy' ? c.privacy : c.terms} />
        <article className="legal-copy container">
          {(path === 'privacy' ? c.privacyText : c.termsText).map((p) => (
            <p key={p}>{p}</p>
          ))}
          <a className="text-link" href={`mailto:${site.email}`}>
            {site.email} ↗
          </a>
        </article>
      </main>
    );
  const i = slugs.indexOf(slug[1] as (typeof slugs)[number]);
  if (i < 0) notFound();
  if (i === 0) return <LuzenCase locale={locale} c={c} />;
  const p = c.projects[i];
  const next = (i + 1) % slugs.length;
  return (
    <main id="main">
      <section className="case-intro container">
        <Link className="case-back text-link" href={`/${locale}/work`}>
          ← {c.nav[0]}
        </Link>
        <Eyebrow>
          {i === 2 ? `${c.independentProduct} / ${c.inDevelopment}` : p.typeLabel || p.category}
        </Eyebrow>
        <h1>{p.name}</h1>
        {p.subtitle && <p className="case-subtitle">{p.subtitle}</p>}
        <p className="intro-copy">{p.description}</p>
        <dl className="case-metadata">
          {[
            [c.caseLabels[5], p.typeLabel || (i === 2 ? c.independentProduct : p.category)],
            [c.caseLabels[6], p.location],
            [c.caseLabels[7], p.category],
          ]
            .filter(([, value]) => Boolean(value))
            .map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
        </dl>
      </section>
      <div className="container">
        <ProjectVisual index={i} c={c} locale={locale} detail />
        {!projectMedia[slugs[i]].hero && <p className="visual-note">{c.visualNote}</p>}
      </div>
      <section className="case-story container">
        {[
          ...[p.description, p.challenge, p.approach, p.solution].map((text, index) => ({
            title: c.caseLabels[index],
            text,
          })),
          ...(p.sections || []),
        ].map(({ title, text }, index) => (
          <article key={index}>
            <Eyebrow number={String(index + 1).padStart(2, '0')}>{title}</Eyebrow>
            <p>{text}</p>
          </article>
        ))}
      </section>
      <ProjectScreens index={i} locale={locale} c={c} />
      <section className="case-details container">
        <div>
          <Eyebrow>{c.caseLabels[9]}</Eyebrow>
          <ul>
            {p.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </div>
        <div>
          <Eyebrow>{c.caseLabels[4]}</Eyebrow>
          <p>{p.outcome}</p>
        </div>
      </section>
      <section className="next-project container">
        <Eyebrow>{c.nextProject}</Eyebrow>
        <Link href={`/${locale}/work/${slugs[next]}`}>
          <h2>{c.projects[next].name}</h2>
          <ArrowUpRight aria-hidden="true" />
        </Link>
      </section>
      <ContactCTA locale={locale} c={c} />
    </main>
  );
}
