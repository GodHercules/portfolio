import { Reveal } from '@/components/ui/reveal';
import { Section, SectionLead, SectionTitle } from '@/components/ui/section';
import type { Locale } from '@/lib/i18n/config';

type ProcessSectionProps = {
  locale: Locale;
};

type Step = {
  label: string;
  title: string;
  summary: string;
};

const content: Record<
  Locale,
  {
    title: string;
    lead: string;
    steps: Step[];
  }
> = {
  'pt-BR': {
    title: 'Como eu trabalho',
    lead: 'Meu ponto forte é conectar estratégia, arquitetura e execução visual numa mesma linha de raciocínio.',
    steps: [
      {
        label: '01',
        title: 'Leitura do problema',
        summary: 'Eu entendo contexto, restrições, prioridade e o que realmente precisa gerar valor antes de abrir solução.',
      },
      {
        label: '02',
        title: 'Estrutura e decisão',
        summary: 'Eu defino arquitetura, fluxos, escopo e trade-offs para manter clareza técnica e velocidade.',
      },
      {
        label: '03',
        title: 'Interface e entrega',
        summary: 'Eu transformo a decisão em produto navegável, consistente e visualmente forte sem perder manutenção.',
      },
      {
        label: '04',
        title: 'Validação e evolução',
        summary: 'Eu fecho com refinamento, qualidade e próximos passos para o produto continuar crescendo com critério.',
      },
    ],
  },
  en: {
    title: 'How I work',
    lead: 'My strength is connecting strategy, architecture and visual execution through one consistent line of thinking.',
    steps: [
      {
        label: '01',
        title: 'Problem framing',
        summary: 'I understand context, constraints, priorities and what truly needs to create value before opening solutions.',
      },
      {
        label: '02',
        title: 'Structure and decision',
        summary: 'I define architecture, flows, scope and tradeoffs to keep technical clarity and delivery speed.',
      },
      {
        label: '03',
        title: 'Interface and delivery',
        summary: 'I turn decisions into products that are navigable, consistent and visually strong without losing maintainability.',
      },
      {
        label: '04',
        title: 'Validation and evolution',
        summary: 'I close with refinement, quality and next steps so the product can keep evolving with discipline.',
      },
    ],
  },
  es: {
    title: 'C\u00f3mo trabajo',
    lead: 'Mi fortaleza est\u00e1 en conectar estrategia, arquitectura y ejecuci\u00f3n visual en una misma l\u00ednea de pensamiento.',
    steps: [
      {
        label: '01',
        title: 'Lectura del problema',
        summary: 'Entiendo contexto, restricciones, prioridad y qu\u00e9 necesita generar valor antes de abrir una soluci\u00f3n.',
      },
      {
        label: '02',
        title: 'Estructura y decisi\u00f3n',
        summary: 'Defino arquitectura, flujos, alcance y tradeoffs para mantener claridad t\u00e9cnica y velocidad.',
      },
      {
        label: '03',
        title: 'Interfaz y entrega',
        summary: 'Transformo la decisi\u00f3n en un producto navegable, consistente y visualmente fuerte sin perder mantenibilidad.',
      },
      {
        label: '04',
        title: 'Validaci\u00f3n y evoluci\u00f3n',
        summary: 'Cierro con refinamiento, calidad y pr\u00f3ximos pasos para que el producto siga creciendo con criterio.',
      },
    ],
  },
};

export function ProcessSection({ locale }: ProcessSectionProps) {
  const section = content[locale];

  return (
    <Section className="pt-8">
      <div className="content-grid">
        <SectionTitle>{section.title}</SectionTitle>
        <SectionLead>{section.lead}</SectionLead>

        <div className="mt-10 grid gap-5 lg:grid-cols-4">
          {section.steps.map((step, index) => (
            <Reveal key={step.label} delay={index * 0.08}>
              <article className="glass h-full rounded-3xl border border-border/70 p-6">
                <h3 className="font-display text-2xl leading-tight tracking-tight">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-fg/75">{step.summary}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
