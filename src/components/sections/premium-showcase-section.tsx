import { Circular3DGallery } from '@/components/premium/circular-3d-gallery';
import { LogoLoop } from '@/components/premium/logo-loop';
import { MaskedHeading } from '@/components/premium/masked-heading';
import { Section } from '@/components/ui/section';
import { designGalleryItems } from '@/data/design-gallery';
import { portfolioTechnologies } from '@/data/technologies';
import type { Locale } from '@/lib/i18n/config';
import type { Dictionary } from '@/lib/i18n/dictionaries';

type PremiumShowcaseSectionProps = {
  locale: Locale;
  dictionary: Dictionary;
};

const toneByGroup = {
  language: 'hsl(267 100% 82%)',
  frontend: 'hsl(192 94% 68%)',
  backend: 'hsl(142 72% 62%)',
  data: 'hsl(36 96% 68%)',
  tool: 'hsl(320 86% 78%)',
} as const;

const copy = {
  'pt-BR': {
    stackEyebrow: '01 / ferramentas em movimento',
    stackTitle: 'Tecnologia que sustenta a forma.',
    stackDescription: 'Uma amostra contínua da stack real usada para transformar intenção em produto.',
    stackAria: 'Tecnologias utilizadas por Hercules de Oliveira',
    designEyebrow: '02 / direção visual',
    designTitle: 'Design que merece espaço para respirar.',
    designDescription: 'Artes reais do portfólio em uma galeria circular preparada para crescer junto com novos trabalhos.',
    designAria: 'Galeria circular de trabalhos de design gráfico',
  },
  en: {
    stackEyebrow: '01 / tools in motion',
    stackTitle: 'Technology that gives form a backbone.',
    stackDescription: 'A continuous sample of the real stack used to turn intent into product.',
    stackAria: 'Technologies used by Hercules de Oliveira',
    designEyebrow: '02 / visual direction',
    designTitle: 'Design that deserves room to breathe.',
    designDescription: 'Real portfolio artwork in a circular gallery prepared to grow with future work.',
    designAria: 'Circular gallery of graphic design work',
  },
  es: {
    stackEyebrow: '01 / herramientas en movimiento',
    stackTitle: 'Tecnología que sostiene la forma.',
    stackDescription: 'Una muestra continua de la stack real usada para transformar intención en producto.',
    stackAria: 'Tecnologías utilizadas por Hercules de Oliveira',
    designEyebrow: '02 / dirección visual',
    designTitle: 'Diseño que merece espacio para respirar.',
    designDescription: 'Artes reales del portafolio en una galería circular lista para crecer con nuevos trabajos.',
    designAria: 'Galería circular de trabajos de diseño gráfico',
  },
} satisfies Record<Locale, Record<string, string>>;

export function PremiumShowcaseSection({ locale, dictionary }: PremiumShowcaseSectionProps) {
  const section = copy[locale];
  const galleryItems = designGalleryItems
    .slice()
    .sort((a, b) => a.order - b.order)
    .map((item) => ({
      id: item.id,
      title: item.title[locale],
      category: dictionary.categories.design[item.category],
      summary: item.description[locale],
      image: item.image,
      alt: item.alt[locale],
      featured: item.featured,
    }));

  return (
    <>
      <Section id="technology-loop" className="overflow-hidden border-y border-border/70 bg-card/30 py-12 sm:py-16">
        <div className="content-grid">
          <div className="grid gap-5 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{section.stackEyebrow}</p>
              <MaskedHeading as="h2" className="mt-4 max-w-xl font-display text-3xl font-semibold leading-[0.96] tracking-[-0.04em] sm:text-5xl">
                {section.stackTitle}
              </MaskedHeading>
            </div>
            <p className="max-w-xl text-base leading-relaxed text-fg/70 md:justify-self-end">{section.stackDescription}</p>
          </div>

          <LogoLoop
            data-testid="technology-loop"
            className="mt-10 border-y border-border/70 py-4"
            ariaLabel={section.stackAria}
            items={portfolioTechnologies.map((technology) => ({
              name: technology.name,
              mark: technology.name.slice(0, 2).toUpperCase(),
              tone: toneByGroup[technology.group],
            }))}
            duration={34}
          />
        </div>
      </Section>

      <Section id="design-gallery" className="py-16 sm:py-24">
        <div className="content-grid">
          <div className="mb-8 grid gap-5 md:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{section.designEyebrow}</p>
              <MaskedHeading as="h2" className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-6xl">
                {section.designTitle}
              </MaskedHeading>
            </div>
            <p className="max-w-xl text-base leading-relaxed text-fg/70 md:justify-self-end">{section.designDescription}</p>
          </div>

          <Circular3DGallery items={galleryItems} locale={locale} ariaLabel={section.designAria} />
        </div>
      </Section>
    </>
  );
}
