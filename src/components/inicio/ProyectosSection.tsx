"use client";

import Image from "next/image";
import Link from "next/link";
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

// =========================================================
// SUBCOMPONENTES
// =========================================================
// Cruz (+) en la esquina superior izquierda: desde el punto central, los
// brazos hacia arriba y la izquierda son cortos (el "tick" de la cruz),
// mientras que los brazos hacia abajo y la derecha se extienden por completo,
// como en la referencia de la plantilla original.
function CruzHover() {
  return (
    <div aria-hidden="true" className="absolute top-5 sm:top-6 right-5 sm:right-6 bottom-5 sm:bottom-6 left-5 sm:left-6 pointer-events-none z-20">
      {/* brazo derecho: se extiende horizontalmente hacia la derecha */}
      <span className="absolute left-0 top-0 h-px w-full bg-white opacity-0 scale-x-0 origin-left transition-all duration-500 ease-out group-hover:scale-x-100 group-hover:opacity-100" />
      {/* brazo inferior: se extiende verticalmente hacia abajo */}
      <span className="absolute left-0 top-0 w-px h-full bg-white opacity-0 scale-y-0 origin-top transition-all duration-500 ease-out delay-100 group-hover:scale-y-100 group-hover:opacity-100" />
      {/* brazo superior: tick corto hacia arriba */}
      <span className="absolute left-0 top-0 -translate-y-full w-px h-3.5 bg-white opacity-0 scale-y-0 origin-bottom transition-all duration-500 ease-out group-hover:scale-y-100 group-hover:opacity-100" />
      {/* brazo izquierdo: tick corto hacia la izquierda */}
      <span className="absolute left-0 top-0 -translate-x-full h-px w-3.5 bg-white opacity-0 scale-x-0 origin-right transition-all duration-500 ease-out group-hover:scale-x-100 group-hover:opacity-100" />
    </div>
  );
}

function TarjetaProyecto({ proyecto }: { proyecto: Proyecto }) {
  return (
    <Link
      href={`/proyectos/${proyecto.slug}`}
      aria-label={`Ver detalles de ${proyecto.titulo}`}
      className="group relative block w-full aspect-2/3 overflow-hidden bg-neutral-900 shadow-lg"
    >
      <Image
        src={proyecto.imagen}
        alt={proyecto.titulo}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 45vw, 30vw"
        className="object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/40" />
      <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <CruzHover />

      <div className="absolute inset-x-0 top-0 pl-8 sm:pl-9 pr-6 sm:pr-7 pt-9 sm:pt-10">
        <h3 className="font-oswald-bold uppercase tracking-wider text-xl sm:text-2xl text-white leading-tight drop-shadow-sm">
          {proyecto.titulo}
        </h3>
        {proyecto.descripcion && (
          <p className="mt-4 text-[13.5px] sm:text-[14.5px] text-neutral-200 font-light leading-relaxed line-clamp-4 opacity-0 translate-y-2 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0">
            {proyecto.descripcion}
          </p>
        )}
      </div>

      <div className="absolute inset-x-0 bottom-0 pl-8 sm:pl-9 pr-6 sm:pr-7 pb-6 sm:pb-7">
        {proyecto.locacion && (
          <p className="text-xs text-neutral-300 font-light uppercase tracking-wide">{proyecto.locacion}</p>
        )}
        <span
          aria-hidden="true"
          className="block mt-3 h-[3px] w-8 bg-brand transition-all duration-300 group-hover:w-16"
        />
      </div>

      {/* Indicador vertical "VER MÁS" en el lateral derecho */}
      <div className="absolute right-5 sm:right-6 bottom-5 sm:bottom-6 flex flex-col items-center gap-2.5 pointer-events-none opacity-0 translate-y-2 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0">
        <span className="[writing-mode:vertical-rl] rotate-180 text-[10px] font-bold uppercase tracking-[3px] text-white">
          Ver Más
        </span>
        <span aria-hidden="true" className="w-3.5 h-[2px] bg-brand" />
      </div>
    </Link>
  );
}
