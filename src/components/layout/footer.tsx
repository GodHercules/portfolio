import type { Dictionary } from '@/lib/i18n/dictionaries';

export function Footer({ dictionary }: { dictionary: Dictionary }) {
  return (
    <footer className="mt-16 border-t border-border/70 py-10">
      <div className="content-grid flex flex-col gap-4 text-sm text-fg/70 sm:flex-row sm:items-center sm:justify-between">
        <p>{dictionary.footer.text}</p>
        <p>{new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
