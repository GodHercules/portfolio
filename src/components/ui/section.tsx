import type { ComponentPropsWithoutRef, PropsWithChildren } from 'react';

import { cn } from '@/lib/utils';

type SectionProps = PropsWithChildren<
  ComponentPropsWithoutRef<'section'> & {
    className?: string;
  }
>;

export function Section({ className, children, ...props }: SectionProps) {
  return (
    <section className={cn('section-spacing', className)} {...props}>
      {children}
    </section>
  );
}

type SectionTitleProps = PropsWithChildren<{
  as?: 'h1' | 'h2';
  className?: string;
}>;

export function SectionTitle({ children, as = 'h2', className }: SectionTitleProps) {
  const Heading = as;

  return <Heading className={cn('max-w-3xl font-display text-2xl font-semibold leading-[1.02] tracking-tight text-fg sm:text-3xl lg:text-4xl', className)}>{children}</Heading>;
}

export function SectionLead({ children }: PropsWithChildren) {
  return <p className="mt-4 max-w-3xl text-base leading-relaxed text-fg/75">{children}</p>;
}
