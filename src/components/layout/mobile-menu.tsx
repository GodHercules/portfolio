'use client';

import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

import { cn } from '@/lib/utils';

type MobileMenuProps = {
  openLabel: string;
  closeLabel: string;
  items: { href: string; label: string }[];
};

export function MobileMenu({ openLabel, closeLabel, items }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuId = 'mobile-navigation-menu';

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={open ? closeLabel : openLabel}
        aria-expanded={open}
        aria-controls={menuId}
        ref={triggerRef}
        onClick={() => setOpen((value) => !value)}
        className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full bg-card"
      >
        {open ? <X size={18} /> : <Menu size={18} />}
      </button>

      <div
        id={menuId}
        aria-hidden={!open}
        inert={!open}
        className={cn(
          'absolute left-5 right-5 top-full bg-card p-4 transition duration-300',
          open ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none -translate-y-2 opacity-0',
        )}
      >
        <nav className="flex flex-col gap-1">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="focus-ring rounded-xl px-3 py-3 text-sm text-fg/80 hover:bg-muted hover:text-fg"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
