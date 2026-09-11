import type { Locale } from './types';

// Add an approved founder photograph under public/ when supplied.
// This configuration is independent from the portfolio media.
export const studioMedia: {
  portrait: { src: string; width: number; height: number; alt: Record<Locale, string> } | null;
} = {
  portrait: {
    src: '/images/studio/enzo_foto2.jpeg',
    width: 1316,
    height: 1600,
    alt: {
      en: 'Enzo Sena, founder of SENZ',
      pt: 'Enzo Sena, fundador da SENZ',
      fr: 'Enzo Sena, fondateur de SENZ',
      it: 'Enzo Sena, fondatore di SENZ',
      de: 'Enzo Sena, Gründer von SENZ',
    },
  },
};
