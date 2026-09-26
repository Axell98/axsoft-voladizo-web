"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { type Proyecto, CATEGORIAS } from "@/features/proyectos/data";

interface Props {
  proyecto: Proyecto;
}

export default function ProyectoDetalleInteractivo({ proyecto }: Props) {
  // Construir slides predeterminados basados en galeria, comparacion o imagen principal
  const slides =
    proyecto.galeria && proyecto.galeria.length > 0
      ? proyecto.galeria
      : [
          {
            etiqueta: proyecto.comparacion?.antesLabel || "RENDER",
            fase: "FASE 01: CONCEPCIÓN Y DISEÑO 3D",
            imagen: proyecto.comparacion?.antesImagen || proyecto.imagen,
            descripcion:
              proyecto.descripcion ||
              "Modelado volumétrico y desarrollo de planos arquitectónicos con visualización 3D hiperrealista para evaluar proporciones, iluminación y materialidad.",
          },
          ...(proyecto.comparacion?.despuesImagen
            ? [
                {
                  etiqueta: proyecto.comparacion.despuesLabel || "REALIDAD",
                  fase: "FASE 02: CONSTRUCCIÓN Y REALIDAD",
                  imagen: proyecto.comparacion.despuesImagen,
                  descripcion:
                    "Construcción y acabados finales ejecutados con estricto control de calidad, respetando fielmente el diseño arquitectónico aprobado.",
                },
              ]
            : []),
        ];

  const [activeIndex, setActiveIndex] = useState(0);
  const currentSlide = slides[activeIndex] || slides[0];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full bg-white text-black" style={{ fontFamily: "'Poppins', sans-serif" }}>
      {/* ========================================================= */}
      {/* PORTADA / HERO BANNER INSTITUCIONAL                       */}
      {/* ========================================================= */}
      <div className="relative w-full h-[420px] sm:h-[480px] lg:h-[500px] bg-neutral-950 overflow-hidden flex items-center pt-24 pb-10">
        <Image
          src={proyecto.imagen}
          alt={proyecto.titulo}
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/80" />

        <div className="relative z-10 max-w-[1340px] w-full mx-auto px-6 sm:px-12 lg:px-16 xl:px-20">
          <div>
            {/* Marco de corchetes institucional */}
            <div className="relative py-8 sm:py-12 pl-6 sm:pl-8 border-t-[6px] sm:border-t-[8px] border-b-[6px] sm:border-b-[8px] border-l-[6px] sm:border-l-[8px] border-white w-[160px] sm:w-[220px] mb-6 after:content-[''] after:absolute after:right-0 after:top-0 after:w-[6px] sm:after:w-[8px] after:h-[30px] sm:after:h-[40px] after:bg-white before:content-[''] before:absolute before:right-0 before:bottom-0 before:w-[6px] sm:before:w-[8px] before:h-[30px] sm:before:h-[40px] before:bg-white">
              <div className="w-[280px] sm:w-[460px] md:w-[620px]">
                <span className="text-brand text-xs sm:text-sm font-bold uppercase tracking-[3px] block mb-2">
                  {CATEGORIAS[proyecto.categoria] || "Proyecto"}
                </span>
                <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light uppercase tracking-[3px] sm:tracking-[4px] leading-tight">
                  {proyecto.titulo}
                </h1>
              </div>
            </div>

            {/* Breadcrumb */}
            <div className="text-white text-xs sm:text-sm font-medium tracking-[2px]">
              <Link href="/" className="hover:text-brand transition-colors">
                Inicio
              </Link>
              <span className="mx-2 text-white/60">»</span>
              <Link href="/proyectos" className="hover:text-brand transition-colors">
                Proyectos
              </Link>
              <span className="mx-2 text-white/60">»</span>
              <span className="text-brand">{proyecto.titulo}</span>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* SECCIÓN INTERACTIVA: 2 COLUMNAS EN FONDO BLANCO           */}
      {/* ========================================================= */}
      <section className="py-20 lg:py-28 relative z-10 overflow-hidden bg-white">
        {/* Trama sutil de plano arquitectónico */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.035) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <div className="relative max-w-[1340px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* ========================================================= */}
            {/* COLUMNA IZQUIERDA: SLIDER / VISOR DE IMÁGENES             */}
            {/* ========================================================= */}
            <div className="lg:col-span-6 relative">
              {/* Contenedor principal de la imagen con marco institucional */}
              <div className="relative">
                {/* Marco gris desplazado de fondo (igual a Quiénes Somos) */}
                <div
                  aria-hidden="true"
                  className="hidden sm:block absolute pointer-events-none z-0"
                  style={{
                    top: "30px",
                    left: "-30px",
                    width: "100%",
                    height: "100%",
                    border: "25px solid rgba(0, 0, 0, 0.08)",
                    boxSizing: "border-box",
                  }}
                />

                <div className="relative z-10 w-full aspect-[4/3] sm:aspect-[16/11] bg-neutral-100 overflow-hidden shadow-xl border border-neutral-200">
                  <Image
                    key={currentSlide.imagen}
                    src={currentSlide.imagen}
                    alt={`${proyecto.titulo} - ${currentSlide.etiqueta}`}
                    fill
                    priority
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 45vw"
                    className="object-cover transition-all duration-700 ease-out"
                  />

                  {/* Badge en la esquina superior de la imagen */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3.5 py-1.5 bg-black/90 backdrop-blur-sm text-white text-[11px] font-bold uppercase tracking-[2.5px] border border-white/20">
                      {currentSlide.etiqueta}
                    </span>
                  </div>

                  {/* Flechas de navegación */}
                  {slides.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={handlePrev}
                        aria-label="Imagen anterior"
                        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-black/75 hover:bg-brand text-white hover:text-black flex items-center justify-center transition-colors duration-300 cursor-pointer shadow-md"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button
                        type="button"
                        onClick={handleNext}
                        aria-label="Siguiente imagen"
                        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-black/75 hover:bg-brand text-white hover:text-black flex items-center justify-center transition-colors duration-300 cursor-pointer shadow-md"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </>
                  )}
                </div>
              </div>

              {/* Indicador de posición */}
              {slides.length > 1 && (
                <div className="flex items-center justify-center gap-2 mt-4">
                  {slides.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveIndex(idx)}
                      aria-label={`Ir a slide ${idx + 1}`}
                      className={`h-1.5 transition-all duration-300 cursor-pointer ${
                        idx === activeIndex ? "w-8 bg-brand" : "w-3 bg-neutral-300 hover:bg-neutral-400"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* ========================================================= */}
            {/* COLUMNA DERECHA: TEXTO SINCRONIZADO Y FICHA TÉCNICA       */}
            {/* ========================================================= */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                {/* Encabezado con línea verde de referencia */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="h-[2px] w-8 bg-brand" />
                  <span className="text-brand text-[11px] font-bold uppercase tracking-[3px]">
                    Detalle del Proyecto
                  </span>
                  <span className="h-[2px] w-8 bg-brand" />
                </div>

                {/* Título Principal H2 */}
                <h2 className="font-oswald-bold uppercase text-3xl sm:text-4xl lg:text-[42px] leading-[1.1] tracking-tight text-neutral-950 mb-5">
                  {proyecto.titulo}
                </h2>

                {/* Contenido tipo artículo editorial libre (sin cards rígidas, listo para TinyMCE / Rich Text) */}
                <div className="mb-8 space-y-5">
                  {/* Etiqueta / Encabezado de fase */}
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand" />
                    <span className="text-xs font-bold uppercase tracking-[2.5px] text-brand-dark">
                      {currentSlide.fase}
                    </span>
                  </div>

                  {/* Cuerpo de texto / HTML proveniente de editor */}
                  <div className="text-neutral-700 text-[15px] sm:text-base font-light leading-relaxed space-y-4">
                    {currentSlide.descripcion.includes("<") && currentSlide.descripcion.includes(">") ? (
                      <div
                        dangerouslySetInnerHTML={{ __html: currentSlide.descripcion }}
                        className="prose prose-neutral max-w-none text-neutral-700 font-light leading-relaxed [&>p]:mb-3 [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:space-y-1 [&>strong]:font-semibold [&>strong]:text-neutral-900"
                      />
                    ) : (
                      <p>{currentSlide.descripcion}</p>
                    )}
                  </div>

                  {/* Lista de especificaciones técnicas (formato editorial natural) */}
                  <div className="pt-4 border-t border-neutral-200">
                    <ul className="grid grid-cols-2 gap-y-3 gap-x-6 text-sm text-neutral-800">
                      {proyecto.locacion && (
                        <li className="flex items-center gap-2">
                          <strong className="font-semibold text-neutral-950 uppercase text-xs tracking-wider text-brand-dark">Locación:</strong>
                          <span>{proyecto.locacion}</span>
                        </li>
                      )}
                      <li className="flex items-center gap-2">
                        <strong className="font-semibold text-neutral-950 uppercase text-xs tracking-wider text-brand-dark">Categoría:</strong>
                        <span>{CATEGORIAS[proyecto.categoria] || "Residencial"}</span>
                      </li>
                      {proyecto.ejecucion && (
                        <li className="flex items-center gap-2">
                          <strong className="font-semibold text-neutral-950 uppercase text-xs tracking-wider text-brand-dark">Ejecución:</strong>
                          <span>{proyecto.ejecucion}</span>
                        </li>
                      )}
                      {proyecto.anio && (
                        <li className="flex items-center gap-2">
                          <strong className="font-semibold text-neutral-950 uppercase text-xs tracking-wider text-brand-dark">Año:</strong>
                          <span>{proyecto.anio}</span>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Botón Volver a Proyectos */}
              <div className="flex items-center">
                <Link
                  href="/proyectos"
                  className="group relative inline-flex items-center bg-black hover:bg-brand px-8 py-4 text-white hover:text-black font-bold uppercase text-xs tracking-[3px] transition-colors duration-300 shadow-sm"
                >
                  <span className="pr-8">Ver más proyectos</span>
                  <span
                    aria-hidden="true"
                    className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-[1.5px] bg-current transition-all duration-300 group-hover:w-7"
                  />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
