import { Cpu, Gauge, Layers3, Sparkles } from 'lucide-react';

import { Reveal } from '@/components/ui/reveal';
import { Section, SectionLead, SectionTitle } from '@/components/ui/section';
import type { Locale } from '@/lib/i18n/config';

type CapabilityProofSectionProps = {
  locale: Locale;
};

type ProofCard = {
  title: string;
  summary: string;
  bullets: string[];
  icon: typeof Layers3;
};

const content: Record<
  Locale,
  {
    title: string;
    lead: string;
    cards: ProofCard[];
  }
> = {
  'pt-BR': {
    title: 'Capacidades comprovadas',
    lead: 'Uma leitura r\u00e1pida do tipo de problema que eu consigo estruturar, desenhar e entregar com crit\u00e9rio t\u00e9cnico e vis\u00e3o de produto.',
    cards: [
      {
        title: 'Arquitetura frontend',
        summary: 'Interfaces escal\u00e1veis com i18n, design system, roteamento, componentes reutiliz\u00e1veis e organiza\u00e7\u00e3o sustent\u00e1vel.',
        bullets: ['Next.js App Router', 'TypeScript forte', 'UI modular e reutiliz\u00e1vel'],
        icon: Layers3,
      },
      {
        title: 'Produto e decis\u00e3o',
        summary: 'Tradu\u00e7\u00e3o de contexto de neg\u00f3cio em fluxo, prioridade, escopo e tradeoffs implement\u00e1veis.',
        bullets: ['Leitura de problema', 'Recorte de escopo', 'Pensamento orientado a valor'],
        icon: Sparkles,
      },
      {
        title: 'Integra\u00e7\u00f5es e automa\u00e7\u00e3o',
        summary: 'Conex\u00e3o entre APIs, dados estruturados e experi\u00eancias interativas com clareza de produto.',
        bullets: ['Dados externos com curadoria', 'Assistentes guiados por conte\u00fado', 'Fallback e revalida\u00e7\u00e3o'],
        icon: Cpu,
      },
      {
        title: 'Performance e qualidade',
        summary: 'Equil\u00edbrio entre sofistica\u00e7\u00e3o visual, custo de execu\u00e7\u00e3o e disciplina de entrega.',
        bullets: ['Build validado', 'Lint e typecheck', 'Client JS mais deliberado'],
        icon: Gauge,
      },
    ],
  },
  en: {
    title: 'Proven capabilities',
    lead: 'A fast read of the kind of problems I can structure, design and ship with technical discipline and product judgment.',
    cards: [
      {
        title: 'Frontend architecture',
        summary: 'Scalable interfaces with i18n, design systems, routing, reusable components and maintainable structure.',
        bullets: ['Next.js App Router', 'Strong TypeScript', 'Modular reusable UI'],
        icon: Layers3,
      },
      {
        title: 'Product decision-making',
        summary: 'Business context translated into flows, priorities, scope cuts and implementable tradeoffs.',
        bullets: ['Problem framing', 'Scope definition', 'Value-oriented thinking'],
        icon: Sparkles,
      },
      {
        title: 'Integrations and automation',
        summary: 'APIs, structured data and interactive experiences connected with product clarity.',
        bullets: ['Curated external data', 'Content-aware assistants', 'Fallback and revalidation'],
        icon: Cpu,
      },
      {
        title: 'Performance and quality',
        summary: 'A balance between visual sophistication, execution cost and delivery discipline.',
        bullets: ['Validated build', 'Lint and typecheck', 'More deliberate client JS'],
        icon: Gauge,
      },
    ],
  },
  es: {
    title: 'Capacidades comprobadas',
    lead: 'Una lectura r\u00e1pida del tipo de problema que puedo estructurar, dise\u00f1ar y entregar con criterio t\u00e9cnico y visi\u00f3n de producto.',
    cards: [
      {
        title: 'Arquitectura frontend',
        summary: 'Interfaces escalables con i18n, design system, enrutamiento, componentes reutilizables y estructura mantenible.',
        bullets: ['Next.js App Router', 'TypeScript s\u00f3lido', 'UI modular y reutilizable'],
        icon: Layers3,
      },
      {
        title: 'Decisi\u00f3n de producto',
        summary: 'Contexto de negocio traducido en flujo, prioridad, recortes de alcance y tradeoffs implementables.',
        bullets: ['Lectura del problema', 'Definici\u00f3n de alcance', 'Pensamiento orientado a valor'],
        icon: Sparkles,
      },
      {
        title: 'Integraciones y automatizaci\u00f3n',
        summary: 'APIs, datos estructurados y experiencias interactivas conectadas con claridad de producto.',
        bullets: ['Datos externos con curadur\u00eda', 'Asistentes guiados por contenido', 'Fallback y revalidaci\u00f3n'],
        icon: Cpu,
      },
      {
        title: 'Performance y calidad',
        summary: 'Equilibrio entre sofisticaci\u00f3n visual, costo de ejecuci\u00f3n y disciplina de entrega.',
        bullets: ['Build validado', 'Lint y typecheck', 'Client JS m\u00e1s deliberado'],
        icon: Gauge,
      },
    ],
  },
};

export function CapabilityProofSection({ locale }: CapabilityProofSectionProps) {
  const section = content[locale];

  return (
    <Section className="pt-6">
      <div className="content-grid">
        <SectionTitle>{section.title}</SectionTitle>
        <SectionLead>{section.lead}</SectionLead>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {section.cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <Reveal key={card.title} delay={index * 0.06}>
                <article className="glass h-full rounded-3xl border border-border/70 p-6">
                  <div className="inline-flex rounded-2xl bg-accent/10 p-3 text-accent">
                    <Icon size={18} />
                  </div>
                  <h3 className="mt-5 font-display text-2xl leading-tight tracking-tight">{card.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-fg/75">{card.summary}</p>
                  <ul className="mt-5 space-y-2 text-sm text-fg/75">
                    {card.bullets.map((bullet) => (
                      <li key={bullet} className="rounded-2xl border border-border/70 bg-muted/60 px-3 py-2">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
