import { AfterhoursVisual } from './afterhours-visual';
import { VantaVisual } from './vanta-visual';
import { LuzenVisual } from './luzen-visual';
import type { Content } from '@/content';
import { slugs, type Locale } from '@/content/types';

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
  if (slugs[index] === 'afterhours') return <AfterhoursVisual locale={locale} />;
  return null;
}
