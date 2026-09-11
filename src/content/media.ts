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
  luzen: { screens: [], mobile: [] },
  'marcos-cell': {
    hero: {
      src: '/images/projects/marcos_cell.png',
      width: 1328,
      height: 945,
      background: '#f5f8fc',
      alt: {
        en: 'Marcos Cell website homepage',
        pt: 'Página inicial do website Marcos Cell',
        fr: 'Page d’accueil du site Marcos Cell',
        it: 'Pagina iniziale del sito Marcos Cell',
        de: 'Startseite der Marcos Cell Website',
      },
    },
    screens: [],
    mobile: [],
  },
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
  jarvis: {
    hero: {
      src: '/images/projects/jarvis_project.png',
      width: 1343,
      height: 944,
      background: '#050d0f',
      alt: {
        en: 'J.A.R.V.I.S. voice assistant interface in the READY state',
        pt: 'Interface do assistente de voz J.A.R.V.I.S. no estado READY',
        fr: 'Interface de l’assistant vocal J.A.R.V.I.S. à l’état READY',
        it: 'Interfaccia dell’assistente vocale J.A.R.V.I.S. nello stato READY',
        de: 'Oberfläche des J.A.R.V.I.S. Sprachassistenten im Zustand READY',
      },
    },
    screens: [],
    mobile: [],
  },
};
