"use client";

import { useEffect } from "react";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-6 text-center">
      <h1 className="text-2xl font-semibold">
        Ocurrió un error inesperado
      </h1>

      <p className="max-w-md text-sm text-muted-foreground">
        Intenta nuevamente. Si el problema persiste, revisa la consola para más detalles.
      </p>

      <button
        type="button"
        onClick={reset}
        className="rounded-md border px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
      >
        Reintentar
      </button>
    </main>
  );
}