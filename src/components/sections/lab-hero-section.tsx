import { ArrowUpRight } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { ButtonLink } from '@/components/ui/button';
import { Section } from '@/components/ui/section';
import type { Locale } from '@/lib/i18n/config';

type LabHeroSectionProps = {
  locale: Locale;
};

const copy: Record<
  Locale,
  {
    badge: string;
    title: string;
    lead: string;
    summary: string;
    chips: string[];
    primary: string;
    secondary: string;
  }
> = {
  'pt-BR': {
    badge: 'AI / Automation Lab',
    title: 'Um laboratorio para provar IA aplicada, automacao e criterio tecnico.',
    lead: 'Aqui eu testo assistentes guiados por conteudo, orquestracao de fluxo, benchmarks de stack e narrativas tecnicas que ajudam o portfolio a vender senioridade de verdade.',
    summary:
      'A ideia e simples: transformar experimentos em sinal de produto, conectar demos a cases reais e deixar claro como eu penso, desenho e entrego com times.',
    chips: ['Conteudo estruturado', 'Automacao confiavel', 'Diagramas leves', 'Links reais'],
    primary: 'Ver demos',
    secondary: 'Como eu atuo com times',
  },
  en: {
    badge: 'AI / Automation Lab',
    title: 'A lab for proving applied AI, automation and technical judgment.',
    lead: 'This is where I test content-guided assistants, flow orchestration, stack benchmarks and technical narratives that help the portfolio sell real seniority.',
    summary:
      'The goal is simple: turn experiments into product signals, connect demos to real cases, and make my thinking, design and delivery style with teams explicit.',
    chips: ['Structured content', 'Reliable automation', 'Light diagrams', 'Real links'],
    primary: 'See demos',
    secondary: 'How I work with teams',
  },
  es: {
    badge: 'AI / Automation Lab',
    title: 'Un laboratorio para probar IA aplicada, automatizacion y criterio tecnico.',
    lead: 'Aqui pruebo asistentes guiados por contenido, orquestacion de flujo, benchmarks de stack y narrativas tecnicas que ayudan al portafolio a vender senioridad real.',
    summary:
      'La idea es simple: convertir experimentos en senal de producto, conectar demos con casos reales y dejar claro como pienso, diseno y entrego con equipos.',
    chips: ['Contenido estructurado', 'Automatizacion fiable', 'Diagramas ligeros', 'Links reales'],
    primary: 'Ver demos',
    secondary: 'Como trabajo con equipos',
  },
};

export function LabHeroSection({ locale }: LabHeroSectionProps) {
  const section = copy[locale];

  return (
    <Section className="pb-6">
      <div className="content-grid grid gap-10 lg:grid-cols-[1.35fr_0.95fr] lg:items-end">
        <div>
          <Badge className="mb-5">{section.badge}</Badge>
          <h1 className="font-display text-4xl leading-[1.02] tracking-tight sm:text-5xl lg:text-7xl">{section.title}</h1>
          <p className="mt-6 max-w-3xl font-display text-2xl leading-tight text-fg/90 sm:text-3xl">{section.lead}</p>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-fg/75 sm:text-base">{section.summary}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={`/${locale}/lab#demos`}>
              {section.primary}
              <ArrowUpRight size={15} />
            </ButtonLink>
            <ButtonLink href={`/${locale}/lab#team`} variant="secondary">
              {section.secondary}
            </ButtonLink>
          </div>
        </div>

        <div className="glass rounded-[2rem] border border-border/70 p-6 sm:p-8">
          <p className="text-xs uppercase tracking-[0.24em] text-fg/50">Lab signals</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {section.chips.map((chip) => (
              <div key={chip} className="rounded-2xl border border-border/70 bg-muted/70 px-4 py-3 text-sm text-fg/80">
                {chip}
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-3xl border border-border/70 bg-muted/50 p-5">
            <p className="text-xs uppercase tracking-[0.18em] text-accent">Outcome</p>
            <p className="mt-3 text-sm leading-relaxed text-fg/75">
              {locale === 'en'
                ? 'The lab turns prototypes into proof, so conversations about AI, automation and architecture feel grounded in real portfolio evidence.'
                : locale === 'es'
                  ? 'El laboratorio convierte prototipos en prueba, para que las conversaciones sobre IA, automatizacion y arquitectura esten ancladas en evidencia real del portafolio.'
                  : 'O laboratorio transforma prototipos em prova, para que conversas sobre IA, automacao e arquitetura fiquem ancoradas em evidencia real do portfolio.'}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
