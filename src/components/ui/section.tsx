import type { PropsWithChildren } from 'react';

import { cn } from '@/lib/utils';

type SectionProps = PropsWithChildren<{
  className?: string;
}>;

export function Section({ className, children }: SectionProps) {
  return <section className={cn('section-spacing', className)}>{children}</section>;
}

export function SectionTitle({ children }: PropsWithChildren) {
  return <h2 className="font-display text-3xl font-semibold tracking-tight text-fg sm:text-4xl">{children}</h2>;
}

export function SectionLead({ children }: PropsWithChildren) {
  return <p className="mt-4 max-w-3xl text-sm leading-relaxed text-fg/75 sm:text-base">{children}</p>;
}
