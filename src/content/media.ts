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
  'restaurant-platform': {
    hero: {
      src: '/images/projects/saas_foto_home.png',
      width: 1714,
      height: 937,
      background: '#0c0f11',
      alt: {
        en: 'Restaurant management platform weekly staff schedule',
        pt: 'Escala semanal da equipa na plataforma de gestão de restaurantes',
        fr: 'Planning hebdomadaire de l’équipe dans la plateforme de gestion de restaurants',
        it: 'Turni settimanali del personale nella piattaforma di gestione dei ristoranti',
        de: 'Wöchentlicher Dienstplan in der Restaurantverwaltungsplattform',
      },
    },
    screens: [],
    mobile: [],
  },
};
