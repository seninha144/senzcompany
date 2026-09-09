import type { Locale, slugs } from './types';

export type ApprovedImage = {
  src: string;
  width: number;
  height: number;
  alt: Record<Locale, string>;
};

export type ProjectMedia = {
  hero?: ApprovedImage;
  screens: ApprovedImage[];
  mobile: ApprovedImage[];
};

// Only add images approved for publication. Paths are relative to public/.
export const projectMedia: Record<(typeof slugs)[number], ProjectMedia> = {
  resisol: { screens: [], mobile: [] },
  'marcos-cell': { screens: [], mobile: [] },
  'restaurant-platform': { screens: [], mobile: [] },
};
