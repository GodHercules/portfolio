import { applyGithubOverrides } from '@/data/github-overrides';
import type { Locale } from '@/lib/i18n/config';
import type { GithubProject, GithubRepository } from '@/types/project';

const GITHUB_API = 'https://api.github.com';
const DEFAULT_USERNAME = process.env.GITHUB_USERNAME ?? 'GodHercules';

type GetGithubProjectsArgs = {
  locale: Locale;
  username?: string;
};

export async function getGithubProjects({ locale, username = DEFAULT_USERNAME }: GetGithubProjectsArgs) {
  const headers: HeadersInit = {
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
  };

  const token = process.env.GITHUB_TOKEN;
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  try {
    const endpoint = token
      ? `${GITHUB_API}/user/repos?sort=updated&per_page=100&visibility=all&affiliation=owner`
      : `${GITHUB_API}/users/${username}/repos?sort=updated&per_page=100`;

    let response = await fetch(endpoint, {
      headers,
      next: { revalidate: 60 * 30 },
    });

    // Fallback para manter pelo menos os públicos se autenticação falhar.
    if (!response.ok && token) {
      response = await fetch(`${GITHUB_API}/users/${username}/repos?sort=updated&per_page=100`, {
        headers: { Accept: 'application/vnd.github+json' },
        next: { revalidate: 60 * 30 },
      });
    }

    if (!response.ok) {
      return [] as GithubProject[];
    }

    const repositories = (await response.json()) as GithubRepository[];

    return repositories
      .filter((repo) => !repo.fork && !repo.archived)
      .filter((repo) => repo.name.toLowerCase() !== 'portfolio')
      .slice(0, 6)
      .map((repo) =>
        applyGithubOverrides(locale, repo.name, {
          title: repo.name.replace(/[-_]/g, ' '),
          githubUrl: repo.html_url,
          liveUrl: repo.homepage ?? undefined,
          stars: repo.stargazers_count,
          updatedAt: repo.updated_at,
          stack: [repo.language ?? 'Code', ...repo.topics.slice(0, 2)],
          summary: repo.description ?? '',
          slug: repo.name.toLowerCase(),
        }),
      );
  } catch {
    return [] as GithubProject[];
  }
}
