import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { ButtonLink } from '@/components/ui/button';
import { Section, SectionTitle } from '@/components/ui/section';
import { developmentProjects } from '@/data/development-projects';
import type { Locale } from '@/lib/i18n/config';
import type { Dictionary } from '@/lib/i18n/dictionaries';
import type { ProjectArchitecturePillar, ProjectMetric, TechProject } from '@/types/project';

type DevelopmentCaseProps = {
  project: TechProject;
  locale: Locale;
  dictionary: Dictionary;
};

type LensBlock = {
  title: string;
  items: string[];
};

type MetricBlock = ProjectMetric & {
  labelText: string;
  detailText?: string;
};

function ListBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="glass rounded-2xl p-5">
      <h3 className="font-medium text-fg">{title}</h3>
      <ul className="mt-3 space-y-2 text-sm text-fg/75">
        {items.map((item) => (
          <li key={item}>- {item}</li>
        ))}
      </ul>
    </div>
  );
}

const proofCopy: Record<
  Locale,
  {
    role: string;
    engagement: string;
    timeline: string;
    team: string;
    responsibilities: string;
    capabilities: string;
    constraints: string;
    outcomes: string;
    decisionSummary: string;
    architectureSummary: string;
    proofTitle: string;
    proofLead: string;
    systemLensTitle: string;
    systemLensLead: string;
    relatedCasesTitle: string;
    architectureMapTitle: string;
    architectureMapLead: string;
  }
> = {
  'pt-BR': {
    role: 'Papel',
    engagement: 'Escopo de atuacao',
    timeline: 'Ritmo de entrega',
    team: 'Contexto de colaboracao',
    responsibilities: 'Responsabilidades',
    capabilities: 'Capacidades acionadas',
    constraints: 'Restricoes reais',
    outcomes: 'Resultados entregues',
    decisionSummary: 'Decisao principal',
    architectureSummary: 'Leitura arquitetural',
    proofTitle: 'Leitura executiva do case',
    proofLead: 'Uma camada de evidencia para mostrar papel, escopo, decisoes e resultado do projeto.',
    systemLensTitle: 'Lente de sistema',
    systemLensLead: 'Uma leitura rapida de como a solucao se sustenta em arquitetura, implementacao e restricoes reais.',
    relatedCasesTitle: 'Casos relacionados',
    architectureMapTitle: 'Mapa de arquitetura',
    architectureMapLead: 'Uma leitura visual simples do fluxo principal e dos pilares que sustentam o case.',
  },
  en: {
    role: 'Role',
    engagement: 'Engagement scope',
    timeline: 'Delivery rhythm',
    team: 'Collaboration context',
    responsibilities: 'Responsibilities',
    capabilities: 'Activated capabilities',
    constraints: 'Real constraints',
    outcomes: 'Delivered outcomes',
    decisionSummary: 'Main decision',
    architectureSummary: 'Architecture readout',
    proofTitle: 'Executive case readout',
    proofLead: 'An evidence layer to show role, scope, decisions, and project outcome.',
    systemLensTitle: 'System lens',
    systemLensLead: 'A quick read of how the solution holds together across architecture, implementation, and real constraints.',
    relatedCasesTitle: 'Related cases',
    architectureMapTitle: 'Architecture map',
    architectureMapLead: 'A simple visual read of the main flow and the pillars that support the case.',
  },
  es: {
    role: 'Rol',
    engagement: 'Alcance de actuacion',
    timeline: 'Ritmo de entrega',
    team: 'Contexto de colaboracion',
    responsibilities: 'Responsabilidades',
    capabilities: 'Capacidades activadas',
    constraints: 'Restricciones reales',
    outcomes: 'Resultados entregados',
    decisionSummary: 'Decision principal',
    architectureSummary: 'Lectura arquitectonica',
    proofTitle: 'Lectura ejecutiva del caso',
    proofLead: 'Una capa de evidencia para mostrar rol, alcance, decisiones y resultado del proyecto.',
    systemLensTitle: 'Lente de sistema',
    systemLensLead: 'Una lectura rapida de como se sostiene la solucion entre arquitectura, implementacion y restricciones reales.',
    relatedCasesTitle: 'Casos relacionados',
    architectureMapTitle: 'Mapa de arquitectura',
    architectureMapLead: 'Una lectura visual simple del flujo principal y de los pilares que sostienen el caso.',
  },
};

