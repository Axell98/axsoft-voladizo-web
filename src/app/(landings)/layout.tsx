import Link from "next/link";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Header mínimo de conversión */}
      <header className="w-full bg-white border-b border-slate-200 py-3.5 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/images/logo-sta-footer.png"
              alt="Colegio Santo Tomás de Aquino"
              className="h-10 w-auto object-contain"
            />
          </Link>
          <a
            href="https://wa.me/51987118509?text=Hola%2C%20deseo%20m%C3%A1s%20informaci%C3%B3n"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full bg-[#0d59b2] text-white text-xs sm:text-sm font-bold shadow hover:bg-[#094182] transition-all"
          >
            Contactar por WhatsApp
          </a>
        </div>
      </header>

      {/* Contenido Landing */}
      <main className="flex-1 w-full">
        {children}
      </main>

      {/* Footer mínimo */}
      <footer className="w-full bg-slate-900 text-slate-400 py-6 text-center text-xs">
        <p>© 2026 Colegio Santo Tomás de Aquino - Padres Dominicos. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
