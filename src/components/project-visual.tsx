import type { Content } from '@/content';
import Image from 'next/image';
import { slugs, type Locale } from '@/content/types';
import { projectMedia } from '@/content/media';

// Deliberately illustrative artwork, not unverified client screenshots.
// Replace this component with approved project assets in next/image when supplied.
export function ProjectVisual({
  index,
  c,
  detail = false,
  locale = 'en',
}: {
  index: number;
  c: Content;
  detail?: boolean;
  locale?: Locale;
}) {
  const p = c.projects[index];
  const media = projectMedia[slugs[index]].hero;
  if (media)
    return (
      <div className={`project-visual ${detail ? 'detail-visual' : ''}`}>
        <Image
          src={media.src}
          alt={media.alt[locale]}
          fill
          sizes={
            index === 0 || detail
              ? '(max-width: 767px) 100vw, 90vw'
              : '(max-width: 767px) 100vw, 45vw'
          }
          style={{ objectFit: 'cover' }}
          preload={detail}
        />
      </div>
    );
  return (
    <div
      className={`project-visual visual-${index} ${detail ? 'detail-visual' : ''}`}
      role="img"
      aria-label={`${p.name} — ${c.visualNote}`}
    >
      {index === 0 ? (
        <>
          <div className="architecture">
            <div className="building building-back" />
            <div className="building building-main">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className="building building-side" />
            <div className="building-shadow" />
          </div>
          <div className="resisol-type">RESISOL</div>
          <div className="visual-bottom">
            <span>{p.location}</span>
            <span>{p.category}</span>
          </div>
        </>
      ) : index === 1 ? (
        <>
          <div className="cell-brand">
            MARCOS
            <br />
            CELL<span>↗</span>
          </div>
          <div className="phone phone-back">
            <div className="camera-cluster">
              <i />
              <i />
              <i />
            </div>
          </div>
          <div className="phone phone-front">
            <div className="phone-notch" />
            <div className="phone-screen-mark">
              M<span>C</span>
            </div>
            <div className="phone-screen-line" />
            <div className="phone-screen-line short" />
          </div>
          <div className="visual-bottom">
            <span>{p.location}</span>
            <span>{p.category}</span>
          </div>
        </>
      ) : (
        <>
          <div className="platform-grid" />
          <div className="platform-caption">
            <span className="status-dot" />
            {c.inDevelopment}
          </div>
          <div className="schedule-art">
            <div className="schedule-sidebar">
              <i />
              <i />
              <i />
              <i />
            </div>
            <div className="schedule-content">
              <div className="schedule-head">
                {p.highlights[1]}
                <span>↗</span>
              </div>
              <div className="schedule-columns">
                {Array.from({ length: 5 }, (_, i) => (
                  <div key={i}>
                    <span>0{i + 1}</span>
                    {Array.from({ length: 3 }, (_, j) => (
                      <b key={j} className={`shift shift-${(i + j) % 3}`} />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="visual-bottom">
            <span>{c.independentProduct}</span>
            <span>01 — 03</span>
          </div>
        </>
      )}
    </div>
  );
}
