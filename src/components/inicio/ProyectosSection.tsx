"use client";

import Image from "next/image";
import Link from "next/link";
import { CATEGORIAS, proyectos, TOTAL_PROYECTOS, type Proyecto } from "@/features/proyectos/data";
import { revealProps, useReveal } from "@/lib/use-reveal";

// Separa el título para resaltar la última palabra en verde ("Diseño Edificio" + "Multifamiliar")
function partirTitulo(titulo: string): [string, string] {
  const i = titulo.lastIndexOf(" ");
  return i === -1 ? [titulo, ""] : [titulo.slice(0, i), titulo.slice(i + 1)];
}

function ArrowRightIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export default function ProyectosSection() {
  const { ref, visible } = useReveal<HTMLElement>();

  // Proyecto destacado: el primero que tiene comparativa render / realidad
  const destacado = proyectos.find((p) => p.imagenRealidad) ?? proyectos[0];
  const otros = proyectos.filter((p) => p !== destacado);

  if (!destacado) return null;

  const [tituloBase, tituloResaltado] = partirTitulo(destacado.titulo);
  const numero = String(proyectos.indexOf(destacado) + 1).padStart(2, "0");

  const meta = [
    { label: "Locación", value: destacado.locacion },
    { label: "Categoría", value: CATEGORIAS[destacado.categoria] },
    { label: "Ejecución", value: destacado.ejecucion },
    { label: "Año", value: destacado.anio?.toString() },
  ].filter((m): m is { label: string; value: string } => Boolean(m.value));

  return (
    <section
      id="proyectos"
      ref={ref}
      aria-labelledby="proyectos-titulo"
      className="relative bg-[#f5f5f5] text-black overflow-hidden py-20 lg:py-28"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="max-w-[1340px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-20">
        {/* ========================================================= */}
        {/* ENCABEZADO                                                */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-12 lg:mb-16">
          <div className="lg:col-span-7">
            <div
              className={`inline-flex items-center gap-4 ${revealProps(visible, 0).className}`}
              style={revealProps(visible, 0).style}
            >
              <span aria-hidden="true" className="w-10 sm:w-14 h-px bg-brand" />
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[4px] text-brand-dark">
                Portafolio
              </span>
            </div>
            <h2
              id="proyectos-titulo"
              className={`font-oswald-bold uppercase tracking-tight leading-[1.05] text-4xl sm:text-6xl lg:text-7xl mt-5 ${
                revealProps(visible, 100).className
              }`}
              style={revealProps(visible, 100).style}
            >
              Nuestros <span className="text-brand-dark">proyectos</span>
            </h2>
          </div>

          <p
            className={`lg:col-span-5 text-neutral-600 font-light leading-relaxed text-base sm:text-lg ${
              revealProps(visible, 200).className
            }`}
            style={revealProps(visible, 200).style}
          >
            Obras donde el diseño y la ejecución se encuentran: de la idea en render a la realidad terminada.
          </p>
        </div>

        {/* ========================================================= */}
        {/* PROYECTO DESTACADO: RENDER vs REALIDAD                    */}
        {/* ========================================================= */}
        <article className="bg-white border border-neutral-200 shadow-xl p-5 sm:p-8 lg:p-10">
          <div
            className={`mb-8 ${revealProps(visible, 250).className}`}
            style={revealProps(visible, 250).style}
          >
            <span className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[3px] text-brand-dark">
              <span aria-hidden="true" className="w-8 h-px bg-brand" />
              Proyecto {numero}
            </span>
            <h3 className="font-oswald-bold uppercase tracking-tight leading-tight text-2xl sm:text-4xl lg:text-5xl mt-3">
              {tituloBase} {tituloResaltado && <span className="text-brand-dark">{tituloResaltado}</span>}
            </h3>
          </div>

          <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-8">
            <Comparativa
              src={destacado.imagen}
              alt={`Render del proyecto ${destacado.titulo}`}
              etiqueta="Render"
              etiquetaClass="bg-[#141414] text-white left-4"
              anim={revealProps(visible, 350, "left")}
            />
            <Comparativa
              src={destacado.imagenRealidad ?? destacado.imagen}
              alt={`Proyecto ${destacado.titulo} terminado`}
              etiqueta="Realidad"
              etiquetaClass="bg-brand text-black right-4"
              anim={revealProps(visible, 500, "right")}
            />

            {/* Conector render → realidad */}
            <span
              aria-hidden="true"
              className={`hidden sm:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-14 h-14 items-center justify-center rounded-full bg-black text-brand ring-[6px] ring-white transition-all duration-700 delay-700 motion-reduce:transition-none motion-reduce:scale-100 motion-reduce:opacity-100 ${
                visible ? "scale-100 opacity-100" : "scale-50 opacity-0"
              }`}
            >
              <ArrowRightIcon className="w-6 h-6" />
            </span>
          </div>

          {/* Ficha técnica */}
          <dl className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {meta.map((m, idx) => {
              const anim = revealProps(visible, 650 + idx * 100);
              return (
                <div key={m.label} className={anim.className} style={anim.style}>
                  <div className="h-full bg-[#141414] px-5 py-4 border-l-[3px] border-brand">
                    <dt className="font-oswald-bold uppercase tracking-wide text-sm text-brand">{m.label}</dt>
                    <dd className="mt-1 text-sm uppercase tracking-wide text-white">{m.value}</dd>
                  </div>
                </div>
              );
            })}
          </dl>
        </article>

        {/* ========================================================= */}
        {/* OTROS PROYECTOS                                           */}
        {/* ========================================================= */}
        {otros.length > 0 && (
          <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {otros.map((p, idx) => {
              const anim = revealProps(visible, 300 + idx * 150);
              return (
                <div key={p.slug} className={anim.className} style={anim.style}>
                  <TarjetaProyecto proyecto={p} />
                </div>
              );
            })}
          </div>
        )}

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
function Comparativa({
  src,
  alt,
  etiqueta,
  etiquetaClass,
  anim,
}: {
  src: string;
  alt: string;
  etiqueta: string;
  etiquetaClass: string;
  anim: { className: string; style: React.CSSProperties };
}) {
  return (
    <div className={anim.className} style={anim.style}>
      <div className="group relative aspect-[4/3] overflow-hidden bg-neutral-200">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 640px) 100vw, 45vw"
          className="object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105"
        />
        <span
          className={`absolute top-4 px-4 py-2 font-oswald-bold text-sm uppercase tracking-[3px] ${etiquetaClass}`}
        >
          {etiqueta}
        </span>
      </div>
    </div>
  );
}

function TarjetaProyecto({ proyecto }: { proyecto: Proyecto }) {
  return (
    <article className="group relative aspect-[16/10] overflow-hidden bg-neutral-900 shadow-lg">
      <Image
        src={proyecto.imagen}
        alt={proyecto.titulo}
        fill
        sizes="(max-width: 640px) 100vw, 50vw"
        className="object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
        <span className="inline-block bg-brand px-3 py-1.5 text-[10px] font-bold uppercase tracking-[2.5px] text-black">
          {CATEGORIAS[proyecto.categoria]}
        </span>
        <h3 className="mt-3 font-oswald-bold uppercase tracking-wide text-xl sm:text-2xl text-white leading-tight">
          {proyecto.titulo}
        </h3>
        <span
          aria-hidden="true"
          className="block mt-3 h-[3px] w-10 bg-brand transition-all duration-300 group-hover:w-20"
        />
      </div>
    </article>
  );
}
