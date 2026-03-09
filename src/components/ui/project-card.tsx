'use client';

import { motion } from 'framer-motion';
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
  className?: string;
};

export function ProjectCard({ href, title, summary, image, stacks, tag, className }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4 }}
      className={cn('group glass overflow-hidden rounded-3xl shadow-soft', className)}
    >
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
          <ul className="flex flex-wrap gap-2 pt-1">
            {stacks.map((stack) => (
              <li key={stack} className="rounded-full border border-border bg-muted px-3 py-1 text-xs text-fg/75">
                {stack}
              </li>
            ))}
          </ul>
        </div>
      </Link>
    </motion.article>
  );
}
