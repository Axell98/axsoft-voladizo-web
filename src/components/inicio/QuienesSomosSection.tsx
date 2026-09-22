"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import BeforeAfterDiagonal from "./BeforeAfterDiagonal";

interface GalleryItem {
  id: number;
  image: string;
  href: string;
}

const galleryItems: GalleryItem[] = [
  { id: 1, image: "/images/inicio/quienes-somos/pic1.jpg", href: "/#quienes-somos" },
  { id: 2, image: "/images/inicio/quienes-somos/pic2.jpg", href: "/#quienes-somos" },
  { id: 3, image: "/images/inicio/quienes-somos/pic3.jpg", href: "/#quienes-somos" },
  { id: 4, image: "/images/inicio/quienes-somos/pic4.jpg", href: "/#quienes-somos" },
  { id: 5, image: "/images/inicio/quienes-somos/pic5.jpg", href: "/#quienes-somos" },
];

export default function QuienesSomosSection() {
  const [mediaMode, setMediaMode] = useState<"beforeAfter" | "carousel">("beforeAfter");
  const [currentSlide, setCurrentSlide] = useState(1);
  const total = galleryItems.length;

  const nextGallery = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % total);
  }, [total]);

  useEffect(() => {
    const timer = setInterval(() => {
      nextGallery();
    }, 5500);
    return () => clearInterval(timer);
  }, [nextGallery]);

  return (
    <section
      id="quienes-somos"
      className="section-full clearfix pt-20 pb-32 bg-white text-black relative z-20 overflow-hidden"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="max-w-[1340px] mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
        <div className="section-content">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* ========================================================= */}
            {/* COLUMNA IZQUIERDA: Tipografía Armonizada y Proporcional   */}
            {/* ========================================================= */}
            <div className="lg:col-span-6 text-black pt-1">
              {/* Subtítulo / Overline */}
              <span className="text-[11px] font-bold uppercase tracking-[3px] text-brand block mb-3">
                Descubre
              </span>

              {/* Título Principal H2 */}
              <h2 className="font-oswald-bold uppercase text-3xl sm:text-4xl lg:text-[42px] leading-[1.1] tracking-tight text-neutral-950 mb-4">
                Quiénes <span className="text-brand">Somos</span>
              </h2>

              {/* Frase destacada en negrita */}
              <p className="text-base sm:text-lg font-semibold text-neutral-900 leading-snug mb-4">
                Transformando espacios y realidades con visión arquitectónica.
              </p>

              {/* Párrafo descriptivo */}
              <p className="text-sm sm:text-[15.5px] text-neutral-600 font-light leading-relaxed mb-6">
                Somos una empresa especializada en diseño arquitectónico, ingeniería, construcción, remodelación e implementación de espacios comerciales, corporativos, Retail e industriales.
              </p>

              {/* Tags de Identidad & Enfoque */}
              <div className="flex flex-wrap gap-2.5 mb-9">
                <span className="text-xs font-medium uppercase tracking-wider px-3.5 py-1.5 bg-neutral-100 text-neutral-800 border border-neutral-200">
                  Enfoque Minimalista
                </span>
                <span className="text-xs font-medium uppercase tracking-wider px-3.5 py-1.5 bg-neutral-100 text-neutral-800 border border-neutral-200">
                  Solución Funcional
                </span>
                <span className="text-xs font-medium uppercase tracking-wider px-3.5 py-1.5 bg-neutral-100 text-neutral-800 border border-neutral-200">
                  Alta Precisión
                </span>
              </div>

              {/* Botón Call to Action */}
              <Link
                href="/quienes-somos"
                className="btn-half group relative inline-flex items-center bg-black px-8 py-4 shadow-sm hover:bg-neutral-900 transition-colors cursor-pointer"
              >
                <span className="text-white uppercase pr-9 block text-xs font-bold tracking-[4px]">
                  Conoce Más
                </span>
                <span className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-[1.5px] bg-white transition-all duration-300 group-hover:w-8" />
              </Link>
            </div>

            {/* ========================================================= */}
            {/* COLUMNA DERECHA: COMPARATIVA ANTES/DESPUÉS O SLIDER       */}
            {/* ========================================================= */}
            <div className="lg:col-span-6">
              {/* SELECTOR SUTIL DE ESTILOS (ANTES/DESPUÉS vs SLIDER) */}
              <div className="flex items-center gap-2 mb-4 ml-0 lg:ml-16">
                <button
                  type="button"
                  onClick={() => setMediaMode("beforeAfter")}
                  className={`px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                    mediaMode === "beforeAfter"
                      ? "bg-black text-white shadow-sm"
                      : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                  }`}
                >
                  Antes y Después
                </button>
                <button
                  type="button"
                  onClick={() => setMediaMode("carousel")}
                  className={`px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                    mediaMode === "carousel"
                      ? "bg-black text-white shadow-sm"
                      : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                  }`}
                >
                  Galería Slider
                </button>
              </div>

              <div className="relative ml-0 lg:ml-16 mb-16 lg:mb-20">
                {/* MARCO GRIS DESPLAZADO (.m-carousel-1:after) */}
                <div
                  className="hidden sm:block absolute pointer-events-none z-0"
                  style={{
                    top: "70px",
                    left: "-70px",
                    width: "100%",
                    height: "100%",
                    border: "30px solid rgba(0, 0, 0, 0.1)",
                    boxSizing: "border-box",
                  }}
                />

                {mediaMode === "beforeAfter" ? (
                  /* COMPARADOR DIAGONAL INTERACTIVO ANTES Y DESPUÉS */
                  <BeforeAfterDiagonal
                    beforeImage="/images/inicio/quienes-somos/before.jpg"
                    afterImage="/images/inicio/quienes-somos/after.jpg"
                    beforeLabel="Antes"
                    afterLabel="Después"
                    initialPos={50}
                    slantOffset={12}
                  />
                ) : (
                  /* CONTENEDOR DEL SLIDER ORIGINAL (100% PRESERVADO) */
                  <div className="relative z-10 w-full h-[300px] sm:h-[350px] lg:h-[390px] bg-neutral-100 shadow-xl overflow-hidden group">
                    {galleryItems.map((item, idx) => (
                      <div
                        key={item.id}
                        className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
                          idx === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                        }`}
                      >
                        <Image
                          src={item.image}
                          alt={`Building Design ${idx + 1}`}
                          fill
                          priority={idx === 1}
                          sizes="(max-width: 1024px) 100vw, 60vw"
                          className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
                        />
                      </div>
                    ))}

                    {/* INDICADORES VERTICALES (.owl-dots) */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20 flex flex-col items-end gap-3.5 pointer-events-auto pr-0">
                      {galleryItems.map((_, dotIdx) => (
                        <button
                          key={dotIdx}
                          onClick={() => setCurrentSlide(dotIdx)}
                          type="button"
                          aria-label={`Slide ${dotIdx + 1}`}
                          className="h-[3px] bg-black transition-all duration-300 cursor-pointer"
                          style={{
                            width: dotIdx === currentSlide ? "50px" : "14px",
                          }}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
