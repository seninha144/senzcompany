import Link from 'next/link';
import { projectMedia } from '@/content/media';
import { ArrowUpRight } from 'lucide-react';
import { navigation, site, slugs, type Content, type Locale } from '@/content';
import { ActionLink, Eyebrow } from './ui';
import { ProjectVisual } from './project-visual';
export function Work({ locale, c, full = false }: { locale: Locale; c: Content; full?: boolean }) {
  return (
    <section className={`work-section container ${full ? 'work-full' : ''}`} id="selected-work">
      {!full && (
        <div className="section-heading">
          <Eyebrow number="01">{c.selected}</Eyebrow>
          <span className="work-count">({String(c.projects.length).padStart(2, '0')})</span>
          <ActionLink href={`/${locale}/work`}>{c.allWork}</ActionLink>
        </div>
      )}
      <div className="projects">
        {c.projects.map((p, i) => (
          <article className={`project-showcase project-${i}`} key={slugs[i]}>
            <Link
              className="project-image-link"
              href={`/${locale}/work/${slugs[i]}`}
              aria-label={`${c.project}: ${p.name}`}
            >
              <ProjectVisual index={i} c={c} locale={locale} />
              <span className="project-open">
                <ArrowUpRight aria-hidden="true" size={24} />
              </span>
            </Link>
            <div className="project-meta">
              <div>
                <h3>
                  <Link href={`/${locale}/work/${slugs[i]}`}>{p.name}</Link>
                </h3>
                {p.subtitle && <p>{p.subtitle}</p>}
                <p>{p.category}</p>
              </div>
              <span className={i === 2 ? 'project-status' : ''}>
                {i === 2 ? c.inDevelopment : p.typeLabel || p.location}
              </span>
            </div>
            {!projectMedia[slugs[i]].hero && <p className="visual-note">{c.visualNote}</p>}
          </article>
        ))}
      </div>
    </section>
  );
}
export { Services, Process, About } from './studio-sections';
export function ContactCTA({ locale, c }: { locale: Locale; c: Content }) {
  return (
    <section className="contact-cta">
      <div className="container">
        <Eyebrow>{c.start}</Eyebrow>
        <Link className="contact-big-link" href={`/${locale}/contact`}>
          <h2>{c.contactTitle}</h2>
          <span className="cta-circle">
            <ArrowUpRight aria-hidden="true" />
          </span>
        </Link>
        <div className="cta-bottom">
          <span>
            {c.location}. {c.worldwide}.
          </span>
          <a href={`mailto:${site.email}`}>{site.email} ↗</a>
        </div>
      </div>
    </section>
  );
}
export function Footer({ locale, c }: { locale: Locale; c: Content }) {
  const socials = Object.entries(site.socials).filter(([, url]) => url);
  return (
    <footer className="footer container">
      <div className="footer-main">
        <div>
          <Link className="wordmark" href={`/${locale}`}>
            senz<span className="brand-dot">.</span>
          </Link>
          <p>{c.footerLine}</p>
        </div>
        <nav aria-label={c.menu}>
          {navigation.map((r, i) => (
            <Link href={`/${locale}/${r}`} key={r}>
              {c.nav[i]}
            </Link>
          ))}
        </nav>
        <div className="footer-contact">
          <a href={`mailto:${site.email}`}>{site.email} ↗</a>
          <span>
            {c.location}
            <br />
            {c.worldwide}
          </span>
          {socials.map(([name, url]) => (
            <a href={url} key={name} target="_blank" rel="noreferrer">
              {name} ↗
            </a>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} SENZ. {c.rights}
        </span>
        <div>
          <Link href={`/${locale}/privacy`}>{c.privacy}</Link>
          <Link href={`/${locale}/terms`}>{c.terms}</Link>
          <a href="#top" aria-label={c.home}>
            ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
