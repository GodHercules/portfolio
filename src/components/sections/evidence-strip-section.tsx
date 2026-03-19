import { Section } from '@/components/ui/section';
import type { Locale } from '@/lib/i18n/config';
import type { TechProject } from '@/types/project';

type EvidenceStripSectionProps = {
  locale: Locale;
  projects: TechProject[];
};

type StatItem = {
  value: string;
  label: string;
  detail: string;
};

const labels: Record<
  Locale,
  {
    cases: string;
    categories: string;
    locales: string;
    capabilities: string;
    caseDetail: string;
    categoryDetail: string;
    localeDetail: string;
    capabilityDetail: string;
  }
> = {
  'pt-BR': {
    cases: 'cases tecnicos',
    categories: 'frentes de solucao',
    locales: 'idiomas ativos',
    capabilities: 'clusters de capacidade',
    caseDetail: 'Projetos com leitura de papel, decisao, restricao e resultado.',
    categoryDetail: 'Aplicacoes, automacoes, sistemas internos e estudos tecnicos.',
    localeDetail: 'Portfolio pronto para leitura em portugues, ingles e espanhol.',
    capabilityDetail: 'Arquitetura, produto, automacao, performance, UX e integracoes.',
  },
  en: {
    cases: 'technical cases',
    categories: 'solution fronts',
    locales: 'active locales',
    capabilities: 'capability clusters',
    caseDetail: 'Projects framed by role, decision, constraints, and outcome.',
    categoryDetail: 'Applications, automations, internal systems, and technical studies.',
    localeDetail: 'Portfolio ready in Portuguese, English, and Spanish.',
    capabilityDetail: 'Architecture, product, automation, performance, UX, and integrations.',
  },
  es: {
    cases: 'casos tecnicos',
    categories: 'frentes de solucion',
    locales: 'idiomas activos',
    capabilities: 'clusters de capacidad',
    caseDetail: 'Proyectos leidos por rol, decision, restricciones y resultado.',
    categoryDetail: 'Aplicaciones, automatizaciones, sistemas internos y estudios tecnicos.',
    localeDetail: 'Portafolio listo en portugues, ingles y espanol.',
    capabilityDetail: 'Arquitectura, producto, automatizacion, performance, UX e integraciones.',
  },
};

export function EvidenceStripSection({ locale, projects }: EvidenceStripSectionProps) {
  const copy = labels[locale];
  const uniqueCategories = new Set(projects.map((project) => project.category));
  const uniqueCapabilities = new Set(projects.flatMap((project) => project.proof.capabilities));

  const stats: StatItem[] = [
    {
      value: `${projects.length}`,
      label: copy.cases,
      detail: copy.caseDetail,
    },
    {
      value: `${uniqueCategories.size}`,
      label: copy.categories,
      detail: copy.categoryDetail,
    },
    {
      value: '3',
      label: copy.locales,
      detail: copy.localeDetail,
    },
    {
      value: `${uniqueCapabilities.size}`,
      label: copy.capabilities,
      detail: copy.capabilityDetail,
    },
  ];

  return (
    <Section className="pt-0">
      <div className="content-grid">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((item) => (
            <article key={item.label} className="glass rounded-3xl border border-border/70 p-6">
              <p className="font-display text-4xl leading-none tracking-tight text-fg">{item.value}</p>
              <p className="mt-3 text-xs uppercase tracking-[0.18em] text-accent">{item.label}</p>
              <p className="mt-4 text-sm leading-relaxed text-fg/70">{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
