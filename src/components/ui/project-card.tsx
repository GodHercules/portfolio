import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

import { cn } from '@/lib/utils';

type ProjectCardProps = {
  href: string;
  title: string;
  summary: string;
  image: string;
  previewImages?: string[];
  stacks: string[];
  tag?: string;
  proofItems?: { label: string; value: string }[];
  className?: string;
};

export function ProjectCard({ href, title, summary, image, previewImages, stacks, tag, proofItems, className }: ProjectCardProps) {
  const frames = previewImages?.length ? previewImages : [image, image, image];

  return (
<article className={cn('group min-w-0 overflow-hidden bg-bg', className)}>
      <Link href={href} className="focus-ring block">
          <div data-ui="project-preview" className="relative aspect-[16/10] overflow-hidden bg-muted">
          <div className="project-reel flex h-full w-[300%] transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:-translate-x-2/3 group-focus-within:-translate-x-2/3">
            {frames.slice(0, 3).map((frame, index) => (
              <div key={`${frame}-${index}`} className="relative h-full w-1/3 shrink-0 overflow-hidden">
                <Image
                  src={frame}
                  alt={index === 0 ? title : ''}
                  fill
                  loading="lazy"
                  sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
                  className={cn(
                    'object-cover brightness-[0.62] grayscale transition duration-700 group-hover:brightness-100 group-hover:grayscale-0 group-focus-within:brightness-100 group-focus-within:grayscale-0',
                    index === 1 ? 'scale-110' : index === 2 ? 'scale-125' : '',
                  )}
                />
              </div>
            ))}
          </div>
          <span className="absolute bottom-0 right-0 inline-flex h-11 w-11 items-center justify-center bg-accent text-[hsl(var(--surface-inverse-text))] transition duration-300 group-hover:bg-fg group-hover:text-bg group-focus-within:bg-fg group-focus-within:text-bg" aria-hidden="true">
            <ArrowUpRight size={18} />
          </span>
        </div>
        <div className="space-y-4 px-0 pb-7 pt-5 sm:px-1">
<div className="flex items-center justify-between gap-4 text-sm font-medium">
<span className="text-accent">{tag}</span>
          </div>
<h3 className="font-display text-[1.75rem] leading-[1.02] tracking-tight text-fg">{title}</h3>
<p className="max-w-prose text-base leading-relaxed text-fg/75">{summary}</p>
          {proofItems?.length ? (
<div className="grid gap-4 bg-card/55 px-2 py-4 sm:grid-cols-3">
              {proofItems.map((item) => (
                <div key={item.label} className="min-w-0">
<p className="text-sm font-medium text-fg/60">{item.label}</p>
<p className="mt-1 line-clamp-2 text-sm leading-relaxed text-fg/80">{item.value}</p>
                </div>
              ))}
            </div>
          ) : null}
<ul className="flex flex-wrap gap-x-3 gap-y-1 pt-1 text-sm text-fg/60">
            {stacks.slice(0, 4).map((stack) => (
              <li key={stack} className="after:ml-3 after:text-accent after:content-['/'] last:after:hidden">
                {stack}
              </li>
            ))}
          </ul>
        </div>
      </Link>
    </article>
  );
}
