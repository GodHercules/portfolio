import type { TechProject } from '@/types/project';

export const developmentProjects: TechProject[] = [
  {
    id: 'atlas-platform',
    slug: 'atlas-platform',
    category: 'web-apps',
    featured: true,
    title: {
      'pt-BR': 'Atlas Platform',
      en: 'Atlas Platform',
      es: 'Atlas Platform',
    },
    summary: {
      'pt-BR': 'Plataforma SaaS para gestão operacional com foco em performance e clareza de dados.',
      en: 'SaaS platform for operational management focused on performance and data clarity.',
      es: 'Plataforma SaaS para gestión operativa centrada en rendimiento y claridad de datos.',
    },
    cover: '/assets/projects/atlas.svg',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Tailwind CSS'],
    githubUrl: 'https://github.com/GodHercules',
    body: {
      context: {
        'pt-BR': 'Projeto criado para centralizar processos que antes estavam fragmentados em planilhas e ferramentas isoladas.',
        en: 'Created to centralize processes that were previously fragmented across spreadsheets and disconnected tools.',
        es: 'Creado para centralizar procesos antes fragmentados en hojas de cálculo y herramientas aisladas.',
      },
      problem: {
        'pt-BR': 'Baixa rastreabilidade das operações e retrabalho recorrente por falta de padronização.',
        en: 'Low operation traceability and recurring rework due to lack of standardization.',
        es: 'Baja trazabilidad operativa y retrabajo recurrente por falta de estandarización.',
      },
      objective: {
        'pt-BR': 'Construir um painel robusto, rápido e de fácil adoção para times operacionais.',
        en: 'Build a robust, fast and easy-to-adopt dashboard for operational teams.',
        es: 'Construir un panel robusto, rápido y fácil de adoptar para equipos operativos.',
      },
      features: {
        'pt-BR': ['Gestão de fluxos operacionais', 'Painel analítico em tempo real', 'Permissões por perfil de acesso'],
        en: ['Operational workflow management', 'Real-time analytics dashboard', 'Role-based permissions'],
        es: ['Gestión de flujos operativos', 'Panel analítico en tiempo real', 'Permisos por rol'],
      },
      technicalChallenges: {
        'pt-BR': ['Normalização de dados legados', 'Estratégia de cache para reduzir latência'],
        en: ['Legacy data normalization', 'Cache strategy to reduce latency'],
        es: ['Normalización de datos legados', 'Estrategia de caché para reducir latencia'],
      },
      architectureDecisions: {
        'pt-BR': ['App Router com server components', 'Camada de serviços isolada da UI'],
        en: ['App Router with server components', 'Service layer isolated from UI'],
        es: ['App Router con server components', 'Capa de servicios aislada de la UI'],
      },
      implementedSolutions: {
        'pt-BR': ['Paginação incremental no servidor', 'Sistema de auditoria por eventos'],
        en: ['Incremental server-side pagination', 'Event-based audit trail'],
        es: ['Paginación incremental en servidor', 'Auditoría basada en eventos'],
      },
      learnings: {
        'pt-BR': ['Co-criação com usuários acelera aderência', 'Observabilidade evita gargalos invisíveis'],
        en: ['Co-creation with users accelerates adoption', 'Observability prevents hidden bottlenecks'],
        es: ['La co-creación con usuarios acelera la adopción', 'La observabilidad evita cuellos de botella ocultos'],
      },
      futureImprovements: {
        'pt-BR': ['Módulo preditivo com IA', 'Automação de relatórios executivos'],
        en: ['Predictive AI module', 'Executive report automation'],
        es: ['Módulo predictivo con IA', 'Automatización de reportes ejecutivos'],
      },
    },
  },
  {
    id: 'flow-ops',
    slug: 'flow-ops-automation',
    category: 'automations',
    featured: true,
    title: {
      'pt-BR': 'Flow Ops Automation',
      en: 'Flow Ops Automation',
      es: 'Flow Ops Automation',
    },
    summary: {
      'pt-BR': 'Motor de automações para reduzir tarefas repetitivas e aumentar previsibilidade operacional.',
      en: 'Automation engine to reduce repetitive tasks and improve operational predictability.',
      es: 'Motor de automatización para reducir tareas repetitivas y mejorar la previsibilidad operativa.',
    },
    cover: '/assets/projects/flow.svg',
    stack: ['Node.js', 'TypeScript', 'BullMQ', 'Redis', 'Docker'],
    githubUrl: 'https://github.com/GodHercules',
    body: {
      context: {
        'pt-BR': 'Ambiente com alta carga manual e dependência de ações humanas para rotinas críticas.',
        en: 'Environment with high manual load and human dependency for critical routines.',
        es: 'Entorno con alta carga manual y dependencia humana para rutinas críticas.',
      },
      problem: {
        'pt-BR': 'Falhas por execução inconsistente e ausência de monitoramento centralizado.',
        en: 'Failures caused by inconsistent execution and lack of centralized monitoring.',
        es: 'Fallas por ejecución inconsistente y falta de monitoreo centralizado.',
      },
      objective: {
        'pt-BR': 'Automatizar pipelines operacionais com rastreabilidade e tolerância a falhas.',
        en: 'Automate operational pipelines with traceability and fault tolerance.',
        es: 'Automatizar pipelines operativos con trazabilidad y tolerancia a fallos.',
      },
      features: {
        'pt-BR': ['Orquestração de jobs', 'Reprocessamento automático', 'Alertas inteligentes'],
        en: ['Job orchestration', 'Automatic retry processing', 'Smart alerts'],
        es: ['Orquestación de trabajos', 'Reproceso automático', 'Alertas inteligentes'],
      },
      technicalChallenges: {
        'pt-BR': ['Controle de concorrência', 'Estratégia de idempotência'],
        en: ['Concurrency control', 'Idempotency strategy'],
        es: ['Control de concurrencia', 'Estrategia de idempotencia'],
      },
      architectureDecisions: {
        'pt-BR': ['Fila distribuída com prioridades', 'Eventos com logs estruturados'],
        en: ['Distributed queue with priorities', 'Event processing with structured logs'],
        es: ['Cola distribuida con prioridades', 'Procesamiento por eventos con logs estructurados'],
      },
      implementedSolutions: {
        'pt-BR': ['Painel de execução em tempo real', 'Política de retry exponencial'],
        en: ['Real-time execution dashboard', 'Exponential retry policy'],
        es: ['Panel de ejecución en tiempo real', 'Política de reintento exponencial'],
      },
      learnings: {
        'pt-BR': ['Métricas de fila são críticas', 'Simplicidade vence complexidade prematura'],
        en: ['Queue metrics are mission critical', 'Simplicity beats premature complexity'],
        es: ['Las métricas de cola son críticas', 'La simplicidad supera la complejidad prematura'],
      },
      futureImprovements: {
        'pt-BR': ['Editor visual de automações', 'Templates por tipo de fluxo'],
        en: ['Visual automation editor', 'Flow-based templates'],
        es: ['Editor visual de automatizaciones', 'Plantillas por tipo de flujo'],
      },
    },
  },
  {
    id: 'inside-hub',
    slug: 'inside-hub',
    category: 'internal-systems',
    title: {
      'pt-BR': 'Inside Hub',
      en: 'Inside Hub',
      es: 'Inside Hub',
    },
    summary: {
      'pt-BR': 'Sistema interno para consolidar documentação, indicadores e processos de times.',
      en: 'Internal system to consolidate documentation, metrics and team processes.',
      es: 'Sistema interno para consolidar documentación, métricas y procesos de equipos.',
    },
    cover: '/assets/projects/hub.svg',
    stack: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    githubUrl: 'https://github.com/GodHercules',
    body: {
      context: {
        'pt-BR': 'Times distribuídos com informação dispersa e baixa padronização de comunicação.',
        en: 'Distributed teams with scattered information and low communication standards.',
        es: 'Equipos distribuidos con información dispersa y baja estandarización de comunicación.',
      },
      problem: {
        'pt-BR': 'Acesso lento a decisões e histórico de processos importantes.',
        en: 'Slow access to decisions and critical process history.',
        es: 'Acceso lento a decisiones e historial de procesos importantes.',
      },
      objective: {
        'pt-BR': 'Centralizar conhecimento e melhorar autonomia dos squads.',
        en: 'Centralize knowledge and improve squad autonomy.',
        es: 'Centralizar conocimiento y mejorar la autonomía de los squads.',
      },
      features: {
        'pt-BR': ['Biblioteca de processos', 'Dashboards por squad', 'Pesquisa semântica por conteúdo'],
        en: ['Process library', 'Squad dashboards', 'Semantic content search'],
        es: ['Biblioteca de procesos', 'Dashboards por squad', 'Búsqueda semántica de contenido'],
      },
      technicalChallenges: {
        'pt-BR': ['Modelagem de permissões por equipe', 'Versionamento de documentos'],
        en: ['Team-based permissions modeling', 'Document versioning'],
        es: ['Modelado de permisos por equipo', 'Versionado de documentos'],
      },
      architectureDecisions: {
        'pt-BR': ['Arquitetura modular por domínio', 'Validação centralizada de contratos'],
        en: ['Domain-driven modular architecture', 'Centralized contract validation'],
        es: ['Arquitectura modular por dominio', 'Validación centralizada de contratos'],
      },
      implementedSolutions: {
        'pt-BR': ['Busca otimizada com índice textual', 'Interface orientada a atalhos'],
        en: ['Optimized search with textual index', 'Shortcut-oriented interface'],
        es: ['Búsqueda optimizada con índice textual', 'Interfaz orientada a atajos'],
      },
      learnings: {
        'pt-BR': ['Governança de conteúdo é parte do produto', 'UX interna também exige refinamento'],
        en: ['Content governance is part of the product', 'Internal UX also requires refinement'],
        es: ['La gobernanza de contenido es parte del producto', 'La UX interna también exige refinamiento'],
      },
      futureImprovements: {
        'pt-BR': ['Assistente interno de consulta', 'Integração com CRM e BI'],
        en: ['Internal assistant for queries', 'CRM and BI integration'],
        es: ['Asistente interno de consultas', 'Integración con CRM y BI'],
      },
    },
  },
  {
    id: 'dev-lab',
    slug: 'dev-lab-studies',
    category: 'technical-studies',
    title: {
      'pt-BR': 'Dev Lab Studies',
      en: 'Dev Lab Studies',
      es: 'Dev Lab Studies',
    },
    summary: {
      'pt-BR': 'Coleção de estudos técnicos com foco em arquitetura frontend, performance e DX.',
      en: 'Collection of technical studies focused on frontend architecture, performance and DX.',
      es: 'Colección de estudios técnicos enfocada en arquitectura frontend, rendimiento y DX.',
    },
    cover: '/assets/projects/lab.svg',
    stack: ['React', 'TypeScript', 'Vitest', 'Storybook'],
    githubUrl: 'https://github.com/GodHercules',
    body: {
      context: {
        'pt-BR': 'Iniciativa contínua para validar abordagens antes de adoção em projetos de produção.',
        en: 'Ongoing initiative to validate approaches before adopting them in production projects.',
        es: 'Iniciativa continua para validar enfoques antes de adoptarlos en proyectos de producción.',
      },
      problem: {
        'pt-BR': 'Decisões técnicas tomadas sem benchmark podem gerar dívida futura.',
        en: 'Technical decisions without benchmark can create future debt.',
        es: 'Decisiones técnicas sin benchmark pueden generar deuda futura.',
      },
      objective: {
        'pt-BR': 'Testar padrões e registrar aprendizados reutilizáveis.',
        en: 'Test patterns and register reusable learnings.',
        es: 'Probar patrones y registrar aprendizajes reutilizables.',
      },
      features: {
        'pt-BR': ['Experimentos de rendering', 'Comparativos de bundlers', 'Playground de componentes'],
        en: ['Rendering experiments', 'Bundler comparisons', 'Component playground'],
        es: ['Experimentos de rendering', 'Comparativas de bundlers', 'Playground de componentes'],
      },
      technicalChallenges: {
        'pt-BR': ['Mensuração de impacto real', 'Isolamento de variáveis de teste'],
        en: ['Measuring real impact', 'Test variable isolation'],
        es: ['Medición de impacto real', 'Aislamiento de variables de prueba'],
      },
      architectureDecisions: {
        'pt-BR': ['Repositório modular de experimentos', 'Pipeline de benchmarks automatizados'],
        en: ['Modular repository for experiments', 'Automated benchmark pipeline'],
        es: ['Repositorio modular de experimentos', 'Pipeline automatizado de benchmarks'],
      },
      implementedSolutions: {
        'pt-BR': ['Template padrão para estudos', 'Matriz comparativa de resultados'],
        en: ['Standard template for studies', 'Comparative matrix of outcomes'],
        es: ['Plantilla estándar para estudios', 'Matriz comparativa de resultados'],
      },
      learnings: {
        'pt-BR': ['Hipóteses claras reduzem desperdício', 'Documentação facilita evolução da equipe'],
        en: ['Clear hypotheses reduce waste', 'Documentation accelerates team evolution'],
        es: ['Hipótesis claras reducen desperdicio', 'La documentación acelera la evolución del equipo'],
      },
      futureImprovements: {
        'pt-BR': ['Publicação recorrente de insights', 'Integração com base de conhecimento'],
        en: ['Recurring publication of insights', 'Knowledge base integration'],
        es: ['Publicación recurrente de insights', 'Integración con base de conocimiento'],
      },
    },
  },
];

export function getDevelopmentProjectBySlug(slug: string) {
  return developmentProjects.find((project) => project.slug === slug);
}
