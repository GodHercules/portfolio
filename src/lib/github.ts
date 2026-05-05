import { applyGithubOverrides } from '@/data/github-overrides';
import type { Locale } from '@/lib/i18n/config';
import type { GithubProject, GithubRepository } from '@/types/project';

const GITHUB_API = 'https://api.github.com';
const DEFAULT_USERNAME = process.env.GITHUB_USERNAME ?? 'GodHercules';

type GetGithubProjectsArgs = {
  locale: Locale;
  username?: string;
};

function buildGithubCover(fullName: string, updatedAt: string) {
  const hash = Date.parse(updatedAt) || 1;
  return `https://opengraph.githubassets.com/${hash}/${fullName}`;
}

function isGithubRepository(value: unknown): value is GithubRepository {
  if (!value || typeof value !== 'object') {
    return false;
  }

  const repo = value as Partial<GithubRepository>;

  return (
    typeof repo.id === 'number' &&
    typeof repo.name === 'string' &&
    typeof repo.full_name === 'string' &&
    typeof repo.private === 'boolean' &&
    typeof repo.html_url === 'string' &&
    typeof repo.updated_at === 'string' &&
    typeof repo.stargazers_count === 'number' &&
    typeof repo.fork === 'boolean' &&
    typeof repo.archived === 'boolean' &&
    Array.isArray(repo.topics)
  );
}

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
      ? `${GITHUB_API}/user/repos?sort=updated&per_page=100&visibility=public&affiliation=owner`
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

    const payload = (await response.json()) as unknown;
    const repositories = Array.isArray(payload) ? payload.filter(isGithubRepository) : [];

    return repositories
      .filter((repo) => !repo.private)
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
          cover: buildGithubCover(repo.full_name, repo.updated_at),
        }),
      );
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.warn('Failed to fetch GitHub projects', error);
    }

    return [] as GithubProject[];
  }
}

