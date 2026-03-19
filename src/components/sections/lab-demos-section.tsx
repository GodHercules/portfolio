import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Reveal } from '@/components/ui/reveal';
import { Section, SectionLead, SectionTitle } from '@/components/ui/section';
import type { Locale } from '@/lib/i18n/config';
import type { LabDemo } from '@/data/lab-demos';

type LabDemosSectionProps = {
  locale: Locale;
  demos: LabDemo[];
};

const copy: Record<
  Locale,
  {
    title: string;
    lead: string;
    flowLabel: string;
    linksLabel: string;
  }
> = {
  'pt-BR': {
    title: 'Demos conceituais com diagramas leves',
    lead: 'Cada demo mostra o fluxo principal da solucao, o tipo de prova que ela gera e os casos reais que sustentam a narrativa do laboratorio.',
    flowLabel: 'Fluxo da demo',
    linksLabel: 'Fluxos reais',
  },
  en: {
    title: 'Concept demos with light diagrams',
    lead: 'Each demo shows the main flow of the solution, the kind of proof it creates, and the real cases that support the lab narrative.',
    flowLabel: 'Demo flow',
    linksLabel: 'Real flows',
  },
  es: {
    title: 'Demos conceptuales con diagramas ligeros',
    lead: 'Cada demo muestra el flujo principal de la solucion, el tipo de prueba que genera y los casos reales que sostienen la narrativa del laboratorio.',
    flowLabel: 'Flujo de la demo',
    linksLabel: 'Flujos reales',
  },
};

function FlowDiagram({ steps }: { steps: string[] }) {
  return (
    <div className="mt-4 grid gap-2 sm:grid-cols-[repeat(5,minmax(0,1fr))]">
      {steps.map((step, index) => (
        <div key={step} className="flex items-center gap-2 sm:block">
          <div className="flex-1 rounded-2xl border border-border/70 bg-card px-3 py-3 text-center text-xs uppercase tracking-[0.16em] text-fg/70">
            {step}
          </div>
          {index < steps.length - 1 ? <div className="hidden sm:block text-center text-fg/35">{'->'}</div> : null}
        </div>
      ))}
    </div>
  );
}

export function LabDemosSection({ locale, demos }: LabDemosSectionProps) {
  const section = copy[locale];

  return (
    <div id="demos">
      <Section className="pt-8">
        <div className="content-grid">
          <SectionTitle>{section.title}</SectionTitle>
          <SectionLead>{section.lead}</SectionLead>

          <div className="mt-10 grid gap-5 xl:grid-cols-3">
            {demos.map((demo, index) => (
              <Reveal key={demo.id} delay={index * 0.06}>
                <article className="glass h-full rounded-3xl border border-border/70 p-6">
                  <Badge>{demo.badge[locale]}</Badge>
                  <h3 className="mt-5 font-display text-2xl leading-tight tracking-tight">{demo.title[locale]}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-fg/75">{demo.summary[locale]}</p>
                  <p className="mt-4 text-xs uppercase tracking-[0.18em] text-fg/45">{section.flowLabel}</p>
                  <FlowDiagram steps={demo.diagram[locale]} />
                  <div className="mt-5 rounded-2xl border border-border/70 bg-muted/50 p-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-accent">Outcome</p>
                    <p className="mt-3 text-sm leading-relaxed text-fg/75">{demo.outcome[locale]}</p>
                  </div>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {demo.stack.map((item) => (
                      <li key={item} className="rounded-full border border-border/70 bg-muted/70 px-3 py-1 text-xs text-fg/75">
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 text-xs uppercase tracking-[0.18em] text-fg/45">{section.linksLabel}</p>
                  <div className="mt-3 space-y-2">
                    {demo.links.map((link) => (
                      <Link
                        key={link.href + link.label[locale]}
                        href={`/${locale}${link.href}`}
                        className="flex items-center justify-between rounded-2xl border border-border/70 bg-card px-4 py-3 text-sm text-fg/75 transition hover:border-fg/35 hover:text-fg"
                      >
                        {link.label[locale]}
                        <ArrowUpRight size={14} />
                      </Link>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
