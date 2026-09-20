"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import BeforeAfterDiagonal from "@/components/inicio/BeforeAfterDiagonal";

// =========================================================
// DATOS & CONTENIDO DEL TEMPLATE ABOUT-1 CON INFORMACIÓN DEL USUARIO
// =========================================================

const aboutGallery = [
  "/images/inicio/quienes-somos/pic1.jpg",
  "/images/inicio/quienes-somos/pic2.jpg",
  "/images/inicio/quienes-somos/pic3.jpg",
  "/images/inicio/quienes-somos/pic4.jpg",
  "/images/inicio/quienes-somos/pic5.jpg",
];

interface ServiceTab {
  id: string;
  title: string;
  description: string;
  image: string;
}

const servicesTabs: ServiceTab[] = [
  {
    id: "tab1",
    title: "DISEÑO E INGENIERÍA",
    description:
      "Desarrollo de anteproyectos y expedientes técnicos de arquitectura e ingeniería. Planificación integral que garantiza viabilidad y estabilidad técnica.",
    image: "/images/inicio/servicios/servicio1/servicio_disenio.png",
  },
  {
    id: "tab2",
    title: "CONSTRUCCIÓN Y REMODELACIÓN",
    description:
      "Ejecución de obras comerciales, retail e industriales bajo estrictos estándares de seguridad y calidad constructiva superior.",
    image: "/images/inicio/servicios/servicio2/servicio_construccion.png",
  },
  {
    id: "tab3",
    title: "DISEÑO INTERIOR Y MOBILIARIO",
    description:
      "Ambientes contemporáneos y funcionales con estética sofisticada y soluciones a la medida para espacios comerciales y corporativos.",
    image: "/images/inicio/servicios/servicio3/servicio_disenio_interior.jpg",
  },
  {
    id: "tab4",
    title: "GESTIÓN Y SUPERVISIÓN",
    description:
      "Control riguroso de alcance, plazos y presupuesto acordado, asegurando el cumplimiento estricto de cada requerimiento del proyecto.",
    image: "/images/inicio/servicios/servicio4/servicio_supervicion.png",
  },
];

const teamList = [
  {
    name: "Arq. Renzo Alvarez",
    role: "Gerente General",
    image: "/images/inicio/equipo/gerente_general.jpg",
  },
  {
    name: "Laura Maglia",
    role: "Jefe Comercial",
    image: "/images/inicio/equipo/personal1.jpg",
  },
  {
    name: "Taylor Roberts",
    role: "Coordinador de Obra",
    image: "/images/inicio/equipo/pic3.jpg",
  },
  {
    name: "Robert Willson",
    role: "Supervisor de Proyectos",
    image: "/images/inicio/equipo/pic4.jpg",
  },
];

