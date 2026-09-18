import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nosotros | Colegio Santo Tomás de Aquino",
  description: "Misión, visión e historia de la Orden de Predicadores (Padres Dominicos) en el Perú.",
};

export default function NosotrosPage() {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <span className="px-4 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-bold border border-slate-200">
          Colegio Santo Tomás de Aquino - Padres Dominicos
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Nuestra Historia y Misión
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
          Más de un siglo dedicados a la educación con carisma dominico en el corazón de Lima.
        </p>
      </div>
    </section>
  );
}
