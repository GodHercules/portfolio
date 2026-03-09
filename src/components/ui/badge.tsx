import { cn } from '@/lib/utils';
import type { PropsWithChildren } from 'react';

type BadgeProps = PropsWithChildren<{
  className?: string;
}>;

export function Badge({ className, children }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-border bg-card/80 px-3 py-1 text-xs font-medium tracking-wide text-fg/70',
        className,
      )}
    >
      {children}
    </span>
  );
}
