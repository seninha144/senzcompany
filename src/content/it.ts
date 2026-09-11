import { luzen } from './luzen';
import type { Content } from './types';
const it: Content = {
  nav: ['Progetti', 'Servizi', 'Studio', 'Contatti'],
  start: 'Iniziamo un progetto',
  language: 'Lingua',
  menu: 'Menu',
  close: 'Chiudi',
  skip: 'Vai al contenuto',
  eyebrow: 'Studio digitale indipendente',
  headline: ['Idee chiare.', 'Digitale fatto bene.'],
  intro:
    'Siti web, applicazioni web e software su misura. Design ragionato. Sviluppo accurato. Pensati per la tua attività.',
  viewWork: 'Scopri i progetti',
  location: 'In Europa',
  worldwide: 'Al lavoro, ovunque',
  selected: 'Progetti selezionati',
  workIntro:
    'Attività diverse. La stessa cura dei dettagli. Una selezione di lavori per clienti e prodotti indipendenti.',
  allWork: 'Tutti i progetti',
  project: 'Scopri il progetto',
  inDevelopment: 'In sviluppo',
  independentProduct: 'Prodotto indipendente',
  visualNote: 'Composizione illustrativa del progetto · schermate originali in arrivo',
  servicesTitle: 'L’idea giusta.\nRealizzata con cura.',
  servicesIntro:
    'Dal primo sito a un’applicazione essenziale per l’attività, portiamo chiarezza nel processo e attenzione a ogni dettaglio.',
  services: [
    {
      name: 'Siti web',
      text: 'Una presenza chiara e curata per le imprese che vogliono mostrare ciò che sanno fare meglio.',
      items: [
        'Siti aziendali',
        'Pagine di presentazione',
        'Siti multilingue',
        'Siti marketing ad alte prestazioni',
      ],
    },
    {
      name: 'Applicazioni web',
      text: 'Interfacce utili che semplificano il lavoro complesso, progettate intorno a chi le usa.',
      items: [
        'Pannelli di controllo',
        'Strumenti interni',
        'Portali clienti',
        'Piattaforme gestionali',
      ],
    },
    {
      name: 'Software su misura',
      text: 'Quando gli strumenti standard non bastano, un software che segue il modo in cui lavora la tua azienda.',
      items: [
        'Applicazioni personalizzate',
        'Sistemi aziendali',
        'Strumenti operativi',
        'Prototipi software',
      ],
    },
    {
      name: 'Prodotti digitali',
      text: 'Dalla prima idea a un prodotto utilizzabile, con design e sviluppo che lavorano insieme.',
      items: [
        'Definizione del prodotto',
        'Design delle interfacce',
        'Sviluppo',
        'Lancio e miglioramento',
      ],
    },
  ],
  processTitle: 'Un percorso chiaro,\ndal dialogo al lancio.',
  process: [
    { name: 'Scoprire', text: 'Comprendere l’attività, il pubblico e gli obiettivi.' },
    { name: 'Definire', text: 'Stabilire contenuti, struttura e direzione tecnica.' },
    {
      name: 'Progettare',
      text: 'Dare all’esperienza un linguaggio visivo e di interazione coerente.',
    },
    { name: 'Sviluppare', text: 'Trasformare il design in software affidabile e mantenibile.' },
    { name: 'Lanciare', text: 'Testare, rifinire i dettagli e pubblicare.' },
    { name: 'Evolvere', text: 'Migliorare il prodotto quando emergono nuove esigenze.' },
  ],
  aboutTitle: 'Indipendente,\nper scelta.',
  aboutText:
    'SENZ è uno studio digitale indipendente fondato da Enzo Sena. Progettiamo e sviluppiamo siti web, applicazioni web e software su misura per aziende di diversi mercati.',
  aboutSecond:
    'Lavori direttamente con chi costruisce il tuo prodotto. Dialogo chiaro, decisioni ponderate e un impegno condiviso per i dettagli. Dall’Europa, collaboriamo da remoto con aziende in tutto il mondo.',
  founder: 'Fondatore e sviluppatore',
  aboutLink: 'Conosci lo studio',
  studio: {
    statement: 'Un buon lavoro inizia da una conversazione.',
    principlesTitle: 'Ciò che guida il nostro lavoro.',
    processLabel: 'Come lavoriamo',
  },
  capabilities: {
    title: 'Competenze tecniche',
    intro:
      'Strumenti e tecnologie utilizzati nello sviluppo web, software e di prodotti indipendenti.',
    groups: [
      {
        name: 'Sviluppo frontend',
        items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS'],
      },
      {
        name: 'Backend e database',
        items: ['Python', 'PHP', 'Supabase', 'PostgreSQL', 'SQL', 'API REST'],
      },
      {
        name: 'IA e voce',
        items: ['Gemini API', 'Riconoscimento vocale', 'Sintesi vocale', 'whisper.cpp', 'Piper'],
      },
      {
        name: 'Desktop e multipiattaforma',
        items: ['Tauri', 'React', 'PWA', 'API web'],
      },
      {
        name: 'CMS e piattaforme web',
        items: ['WordPress', 'Elementor'],
      },
      {
        name: 'Sviluppo e pubblicazione',
        items: ['Git', 'GitHub', 'Vercel', 'Cloudflare'],
      },
    ],
  },
  principles: [
    {
      name: 'Prima la chiarezza',
      text: 'Un buon prodotto nasce dalla comprensione di ciò che deve fare.',
    },
    { name: 'Cura dei dettagli', text: 'L’esperienza d’uso conta quanto il funzionamento.' },
    { name: 'Fatto per durare', text: 'Basi solide rendono più semplice il passo successivo.' },
  ],
  contactTitle: 'Creiamo\nqualcosa di utile.',
  contactIntro:
    'Raccontaci cosa hai in mente. Un’idea, una sfida o un progetto pronto a partire. Cominciamo da qui.',
  emailLabel: 'Preferisci scriverci via email?',
  footerLine: 'Design ragionato.\nSviluppo accurato.',
  elsewhere: 'Altrove',
  rights: 'Tutti i diritti riservati.',
  privacy: 'Privacy',
  terms: 'Condizioni',
  legalNote: 'Informazioni sul sito',
  privacyText: [
    'Questo sito è gestito da SENZ, uno studio digitale indipendente fondato da Enzo Sena. Per domande sulla privacy: hello@senzcompany.com.',
    'Il modulo richiede nome, email e dettagli del progetto. Azienda, paese e sito esistente sono facoltativi. Quando l’invio è configurato, i dati vengono trasmessi al fornitore di recapito dello studio per rispondere alla richiesta.',
    'Questa versione non utilizza cookie pubblicitari né strumenti di analisi. Il fornitore di hosting può trattare registri tecnici per gestire e proteggere il sito.',
    'Non includere dati personali sensibili. Contatta lo studio per chiedere accesso, rettifica o cancellazione dei dati della richiesta.',
  ],
  termsText: [
    'Questo sito presenta SENZ e il suo lavoro. I contenuti sono informativi e non costituiscono un’offerta vincolante.',
    'Ambito, compensi, consegne, proprietà e assistenza vengono concordati separatamente per iscritto prima dell’inizio dei lavori.',
    'I nomi dei progetti e i materiali di terzi appartengono ai rispettivi proprietari. Le composizioni illustrative sono identificate e non sono schermate verificate dei prodotti.',
    'Per domande sul sito o per parlare di un progetto: hello@senzcompany.com.',
  ],
  caseLabels: [
    'Panoramica',
    'Sfida',
    'Approccio',
    'Soluzione',
    'Risultato',
    'Tipo di progetto',
    'Luogo',
    'Servizi',
    'Viste selezionate',
    'Aspetti tecnici',
  ],
  nextProject: 'Prossimo progetto',
  projects: [
    luzen.it.project,
    {
      name: 'MARCOS CELL',
      category: 'Sito commerciale',
      location: 'Brasile',
      description:
        'Un sito diretto e accessibile per riparazioni di telefoni e accessori. Pensato per avvicinare un’attività locale al suo prossimo cliente.',
      challenge: 'Riunire riparazioni, prodotti, recensioni e contatti in un percorso semplice.',
      approach:
        'Dare priorità ai servizi disponibili, all’offerta dell’attività e alle modalità di contatto.',
      solution:
        'Un sito commerciale che riunisce riparazioni e accessori in un’esperienza orientata al contatto.',
      outcome:
        'Uno spazio mirato per scoprire l’attività e contattarla. Le conversioni non sono state misurate in modo indipendente.',
      highlights: [
        'Esperienza pensata per il mobile',
        'Presentazione di servizi e prodotti',
        'Contatti accessibili',
      ],
    },
    {
      name: 'Piattaforma di gestione ristoranti',
      category: 'Applicazione web · Sviluppo di prodotto',
      location: 'Prodotto indipendente',
      description:
        'Un prodotto indipendente che esplora un modo più chiaro di gestire personale, turni e operazioni nella ristorazione.',
      challenge:
        'Coordinare dipendenti, disponibilità e operazioni quotidiane senza perdere di vista il gruppo.',
      approach:
        'Esplorare flussi collegati per la pianificazione del personale e la gestione operativa, concentrati sulle esigenze quotidiane.',
      solution:
        'Una piattaforma in sviluppo per dipendenti, turni, disponibilità e processi gestionali. Funzionalità e ambito potranno evolvere.',
      outcome:
        'In sviluppo. È un prodotto indipendente, non un progetto commissionato da un cliente né un servizio già lanciato.',
      highlights: ['Gestione del personale', 'Turni e disponibilità', 'Flussi operativi'],
    },
    {
      name: 'J.A.R.V.I.S.',
      subtitle: 'Assistente vocale con IA',
      typeLabel: 'Progetto indipendente',
      category: 'IA · Applicazione desktop · Applicazione web',
      description:
        'Un assistente vocale multipiattaforma che combina riconoscimento vocale, IA conversazionale e interazione in tempo reale su desktop e web.',
      challenge:
        'Esplorare un modo più naturale di interagire con il software attraverso la voce. La sfida tecnica consiste nel coordinare riconoscimento vocale, risposte dell’IA e sintesi vocale, rendendo chiara ogni fase.',
      approach:
        'Progettare voce e riscontro visivo come un’unica esperienza. Un’interfaccia futuristica e interattiva mostra quando l’assistente è pronto, in ascolto, in elaborazione o sta rispondendo.',
      solution:
        'Un assistente personale indipendente sviluppato da Enzo Sena in due forme complementari: un’applicazione desktop con elaborazione locale della voce e un’esperienza web/PWA con integrazione dell’IA tramite API.',
      outcome:
        'Un’esplorazione indipendente di voce, IA conversazionale e riscontro visivo in tempo reale su desktop e web. Il progetto unisce sviluppo desktop, interfacce mobili, integrazione di API e software su misura.',
      highlights: [
        'Riconoscimento e sintesi vocale',
        'IA conversazionale tramite API nella versione web',
        'Stati visivi di interazione in tempo reale',
        'Elaborazione locale della voce su desktop',
        'Accesso da browser e supporto mobile',
        'Esperienze desktop e web/PWA',
      ],
      sections: [
        {
          title: 'Applicazione desktop',
          text: 'Sviluppata con Tauri e React / Vite. L’elaborazione vocale su desktop utilizza whisper.cpp per trascrivere il parlato e Piper per la sintesi vocale, in un’interfaccia interattiva che rende visibile lo stato dell’assistente.',
        },
        {
          title: 'Esperienza web / PWA',
          text: 'Accessibile dal browser e adattata ai dispositivi mobili. La versione web combina riconoscimento e sintesi vocale del browser con un’architettura serverless e l’integrazione dell’IA tramite API.',
        },
        {
          title: 'Interazione vocale',
          text: 'L’ingresso vocale, l’elaborazione e la risposta parlata compongono il ciclo di interazione. Gli stati visivi — pronto, in ascolto, in elaborazione e in risposta — permettono di seguire ogni fase in tempo reale.',
        },
        {
          title: 'Integrazione dell’IA',
          text: 'Nella versione web, l’IA conversazionale è integrata tramite un’API. Questa connessione unisce l’interazione vocale alle risposte dell’IA nell’esperienza accessibile dal browser.',
        },
        {
          title: 'Tecnologie utilizzate',
          text: 'Desktop: Tauri, React, Vite, whisper.cpp e Piper. Web / PWA: riconoscimento vocale del browser, sintesi vocale, API di IA e architettura serverless.',
        },
      ],
    },
  ],
  form: {
    name: 'Nome',
    email: 'Email',
    company: 'Azienda',
    country: 'Paese',
    need: 'Di cosa hai bisogno?',
    budget: 'Budget indicativo',
    description: 'Raccontaci il tuo progetto',
    website: 'Sito attuale',
    optional: 'facoltativo',
    select: 'Seleziona un’opzione',
    other: 'Altro',
    unsure: 'Da definire',
    under: 'Meno di 1.000 €',
    submit: 'Invia la richiesta',
    sending: 'Invio in corso…',
    success: 'Grazie. Abbiamo ricevuto la richiesta e risponderemo via email.',
    error: 'Invio non riuscito. Riprova o contattaci via email.',
    unavailable: 'Il modulo non è ancora collegato. Invia i dettagli a hello@senzcompany.com.',
    consent: 'I tuoi dati serviranno solo a rispondere alla richiesta. Leggi la nostra',
    required: 'Compila i campi obbligatori.',
    invalid: 'Controlla l’email e l’indirizzo del sito.',
    descriptionHint: 'L’idea, gli obiettivi, i tempi — quello che sai già.',
  },
  notFound: 'Pagina non trovata.',
  home: 'Torna alla pagina iniziale',
  seo: 'SENZ è uno studio digitale indipendente che crea siti web, applicazioni web e software su misura per aziende di tutto il mondo.',
};
export default it;
