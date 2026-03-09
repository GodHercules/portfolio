'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { PropsWithChildren } from 'react';

type RevealProps = PropsWithChildren<{
  delay?: number;
  className?: string;
}>;

export function Reveal({ delay = 0, className, children }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
