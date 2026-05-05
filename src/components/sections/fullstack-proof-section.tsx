import Link from 'next/link';
import { Boxes, Cable, DatabaseZap, ServerCog } from 'lucide-react';

import { Reveal } from '@/components/ui/reveal';
import { Section, SectionLead, SectionTitle } from '@/components/ui/section';
import type { Locale } from '@/lib/i18n/config';

type FullstackProofSectionProps = {
  locale: Locale;
};

type ProofItem = {
  title: string;
  summary: string;
  evidence: string;
  href: string;
  icon: typeof ServerCog;
};

const content: Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    lead: string;
    cards: ProofItem[];
    note: string;
  }
> = {
  'pt-BR': {
    eyebrow: 'Prova fullstack',
    title: 'Front, back, dados e entrega no mesmo raciocinio',
    lead:
      'A base do curriculo mostra atuacao full stack real: front-end, back-end, SQL, APIs REST, testes, Docker e metodologias ageis aplicados em projetos profissionais e autorais.',
    cards: [
      {
        title: 'Backend e APIs REST',
        summary: 'Node.js, NestJS, Python e contratos HTTP para transformar regra de negocio em servicos claros.',
        evidence: 'Experiencia full stack em MF Contabilidade e NG7 Consultoria.',
        href: '/development/atlas-platform',
        icon: ServerCog,
      },
      {
        title: 'Dados e SQL',
        summary: 'Modelagem e consumo de dados relacionais com SQL, PostgreSQL e MySQL para aplicacoes escalaveis.',
        evidence: 'Stack de banco de dados declarada no curriculo e aplicada nos cases.',
        href: '/development/flow-ops-automation',
        icon: DatabaseZap,
      },
      {
        title: 'Front-end moderno',
        summary: 'React, Next.js, TypeScript, TailwindCSS, HTML5 e CSS3 para interfaces responsivas e performaticas.',
        evidence: 'Portfolio e projetos demonstram componentes, i18n, UI premium e entrega visual.',
        href: '#github-projects',
        icon: Cable,
      },
      {
        title: 'Qualidade e processo',
        summary: 'Clean Code, SOLID, testes unitarios com Jest, Git, GitHub, Docker, Postman, Scrum e Kanban.',
        evidence: 'Praticas tecnicas do curriculo traduzidas em postura de entrega plena.',
        href: '/development/inside-hub',
        icon: Boxes,
      },
    ],
    note:
      'A promessa aqui e simples: parecer pleno porque a leitura mostra experiencia, stack, formacao e pratica de entrega, nao apenas visual bonito.',
  },
  en: {
    eyebrow: 'Fullstack proof',
    title: 'Back, front, data and product in the same reasoning',
    lead:
      'This repository is a localized frontend, but the cases make the complete system thinking explicit: data contracts, integrations, reliability, permissions, cache and final experience.',
    cards: [
      {
        title: 'Backend and APIs',
        summary: 'Contracts, rules, permissions and integrations read so the interface is born connected to the real domain.',
        evidence: 'Atlas Platform shows domain modeling, traceability and operational rules.',
        href: '/development/atlas-platform',
        icon: ServerCog,
      },
      {
        title: 'Data and reliability',
        summary: 'State modeling, fallback, cache and observability treated as part of the experience, not invisible details.',
        evidence: 'Flow Ops Automation covers queues, retries, idempotency and failure detection.',
        href: '/development/flow-ops-automation',
        icon: DatabaseZap,
      },
      {
        title: 'Real integrations',
        summary: 'Server-side external data consumption with server token, incremental cache and public fallback.',
        evidence: 'The GitHub section uses REST API, 30 min ISR and local curation.',
        href: '#github-projects',
        icon: Cable,
      },
      {
        title: 'Complete product',
        summary: 'Architecture, UI, narrative, i18n, design system and handoff treated as a single value delivery.',
        evidence: 'Inside Hub and Dev Lab show internal systems, search, technical decisions and DX.',
        href: '/development/inside-hub',
        icon: Boxes,
      },
    ],
    note:
      'The promise is deliberate: not selling buzzwords, but showing how frontend, backend, data and product enter the same decision process.',
  },
  es: {
    eyebrow: 'Prueba fullstack',
    title: 'Back, front, datos y producto en el mismo razonamiento',
    lead:
      'Este repositorio es un frontend localizado, pero los casos explicitan pensamiento de sistema completo: contratos de datos, integraciones, confiabilidad, permisos, cache y experiencia final.',
    cards: [
      {
        title: 'Backend y APIs',
        summary: 'Lectura de contratos, reglas, permisos e integraciones para que la interfaz nazca conectada al dominio real.',
        evidence: 'Atlas Platform muestra dominio, trazabilidad y reglas operativas.',
        href: '/development/atlas-platform',
        icon: ServerCog,
      },
      {
        title: 'Datos y confiabilidad',
        summary: 'Modelado de estados, fallback, cache y observabilidad como parte de la experiencia, no como detalle invisible.',
        evidence: 'Flow Ops Automation trabaja colas, reintentos, idempotencia y deteccion de fallos.',
        href: '/development/flow-ops-automation',
        icon: DatabaseZap,
      },
      {
        title: 'Integraciones reales',
        summary: 'Consumo server-side de datos externos con token en servidor, cache incremental y fallback publico.',
        evidence: 'La seccion GitHub usa REST API, ISR de 30 min y curadoria local.',
        href: '#github-projects',
        icon: Cable,
      },
      {
        title: 'Producto completo',
        summary: 'Arquitectura, UI, narrativa, i18n, design system y handoff tratados como una sola entrega de valor.',
        evidence: 'Inside Hub y Dev Lab muestran sistema interno, busqueda, decision tecnica y DX.',
        href: '/development/inside-hub',
        icon: Boxes,
      },
    ],
    note:
      'La promesa es deliberada: no vender buzzwords, sino mostrar como frontend, backend, datos y producto entran en la misma decision.',
  },
};

export function FullstackProofSection({ locale }: FullstackProofSectionProps) {
  const section = content[locale];

  return (
    <Section className="pt-8">
      <div className="content-grid">
        <p className="text-xs uppercase tracking-[0.22em] text-accent">{section.eyebrow}</p>
        <SectionTitle>{section.title}</SectionTitle>
        <SectionLead>{section.lead}</SectionLead>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {section.cards.map((card, index) => {
            const Icon = card.icon;
            const href = card.href.startsWith('#') ? card.href : `/${locale}${card.href}`;

            return (
              <Reveal key={card.title} delay={index * 0.06}>
                <Link href={href} className="glass block h-full rounded-3xl border border-border/70 p-6 transition hover:-translate-y-0.5 hover:border-accent/50">
                  <div className="inline-flex rounded-2xl bg-accent/10 p-3 text-accent">
                    <Icon size={18} />
                  </div>
                  <h3 className="mt-5 font-display text-2xl leading-tight tracking-tight">{card.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-fg/75">{card.summary}</p>
                  <p className="mt-5 rounded-2xl border border-border/70 bg-muted/70 p-4 text-sm leading-relaxed text-fg/70">
                    {card.evidence}
                  </p>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-6 rounded-3xl border border-border/70 bg-muted/50 p-5 text-sm leading-relaxed text-fg/70">
          {section.note}
        </div>
      </div>
    </Section>
  );
}
