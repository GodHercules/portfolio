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
    title: 'Se voce tem um desafio de produto, sistema interno ou automacao, eu consigo transformar isso em escopo, arquitetura e entrega.',
    summary:
      'Me chame com contexto, objetivo e prazo. Eu organizo o melhor caminho entre produto, backend, frontend, integracoes e interface para chegar numa entrega clara e vendavel.',
    bullets: ['Produtos digitais e SaaS', 'Sistemas internos e automacoes', 'Entrega com visao fullstack, produto e design'],
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
        <div className="glass rounded-[2rem] border border-border/70 p-8 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-accent">
                {locale === 'pt-BR' ? 'Pr\u00f3ximo passo' : locale === 'es' ? 'Siguiente paso' : 'Next step'}
              </p>
              <h2 className="mt-4 max-w-3xl font-display text-3xl leading-tight tracking-tight sm:text-4xl">
                {section.title}
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-fg/75 sm:text-base">{section.summary}</p>
            </div>

            <div className="space-y-3">
              {section.bullets.map((bullet) => (
                <div key={bullet} className="rounded-2xl border border-border/70 bg-muted/70 px-4 py-3 text-sm text-fg/75">
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
