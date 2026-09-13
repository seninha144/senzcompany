import type { Locale, Project } from './types';

type VantaCopy = {
  project: Project;
  title: string;
  seo: string;
  preview: string;
  pause: string;
  play: string;
};
export const vanta: Record<Locale, VantaCopy> = {
  en: {
    title: 'VANTA — Fashion Concept | SENZ',
    seo: 'VANTA is a fictional fashion concept by SENZ exploring immersive e-commerce, motion and editorial web design.',
    preview: 'VANTA fashion concept — video preview',
    pause: 'Pause video',
    play: 'Play video',
    project: {
      name: 'VANTA',
      category: 'Fashion / E-commerce',
      typeLabel: 'Concept Project',
      description:
        'An experimental fashion experience built around motion, editorial layouts and digital storytelling.',
      challenge:
        'VANTA is a fictional fashion concept created by SENZ to explore a more immersive approach to digital fashion and e-commerce, combining editorial layouts, motion and interactive product storytelling.',
      approach:
        'Art direction and editorial composition establish the visual rhythm. Typography, imagery and motion shape the way the fashion concept is presented.',
      solution:
        'Frontend development brings together responsive layouts, motion design and interaction in an experimental digital experience across screen sizes.',
      outcome:
        'A fictional fashion brand and independent concept by SENZ, presented through the project video. The work demonstrates a creative approach to fashion e-commerce and digital storytelling.',
      highlights: [
        'Art direction',
        'Frontend development',
        'Motion design',
        'Interactive experience',
        'Editorial layout',
        'Responsive design',
      ],
    },
  },
  pt: {
    title: 'VANTA — Conceito de moda | SENZ',
    seo: 'VANTA é um conceito de moda fictício da SENZ que explora e-commerce imersivo, movimento e web design editorial.',
    preview: 'Conceito de moda VANTA — apresentação em vídeo',
    pause: 'Pausar vídeo',
    play: 'Reproduzir vídeo',
    project: {
      name: 'VANTA',
      category: 'Moda / E-commerce',
      typeLabel: 'Projeto conceitual',
      description:
        'Uma experiência de moda experimental construída em torno do movimento, de layouts editoriais e de narrativas digitais.',
      challenge:
        'VANTA é um conceito de moda fictício criado pela SENZ para explorar uma abordagem mais imersiva à moda digital e ao e-commerce, combinando layouts editoriais, movimento e apresentação interativa de produtos.',
      approach:
        'A direção de arte e a composição editorial definem o ritmo visual. Tipografia, imagens e movimento dão forma à apresentação do conceito de moda.',
      solution:
        'O desenvolvimento frontend reúne layouts responsivos, motion design e interação numa experiência digital experimental adaptada a diferentes ecrãs.',
      outcome:
        'Uma marca de moda fictícia e um conceito independente da SENZ, apresentados através do vídeo do projeto. O trabalho demonstra uma abordagem criativa ao e-commerce de moda e à narrativa digital.',
      highlights: [
        'Direção de arte',
        'Desenvolvimento frontend',
        'Motion design',
        'Experiência interativa',
        'Layout editorial',
        'Design responsivo',
      ],
    },
  },
  fr: {
    title: 'VANTA — Concept de mode | SENZ',
    seo: 'VANTA est un concept de mode fictif de SENZ explorant le e-commerce immersif, le mouvement et le web design éditorial.',
    preview: 'Concept de mode VANTA — aperçu vidéo',
    pause: 'Mettre en pause',
    play: 'Lire la vidéo',
    project: {
      name: 'VANTA',
      category: 'Mode / E-commerce',
      typeLabel: 'Projet conceptuel',
      description:
        'Une expérience de mode expérimentale articulée autour du mouvement, de compositions éditoriales et de récits numériques.',
      challenge:
        'VANTA est un concept de mode fictif créé par SENZ pour explorer une approche plus immersive de la mode numérique et du e-commerce, associant compositions éditoriales, mouvement et présentation interactive des produits.',
      approach:
        'La direction artistique et la composition éditoriale établissent le rythme visuel. Typographie, images et mouvement structurent la présentation du concept de mode.',
      solution:
        'Le développement frontend associe mises en page adaptatives, motion design et interaction dans une expérience numérique expérimentale pensée pour différentes tailles d’écran.',
      outcome:
        'Une marque de mode fictive et un concept indépendant de SENZ, présentés dans la vidéo du projet. Ce travail démontre une approche créative du e-commerce de mode et du récit numérique.',
      highlights: [
        'Direction artistique',
        'Développement frontend',
        'Motion design',
        'Expérience interactive',
        'Composition éditoriale',
        'Design adaptatif',
      ],
    },
  },
  it: {
    title: 'VANTA — Concept di moda | SENZ',
    seo: 'VANTA è un concept di moda fittizio di SENZ che esplora e-commerce immersivo, movimento e web design editoriale.',
    preview: 'Concept di moda VANTA — anteprima video',
    pause: 'Pausa video',
    play: 'Riproduci video',
    project: {
      name: 'VANTA',
      category: 'Moda / E-commerce',
      typeLabel: 'Progetto concettuale',
      description:
        'Un’esperienza di moda sperimentale costruita attorno al movimento, ai layout editoriali e alla narrazione digitale.',
      challenge:
        'VANTA è un concept di moda fittizio creato da SENZ per esplorare un approccio più immersivo alla moda digitale e all’e-commerce, unendo layout editoriali, movimento e presentazione interattiva dei prodotti.',
      approach:
        'La direzione artistica e la composizione editoriale definiscono il ritmo visivo. Tipografia, immagini e movimento danno forma alla presentazione del concept di moda.',
      solution:
        'Lo sviluppo frontend unisce layout responsive, motion design e interazione in un’esperienza digitale sperimentale adattata a diverse dimensioni dello schermo.',
      outcome:
        'Un marchio di moda fittizio e un concept indipendente di SENZ, presentati nel video del progetto. Il lavoro dimostra un approccio creativo all’e-commerce di moda e alla narrazione digitale.',
      highlights: [
        'Direzione artistica',
        'Sviluppo frontend',
        'Motion design',
        'Esperienza interattiva',
        'Layout editoriale',
        'Design responsive',
      ],
    },
  },
  de: {
    title: 'VANTA — Modekonzept | SENZ',
    seo: 'VANTA ist ein fiktives Modekonzept von SENZ, das immersiven E-Commerce, Bewegung und redaktionelles Webdesign erkundet.',
    preview: 'VANTA Modekonzept — Videovorschau',
    pause: 'Video pausieren',
    play: 'Video abspielen',
    project: {
      name: 'VANTA',
      category: 'Mode / E-Commerce',
      typeLabel: 'Konzeptprojekt',
      description:
        'Ein experimentelles Modeerlebnis mit Bewegung, redaktionellen Layouts und digitalem Storytelling.',
      challenge:
        'VANTA ist ein fiktives Modekonzept von SENZ, das einen immersiveren Ansatz für digitale Mode und E-Commerce erkundet und redaktionelle Layouts, Bewegung und interaktive Produktpräsentation verbindet.',
      approach:
        'Art Direction und redaktionelle Gestaltung bestimmen den visuellen Rhythmus. Typografie, Bilder und Bewegung prägen die Präsentation des Modekonzepts.',
      solution:
        'Die Frontend-Entwicklung verbindet responsive Layouts, Motion Design und Interaktion zu einem experimentellen digitalen Erlebnis für verschiedene Bildschirmgrößen.',
      outcome:
        'Eine fiktive Modemarke und ein unabhängiges Konzept von SENZ, vorgestellt im Projektvideo. Die Arbeit zeigt einen kreativen Ansatz für Mode im E-Commerce und digitales Storytelling.',
      highlights: [
        'Art Direction',
        'Frontend-Entwicklung',
        'Motion Design',
        'Interaktives Erlebnis',
        'Redaktionelles Layout',
        'Responsives Design',
      ],
    },
  },
};
