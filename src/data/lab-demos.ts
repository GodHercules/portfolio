import type { Locale } from '@/lib/i18n/config';

export type LocalizedText = Record<Locale, string>;

export type LabDemo = {
  id: string;
  badge: LocalizedText;
  title: LocalizedText;
  summary: LocalizedText;
  outcome: LocalizedText;
  stack: string[];
  diagram: Record<Locale, string[]>;
  links: {
    label: LocalizedText;
    href: string;
  }[];
};

export const labDemos: LabDemo[] = [
  {
    id: 'content-aware-assistant',
    badge: {
      'pt-BR': 'IA aplicada',
      en: 'Applied AI',
      es: 'IA aplicada',
    },
    title: {
'pt-BR': 'Assistente guiado por conteúdo e contexto',
      en: 'Assistant guided by content and context',
      es: 'Asistente guiado por contenido y contexto',
    },
    summary: {
'pt-BR': 'Uma demo para mostrar como o portfólio responde com base em cases, sinais e estrutura real do conteúdo.',
      en: 'A demo showing how the portfolio responds using cases, signals, and the real content structure.',
      es: 'Una demo para mostrar como el portafolio responde usando casos, senales y la estructura real del contenido.',
    },
    outcome: {
'pt-BR': 'Transforma o chatbot em prova de modelagem de conteúdo e experiência conversacional.',
      en: 'Turns the chatbot into proof of content modeling and conversational experience.',
      es: 'Convierte el chatbot en prueba de modelado de contenido y experiencia conversacional.',
    },
    stack: ['TypeScript', 'Content modeling', 'Conversational UX'],
    diagram: {
      'pt-BR': ['Dados do portfólio', 'Correspondência de intenção', 'Síntese do case', 'Próxima ação'],
      en: ['Portfolio data', 'Intent match', 'Case synthesis', 'Next action'],
      es: ['Datos del portfolio', 'Coincidencia de intencion', 'Sintesis del caso', 'Siguiente accion'],
    },
    links: [
      {
        label: {
          'pt-BR': 'Ver case de laboratório',
          en: 'View lab case',
          es: 'Ver caso de laboratorio',
        },
        href: '/development/dev-lab-studies',
      },
      {
        label: {
          'pt-BR': 'Ver plataforma principal',
          en: 'View main platform',
          es: 'Ver plataforma principal',
        },
        href: '/development/atlas-platform',
      },
    ],
  },
  {
    id: 'workflow-orchestration',
    badge: {
      'pt-BR': 'Automação',
      en: 'Automation',
      es: 'Automatizacion',
    },
    title: {
      'pt-BR': 'Orquestração de fluxo e confiabilidade operacional',
      en: 'Flow orchestration and operational reliability',
      es: 'Orquestacion de flujo y confiabilidad operativa',
    },
    summary: {
      'pt-BR': 'Uma demo que explicita filas, retry, monitoramento e retomada como arquitetura, não como detalhe.',
      en: 'A demo that frames queues, retry, monitoring and recovery as architecture, not detail.',
      es: 'Una demo que expone colas, reintento, monitoreo y retomada como arquitectura, no como detalle.',
    },
    outcome: {
      'pt-BR': 'Mostra como a dependência manual vira uma rotina previsível e mensurável.',
      en: 'Shows how manual dependency becomes predictable and measurable routine.',
      es: 'Muestra como la dependencia manual se convierte en rutina previsible y medible.',
    },
    stack: ['Node.js', 'BullMQ', 'Redis', 'Observability'],
    diagram: {
      'pt-BR': ['Trigger', 'Queue', 'Retry', 'Alert', 'Recovery'],
      en: ['Trigger', 'Queue', 'Retry', 'Alert', 'Recovery'],
      es: ['Disparo', 'Cola', 'Reintento', 'Alerta', 'Recuperacion'],
    },
    links: [
      {
        label: {
          'pt-BR': 'Ver automação real',
          en: 'See real automation',
          es: 'Ver automatizacion real',
        },
        href: '/development/flow-ops-automation',
      },
      {
        label: {
          'pt-BR': 'Ver sistema interno',
          en: 'View internal system',
          es: 'Ver sistema interno',
        },
        href: '/development/inside-hub',
      },
    ],
  },
  {
    id: 'decision-lab',
    badge: {
      'pt-BR': 'Arquitetura',
      en: 'Architecture',
      es: 'Arquitectura',
    },
    title: {
'pt-BR': 'Laboratório de decisão para produto e stack',
      en: 'Decision lab for product and stack',
      es: 'Laboratorio de decision para producto y stack',
    },
    summary: {
'pt-BR': 'Uma trilha de benchmark para comparar abordagens antes de comprometer o produto com uma direção.',
      en: 'A benchmark track for comparing approaches before committing a product to one direction.',
      es: 'Una ruta de benchmark para comparar enfoques antes de comprometer el producto con una direccion.',
    },
    outcome: {
'pt-BR': 'Converte experimento em critério prático de adoção.',
      en: 'Turns experimentation into practical adoption criteria.',
      es: 'Convierte el experimento en criterio practico de adopcion.',
    },
    stack: ['React', 'Vitest', 'Storybook', 'Benchmarks'],
    diagram: {
'pt-BR': ['Hipótese', 'Protótipo', 'Medição', 'Adoção'],
      en: ['Hypothesis', 'Prototype', 'Measure', 'Adopt'],
      es: ['Hipotesis', 'Prototipo', 'Medicion', 'Adopcion'],
    },
    links: [
      {
        label: {
          'pt-BR': 'Ver estudo técnico',
          en: 'View technical study',
          es: 'Ver estudio tecnico',
        },
        href: '/development/dev-lab-studies',
      },
      {
        label: {
          'pt-BR': 'Conversar sobre um projeto',
          en: 'Talk about a project',
          es: 'Hablar de un proyecto',
        },
        href: '/contact',
      },
    ],
  },
];

