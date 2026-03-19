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
      'pt-BR': 'Plataforma SaaS para gestão operacional com foco em clareza de dados, rastreabilidade e evolução de produto.',
      en: 'SaaS platform for operational management focused on data clarity, traceability, and product evolution.',
      es: 'Plataforma SaaS para gestión operativa centrada en claridad de datos, trazabilidad y evolución de producto.',
    },
    cover: '/assets/projects/atlas.svg',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Tailwind CSS'],
    githubUrl: 'https://github.com/GodHercules',
    proof: {
      role: {
        'pt-BR': 'Liderança de arquitetura frontend e experiência do produto.',
        en: 'Frontend architecture and product experience lead.',
        es: 'Liderazgo de arquitectura frontend y experiencia de producto.',
      },
      engagement: {
        'pt-BR': 'Descoberta, modelagem da solução, interface, handoff e evolução contínua.',
        en: 'Discovery, solution modeling, interface, handoff, and continuous evolution.',
        es: 'Descubrimiento, modelado de la solución, interfaz, handoff y evolución continua.',
      },
      timeline: {
        'pt-BR': 'Entrega pensada em ciclos curtos, com validação de fluxo e refinamento incremental.',
        en: 'Delivery planned in short cycles with flow validation and incremental refinement.',
        es: 'Entrega pensada en ciclos cortos con validación de flujo y refinamiento incremental.',
      },
      team: {
        'pt-BR': 'Atuação em parceria com operação, produto e stakeholders de negócio.',
        en: 'Worked in partnership with operations, product, and business stakeholders.',
        es: 'Actuación en conjunto con operaciones, producto y stakeholders de negocio.',
      },
      responsibilities: {
        'pt-BR': ['Arquitetura do front-end', 'Definição de fluxos críticos', 'Modelagem da camada de visualização', 'Tradução de regras operacionais em produto'],
        en: ['Frontend architecture', 'Critical flow definition', 'Visualization layer modeling', 'Translation of operational rules into product'],
        es: ['Arquitectura frontend', 'Definición de flujos críticos', 'Modelado de la capa de visualización', 'Traducción de reglas operativas en producto'],
      },
      capabilities: ['Frontend Architecture', 'Product Thinking', 'Design Systems', 'Data UX'],
      constraints: {
        'pt-BR': ['Dados legados com baixa consistência', 'Necessidade de adoção rápida por times operacionais', 'Leitura analítica sem aumento de complexidade visual'],
        en: ['Legacy data with low consistency', 'Need for fast adoption by operational teams', 'Analytical readability without increasing visual complexity'],
        es: ['Datos legados con baja consistencia', 'Necesidad de adopción rápida por equipos operativos', 'Legibilidad analítica sin aumentar la complejidad visual'],
      },
      outcomes: {
        'pt-BR': ['Centralização de rotinas antes dispersas', 'Melhor leitura de estados e eventos operacionais', 'Base preparada para observabilidade e evolução modular'],
        en: ['Centralized routines that were previously scattered', 'Clearer reading of operational states and events', 'Foundation prepared for observability and modular evolution'],
        es: ['Centralización de rutinas antes dispersas', 'Mejor lectura de estados y eventos operativos', 'Base preparada para observabilidad y evolución modular'],
      },
      decisionSummary: {
        'pt-BR': 'A decisão principal foi separar visualização, regras e estados operacionais para permitir escala sem perder clareza de uso.',
        en: 'The main decision was to separate visualization, business rules, and operational states so the product could scale without losing clarity.',
        es: 'La decisión principal fue separar visualización, reglas y estados operativos para permitir escala sin perder claridad.',
      },
      architectureSummary: {
        'pt-BR': 'Interface organizada por domínio, renderização híbrida e camada explícita para fluxos críticos e rastreabilidade.',
        en: 'Domain-organized interface, hybrid rendering, and an explicit layer for critical flows and traceability.',
        es: 'Interfaz organizada por dominio, renderizado híbrido y una capa explícita para flujos críticos y trazabilidad.',
      },
      featuredOutcome: {
        'pt-BR': 'Transforma operação fragmentada em leitura de produto com contexto, prioridade e governança visual.',
        en: 'Turns fragmented operations into product-readable workflows with context, priority, and visual governance.',
        es: 'Transforma una operación fragmentada en lectura de producto con contexto, prioridad y gobernanza visual.',
      },
    },
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
        'pt-BR': ['Normalização de dados legados', 'Estratégia de cache para reduzir latência', 'Compatibilização entre leitura analítica e velocidade de navegação'],
        en: ['Legacy data normalization', 'Cache strategy to reduce latency', 'Balancing analytical readability with navigation speed'],
        es: ['Normalización de datos legados', 'Estrategia de caché para reducir latencia', 'Equilibrio entre legibilidad analítica y velocidad de navegación'],
      },
      architectureDecisions: {
        'pt-BR': ['App Router com server components', 'Camada de serviços isolada da UI', 'Organização por domínio para manutenção progressiva'],
        en: ['App Router with server components', 'Service layer isolated from UI', 'Domain-based organization for progressive maintenance'],
        es: ['App Router con server components', 'Capa de servicios aislada de la UI', 'Organización por dominio para mantenimiento progresivo'],
      },
      implementedSolutions: {
        'pt-BR': ['Paginação incremental no servidor', 'Sistema de auditoria por eventos', 'Estrutura visual orientada à leitura de estados'],
        en: ['Incremental server-side pagination', 'Event-based audit trail', 'Visual structure oriented around state readability'],
        es: ['Paginación incremental en servidor', 'Auditoría basada en eventos', 'Estructura visual orientada a la lectura de estados'],
      },
      learnings: {
        'pt-BR': ['Co-criação com usuários acelera aderência', 'Observabilidade evita gargalos invisíveis', 'Arquitetura clara reduz custo de expansão'],
        en: ['Co-creation with users accelerates adoption', 'Observability prevents hidden bottlenecks', 'Clear architecture reduces expansion cost'],
        es: ['La co-creación con usuarios acelera la adopción', 'La observabilidad evita cuellos de botella ocultos', 'Una arquitectura clara reduce el costo de expansión'],
      },
      futureImprovements: {
        'pt-BR': ['Módulo preditivo com IA', 'Automação de relatórios executivos', 'Camada adicional de inteligência operacional'],
        en: ['Predictive AI module', 'Executive report automation', 'Additional operational intelligence layer'],
        es: ['Módulo predictivo con IA', 'Automatización de reportes ejecutivos', 'Capa adicional de inteligencia operativa'],
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
      'pt-BR': 'Motor de automações para reduzir dependência manual e aumentar previsibilidade em rotinas críticas.',
      en: 'Automation engine to reduce manual dependency and increase predictability in critical routines.',
      es: 'Motor de automatización para reducir dependencia manual y aumentar previsibilidad en rutinas críticas.',
    },
    cover: '/assets/projects/flow.svg',
    stack: ['Node.js', 'TypeScript', 'BullMQ', 'Redis', 'Docker'],
    githubUrl: 'https://github.com/GodHercules',
    proof: {
      role: {
        'pt-BR': 'Concepção da automação, desenho de confiabilidade e visibilidade operacional.',
        en: 'Designed the automation layer, reliability model, and operational visibility.',
        es: 'Concebí la capa de automatización, el modelo de confiabilidad y la visibilidad operativa.',
      },
      engagement: {
        'pt-BR': 'Diagnóstico de gargalos manuais, modelagem de filas e desenho de monitoramento.',
        en: 'Manual bottleneck diagnosis, queue modeling, and monitoring design.',
        es: 'Diagnóstico de cuellos de botella manuales, modelado de colas y diseño de monitoreo.',
      },
      timeline: {
        'pt-BR': 'Implementação incremental, com priorização das rotinas de maior risco operacional.',
        en: 'Incremental implementation prioritizing routines with the highest operational risk.',
        es: 'Implementación incremental priorizando rutinas con mayor riesgo operativo.',
      },
      team: {
        'pt-BR': 'Integração entre operação, tecnologia e responsáveis pelos fluxos críticos.',
        en: 'Connected operations, technology, and owners of critical flows.',
        es: 'Conectó operaciones, tecnología y responsables de los flujos críticos.',
      },
      responsibilities: {
        'pt-BR': ['Mapeamento de fluxos críticos', 'Estratégia de retry e idempotência', 'Visibilidade de execução e alertas', 'Definição de critérios de reprocessamento'],
        en: ['Critical flow mapping', 'Retry and idempotency strategy', 'Execution visibility and alerts', 'Definition of reprocessing criteria'],
        es: ['Mapeo de flujos críticos', 'Estrategia de reintento e idempotencia', 'Visibilidad de ejecución y alertas', 'Definición de criterios de reproceso'],
      },
      capabilities: ['Automation', 'Reliability', 'Observability', 'Backend Integration'],
      constraints: {
        'pt-BR': ['Dependência de processos humanos', 'Falhas com alto custo operacional', 'Necessidade de recuperar execuções sem retrabalho massivo'],
        en: ['Dependency on human processes', 'Failures with high operational cost', 'Need to recover executions without massive rework'],
        es: ['Dependencia de procesos humanos', 'Fallos con alto costo operativo', 'Necesidad de recuperar ejecuciones sin retrabajo masivo'],
      },
      outcomes: {
        'pt-BR': ['Fluxos críticos com maior previsibilidade', 'Menor fragilidade em reprocessamento', 'Camada de observação mais clara para operação e tecnologia'],
        en: ['Critical flows with more predictability', 'Lower fragility in reprocessing', 'Clearer observability layer for operations and technology'],
        es: ['Flujos críticos con mayor previsibilidad', 'Menor fragilidad en el reproceso', 'Capa de observación más clara para operaciones y tecnología'],
      },
      decisionSummary: {
        'pt-BR': 'Em vez de automatizar tudo de uma vez, o projeto prioriza confiabilidade e rastreabilidade nas rotinas onde a falha custa mais.',
        en: 'Instead of automating everything at once, the project prioritizes reliability and traceability where failure is most expensive.',
        es: 'En lugar de automatizar todo de una vez, el proyecto prioriza confiabilidad y trazabilidad donde el fallo cuesta más.',
      },
      architectureSummary: {
        'pt-BR': 'Fila distribuída, estratégia explícita de retry, eventos estruturados e visibilidade em tempo real da execução.',
        en: 'Distributed queue, explicit retry strategy, structured events, and real-time execution visibility.',
        es: 'Cola distribuida, estrategia explícita de reintento, eventos estructurados y visibilidad en tiempo real de la ejecución.',
      },
      featuredOutcome: {
        'pt-BR': 'Converte tarefas críticas e repetitivas em rotinas com controle, previsibilidade e governança operacional.',
        en: 'Turns critical repetitive tasks into routines with control, predictability, and operational governance.',
        es: 'Convierte tareas críticas y repetitivas en rutinas con control, previsibilidad y gobernanza operativa.',
      },
    },
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
        'pt-BR': ['Controle de concorrência', 'Estratégia de idempotência', 'Visibilidade operacional sem ruído excessivo'],
        en: ['Concurrency control', 'Idempotency strategy', 'Operational visibility without excessive noise'],
        es: ['Control de concurrencia', 'Estrategia de idempotencia', 'Visibilidad operativa sin ruido excesivo'],
      },
      architectureDecisions: {
        'pt-BR': ['Fila distribuída com prioridades', 'Eventos com logs estruturados', 'Política de reprocessamento baseada em estados'],
        en: ['Distributed queue with priorities', 'Event processing with structured logs', 'State-based reprocessing policy'],
        es: ['Cola distribuida con prioridades', 'Procesamiento por eventos con logs estructurados', 'Política de reproceso basada en estados'],
      },
      implementedSolutions: {
        'pt-BR': ['Painel de execução em tempo real', 'Política de retry exponencial', 'Sinalização clara de falha e retomada'],
        en: ['Real-time execution dashboard', 'Exponential retry policy', 'Clear failure and resumption signaling'],
        es: ['Panel de ejecución en tiempo real', 'Política de reintento exponencial', 'Señalización clara de falla y reanudación'],
      },
      learnings: {
        'pt-BR': ['Métricas de fila são críticas', 'Simplicidade vence complexidade prematura', 'Confiabilidade precisa ser produto, não detalhe técnico'],
        en: ['Queue metrics are mission critical', 'Simplicity beats premature complexity', 'Reliability must be treated as product, not just implementation detail'],
        es: ['Las métricas de cola son críticas', 'La simplicidad supera la complejidad prematura', 'La confiabilidad debe tratarse como producto, no solo como detalle técnico'],
      },
      futureImprovements: {
        'pt-BR': ['Editor visual de automações', 'Templates por tipo de fluxo', 'Camada preditiva para antecipação de falhas'],
        en: ['Visual automation editor', 'Flow-based templates', 'Predictive layer for anticipating failures'],
        es: ['Editor visual de automatizaciones', 'Plantillas por tipo de flujo', 'Capa predictiva para anticipar fallos'],
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
      'pt-BR': 'Sistema interno para consolidar conhecimento, indicadores e processos sem aumentar a carga cognitiva do time.',
      en: 'Internal system to consolidate knowledge, metrics, and processes without increasing team cognitive load.',
      es: 'Sistema interno para consolidar conocimiento, métricas y procesos sin aumentar la carga cognitiva del equipo.',
    },
    cover: '/assets/projects/hub.svg',
    stack: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    githubUrl: 'https://github.com/GodHercules',
    proof: {
      role: {
        'pt-BR': 'Definição da experiência interna, arquitetura modular e clareza operacional.',
        en: 'Defined the internal experience, modular architecture, and operational clarity.',
        es: 'Definí la experiencia interna, la arquitectura modular y la claridad operativa.',
      },
      engagement: {
        'pt-BR': 'Mapeamento de necessidades por squad, estruturação de informação e desenho de navegação orientada à autonomia.',
        en: 'Mapped squad needs, structured information, and designed autonomy-oriented navigation.',
        es: 'Mapeé necesidades por squad, estructuré la información y diseñé una navegación orientada a la autonomía.',
      },
      timeline: {
        'pt-BR': 'Construção orientada a evolução contínua, começando por áreas de maior atrito informacional.',
        en: 'Built for continuous evolution, starting with the highest-information-friction areas.',
        es: 'Construido para evolución continua, empezando por las áreas con mayor fricción informativa.',
      },
      team: {
        'pt-BR': 'Trabalho alinhado com times distribuídos e múltiplas frentes internas.',
        en: 'Work aligned with distributed teams and multiple internal functions.',
        es: 'Trabajo alineado con equipos distribuidos y múltiples frentes internas.',
      },
      responsibilities: {
        'pt-BR': ['Arquitetura da informação', 'Modelagem de permissões', 'Desenho da experiência interna', 'Estruturação de busca e navegação'],
        en: ['Information architecture', 'Permission modeling', 'Internal experience design', 'Search and navigation structure'],
        es: ['Arquitectura de información', 'Modelado de permisos', 'Diseño de experiencia interna', 'Estructura de búsqueda y navegación'],
      },
      capabilities: ['Internal Systems', 'Information Architecture', 'Search UX', 'Content Governance'],
      constraints: {
        'pt-BR': ['Conteúdo disperso em múltiplas fontes', 'Baixa padronização de comunicação', 'Necessidade de escalar sem virar repositório caótico'],
        en: ['Content scattered across multiple sources', 'Low communication standardization', 'Need to scale without becoming a chaotic repository'],
        es: ['Contenido disperso en múltiples fuentes', 'Baja estandarización de la comunicación', 'Necesidad de escalar sin convertirse en un repositorio caótico'],
      },
      outcomes: {
        'pt-BR': ['Maior autonomia para consulta e decisão', 'Base mais clara para governança interna', 'Melhor leitura de indicadores e processos por contexto'],
        en: ['More autonomy for consultation and decision-making', 'Clearer foundation for internal governance', 'Better reading of metrics and processes by context'],
        es: ['Mayor autonomía para consulta y decisión', 'Base más clara para la gobernanza interna', 'Mejor lectura de métricas y procesos por contexto'],
      },
      decisionSummary: {
        'pt-BR': 'O projeto privilegia clareza e navegação orientada a contexto em vez de apenas acumular informação em um único lugar.',
        en: 'The project prioritizes clarity and context-oriented navigation rather than simply accumulating information in one place.',
        es: 'El proyecto prioriza claridad y navegación orientada por contexto en lugar de acumular información en un solo lugar.',
      },
      architectureSummary: {
        'pt-BR': 'Arquitetura modular por domínio, contratos centralizados e camada de busca orientada à descoberta rápida.',
        en: 'Domain-modular architecture, centralized contracts, and a search layer focused on quick discovery.',
        es: 'Arquitectura modular por dominio, contratos centralizados y una capa de búsqueda enfocada en el descubrimiento rápido.',
      },
      featuredOutcome: {
        'pt-BR': 'Transforma documentação dispersa em sistema interno com leitura clara, navegação útil e governança crescente.',
        en: 'Turns scattered documentation into an internal system with clear reading, useful navigation, and growing governance.',
        es: 'Transforma documentación dispersa en un sistema interno con lectura clara, navegación útil y gobernanza creciente.',
      },
    },
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
        'pt-BR': ['Modelagem de permissões por equipe', 'Versionamento de documentos', 'Estrutura de busca sem perda de contexto'],
        en: ['Team-based permissions modeling', 'Document versioning', 'Search structure without losing context'],
        es: ['Modelado de permisos por equipo', 'Versionado de documentos', 'Estructura de búsqueda sin perder contexto'],
      },
      architectureDecisions: {
        'pt-BR': ['Arquitetura modular por domínio', 'Validação centralizada de contratos', 'Separação entre governança de conteúdo e experiência de consulta'],
        en: ['Domain-driven modular architecture', 'Centralized contract validation', 'Separation between content governance and consultation experience'],
        es: ['Arquitectura modular por dominio', 'Validación centralizada de contratos', 'Separación entre gobernanza de contenido y experiencia de consulta'],
      },
      implementedSolutions: {
        'pt-BR': ['Busca otimizada com índice textual', 'Interface orientada a atalhos', 'Organização da experiência por contexto de uso'],
        en: ['Optimized search with textual index', 'Shortcut-oriented interface', 'Experience organized by usage context'],
        es: ['Búsqueda optimizada con índice textual', 'Interfaz orientada a atajos', 'Experiencia organizada por contexto de uso'],
      },
      learnings: {
        'pt-BR': ['Governança de conteúdo é parte do produto', 'UX interna também exige refinamento', 'Autonomia nasce de contexto, não só de documentação'],
        en: ['Content governance is part of the product', 'Internal UX also requires refinement', 'Autonomy comes from context, not just documentation'],
        es: ['La gobernanza de contenido es parte del producto', 'La UX interna también exige refinamiento', 'La autonomía nace del contexto, no solo de la documentación'],
      },
      futureImprovements: {
        'pt-BR': ['Assistente interno de consulta', 'Integração com CRM e BI', 'Camada de recomendação contextual para leitura de processos'],
        en: ['Internal assistant for queries', 'CRM and BI integration', 'Contextual recommendation layer for process reading'],
        es: ['Asistente interno de consultas', 'Integración con CRM y BI', 'Capa de recomendación contextual para lectura de procesos'],
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
      'pt-BR': 'Coleção de estudos para validar arquitetura frontend, performance, DX e critérios de decisão técnica antes da produção.',
      en: 'Collection of studies to validate frontend architecture, performance, DX, and technical decision criteria before production.',
      es: 'Colección de estudios para validar arquitectura frontend, rendimiento, DX y criterios de decisión técnica antes de producción.',
    },
    cover: '/assets/projects/lab.svg',
    stack: ['React', 'TypeScript', 'Vitest', 'Storybook'],
    githubUrl: 'https://github.com/GodHercules',
    proof: {
      role: {
        'pt-BR': 'Pesquisa aplicada, benchmark de abordagens e documentação de decisão técnica.',
        en: 'Applied research, approach benchmarking, and technical decision documentation.',
        es: 'Investigación aplicada, benchmark de enfoques y documentación de decisiones técnicas.',
      },
      engagement: {
        'pt-BR': 'Criação de ambiente controlado para testar padrões antes de adoção em produto real.',
        en: 'Creation of a controlled environment to test patterns before adopting them in real products.',
        es: 'Creación de un entorno controlado para probar patrones antes de adoptarlos en productos reales.',
      },
      timeline: {
        'pt-BR': 'Iniciativa contínua, alimentada por hipóteses técnicas e necessidades de evolução do portfólio e de produtos.',
        en: 'Ongoing initiative fueled by technical hypotheses and product evolution needs.',
        es: 'Iniciativa continua impulsada por hipótesis técnicas y necesidades de evolución de producto.',
      },
      team: {
        'pt-BR': 'Formato enxuto, orientado a decisão técnica e reaproveitamento de conhecimento.',
        en: 'Lean format oriented around technical decisions and knowledge reuse.',
        es: 'Formato ligero orientado a decisiones técnicas y reutilización de conocimiento.',
      },
      responsibilities: {
        'pt-BR': ['Comparação de abordagens', 'Criação de benchmarks práticos', 'Documentação de tradeoffs', 'Transformação de estudo em padrão reutilizável'],
        en: ['Approach comparison', 'Creation of practical benchmarks', 'Tradeoff documentation', 'Turning studies into reusable patterns'],
        es: ['Comparación de enfoques', 'Creación de benchmarks prácticos', 'Documentación de tradeoffs', 'Transformación de estudios en patrones reutilizables'],
      },
      capabilities: ['Performance', 'DX', 'Architecture Research', 'Experimentation'],
      constraints: {
        'pt-BR': ['Separar hype de benefício real', 'Evitar adoção prematura de padrões', 'Garantir aprendizado reutilizável e não só experimentação isolada'],
        en: ['Separate hype from real benefit', 'Avoid premature pattern adoption', 'Ensure reusable learning instead of isolated experimentation'],
        es: ['Separar hype de beneficio real', 'Evitar adopción prematura de patrones', 'Garantizar aprendizaje reutilizable y no solo experimentación aislada'],
      },
      outcomes: {
        'pt-BR': ['Base melhor para escolhas de arquitetura', 'Menor risco em decisões de stack e performance', 'Repertório técnico mais claro para evolução de produto'],
        en: ['Stronger basis for architecture choices', 'Lower risk in stack and performance decisions', 'Clearer technical repertoire for product evolution'],
        es: ['Base más sólida para decisiones de arquitectura', 'Menor riesgo en decisiones de stack y rendimiento', 'Repertorio técnico más claro para la evolución del producto'],
      },
      decisionSummary: {
        'pt-BR': 'A ideia não é provar tecnologia nova, mas reduzir risco e aumentar clareza antes de comprometer o produto com uma direção técnica.',
        en: 'The goal is not to prove new technology for its own sake, but to reduce risk and increase clarity before committing a product to a technical direction.',
        es: 'La idea no es probar tecnología nueva por sí sola, sino reducir riesgo y aumentar claridad antes de comprometer un producto con una dirección técnica.',
      },
      architectureSummary: {
        'pt-BR': 'Repositório modular de experimentos, cenários comparáveis e documentação voltada à decisão.',
        en: 'Modular repository of experiments, comparable scenarios, and decision-oriented documentation.',
        es: 'Repositorio modular de experimentos, escenarios comparables y documentación orientada a la decisión.',
      },
      featuredOutcome: {
        'pt-BR': 'Transforma estudo técnico em critério prático para arquitetura, DX e performance.',
        en: 'Turns technical study into practical criteria for architecture, DX, and performance.',
        es: 'Transforma estudio técnico en criterio práctico para arquitectura, DX y rendimiento.',
      },
    },
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
        'pt-BR': ['Mensuração de impacto real', 'Isolamento de variáveis de teste', 'Documentação útil para tomada de decisão'],
        en: ['Measuring real impact', 'Test variable isolation', 'Useful documentation for decision-making'],
        es: ['Medición de impacto real', 'Aislamiento de variables de prueba', 'Documentación útil para la toma de decisiones'],
      },
      architectureDecisions: {
        'pt-BR': ['Repositório modular de experimentos', 'Pipeline de benchmarks automatizados', 'Critérios explícitos para adoção ou descarte'],
        en: ['Modular repository for experiments', 'Automated benchmark pipeline', 'Explicit criteria for adoption or rejection'],
        es: ['Repositorio modular de experimentos', 'Pipeline automatizado de benchmarks', 'Criterios explícitos para adopción o descarte'],
      },
      implementedSolutions: {
        'pt-BR': ['Template padrão para estudos', 'Matriz comparativa de resultados', 'Documentação orientada a impacto e tradeoff'],
        en: ['Standard template for studies', 'Comparative matrix of outcomes', 'Documentation focused on impact and tradeoffs'],
        es: ['Plantilla estándar para estudios', 'Matriz comparativa de resultados', 'Documentación orientada a impacto y tradeoffs'],
      },
      learnings: {
        'pt-BR': ['Hipóteses claras reduzem desperdício', 'Documentação facilita evolução da equipe', 'Nem toda inovação compensa no produto final'],
        en: ['Clear hypotheses reduce waste', 'Documentation accelerates team evolution', 'Not every innovation pays off in the final product'],
        es: ['Hipótesis claras reducen desperdicio', 'La documentación acelera la evolución del equipo', 'No toda innovación compensa en el producto final'],
      },
      futureImprovements: {
        'pt-BR': ['Publicação recorrente de insights', 'Integração com base de conhecimento', 'Painel comparativo vivo para evolução de benchmarks'],
        en: ['Recurring publication of insights', 'Knowledge base integration', 'Living comparative panel for benchmark evolution'],
        es: ['Publicación recurrente de insights', 'Integración con base de conocimiento', 'Panel comparativo vivo para evolución de benchmarks'],
      },
    },
  },
];

export function getDevelopmentProjectBySlug(slug: string) {
  return developmentProjects.find((project) => project.slug === slug);
}
