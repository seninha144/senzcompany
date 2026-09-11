import { luzen } from './luzen';
import type { Content } from './types';
const pt: Content = {
  nav: ['Projetos', 'Serviços', 'Sobre', 'Contacto'],
  start: 'Iniciar um projeto',
  language: 'Idioma',
  menu: 'Menu',
  close: 'Fechar',
  skip: 'Saltar para o conteúdo',
  eyebrow: 'Estúdio digital independente',
  headline: ['Boas ideias.', 'Melhor no digital.'],
  intro:
    'Websites, aplicações web e software à medida. Design com intenção. Desenvolvimento com rigor. A pensar no seu negócio.',
  viewWork: 'Explorar projetos',
  location: 'Na Europa',
  worldwide: 'A trabalhar com o mundo',
  selected: 'Projetos selecionados',
  workIntro:
    'Negócios diferentes. A mesma atenção ao detalhe. Uma seleção de projetos para clientes e produtos independentes.',
  allWork: 'Todos os projetos',
  project: 'Ver projeto',
  inDevelopment: 'Em desenvolvimento',
  independentProduct: 'Produto independente',
  visualNote: 'Composição ilustrativa do projeto · imagens originais em breve',
  servicesTitle: 'A ideia certa.\nBem concretizada.',
  servicesIntro:
    'Do primeiro website a uma aplicação essencial para o negócio, trazemos clareza ao processo e cuidado a cada detalhe.',
  services: [
    {
      name: 'Websites',
      text: 'Uma presença clara e cuidada para empresas que querem mostrar o que fazem melhor.',
      items: [
        'Websites institucionais',
        'Páginas de apresentação',
        'Websites multilingues',
        'Websites de alto desempenho',
      ],
    },
    {
      name: 'Aplicações web',
      text: 'Interfaces úteis que simplificam tarefas complexas. Criadas a pensar nas pessoas que as utilizam.',
      items: [
        'Painéis de controlo',
        'Ferramentas internas',
        'Portais de clientes',
        'Plataformas de gestão',
      ],
    },
    {
      name: 'Software à medida',
      text: 'Quando as ferramentas existentes deixam de chegar, criamos software adaptado à forma como o seu negócio funciona.',
      items: [
        'Aplicações personalizadas',
        'Sistemas empresariais',
        'Ferramentas operacionais',
        'Protótipos de software',
      ],
    },
    {
      name: 'Produtos digitais',
      text: 'Da primeira ideia a um produto utilizável, com design e engenharia a trabalhar em conjunto.',
      items: [
        'Definição do produto',
        'Design de interfaces',
        'Desenvolvimento',
        'Lançamento e evolução',
      ],
    },
  ],
  processTitle: 'Um caminho claro,\nda conversa ao lançamento.',
  process: [
    { name: 'Descobrir', text: 'Compreender o negócio, o público e os objetivos.' },
    { name: 'Definir', text: 'Estabelecer o conteúdo, a estrutura e a direção técnica.' },
    { name: 'Desenhar', text: 'Dar à experiência uma linguagem visual e de interação coerente.' },
    { name: 'Desenvolver', text: 'Transformar o design em software fiável e fácil de manter.' },
    { name: 'Lançar', text: 'Testar, aperfeiçoar os detalhes e publicar.' },
    { name: 'Evoluir', text: 'Melhorar o produto à medida que surgem necessidades reais.' },
  ],
  aboutTitle: 'Independente\npor opção.',
  aboutText:
    'A SENZ é um estúdio digital independente fundado por Enzo Sena. Criamos websites, aplicações web e software à medida para empresas de diferentes mercados.',
  aboutSecond:
    'Trabalha diretamente com quem desenvolve o seu produto. Conversas claras, decisões ponderadas e um compromisso partilhado com os detalhes. Na Europa, colaboramos à distância com empresas de todo o mundo.',
  founder: 'Fundador e programador',
  aboutLink: 'Conhecer o estúdio',
  studio: {
    statement: 'Um bom trabalho começa com uma conversa.',
    principlesTitle: 'O que orienta o nosso trabalho.',
    processLabel: 'Como trabalhamos',
  },
  capabilities: {
    title: 'Capacidades técnicas',
    intro:
      'Ferramentas e tecnologias utilizadas no desenvolvimento web, de software e de produtos independentes.',
    groups: [
      {
        name: 'Desenvolvimento frontend',
        items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS'],
      },
      {
        name: 'Backend e bases de dados',
        items: ['Python', 'PHP', 'Supabase', 'PostgreSQL', 'SQL', 'APIs REST'],
      },
      {
        name: 'IA e voz',
        items: ['Gemini API', 'Reconhecimento de voz', 'Síntese de voz', 'whisper.cpp', 'Piper'],
      },
      {
        name: 'Desktop e multiplataforma',
        items: ['Tauri', 'React', 'PWA', 'APIs web'],
      },
      {
        name: 'CMS e plataformas web',
        items: ['WordPress', 'Elementor'],
      },
      {
        name: 'Desenvolvimento e publicação',
        items: ['Git', 'GitHub', 'Vercel', 'Cloudflare'],
      },
    ],
  },
  principles: [
    {
      name: 'Clareza primeiro',
      text: 'Um bom produto começa por perceber o que precisa de fazer.',
    },
    {
      name: 'Cuidado no detalhe',
      text: 'A experiência de utilização importa tanto como o funcionamento.',
    },
    { name: 'Feito para durar', text: 'Boas bases tornam o próximo passo mais simples.' },
  ],
  contactTitle: 'Vamos criar\nalgo útil.',
  contactIntro:
    'Conte-nos o que tem em mente. Uma ideia, um desafio ou um projeto pronto para avançar. Começamos por aí.',
  emailLabel: 'Prefere falar por email?',
  footerLine: 'Design com intenção.\nDesenvolvimento com rigor.',
  elsewhere: 'Outros canais',
  rights: 'Todos os direitos reservados.',
  privacy: 'Privacidade',
  terms: 'Termos',
  legalNote: 'Informações do website',
  privacyText: [
    'Este website é gerido pela SENZ, um estúdio digital independente fundado por Enzo Sena. Para questões de privacidade, contacte hello@senzcompany.com.',
    'O formulário pede o nome, email e detalhes do projeto. Empresa, país e website são opcionais. Quando o envio está configurado, os dados são transmitidos ao prestador de entrega do estúdio para responder ao pedido.',
    'Esta versão não utiliza cookies publicitários nem ferramentas de análise. O alojamento pode tratar registos técnicos de acesso para operar e proteger o website.',
    'Não inclua dados pessoais sensíveis. Contacte o estúdio para solicitar acesso, correção ou eliminação dos dados do seu pedido.',
  ],
  termsText: [
    'Este website apresenta a SENZ e o seu trabalho. O conteúdo é informativo e não constitui uma proposta vinculativa.',
    'Âmbito, preços, entregas, propriedade e apoio são acordados separadamente por escrito antes do início dos trabalhos.',
    'Os nomes de projetos e materiais de terceiros pertencem aos respetivos titulares. As composições ilustrativas estão identificadas e não são capturas verificadas dos produtos.',
    'Para questões sobre o website ou um projeto, contacte hello@senzcompany.com.',
  ],
  caseLabels: [
    'Visão geral',
    'Desafio',
    'Abordagem',
    'Solução',
    'Resultado',
    'Tipo de projeto',
    'Localização',
    'Serviços',
    'Vistas selecionadas',
    'Foco técnico',
  ],
  nextProject: 'Próximo projeto',
  projects: [
    luzen.pt.project,
    {
      name: 'MARCOS CELL',
      category: 'Website comercial',
      location: 'Brasil',
      description:
        'Um website direto e acessível para reparação de telemóveis e acessórios. Concebido para aproximar um negócio local do seu próximo cliente.',
      challenge: 'Reunir reparações, produtos, avaliações e contactos num percurso simples.',
      approach:
        'Dar prioridade aos serviços disponíveis, à oferta do negócio e às formas de contacto.',
      solution:
        'Um website comercial que reúne serviços de reparação e acessórios numa experiência orientada para o contacto.',
      outcome:
        'Um espaço focado para descobrir o negócio e aceder aos contactos. Os resultados de conversão não foram medidos de forma independente.',
      highlights: [
        'Experiência pensada para telemóvel',
        'Apresentação de serviços e produtos',
        'Contactos acessíveis',
      ],
    },
    {
      name: 'Plataforma de gestão de restaurantes',
      category: 'Aplicação web · Desenvolvimento de produto',
      location: 'Produto independente',
      description:
        'Um produto independente que explora uma forma mais clara de gerir equipas, horários e operações de restauração.',
      challenge:
        'Coordenar colaboradores, disponibilidade e operações diárias sem perder de vista a equipa.',
      approach:
        'Explorar fluxos interligados de planeamento de equipas e gestão operacional, focados nas necessidades do dia a dia.',
      solution:
        'Uma plataforma em desenvolvimento para colaboradores, horários, disponibilidade e processos de gestão. As funcionalidades poderão evoluir.',
      outcome:
        'Em desenvolvimento. É um produto independente, não um projeto de cliente nem um serviço já lançado.',
      highlights: ['Gestão de equipas', 'Horários e disponibilidade', 'Processos operacionais'],
    },
    {
      name: 'J.A.R.V.I.S.',
      subtitle: 'Assistente de voz com IA',
      typeLabel: 'Projeto independente',
      category: 'IA · Aplicação desktop · Aplicação web',
      description:
        'Um assistente de voz com IA multiplataforma que combina reconhecimento de voz, IA conversacional e interação em tempo real em aplicações desktop e web.',
      challenge:
        'Explorar uma forma mais natural de interagir com software através da voz. O desafio técnico passa por coordenar o reconhecimento de voz, as respostas da IA e a síntese de voz, mantendo claro o que está a acontecer.',
      approach:
        'Tratar a voz e o feedback visual como uma experiência única. Uma interface futurista e interativa indica quando o assistente está pronto, a ouvir, a processar ou a responder.',
      solution:
        'Um assistente pessoal independente desenvolvido por Enzo Sena em duas vertentes complementares: uma aplicação desktop com processamento local de voz e uma experiência web/PWA com integração de IA através de API.',
      outcome:
        'Uma exploração independente de voz, IA conversacional e feedback visual em tempo real, em desktop e na web. O projeto reúne desenvolvimento desktop, interfaces móveis, integração de APIs e software à medida.',
      highlights: [
        'Reconhecimento e síntese de voz',
        'IA conversacional através de API na versão web',
        'Estados visuais de interação em tempo real',
        'Processamento local de voz no desktop',
        'Acesso pelo navegador e suporte mobile',
        'Experiências desktop e web/PWA',
      ],
      sections: [
        {
          title: 'Aplicação desktop',
          text: 'Desenvolvida com Tauri e React / Vite. O processamento de voz no desktop utiliza whisper.cpp para converter fala em texto e Piper para converter texto em fala, numa interface interativa que torna visível o estado do assistente.',
        },
        {
          title: 'Experiência web / PWA',
          text: 'Acessível pelo navegador, com uma experiência adaptada a dispositivos móveis. A versão web combina reconhecimento e síntese de voz no navegador com uma arquitetura serverless e integração de IA através de API.',
        },
        {
          title: 'Interação por voz',
          text: 'A entrada de voz, o processamento e a resposta falada compõem o ciclo de interação. Os estados visuais — pronto, a ouvir, a processar e a responder — permitem acompanhar cada etapa em tempo real.',
        },
        {
          title: 'Integração com IA',
          text: 'Na versão web, a IA conversacional é integrada através de uma API. Esta ligação reúne a interação por voz e as respostas da IA na experiência acessível pelo navegador.',
        },
        {
          title: 'Tecnologias utilizadas',
          text: 'Desktop: Tauri, React, Vite, whisper.cpp e Piper. Web / PWA: reconhecimento de voz pelo navegador, síntese de voz, API de IA e arquitetura serverless.',
        },
      ],
    },
  ],
  form: {
    name: 'Nome',
    email: 'Email',
    company: 'Empresa',
    country: 'País',
    need: 'De que precisa?',
    budget: 'Orçamento estimado',
    description: 'Conte-nos sobre o seu projeto',
    website: 'Website atual',
    optional: 'opcional',
    select: 'Selecione uma opção',
    other: 'Outro',
    unsure: 'Ainda não sei',
    under: 'Menos de 1.000 €',
    submit: 'Enviar pedido de projeto',
    sending: 'A enviar o seu pedido…',
    success: 'Obrigado. Recebemos o seu pedido e responderemos por email.',
    error: 'Não foi possível enviar. Tente novamente ou contacte-nos por email.',
    unavailable:
      'O envio de pedidos ainda não está ligado. Envie os detalhes para hello@senzcompany.com.',
    consent: 'Os seus dados serão usados apenas para responder ao pedido. Consulte a nossa',
    required: 'Preencha os campos obrigatórios.',
    invalid: 'Verifique o email e o endereço do website.',
    descriptionHint: 'A ideia, os objetivos, os prazos — o que já souber.',
  },
  notFound: 'Não foi possível encontrar esta página.',
  home: 'Voltar ao início',
  seo: 'A SENZ é um estúdio digital independente que cria websites, aplicações web e software à medida para empresas em todo o mundo.',
};
export default pt;
