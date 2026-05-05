import Link from 'next/link';

import { Reveal } from '@/components/ui/reveal';
import { Section, SectionLead, SectionTitle } from '@/components/ui/section';
import type { Locale } from '@/lib/i18n/config';
import type { TechProject } from '@/types/project';

type BuildSurfacesSectionProps = {
  locale: Locale;
  projects: TechProject[];
};

type Surface = {
  title: string;
  summary: string;
  bullets: string[];
  projectSlugs: string[];
};

const content: Record<
  Locale,
  {
    title: string;
    lead: string;
    evidenceLabel: string;
    cards: Surface[];
  }
> = {
  'pt-BR': {
    title: 'Produtos que eu posso liderar do zero a entrega',
    lead: 'Nao apenas interfaces bonitas. Aqui estao os tipos de sistema e entrega que eu consigo sustentar com arquitetura, integracao, dados, repertorio tecnico e leitura de produto.',
    evidenceLabel: 'Projetos de prova',
    cards: [
      {
        title: 'Plataformas e produtos operacionais',
        summary: 'Produtos com dados, estados criticos, leitura analitica e evolucao modular.',
        bullets: ['Arquitetura frontend', 'Leitura de fluxos', 'Governanca visual'],
        projectSlugs: ['atlas-platform'],
      },
      {
        title: 'Automacao e confiabilidade operacional',
        summary: 'Rotinas criticas transformadas em pipelines mais previsiveis, observaveis e reprocessaveis.',
        bullets: ['Filas e retries', 'Observabilidade', 'Integracoes'],
        projectSlugs: ['flow-ops-automation'],
      },
      {
        title: 'Sistemas internos e bases de conhecimento',
        summary: 'Experiencias internas com contexto, busca, governanca e autonomia real para o time.',
        bullets: ['Arquitetura da informacao', 'Search UX', 'Permissoes e contexto'],
        projectSlugs: ['inside-hub'],
      },
      {
        title: 'Pesquisa tecnica e experimentacao aplicada',
        summary: 'Estudos que reduzem risco, validam stack e transformam benchmark em criterio de decisao.',
        bullets: ['Performance', 'DX', 'Benchmarks reutilizaveis'],
        projectSlugs: ['dev-lab-studies'],
      },
    ],
  },
  en: {
    title: 'Products I can lead from zero to delivery',
    lead: 'Not only polished interfaces. These are the system shapes and delivery surfaces I can support with architecture, integration, data, technical depth and product judgment.',
    evidenceLabel: 'Proof projects',
    cards: [
      {
        title: 'Platforms and operational products',
        summary: 'Products with data, critical states, analytical readability, and modular evolution.',
        bullets: ['Frontend architecture', 'Flow design', 'Visual governance'],
        projectSlugs: ['atlas-platform'],
      },
      {
        title: 'Automation and operational reliability',
        summary: 'Critical routines turned into more predictable, observable, and recoverable pipelines.',
        bullets: ['Queues and retries', 'Observability', 'Integrations'],
        projectSlugs: ['flow-ops-automation'],
      },
      {
        title: 'Internal systems and knowledge bases',
        summary: 'Internal experiences with context, search, governance, and actual team autonomy.',
        bullets: ['Information architecture', 'Search UX', 'Permissions and context'],
        projectSlugs: ['inside-hub'],
      },
      {
        title: 'Technical research and applied experimentation',
        summary: 'Studies that reduce risk, validate stack choices, and turn benchmarks into decision criteria.',
        bullets: ['Performance', 'DX', 'Reusable benchmarks'],
        projectSlugs: ['dev-lab-studies'],
      },
    ],
  },
  es: {
    title: 'Productos que puedo liderar desde cero hasta la entrega',
    lead: 'No solo interfaces pulidas. Estas son las superficies de sistema y entrega que puedo sostener con arquitectura, integracion, datos, profundidad tecnica y criterio de producto.',
    evidenceLabel: 'Proyectos de prueba',
    cards: [
      {
        title: 'Plataformas y productos operativos',
        summary: 'Productos con datos, estados criticos, lectura analitica y evolucion modular.',
        bullets: ['Arquitectura frontend', 'Lectura de flujos', 'Gobernanza visual'],
        projectSlugs: ['atlas-platform'],
      },
      {
        title: 'Automatizacion y confiabilidad operativa',
        summary: 'Rutinas criticas convertidas en pipelines mas previsibles, observables y recuperables.',
        bullets: ['Colas y reintentos', 'Observabilidad', 'Integraciones'],
        projectSlugs: ['flow-ops-automation'],
      },
      {
        title: 'Sistemas internos y bases de conocimiento',
        summary: 'Experiencias internas con contexto, busqueda, gobernanza y autonomia real para el equipo.',
        bullets: ['Arquitectura de informacion', 'Search UX', 'Permisos y contexto'],
        projectSlugs: ['inside-hub'],
      },
      {
        title: 'Investigacion tecnica y experimentacion aplicada',
        summary: 'Estudios que reducen riesgo, validan stack y convierten benchmark en criterio de decision.',
        bullets: ['Performance', 'DX', 'Benchmarks reutilizables'],
        projectSlugs: ['dev-lab-studies'],
      },
    ],
  },
};

export function BuildSurfacesSection({ locale, projects }: BuildSurfacesSectionProps) {
  const section = content[locale];
  const projectIndex = new Map(projects.map((project) => [project.slug, project]));

  return (
    <Section className="pt-8">
      <div className="content-grid">
        <SectionTitle>{section.title}</SectionTitle>
        <SectionLead>{section.lead}</SectionLead>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {section.cards.map((card, index) => (
            <Reveal key={card.title} delay={index * 0.06}>
              <article className="glass h-full rounded-3xl border border-border/70 p-6">
                <h3 className="font-display text-2xl leading-tight tracking-tight">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-fg/75">{card.summary}</p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {card.bullets.map((bullet) => (
                    <li key={bullet} className="rounded-full border border-border/70 bg-muted/70 px-3 py-1 text-xs text-fg/75">
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 rounded-2xl border border-border/70 bg-muted/50 p-4">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-fg/45">{section.evidenceLabel}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {card.projectSlugs.map((slug) => {
                      const project = projectIndex.get(slug);

                      if (!project) {
                        return null;
                      }

                      return (
                        <Link
                          key={slug}
                          href={`/${locale}/development/${slug}`}
                          className="rounded-full border border-border bg-card px-3 py-2 text-sm text-fg/80 transition hover:border-fg/40 hover:text-fg"
                        >
                          {project.title[locale]}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
