import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-6 text-center">
      <h1 className="text-4xl font-bold">404</h1>

      <h2 className="text-2xl font-semibold">
        Página no encontrada
      </h2>

      <p className="max-w-md text-sm text-muted-foreground">
        La página que intentas visitar no existe o fue movida.
      </p>

      <Link
        href="/"
        className="rounded-md border px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
      >
        Volver al inicio
      </Link>
    </main>
  );
}