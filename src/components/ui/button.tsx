import Link, { type LinkProps } from 'next/link';
import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';

import { cn } from '@/lib/utils';

type Variant = 'primary' | 'secondary' | 'ghost';

type BaseProps = {
  variant?: Variant;
  className?: string;
};

type ButtonLinkProps = PropsWithChildren<BaseProps & LinkProps & { external?: boolean }>;

type ButtonProps = PropsWithChildren<BaseProps & ButtonHTMLAttributes<HTMLButtonElement>>;

const styles: Record<Variant, string> = {
  primary:
    'bg-fg text-bg hover:-translate-y-0.5 hover:bg-fg/90 dark:bg-fg dark:text-bg dark:hover:bg-fg/90',
  secondary: 'border border-border bg-card text-fg hover:-translate-y-0.5 hover:bg-muted',
  ghost: 'bg-transparent text-fg hover:bg-muted',
};

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent';

export function Button({ variant = 'primary', className, children, ...props }: ButtonProps) {
  return (
    <button className={cn(base, styles[variant], className)} {...props}>
      {children}
    </button>
  );
}

export function ButtonLink({ variant = 'primary', className, children, external, ...props }: ButtonLinkProps) {
  return (
    <Link
      className={cn(base, styles[variant], className)}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      {...props}
    >
      {children}
    </Link>
  );
}
