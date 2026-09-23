"use client";

import { useCallback, useEffect, useState } from "react";
import BeforeAfterDiagonal from "@/components/inicio/BeforeAfterDiagonal";
import VideoModal from "@/components/proyectos/VideoModal";
import { CATEGORIAS, type Proyecto } from "@/features/proyectos/data";

function ArrowIcon({ direction, className = "w-5 h-4" }: { direction: "prev" | "next"; className?: string }) {
  return (
    <svg
      className={`${className} ${direction === "prev" ? "-rotate-180" : ""}`}
      viewBox="0 0 28.214 23.057"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="square"
      aria-hidden="true"
    >
      <path d="M23.528 11.685h-20M16.685 19.528l8-8-8-8" />
    </svg>
  );
}

function PlayIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M8 5.14v13.72c0 .8.87 1.29 1.55.87l10.72-6.86a1 1 0 000-1.72L9.55 4.27A1 1 0 008 5.14z" />
    </svg>
  );
}

// Separa el título para resaltar la última palabra en verde
function partirTitulo(titulo: string): [string, string] {
  const i = titulo.lastIndexOf(" ");
  return i === -1 ? [titulo, ""] : [titulo.slice(0, i), titulo.slice(i + 1)];
}

interface ProyectosSliderProps {
  proyectos: Proyecto[];
}

