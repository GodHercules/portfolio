import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="content-grid flex min-h-[70vh] flex-col items-center justify-center text-center">
      <p className="text-sm text-fg/60">404</p>
      <h1 className="mt-3 font-display text-4xl tracking-tight">Página não encontrada</h1>
      <Link href="/pt-BR" className="mt-6 rounded-full border border-border px-5 py-2 text-sm hover:bg-muted">
        Voltar para o início
      </Link>
    </main>
  );
}
