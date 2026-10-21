import { BriefcaseBusiness, GraduationCap, MapPin, ShieldCheck } from 'lucide-react';

import { Reveal } from '@/components/ui/reveal';
import { Section, SectionLead, SectionTitle } from '@/components/ui/section';
import { profile } from '@/data/profile';
import type { Locale } from '@/lib/i18n/config';

type CareerSnapshotSectionProps = {
  locale: Locale;
};

const copy: Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    lead: string;
    experience: string;
    education: string;
    stack: string;
    location: string;
    experienceLabel: string;
    skillGroups: Record<keyof typeof profile.skillGroups, string>;
  }
> = {
  'pt-BR': {
eyebrow: 'Baseado no currículo',
title: 'Trajetória full stack',
    lead:
'Uma leitura direta da experiência profissional, formação e stack para deixar claro que o portfólio representa um perfil de engenharia, produto e entrega real.',
experience: 'Experiência profissional',
education: 'Formação',
    stack: 'Stack e práticas',
    location: 'Base',
    experienceLabel: '+3 anos full stack',
    skillGroups: {
      languages: 'Linguagens',
      frontend: 'Front-end',
      backend: 'Back-end',
      database: 'Banco de dados',
      tools: 'Ferramentas e DevOps',
methods: 'Práticas e métodos',
    },
  },
  en: {
    eyebrow: 'Based on the resume',
    title: 'Full stack trajectory',
    lead:
      'A direct read of professional experience, education and stack so the portfolio clearly represents an engineering, product and real delivery profile.',
    experience: 'Professional experience',
    education: 'Education',
    stack: 'Stack and practices',
    location: 'Base',
    experienceLabel: '3+ years full stack',
    skillGroups: {
      languages: 'Languages',
      frontend: 'Front-end',
      backend: 'Back-end',
      database: 'Database',
      tools: 'Tools and DevOps',
      methods: 'Practices and methods',
    },
  },
  es: {
    eyebrow: 'Basado en el CV',
    title: 'Trayectoria full stack',
    lead:
      'Una lectura directa de experiencia profesional, formacion y stack para dejar claro que el portafolio representa un perfil de ingenieria, producto y entrega real.',
    experience: 'Experiencia profesional',
    education: 'Formacion',
    stack: 'Stack y practicas',
    location: 'Base',
    experienceLabel: '+3 anos full stack',
    skillGroups: {
      languages: 'Lenguajes',
      frontend: 'Front-end',
      backend: 'Back-end',
      database: 'Base de datos',
      tools: 'Herramientas y DevOps',
      methods: 'Practicas y metodos',
    },
  },
};

export function CareerSnapshotSection({ locale }: CareerSnapshotSectionProps) {
  const t = copy[locale];
  const skillEntries = Object.entries(profile.skillGroups) as [keyof typeof profile.skillGroups, string[]][];

  return (
    <Section className="pt-8">
      <div className="content-grid">

        <SectionTitle>{t.title}</SectionTitle>
        <SectionLead>{t.lead}</SectionLead>

        <div className="mt-10 grid gap-5 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <Reveal>
            <article className="glass h-full rounded-3xl bg-card/60 p-6">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-accent/10 p-3 text-accent">
                  <BriefcaseBusiness size={18} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-fg/45">{t.experience}</p>
                  <h3 className="mt-1 font-display text-2xl leading-tight tracking-tight">{t.experienceLabel}</h3>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {profile.experience.map((item) => (
                  <div key={`${item.company}-${item.period}`} className="bg-muted/60 p-4">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <p className="font-medium text-fg">{item.company}</p>
                      <span className="bg-card px-3 py-1 text-sm text-fg/70">{item.period}</span>
                    </div>
                    <p className="mt-2 text-sm font-medium text-accent">{item.role[locale]}</p>
                    <p className="mt-2 text-sm leading-relaxed text-fg/70">{item.summary[locale]}</p>
                  </div>
                ))}
              </div>
            </article>
          </Reveal>

          <div className="grid gap-5">
            <Reveal delay={0.05}>
              <article className="glass rounded-3xl bg-card/60 p-6">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-accent/10 p-3 text-accent">
                    <GraduationCap size={18} />
                  </div>
                  <h3 className="font-display text-2xl leading-tight tracking-tight">{t.education}</h3>
                </div>
                <div className="mt-5 space-y-3">
                  {profile.education.map((item) => (
                    <div key={item.institution} className="bg-muted/60 p-4">
                      <p className="font-medium text-fg">{item.course[locale]}</p>
                      <p className="mt-1 text-sm text-fg/70">{item.institution}</p>
                      <p className="mt-2 text-xs uppercase tracking-[0.16em] text-fg/45">{item.period}</p>
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.1}>
              <article className="glass rounded-3xl bg-card/60 p-6">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-accent/10 p-3 text-accent">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-fg/45">{t.location}</p>
                    <p className="mt-1 font-display text-2xl leading-tight tracking-tight">{profile.location}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.12}>
          <article className="glass mt-5 rounded-3xl bg-card/60 p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-accent/10 p-3 text-accent">
                <ShieldCheck size={18} />
              </div>
              <h3 className="font-display text-2xl leading-tight tracking-tight">{t.stack}</h3>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {skillEntries.map(([group, skills]) => (
                <div key={group} className="bg-muted/60 p-4">
                  <p className="text-xs uppercase tracking-[0.16em] text-fg/45">{t.skillGroups[group]}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span key={skill} className="bg-card px-3 py-1 text-sm text-fg/75">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </article>
        </Reveal>
      </div>
    </Section>
  );
}
