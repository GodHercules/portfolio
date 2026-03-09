'use client';

import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import { cn } from '@/lib/utils';

type MobileMenuProps = {
  openLabel: string;
  closeLabel: string;
  items: { href: string; label: string }[];
};

export function MobileMenu({ openLabel, closeLabel, items }: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? closeLabel : openLabel}
        onClick={() => setOpen((value) => !value)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card"
      >
        {open ? <X size={18} /> : <Menu size={18} />}
      </button>

      <div
        className={cn(
          'absolute left-5 right-5 top-20 rounded-2xl border border-border bg-card p-4 shadow-soft transition',
          open ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none -translate-y-2 opacity-0',
        )}
      >
        <nav className="flex flex-col gap-1">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-xl px-3 py-2 text-sm text-fg/80 hover:bg-muted hover:text-fg"
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
