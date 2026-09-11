import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { Content, Locale } from '@/content';
import { luzen } from '@/content/luzen';
import { luzenMedia as media } from '@/content/luzen-media';
import { LuzenVisual } from './luzen-visual';
import { ProjectLoop } from './project-loop';
import { ContactCTA } from './sections';
import { Eyebrow } from './ui';

export function LuzenCase({ locale, c }: { locale: Locale; c: Content }) {
  const copy = luzen[locale];
  const p = copy.project;
  return (
    <main id="main" className="luzen-case">
      <section className="case-intro container">
        <Link className="case-back text-link" href={`/${locale}/work`}>
          ← {c.nav[0]}
        </Link>
        <Eyebrow>{p.typeLabel}</Eyebrow>
        <h1>LUZEN</h1>
        <p className="case-subtitle">{p.category}</p>
        <p className="intro-copy">{p.description}</p>
      </section>
      <div className="container">
        <LuzenVisual locale={locale} detail />
      </div>
      <section className="luzen-editorial container">
        <h2>{copy.labels[0]}</h2>
        <p>{p.challenge}</p>
      </section>
      {media.video && media.poster && (
        <section className="container" aria-label={copy.preview}>
          <ProjectLoop
            src={media.video}
            poster={media.poster}
            label={copy.preview}
            pauseLabel={copy.pause}
            playLabel={copy.play}
          />
        </section>
      )}
      <section className="luzen-editorial container">
        <h2>{copy.labels[1]}</h2>
        <p>{p.approach}</p>
      </section>
      {media.detail && (
        <div className="luzen-detail container">
          <Image src={media.detail} alt={`LUZEN — ${copy.labels[1]}`} fill sizes="90vw" />
        </div>
      )}
      <section className="luzen-editorial container">
        <h2>{copy.labels[2]}</h2>
        <p>{p.solution}</p>
      </section>
      <section className="luzen-responsive container">
        {media.mobile && (
          <div className="luzen-mobile">
            <Image
              src={media.mobile}
              alt={`LUZEN — ${p.sections![0].title}`}
              fill
              sizes="(max-width: 767px) 80vw, 35vw"
            />
          </div>
        )}
        <div>
          <h2>{p.sections![0].title}</h2>
          <p>{p.sections![0].text}</p>
        </div>
      </section>
      {p.sections?.slice(1).map((section) => (
        <section className="luzen-editorial container" key={section.title}>
          <h2>{section.title}</h2>
          <p>{section.text}</p>
        </section>
      ))}
      <section className="luzen-editorial container">
        <h2>{copy.labels[3]}</h2>
        <p>{p.outcome}</p>
      </section>
      <section className="next-project container">
        <Eyebrow>{c.nextProject}</Eyebrow>
        <Link href={`/${locale}/work/marcos-cell`}>
          <h2>{c.projects[1].name}</h2>
          <ArrowUpRight aria-hidden="true" />
        </Link>
      </section>
      <ContactCTA locale={locale} c={c} />
    </main>
  );
}
