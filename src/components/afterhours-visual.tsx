import type { Locale } from '@/content/types';
import { vanta } from '@/content/vanta';
import { afterhoursMedia } from '@/content/afterhours-media';
import { ProjectLoop } from './project-loop';

export function AfterhoursVisual({ locale }: { locale: Locale }) {
  return (
    <ProjectLoop
      className="project-visual afterhours-loop"
      src={afterhoursMedia.video}
      poster={afterhoursMedia.cover || ''}
      label="AFTERHOURS — fictional barbershop concept by SENZ"
      pauseLabel={vanta[locale].pause}
      playLabel={vanta[locale].play}
    />
  );
}
