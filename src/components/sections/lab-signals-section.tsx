import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { ButtonLink } from '@/components/ui/button';
import { Reveal } from '@/components/ui/reveal';
import { Section, SectionLead, SectionTitle } from '@/components/ui/section';
import { labSignals } from '@/data/lab-signals';
import type { Locale } from '@/lib/i18n/config';

type LabSignalsSectionProps = {
  locale: Locale;
  ctaHref?: string;
  ctaLabel?: string;
};

const copy: Record<
  Locale,
  {
    title: string;
    lead: string;
    outcomeLabel: string;
    linkLabel: string;
  }
> = {
  'pt-BR': {
    title: 'IA, integracoes e automacao como prova real',
    lead: 'Uma camada para mostrar que o portfolio nao para em interface: ele tambem prova repertorio em logica, integracao, automacao e experiencia guiada por conteudo.',
    outcomeLabel: 'O que isso prova',
    linkLabel: 'Abrir frente',
    // CTA label is reused on the home surface to invite deeper exploration.
  },
  en: {
    title: 'AI, integrations, and automation as real proof',
    lead: 'A layer that shows the portfolio does not stop at interface polish: it also proves range in logic, integrations, automation, and content-aware experiences.',
    outcomeLabel: 'What this proves',
    linkLabel: 'Open track',
  },
  es: {
    title: 'IA, integraciones y automatizacion como prueba real',
    lead: 'Una capa para mostrar que el portafolio no termina en interfaz: tambien demuestra repertorio en logica, integraciones, automatizacion y experiencias guiadas por contenido.',
    outcomeLabel: 'Lo que esto demuestra',
    linkLabel: 'Abrir frente',
  },
};

export function LabSignalsSection({ locale, ctaHref, ctaLabel }: LabSignalsSectionProps) {
  const section = copy[locale];
  const actionHref = ctaHref ?? `/${locale}/lab`;
  const actionLabel = ctaLabel ?? (locale === 'pt-BR' ? 'Abrir AI / Automation Lab' : locale === 'es' ? 'Abrir AI / Automation Lab' : 'Open AI / Automation Lab');

  return (
    <Section className="pt-8">
      <div className="content-grid">
        <SectionTitle>{section.title}</SectionTitle>
        <SectionLead>{section.lead}</SectionLead>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {labSignals.map((signal, index) => (
            <Reveal key={signal.id} delay={index * 0.06}>
              <article className="glass h-full rounded-3xl border border-border/70 p-6">
                <Badge>{signal.badge[locale]}</Badge>
                <h3 className="mt-5 font-display text-2xl leading-tight tracking-tight">{signal.title[locale]}</h3>
                <p className="mt-3 text-sm leading-relaxed text-fg/75">{signal.summary[locale]}</p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {signal.stack.map((item) => (
                    <li key={item} className="rounded-full border border-border/70 bg-muted/70 px-3 py-1 text-xs text-fg/75">
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 rounded-2xl border border-border/70 bg-muted/50 p-4">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-fg/45">{section.outcomeLabel}</p>
                  <p className="mt-3 text-sm leading-relaxed text-fg/75">{signal.outcome[locale]}</p>
                </div>

                <Link
                  href={`/${locale}${signal.href}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm text-accent transition hover:text-accent/80"
                >
                  {section.linkLabel}
                  <ArrowUpRight size={14} />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href={actionHref}>{actionLabel}</ButtonLink>
        </div>
      </div>
    </Section>
  );
}
