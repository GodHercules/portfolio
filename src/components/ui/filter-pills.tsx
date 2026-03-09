'use client';

import { cn } from '@/lib/utils';

type FilterItem = {
  id: string;
  label: string;
};

type FilterPillsProps = {
  items: FilterItem[];
  activeId: string;
  onChange: (id: string) => void;
};

export function FilterPills({ items, activeId, onChange }: FilterPillsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => {
        const active = item.id === activeId;
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => onChange(item.id)}
            className={cn(
              'rounded-full border px-4 py-2 text-sm transition',
              active
                ? 'border-fg bg-fg text-bg'
                : 'border-border bg-card text-fg/75 hover:border-fg/40 hover:text-fg',
            )}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
