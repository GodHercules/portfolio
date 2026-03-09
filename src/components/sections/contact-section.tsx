import { ArrowUpRight } from 'lucide-react';

import { buildWhatsAppUrl, profile } from '@/data/profile';
import { ButtonLink } from '@/components/ui/button';
import { Section, SectionLead, SectionTitle } from '@/components/ui/section';
import type { Dictionary } from '@/lib/i18n/dictionaries';

export function ContactSection({ dictionary }: { dictionary: Dictionary }) {
  const whatsappLink = buildWhatsAppUrl(
    profile.phoneRaw,
    'Olá Hercules, vi seu portfólio e gostaria de conversar sobre um projeto.',
  );

  return (
    <Section>
      <div className="content-grid">
        <SectionTitle>{dictionary.contact.title}</SectionTitle>
        <SectionLead>{dictionary.contact.subtitle}</SectionLead>

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
