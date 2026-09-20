'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div
      className="min-h-screen bg-[#111111] text-white flex flex-col items-center justify-center p-6 text-center"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <h2
        className="text-3xl font-bold uppercase tracking-widest mb-3"
        style={{ fontFamily: "'Oswald-Bold', 'Oswald', sans-serif" }}
      >
        Algo salió mal
      </h2>
      <p className="text-neutral-400 font-light mb-8 text-sm">
        Ocurrió un error inesperado al cargar la página.
      </p>
      <button
        onClick={() => reset()}
        className="bg-white text-black px-8 py-4 font-bold text-xs uppercase tracking-[3px] hover:bg-neutral-200 transition-colors cursor-pointer"
      >
        Reintentar
      </button>
    </div>
  );
}
