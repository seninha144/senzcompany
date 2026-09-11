import { luzen } from './luzen';
import type { Content } from './types';
const en: Content = {
  nav: ['Work', 'Services', 'About', 'Contact'],
  start: 'Start a project',
  language: 'Language',
  menu: 'Menu',
  close: 'Close',
  skip: 'Skip to content',
  eyebrow: 'Independent digital studio',
  headline: ['Good thinking.', 'Better digital.'],
  intro:
    'Websites, web applications and custom software. Thoughtfully designed. Carefully built. Made for your business.',
  viewWork: 'Explore selected work',
  location: 'Based in Europe',
  worldwide: 'Working worldwide',
  selected: 'Selected work',
  workIntro:
    'Different businesses. The same attention to detail. A selection of client work and independent product development.',
  allWork: 'All projects',
  project: 'View project',
  inDevelopment: 'In development',
  independentProduct: 'Independent product',
  visualNote: 'Illustrative project composition · original screens forthcoming',
  servicesTitle: 'The right idea.\nBuilt the right way.',
  servicesIntro:
    'From a first website to a business-critical application, we bring clarity to the process and care to the details.',
  services: [
    {
      name: 'Websites',
      text: 'A clear, considered presence for businesses ready to show what they do best.',
      items: [
        'Corporate websites',
        'Landing pages',
        'Multilingual websites',
        'High-performance marketing sites',
      ],
    },
    {
      name: 'Web applications',
      text: 'Useful interfaces that make complex work feel straightforward. Built around the people who use them.',
      items: ['Dashboards', 'Internal tools', 'Customer portals', 'Management platforms'],
    },
    {
      name: 'Custom software',
      text: 'When off-the-shelf tools no longer fit, software shaped around the way your business works.',
      items: [
        'Tailored applications',
        'Business systems',
        'Operational tools',
        'Software prototypes',
      ],
    },
    {
      name: 'Digital products',
      text: 'A considered path from an early idea to a usable product, with design and engineering working together.',
      items: ['Product definition', 'Interface design', 'Development', 'Launch and iteration'],
    },
  ],
  processTitle: 'A clear path from\nconversation to launch.',
  process: [
    { name: 'Discover', text: 'Understand the business, the audience and what success means.' },
    { name: 'Define', text: 'Set the content, structure and technical direction.' },
    { name: 'Design', text: 'Give the experience a clear visual and interaction language.' },
    { name: 'Develop', text: 'Turn the design into reliable, maintainable software.' },
    { name: 'Launch', text: 'Test carefully, refine the details and go live.' },
    { name: 'Evolve', text: 'Improve the product as real needs emerge.' },
  ],
  aboutTitle: 'Independent\nby design.',
  aboutText:
    'SENZ is an independent digital studio founded by Enzo Sena. We design and develop thoughtful websites, web applications and custom software for businesses across different markets.',
  aboutSecond:
    'You work directly with the person building your product. Clear conversations, considered decisions and a shared commitment to getting the details right. Based in Europe, collaborating remotely with businesses worldwide.',
  founder: 'Founder & Developer',
  aboutLink: 'Meet the studio',
  studio: {
    statement: 'Good work starts with a conversation.',
    principlesTitle: 'A few things we stand by.',
    processLabel: 'How we work',
  },
  capabilities: {
    title: 'Technical capabilities',
    intro: 'Tools and technologies used across web, software and independent product development.',
    groups: [
      {
        name: 'Frontend Development',
        items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS'],
      },
      {
        name: 'Backend & Databases',
        items: ['Python', 'PHP', 'Supabase', 'PostgreSQL', 'SQL', 'REST APIs'],
      },
      {
        name: 'AI & Voice',
        items: ['Gemini API', 'Speech Recognition', 'Text-to-Speech', 'whisper.cpp', 'Piper'],
      },
      {
        name: 'Desktop & Cross-platform',
        items: ['Tauri', 'React', 'PWA', 'Web APIs'],
      },
      {
        name: 'CMS & Web Platforms',
        items: ['WordPress', 'Elementor'],
      },
      {
        name: 'Development & Deployment',
        items: ['Git', 'GitHub', 'Vercel', 'Cloudflare'],
      },
    ],
  },
  principles: [
    {
      name: 'Clarity first',
      text: 'A good product starts with a clear understanding of what it needs to do.',
    },
    { name: 'Care in the details', text: 'How something feels matters as much as how it works.' },
    { name: 'Built to last', text: 'Thoughtful foundations make the next step easier.' },
  ],
  contactTitle: 'Let’s make\nsomething useful.',
  contactIntro:
    'Tell us what you have in mind. An idea, a challenge or a project ready to move forward. We’ll take it from there.',
  emailLabel: 'Prefer a conversation by email?',
  footerLine: 'Thoughtful design.\nConsidered development.',
  elsewhere: 'Elsewhere',
  rights: 'All rights reserved.',
  privacy: 'Privacy',
  terms: 'Terms',
  legalNote: 'Website information',
  privacyText: [
    'This website is operated by SENZ, an independent digital studio founded by Enzo Sena. Privacy questions can be sent to hello@senzcompany.com.',
    'The inquiry form asks for your name, email address and project details. Company, country and existing website are optional. When inquiry delivery is configured, these details are sent to the studio’s delivery provider to respond to your request.',
    'This version does not use advertising cookies or analytics trackers. Hosting providers may process technical access logs to operate and protect the website.',
    'Do not include sensitive personal information in your message. Contact the studio to ask about access to, correction of or deletion of your inquiry.',
  ],
  termsText: [
    'This website introduces SENZ and its work. Content is provided for general information and does not constitute a binding proposal.',
    'Project scope, fees, deliverables, ownership and support are agreed separately in writing before work begins.',
    'Project names and third-party materials belong to their respective owners. Illustrative compositions are identified and should not be interpreted as verified production screenshots.',
    'For questions about using this website or discussing a project, contact hello@senzcompany.com.',
  ],
  caseLabels: [
    'Overview',
    'Challenge',
    'Approach',
    'Solution',
    'Outcome',
    'Project type',
    'Location',
    'Services',
    'Selected views',
    'Technical focus',
  ],
  nextProject: 'Next project',
  projects: [
    luzen.en.project,
    {
      name: 'MARCOS CELL',
      category: 'Commercial website',
      location: 'Brazil',
      description:
        'A direct, approachable website for mobile phone repairs and accessories. Built to connect a local business with its next customer.',
      challenge:
        'Bring repair services, products, reviews and contact channels together in a simple customer journey.',
      approach:
        'Prioritize what visitors need to know: available services, the business offering and how to get in touch.',
      solution:
        'A commercial website that brings repair services and accessories into one conversion-oriented experience.',
      outcome:
        'A focused place to discover the business and reach its contact channels. Conversion results have not been independently measured.',
      highlights: [
        'Mobile-first experience',
        'Service and product presentation',
        'Accessible contact channels',
      ],
    },
    {
      name: 'Restaurant management platform',
      category: 'Web application · Product development',
      location: 'Independent product',
      description:
        'An independent product exploring a clearer way to manage restaurant teams, schedules and everyday operations.',
      challenge:
        'Restaurant managers need to coordinate employees, availability and daily operations without losing sight of the team.',
      approach:
        'Explore connected workflows for workforce planning and operational management, keeping the product focused on everyday needs.',
      solution:
        'A platform in development covering employees, schedules, availability and management workflows. Features and scope may evolve.',
      outcome:
        'In development. This is an independent product, not a commissioned client project or a publicly launched service.',
      highlights: ['Workforce management', 'Scheduling and availability', 'Operational workflows'],
    },
    {
      name: 'J.A.R.V.I.S.',
      subtitle: 'AI Voice Assistant',
      typeLabel: 'Independent Project',
      category: 'AI · Desktop · Web Application',
      description:
        'A cross-platform AI voice assistant combining speech recognition, conversational AI and real-time interaction across desktop and web.',
      challenge:
        'Explore a more natural way to interact with software through voice. The technical challenge is to coordinate speech recognition, AI responses and speech synthesis while keeping the interface clear about what is happening.',
      approach:
        'Treat voice and visual feedback as one experience. An interactive, futuristic interface communicates when the assistant is ready, listening, processing or responding.',
      solution:
        'An independent personal assistant developed by Enzo Sena in two complementary forms: a desktop application with local voice processing, and a browser-based web/PWA experience with AI integration through an API.',
      outcome:
        'An independent exploration of voice, conversational AI and real-time visual feedback across desktop and web. The project brings together desktop development, mobile interfaces, API integration and custom software.',
      highlights: [
        'Speech recognition and speech synthesis',
        'Conversational AI through an API in the web version',
        'Real-time visual interaction states',
        'Local voice processing on desktop',
        'Browser access and mobile support',
        'Desktop and web/PWA experiences',
      ],
      sections: [
        {
          title: 'Desktop application',
          text: 'Built with Tauri and React / Vite. Desktop voice processing uses whisper.cpp for speech-to-text and Piper for text-to-speech, within an interactive interface that makes the assistant’s state visible.',
        },
        {
          title: 'Web / PWA experience',
          text: 'Accessible through the browser, with an experience adapted for mobile devices. The web version combines browser speech recognition and speech synthesis with a serverless architecture and AI integration through an API.',
        },
        {
          title: 'Voice interaction',
          text: 'Speech input, processing and spoken responses form the interaction cycle. Visual states — ready, listening, processing and responding — help the user follow each stage in real time.',
        },
        {
          title: 'AI integration',
          text: 'In the web version, conversational AI is integrated through an API. This connects voice interaction with AI responses within the browser-based experience.',
        },
        {
          title: 'Technologies used',
          text: 'Desktop: Tauri, React, Vite, whisper.cpp and Piper. Web / PWA: browser speech recognition, speech synthesis, an AI API and a serverless architecture.',
        },
      ],
    },
  ],
  form: {
    name: 'Name',
    email: 'Email',
    company: 'Company',
    country: 'Country',
    need: 'What do you need?',
    budget: 'Estimated budget',
    description: 'Tell us about your project',
    website: 'Existing website',
    optional: 'optional',
    select: 'Select an option',
    other: 'Other',
    unsure: 'Not sure yet',
    under: 'Under €1,000',
    submit: 'Send project inquiry',
    sending: 'Sending your inquiry…',
    success: 'Thank you. Your inquiry has been received. We’ll reply by email.',
    error: 'Your inquiry could not be sent. Please try again or contact us by email.',
    unavailable:
      'Online inquiries are not connected yet. Please email hello@senzcompany.com with your project details.',
    consent: 'Your details will only be used to respond to your inquiry. Read our',
    required: 'Please complete the required fields.',
    invalid: 'Please check your email address and website URL.',
    descriptionHint: 'The idea, the goals, the timeline — whatever you know so far.',
  },
  notFound: 'This page could not be found.',
  home: 'Back to home',
  seo: 'SENZ is an independent digital studio creating websites, web applications and custom software for businesses worldwide.',
};
export default en;
