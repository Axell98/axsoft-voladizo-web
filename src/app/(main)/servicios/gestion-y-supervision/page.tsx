"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

const serviceSlides = [
  {
    id: 1,
    image: "/images/inicio/servicios/servicio4/servicio_supervicion.png",
    alt: "Gestión y Supervisión - Voladizo",
  },
];

export default function GestionSupervisionPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const total = serviceSlides.length;

  const nextSlide = useCallback(() => {
    if (total <= 1) return;
    setCurrentSlide((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    if (total <= 1) return;
    setCurrentSlide((prev) => (prev - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    if (total <= 1) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 5500);
    return () => clearInterval(timer);
  }, [nextSlide, total]);

  return (
    <div
      className="page-wraper w-full bg-white text-black"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* ========================================================= */}
      {/* 1. HERO BANNER ARQUITECTÓNICO CON MARCO C-SHAPE          */}
      {/* ========================================================= */}
      <div className="relative w-full h-[450px] sm:h-[500px] lg:h-[520px] bg-neutral-950 overflow-hidden flex items-center pt-24 pb-10">
        <Image
          src="/images/inicio/slider/slider1.jpg"
          alt="Gestión y Supervisión - Banner"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Overlay oscuro (bg-black/75) */}
        <div className="absolute inset-0 bg-black/75" />

        <div className="relative z-10 max-w-[1340px] w-full mx-auto px-6 sm:px-12 lg:px-16 xl:px-20">
          <div className="wt-bnr-inr-entry">
            {/* MARCO ARQUITECTÓNICO C-SHAPE */}
            <div className="relative py-10 sm:py-14 pl-6 sm:pl-8 border-t-[8px] sm:border-t-[10px] border-b-[8px] sm:border-b-[10px] border-l-[8px] sm:border-l-[10px] border-white w-[160px] sm:w-[220px] mb-8 after:content-[''] after:absolute after:right-0 after:top-0 after:w-[8px] sm:after:w-[10px] after:h-[35px] sm:after:h-[45px] after:bg-white before:content-[''] before:absolute before:right-0 before:bottom-0 before:w-[8px] sm:before:w-[10px] before:h-[35px] sm:before:h-[45px] before:bg-white">
              <div className="w-[280px] sm:w-[480px] md:w-[600px] lg:w-[680px]">
                <h1 className="text-white text-base sm:text-lg md:text-xl font-light uppercase tracking-[4px] sm:tracking-[5px] leading-relaxed">
                  TRANSFORMANDO ESPACIOS Y REALIDADES CON VISIÓN ARQUITECTÓNICA.
                </h1>
              </div>
            </div>

            {/* BREADCRUMB ROW */}
            <div className="text-white text-xs sm:text-sm font-medium tracking-[2px]">
              <Link href="/" className="hover:text-neutral-300 transition-colors">
                Inicio
              </Link>
              <span className="mx-2 text-white/80">»</span>
              <span className="text-white">Servicios</span>
              <span className="mx-2 text-white/80">»</span>
              <span className="text-[var(--color1)]">Gestión y Supervisión</span>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 2. SECCIÓN PRINCIPAL: GESTIÓN Y SUPERVISIÓN               */}
      {/* ========================================================= */}
      <section className="section-full clearfix pt-20 pb-32 bg-white text-black relative z-20 overflow-hidden">
        <div className="max-w-[1340px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-20">
          
          {/* GRID PRINCIPAL: 2 COLUMNAS */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
            
            {/* COLUMNA IZQUIERDA: TÍTULO DE SECCIÓN + IMAGEN DESTACADA */}
            <div className="lg:col-span-6 flex flex-col">
              
              {/* HEADER DE LA SECCIÓN */}
              <div className="mb-8">
                <span className="text-[11px] font-bold uppercase tracking-[3px] text-brand block mb-2">
                  Excelencia en Ejecución
                </span>
                <h2
                  className="font-oswald-bold uppercase text-3xl sm:text-4xl lg:text-[42px] leading-[1.1] tracking-tight text-neutral-950"
                >
                  Gestión y <span className="text-brand">Supervisión</span>
                </h2>
                <div className="w-12 h-[3px] bg-brand mt-4" />
              </div>

              {/* CONTENEDOR DE LA IMAGEN CON MARCO ARQUITECTÓNICO DESPLAZADO */}
              <div className="relative mt-2">
                {/* Marco gris desplazado */}
                <div
                  className="hidden sm:block absolute pointer-events-none z-0"
                  style={{
                    top: "30px",
                    left: "-30px",
                    width: "100%",
                    height: "100%",
                    border: "20px solid rgba(0, 0, 0, 0.06)",
                    boxSizing: "border-box",
                  }}
                />

                {/* CONTENEDOR DE LA IMAGEN FULL-BLEED */}
                <div className="relative z-10 w-full h-[280px] sm:h-[340px] lg:h-[380px] bg-neutral-900 shadow-xl overflow-hidden group">
                  {/* IMAGEN PRINCIPAL */}
                  {serviceSlides.map((slide, idx) => (
                    <div
                      key={slide.id}
                      className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
                        idx === currentSlide
                          ? "opacity-100 z-10"
                          : "opacity-0 z-0 pointer-events-none"
                      }`}
                    >
                      <Image
                        src={slide.image}
                        alt={slide.alt}
                        fill
                        priority={idx === 0}
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
                      />
                    </div>
                  ))}

                  {/* CONTROLES CONDICIONALES SI HAY MÁS DE 1 IMAGEN */}
                  {total > 1 && (
                    <>
                      <div className="absolute bottom-4 left-4 z-20 bg-black/75 backdrop-blur-sm px-3 py-1 text-white text-xs font-mono tracking-wider border border-white/10">
                        {currentSlide + 1} / {total}
                      </div>

                      <div className="absolute bottom-0 right-0 z-20 flex items-stretch">
                        <button
                          onClick={prevSlide}
                          type="button"
                          aria-label="Imagen anterior"
                          className="w-7 h-9 sm:w-8 sm:h-10 bg-[#6e7170] hover:bg-black text-white flex items-center justify-center transition-colors border-r border-white/20 cursor-pointer shadow-md group"
                        >
                          <svg
                            className="w-3.5 h-3.5 sm:w-4 sm:h-4 transform transition-transform group-hover:-translate-x-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            strokeWidth="2.5"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <button
                          onClick={nextSlide}
                          type="button"
                          aria-label="Siguiente imagen"
                          className="w-7 h-9 sm:w-8 sm:h-10 bg-[#6e7170] hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer shadow-md group"
                        >
                          <svg
                            className="w-3.5 h-3.5 sm:w-4 sm:h-4 transform transition-transform group-hover:translate-x-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            strokeWidth="2.5"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* COLUMNA DERECHA: LOS 3 BLOQUES TÉCNICOS */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              
              {/* BLOQUE 1: CONTROL Y SEGUIMIENTO */}
              <div className="relative p-6 sm:p-8 bg-neutral-50 border border-neutral-200 hover:border-black transition-all duration-300 group shadow-sm">
                {/* Esquinas arquitectónicas */}
                <div className="absolute top-0 left-0 w-3.5 h-3.5 border-t-2 border-l-2 border-black" />
                <div className="absolute bottom-0 right-0 w-3.5 h-3.5 border-b-2 border-r-2 border-black" />

                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold font-mono px-2 py-0.5 bg-black text-white">
                    01
                  </span>
                  <h3
                    className="font-oswald-bold text-base sm:text-lg font-bold uppercase tracking-[1.5px] text-neutral-950"
                  >
                    Control y Seguimiento de Actividades
                  </h3>
                </div>

                <p className="text-xs sm:text-[13.5px] text-neutral-600 font-light leading-relaxed">
                  Planificación detallada para asegurar que cada hito del proyecto se cumpla rigurosamente según el cronograma previsto.
                </p>
              </div>

              {/* BLOQUE 2: EFICIENCIA EN RECURSOS Y PRESUPUESTO */}
              <div className="relative p-6 sm:p-8 bg-neutral-50 border border-neutral-200 hover:border-black transition-all duration-300 group shadow-sm">
                {/* Esquinas arquitectónicas */}
                <div className="absolute top-0 left-0 w-3.5 h-3.5 border-t-2 border-l-2 border-black" />
                <div className="absolute bottom-0 right-0 w-3.5 h-3.5 border-b-2 border-r-2 border-black" />

                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold font-mono px-2 py-0.5 bg-black text-white">
                    02
                  </span>
                  <h3
                    className="font-oswald-bold text-base sm:text-lg font-bold uppercase tracking-[1.5px] text-neutral-950"
                  >
                    Eficiencia en Recursos y Presupuesto
                  </h3>
                </div>

                <p className="text-xs sm:text-[13.5px] text-neutral-600 font-light leading-relaxed">
                  Optimización financiera y de materiales mediante una gestión administrativa técnica y controlada que maximiza el rendimiento de la inversión.
                </p>
              </div>

              {/* BLOQUE 3: SUPERVISIÓN TÉCNICA Y CALIDAD */}
              <div className="relative p-6 sm:p-8 bg-neutral-50 border border-neutral-200 hover:border-black transition-all duration-300 group shadow-sm">
                {/* Esquinas arquitectónicas */}
                <div className="absolute top-0 left-0 w-3.5 h-3.5 border-t-2 border-l-2 border-black" />
                <div className="absolute bottom-0 right-0 w-3.5 h-3.5 border-b-2 border-r-2 border-black" />

                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold font-mono px-2 py-0.5 bg-black text-white">
                    03
                  </span>
                  <h3
                    className="font-oswald-bold text-base sm:text-lg font-bold uppercase tracking-[1.5px] text-neutral-950"
                  >
                    Supervisión Técnica y Calidad
                  </h3>
                </div>

                <p className="text-xs sm:text-[13.5px] text-neutral-600 font-light leading-relaxed">
                  Inspección constante en todas las etapas del proyecto para garantizar el cumplimiento normativo y la total integridad estructural y estética.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
