"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import TarjetaProyecto from "@/components/proyectos/TarjetaProyecto";
import { proyectos } from "@/features/proyectos/data";

export default function ProyectosCatalogo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Actualizar estado de botones y progreso al hacer scroll
  const handleScroll = useCallback(() => {
    if (!containerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
    
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    const maxScroll = scrollWidth - clientWidth;
    const progress = maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0;
    setScrollProgress(progress);
  }, []);

  useEffect(() => {
    handleScroll();
    window.addEventListener("resize", handleScroll);
    return () => window.removeEventListener("resize", handleScroll);
  }, [handleScroll]);

  // Funciones de navegación con botones
  const scroll = (direction: "left" | "right") => {
    if (!containerRef.current) return;
    const { clientWidth } = containerRef.current;
    // Desplaza aproximadamente 1 a 2 tarjetas según el ancho de pantalla
    const scrollAmount = clientWidth * 0.75;
    containerRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  // Soporte para arrastrar con el mouse (Drag & Slide)
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeftState(containerRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Multiplicador de velocidad
    containerRef.current.scrollLeft = scrollLeftState - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  return (
    <section
      className="py-14 sm:py-18 lg:py-24 bg-[#f8f8f8] text-black relative z-10 overflow-hidden"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="max-w-[2200px] mx-auto px-6 sm:px-8 lg:px-10 xl:px-12">
        {/* ========================================================= */}
        {/* ENCABEZADO Y CONTROLES DEL SLIDER                         */}
        {/* ========================================================= */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 mb-8 border-b border-neutral-200">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-6 h-[2px] bg-brand" />
              <span className="text-xs uppercase tracking-[3px] font-semibold text-neutral-500">
                Portafolio Completo
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-neutral-900 font-oswald-bold">
              Catálogo de <span className="text-brand">Proyectos</span>
            </h3>
          </div>

          {/* Controles de navegación */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              aria-label="Proyecto anterior"
              className={`w-11 h-11 flex items-center justify-center border transition-all duration-300 cursor-pointer ${
                canScrollLeft
                  ? "bg-black text-white border-black hover:bg-brand hover:text-black hover:border-brand"
                  : "bg-neutral-100 text-neutral-300 border-neutral-200 cursor-not-allowed"
              }`}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              type="button"
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              aria-label="Proyecto siguiente"
              className={`w-11 h-11 flex items-center justify-center border transition-all duration-300 cursor-pointer ${
                canScrollRight
                  ? "bg-black text-white border-black hover:bg-brand hover:text-black hover:border-brand"
                  : "bg-neutral-100 text-neutral-300 border-neutral-200 cursor-not-allowed"
              }`}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* ========================================================= */}
        {/* TRACK DEL SLIDER (CARRUSEL HORIZONTAL CONTINUO)           */}
        {/* ========================================================= */}
        <div
          ref={containerRef}
          onScroll={handleScroll}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          className={`flex gap-6 overflow-x-auto pb-8 pt-2 scroll-smooth select-none cursor-grab active:cursor-grabbing no-scrollbar snap-x snap-mandatory`}
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {proyectos.map((proyecto) => (
            <div
              key={proyecto.slug}
              className="flex-none w-[82vw] sm:w-[46vw] md:w-[35vw] lg:w-[28vw] xl:w-[22vw] 2xl:w-[19vw] snap-start"
            >
              <TarjetaProyecto proyecto={proyecto} />
            </div>
          ))}
        </div>

        {/* ========================================================= */}
        {/* BARRA DE PROGRESO INFERIOR & HINT                         */}
        {/* ========================================================= */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="w-full sm:max-w-md h-[3px] bg-neutral-200 overflow-hidden relative">
            <div
              className="h-full bg-brand transition-all duration-300 ease-out"
              style={{ width: `${Math.max(scrollProgress, 12)}%` }}
            />
          </div>

          <p className="text-xs text-neutral-400 uppercase tracking-[2px] font-medium flex items-center gap-2">
            <span>Desliza para explorar los {proyectos.length} proyectos</span>
            <span className="text-neutral-600">↔</span>
          </p>
        </div>
      </div>
    </section>
  );
}
