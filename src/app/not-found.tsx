import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div
      className="min-h-screen bg-[#111111] text-white flex flex-col items-center justify-center p-6 text-center"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="max-w-md w-full space-y-8">
        <div className="relative w-24 h-16 mx-auto">
          <Image
            src="/images/iconos/logo2.svg"
            alt="Voladizo Logo"
            fill
            className="object-contain"
          />
        </div>
        <div className="space-y-3">
          <span
            className="block text-7xl font-bold tracking-widest"
            style={{ fontFamily: "'Oswald-Bold', 'Oswald', sans-serif" }}
          >
            404
          </span>
          <h1 className="text-xs font-bold uppercase tracking-[3px] text-neutral-300">
            Página no encontrada
          </h1>
          <p className="text-sm text-neutral-400 font-light leading-relaxed">
            La página que buscas no existe o ha sido movida.
          </p>
        </div>
        <Link
          href="/"
          className="inline-flex items-center justify-center bg-white text-black px-8 py-4 font-bold text-xs uppercase tracking-[3px] hover:bg-neutral-200 transition-colors"
        >
          Volver al Inicio
        </Link>
      </div>
    </div>
  );
}
