"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import BeforeAfterDiagonal from "@/components/inicio/BeforeAfterDiagonal";

// =========================================================
// ICONOS DE REDES SOCIALES ESTILO SQUARE EXACTOS
// =========================================================
function FacebookIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 320 512">
      <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
    </svg>
  );
}

function TwitterIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 512 512">
      <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
    </svg>
  );
}

function LinkedInIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 448 512">
      <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
    </svg>
  );
}

function YoutubeIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 576 512">
      <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.583V174.334l142.739 81.666-142.739 81.666z" />
    </svg>
  );
}

function InstagramIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 448 512">
      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
    </svg>
  );
}

// =========================================================
// DATOS DE EQUIPO
// =========================================================
interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  socials?: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    youtube?: string;
    instagram?: string;
  };
}

const featuredLeader: TeamMember = {
  id: 1,
  name: "Arq. Renzo Alvarez",
  role: "Gerente General",
  image: "/images/inicio/equipo/gerente_general.jpg",
  socials: {
    facebook: "#",
    twitter: "#",
    linkedin: "#",
    youtube: "#",
    instagram: "#",
  },
};

const teamMembers: TeamMember[] = [
  {
    id: 2,
    name: "Laura Maglia",
    role: "Jefe Comercial",
    image: "/images/inicio/equipo/personal1.jpg",
    socials: { facebook: "#", twitter: "#", linkedin: "#", youtube: "#", instagram: "#" },
  },
  {
    id: 3,
    name: "Taylor Roberts",
    role: "Coordinador de Obra",
    image: "/images/inicio/equipo/pic3.jpg",
    socials: { facebook: "#", twitter: "#", linkedin: "#", youtube: "#", instagram: "#" },
  },
  {
    id: 4,
    name: "Robert Willson",
    role: "Supervisor de Proyectos",
    image: "/images/inicio/equipo/pic4.jpg",
    socials: { facebook: "#", twitter: "#", linkedin: "#", youtube: "#", instagram: "#" },
  },
  {
    id: 5,
    name: "Austin Evon",
    role: "Asociado de Proyectos",
    image: "/images/inicio/equipo/pic5.jpg",
    socials: { facebook: "#", twitter: "#", linkedin: "#", youtube: "#", instagram: "#" },
  },
];

interface GalleryItem {
  id: number;
  image: string;
  href?: string;
}

const galleryItems: GalleryItem[] = [
  { id: 1, image: "/images/inicio/quienes-somos/pic1.jpg" },
  { id: 2, image: "/images/inicio/quienes-somos/pic2.jpg" },
  { id: 3, image: "/images/inicio/quienes-somos/pic3.jpg" },
  { id: 4, image: "/images/inicio/quienes-somos/pic4.jpg" },
  { id: 5, image: "/images/inicio/quienes-somos/pic5.jpg" },
];

