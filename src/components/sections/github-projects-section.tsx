import Image from 'next/image';
import { ArrowUpRight, Star } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { ButtonLink } from '@/components/ui/button';
import { Section, SectionLead, SectionTitle } from '@/components/ui/section';
import { formatDate } from '@/lib/utils';
import type { Locale } from '@/lib/i18n/config';
import type { Dictionary } from '@/lib/i18n/dictionaries';
import type { GithubProject } from '@/types/project';

type GithubProjectsSectionProps = {
  locale: Locale;
  dictionary: Dictionary;
  projects: GithubProject[];
};

export function GithubProjectsSection({ locale, dictionary, projects }: GithubProjectsSectionProps) {
  const coverAltPrefix =
    locale === 'en' ? 'Project cover' : locale === 'es' ? 'Portada del proyecto' : 'Capa do projeto';
  const eyebrow = locale === 'en' ? 'Technical lab' : locale === 'es' ? 'Laboratorio tecnico' : 'Laboratorio tecnico';
  const framing =
    locale === 'en'
      ? 'This layer combines live GitHub data with curated portfolio framing so the repositories read as technical evidence, not just activity.'
      : locale === 'es'
        ? 'Esta capa combina datos vivos de GitHub con curadoria de portafolio para que los repositorios funcionen como evidencia tecnica y no solo como actividad.'
        : 'Esta camada combina dados vivos do GitHub com curadoria de portfolio para que os repositorios funcionem como evidencia tecnica, e nao apenas como atividade.';
  const highlights =
    locale === 'en'
      ? ['GitHub REST API', '30 min ISR', 'Server token fallback']
      : locale === 'es'
        ? ['GitHub REST API', 'ISR 30 min', 'Fallback con token server']
        : ['GitHub REST API', 'ISR 30 min', 'Fallback com token server'];

  return (
    <Section id="github-projects">
      <div className="content-grid">
        <div className="mb-5 flex flex-wrap items-center gap-2">
          <Badge>{eyebrow}</Badge>
          {highlights.map((item) => (
            <span key={item} className="rounded-full border border-border/70 bg-card px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-fg/55">
              {item}
            </span>
          ))}
        </div>

        <SectionTitle>{dictionary.githubSection.title}</SectionTitle>
        <SectionLead>{dictionary.githubSection.description}</SectionLead>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-fg/65">{framing}</p>

        {projects.length === 0 ? (
          <p className="mt-8 rounded-2xl border border-dashed border-border p-6 text-fg/70">{dictionary.githubSection.empty}</p>
        ) : (
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {projects.map((project) => (
              <article key={project.slug} className="glass overflow-hidden rounded-2xl">
                <div className="relative aspect-[16/9] border-b border-border/70 bg-muted">
                  {project.cover ? (
                    <Image
                      src={project.cover}
                      alt={`${coverAltPrefix} ${project.title}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-gradient-to-br from-accent/20 via-transparent to-accent/10 px-4 text-center font-display text-2xl text-fg/70">
                      {project.title}
                    </div>
                  )}
                </div>

                <div className="p-5">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <h3 className="font-display text-2xl leading-tight tracking-tight">{project.title}</h3>
                    <Badge className="gap-1">
                      <Star size={12} />
                      {project.stars}
                    </Badge>
                  </div>
                  <p className="text-sm text-fg/75">{project.summary}</p>

                  <div className="mt-4 grid gap-3 rounded-2xl border border-border/70 bg-muted/60 p-4 text-sm text-fg/70 sm:grid-cols-2">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.18em] text-fg/45">
                        {locale === 'en' ? 'Why it matters' : locale === 'es' ? 'Por que importa' : 'Por que importa'}
                      </p>
                      <p className="mt-2">
                        {locale === 'en'
                          ? 'Selected to show implementation quality, curation and public technical signal.'
                          : locale === 'es'
                            ? 'Seleccionado para mostrar calidad de implementacion, curadoria y senal tecnica publica.'
                            : 'Selecionado para mostrar qualidade de implementacao, curadoria e sinal tecnico publico.'}
                      </p>
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.18em] text-fg/45">
                        {locale === 'en' ? 'Freshness' : locale === 'es' ? 'Actualizacion' : 'Atualizacao'}
                      </p>
                      <p className="mt-2">
                        {locale === 'en'
                          ? `Updated ${formatDate(project.updatedAt, locale)} with ${project.stars} public stars.`
                          : locale === 'es'
                            ? `Actualizado ${formatDate(project.updatedAt, locale)} con ${project.stars} estrellas publicas.`
                            : `Atualizado ${formatDate(project.updatedAt, locale)} com ${project.stars} estrelas publicas.`}
                      </p>
                    </div>
                  </div>

                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((stack) => (
                      <li key={stack} className="rounded-full bg-muted px-3 py-1 text-xs text-fg/75">
                        {stack}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap items-center gap-3">
                    <ButtonLink href={project.githubUrl} external variant="secondary">
                      GitHub
                      <ArrowUpRight size={14} />
                    </ButtonLink>
                    {project.liveUrl ? (
                      <ButtonLink href={project.liveUrl} external variant="ghost">
                        {dictionary.common.live}
                        <ArrowUpRight size={14} />
                      </ButtonLink>
                    ) : null}
                  </div>
                  <p className="mt-4 text-xs text-fg/55">
                    {dictionary.common.updatedAt} {formatDate(project.updatedAt, locale)}
                  </p>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
