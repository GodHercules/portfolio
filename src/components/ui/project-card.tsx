import Image from 'next/image';
import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

type ProjectCardProps = {
  href: string;
  title: string;
  summary: string;
  image: string;
  stacks: string[];
  tag?: string;
  proofItems?: { label: string; value: string }[];
  className?: string;
};

export function ProjectCard({ href, title, summary, image, stacks, tag, proofItems, className }: ProjectCardProps) {
  return (
    <article className={cn('group glass overflow-hidden rounded-3xl shadow-soft', className)}>
      <Link href={href} className="block">
        <div className="relative aspect-[16/10] overflow-hidden bg-muted">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
          />
        </div>
        <div className="space-y-4 p-6">
          {tag ? <Badge>{tag}</Badge> : null}
          <h3 className="font-display text-2xl leading-tight tracking-tight text-fg">{title}</h3>
          <p className="text-sm leading-relaxed text-fg/70">{summary}</p>
          {proofItems?.length ? (
            <div className="grid gap-2 border-y border-border/70 py-4 sm:grid-cols-3">
              {proofItems.map((item) => (
                <div key={item.label} className="min-w-0">
                  <p className="text-[10px] uppercase tracking-[0.16em] text-fg/45">{item.label}</p>
                  <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-fg/70">{item.value}</p>
                </div>
              ))}
            </div>
          ) : null}
          <ul className="flex flex-wrap gap-2 pt-1">
            {stacks.map((stack) => (
              <li key={stack} className="rounded-full border border-border bg-muted px-3 py-1 text-xs text-fg/75">
                {stack}
              </li>
            ))}
          </ul>
        </div>
      </Link>
    </article>
  );
}
