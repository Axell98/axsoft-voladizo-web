import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl border border-slate-200 p-8 space-y-6">
        <img
          src="/images/logo-sta-footer.png"
          alt="Colegio Santo Tomás de Aquino"
          className="h-16 mx-auto object-contain"
        />
        <div className="space-y-2">
          <span className="text-5xl font-black text-[#0d59b2]">404</span>
          <h1 className="text-xl font-bold text-slate-800">Página no encontrada</h1>
          <p className="text-sm text-slate-500 leading-relaxed">
            La página que buscas no existe o ha sido movida temporalmente.
          </p>
        </div>
        <Link
          href="/"
          className="inline-block w-full py-3 rounded-full bg-[#0d59b2] hover:bg-[#094182] text-white font-bold text-sm shadow transition-all active:scale-95"
        >
          Volver al Inicio
        </Link>
      </div>
    </div>
  );
}
