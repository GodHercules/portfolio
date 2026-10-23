import { InteractiveLanyard } from '@/components/premium/interactive-lanyard';
import { Reveal } from '@/components/ui/reveal';
import { Section, SectionTitle } from '@/components/ui/section';
import { buildWhatsAppUrl, profile } from '@/data/profile';
import type { Locale } from '@/lib/i18n/config';
import type { Dictionary } from '@/lib/i18n/dictionaries';

const roleByLocale: Record<Locale, string> = {
  'pt-BR': 'Desenvolvedor Full Stack Pleno',
  en: 'Mid-level Full Stack Developer',
  es: 'Desarrollador Full Stack Pleno',
};

const cardCopy = {
  'pt-BR': {
    frontLabel: 'Portfólio',
    backTitle: 'Contatos profissionais',
    email: 'E-mail',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    whatsapp: 'WhatsApp',
  },
  en: {
    frontLabel: 'Portfolio',
    backTitle: 'Professional contacts',
    email: 'Email',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    whatsapp: 'WhatsApp',
  },
  es: {
    frontLabel: 'Portafolio',
    backTitle: 'Contactos profesionales',
    email: 'Correo',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    whatsapp: 'WhatsApp',
  },
} satisfies Record<Locale, Record<string, string>>;

type AboutSectionProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function AboutSection({ locale, dictionary }: AboutSectionProps) {
  const card = cardCopy[locale];
  const whatsappMessage = locale === 'pt-BR'
    ? 'Olá, Hercules! Vi seu portfólio.'
    : locale === 'es'
      ? 'Hola, Hercules. Vi tu portafolio.'
      : 'Hi Hercules, I saw your portfolio.';

  return (
    <Section>
      <div className="content-grid grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-x-10 lg:gap-y-7">
        <Reveal className="lg:col-start-1 lg:row-start-1">
          <SectionTitle>{dictionary.about.title}</SectionTitle>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-fg/75 sm:text-base">{dictionary.about.intro}</p>
        </Reveal>

        <Reveal delay={0.05} className="lg:col-start-1 lg:row-start-2">
          <InteractiveLanyard
            locale={locale}
            name={profile.name}
            role={roleByLocale[locale]}
            organization={profile.location}
            avatar="/assets/profile/hercules-profile.png"
            avatarAlt={profile.name}
            frontLabel={card.frontLabel}
            backTitle={card.backTitle}
            links={[
              { label: card.email, href: `mailto:${profile.email}` },
              { label: card.github, href: profile.github },
              { label: card.linkedin, href: profile.linkedin },
              { label: card.whatsapp, href: buildWhatsAppUrl(profile.phoneRaw, whatsappMessage) },
            ]}
          />
        </Reveal>

        <div className="space-y-4 lg:col-start-2 lg:row-start-2 lg:self-center">
          {dictionary.about.points.map((point, index) => (
            <Reveal key={point} delay={index * 0.08}>
              <div className="glass bg-muted/70 p-5 text-base leading-relaxed text-fg/80 transition hover:-translate-y-0.5 hover:text-fg">
                {point}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
