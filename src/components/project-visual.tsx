import { VantaVisual } from './vanta-visual';
import { LuzenVisual } from './luzen-visual';
import type { Content } from '@/content';
import Image from 'next/image';
import { slugs, type Locale } from '@/content/types';
import { projectMedia } from '@/content/media';

// Each project uses its approved media and the shared preview components.
export function ProjectVisual({
  index,
  detail = false,
  locale = 'en',
}: {
  index: number;
  c: Content;
  detail?: boolean;
  locale?: Locale;
}) {
  if (slugs[index] === 'vanta') return <VantaVisual locale={locale} />;
  if (slugs[index] === 'luzen') return <LuzenVisual locale={locale} detail={detail} />;
  const media = projectMedia[slugs[index]].hero;
  if (media)
    return (
      <div
        className={`project-visual ${detail ? 'detail-visual' : ''}`}
        style={{ background: media.background }}
      >
        <Image
          src={media.src}
          alt={media.alt[locale]}
          fill
          sizes={detail ? '(max-width: 767px) 100vw, 90vw' : '(max-width: 767px) 100vw, 45vw'}
          style={{ objectFit: 'contain' }}
          preload={detail}
        />
      </div>
    );
  return null;
}
