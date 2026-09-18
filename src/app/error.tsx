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
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <h2 className="text-2xl font-bold text-slate-800 mb-2">Algo sali\u00F3 mal</h2>
      <p className="text-slate-600 mb-6 text-sm">Ocurri\u00F3 un error inesperado al cargar la p\u00E1gina.</p>
      <button
        onClick={() => reset()}
        className="px-6 py-2.5 rounded-full bg-[#0d59b2] text-white font-bold text-sm shadow hover:bg-[#094182]"
      >
        Reintentar
      </button>
    </div>
  );
}
