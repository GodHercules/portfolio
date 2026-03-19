import { designProjects } from '@/data/design-projects';
import { developmentProjects } from '@/data/development-projects';
import { githubOverrides } from '@/data/github-overrides';
import { profile } from '@/data/profile';
import type { Locale } from '@/lib/i18n/config';

type AssistantAnswer = {
  text: string;
  related?: string[];
};

type MatchableProject = {
  title: string;
  summary: string;
  stack: string[];
  role?: string;
  outcomes?: string[];
  decisionSummary?: string;
  kind: 'development' | 'design';
};

const capabilityCopy: Record<Locale, string[]> = {
  'pt-BR': [
    'Arquitetura frontend com Next.js, TypeScript e i18n.',
    'Design systems, direcao visual e interfaces premium.',
    'Automacoes, integracoes com APIs e componentes orientados a produto.',
  ],
  en: [
    'Frontend architecture with Next.js, TypeScript and i18n.',
    'Design systems, visual direction and premium interfaces.',
    'Automations, API integrations and product-oriented components.',
  ],
  es: [
    'Arquitectura frontend con Next.js, TypeScript e i18n.',
    'Design systems, direccion visual e interfaces premium.',
    'Automatizaciones, integraciones con APIs y componentes orientados a producto.',
  ],
};

const processCopy: Record<Locale, string> = {
  'pt-BR':
    'Ele costuma atuar do discovery ate a entrega: entendimento de contexto, definicao da arquitetura, exploracao visual, implementacao, refinamento e validacao do produto final.',
  en: 'He usually works from discovery to delivery: context framing, architecture definition, visual exploration, implementation, refinement and validation of the final product.',
  es: 'Suele trabajar desde discovery hasta la entrega: entendimiento del contexto, definicion de arquitectura, exploracion visual, implementacion, refinamiento y validacion del producto final.',
};

const teamCopy: Record<Locale, string> = {
  'pt-BR':
    'Com times, ele tende a reduzir atrito entre produto, design e engenharia: organiza alinhamento rapido, explicita prioridades, protege o escopo e deixa o handoff sustentavel para o squad.',
  en: 'With teams, he reduces friction between product, design and engineering: he creates fast alignment, makes priorities explicit, protects scope and keeps handoff sustainable for the squad.',
  es: 'Con equipos, reduce friccion entre producto, diseno e ingenieria: organiza alineacion rapida, explicita prioridades, protege el alcance y deja un handoff sostenible para el squad.',
};

const labCopy: Record<Locale, string> = {
  'pt-BR':
    'A camada de GitHub funciona como laboratorio tecnico: experimentos, estudos e projetos publicos entram como prova complementar de engenharia, nao apenas como feed.',
  en: 'The GitHub layer works as a technical lab: experiments, studies and public projects complement the curated cases instead of acting as a generic feed.',
  es: 'La capa de GitHub funciona como laboratorio tecnico: experimentos, estudios y proyectos publicos complementan los casos curados en lugar de ser un feed generico.',
};

function normalize(value: string) {
  return value
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase();
}

function getProjects(locale: Locale): MatchableProject[] {
  return [
    ...developmentProjects.map((project) => ({
      title: project.title[locale],
      summary: project.summary[locale],
      stack: project.stack,
      role: project.proof.role[locale],
      outcomes: project.proof.outcomes[locale],
      decisionSummary: project.proof.decisionSummary[locale],
      kind: 'development' as const,
    })),
    ...designProjects.map((project) => ({
      title: project.title[locale],
      summary: project.summary[locale],
      stack: project.tags,
      kind: 'design' as const,
    })),
  ];
}

function findProject(locale: Locale, question: string) {
  const normalizedQuestion = normalize(question);

  return getProjects(locale).find((project) => {
    const candidates = [project.title, project.summary, ...project.stack].map(normalize);
    return candidates.some((candidate) => normalizedQuestion.includes(candidate));
  });
}

function listTopStacks(locale: Locale) {
  const stacks = new Map<string, number>();

  for (const project of getProjects(locale)) {
    for (const item of project.stack) {
      stacks.set(item, (stacks.get(item) ?? 0) + 1);
    }
  }

  return [...stacks.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6)
    .map(([label]) => label)
    .join(', ');
}

