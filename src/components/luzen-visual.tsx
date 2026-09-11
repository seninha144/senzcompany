import Image from 'next/image';
import { luzenMedia } from '@/content/luzen-media';
import { luzen } from '@/content/luzen';
import type { Locale } from '@/content';

export function LuzenVisual({ locale, detail = false }: { locale: Locale; detail?: boolean }) {
  const src = detail ? luzenMedia.hero || luzenMedia.cover : luzenMedia.cover || luzenMedia.hero;
  return (
    <div className={`project-visual luzen-cover ${detail ? 'detail-visual' : ''}`}>
      {src ? (
        <Image
          src={src}
          alt={`LUZEN — ${luzen[locale].project.category}`}
          fill
          sizes="90vw"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      ) : (
        <div className="luzen-placeholder">
          <span>LUZEN</span>
          <p>{luzen[locale].mediaNote}</p>
        </div>
      )}
    </div>
  );
}
