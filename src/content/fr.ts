import { luzen } from './luzen';
import type { Content } from './types';
const fr: Content = {
  nav: ['Projets', 'Services', 'À propos', 'Contact'],
  start: 'Parlons de votre projet',
  language: 'Langue',
  menu: 'Menu',
  close: 'Fermer',
  skip: 'Aller au contenu',
  eyebrow: 'Studio numérique indépendant',
  headline: ['Des idées justes.', 'Un numérique soigné.'],
  intro:
    'Sites web, applications web et logiciels sur mesure. Un design réfléchi. Un développement rigoureux. Au service de votre activité.',
  viewWork: 'Découvrir nos projets',
  location: 'En Europe',
  worldwide: 'À vos côtés, partout',
  selected: 'Projets choisis',
  workIntro:
    'Des entreprises différentes. La même attention aux détails. Une sélection de projets clients et de produits indépendants.',
  allWork: 'Tous les projets',
  project: 'Voir le projet',
  inDevelopment: 'En développement',
  independentProduct: 'Produit indépendant',
  visualNote: 'Composition illustrative du projet · captures originales à venir',
  servicesTitle: 'La bonne idée.\nUne réalisation juste.',
  servicesIntro:
    'Du premier site à une application essentielle à votre activité, nous apportons de la clarté au processus et du soin à chaque détail.',
  services: [
    {
      name: 'Sites web',
      text: 'Une présence claire et soignée pour les entreprises qui souhaitent montrer leur savoir-faire.',
      items: [
        'Sites institutionnels',
        'Pages de présentation',
        'Sites multilingues',
        'Sites marketing performants',
      ],
    },
    {
      name: 'Applications web',
      text: 'Des interfaces utiles qui simplifient les tâches complexes, pensées pour les personnes qui les utilisent.',
      items: ['Tableaux de bord', 'Outils internes', 'Portails clients', 'Plateformes de gestion'],
    },
    {
      name: 'Logiciels sur mesure',
      text: 'Lorsque les outils existants ne suffisent plus, un logiciel adapté au fonctionnement de votre entreprise.',
      items: [
        'Applications personnalisées',
        'Systèmes de gestion',
        'Outils opérationnels',
        'Prototypes logiciels',
      ],
    },
    {
      name: 'Produits numériques',
      text: 'De la première idée à un produit utilisable, avec le design et le développement réunis dès le départ.',
      items: [
        'Définition du produit',
        'Design d’interfaces',
        'Développement',
        'Lancement et amélioration',
      ],
    },
  ],
  processTitle: 'Un parcours clair,\ndu premier échange au lancement.',
  process: [
    { name: 'Découvrir', text: 'Comprendre l’activité, le public et les objectifs.' },
    { name: 'Définir', text: 'Poser le contenu, la structure et la direction technique.' },
    { name: 'Concevoir', text: 'Donner à l’expérience un langage visuel et interactif cohérent.' },
    { name: 'Développer', text: 'Transformer le design en un logiciel fiable et maintenable.' },
    { name: 'Lancer', text: 'Tester, affiner les détails et mettre en ligne.' },
    { name: 'Faire évoluer', text: 'Améliorer le produit à mesure que les besoins se précisent.' },
  ],
  aboutTitle: 'Indépendant,\npar choix.',
  aboutText:
    'SENZ est un studio numérique indépendant fondé par Enzo Sena. Nous concevons et développons des sites web, des applications web et des logiciels sur mesure pour des entreprises de différents marchés.',
  aboutSecond:
    'Vous échangez directement avec la personne qui construit votre produit. Des conversations claires, des décisions réfléchies et une attention partagée aux détails. Basés en Europe, nous collaborons à distance avec des entreprises du monde entier.',
  founder: 'Fondateur et développeur',
  aboutLink: 'Découvrir le studio',
  studio: {
    statement: 'Un bon projet commence par un échange.',
    principlesTitle: 'Ce qui guide notre travail.',
    processLabel: 'Notre façon de travailler',
  },
  capabilities: {
    title: 'Compétences techniques',
    intro:
      'Outils et technologies utilisés pour le web, les logiciels et les produits indépendants.',
    groups: [
      {
        name: 'Développement frontend',
        items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS'],
      },
      {
        name: 'Backend et bases de données',
        items: ['Python', 'PHP', 'Supabase', 'PostgreSQL', 'SQL', 'API REST'],
      },
      {
        name: 'IA et voix',
        items: ['Gemini API', 'Reconnaissance vocale', 'Synthèse vocale', 'whisper.cpp', 'Piper'],
      },
      {
        name: 'Applications de bureau et multiplateformes',
        items: ['Tauri', 'React', 'PWA', 'API web'],
      },
      {
        name: 'CMS et plateformes web',
        items: ['WordPress', 'Elementor'],
      },
      {
        name: 'Développement et déploiement',
        items: ['Git', 'GitHub', 'Vercel', 'Cloudflare'],
      },
    ],
  },
  principles: [
    {
      name: 'La clarté d’abord',
      text: 'Un bon produit commence par une compréhension précise de son rôle.',
    },
    { name: 'Le soin du détail', text: 'L’expérience compte autant que le fonctionnement.' },
    { name: 'Conçu pour durer', text: 'Des bases solides facilitent la suite.' },
  ],
  contactTitle: 'Créons quelque\nchose d’utile.',
  contactIntro:
    'Parlez-nous de votre idée, d’un défi ou d’un projet prêt à avancer. C’est un bon point de départ.',
  emailLabel: 'Vous préférez échanger par email ?',
  footerLine: 'Un design réfléchi.\nUn développement rigoureux.',
  elsewhere: 'Ailleurs',
  rights: 'Tous droits réservés.',
  privacy: 'Confidentialité',
  terms: 'Conditions',
  legalNote: 'Informations du site',
  privacyText: [
    'Ce site est géré par SENZ, un studio numérique indépendant fondé par Enzo Sena. Pour toute question sur la confidentialité : hello@senzcompany.com.',
    'Le formulaire demande votre nom, votre email et les détails du projet. L’entreprise, le pays et le site existant sont facultatifs. Lorsque l’envoi est configuré, ces données sont transmises au prestataire de livraison du studio pour répondre à votre demande.',
    'Cette version n’utilise pas de cookies publicitaires ni d’outils de suivi analytique. L’hébergeur peut traiter des journaux techniques pour exploiter et protéger le site.',
    'N’incluez pas de données personnelles sensibles. Contactez le studio pour demander l’accès, la rectification ou la suppression de votre demande.',
  ],
  termsText: [
    'Ce site présente SENZ et ses projets. Son contenu est informatif et ne constitue pas une offre contractuelle.',
    'Le périmètre, les honoraires, les livrables, la propriété et le support sont convenus séparément par écrit avant le début du travail.',
    'Les noms de projets et les contenus tiers appartiennent à leurs propriétaires. Les compositions illustratives sont signalées et ne constituent pas des captures vérifiées des produits.',
    'Pour toute question ou pour discuter d’un projet : hello@senzcompany.com.',
  ],
  caseLabels: [
    'Présentation',
    'Défi',
    'Approche',
    'Réalisation',
    'Résultat',
    'Type de projet',
    'Localisation',
    'Services',
    'Vues choisies',
    'Axes techniques',
  ],
  nextProject: 'Projet suivant',
  projects: [
    luzen.fr.project,
    {
      name: 'MARCOS CELL',
      category: 'Site commercial',
      location: 'Brésil',
      description:
        'Un site direct et accessible pour la réparation de téléphones et les accessoires. Conçu pour rapprocher un commerce local de ses prochains clients.',
      challenge: 'Réunir réparations, produits, avis et moyens de contact dans un parcours simple.',
      approach: 'Prioriser les services disponibles, l’offre du commerce et la prise de contact.',
      solution:
        'Un site commercial regroupant réparations et accessoires dans une expérience orientée vers le contact.',
      outcome:
        'Un point d’entrée clair pour découvrir le commerce et le contacter. Les conversions n’ont pas fait l’objet de mesures indépendantes.',
      highlights: [
        'Expérience pensée pour le mobile',
        'Présentation des services et produits',
        'Moyens de contact accessibles',
      ],
    },
    {
      name: 'Plateforme de gestion de restaurants',
      category: 'Application web · Développement de produit',
      location: 'Produit indépendant',
      description:
        'Un produit indépendant qui explore une gestion plus claire des équipes, des plannings et des opérations en restauration.',
      challenge:
        'Coordonner les employés, les disponibilités et les opérations quotidiennes sans perdre de vue l’équipe.',
      approach:
        'Explorer des parcours cohérents pour la planification des équipes et la gestion opérationnelle, centrés sur les besoins quotidiens.',
      solution:
        'Une plateforme en développement couvrant les employés, les plannings, les disponibilités et les processus de gestion. Le périmètre pourra évoluer.',
      outcome:
        'En développement. Il s’agit d’un produit indépendant, et non d’un projet client ou d’un service déjà lancé.',
      highlights: ['Gestion des équipes', 'Plannings et disponibilités', 'Processus opérationnels'],
    },
    {
      name: 'J.A.R.V.I.S.',
      subtitle: 'Assistant vocal avec IA',
      typeLabel: 'Projet indépendant',
      category: 'IA · Application de bureau · Application web',
      description:
        'Un assistant vocal multiplateforme associant reconnaissance vocale, IA conversationnelle et interaction en temps réel sur ordinateur et sur le web.',
      challenge:
        'Explorer une interaction plus naturelle avec le logiciel grâce à la voix. Le défi technique consiste à coordonner reconnaissance vocale, réponses de l’IA et synthèse vocale, tout en rendant chaque étape compréhensible.',
      approach:
        'Concevoir la voix et le retour visuel comme une seule expérience. Une interface futuriste et interactive indique si l’assistant est prêt, à l’écoute, en cours de traitement ou en train de répondre.',
      solution:
        'Un assistant personnel indépendant développé par Enzo Sena sous deux formes complémentaires : une application de bureau avec traitement local de la voix, et une expérience web/PWA intégrant l’IA via une API.',
      outcome:
        'Une exploration indépendante de la voix, de l’IA conversationnelle et du retour visuel en temps réel sur ordinateur et sur le web. Le projet réunit développement d’applications de bureau, interfaces mobiles, intégration d’API et logiciel sur mesure.',
      highlights: [
        'Reconnaissance et synthèse vocales',
        'IA conversationnelle via une API dans la version web',
        'États visuels d’interaction en temps réel',
        'Traitement local de la voix sur ordinateur',
        'Accès par navigateur et prise en charge du mobile',
        'Expériences de bureau et web/PWA',
      ],
      sections: [
        {
          title: 'Application de bureau',
          text: 'Développée avec Tauri et React / Vite. Le traitement vocal sur ordinateur utilise whisper.cpp pour transcrire la parole et Piper pour la synthèse vocale, dans une interface interactive qui rend visible l’état de l’assistant.',
        },
        {
          title: 'Expérience web / PWA',
          text: 'Accessible depuis le navigateur et adaptée aux appareils mobiles. La version web associe reconnaissance et synthèse vocales du navigateur, architecture serverless et intégration de l’IA via une API.',
        },
        {
          title: 'Interaction vocale',
          text: 'La saisie vocale, le traitement et la réponse parlée constituent le cycle d’interaction. Les états visuels — prêt, à l’écoute, traitement et réponse — permettent de suivre chaque étape en temps réel.',
        },
        {
          title: 'Intégration de l’IA',
          text: 'Dans la version web, l’IA conversationnelle est intégrée via une API. Cette connexion associe interaction vocale et réponses de l’IA au sein de l’expérience accessible par navigateur.',
        },
        {
          title: 'Technologies utilisées',
          text: 'Application de bureau : Tauri, React, Vite, whisper.cpp et Piper. Web / PWA : reconnaissance vocale du navigateur, synthèse vocale, API d’IA et architecture serverless.',
        },
      ],
    },
  ],
  form: {
    name: 'Nom',
    email: 'Email',
    company: 'Entreprise',
    country: 'Pays',
    need: 'De quoi avez-vous besoin ?',
    budget: 'Budget estimé',
    description: 'Parlez-nous de votre projet',
    website: 'Site actuel',
    optional: 'facultatif',
    select: 'Choisissez une option',
    other: 'Autre',
    unsure: 'À définir',
    under: 'Moins de 1 000 €',
    submit: 'Envoyer votre demande',
    sending: 'Envoi en cours…',
    success: 'Merci. Votre demande a bien été reçue. Nous vous répondrons par email.',
    error: 'L’envoi a échoué. Réessayez ou contactez-nous par email.',
    unavailable:
      'Le formulaire n’est pas encore connecté. Envoyez votre projet à hello@senzcompany.com.',
    consent:
      'Vos données servent uniquement à répondre à votre demande. Consultez notre politique de',
    required: 'Veuillez remplir les champs obligatoires.',
    invalid: 'Vérifiez votre email et l’adresse de votre site.',
    descriptionHint: 'L’idée, les objectifs, le calendrier — ce que vous savez déjà.',
  },
  notFound: 'Cette page est introuvable.',
  home: 'Retour à l’accueil',
  seo: 'SENZ est un studio numérique indépendant qui crée des sites web, des applications web et des logiciels sur mesure pour les entreprises du monde entier.',
};
export default fr;
