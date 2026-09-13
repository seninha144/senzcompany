import type { Locale } from '@/content/types';
import { vanta } from '@/content/vanta';
import { ProjectLoop } from './project-loop';

export function VantaVisual({ locale }: { locale: Locale }) {
  const copy = vanta[locale];
  return (
    <ProjectLoop
      className="project-visual vanta-loop"
      src="/projects/vanta/vanta_video_senz.mp4"
      poster="/projects/vanta/preview-poster.webp"
      label={copy.preview}
      pauseLabel={copy.pause}
      playLabel={copy.play}
    />
  );
}
