import { ArrowUpRight } from 'lucide-react';

import { buildWhatsAppUrl, profile } from '@/data/profile';
import { ButtonLink } from '@/components/ui/button';
import { Section, SectionLead, SectionTitle } from '@/components/ui/section';
import type { Locale } from '@/lib/i18n/config';
import type { Dictionary } from '@/lib/i18n/dictionaries';

const whatsappMessages: Record<Locale, string> = {
  'pt-BR': 'Ola Hercules, vi seu portfolio e gostaria de conversar sobre um projeto.',
  en: 'Hi Hercules, I saw your portfolio and would like to talk about a project.',
  es: 'Hola Hercules, vi tu portafolio y me gustaria conversar sobre un proyecto.',
};

const conversionCopy: Record<
  Locale,
  {
    title: string;
    lead: string;
    modes: string[];
    fitTitle: string;
    fitItems: string[];
    responseTitle: string;
    responseText: string;
  }
> = {
  'pt-BR': {
    title: 'Melhor encaixe de projeto',
    lead: 'Funciona melhor quando o desafio pede produto, engenharia e refinamento visual trabalhando como uma camada unica.',
    modes: ['Produto digital ponta a ponta', 'Frontend premium e design systems', 'Automacoes, integracoes e interfaces orientadas a negocio'],
    fitTitle: 'Onde eu agrego mais valor',
    fitItems: ['Discovery + arquitetura + implementacao', 'Refino de produto com criterio tecnico', 'Projetos que precisam de clareza, escala e percepcao premium'],
    responseTitle: 'Proximo passo',
    responseText: 'Se o contexto fizer sentido, a conversa normalmente comeca com objetivo, restricoes e prazo. A partir disso eu organizo o melhor formato de atuacao.',
  },
  en: {
    title: 'Best project fit',
    lead: 'The strongest fit is when the challenge needs product thinking, engineering and visual refinement operating as one layer.',
    modes: ['End-to-end digital product work', 'Premium frontend and design systems', 'Automations, integrations and business-oriented interfaces'],
    fitTitle: 'Where I add more value',
    fitItems: ['Discovery + architecture + implementation', 'Product refinement with technical judgment', 'Projects that need clarity, scale and premium perception'],
    responseTitle: 'Next step',
    responseText: 'If the context fits, the conversation usually starts with goals, constraints and timeline. From there I can shape the best engagement format.',
  },
  es: {
    title: 'Mejor encaje de proyecto',
    lead: 'El mejor encaje ocurre cuando el desafio necesita producto, ingenieria y refinamiento visual operando como una sola capa.',
    modes: ['Producto digital de punta a punta', 'Frontend premium y design systems', 'Automatizaciones, integraciones e interfaces orientadas al negocio'],
    fitTitle: 'Donde agrego mas valor',
    fitItems: ['Discovery + arquitectura + implementacion', 'Refinamiento de producto con criterio tecnico', 'Proyectos que necesitan claridad, escala y percepcion premium'],
    responseTitle: 'Siguiente paso',
    responseText: 'Si el contexto encaja, la conversacion suele empezar por objetivos, restricciones y plazo. A partir de ahi puedo proponer el mejor formato de colaboracion.',
  },
};

type ContactSectionProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function ContactSection({ locale, dictionary }: ContactSectionProps) {
  const whatsappLink = buildWhatsAppUrl(profile.phoneRaw, whatsappMessages[locale]);
  const conversion = conversionCopy[locale];

  return (
    <Section>
      <div className="content-grid">
        <SectionTitle>{dictionary.contact.title}</SectionTitle>
        <SectionLead>{dictionary.contact.subtitle}</SectionLead>

        <div className="mt-8 grid gap-5 lg:grid-cols-[1.3fr_1fr]">
          <article className="glass rounded-3xl p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.18em] text-fg/45">{conversion.title}</p>
            <p className="mt-4 max-w-2xl font-display text-2xl leading-tight tracking-tight text-fg sm:text-3xl">{conversion.lead}</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-3">
              {conversion.modes.map((item) => (
                <li key={item} className="rounded-2xl border border-border/70 bg-muted/70 px-4 py-4 text-sm leading-relaxed text-fg/75">
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <aside className="glass rounded-3xl p-6">
            <p className="text-xs uppercase tracking-[0.18em] text-fg/45">{conversion.fitTitle}</p>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-fg/75">
              {conversion.fitItems.map((item) => (
                <li key={item} className="rounded-2xl border border-border/70 bg-muted/70 px-4 py-3">
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-5 rounded-2xl border border-border/70 bg-card px-4 py-4">
              <p className="text-xs uppercase tracking-[0.18em] text-fg/45">{conversion.responseTitle}</p>
              <p className="mt-2 text-sm leading-relaxed text-fg/75">{conversion.responseText}</p>
            </div>
          </aside>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <article className="glass min-w-0 rounded-2xl p-6">
            <p className="text-xs uppercase tracking-[0.15em] text-fg/55">{dictionary.contact.emailLabel}</p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-3 block break-all font-display text-xl leading-tight text-fg hover:underline sm:text-2xl"
            >
              {profile.email}
            </a>
          </article>

          <article className="glass min-w-0 rounded-2xl p-6">
            <p className="text-xs uppercase tracking-[0.15em] text-fg/55">{dictionary.contact.phoneLabel}</p>
            <a
              href={`tel:${profile.phoneRaw}`}
              className="mt-3 block break-words font-display text-xl leading-tight text-fg hover:underline sm:text-2xl"
            >
              {profile.phoneDisplay}
            </a>
          </article>

          <article className="glass min-w-0 rounded-2xl p-6 sm:col-span-2 lg:col-span-1">
            <p className="text-xs uppercase tracking-[0.15em] text-fg/55">{dictionary.contact.locationLabel}</p>
            <p className="mt-3 font-display text-xl leading-tight text-fg sm:text-2xl">{dictionary.contact.locationValue}</p>
          </article>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <ButtonLink href={profile.github} external variant="secondary">
            {dictionary.contact.githubLabel}
            <ArrowUpRight size={14} />
          </ButtonLink>
          <ButtonLink href={profile.linkedin} external variant="secondary">
            {dictionary.contact.linkedinLabel}
            <ArrowUpRight size={14} />
          </ButtonLink>
          <ButtonLink href={whatsappLink} external variant="secondary">
            {dictionary.contact.whatsappLabel}
            <ArrowUpRight size={14} />
          </ButtonLink>
        </div>
      </div>
    </Section>
  );
}
