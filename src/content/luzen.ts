import type { Locale, Project } from './types';

type LuzenCopy = {
  project: Project;
  labels: string[];
  mediaNote: string;
  preview: string;
  pause: string;
  play: string;
};
export const luzen: Record<Locale, LuzenCopy> = {
  en: {
    project: {
      name: 'LUZEN',
      category: 'Jewelry · E-commerce Experience',
      typeLabel: 'Concept / Independent Project',
      description:
        'A refined digital concept for a contemporary jewelry brand, focused on product presentation, visual identity and a premium shopping journey.',
      challenge:
        'LUZEN explores how craftsmanship, detail and exclusivity can translate into a contemporary digital experience.',
      approach:
        'The visual direction puts the jewelry first: generous imagery, precise typography and considered whitespace. An editorial rhythm gives each piece room to be seen.',
      solution:
        'The proposed journey connects collection discovery with product detail and clear calls to action. Simplified navigation and mobile browsing guide the concept; a live store and checkout are not confirmed.',
      outcome:
        'An independent design exploration for a premium jewelry brand. Project media and implementation details will complete this presentation as they become available.',
      highlights: [],
      sections: [
        {
          title: 'Across devices',
          text: 'The design intention is a consistent experience across desktop, tablet and mobile, preserving product focus while adapting the hierarchy and spacing to each screen.',
        },
      ],
    },
    labels: ['Project overview', 'Visual direction', 'Shopping journey', 'Current status'],
    mediaNote: 'Project imagery to follow',
    preview: 'LUZEN website preview',
    pause: 'Pause preview',
    play: 'Play preview',
  },
  pt: {
    project: {
      name: 'LUZEN',
      category: 'Joalharia · Experiência de e-commerce',
      typeLabel: 'Conceito / Projeto independente',
      description:
        'Um conceito digital refinado para uma marca de joalharia contemporânea, centrado na apresentação do produto, na identidade visual e numa experiência de compra premium.',
      challenge:
        'LUZEN explora como o trabalho artesanal, o detalhe e a exclusividade se podem traduzir numa experiência digital contemporânea.',
      approach:
        'A direção visual coloca a joia em primeiro plano: imagens generosas, tipografia precisa e espaço em branco ponderado. O ritmo editorial dá a cada peça espaço para ser apreciada.',
      solution:
        'O percurso proposto liga a descoberta de coleções ao detalhe do produto e a chamadas à ação claras. A navegação simples e a utilização em mobile orientam o conceito; uma loja em funcionamento e o checkout não estão confirmados.',
      outcome:
        'Uma exploração de design independente para uma marca de joalharia premium. As imagens e os detalhes de implementação irão completar esta apresentação quando estiverem disponíveis.',
      highlights: [],
      sections: [
        {
          title: 'Entre dispositivos',
          text: 'A intenção é criar uma experiência coerente em desktop, tablet e mobile, mantendo o foco no produto e adaptando a hierarquia e os espaçamentos a cada ecrã.',
        },
      ],
    },
    labels: ['O conceito', 'Direção visual', 'Percurso de compra', 'Estado atual'],
    mediaNote: 'Imagens do projeto em breve',
    preview: 'Pré-visualização do website LUZEN',
    pause: 'Pausar pré-visualização',
    play: 'Reproduzir pré-visualização',
  },
  fr: {
    project: {
      name: 'LUZEN',
      category: 'Joaillerie · Expérience e-commerce',
      typeLabel: 'Concept / Projet indépendant',
      description:
        'Un concept digital raffiné pour une marque de joaillerie contemporaine, centré sur la présentation des pièces, l’identité visuelle et un parcours d’achat haut de gamme.',
      challenge:
        'LUZEN explore la traduction du savoir-faire, du détail et de l’exclusivité dans une expérience digitale contemporaine.',
      approach:
        'La direction visuelle donne la priorité au bijou : images généreuses, typographie précise et espaces maîtrisés. Le rythme éditorial laisse chaque pièce s’exprimer.',
      solution:
        'Le parcours envisagé relie la découverte des collections aux fiches produits et à des appels à l’action clairs. Une navigation simple et la consultation mobile guident le concept ; une boutique opérationnelle et le paiement ne sont pas confirmés.',
      outcome:
        'Une exploration de design indépendante pour une marque de joaillerie haut de gamme. Les visuels et les détails de réalisation compléteront cette présentation lorsqu’ils seront disponibles.',
      highlights: [],
      sections: [
        {
          title: 'Sur chaque écran',
          text: 'L’intention est une expérience cohérente sur ordinateur, tablette et mobile, qui garde le produit au centre tout en adaptant la hiérarchie et les espacements.',
        },
      ],
    },
    labels: ['Le concept', 'Direction visuelle', 'Parcours d’achat', 'État actuel'],
    mediaNote: 'Visuels du projet à venir',
    preview: 'Aperçu du site LUZEN',
    pause: 'Mettre l’aperçu en pause',
    play: 'Lire l’aperçu',
  },
  it: {
    project: {
      name: 'LUZEN',
      category: 'Gioielleria · Esperienza e-commerce',
      typeLabel: 'Concept / Progetto indipendente',
      description:
        'Un concept digitale raffinato per un marchio di gioielleria contemporanea, incentrato sulla presentazione del prodotto, sull’identità visiva e su un percorso di acquisto premium.',
      challenge:
        'LUZEN esplora come artigianalità, cura del dettaglio ed esclusività possano tradursi in un’esperienza digitale contemporanea.',
      approach:
        'La direzione visiva mette al centro il gioiello: immagini ampie, tipografia precisa e spazi ben calibrati. Il ritmo editoriale dà a ogni pezzo lo spazio per esprimersi.',
      solution:
        'Il percorso proposto collega la scoperta delle collezioni al dettaglio del prodotto e a inviti all’azione chiari. Navigazione semplice e consultazione mobile guidano il concept; un negozio operativo e il checkout non sono confermati.',
      outcome:
        'Un’esplorazione di design indipendente per un marchio di gioielleria premium. Immagini e dettagli di implementazione completeranno la presentazione quando saranno disponibili.',
      highlights: [],
      sections: [
        {
          title: 'Su ogni dispositivo',
          text: 'L’intento è un’esperienza coerente su desktop, tablet e mobile, mantenendo il prodotto al centro e adattando gerarchia e spaziature a ogni schermo.',
        },
      ],
    },
    labels: ['Il concept', 'Direzione visiva', 'Percorso di acquisto', 'Stato attuale'],
    mediaNote: 'Immagini del progetto in arrivo',
    preview: 'Anteprima del sito LUZEN',
    pause: 'Metti in pausa l’anteprima',
    play: 'Riproduci l’anteprima',
  },
  de: {
    project: {
      name: 'LUZEN',
      category: 'Schmuck · E-Commerce-Erlebnis',
      typeLabel: 'Konzept / Unabhängiges Projekt',
      description:
        'Ein elegantes digitales Konzept für eine zeitgenössische Schmuckmarke, mit Fokus auf Produktpräsentation, visuelle Identität und ein hochwertiges Einkaufserlebnis.',
      challenge:
        'LUZEN untersucht, wie sich Handwerkskunst, Detailgenauigkeit und Exklusivität in ein zeitgemäßes digitales Erlebnis übersetzen lassen.',
      approach:
        'Die visuelle Richtung stellt den Schmuck in den Mittelpunkt: großzügige Bilder, präzise Typografie und bewusst gesetzte Freiräume. Ein redaktioneller Rhythmus gibt jedem Stück Raum.',
      solution:
        'Der geplante Weg verbindet das Entdecken der Kollektionen mit Produktdetails und klaren Handlungsaufforderungen. Einfache Navigation und mobiles Stöbern leiten das Konzept; ein betriebsbereiter Shop und Checkout sind nicht bestätigt.',
      outcome:
        'Eine unabhängige Designstudie für eine hochwertige Schmuckmarke. Projektbilder und Angaben zur Umsetzung ergänzen diese Präsentation, sobald sie vorliegen.',
      highlights: [],
      sections: [
        {
          title: 'Auf jedem Gerät',
          text: 'Angestrebt wird ein stimmiges Erlebnis auf Desktop, Tablet und Smartphone. Das Produkt bleibt im Mittelpunkt, während Hierarchie und Abstände an den Bildschirm angepasst werden.',
        },
      ],
    },
    labels: ['Das Konzept', 'Visuelle Richtung', 'Einkaufserlebnis', 'Aktueller Stand'],
    mediaNote: 'Projektbilder folgen',
    preview: 'Vorschau der LUZEN Website',
    pause: 'Vorschau pausieren',
    play: 'Vorschau abspielen',
  },
};
