import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nivel Primaria | Colegio Santo Tomás de Aquino",
  description: "Propuesta educativa del nivel primaria con metodologías activas, robótica e inglés.",
};

export default function PrimariaPage() {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <span className="px-4 py-1.5 rounded-full bg-blue-50 text-[#0d59b2] text-xs font-bold border border-blue-200">
          Nivel Primaria (1° a 6° Grado)
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Aprender con alegría, crecer con valores
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
          Educación integral basada en el carisma dominico, robótica educativa, inglés intensivo y formación espiritual.
        </p>
      </div>
    </section>
  );
}