export const labTeamModes = [
  {
    title: {
      'pt-BR': 'Discovery com produto',
      en: 'Discovery with product',
      es: 'Discovery con producto',
    },
    summary: {
      'pt-BR': 'Eu ajudo a recortar o problema, a prioridade e o escopo antes de a solução virar excesso de interface.',
      en: 'I help frame problem, priority and scope before a solution becomes interface-heavy.',
      es: 'Ayudo a recortar problema, prioridad y alcance antes de que la solucion se vuelva demasiado de interfaz.',
    },
  },
  {
    title: {
      'pt-BR': 'Pairing com engenharia',
      en: 'Pairing with engineering',
      es: 'Pairing con ingenieria',
    },
    summary: {
      'pt-BR': 'Eu transformo decisão em implementação com arquitetura clara, entregas curtas e critério técnico.',
      en: 'I turn decisions into implementation with clear architecture, short deliveries and technical criteria.',
      es: 'Transformo decision en implementacion con arquitectura clara, entregas cortas y criterio tecnico.',
    },
  },
  {
    title: {
      'pt-BR': 'Revisão com stakeholders',
      en: 'Review with stakeholders',
      es: 'Revision con stakeholders',
    },
    summary: {
      'pt-BR': 'Eu traduzo o trabalho em impacto, trade-offs e próximo passo para alinhar expectativas rapidamente.',
      en: 'I translate the work into impact, tradeoffs and next steps to align expectations quickly.',
      es: 'Traduzco el trabajo en impacto, tradeoffs y siguiente paso para alinear expectativas rapidamente.',
    },
  },
  {
    title: {
      'pt-BR': 'Entrega com governança',
      en: 'Delivery with governance',
      es: 'Entrega con gobernanza',
    },
    summary: {
      'pt-BR': 'Eu deixo critérios, sinais e próximos passos claros para o time evoluir sem dependência excessiva.',
      en: 'I leave clear criteria, signals and next steps so the team can evolve without excessive dependency.',
      es: 'Dejo criterios, senales y proximos pasos claros para que el equipo evolucione sin dependencia excesiva.',
    },
  },
];
