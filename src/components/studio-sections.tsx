import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { site, type Content, type Locale } from '@/content';
import { studioMedia } from '@/content/studio-media';
import { ActionLink, Eyebrow } from './ui';
import { ServiceExplorer } from './service-explorer';

export function Services({
  locale,
  c,
  full = false,
}: {
  locale: Locale;
  c: Content;
  full?: boolean;
}) {
  return (
    <section className={`studio-services ${full ? 'studio-services-full' : ''}`}>
      <div className="container">
        {!full && (
          <div className="studio-services-intro">
            <div>
              <Eyebrow>{c.nav[1]}</Eyebrow>
              <h2>{c.servicesTitle}</h2>
            </div>
            <div>
              <p>{c.servicesIntro}</p>
              <ActionLink href={`/${locale}/services`}>{c.nav[1]}</ActionLink>
            </div>
          </div>
        )}
        <ServiceExplorer services={c.services} label={c.nav[1]} />
      </div>
    </section>
  );
}

export function Process({ c }: { c: Content }) {
  return (
    <section className="studio-process container" aria-labelledby="studio-process-title">
      <div className="studio-process-intro">
        <Eyebrow>{c.studio.processLabel}</Eyebrow>
        <h2 id="studio-process-title">{c.processTitle}</h2>
      </div>
      <ol className="studio-path">
        {c.process.map((step) => (
          <li key={step.name}>
            <span className="studio-path-node" aria-hidden="true" />
            <div>
              <h3>{step.name}</h3>
              <p>{step.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function About({ locale, c }: { locale: Locale; c: Content }) {
  return (
    <section className="studio-about container">
      <Eyebrow>{c.nav[2]}</Eyebrow>
      <h2>{c.aboutTitle.replace('\n', ' ')}</h2>
      <div className="studio-about-body">
        <div className="studio-byline">
          <span>{site.founder}</span>
          <span>{c.founder}</span>
          <ActionLink href={`/${locale}/about`}>{c.aboutLink}</ActionLink>
        </div>
        <div>
          <p className="studio-about-statement">{c.studio.statement}</p>
          <p>{c.aboutText}</p>
        </div>
      </div>
    </section>
  );
}

export function Founder({ locale, c }: { locale: Locale; c: Content }) {
  const portrait = studioMedia.portrait;
  return (
    <section className="studio-founder container">
      <figure className="studio-portrait">
        <div className="studio-portrait-surface">
          {portrait ? (
            <Image
              src={portrait.src}
              alt={portrait.alt[locale]}
              width={portrait.width}
              height={portrait.height}
              sizes="(max-width: 767px) 90vw, 40vw"
            />
          ) : (
            <div className="studio-portrait-placeholder" aria-hidden="true">
              <span>es.</span>
            </div>
          )}
        </div>
        <figcaption>
          <span>{site.founder}</span>
          <span>{c.founder}</span>
        </figcaption>
      </figure>
      <div className="studio-founder-copy">
        <p className="studio-founder-statement">{c.studio.statement}</p>
        <p>{c.aboutSecond}</p>
        <a className="text-link" href={`mailto:${site.email}`}>
          {site.email}
          <ArrowUpRight size={17} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}

export function Principles({ c }: { c: Content }) {
  return (
    <section className="studio-values container" aria-labelledby="studio-values-title">
      <h2 id="studio-values-title">{c.studio.principlesTitle}</h2>
      <div className="studio-values-composition">
        {c.principles.map((principle) => (
          <article key={principle.name}>
            <h3>{principle.name}</h3>
            <p>{principle.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
