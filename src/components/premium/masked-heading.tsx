'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { createElement, type HTMLAttributes, type ReactNode } from 'react';

import { cn } from '@/lib/utils';

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type FoldTag = HeadingTag | 'div' | 'p' | 'span';

export type FoldTextProps = Omit<HTMLAttributes<HTMLElement>, 'children'> & {
  as?: FoldTag;
  children: ReactNode;
  delay?: number;
  duration?: number;
  trigger?: 'mount' | 'view';
  once?: boolean;
};

export function FoldText({
  as = 'span',
  children,
  className,
  delay = 0,
  duration = 0.72,
  trigger = 'view',
  once = true,
  ...props
}: FoldTextProps) {
  const reduceMotion = useReducedMotion();
  const elementClassName = cn('overflow-hidden', className);

  return createElement(
    as,
    { ...props, className: elementClassName },
    <motion.span
      initial={reduceMotion ? false : { opacity: 0, y: '105%' }}
      animate={trigger === 'mount' ? { opacity: 1, y: 0 } : undefined}
      whileInView={trigger === 'view' ? { opacity: 1, y: 0 } : undefined}
      viewport={{ once, amount: 0.35 }}
      transition={reduceMotion ? { duration: 0 } : { duration, delay, ease: [0.16, 1, 0.3, 1] }}
      style={{ display: 'block', transformOrigin: '50% 100%' }}
    >
      {children}
    </motion.span>,
  );
}

export type MaskedHeadingProps = Omit<FoldTextProps, 'as'> & {
  as?: HeadingTag;
};

export function MaskedHeading({ as = 'h2', ...props }: MaskedHeadingProps) {
  return <FoldText {...props} as={as} />;
}
