import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Open Day 2026 | Colegio Santo Tomás de Aquino",
  description: "Conoce nuestras instalaciones, propuesta pedagógica y equipo docente en vivo.",
};

export default function OpenDayPage() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-slate-200 p-8 sm:p-12 text-center space-y-6">
        <span className="px-4 py-1.5 rounded-full bg-blue-100 text-[#0d59b2] text-xs font-bold">
          Evento Exclusivo
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Open Day Santo Tomás de Aquino
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
          Visita nuestro campus en Jr. Camaná 170, Cercado de Lima y participa de clases demostrativas y visitas guiadas.
        </p>
      </div>
    </section>
  );
}
