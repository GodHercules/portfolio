import { Section } from '@/components/ui/section';
import { profile } from '@/data/profile';
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
    education: string;
    stack: string;
    caseDetail: string;
    categoryDetail: string;
    educationDetail: string;
    stackDetail: string;
  }
> = {
  'pt-BR': {
    cases: 'anos de experiencia',
    categories: 'experiencias profissionais',
    education: 'formacoes tecnicas',
    stack: 'grupos de stack',
    caseDetail: 'Atuacao em desenvolvimento full stack desde estagio ate posicao atual.',
    categoryDetail: 'MF Contabilidade e NG7 Consultoria com foco em software full stack.',
    educationDetail: 'Engenharia de Software em andamento e tecnico em Desenvolvimento de Sistemas.',
    stackDetail: 'Linguagens, front-end, back-end, bancos, ferramentas, DevOps, praticas e metodos.',
  },
  en: {
    cases: 'years of experience',
    categories: 'professional experiences',
    education: 'technical education paths',
    stack: 'stack groups',
    caseDetail: 'Full stack development experience from internship to current role.',
    categoryDetail: 'MF Contabilidade and NG7 Consultoria with full stack software focus.',
    educationDetail: 'Software Engineering in progress and technical degree in Systems Development.',
    stackDetail: 'Languages, front-end, back-end, databases, tools, DevOps, practices and methods.',
  },
  es: {
    cases: 'anos de experiencia',
    categories: 'experiencias profesionales',
    education: 'formaciones tecnicas',
    stack: 'grupos de stack',
    caseDetail: 'Experiencia en desarrollo full stack desde practica hasta rol actual.',
    categoryDetail: 'MF Contabilidade y NG7 Consultoria con foco en software full stack.',
    educationDetail: 'Ingenieria de Software en curso y tecnico en Desarrollo de Sistemas.',
    stackDetail: 'Lenguajes, front-end, back-end, bases, herramientas, DevOps, practicas y metodos.',
  },
};

export function EvidenceStripSection({ locale }: EvidenceStripSectionProps) {
  const copy = labels[locale];
  const skillGroupCount = Object.keys(profile.skillGroups).length;

  const stats: StatItem[] = [
    {
      value: profile.experienceYears,
      label: copy.cases,
      detail: copy.caseDetail,
    },
    {
      value: `${profile.experience.length}`,
      label: copy.categories,
      detail: copy.categoryDetail,
    },
    {
      value: `${profile.education.length}`,
      label: copy.education,
      detail: copy.educationDetail,
    },
    {
      value: `${skillGroupCount}`,
      label: copy.stack,
      detail: copy.stackDetail,
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
