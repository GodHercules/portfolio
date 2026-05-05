import { Handshake, KanbanSquare, MessageSquareMore, Route } from 'lucide-react';

import { Reveal } from '@/components/ui/reveal';
import { Section, SectionLead, SectionTitle } from '@/components/ui/section';
import { profile } from '@/data/profile';
import type { Locale } from '@/lib/i18n/config';

type TeamCollaborationSectionProps = {
  locale: Locale;
};

type CollaborationCard = {
  title: string;
  summary: string;
  icon: typeof Handshake;
};

const copy: Record<
  Locale,
  {
    title: string;
    lead: string;
    badge: string;
    cards: CollaborationCard[];
    closing: string;
  }
> = {
  'pt-BR': {
    title: 'Como eu atuo com times',
    lead:
      'Eu entro para dar tracao onde produto, design e engenharia precisam virar uma mesma direcao. O objetivo e dar clareza de decisao, manter ritmo de entrega e deixar o handoff simples de sustentar.',
    badge: 'Colaboracao e senioridade',
    cards: [
      {
        title: 'Alinhamento rapido',
        summary:
          'Eu transformo contexto difuso em prioridade, escopo e proximos passos para que o time avance sem retrabalho desnecessario.',
        icon: MessageSquareMore,
      },
      {
        title: 'Execucao coordenada',
        summary:
          'Eu organizo a entrega em blocos claros, com decisao de arquitetura, revisao visual e handoff previsivel entre areas.',
        icon: Route,
      },
      {
        title: 'Iteracao com criterio',
        summary:
          'Eu reforco feedback curto, validacao continua e criterio de qualidade para o produto evoluir sem perder consistencia.',
        icon: KanbanSquare,
      },
      {
        title: 'Parceria com o time',
        summary:
          'Eu atuo como ponte entre negocio, produto e engenharia, preservando autonomia do squad e foco no resultado final.',
        icon: Handshake,
      },
    ],
    closing: 'Formatos de atuacao que eu costumo sustentar: ' + profile.workModes['pt-BR'].join(' / '),
  },
  en: {
    title: 'How I work with teams',
    lead:
      'I step in to reduce friction between product, design and engineering. The goal is to create decision clarity, keep delivery moving, and make handoff easy to sustain.',
    badge: 'Collaboration and seniority',
    cards: [
      {
        title: 'Fast alignment',
        summary:
          'I turn fuzzy context into priority, scope and next steps so the team can move without avoidable rework.',
        icon: MessageSquareMore,
      },
      {
        title: 'Coordinated delivery',
        summary:
          'I structure work in clear blocks, with architecture decisions, visual review and predictable handoff across disciplines.',
        icon: Route,
      },
      {
        title: 'Criteria-led iteration',
        summary:
          'I keep feedback short, validation continuous and quality criteria visible so the product evolves with consistency.',
        icon: KanbanSquare,
      },
      {
        title: 'Team partnership',
        summary:
          'I act as a bridge between business, product and engineering while preserving squad autonomy and outcome focus.',
        icon: Handshake,
      },
    ],
    closing: 'Delivery modes I usually support: ' + profile.workModes.en.join(' / '),
  },
  es: {
    title: 'Como trabajo con equipos',
    lead:
      'Entro para reducir friccion entre producto, diseno e ingenieria. El objetivo es dar claridad de decision, mantener el ritmo de entrega y dejar un handoff facil de sostener.',
    badge: 'Colaboracion y senioridad',
    cards: [
      {
        title: 'Alineacion rapida',
        summary:
          'Convierto contexto difuso en prioridad, alcance y proximos pasos para que el equipo avance sin retrabajo evitable.',
        icon: MessageSquareMore,
      },
      {
        title: 'Entrega coordinada',
        summary:
          'Organizo la entrega en bloques claros, con decisiones de arquitectura, revision visual y handoff predecible entre areas.',
        icon: Route,
      },
      {
        title: 'Iteracion con criterio',
        summary:
          'Mantengo feedback corto, validacion continua y criterios de calidad visibles para que el producto evolucione con consistencia.',
        icon: KanbanSquare,
      },
      {
        title: 'Socio del equipo',
        summary:
          'Actuo como puente entre negocio, producto e ingenieria, preservando la autonomia del squad y el foco en el resultado.',
        icon: Handshake,
      },
    ],
    closing: 'Formatos de colaboracion que suelo sostener: ' + profile.workModes.es.join(' / '),
  },
};

export function TeamCollaborationSection({ locale }: TeamCollaborationSectionProps) {
  const section = copy[locale];

  return (
    <Section className="pt-8">
      <div className="content-grid">
        <p className="text-xs uppercase tracking-[0.22em] text-accent">{section.badge}</p>
        <SectionTitle>{section.title}</SectionTitle>
        <SectionLead>{section.lead}</SectionLead>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {section.cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <Reveal key={card.title} delay={index * 0.05}>
                <article className="glass h-full rounded-3xl border border-border/70 p-6">
                  <div className="inline-flex rounded-2xl bg-accent/10 p-3 text-accent">
                    <Icon size={18} />
                  </div>
                  <h3 className="mt-5 font-display text-2xl leading-tight tracking-tight">{card.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-fg/75">{card.summary}</p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-8 glass rounded-3xl border border-border/70 p-6">
          <p className="text-sm leading-relaxed text-fg/75">{section.closing}</p>
        </div>
      </div>
    </Section>
  );
}