export default function QuienesSomosPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mediaMode, setMediaMode] = useState<"beforeAfter" | "carousel">("beforeAfter");

  const total = galleryItems.length;
  const nextGallery = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % total);
  }, [total]);

  useEffect(() => {
    if (mediaMode !== "carousel") return;
    const timer = setInterval(() => {
      nextGallery();
    }, 5500);
    return () => clearInterval(timer);
  }, [nextGallery, mediaMode]);

  return (
    <div
      className="page-wraper w-full bg-white text-black"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* ========================================================= */}
      {/* 1. INNER PAGE BANNER (wt-bnr-inr overlay-wraper bg-parallax) */}
      {/* ========================================================= */}
      <div className="relative w-full h-[450px] sm:h-[500px] lg:h-[520px] bg-neutral-950 overflow-hidden flex items-center pt-24 pb-10">
        <Image
          src="/images/inicio/slider/slider1.jpg"
          alt="Quiénes Somos - Banner"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Overlay oscuro (opacity-07 / bg-black/75) */}
        <div className="absolute inset-0 bg-black/75" />

        <div className="relative z-10 max-w-[1340px] w-full mx-auto px-6 sm:px-12 lg:px-16 xl:px-20">
          <div className="wt-bnr-inr-entry">
            
            {/* MARCO ARQUITECTÓNICO C-SHAPE (border 10px white con esquinas abiertas) */}
            <div className="relative py-10 sm:py-14 pl-6 sm:pl-8 border-t-[8px] sm:border-t-[10px] border-b-[8px] sm:border-b-[10px] border-l-[8px] sm:border-l-[10px] border-white w-[160px] sm:w-[220px] mb-8 after:content-[''] after:absolute after:right-0 after:top-0 after:w-[8px] sm:after:w-[10px] after:h-[35px] sm:after:h-[45px] after:bg-white before:content-[''] before:absolute before:right-0 before:bottom-0 before:w-[8px] sm:before:w-[10px] before:h-[35px] sm:before:h-[45px] before:bg-white">
              <div className="w-[280px] sm:w-[480px] md:w-[600px] lg:w-[680px]">
                <h2 className="text-white text-base sm:text-lg md:text-xl font-light uppercase tracking-[4px] sm:tracking-[5px] leading-relaxed">
                  TRANSFORMANDO ESPACIOS Y REALIDADES CON VISIÓN ARQUITECTÓNICA.
                </h2>
              </div>
            </div>

            {/* BREADCRUMB ROW */}
            <div className="text-white text-xs sm:text-sm font-medium tracking-[2px]">
              <Link href="/" className="hover:text-neutral-300 transition-colors">
                Inicio
              </Link>
              <span className="mx-2 text-white/80">»</span>
              <span className="text-[var(--color1)]">Quiénes Somos</span>
            </div>

          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 2. ABOUT COMPANY SECTION (section-full p-t80 p-b50 bg-gray) */}
      {/* ========================================================= */}
      <section className="section-full py-20 lg:py-28 bg-[#f5f5f5] text-black relative z-10 overflow-hidden">
        <div className="max-w-[1340px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* COLUMNA IZQUIERDA: CARRUSEL PORTRAIT / ANTES-DESPUÉS */}
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

            {/* COLUMNA DERECHA: TEXTO ABOUT US (Idéntico a estructura de template) */}
            <div className="lg:col-span-6 space-y-6">
              <span
                className="text-2xl sm:text-3xl font-light uppercase text-black block tracking-tight"
                style={{ fontWeight: 300 }}
              >
                Quiénes Somos
              </span>

              <h2
                className="text-3xl sm:text-4xl lg:text-[40px] font-semibold uppercase text-black leading-[1.15] tracking-tight"
                style={{ fontWeight: 600 }}
              >
                TRANSFORMANDO ESPACIOS <br className="hidden sm:inline" />
                Y REALIDADES
              </h2>

              <p className="text-sm sm:text-base font-medium text-neutral-900 leading-relaxed">
                Somos una empresa especializada en diseño, construcción, remodelación e implementación de espacios comerciales, Retail e industriales.
              </p>

              {/* 2 Bloques con la información de las imágenes del usuario */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div className="bg-white p-6 border-l-4 border-black shadow-sm space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-[2px] text-black">
                    ENFOQUE MINIMALISTA
                  </h4>
                  <p className="text-xs sm:text-[13px] text-neutral-600 font-light leading-relaxed">
                    Arquitectura minimalista y funcional que redefine cada espacio mediante la sofisticación y la simplicidad técnica.
                  </p>
                </div>

                <div className="bg-white p-6 border-l-4 border-black shadow-sm space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-[2px] text-black">
                    SOLUCIÓN FUNCIONAL
                  </h4>
                  <p className="text-xs sm:text-[13px] text-neutral-600 font-light leading-relaxed">
                    Nuestra visión integra la estética contemporánea con la viabilidad constructiva para el desarrollo inmobiliario nacional.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. NUESTRA MISIÓN & VANGUARDIA (Inspirado en template)     */}
      {/* ========================================================= */}
      <section className="py-20 lg:py-28 bg-white text-black relative z-10 border-t border-neutral-200">
        <div className="max-w-[1340px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* LADO IZQUIERDO: TEXTOS DE MISIÓN */}
            <div className="lg:col-span-6 space-y-6">
              <div className="section-head text-left">
                <span className="text-xs font-bold uppercase tracking-[3px] text-neutral-400 block mb-2">
                  Propósito Institucional
                </span>
                <h2
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-black mb-4"
                  style={{ fontFamily: "'Oswald-Bold', 'Oswald', sans-serif" }}
                >
                  NUESTRA MISIÓN
                </h2>
                <div className="w-16 h-[3px] bg-black mb-6" />
              </div>

              <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-light">
                Satisfacer las expectativas de nuestros clientes, desarrollando sus proyectos con calidad, altos estándares de seguridad, cumpliendo el alcance, plazo y presupuesto acordado.
              </p>

              {/* 2 Tarjetas de Personalización & Vanguardia */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="bg-[#f9f9f9] p-6 border border-neutral-200 space-y-2">
                  <div className="w-10 h-10 bg-black text-white flex items-center justify-center font-bold text-xs uppercase mb-3">
                    01
                  </div>
                  <h3
                    className="text-base font-bold uppercase tracking-wide text-black"
                    style={{ fontFamily: "'Oswald', sans-serif" }}
                  >
                    Personalización
                  </h3>
                  <p className="text-xs sm:text-[13px] text-neutral-600 font-light leading-relaxed">
                    Satisfacemos las necesidades específicas de cada cliente mediante soluciones innovadoras.
                  </p>
                </div>

                <div className="bg-[#f9f9f9] p-6 border border-neutral-200 space-y-2">
                  <div className="w-10 h-10 bg-black text-white flex items-center justify-center font-bold text-xs uppercase mb-3">
                    02
                  </div>
                  <h3
                    className="text-base font-bold uppercase tracking-wide text-black"
                    style={{ fontFamily: "'Oswald', sans-serif" }}
                  >
                    Vanguardia
                  </h3>
                  <p className="text-xs sm:text-[13px] text-neutral-600 font-light leading-relaxed">
                    Calidad constructiva superior y diseños que desafían el paso del tiempo con elegancia.
                  </p>
                </div>
              </div>
            </div>

            {/* LADO DERECHO: IMAGEN ARQUITECTÓNICA */}
            <div className="lg:col-span-6 relative">
              <div className="relative h-[380px] sm:h-[480px] w-full bg-neutral-100 shadow-2xl overflow-hidden border border-neutral-200">
                <Image
                  src="/images/inicio/quienes-somos/before.jpg"
                  alt="Nuestra Misión Voladizo"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. NUESTRA VISIÓN (Pilares Estratégicos & Expansión)       */}
      {/* ========================================================= */}
      <section className="py-20 lg:py-28 bg-[#141414] text-white relative z-10 overflow-hidden">
        <div className="max-w-[1340px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* LADO IZQUIERDO: IMAGEN ARQUITECTÓNICA DE PROYECTO */}
            <div className="lg:col-span-6 order-2 lg:order-1 relative">
              <div className="relative h-[380px] sm:h-[480px] w-full bg-neutral-900 border border-neutral-800 shadow-2xl overflow-hidden group">
                <Image
                  src="/images/inicio/quienes-somos/after.jpg"
                  alt="Nuestra Visión Voladizo"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                {/* <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-[11px] font-bold uppercase tracking-[3px] bg-black/80 px-4 py-2 border border-white/20 text-white inline-block">
                    Impacto Sostenible & Vanguardia
                  </span>
                </div> */}
              </div>
            </div>

            {/* LADO DERECHO: CONTENIDO DE VISIÓN */}
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <div className="section-head text-left">
                <span className="text-xs font-bold uppercase tracking-[3px] text-neutral-400 block mb-2">
                  Horizonte Estratégico
                </span>
                <h2
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white mb-4"
                  style={{ fontFamily: "'Oswald-Bold', 'Oswald', sans-serif" }}
                >
                  NUESTRA VISIÓN
                </h2>
                <div className="w-16 h-[3px] bg-white mb-6" />
              </div>

              {/* 3 Bloques de Visión */}
              <div className="space-y-4 pt-2">
                {/* Pilar 1: Referente Nacional */}
                <div className="bg-neutral-900/80 p-6 border border-neutral-800 hover:border-neutral-600 transition-colors shadow-lg space-y-2">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="w-2.5 h-2.5 rounded-full border border-white block shrink-0" />
                    <h3
                      className="text-base sm:text-lg font-bold uppercase tracking-wide text-white"
                      style={{ fontFamily: "'Oswald', sans-serif" }}
                    >
                      Referente Nacional
                    </h3>
                  </div>
                  <p className="text-xs sm:text-[13.5px] text-neutral-300 font-light leading-relaxed pl-5">
                    Ser el líder en remodelaciones y ampliaciones integrales y sostenibles.
                  </p>
                </div>

                {/* Pilar 2: Procesos Modernos */}
                <div className="bg-neutral-900/80 p-6 border border-neutral-800 hover:border-neutral-600 transition-colors shadow-lg space-y-2">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="w-2.5 h-2.5 rounded-full border border-white block shrink-0" />
                    <h3
                      className="text-base sm:text-lg font-bold uppercase tracking-wide text-white"
                      style={{ fontFamily: "'Oswald', sans-serif" }}
                    >
                      Procesos Modernos
                    </h3>
                  </div>
                  <p className="text-xs sm:text-[13.5px] text-neutral-300 font-light leading-relaxed pl-5">
                    Liderar el sector construcción con procesos eficientes y tecnología de vanguardia.
                  </p>
                </div>

                {/* Pilar 3: Expansión Regional */}
                <div className="bg-neutral-900/80 p-6 border border-neutral-800 hover:border-neutral-600 transition-colors shadow-lg space-y-2">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="w-2.5 h-2.5 rounded-full border border-white block shrink-0" />
                    <h3
                      className="text-base sm:text-lg font-bold uppercase tracking-wide text-white"
                      style={{ fontFamily: "'Oswald', sans-serif" }}
                    >
                      Expansión Regional
                    </h3>
                  </div>
                  <p className="text-xs sm:text-[13.5px] text-neutral-300 font-light leading-relaxed pl-5">
                    Expandir el legado de Voladizo a nivel regional con impacto sostenible.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. NUESTRO EQUIPO / EXPERTOS (OUR EXPERTS SECTION)        */}
      {/* ========================================================= */}
      <section
        id="equipo"
        className="section-full py-20 lg:py-28 bg-white bg-repeat text-black relative z-10 border-t border-neutral-200"
        style={{
          fontFamily: "'Poppins', sans-serif",
          backgroundImage: "url('/images/quienes-somos/ptn-1.png')",
        }}
      >
        <div className="max-w-[1340px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
            
            {/* COLUMNA IZQUIERDA: TÍTULO Y LÍDER DESTACADO */}
            <div className="lg:col-span-6 flex flex-col items-center lg:items-start">
              {/* Título de sección */}
              <div className="mb-8 w-full text-left">
                <h2
                  className="text-3xl sm:text-4xl font-bold uppercase tracking-tight text-black mb-3"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  NUESTRO EQUIPO
                </h2>
                <div className="w-16 h-[3px] bg-black" />
              </div>

              {/* Tarjeta de Líder Principal */}
              <div className="w-full max-w-[480px]">
                <div className="relative w-full h-[460px] sm:h-[540px] lg:h-[600px] bg-neutral-100 overflow-hidden shadow-sm group">
                  <Image
                    src={featuredLeader.image}
                    alt={featuredLeader.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    priority
                  />
                </div>

                {/* Información del Líder */}
                <div className="text-center pt-6 pb-2">
                  <h3
                    className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-black"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {featuredLeader.name}
                  </h3>
                  <p
                    className="text-sm sm:text-base text-neutral-500 mt-1 mb-4 font-light"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {featuredLeader.role}
                  </p>

                  {/* Redes Sociales Cuadradas con Borde Fino */}
                  {/* <ul className="flex items-center justify-center gap-1.5">
                    <li>
                      <a
                        href={featuredLeader.socials?.facebook || "#"}
                        aria-label="Facebook"
                        className="w-8 h-8 border border-neutral-300 text-neutral-600 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-colors"
                      >
                        <FacebookIcon className="w-3 h-3" />
                      </a>
                    </li>
                    <li>
                      <a
                        href={featuredLeader.socials?.twitter || "#"}
                        aria-label="Twitter"
                        className="w-8 h-8 border border-neutral-300 text-neutral-600 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-colors"
                      >
                        <TwitterIcon className="w-3 h-3" />
                      </a>
                    </li>
                    <li>
                      <a
                        href={featuredLeader.socials?.linkedin || "#"}
                        aria-label="LinkedIn"
                        className="w-8 h-8 border border-neutral-300 text-neutral-600 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-colors"
                      >
                        <LinkedInIcon className="w-3 h-3" />
                      </a>
                    </li>
                    <li>
                      <a
                        href={featuredLeader.socials?.youtube || "#"}
                        aria-label="YouTube"
                        className="w-8 h-8 border border-neutral-300 text-neutral-600 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-colors"
                      >
                        <YoutubeIcon className="w-3 h-3" />
                      </a>
                    </li>
                    <li>
                      <a
                        href={featuredLeader.socials?.instagram || "#"}
                        aria-label="Instagram"
                        className="w-8 h-8 border border-neutral-300 text-neutral-600 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-colors"
                      >
                        <InstagramIcon className="w-3 h-3" />
                      </a>
                    </li>
                  </ul> */}
                </div>
              </div>
            </div>

            {/* COLUMNA DERECHA: GRID 2x2 DE INTEGRANTES DEL EQUIPO CON L-BRACKET */}
            <div className="lg:col-span-6 w-full pt-4 lg:pt-16">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 w-full">
                {teamMembers.map((member) => (
                  <div key={member.id} className="relative flex flex-col">
                    {/* Contenedor de Imagen */}
                    <div className="relative w-full h-[230px] sm:h-[260px] bg-neutral-100 overflow-hidden group">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </div>

                    {/* Info del Integrante con Acento Angular en L */}
                    <div className="relative pt-4 pb-2 text-center w-full">
                      {/* Acento geométrico en esquina inferior izquierda (.wt-team-info:before & :after) */}
                      <div className="absolute left-0 bottom-0 w-8 h-[2.5px] bg-black" />
                      <div className="absolute left-0 bottom-0 w-[2.5px] h-8 bg-black" />

                      <h4
                        className="text-sm sm:text-base font-bold uppercase tracking-wider text-black"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        {member.name}
                      </h4>
                      <p
                        className="text-xs text-neutral-500 mt-1 font-light pb-3"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        {member.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. CALL TO ACTION FINAL                                   */}
      {/* ========================================================= */}
      
    </div>
  );
}