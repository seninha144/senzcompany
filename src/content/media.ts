import type { Locale, slugs } from './types';

export type ApprovedImage = {
  src: string;
  width: number;
  height: number;
  alt: Record<Locale, string>;
  background?: string;
};

export type ProjectMedia = {
  hero?: ApprovedImage;
  screens: ApprovedImage[];
  mobile: ApprovedImage[];
};

// Only add images approved for publication. Paths are relative to public/.
export const projectMedia: Record<(typeof slugs)[number], ProjectMedia> = {
  vanta: { screens: [], mobile: [] },
  luzen: { screens: [], mobile: [] },
  afterhours: { screens: [], mobile: [] },
};
