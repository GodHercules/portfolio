import { ArrowUpRight } from 'lucide-react';

import { ButtonLink } from '@/components/ui/button';
import { Section } from '@/components/ui/section';
import type { Locale } from '@/lib/i18n/config';

type ClosingCtaSectionProps = {
  locale: Locale;
};

const content: Record<
  Locale,
  {
    title: string;
    summary: string;
    bullets: string[];
    primary: string;
    secondary: string;
  }
> = {
  'pt-BR': {
  title: 'Transformo desafios complexos em produto, arquitetura e entrega.',
    summary:
      'Me chame com contexto, objetivo e prazo. Eu organizo o melhor caminho entre produto, back-end, front-end, integrações e interface para chegar a uma entrega clara e vendável.',
    bullets: ['Produtos digitais e SaaS', 'Sistemas internos e automações', 'Entrega com visão full stack, produto e design'],
    primary: 'Tenho um desafio de produto',
    secondary: 'Ver cases fullstack',
  },
  en: {
    title: 'If you need product thinking, interface quality and technical execution in the same conversation, I can operate there.',
    summary:
      'I can help across institutional websites, digital products, frontend architecture, workflow automation and experiences that need visual clarity with implementation depth.',
    bullets: ['Author-led and client work', 'Collaboration with product teams', 'Delivery across product, engineering and design'],
    primary: 'Discuss a project',
    secondary: 'See development work',
  },
  es: {
    title: 'Si necesitas pensamiento de producto, calidad de interfaz y ejecuci\u00f3n t\u00e9cnica en una misma conversaci\u00f3n, puedo operar en ese punto.',
    summary:
      'Puedo actuar en sitios institucionales, productos digitales, arquitectura frontend, automatizaci\u00f3n de flujos y experiencias que exigen claridad visual con profundidad de implementaci\u00f3n.',
    bullets: ['Trabajo autoral y por encargo', 'Colaboraci\u00f3n con equipos de producto', 'Entrega entre producto, ingenier\u00eda y dise\u00f1o'],
    primary: 'Hablar sobre un proyecto',
    secondary: 'Ver desarrollo',
  },
};

export function ClosingCtaSection({ locale }: ClosingCtaSectionProps) {
  const section = content[locale];

  return (
    <Section>
      <div className="content-grid">
        <div className="glass rounded-[2rem] bg-card/60 p-8 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:items-end">
            <div>
              <p className="hidden">
                {locale === 'pt-BR' ? 'Próximo passo' : locale === 'es' ? 'Siguiente paso' : 'Next step'}
              </p>
              <h2 className="mt-4 max-w-3xl font-display text-3xl leading-tight tracking-tight sm:text-4xl">
                {section.title}
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-fg/80">{section.summary}</p>
            </div>

            <div className="space-y-3">
              {section.bullets.map((bullet) => (
                <div key={bullet} className="bg-muted/70 px-4 py-3 text-base text-fg/80">
                  {bullet}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={`/${locale}/contact`}>
              {section.primary}
              <ArrowUpRight size={15} />
            </ButtonLink>
            <ButtonLink href={`/${locale}/development`} variant="secondary">
              {section.secondary}
            </ButtonLink>
          </div>
        </div>
      </div>
    </Section>
  );
}
