"use client";

import Image from "next/image";
import Link from "next/link";
import TarjetaProyecto from "@/components/proyectos/TarjetaProyecto";
import { proyectos, TOTAL_PROYECTOS, type Proyecto } from "@/features/proyectos/data";
import { REVEAL_BASE, revealProps, useReveal } from "@/lib/use-reveal";

// El home solo adelanta los primeros 5 proyectos; los 11 completos están en /proyectos.
const PROYECTOS_HOME = proyectos.slice(0, 5);

export default function ProyectosSection() {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <section
      id="proyectos"
      ref={ref}
      aria-labelledby="proyectos-titulo"
      className="relative bg-[#f5f5f5] text-black overflow-hidden py-20 lg:py-28"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Contenedor un poco más ancho que el resto del sitio, para que las 5
          tarjetas se vean grandes sin necesitar slider ni recortarse. */}
      <div className="max-w-[2200px] mx-auto px-6 sm:px-8 lg:px-8 xl:px-10">
        {/* ========================================================= */}
        {/* TÍTULO CON LÍNEAS LATERALES (mismo diseño que Trayectoria) */}
        {/* ========================================================= */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 mb-12 lg:mb-16">
          <span
            aria-hidden="true"
            className={`hidden sm:block h-px w-12 lg:w-24 bg-brand origin-right duration-1000 transition-transform motion-reduce:transition-none motion-reduce:scale-x-100 ${
              visible ? "scale-x-100" : "scale-x-0"
            }`}
          />
          <h2
            id="proyectos-titulo"
            className={`font-oswald-bold text-center uppercase tracking-tight leading-none text-3xl sm:text-5xl lg:text-6xl ${REVEAL_BASE} ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Nuestros <span className="text-brand">Proyectos</span>
          </h2>
          <span
            aria-hidden="true"
            className={`hidden sm:block h-px w-12 lg:w-24 bg-brand origin-left duration-1000 transition-transform motion-reduce:transition-none motion-reduce:scale-x-100 ${
              visible ? "scale-x-100" : "scale-x-0"
            }`}
          />
        </div>

        {/* ========================================================= */}
        {/* GRILLA DE PROYECTOS (5, centrados, sin slider)            */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {PROYECTOS_HOME.map((p, idx) => {
            const anim = revealProps(visible, 200 + idx * 120);
            return (
              <div key={p.slug} className={anim.className} style={anim.style}>
                <TarjetaProyecto proyecto={p} />
              </div>
            );
          })}
        </div>

        {/* ========================================================= */}
        {/* VER MÁS                                                   */}
        {/* ========================================================= */}
        <div
          className={`mt-14 flex flex-col items-center text-center ${revealProps(visible, 300).className}`}
          style={revealProps(visible, 300).style}
        >
          <p className="text-neutral-600 font-light mb-6">
            Explora los <strong className="font-semibold text-black">{TOTAL_PROYECTOS} proyectos</strong> de nuestro
            portafolio.
          </p>
          <Link
            href="/proyectos"
            className="group relative inline-flex items-center bg-black px-10 py-4 text-white transition-colors duration-300 hover:bg-brand hover:text-black"
          >
            <span className="block pr-12 text-xs font-bold uppercase tracking-[4px]">Ver más proyectos</span>
            <span
              aria-hidden="true"
              className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-[1.5px] bg-current transition-all duration-300 group-hover:w-8"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}


