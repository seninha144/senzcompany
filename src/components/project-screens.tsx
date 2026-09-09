import Image from 'next/image';
import { projectMedia } from '@/content/media';
import { slugs, type Content, type Locale } from '@/content';

export function ProjectScreens({
  index,
  locale,
  c,
}: {
  index: number;
  locale: Locale;
  c: Content;
}) {
  const media = projectMedia[slugs[index]];
  if (!media.screens.length && !media.mobile.length) return null;
  return (
    <section className="project-screens container">
      <h2>{c.caseLabels[8]}</h2>
      <div className="desktop-screens">
        {media.screens.map((screen) => (
          <Image
            key={screen.src}
            src={screen.src}
            alt={screen.alt[locale]}
            width={screen.width}
            height={screen.height}
            sizes="90vw"
          />
        ))}
      </div>
      <div className="mobile-screens">
        {media.mobile.map((screen) => (
          <Image
            key={screen.src}
            src={screen.src}
            alt={screen.alt[locale]}
            width={screen.width}
            height={screen.height}
            sizes="(max-width: 767px) 40vw, 25vw"
          />
        ))}
      </div>
    </section>
  );
}