export function DevelopmentCase({ project, locale, dictionary }: DevelopmentCaseProps) {
  const t = proofCopy[locale] as (typeof proofCopy)[Locale];
  const metrics: MetricBlock[] = project.proof.metrics.map((metric) => ({
    ...metric,
    labelText: metric.label[locale],
    detailText: metric.detail?.[locale],
  }));
  const pillars = project.proof.architecturePillars as ProjectArchitecturePillar[];
  const lensBlocks: LensBlock[] = [
    {
      title: dictionary.projectPage.architectureDecisions,
      items: project.body.architectureDecisions[locale].slice(0, 3),
    },
    {
      title: dictionary.projectPage.implementedSolutions,
      items: project.body.implementedSolutions[locale].slice(0, 3),
    },
    {
      title: dictionary.projectPage.technicalChallenges,
      items: project.body.technicalChallenges[locale].slice(0, 3),
    },
  ];
  const relatedProjects = developmentProjects
    .filter((candidate) => candidate.slug !== project.slug)
    .filter(
      (candidate) =>
        candidate.category === project.category ||
        candidate.proof.capabilities.some((capability) => project.proof.capabilities.includes(capability)),
    )
    .slice(0, 2);

  return (
    <Section>
      <div className="content-grid">
        <ButtonLink href={`/${locale}/development`} variant="ghost" className="mb-5">
          {dictionary.common.back}
        </ButtonLink>

        <Badge>{dictionary.categories.development[project.category]}</Badge>
        <SectionTitle>{project.title[locale]}</SectionTitle>
        <p className="mt-4 max-w-3xl text-sm text-fg/75 sm:text-base">{project.summary[locale]}</p>
        <p className="mt-3 max-w-3xl font-display text-2xl leading-tight tracking-tight text-fg/90">
          {project.proof.featuredOutcome[locale]}
        </p>

        <div className="relative mt-8 aspect-[16/8] overflow-hidden rounded-3xl border border-border bg-muted">
          <Image src={project.cover} alt={project.title[locale]} fill className="object-cover" sizes="100vw" />
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          <article className="lg:col-span-2 space-y-4">
            <div className="glass rounded-2xl p-5">
              <h3 className="font-medium">{t.decisionSummary}</h3>
              <p className="mt-2 text-sm text-fg/75">{project.proof.decisionSummary[locale]}</p>
            </div>
            <div className="glass rounded-2xl p-5">
              <h3 className="font-medium">{dictionary.projectPage.context}</h3>
              <p className="mt-2 text-sm text-fg/75">{project.body.context[locale]}</p>
            </div>
            <div className="glass rounded-2xl p-5">
              <h3 className="font-medium">{dictionary.projectPage.problem}</h3>
              <p className="mt-2 text-sm text-fg/75">{project.body.problem[locale]}</p>
            </div>
            <div className="glass rounded-2xl p-5">
              <h3 className="font-medium">{dictionary.projectPage.objective}</h3>
              <p className="mt-2 text-sm text-fg/75">{project.body.objective[locale]}</p>
            </div>
          </article>

          <aside className="glass rounded-2xl p-5">
            <h3 className="font-medium text-fg">Stack</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <li key={item} className="rounded-full bg-muted px-3 py-1 text-xs text-fg/75">
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-5 space-y-4 text-sm text-fg/75">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-fg/45">{t.role}</p>
                <p className="mt-1">{project.proof.role[locale]}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-fg/45">{t.engagement}</p>
                <p className="mt-1">{project.proof.engagement[locale]}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-fg/45">{t.timeline}</p>
                <p className="mt-1">{project.proof.timeline[locale]}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-fg/45">{t.team}</p>
                <p className="mt-1">{project.proof.team[locale]}</p>
              </div>
            </div>
            <div className="mt-5 space-y-3 text-sm">
              {project.githubUrl ? (
                <Link href={project.githubUrl} className="block rounded-xl border border-border px-3 py-2 hover:bg-muted" target="_blank" rel="noreferrer">
                  GitHub
                </Link>
              ) : null}
              {project.liveUrl ? (
                <Link href={project.liveUrl} className="block rounded-xl border border-border px-3 py-2 hover:bg-muted" target="_blank" rel="noreferrer">
                  {dictionary.common.live}
                </Link>
              ) : null}
            </div>
          </aside>
        </div>

        <div className="mt-8">
          <h3 className="font-display text-2xl leading-tight tracking-tight">{t.proofTitle}</h3>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-fg/75">{t.proofLead}</p>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <ListBlock title={t.responsibilities} items={project.proof.responsibilities[locale]} />
          <ListBlock title={t.constraints} items={project.proof.constraints[locale]} />
          <ListBlock title={t.outcomes} items={project.proof.outcomes[locale]} />
          <ListBlock title={t.capabilities} items={project.proof.capabilities} />
        </div>

        <div className="mt-10">
          <h3 className="font-display text-2xl leading-tight tracking-tight">{t.architectureMapTitle}</h3>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-fg/75">{t.architectureMapLead}</p>
        </div>

        <div className="mt-6 rounded-[2rem] border border-border/70 bg-muted/30 p-5 sm:p-6">
          <div className="grid gap-4 lg:grid-cols-[1.15fr_auto_1fr] lg:items-stretch">
            <article className="glass rounded-3xl border border-border/70 p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-fg/45">{dictionary.projectPage.context}</p>
              <p className="mt-3 text-sm leading-relaxed text-fg/75">{project.body.context[locale]}</p>
              <p className="mt-4 text-xs uppercase tracking-[0.18em] text-accent">{t.decisionSummary}</p>
              <p className="mt-2 text-sm leading-relaxed text-fg/75">{project.proof.decisionSummary[locale]}</p>
            </article>

            <div className="flex items-center justify-center px-3 py-2 text-accent">
              <ArrowRight className="hidden lg:block" size={28} />
              <ArrowRight className="lg:hidden" size={20} />
            </div>

            <article className="glass rounded-3xl border border-border/70 p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-fg/45">{t.architectureSummary}</p>
              <p className="mt-3 text-sm leading-relaxed text-fg/75">{project.proof.architectureSummary[locale]}</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {pillars.map((pillar, index) => (
                  <div key={pillar.title[locale]} className="rounded-2xl border border-border/70 bg-card px-4 py-3">
                    <p className="text-xs uppercase tracking-[0.16em] text-fg/45">{index + 1}</p>
                    <p className="mt-2 font-medium text-fg">{pillar.title[locale]}</p>
                    <p className="mt-2 text-sm leading-relaxed text-fg/70">{pillar.summary[locale]}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>

        <div className="mt-8 grid gap-5 xl:grid-cols-[0.9fr_1.1fr]">
          <article className="glass rounded-3xl border border-border/70 p-6">
            <h3 className="font-display text-2xl leading-tight tracking-tight">Impacto e sinais</h3>
            <p className="mt-3 text-sm leading-relaxed text-fg/75">
              Sinais mais concretos do que o projeto entregou em termos de clareza, previsibilidade e governanca.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-3 xl:grid-cols-1">
              {metrics.map((metric) => (
                <div key={`${project.slug}-${metric.value}-${metric.labelText}`} className="rounded-2xl border border-border/70 bg-muted/70 px-4 py-4">
                  <p className="font-display text-3xl leading-none">{metric.value}</p>
                  <p className="mt-2 text-sm leading-relaxed text-fg/75">{metric.labelText}</p>
                  {metric.detailText ? <p className="mt-2 text-xs leading-relaxed text-fg/55">{metric.detailText}</p> : null}
                </div>
              ))}
            </div>
          </article>

          <article className="glass rounded-3xl border border-border/70 p-6">
            <h3 className="font-display text-2xl leading-tight tracking-tight">{t.architectureMapTitle}</h3>
            <p className="mt-3 text-sm leading-relaxed text-fg/75">{t.architectureMapLead}</p>
            <div className="mt-5 grid gap-3">
              {pillars.map((pillar, index) => (
                <div key={`${project.slug}-${pillar.title[locale]}`} className="rounded-2xl border border-border/70 bg-muted/70 px-4 py-4">
                  <p className="text-xs uppercase tracking-[0.16em] text-fg/45">{index + 1}</p>
                  <p className="mt-2 font-medium text-fg">{pillar.title[locale]}</p>
                  <p className="mt-2 text-sm leading-relaxed text-fg/75">{pillar.summary[locale]}</p>
                </div>
              ))}
            </div>
          </article>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <div className="glass rounded-2xl p-5">
            <h3 className="font-medium">{t.architectureSummary}</h3>
            <p className="mt-2 text-sm leading-relaxed text-fg/75">{project.proof.architectureSummary[locale]}</p>
          </div>
          <div className="glass rounded-2xl p-5">
            <h3 className="font-medium">{t.decisionSummary}</h3>
            <p className="mt-2 text-sm leading-relaxed text-fg/75">{project.proof.decisionSummary[locale]}</p>
          </div>
        </div>

        <div className="mt-10">
          <h3 className="font-display text-2xl leading-tight tracking-tight">{t.systemLensTitle}</h3>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-fg/75">{t.systemLensLead}</p>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {lensBlocks.map((block) => (
            <article key={block.title} className="glass rounded-2xl border border-border/70 p-5">
              <h4 className="font-medium text-fg">{block.title}</h4>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-fg/75">
                {block.items.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <ListBlock title={dictionary.projectPage.features} items={project.body.features[locale]} />
          <ListBlock title={dictionary.projectPage.technicalChallenges} items={project.body.technicalChallenges[locale]} />
          <ListBlock title={dictionary.projectPage.architectureDecisions} items={project.body.architectureDecisions[locale]} />
          <ListBlock title={dictionary.projectPage.implementedSolutions} items={project.body.implementedSolutions[locale]} />
          <ListBlock title={dictionary.projectPage.learnings} items={project.body.learnings[locale]} />
          <ListBlock title={dictionary.projectPage.futureImprovements} items={project.body.futureImprovements[locale]} />
        </div>

        {relatedProjects.length > 0 ? (
          <div className="mt-10">
            <h3 className="font-display text-2xl leading-tight tracking-tight">{t.relatedCasesTitle}</h3>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {relatedProjects.map((related) => (
                <Link
                  key={related.slug}
                  href={`/${locale}/development/${related.slug}`}
                  className="glass rounded-3xl border border-border/70 p-6 transition hover:border-fg/35"
                >
                  <p className="text-xs uppercase tracking-[0.18em] text-fg/45">
                    {dictionary.categories.development[related.category]}
                  </p>
                  <h4 className="mt-3 font-display text-2xl leading-tight tracking-tight text-fg">{related.title[locale]}</h4>
                  <p className="mt-3 text-sm leading-relaxed text-fg/75">{related.proof.featuredOutcome[locale]}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {related.proof.capabilities.slice(0, 3).map((capability) => (
                      <li key={capability} className="rounded-full border border-border bg-muted px-3 py-1 text-xs text-fg/75">
                        {capability}
                      </li>
                    ))}
                  </ul>
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </Section>
  );
}