export default function ProyectosSlider({ proyectos }: ProyectosSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const total = proyectos.length;
  const proyecto = proyectos[activeIndex];

  const goTo = useCallback(
    (index: number) => {
      setActiveIndex(((index % total) + total) % total);
    },
    [total]
  );

  const prev = useCallback(() => goTo(activeIndex - 1), [goTo, activeIndex]);
  const next = useCallback(() => goTo(activeIndex + 1), [goTo, activeIndex]);

  // Navegación por teclado (flechas izquierda/derecha)
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [next, prev]);

  if (!proyecto) return null;

  const [tituloBase, tituloResaltado] = partirTitulo(proyecto.titulo);
  const numero = String(activeIndex + 1).padStart(2, "0");
  const totalLabel = String(total).padStart(2, "0");

  const metaItems = [
    { label: "Locación", value: proyecto.locacion },
    { label: "Categoría", value: CATEGORIAS[proyecto.categoria] },
    { label: "Ejecución", value: proyecto.ejecucion },
    { label: "Año", value: proyecto.anio?.toString() },
  ].filter((m): m is { label: string; value: string } => Boolean(m.value));

  return (
    <section
      aria-label="Comparativa de proyectos"
      className="relative bg-[#141414] text-white overflow-hidden py-16 lg:py-20"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="max-w-[1180px] mx-auto px-6 sm:px-12 lg:px-16">
        {/* ========================================================= */}
        {/* BARRA SUPERIOR: CONTADOR + ÍNDICE + FLECHAS               */}
        {/* ========================================================= */}
        <div className="flex items-center gap-4 sm:gap-6 mb-10 lg:mb-14">
          <span
            className="shrink-0 text-xs font-bold uppercase tracking-[2px] text-neutral-500"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            <span className="text-brand text-base">{numero}</span> / {totalLabel}
          </span>

          {/* Índice numerado: navegación directa a cualquier proyecto */}
          <div
            role="tablist"
            aria-label="Ir a un proyecto"
            className="flex-1 flex items-center gap-2 overflow-x-auto scrollbar-hide"
          >
            {proyectos.map((p, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={p.slug}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`Proyecto ${idx + 1}: ${p.titulo}`}
                  onClick={() => goTo(idx)}
                  className={`shrink-0 w-8 h-8 flex items-center justify-center text-[11px] font-bold uppercase tracking-wide border transition-all cursor-pointer ${
                    isActive
                      ? "bg-brand text-black border-brand"
                      : "bg-transparent text-neutral-500 border-white/15 hover:border-brand/60 hover:text-white"
                  }`}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>

          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={prev}
              aria-label="Proyecto anterior"
              className="group relative w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white transition-all focus:outline-none cursor-pointer"
            >
              <svg
                className="absolute inset-0 w-full h-full text-white/30 group-hover:text-brand transition-colors group-hover:animate-spin-slow"
                viewBox="0 0 104 104"
                aria-hidden="true"
              >
                <circle cx="52" cy="52" r="48" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 6 4 6" />
              </svg>
              <ArrowIcon direction="prev" className="w-5 h-4 relative z-10" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Siguiente proyecto"
              className="group relative w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white transition-all focus:outline-none cursor-pointer"
            >
              <svg
                className="absolute inset-0 w-full h-full text-white/30 group-hover:text-brand transition-colors group-hover:animate-spin-slow"
                viewBox="0 0 104 104"
                aria-hidden="true"
              >
                <circle cx="52" cy="52" r="48" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 6 4 6" />
              </svg>
              <ArrowIcon direction="next" className="w-5 h-4 relative z-10" />
            </button>
          </div>
        </div>

        {/* ========================================================= */}
        {/* CONTENIDO DEL PROYECTO ACTIVO (cambia texto + imagen)     */}
        {/* ========================================================= */}
        <div key={proyecto.slug} className="animate-fadeIn" aria-live="polite">
          <div className="text-center mb-8 lg:mb-10">
            <span className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[3px] text-brand">
              <span aria-hidden="true" className="w-8 h-px bg-brand" />
              Proyecto {numero}
              <span aria-hidden="true" className="w-8 h-px bg-brand" />
            </span>
            <h2 className="font-oswald-bold uppercase tracking-tight leading-[1.1] text-2xl sm:text-4xl lg:text-5xl mt-4">
              {tituloBase} {tituloResaltado && <span className="text-brand">{tituloResaltado}</span>}
            </h2>
          </div>

          {/* Comparador antes/después (arrastrable) */}
          <BeforeAfterDiagonal
            beforeImage={proyecto.comparacion?.antesImagen ?? proyecto.imagen}
            afterImage={proyecto.comparacion?.despuesImagen ?? proyecto.imagen}
            beforeLabel={proyecto.comparacion?.antesLabel ?? "Antes"}
            afterLabel={proyecto.comparacion?.despuesLabel ?? "Después"}
            heightClassName="h-[280px] sm:h-[420px] lg:h-[560px]"
          />

          {/* Ficha técnica */}
          <dl className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {metaItems.map((m) => (
              <div key={m.label} className="bg-[#1e1e1e] px-5 py-4 border-l-[3px] border-brand">
                <dt className="font-oswald-bold uppercase tracking-wide text-xs sm:text-sm text-brand">{m.label}</dt>
                <dd className="mt-1 text-sm uppercase tracking-wide text-white">{m.value}</dd>
              </div>
            ))}
          </dl>

          {/* Botón de video, solo si el proyecto tiene uno */}
          {proyecto.videoId && (
            <div className="mt-8 flex justify-center">
              <button
                type="button"
                onClick={() => setActiveVideo(proyecto.videoId!)}
                className="group inline-flex items-center gap-3 border border-white/20 hover:border-brand px-6 py-3.5 text-xs font-bold uppercase tracking-[2.5px] text-white hover:text-brand transition-all cursor-pointer"
              >
                <span className="w-8 h-8 rounded-full bg-brand text-black flex items-center justify-center transition-transform group-hover:scale-110">
                  <PlayIcon className="w-3.5 h-3.5 ml-0.5" />
                </span>
                Reproducir video
              </button>
            </div>
          )}
        </div>

        {/* Flechas en móvil (debajo del contenido, ya que arriba se ocultan en pantallas chicas) */}
        <div className="flex sm:hidden items-center justify-center gap-4 mt-10">
          <button
            type="button"
            onClick={prev}
            aria-label="Proyecto anterior"
            className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white cursor-pointer"
          >
            <ArrowIcon direction="prev" className="w-5 h-4" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Siguiente proyecto"
            className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white cursor-pointer"
          >
            <ArrowIcon direction="next" className="w-5 h-4" />
          </button>
        </div>
      </div>

      <VideoModal videoId={activeVideo} title={proyecto.titulo} onClose={() => setActiveVideo(null)} />
    </section>
  );
}
