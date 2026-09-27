"use client";

import Image from "next/image";
import Link from "next/link";
import { type Proyecto } from "@/features/proyectos/data";

/**
 * Cruz arquitectónica (+) en la esquina superior izquierda.
 */
export function CruzHover() {
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

export default function TarjetaProyecto({ proyecto }: { proyecto: Proyecto }) {
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
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
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
