"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useEquipo, type MiembroEquipo } from "@/features/equipo/useEquipo";

/** Cantidad de integrantes visibles a la vez según el ancho de pantalla */
function cantidadVisible(ancho: number) {
  if (ancho >= 1024) return 4;
  if (ancho >= 640) return 2;
  return 1;
}

function Tarjeta({ miembro, destacada }: { miembro: MiembroEquipo; destacada: boolean }) {
  return (
    <div className="w-full relative flex flex-col bg-white shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group border border-neutral-200/90">
      {/* Contenedor de Imagen: el primero de la ventana se ve más grande */}
      <div
        className={`relative w-full bg-neutral-100 overflow-hidden ${
          destacada ? "h-[360px] sm:h-[400px] lg:h-[440px]" : "h-[300px] lg:h-[340px]"
        }`}
      >
        {miembro.image && (
          <Image
            src={miembro.image}
            alt={miembro.name}
            fill
            sizes={destacada ? "(max-width: 640px) 100vw, 380px" : "(max-width: 640px) 100vw, 280px"}
            unoptimized={miembro.dinamica}
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
          />
        )}
      </div>

      {/* Info con acento angular en L */}
      <div className="relative p-5 sm:p-6 text-center bg-white border-t border-neutral-100 flex-1 flex flex-col justify-center">
        <div className="absolute left-0 bottom-0 w-7 sm:w-8 h-[3px] bg-black" />
        <div className="absolute left-0 bottom-0 w-[3px] h-7 sm:h-8 bg-black" />

        <h4
          className={`font-bold uppercase tracking-wider text-black leading-snug ${
            destacada ? "text-lg sm:text-xl" : "text-base sm:text-lg"
          }`}
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          {miembro.name}
        </h4>
        <p
          className="text-xs sm:text-sm text-neutral-500 mt-1 font-normal"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          {miembro.role}
        </p>
      </div>
    </div>
  );
}

function Flecha({ direccion, onClick }: { direccion: "prev" | "next"; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direccion === "prev" ? "Integrantes anteriores" : "Integrantes siguientes"}
      className="w-11 h-11 flex items-center justify-center border border-neutral-300 bg-white text-black hover:bg-black hover:text-white hover:border-black transition-colors"
    >
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d={direccion === "prev" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"}
        />
      </svg>
    </button>
  );
}

/**
 * Slider del equipo completo (sin límite): muestra una ventana de integrantes y las flechas
 * la desplazan de a uno. El primero de la ventana se ve un poco más grande que los demás.
 */
export default function EquipoSlider() {
  const { equipo } = useEquipo();
  const [visibles, setVisibles] = useState(4);
  const [inicio, setInicio] = useState(0);

  useEffect(() => {
    const actualizar = () => setVisibles(cantidadVisible(window.innerWidth));
    actualizar();
    window.addEventListener("resize", actualizar);
    return () => window.removeEventListener("resize", actualizar);
  }, []);

  const maxInicio = Math.max(0, equipo.length - visibles);
  const posicion = Math.min(inicio, maxInicio);
  const hayMas = maxInicio > 0;

  const ventana = equipo.slice(posicion, posicion + visibles);
  const columnas = ventana.length > 1 ? `1.3fr repeat(${ventana.length - 1}, 1fr)` : "1fr";

  const anterior = () => setInicio(posicion === 0 ? maxInicio : posicion - 1);
  const siguiente = () => setInicio(posicion >= maxInicio ? 0 : posicion + 1);

  return (
    <div>
      {/* Título de sección + flechas */}
      <div className="mb-10 flex items-end justify-between gap-6">
        <div className="text-left">
          <span className="text-[11px] font-bold uppercase tracking-[3px] text-brand block mb-2">
            Conoce a
          </span>
          <h2 className="font-oswald-bold uppercase text-3xl sm:text-4xl lg:text-[42px] leading-[1.1] tracking-tight text-neutral-950 mb-3">
            NUESTRO <span className="text-brand">EQUIPO</span>
          </h2>
          <div className="w-16 h-[3px] bg-black" />
        </div>

        {hayMas && (
          <div className="flex gap-2 shrink-0">
            <Flecha direccion="prev" onClick={anterior} />
            <Flecha direccion="next" onClick={siguiente} />
          </div>
        )}
      </div>

      {/* Ventana del slider */}
      <div
        key={posicion}
        className="grid gap-6 items-end animate-fadeIn"
        style={{ gridTemplateColumns: columnas }}
        aria-live="polite"
      >
        {ventana.map((miembro, i) => (
          <Tarjeta key={miembro.id} miembro={miembro} destacada={i === 0} />
        ))}
      </div>

      {/* Indicador de posición */}
      {hayMas && (
        <p className="mt-6 text-center text-xs tracking-[2px] text-neutral-500">
          {posicion + 1}–{posicion + ventana.length} de {equipo.length}
        </p>
      )}
    </div>
  );
}
