'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect, useState, type PropsWithChildren } from 'react';

export function PageTransition({ children }: PropsWithChildren) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
const [mounted, setMounted] = useState(false);

useEffect(() => setMounted(true), []);

const motionDisabled = !mounted || reduceMotion;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={motionDisabled ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={motionDisabled ? undefined : { opacity: 0, y: -8 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
