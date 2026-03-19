import Image from 'next/image';
import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { ButtonLink } from '@/components/ui/button';
import { Section, SectionTitle } from '@/components/ui/section';
import type { Locale } from '@/lib/i18n/config';
import type { Dictionary } from '@/lib/i18n/dictionaries';
import type { TechProject } from '@/types/project';

type DevelopmentCaseProps = {
  project: TechProject;
  locale: Locale;
  dictionary: Dictionary;
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
  },
};

export function DevelopmentCase({ project, locale, dictionary }: DevelopmentCaseProps) {
  const t = proofCopy[locale];

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

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <ListBlock title={dictionary.projectPage.features} items={project.body.features[locale]} />
          <ListBlock title={dictionary.projectPage.technicalChallenges} items={project.body.technicalChallenges[locale]} />
          <ListBlock title={dictionary.projectPage.architectureDecisions} items={project.body.architectureDecisions[locale]} />
          <ListBlock title={dictionary.projectPage.implementedSolutions} items={project.body.implementedSolutions[locale]} />
          <ListBlock title={dictionary.projectPage.learnings} items={project.body.learnings[locale]} />
          <ListBlock title={dictionary.projectPage.futureImprovements} items={project.body.futureImprovements[locale]} />
        </div>
      </div>
    </Section>
  );
}
