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
    title: 'Onde eu gero valor',
    lead: 'Uma leitura rapida de como eu transformo problema de negocio em arquitetura, interface, integracao e entrega com criterio tecnico.',
    cards: [
      {
        title: 'Arquitetura fullstack',
        summary: 'Estruturo front-end, back-end, APIs e banco de dados para aplicacoes web modernas e escalaveis.',
        bullets: ['React e Next.js', 'Node.js e NestJS', 'PostgreSQL, MySQL e SQL'],
        icon: Layers3,
      },
      {
        title: 'Frontend premium',
        summary: 'Transformo regra de negocio em interface clara, rapida, responsiva e visualmente forte.',
        bullets: ['TypeScript e TailwindCSS', 'HTML5 e CSS3', 'Performance e responsividade'],
        icon: Sparkles,
      },
      {
        title: 'Automacao e integracoes',
        summary: 'Conecto sistemas, APIs REST e rotinas operacionais para reduzir trabalho manual e aumentar previsibilidade.',
        bullets: ['Python e JavaScript', 'Docker e Postman', 'Git e GitHub'],
        icon: Cpu,
      },
      {
        title: 'Produto e decisao',
        summary: 'Atuo com boas praticas para manter entrega sustentavel em times Scrum/Kanban.',
        bullets: ['Clean Code e SOLID', 'Testes unitarios com Jest', 'Scrum e Kanban'],
        icon: Gauge,
      },
    ],
  },
  en: {
    title: 'Where I create value',
    lead: 'A fast read of how I turn business problems into architecture, interface, integration and delivery with technical criteria.',
    cards: [
      {
        title: 'Fullstack architecture',
        summary: 'I structure product, data, API, frontend and integrations so growth does not become technical debt.',
        bullets: ['Next.js App Router', 'Strong TypeScript', 'Clear contracts and domains'],
        icon: Layers3,
      },
      {
        title: 'Premium frontend',
        summary: 'I turn business rules into clear, fast, responsive and visually strong interfaces.',
        bullets: ['Design systems', 'UX engineering', 'Accessibility and performance'],
        icon: Sparkles,
      },
      {
        title: 'Automation and integrations',
        summary: 'I connect systems, APIs and operational routines to reduce manual work and increase predictability.',
        bullets: ['Curated external data', 'Fallback and cache', 'Observable flows'],
        icon: Cpu,
      },
      {
        title: 'Product and decision',
        summary: 'I help cut scope, prioritize value and turn fuzzy context into navigable delivery.',
        bullets: ['Explicit tradeoffs', 'Incremental delivery', 'Validated quality'],
        icon: Gauge,
      },
    ],
  },
  es: {
    title: 'Donde genero valor',
    lead: 'Una lectura rapida de como transformo problemas de negocio en arquitectura, interfaz, integracion y entrega con criterio tecnico.',
    cards: [
      {
        title: 'Arquitectura fullstack',
        summary: 'Estructuro producto, datos, API, frontend e integraciones para crecer sin convertirse en deuda tecnica.',
        bullets: ['Next.js App Router', 'TypeScript solido', 'Contratos y dominios claros'],
        icon: Layers3,
      },
      {
        title: 'Frontend premium',
        summary: 'Transformo regla de negocio en interfaz clara, rapida, responsive y visualmente fuerte.',
        bullets: ['Design systems', 'UX engineering', 'Accesibilidad y performance'],
        icon: Sparkles,
      },
      {
        title: 'Automatizacion e integraciones',
        summary: 'Conecto sistemas, APIs y rutinas operativas para reducir trabajo manual y aumentar previsibilidad.',
        bullets: ['Datos externos con curadoria', 'Fallback y cache', 'Flujos observables'],
        icon: Cpu,
      },
      {
        title: 'Producto y decision',
        summary: 'Ayudo a recortar alcance, priorizar valor y transformar contexto difuso en entrega navegable.',
        bullets: ['Tradeoffs explicitos', 'Entrega incremental', 'Calidad validada'],
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
