import type { Locale } from '@/lib/i18n/config';

export type LabSignal = {
  id: string;
  badge: Record<Locale, string>;
  title: Record<Locale, string>;
  summary: Record<Locale, string>;
  outcome: Record<Locale, string>;
  stack: string[];
  href: string;
};

export const labSignals: LabSignal[] = [
  {
    id: 'ai-assistants',
    badge: {
      'pt-BR': 'IA aplicada',
      en: 'Applied AI',
      es: 'IA aplicada',
    },
    title: {
      'pt-BR': 'Assistentes guiados por conteudo e contexto',
      en: 'Assistants guided by content and context',
      es: 'Asistentes guiados por contenido y contexto',
    },
    summary: {
      'pt-BR': 'Exploracao de UX para IA com respostas ancoradas no proprio portfolio, foco em clareza e uso real.',
      en: 'AI UX exploration with answers grounded in the portfolio itself, focused on clarity and real use.',
      es: 'Exploracion de UX para IA con respuestas ancladas en el propio portafolio, enfocada en claridad y uso real.',
    },
    outcome: {
      'pt-BR': 'Mostra integracao entre conteudo estruturado, logica de resposta e experiencia conversacional.',
      en: 'Shows integration between structured content, response logic, and conversational experience.',
      es: 'Muestra integracion entre contenido estructurado, logica de respuesta y experiencia conversacional.',
    },
    stack: ['TypeScript', 'Content Modeling', 'Conversational UX'],
    href: '/development/dev-lab-studies',
  },
  {
    id: 'workflow-integrations',
    badge: {
      'pt-BR': 'Integracoes',
      en: 'Integrations',
      es: 'Integraciones',
    },
    title: {
      'pt-BR': 'Automacao e orquestracao de fluxo',
      en: 'Workflow automation and orchestration',
      es: 'Automatizacion y orquestacion de flujo',
    },
    summary: {
      'pt-BR': 'Arquiteturas com filas, APIs, retry e observabilidade para reduzir fragilidade operacional.',
      en: 'Architectures with queues, APIs, retries, and observability to reduce operational fragility.',
      es: 'Arquitecturas con colas, APIs, reintentos y observabilidad para reducir fragilidad operativa.',
    },
    outcome: {
      'pt-BR': 'Converte dependencia manual em rotinas previsiveis e mensuraveis.',
      en: 'Turns manual dependency into predictable and measurable routines.',
      es: 'Convierte la dependencia manual en rutinas previsibles y medibles.',
    },
    stack: ['Node.js', 'BullMQ', 'Redis', 'API Design'],
    href: '/development/flow-ops-automation',
  },
  {
    id: 'frontend-systems',
    badge: {
      'pt-BR': 'Frontend systems',
      en: 'Frontend systems',
      es: 'Frontend systems',
    },
    title: {
      'pt-BR': 'Arquitetura escalavel para produto e interface',
      en: 'Scalable architecture for product and interface',
      es: 'Arquitectura escalable para producto e interfaz',
    },
    summary: {
      'pt-BR': 'Composicao de App Router, i18n, componentes reutilizaveis e leitura de produto em camadas.',
      en: 'Composition of App Router, i18n, reusable components, and layered product readouts.',
      es: 'Composicion de App Router, i18n, componentes reutilizables y lectura de producto por capas.',
    },
    outcome: {
      'pt-BR': 'Explicita que a interface nao e so visual: ela carrega decisao arquitetural e criterio de manutencao.',
      en: 'Makes clear that the interface is not just visual; it carries architectural decisions and maintenance criteria.',
      es: 'Deja claro que la interfaz no es solo visual; lleva decisiones arquitectonicas y criterio de mantenimiento.',
    },
    stack: ['Next.js', 'TypeScript', 'Design Systems', 'i18n'],
    href: '/development/atlas-platform',
  },
  {
    id: 'performance-tooling',
    badge: {
      'pt-BR': 'Performance',
      en: 'Performance',
      es: 'Performance',
    },
    title: {
      'pt-BR': 'Benchmarks, DX e criterio de adocao',
      en: 'Benchmarks, DX, and adoption criteria',
      es: 'Benchmarks, DX y criterio de adopcion',
    },
    summary: {
      'pt-BR': 'Estudos tecnicos usados para comparar abordagens antes de comprometer um produto com uma direcao.',
      en: 'Technical studies used to compare approaches before committing a product to one direction.',
      es: 'Estudios tecnicos usados para comparar enfoques antes de comprometer un producto con una direccion.',
    },
    outcome: {
      'pt-BR': 'Transforma experimentacao em criterio pratico para stack, build e experiencia do desenvolvedor.',
      en: 'Turns experimentation into practical criteria for stack, build, and developer experience.',
      es: 'Transforma la experimentacion en criterio practico para stack, build y experiencia de desarrollo.',
    },
    stack: ['React', 'Vitest', 'Storybook', 'Benchmarking'],
    href: '/development/dev-lab-studies',
  },
];
