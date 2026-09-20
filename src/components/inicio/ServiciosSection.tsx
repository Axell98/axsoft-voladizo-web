"use client";

import { useState } from "react";
import Image from "next/image";

export interface FeatureItem {
  id: number;
  title: string;
  icon: string;
  image: string;
  description: string;
}

const defaultFeatures: FeatureItem[] = [
  {
    id: 1,
    title: "DISEÑO E INGENIERÍA",
    icon: "/images/iconos/servi_icon1.png",
    image: "/images/inicio/servicios/servicio1/1.jpg",
    description:
      "Desarrollo de anteproyectos y expedientes técnicos de arquitectura e ingeniería. Cálculos avanzados y planificación integral que garantizan la estabilidad, eficiencia y viabilidad técnica en proyectos complejos.",
  },
  {
    id: 2,
    title: "CONSTRUCCIÓN Y REMODELACIÓN",
    icon: "/images/iconos/servi_icon2.png",
    image: "/images/inicio/servicios/servicio2/1.jpg",
    description:
      "Ejecución de proyectos residenciales, comerciales e industriales bajo estrictas normas de seguridad y eficiencia operativa. Renovamos y optimizamos espacios corporativos y comerciales mediante intervenciones de calidad superior.",
  },
  {
    id: 3,
    title: "DISEÑO INTERIOR Y MOBILIARIO",
    icon: "/images/iconos/servi_icon3.png",
    image: "/images/inicio/servicios/servicio3/1.jpg",
    description:
      "Creación de ambientes vanguardistas y funcionales que redefinen la experiencia de cada espacio. Integramos diseño estético, estética contemporánea y soluciones de mobiliario a la medida.",
  },
  {
    id: 4,
    title: "GESTIÓN Y SUPERVISIÓN",
    icon: "/images/iconos/servi_icon1.png",
    image: "/images/inicio/servicios/servicio4/1.jpg",
    description:
      "Control riguroso de cada etapa del proyecto. Aseguramos el cumplimiento estricto de los plazos, el presupuesto acordado y los más altos estándares de calidad constructiva y seguridad.",
  },
];

interface ServiciosSectionProps {
  items?: FeatureItem[];
}

export default function ServiciosSection({ items = defaultFeatures }: ServiciosSectionProps) {
  const [activeId, setActiveId] = useState<number>(1); // Por defecto el segundo item como en web2

  return (
    <section
      id="servicios"
      className="features relative overflow-hidden w-full h-auto md:h-[620px] lg:h-[700px] bg-neutral-950 text-white select-none"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* ========================================================= */}
      {/* CAPAS DE FONDOS CON TRANSICIÓN SUAVE (FULL BLEED)         */}
      {/* ========================================================= */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        {items.map((item) => {
          const isActive = item.id === activeId;
          return (
            <div
              key={item.id}
              className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-out ${
                isActive ? "opacity-100 scale-105" : "opacity-0 scale-100"
              }`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="100vw"
                className="object-cover object-center"
                priority={item.id === 1 || item.id === 2}
              />
              {/* Overlay oscuro (data-overlay="7" => 70% de opacidad) */}
              <div className="absolute inset-0 bg-black/70 backdrop-brightness-75" />
            </div>
          );
        })}
      </div>

      {/* ========================================================= */}
      {/* COLUMNAS INTERACTIVAS (DESKTOP: 3 COLUMNAS / MOBILE: LISTA) */}
      {/* ========================================================= */}
      <div className="relative z-10 w-full h-full flex flex-col md:flex-row items-stretch">
        {items.map((item, index) => {
          const isActive = item.id === activeId;
          return (
            <div
              key={item.id}
              onMouseEnter={() => setActiveId(item.id)}
              onClick={() => setActiveId(item.id)}
              className={`group flex-1 relative flex flex-col items-center justify-center text-center px-6 sm:px-10 lg:px-14 py-16 md:py-0 cursor-pointer transition-all duration-500 border-b md:border-b-0 ${
                index !== 0 ? "md:border-l border-white/15" : ""
              } ${
                isActive
                  ? "bg-black/10 md:bg-transparent"
                  : "bg-black/40 md:bg-black/25 md:backdrop-blur-[2px] hover:bg-black/15"
              }`}
            >
              {/* Fondo móvil individual cuando no está en desktop */}
              <div className="md:hidden absolute inset-0 -z-10 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="100vw"
                  className="object-cover object-center opacity-30"
                />
                <div className="absolute inset-0 bg-black/75" />
              </div>

              <div className="relative z-10 flex flex-col items-center max-w-[420px] mx-auto w-full transition-transform duration-500">
                {/* ICONO */}
                <div className="mb-6 lg:mb-8 transition-transform duration-500 group-hover:scale-110">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 relative flex items-center justify-center">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={64}
                      height={64}
                      className="object-contain filter drop-shadow-md"
                    />
                  </div>
                </div>

                {/* TÍTULO */}
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold tracking-[3px] uppercase text-white mb-4 transition-colors duration-300 group-hover:text-white">
                  {item.title}
                </h3>

                {/* DIVISOR (.inner-divider) */}
                <div
                  className={`h-[1.5px] bg-white/40 transition-all duration-500 my-1 ${
                    isActive ? "w-16 bg-white" : "w-10 group-hover:w-14"
                  }`}
                />

                {/* TEXTO DESCRIPTIVO CON ANIMACIÓN HOVER (.text-hover) */}
                <div
                  className={`transition-all duration-500 ease-in-out ${
                    isActive
                      ? "max-h-72 opacity-100 mt-4 translate-y-0"
                      : "max-h-0 md:max-h-0 opacity-0 md:opacity-0 mt-0 overflow-hidden translate-y-2 md:group-hover:max-h-72 md:group-hover:opacity-100 md:group-hover:mt-4 md:group-hover:translate-y-0"
                  }`}
                >
                  <p className="text-[12.5px] sm:text-[13.5px] leading-relaxed text-neutral-300 font-light max-w-[380px]">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Borde inferior activo sutil */}
              <div
                className={`hidden md:block absolute bottom-0 left-0 right-0 h-1 bg-white transition-all duration-500 ${
                  isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                }`}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
