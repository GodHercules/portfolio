import type { Locale } from '@/lib/i18n/config';
import type { GithubProject } from '@/types/project';

type RepositoryOverride = {
  repo: string;
  slug: string;
  stack: string[];
  liveUrl?: string;
  summaries: Record<Locale, string>;
};

export const githubOverrides: RepositoryOverride[] = [
  {
    repo: 'portfolio',
    slug: 'portfolio',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    summaries: {
      'pt-BR': 'Portfólio multilíngue com arquitetura escalável, modo claro/escuro e integração dinâmica de projetos.',
      en: 'Multilingual portfolio with scalable architecture, light/dark mode and dynamic project integration.',
      es: 'Portafolio multilingüe con arquitectura escalable, modo claro/oscuro e integración dinámica de proyectos.',
    },
  },
];

export function applyGithubOverrides(
  locale: Locale,
  repoName: string,
  fallback: GithubProject,
): GithubProject {
  const override = githubOverrides.find((item) => item.repo.toLowerCase() === repoName.toLowerCase());

  if (!override) {
    return {
      ...fallback,
      slug: fallback.slug || repoName.toLowerCase(),
      stack: fallback.stack.length ? fallback.stack : ['Code'],
      summary:
        fallback.summary ||
        (locale === 'pt-BR'
          ? 'Projeto sincronizado automaticamente via GitHub.'
          : locale === 'es'
            ? 'Proyecto sincronizado automáticamente vía GitHub.'
            : 'Project automatically synced via GitHub.'),
    };
  }

  return {
    ...fallback,
    slug: override.slug,
    stack: override.stack,
    liveUrl: override.liveUrl ?? fallback.liveUrl,
    summary: override.summaries[locale],
  };
}
