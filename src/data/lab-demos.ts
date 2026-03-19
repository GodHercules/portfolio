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
      'pt-BR': 'Assistente guiado por conteudo e contexto',
      en: 'Assistant guided by content and context',
      es: 'Asistente guiado por contenido y contexto',
    },
    summary: {
      'pt-BR': 'Uma demo para mostrar como o portfolio responde com base em cases, sinais e estrutura real do conteudo.',
      en: 'A demo showing how the portfolio responds using cases, signals, and the real content structure.',
      es: 'Una demo para mostrar como el portafolio responde usando casos, senales y la estructura real del contenido.',
    },
    outcome: {
      'pt-BR': 'Transforma o chatbot em prova de modelagem de conteudo e experiencia conversacional.',
      en: 'Turns the chatbot into proof of content modeling and conversational experience.',
      es: 'Convierte el chatbot en prueba de modelado de contenido y experiencia conversacional.',
    },
    stack: ['TypeScript', 'Content modeling', 'Conversational UX'],
    diagram: {
      'pt-BR': ['Portfolio data', 'Intent match', 'Case synthesis', 'Next action'],
      en: ['Portfolio data', 'Intent match', 'Case synthesis', 'Next action'],
      es: ['Datos del portfolio', 'Coincidencia de intencion', 'Sintesis del caso', 'Siguiente accion'],
    },
    links: [
      {
        label: {
          'pt-BR': 'Ver case de laboratorio',
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
      'pt-BR': 'Automacao',
      en: 'Automation',
      es: 'Automatizacion',
    },
    title: {
      'pt-BR': 'Orquestracao de fluxo e confiabilidade operacional',
      en: 'Flow orchestration and operational reliability',
      es: 'Orquestacion de flujo y confiabilidad operativa',
    },
    summary: {
      'pt-BR': 'Uma demo que explicita filas, retry, monitoramento e retomada como arquitetura, nao detalhe.',
      en: 'A demo that frames queues, retry, monitoring and recovery as architecture, not detail.',
      es: 'Una demo que expone colas, reintento, monitoreo y retomada como arquitectura, no como detalle.',
    },
    outcome: {
      'pt-BR': 'Mostra como dependencia manual vira rotina previsivel e mensuravel.',
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
          'pt-BR': 'Ver automacao real',
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
      'pt-BR': 'Laboratorio de decisao para produto e stack',
      en: 'Decision lab for product and stack',
      es: 'Laboratorio de decision para producto y stack',
    },
    summary: {
      'pt-BR': 'Uma trilha de benchmark para comparar abordagens antes de comprometer o produto com uma direcao.',
      en: 'A benchmark track for comparing approaches before committing a product to one direction.',
      es: 'Una ruta de benchmark para comparar enfoques antes de comprometer el producto con una direccion.',
    },
    outcome: {
      'pt-BR': 'Converte experimento em criterio pratico de adocao.',
      en: 'Turns experimentation into practical adoption criteria.',
      es: 'Convierte el experimento en criterio practico de adopcion.',
    },
    stack: ['React', 'Vitest', 'Storybook', 'Benchmarks'],
    diagram: {
      'pt-BR': ['Hipotese', 'Prototipo', 'Medicao', 'Adocao'],
      en: ['Hypothesis', 'Prototype', 'Measure', 'Adopt'],
      es: ['Hipotesis', 'Prototipo', 'Medicion', 'Adopcion'],
    },
    links: [
      {
        label: {
          'pt-BR': 'Ver estudo tecnico',
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
      'pt-BR': 'Eu ajudo a recortar problema, prioridade e escopo antes da solucao virar excesso de interface.',
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
      'pt-BR': 'Eu transformo decisao em implementacao com arquitetura clara, entregas curtas e criterio tecnico.',
      en: 'I turn decisions into implementation with clear architecture, short deliveries and technical criteria.',
      es: 'Transformo decision en implementacion con arquitectura clara, entregas cortas y criterio tecnico.',
    },
  },
  {
    title: {
      'pt-BR': 'Revisao com stakeholders',
      en: 'Review with stakeholders',
      es: 'Revision con stakeholders',
    },
    summary: {
      'pt-BR': 'Eu traduzo o trabalho em impacto, tradeoffs e proximo passo para alinhar expectativa rapidamente.',
      en: 'I translate the work into impact, tradeoffs and next steps to align expectations quickly.',
      es: 'Traduzco el trabajo en impacto, tradeoffs y siguiente paso para alinear expectativas rapidamente.',
    },
  },
  {
    title: {
      'pt-BR': 'Entrega com governanca',
      en: 'Delivery with governance',
      es: 'Entrega con gobernanza',
    },
    summary: {
      'pt-BR': 'Eu deixo criterios, sinais e proximos passos claros para o time evoluir sem dependencia excessiva.',
      en: 'I leave clear criteria, signals and next steps so the team can evolve without excessive dependency.',
      es: 'Dejo criterios, senales y proximos pasos claros para que el equipo evolucione sin dependencia excesiva.',
    },
  },
];
