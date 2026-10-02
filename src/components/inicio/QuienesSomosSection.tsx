"use client";

import Link from "next/link";
import BeforeAfterDiagonal from "./BeforeAfterDiagonal";

export default function QuienesSomosSection() {
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
            {/* COLUMNA DERECHA: COMPARATIVA ANTES Y DESPUÉS              */}
            {/* ========================================================= */}
            <div className="lg:col-span-6">
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

                {/* COMPARADOR DIAGONAL INTERACTIVO ANTES Y DESPUÉS */}
                <BeforeAfterDiagonal
                  beforeImage="/images/inicio/quienes-somos/foto_qs_1.png"
                  afterImage="/images/inicio/quienes-somos/foto_qs_2.png"
                  beforeLabel="Antes"
                  afterLabel="Después"
                  initialPos={50}
                  slantOffset={12}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
