import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nivel Secundaria | Colegio Santo Tomás de Aquino",
  description: "Formación preuniversitaria y liderazgo cristiano con certificación Cambridge.",
};

export default function SecundariaPage() {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <span className="px-4 py-1.5 rounded-full bg-blue-50 text-[#0d59b2] text-xs font-bold border border-blue-200">
          Nivel Secundaria (1° a 5° de Secundaria)
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Liderazgo, Ciencia y Preparación Preuniversitaria
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
          Convenios universitarios, certificación internacional de inglés, laboratorios modernos y orientación vocacional.
        </p>
      </div>
    </section>
  );
}
