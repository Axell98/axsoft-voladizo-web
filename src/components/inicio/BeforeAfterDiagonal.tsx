"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";

interface BeforeAfterDiagonalProps {
  beforeImage?: string;
  afterImage?: string;
  beforeLabel?: string;
  afterLabel?: string;
  initialPos?: number;
  slantOffset?: number;
  /** Clases de alto responsive; por defecto el tamaño usado en las secciones del home. */
  heightClassName?: string;
}

export default function BeforeAfterDiagonal({
  beforeImage = "/images/inicio/quienes-somos/before.jpg",
  afterImage = "/images/inicio/quienes-somos/after.jpg",
  beforeLabel = "Antes",
  afterLabel = "Después",
  initialPos = 50,
  slantOffset = 12,
  heightClassName = "h-[300px] sm:h-[350px] lg:h-[390px]",
}: BeforeAfterDiagonalProps) {
  const [sliderPos, setSliderPos] = useState<number>(initialPos);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    percentage = Math.max(5, Math.min(95, percentage));
    setSliderPos(percentage);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    updatePosition(e.clientX);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    if (e.touches[0]) {
      updatePosition(e.touches[0].clientX);
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      updatePosition(e.clientX);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;
      if (e.touches[0]) {
        updatePosition(e.touches[0].clientX);
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove, { passive: true });
      window.addEventListener("touchend", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging, updatePosition]);

  // Coordenadas diagonales
  const xTop = Math.min(100, Math.max(0, sliderPos + slantOffset));
  const xBottom = Math.min(100, Math.max(0, sliderPos - slantOffset));

  return (
    <div
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      className={`relative z-10 w-full ${heightClassName} bg-neutral-900 shadow-2xl overflow-hidden select-none cursor-ew-resize group`}
      style={{ touchAction: "none" }}
    >
      {/* 1. CAPA INFERIOR: FOTO "ANTES" */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={beforeImage}
          alt={beforeLabel}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 60vw"
          className="object-cover object-center pointer-events-none"
        />
        {/* Etiqueta Antes */}
        <div className="absolute top-4 left-4 z-10 pointer-events-none">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-black/75 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-[2px] border border-white/20 shadow-md">
            <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
            {beforeLabel}
          </span>
        </div>
      </div>

      {/* 2. CAPA SUPERIOR: FOTO "DESPUÉS" CON CORTE DIAGONAL */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          clipPath: `polygon(${xTop}% 0%, 100% 0%, 100% 100%, ${xBottom}% 100%)`,
          WebkitClipPath: `polygon(${xTop}% 0%, 100% 0%, 100% 100%, ${xBottom}% 100%)`,
        }}
      >
        <Image
          src={afterImage}
          alt={afterLabel}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 60vw"
          className="object-cover object-center pointer-events-none"
        />
        {/* Etiqueta Después */}
        <div className="absolute top-4 right-4 z-10 pointer-events-none">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#141414]/90 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-[2px] border border-[#73ba78]/60 shadow-lg">
            <span className="w-1.5 h-1.5 rounded-full bg-[#73ba78]" />
            {afterLabel}
          </span>
        </div>
      </div>

      {/* 3. LÍNEA DIVISORIA DIAGONAL SVG */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-20 overflow-visible"
        preserveAspectRatio="none"
      >
        {/* Sombra de la línea */}
        <line
          x1={`${xTop}%`}
          y1="0%"
          x2={`${xBottom}%`}
          y2="100%"
          stroke="rgba(0, 0, 0, 0.45)"
          strokeWidth="5"
        />
        {/* Línea blanca principal */}
        <line
          x1={`${xTop}%`}
          y1="0%"
          x2={`${xBottom}%`}
          y2="100%"
          stroke="#ffffff"
          strokeWidth="2.5"
        />
      </svg>

      {/* 4. BOTÓN/CONTROLADOR CIRCULAR CENTRAL INTERACTIVO */}
      <div
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-30 pointer-events-none transition-transform duration-100 ease-out"
        style={{ left: `${sliderPos}%` }}
      >
        <div
          className={`w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-black/85 backdrop-blur-md border-[2.5px] border-white shadow-[0_4px_20px_rgba(0,0,0,0.6)] flex items-center justify-center transition-all ${
            isDragging ? "scale-110 ring-4 ring-white/30" : "group-hover:scale-105"
          }`}
        >
          {/* Icono de flechas dobles « » como en el diseño de referencia */}
          <div className="flex items-center gap-0.5 text-white">
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={3}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={3}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Indicador de ayuda sutil en la parte inferior */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="px-2.5 py-1 bg-black/70 backdrop-blur-sm text-white/80 text-[10px] uppercase tracking-wider rounded">
          Arrastra para comparar
        </span>
      </div>
    </div>
  );
}