function latestGithubRepo(locale: Locale) {
  const fallback = githubOverrides[0];
  if (!fallback) {
    return null;
  }

  if (locale === 'en') {
    return `A good example is ${fallback.repo}, framed as a multilingual portfolio with scalable architecture, motion and dynamic project integration.`;
  }

  if (locale === 'es') {
    return `Un buen ejemplo es ${fallback.repo}, presentado como un portafolio multilingue con arquitectura escalable, motion e integracion dinamica de proyectos.`;
  }

  return `Um bom exemplo e ${fallback.repo}, apresentado como um portfolio multilingue com arquitetura escalavel, motion e integracao dinamica de projetos.`;
}

export function getPortfolioAssistantReply(locale: Locale, question: string): AssistantAnswer {
  const q = normalize(question);
  const matchedProject = findProject(locale, question);

  if (matchedProject) {
    if (locale === 'en') {
      return {
        text: `${matchedProject.title} is part of the ${matchedProject.kind} track. It highlights ${matchedProject.summary} ${
          matchedProject.role ? `The role focus there is ${matchedProject.role} ` : ''
        }${matchedProject.decisionSummary ? `A key decision was: ${matchedProject.decisionSummary} ` : ''}${
          matchedProject.outcomes?.length ? `Outcomes include ${matchedProject.outcomes.slice(0, 2).join(' and ')}. ` : ''
        }The main stack/signals there are ${matchedProject.stack.join(', ')}.`,
        related: ['What tradeoffs were made there?', 'How does this connect to product thinking?'],
      };
    }

    if (locale === 'es') {
      return {
        text: `${matchedProject.title} forma parte del frente de ${matchedProject.kind === 'development' ? 'desarrollo' : 'diseno'}. Destaca ${matchedProject.summary} ${
          matchedProject.role ? `El foco del rol alli fue ${matchedProject.role} ` : ''
        }${matchedProject.decisionSummary ? `Una decision clave fue: ${matchedProject.decisionSummary} ` : ''}${
          matchedProject.outcomes?.length ? `Entre los resultados estan ${matchedProject.outcomes.slice(0, 2).join(' y ')}. ` : ''
        }Las principales tecnologias/senales alli son ${matchedProject.stack.join(', ')}.`,
        related: ['Que tradeoffs hubo en ese proyecto?', 'Como se conecta con producto?'],
      };
    }

    return {
      text: `${matchedProject.title} faz parte da frente de ${matchedProject.kind === 'development' ? 'desenvolvimento' : 'design'}. O case destaca ${matchedProject.summary} ${
        matchedProject.role ? `O foco de atuacao ali foi ${matchedProject.role} ` : ''
      }${matchedProject.decisionSummary ? `Uma decisao chave foi: ${matchedProject.decisionSummary} ` : ''}${
        matchedProject.outcomes?.length ? `Entre os resultados estao ${matchedProject.outcomes.slice(0, 2).join(' e ')}. ` : ''
      }As principais tecnologias/sinais ali sao ${matchedProject.stack.join(', ')}.`,
      related: ['Quais tradeoffs apareceram nesse projeto?', 'Como isso se conecta com produto?'],
    };
  }

  if (q.includes('stack') || q.includes('tecnolog') || q.includes('tech') || q.includes('ferrament')) {
    const topStacks = listTopStacks(locale);

    if (locale === 'en') {
      return {
        text: `The portfolio concentrates on ${topStacks}. Beyond tools, the strongest signals are frontend architecture, product-oriented UI, API integrations and visual systems.`,
        related: ['What kind of projects fit this stack?', 'How does he combine design and engineering?'],
      };
    }

    if (locale === 'es') {
      return {
        text: `El portafolio se concentra en ${topStacks}. Mas alla de las herramientas, las senales mas fuertes son arquitectura frontend, UI orientada a producto, integraciones con APIs y sistemas visuales.`,
        related: ['Que tipo de proyectos encajan con ese stack?', 'Como combina diseno e ingenieria?'],
      };
    }

    return {
      text: `O portfolio se concentra em ${topStacks}. Alem das ferramentas, os sinais mais fortes estao em arquitetura frontend, UI orientada a produto, integracoes com APIs e sistemas visuais.`,
      related: ['Que tipo de projeto combina com esse stack?', 'Como ele une design e engenharia?'],
    };
  }

  if (q.includes('contato') || q.includes('contact') || q.includes('email') || q.includes('whats') || q.includes('telefone')) {
    if (locale === 'en') {
      return {
        text: `You can reach Hercules at ${profile.email} or by phone/WhatsApp at ${profile.phoneDisplay}. The contact page also frames the best project fit and collaboration formats.`,
        related: ['What kinds of projects are a good fit?', 'How does he usually work?'],
      };
    }

    if (locale === 'es') {
      return {
        text: `Puedes contactar a Hercules en ${profile.email} o por telefono/WhatsApp en ${profile.phoneDisplay}. La pagina de contacto tambien explica el mejor tipo de proyecto y formato de colaboracion.`,
        related: ['Que tipos de proyecto son mejor encaje?', 'Como suele trabajar?'],
      };
    }

    return {
      text: `Voce pode falar com o Hercules pelo e-mail ${profile.email} ou no telefone/WhatsApp ${profile.phoneDisplay}. A pagina de contato tambem explica melhor o encaixe de projeto e formatos de colaboracao.`,
      related: ['Que tipos de projeto fazem mais sentido?', 'Como ele costuma trabalhar?'],
    };
  }

  if (q.includes('process') || q.includes('processo') || q.includes('discovery') || q.includes('produto') || q.includes('product')) {
    return {
      text: processCopy[locale],
      related:
        locale === 'en'
          ? ['What does he usually deliver end-to-end?', 'How does design connect with engineering?']
          : locale === 'es'
            ? ['Que suele entregar de punta a punta?', 'Como conecta diseno con ingenieria?']
            : ['O que ele costuma entregar de ponta a ponta?', 'Como ele conecta design com engenharia?'],
    };
  }

  if (q.includes('time') || q.includes('team') || q.includes('squad') || q.includes('equipe') || q.includes('equipo') || q.includes('stakeholder') || q.includes('handoff') || q.includes('colabor')) {
    return {
      text: teamCopy[locale],
      related:
        locale === 'en'
          ? ['How does he handle alignment?', 'What does his handoff look like?']
          : locale === 'es'
            ? ['Como maneja la alineacion?', 'Como se ve su handoff?']
            : ['Como ele conduz alinhamento?', 'Como funciona o handoff com o time?'],
    };
  }

  if (q.includes('ia') || q.includes('ai') || q.includes('api') || q.includes('integrac') || q.includes('automation') || q.includes('automacao')) {
    if (locale === 'en') {
      return {
        text: 'The portfolio shows AI and integration work as product layers, not isolated buzzwords: content-aware assistants, API-connected workflows, operational automation, and architecture shaped for observability and retries.',
        related: ['Which project best shows automation?', 'How does he turn integration work into product value?'],
      };
    }

    if (locale === 'es') {
      return {
        text: 'El portafolio muestra IA e integraciones como capas de producto y no como buzzwords aisladas: asistentes guiados por contenido, flujos conectados por API, automatizacion operativa y arquitectura pensada para observabilidad y reintentos.',
        related: ['Que proyecto muestra mejor automatizacion?', 'Como convierte integraciones en valor de producto?'],
      };
    }

    return {
      text: 'O portfolio mostra IA e integracoes como camadas de produto, e nao como buzzwords isoladas: assistentes guiados por conteudo, fluxos conectados por API, automacao operacional e arquitetura pensada para observabilidade e retries.',
      related: ['Qual projeto mostra melhor automacao?', 'Como ele transforma integracoes em valor de produto?'],
    };
  }

  if (q.includes('impact') || q.includes('resultado') || q.includes('impacto') || q.includes('metric') || q.includes('metrica')) {
    if (locale === 'en') {
      return {
        text: 'The impact layer focuses on operational clarity, recoverability, team autonomy, and architecture that supports evolution. The cases now surface quick metrics and architectural pillars so the work reads as product impact, not only implementation.',
        related: ['Which case has the strongest impact proof?', 'What architecture pillars appear most often?'],
      };
    }

    if (locale === 'es') {
      return {
        text: 'La capa de impacto se enfoca en claridad operativa, recuperacion, autonomia del equipo y arquitectura pensada para evolucionar. Los casos ahora muestran metricas rapidas y pilares arquitectonicos para que el trabajo se lea como impacto de producto y no solo como implementacion.',
        related: ['Que caso tiene la prueba de impacto mas fuerte?', 'Que pilares de arquitectura aparecen con mas frecuencia?'],
      };
    }

    return {
      text: 'A camada de impacto foca em clareza operacional, retomada, autonomia do time e arquitetura pensada para evolucao. Os cases agora mostram metricas rapidas e pilares arquiteturais para que a entrega seja lida como impacto de produto, e nao so como implementacao.',
      related: ['Qual case tem a prova de impacto mais forte?', 'Quais pilares de arquitetura aparecem com mais frequencia?'],
    };
  }

  if (q.includes('design') || q.includes('ui') || q.includes('ux') || q.includes('grafic') || q.includes('visual')) {
    if (locale === 'en') {
      return {
        text: `Yes. The hybrid positioning is intentional: ${capabilityCopy.en.join(' ')}`,
        related: ['What is the difference between the design and development tracks?', 'How does that help product delivery?'],
      };
    }

    if (locale === 'es') {
      return {
        text: `Si. El posicionamiento hibrido es intencional: ${capabilityCopy.es.join(' ')}`,
        related: ['Cual es la diferencia entre los frentes de diseno y desarrollo?', 'Como ayuda eso al producto final?'],
      };
    }

    return {
      text: `Sim. O posicionamento hibrido e intencional: ${capabilityCopy['pt-BR'].join(' ')}`,
      related: ['Qual e a diferenca entre as frentes de design e desenvolvimento?', 'Como isso ajuda na entrega do produto?'],
    };
  }

  if (q.includes('github') || q.includes('repo') || q.includes('repositorio') || q.includes('open source') || q.includes('lab')) {
    const latest = latestGithubRepo(locale);

    return {
      text: `${labCopy[locale]}${latest ? ` ${latest}` : ''}`,
      related:
        locale === 'en'
          ? ['Why are those repositories relevant?', 'Which repo best shows frontend architecture?']
          : locale === 'es'
            ? ['Por que esos repositorios son relevantes?', 'Que repo muestra mejor arquitectura frontend?']
            : ['Por que esses repositorios sao relevantes?', 'Qual repo mostra melhor arquitetura frontend?'],
    };
  }

  if (q.includes('capab') || q.includes('habil') || q.includes('especial') || q.includes('what do you do')) {
    if (locale === 'en') {
      return {
        text: `The strongest capabilities are frontend architecture, product-oriented interfaces, API/integration work, design systems and visual direction. The portfolio is being framed to make each of those proofs more explicit.`,
      };
    }

    if (locale === 'es') {
      return {
        text: `Las capacidades mas fuertes son arquitectura frontend, interfaces orientadas a producto, integraciones con APIs, design systems y direccion visual. El portafolio esta estructurado para volver esas pruebas mas explicitas.`,
      };
    }

    return {
      text: `As capacidades mais fortes estao em arquitetura frontend, interfaces orientadas a produto, integracoes com APIs, design systems e direcao visual. O portfolio esta sendo estruturado para deixar essas provas mais explicitas.`,
    };
  }

  if (locale === 'en') {
    return {
      text: 'I can answer about stack, projects by name, process, team collaboration, GitHub lab, contact and how design connects with engineering. Try asking about a specific project, capability or team scenario.',
      related: ['What technologies does he use?', 'How does he usually work?', 'How does he work with teams?'],
    };
  }

  if (locale === 'es') {
    return {
      text: 'Puedo responder sobre stack, proyectos por nombre, proceso, colaboracion con equipos, laboratorio GitHub, contacto y como conecta diseno con ingenieria. Prueba preguntando por un proyecto, capacidad o escenario de equipo concreto.',
      related: ['Que tecnologias utiliza?', 'Como suele trabajar?', 'Como trabaja con equipos?'],
    };
  }

  return {
    text: 'Posso responder sobre stack, projetos por nome, processo, colaboracao com times, laboratorio GitHub, contato e como ele conecta design com engenharia. Tente perguntar por um projeto, capacidade ou cenario de time especifico.',
    related: ['Quais tecnologias ele usa?', 'Como ele costuma trabalhar?', 'Como ele atua com times?'],
  };
}
