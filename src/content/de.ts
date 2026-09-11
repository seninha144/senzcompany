import { luzen } from './luzen';
import type { Content } from './types';
const de: Content = {
  nav: ['Projekte', 'Leistungen', 'Studio', 'Kontakt'],
  start: 'Projekt anfragen',
  language: 'Sprache',
  menu: 'Menü',
  close: 'Schließen',
  skip: 'Zum Inhalt springen',
  eyebrow: 'Unabhängiges Digitalstudio',
  headline: ['Klar gedacht.', 'Digital durchdacht.'],
  intro:
    'Websites, Webanwendungen und individuelle Software. Bewusst gestaltet. Sorgfältig entwickelt. Für Ihr Unternehmen.',
  viewWork: 'Ausgewählte Projekte ansehen',
  location: 'In Europa zu Hause',
  worldwide: 'Weltweit tätig',
  selected: 'Ausgewählte Projekte',
  workIntro:
    'Unterschiedliche Unternehmen. Dieselbe Sorgfalt. Eine Auswahl an Kundenprojekten und eigener Produktentwicklung.',
  allWork: 'Alle Projekte',
  project: 'Projekt ansehen',
  inDevelopment: 'In Entwicklung',
  independentProduct: 'Eigenständiges Produkt',
  visualNote: 'Illustrative Projektansicht · Originalaufnahmen folgen',
  servicesTitle: 'Die richtige Idee.\nSorgfältig umgesetzt.',
  servicesIntro:
    'Von der ersten Website bis zur geschäftskritischen Anwendung: Wir schaffen Klarheit im Prozess und achten auf die Details.',
  services: [
    {
      name: 'Websites',
      text: 'Ein klarer, durchdachter Auftritt für Unternehmen, die zeigen möchten, was sie auszeichnet.',
      items: [
        'Unternehmenswebsites',
        'Landingpages',
        'Mehrsprachige Websites',
        'Leistungsstarke Marketingwebsites',
      ],
    },
    {
      name: 'Webanwendungen',
      text: 'Nützliche Oberflächen, die komplexe Aufgaben vereinfachen. Entwickelt für die Menschen, die damit arbeiten.',
      items: [
        'Übersichtsoberflächen',
        'Interne Werkzeuge',
        'Kundenportale',
        'Verwaltungsplattformen',
      ],
    },
    {
      name: 'Individuelle Software',
      text: 'Wenn Standardwerkzeuge nicht mehr passen: Software, die sich an Ihren betrieblichen Abläufen orientiert.',
      items: [
        'Maßgeschneiderte Anwendungen',
        'Unternehmenssysteme',
        'Betriebliche Werkzeuge',
        'Softwareprototypen',
      ],
    },
    {
      name: 'Digitale Produkte',
      text: 'Von der ersten Idee zum nutzbaren Produkt. Gestaltung und Entwicklung greifen von Anfang an ineinander.',
      items: [
        'Produktdefinition',
        'Oberflächengestaltung',
        'Entwicklung',
        'Einführung und Weiterentwicklung',
      ],
    },
  ],
  processTitle: 'Ein klarer Weg.\nVom Gespräch bis zum Start.',
  process: [
    { name: 'Verstehen', text: 'Unternehmen, Zielgruppe und Ziele kennenlernen.' },
    { name: 'Definieren', text: 'Inhalte, Struktur und technische Richtung festlegen.' },
    { name: 'Gestalten', text: 'Eine stimmige visuelle Sprache und Bedienung entwickeln.' },
    { name: 'Entwickeln', text: 'Das Design in zuverlässige, wartbare Software übersetzen.' },
    { name: 'Veröffentlichen', text: 'Gründlich testen, Details verfeinern und starten.' },
    { name: 'Weiterentwickeln', text: 'Das Produkt an neue, konkrete Bedürfnisse anpassen.' },
  ],
  aboutTitle: 'Unabhängig.\nGanz bewusst.',
  aboutText:
    'SENZ ist ein unabhängiges Digitalstudio, gegründet von Enzo Sena. Wir gestalten und entwickeln durchdachte Websites, Webanwendungen und individuelle Software für Unternehmen in verschiedenen Märkten.',
  aboutSecond:
    'Sie arbeiten direkt mit der Person, die Ihr Produkt entwickelt. Klare Gespräche, überlegte Entscheidungen und ein gemeinsamer Anspruch an die Details. Von Europa aus arbeiten wir remote mit Unternehmen weltweit.',
  founder: 'Gründer und Entwickler',
  aboutLink: 'Das Studio kennenlernen',
  studio: {
    statement: 'Gute Arbeit beginnt mit einem Gespräch.',
    principlesTitle: 'Was unsere Arbeit prägt.',
    processLabel: 'Wie wir arbeiten',
  },
  capabilities: {
    title: 'Technische Kompetenzen',
    intro:
      'Werkzeuge und Technologien aus der Web-, Software- und eigenständigen Produktentwicklung.',
    groups: [
      {
        name: 'Frontend-Entwicklung',
        items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS'],
      },
      {
        name: 'Backend & Datenbanken',
        items: ['Python', 'PHP', 'Supabase', 'PostgreSQL', 'SQL', 'REST-APIs'],
      },
      {
        name: 'KI & Sprache',
        items: ['Gemini API', 'Spracherkennung', 'Sprachausgabe', 'whisper.cpp', 'Piper'],
      },
      {
        name: 'Desktop & plattformübergreifende Anwendungen',
        items: ['Tauri', 'React', 'PWA', 'Web-APIs'],
      },
      {
        name: 'CMS & Webplattformen',
        items: ['WordPress', 'Elementor'],
      },
      {
        name: 'Entwicklung & Bereitstellung',
        items: ['Git', 'GitHub', 'Vercel', 'Cloudflare'],
      },
    ],
  },
  principles: [
    {
      name: 'Klarheit zuerst',
      text: 'Ein gutes Produkt beginnt mit einem klaren Verständnis seiner Aufgabe.',
    },
    {
      name: 'Sorgfalt im Detail',
      text: 'Wie sich etwas anfühlt, zählt ebenso wie seine Funktion.',
    },
    { name: 'Auf Dauer gedacht', text: 'Solide Grundlagen erleichtern den nächsten Schritt.' },
  ],
  contactTitle: 'Lassen Sie uns\netwas Nützliches schaffen.',
  contactIntro:
    'Erzählen Sie uns von Ihrer Idee, einer Herausforderung oder einem Projekt, das bereit für den nächsten Schritt ist. Dort setzen wir an.',
  emailLabel: 'Lieber per E-Mail?',
  footerLine: 'Bewusst gestaltet.\nSorgfältig entwickelt.',
  elsewhere: 'Weitere Kanäle',
  rights: 'Alle Rechte vorbehalten.',
  privacy: 'Datenschutz',
  terms: 'Nutzungsbedingungen',
  legalNote: 'Website-Informationen',
  privacyText: [
    'Diese Website wird von SENZ betrieben, einem unabhängigen Digitalstudio von Enzo Sena. Fragen zum Datenschutz: senz@senzcompany.com.',
    'Das Anfrageformular erfasst Name, E-Mail-Adresse und Projektdetails. Unternehmen, Land und bestehende Website sind freiwillig. Bei eingerichtetem Versand werden diese Angaben an den Zustelldienst des Studios übermittelt, um Ihre Anfrage zu beantworten.',
    'Diese Version verwendet keine Werbecookies oder Analyse-Tracker. Der Hostinganbieter kann technische Zugriffsprotokolle für Betrieb und Sicherheit verarbeiten.',
    'Bitte übermitteln Sie keine sensiblen personenbezogenen Daten. Für Auskunft, Berichtigung oder Löschung Ihrer Anfrage wenden Sie sich an das Studio.',
  ],
  termsText: [
    'Diese Website stellt SENZ und seine Arbeit vor. Die Inhalte dienen der Information und sind kein verbindliches Angebot.',
    'Umfang, Vergütung, Leistungen, Eigentumsrechte und Betreuung werden vor Arbeitsbeginn gesondert schriftlich vereinbart.',
    'Projektnamen und Materialien Dritter gehören den jeweiligen Rechteinhabern. Illustrative Ansichten sind gekennzeichnet und keine verifizierten Produktaufnahmen.',
    'Für Fragen zur Website oder einem Projekt: senz@senzcompany.com.',
  ],
  caseLabels: [
    'Überblick',
    'Aufgabe',
    'Vorgehen',
    'Umsetzung',
    'Ergebnis',
    'Projektart',
    'Standort',
    'Leistungen',
    'Ausgewählte Ansichten',
    'Technische Schwerpunkte',
  ],
  nextProject: 'Nächstes Projekt',
  projects: [
    luzen.de.project,
    {
      name: 'MARCOS CELL',
      category: 'Geschäftswebsite',
      location: 'Brasilien',
      description:
        'Eine direkte, zugängliche Website für Handyreparaturen und Zubehör. Sie verbindet ein lokales Geschäft mit seinen nächsten Kunden.',
      challenge:
        'Reparaturen, Produkte, Bewertungen und Kontaktwege in einer einfachen Nutzerführung zusammenbringen.',
      approach:
        'Verfügbare Leistungen, das Angebot des Geschäfts und Kontaktmöglichkeiten in den Mittelpunkt stellen.',
      solution:
        'Eine Geschäftswebsite, die Reparaturleistungen und Zubehör in einer kontaktorientierten Nutzererfahrung vereint.',
      outcome:
        'Eine fokussierte Anlaufstelle, um das Geschäft kennenzulernen und Kontakt aufzunehmen. Anfrageraten wurden nicht unabhängig gemessen.',
      highlights: [
        'Für Mobilgeräte konzipiert',
        'Leistungs- und Produktdarstellung',
        'Zugängliche Kontaktwege',
      ],
    },
    {
      name: 'Plattform für Restaurantmanagement',
      category: 'Webanwendung · Produktentwicklung',
      location: 'Eigenständiges Produkt',
      description:
        'Ein eigenständiges Produkt für eine übersichtlichere Verwaltung von Restaurantteams, Dienstplänen und betrieblichen Abläufen.',
      challenge:
        'Beschäftigte, Verfügbarkeiten und tägliche Abläufe koordinieren, ohne das Team aus dem Blick zu verlieren.',
      approach:
        'Verbundene Arbeitsabläufe für Personalplanung und Betriebsführung erkunden, ausgerichtet an alltäglichen Anforderungen.',
      solution:
        'Eine Plattform in Entwicklung für Beschäftigte, Dienstpläne, Verfügbarkeiten und Verwaltungsabläufe. Funktionen und Umfang können sich ändern.',
      outcome:
        'In Entwicklung. Ein eigenständiges Produkt, kein Kundenauftrag und noch kein öffentlich verfügbarer Dienst.',
      highlights: [
        'Personalverwaltung',
        'Dienstplanung und Verfügbarkeit',
        'Betriebliche Arbeitsabläufe',
      ],
    },
    {
      name: 'J.A.R.V.I.S.',
      subtitle: 'KI-Sprachassistent',
      typeLabel: 'Eigenständiges Projekt',
      category: 'KI · Desktop-Anwendung · Webanwendung',
      description:
        'Ein plattformübergreifender KI-Sprachassistent, der Spracherkennung, dialogbasierte KI und Echtzeitinteraktion auf dem Desktop und im Web verbindet.',
      challenge:
        'Eine natürlichere Interaktion mit Software durch Sprache erkunden. Die technische Herausforderung besteht darin, Spracherkennung, KI-Antworten und Sprachausgabe zu koordinieren und dabei jeden Schritt verständlich darzustellen.',
      approach:
        'Sprache und visuelle Rückmeldung als eine gemeinsame Erfahrung gestalten. Eine futuristische, interaktive Oberfläche zeigt, ob der Assistent bereit ist, zuhört, verarbeitet oder antwortet.',
      solution:
        'Ein von Enzo Sena entwickelter, eigenständiger persönlicher Assistent mit zwei ergänzenden Varianten: eine Desktop-Anwendung mit lokaler Sprachverarbeitung und eine Web-/PWA-Erfahrung mit KI-Anbindung über eine API.',
      outcome:
        'Eine eigenständige Erkundung von Sprache, dialogbasierter KI und visueller Rückmeldung in Echtzeit auf dem Desktop und im Web. Das Projekt verbindet Desktop-Entwicklung, mobile Oberflächen, API-Anbindung und individuelle Software.',
      highlights: [
        'Spracherkennung und Sprachausgabe',
        'Dialogbasierte KI über eine API in der Webversion',
        'Visuelle Interaktionszustände in Echtzeit',
        'Lokale Sprachverarbeitung auf dem Desktop',
        'Browserzugang und Unterstützung für Mobilgeräte',
        'Desktop- und Web-/PWA-Erfahrungen',
      ],
      sections: [
        {
          title: 'Desktop-Anwendung',
          text: 'Entwickelt mit Tauri und React / Vite. Die Sprachverarbeitung auf dem Desktop nutzt whisper.cpp zur Umwandlung von Sprache in Text und Piper zur Sprachausgabe. Die interaktive Oberfläche macht den Zustand des Assistenten sichtbar.',
        },
        {
          title: 'Web- / PWA-Erfahrung',
          text: 'Im Browser zugänglich und für Mobilgeräte angepasst. Die Webversion verbindet browserbasierte Spracherkennung und Sprachausgabe mit einer serverlosen Architektur und KI-Anbindung über eine API.',
        },
        {
          title: 'Sprachinteraktion',
          text: 'Spracheingabe, Verarbeitung und gesprochene Antwort bilden den Interaktionsablauf. Die visuellen Zustände — bereit, zuhören, verarbeiten und antworten — machen jeden Schritt in Echtzeit nachvollziehbar.',
        },
        {
          title: 'KI-Anbindung',
          text: 'In der Webversion wird die dialogbasierte KI über eine API angebunden. Dadurch werden Sprachinteraktion und KI-Antworten innerhalb der browserbasierten Erfahrung miteinander verbunden.',
        },
        {
          title: 'Verwendete Technologien',
          text: 'Desktop: Tauri, React, Vite, whisper.cpp und Piper. Web / PWA: browserbasierte Spracherkennung, Sprachausgabe, KI-API und serverlose Architektur.',
        },
      ],
    },
  ],
  form: {
    name: 'Name',
    email: 'E-Mail',
    company: 'Unternehmen',
    country: 'Land',
    need: 'Was benötigen Sie?',
    budget: 'Geplantes Budget',
    description: 'Erzählen Sie uns von Ihrem Projekt',
    website: 'Bestehende Website',
    optional: 'optional',
    select: 'Bitte auswählen',
    other: 'Sonstiges',
    unsure: 'Noch offen',
    under: 'Unter 1.000 €',
    submit: 'Projektanfrage senden',
    sending: 'Ihre Anfrage wird gesendet…',
    success: 'Vielen Dank. Ihre Anfrage ist eingegangen. Wir antworten per E-Mail.',
    error:
      'Die Anfrage konnte nicht gesendet werden. Versuchen Sie es erneut oder schreiben Sie uns eine E-Mail.',
    unavailable:
      'Das Formular ist noch nicht verbunden. Bitte senden Sie Ihre Projektdetails an senz@senzcompany.com.',
    consent:
      'Ihre Angaben werden nur zur Beantwortung Ihrer Anfrage verwendet. Lesen Sie unsere Informationen zum',
    required: 'Bitte füllen Sie die Pflichtfelder aus.',
    invalid: 'Bitte prüfen Sie E-Mail-Adresse und Website-URL.',
    descriptionHint: 'Idee, Ziele, Zeitrahmen — teilen Sie uns mit, was bereits feststeht.',
  },
  notFound: 'Diese Seite wurde nicht gefunden.',
  home: 'Zur Startseite',
  seo: 'SENZ ist ein unabhängiges Digitalstudio für Websites, Webanwendungen und individuelle Software für Unternehmen weltweit.',
};
export default de;