export default function QuienesSomosPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState<string>("tab1");
  const [mediaMode, setMediaMode] = useState<"beforeAfter" | "gallery">("beforeAfter");

  const currentService = servicesTabs.find((s) => s.id === activeTab) || servicesTabs[0];

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
                  FUSING LOGIC WITH IMAGINATION AND TRUTH WITH DISCOVERY.
                </h2>
              </div>
            </div>

            {/* BREADCRUMB ROW */}
            <div className="text-white text-xs sm:text-sm font-medium tracking-[2px]">
              <Link href="/" className="hover:text-neutral-300 transition-colors">
                Home
              </Link>
              <span className="mx-2 text-white/80">»</span>
              <span className="text-white">About 1</span>
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
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                {/* Selector de modo */}
                <div className="flex items-center gap-2 mb-4">
                  <button
                    type="button"
                    onClick={() => setMediaMode("beforeAfter")}
                    className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                      mediaMode === "beforeAfter"
                        ? "bg-black text-white shadow-md"
                        : "bg-white text-black hover:bg-neutral-200 border border-neutral-300"
                    }`}
                  >
                    Antes / Después
                  </button>
                  <button
                    type="button"
                    onClick={() => setMediaMode("gallery")}
                    className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                      mediaMode === "gallery"
                        ? "bg-black text-white shadow-md"
                        : "bg-white text-black hover:bg-neutral-200 border border-neutral-300"
                    }`}
                  >
                    Galería de Proyectos
                  </button>
                </div>

                {mediaMode === "beforeAfter" ? (
                  <div className="h-[380px] sm:h-[460px] w-full bg-white rounded-none shadow-2xl overflow-hidden border border-neutral-200">
                    <BeforeAfterDiagonal
                      beforeImage="/images/inicio/quienes-somos/before.jpg"
                      afterImage="/images/inicio/quienes-somos/after.jpg"
                      beforeLabel="Antes"
                      afterLabel="Después"
                      slantOffset={12}
                    />
                  </div>
                ) : (
                  <div className="relative h-[380px] sm:h-[460px] w-full bg-white shadow-2xl overflow-hidden border border-neutral-200 group">
                    <Image
                      src={aboutGallery[currentSlide]}
                      alt="Galería Voladizo"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute bottom-4 right-4 flex gap-2 z-20">
                      <button
                        onClick={() =>
                          setCurrentSlide((prev) => (prev === 0 ? aboutGallery.length - 1 : prev - 1))
                        }
                        className="w-10 h-10 bg-black/80 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer"
                        aria-label="Anterior"
                      >
                        ←
                      </button>
                      <button
                        onClick={() =>
                          setCurrentSlide((prev) => (prev + 1) % aboutGallery.length)
                        }
                        className="w-10 h-10 bg-black/80 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer"
                        aria-label="Siguiente"
                      >
                        →
                      </button>
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

              <div className="pt-2">
                <Link
                  href="/#contacto"
                  className="group relative inline-flex items-center bg-black text-white px-8 py-4 shadow-sm hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  <span className="uppercase pr-9 block text-xs font-bold tracking-[4px]">
                    Contáctanos
                  </span>
                  <span className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-[1.5px] bg-white transition-all duration-300 group-hover:w-8" />
                </Link>
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
      {/* 4. OUR SERVICES SECTION (section-full bg-black circle-block-outer) */}
      {/* ========================================================= */}
      <section className="py-20 lg:py-28 bg-[#111111] text-white relative z-10 overflow-hidden">
        <div className="max-w-[1340px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-20">
          
          {/* HEADER DE SECCIÓN */}
          <div className="section-head text-left mb-12">
            <h2
              className="text-3xl sm:text-4xl font-bold uppercase tracking-tight text-white mb-3"
              style={{ fontFamily: "'Oswald-Bold', 'Oswald', sans-serif" }}
            >
              NUESTROS SERVICIOS
            </h2>
            <div className="w-16 h-[3px] bg-white" />
          </div>

          {/* 3 COLUMNAS INTERACTIVAS DE ABOUT-1: TAB LINKS + CENTER IMAGE */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* COLUMNA IZQUIERDA (TABS 1 & 2) */}
            <div className="lg:col-span-4 space-y-4">
              {servicesTabs.slice(0, 2).map((srv) => {
                const isActive = activeTab === srv.id;
                return (
                  <div
                    key={srv.id}
                    onMouseEnter={() => setActiveTab(srv.id)}
                    onClick={() => setActiveTab(srv.id)}
                    className={`p-6 border transition-all cursor-pointer ${
                      isActive
                        ? "bg-white text-black border-white shadow-xl"
                        : "bg-neutral-900/80 text-white border-neutral-800 hover:border-neutral-600"
                    }`}
                  >
                    <h4 className="text-xs font-bold uppercase tracking-[2px] mb-2">
                      {srv.title}
                    </h4>
                    <p className={`text-xs leading-relaxed font-light ${isActive ? "text-neutral-700" : "text-neutral-400"}`}>
                      {srv.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* COLUMNA CENTRAL (IMAGEN DINÁMICA DEL TAB ACTIVO) */}
            <div className="lg:col-span-4">
              <div className="relative h-[340px] sm:h-[400px] w-full bg-neutral-900 border border-neutral-800 overflow-hidden shadow-2xl">
                <Image
                  src={currentService.image}
                  alt={currentService.title}
                  fill
                  className="object-cover transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <span className="text-[11px] font-bold uppercase tracking-[3px] bg-black/80 px-4 py-1.5 border border-white/20 text-white">
                    {currentService.title}
                  </span>
                </div>
              </div>
            </div>

            {/* COLUMNA DERECHA (TABS 3 & 4) */}
            <div className="lg:col-span-4 space-y-4">
              {servicesTabs.slice(2, 4).map((srv) => {
                const isActive = activeTab === srv.id;
                return (
                  <div
                    key={srv.id}
                    onMouseEnter={() => setActiveTab(srv.id)}
                    onClick={() => setActiveTab(srv.id)}
                    className={`p-6 border transition-all cursor-pointer ${
                      isActive
                        ? "bg-white text-black border-white shadow-xl"
                        : "bg-neutral-900/80 text-white border-neutral-800 hover:border-neutral-600"
                    }`}
                  >
                    <h4 className="text-xs font-bold uppercase tracking-[2px] mb-2">
                      {srv.title}
                    </h4>
                    <p className={`text-xs leading-relaxed font-light ${isActive ? "text-neutral-700" : "text-neutral-400"}`}>
                      {srv.description}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. NUESTRO EQUIPO / EXPERTOS (OUR EXPERTS SECTION)        */}
      {/* ========================================================= */}
      <section className="py-20 lg:py-28 bg-[#f5f5f5] text-black border-t border-neutral-200">
        <div className="max-w-[1340px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-20">
          
          <div className="section-head text-left mb-12">
            <span className="text-xs font-bold uppercase tracking-[3px] text-neutral-500 block mb-2">
              Liderazgo & Talento
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold uppercase tracking-tight text-black mb-3"
              style={{ fontFamily: "'Oswald-Bold', 'Oswald', sans-serif" }}
            >
              NUESTRO EQUIPO
            </h2>
            <div className="w-16 h-[3px] bg-black" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamList.map((member) => (
              <div key={member.name} className="bg-white border border-neutral-200 overflow-hidden shadow-sm group">
                <div className="relative h-[300px] w-full bg-neutral-100 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 text-center bg-white">
                  <h3 className="text-base font-semibold text-black uppercase tracking-wide">
                    {member.name}
                  </h3>
                  <p className="text-xs text-neutral-500 font-light mt-1">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. CALL TO ACTION FINAL                                   */}
      {/* ========================================================= */}
      
    </div>
  );
}