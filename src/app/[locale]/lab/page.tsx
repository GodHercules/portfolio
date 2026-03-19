import { notFound } from 'next/navigation';

import { ButtonLink } from '@/components/ui/button';
import { LabDemosSection } from '@/components/sections/lab-demos-section';
import { LabHeroSection } from '@/components/sections/lab-hero-section';
import { LabSignalsSection } from '@/components/sections/lab-signals-section';
import { TeamCollaborationSection } from '@/components/sections/team-collaboration-section';
import { labDemos } from '@/data/lab-demos';
import { isLocale, locales, type Locale } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/dictionaries';

type LabPageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LabPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const titleByLocale: Record<Locale, string> = {
    'pt-BR': 'AI / Automation Lab | Hercules de Oliveira',
    en: 'AI / Automation Lab | Hercules de Oliveira',
    es: 'AI / Automation Lab | Hercules de Oliveira',
  };

  const descriptionByLocale: Record<Locale, string> = {
    'pt-BR': 'Laboratorio de IA, automacao e arquitetura para mostrar demos, diagramas leves e links para fluxos reais.',
    en: 'AI, automation and architecture lab to show demos, light diagrams and links to real flows.',
    es: 'Laboratorio de IA, automatizacion y arquitectura para mostrar demos, diagramas ligeros y links a flujos reales.',
  };

  return {
    title: titleByLocale[locale as Locale],
    description: descriptionByLocale[locale as Locale],
  };
}

export default async function LabPage({ params }: LabPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const currentLocale = locale as Locale;
  const dictionary = getDictionary(currentLocale);

  return (
    <>
      <LabHeroSection locale={currentLocale} />
      <LabDemosSection locale={currentLocale} demos={labDemos} />
      <LabSignalsSection
        locale={currentLocale}
        ctaHref={`/${currentLocale}/development`}
        ctaLabel={currentLocale === 'pt-BR' ? 'Ver casos reais' : currentLocale === 'es' ? 'Ver casos reales' : 'See real cases'}
      />
      <TeamCollaborationSection locale={currentLocale} />
      <section className="section-spacing pt-0">
        <div className="content-grid">
          <div className="glass rounded-[2rem] border border-border/70 p-8 sm:p-10">
            <p className="text-xs uppercase tracking-[0.24em] text-accent">
              {currentLocale === 'pt-BR' ? 'Próximo passo' : currentLocale === 'es' ? 'Siguiente paso' : 'Next step'}
            </p>
            <h2 className="mt-4 font-display text-3xl leading-tight tracking-tight sm:text-4xl">
              {currentLocale === 'pt-BR'
                ? 'Se você quer sair do conceito e abrir uma conversa real sobre produto, IA e automação, este é o ponto de partida.'
                : currentLocale === 'es'
                  ? 'Si quieres pasar del concepto a una conversación real sobre producto, IA y automatización, este es el punto de partida.'
                  : 'If you want to move from concept into a real conversation about product, AI and automation, this is the starting point.'}
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-fg/75 sm:text-base">
              {currentLocale === 'pt-BR'
                ? 'A melhor combinação para continuar é olhar os casos reais, entender a camada técnica e então falar sobre o tipo de solução que faz sentido para o seu contexto.'
                : currentLocale === 'es'
                  ? 'La mejor combinación para seguir es mirar los casos reales, entender la capa técnica y luego hablar del tipo de solución que tiene sentido para tu contexto.'
                  : 'The best next step is to review the real cases, understand the technical layer and then talk about the kind of solution that fits your context.'}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={`/${currentLocale}/development`}>{dictionary.nav.development}</ButtonLink>
              <ButtonLink href={`/${currentLocale}/contact`} variant="secondary">
                {dictionary.nav.contact}
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
