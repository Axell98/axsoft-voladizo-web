"use client";

import Link from "next/link";
import Image from "next/image";

// =========================================================
// ICONOS SVG LIMPIOS Y ELEGANTES (Sin dependencias externas)
// =========================================================
function FacebookIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 320 512">
      <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
    </svg>
  );
}

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 448 512">
      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
    </svg>
  );
}

function LinkedInIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 448 512">
      <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
    </svg>
  );
}

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 448 512">
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
    </svg>
  );
}

function ArrowUpIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
    </svg>
  );
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="w-full bg-[#0a0a0a] text-white relative z-20 overflow-hidden border-t border-neutral-900"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* ========================================================= */}
      {/* 1. SECCIÓN CTA ARQUITECTÓNICA: "HABLEMOS DE TU PROYECTO" */}
      {/* ========================================================= */}
      <div className="border-b border-neutral-800/80 bg-gradient-to-b from-[#111111] to-[#0a0a0a] py-14 lg:py-16">
        <div className="max-w-[1340px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-20">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-semibold uppercase tracking-[3px] text-neutral-400">
                  ¿Tienes una idea en mente?
                </span>
              </div>
              <h2
                className="text-2xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white leading-tight"
                style={{ fontFamily: "'Oswald-Bold', 'Oswald', sans-serif" }}
              >
                TRANSFORMEMOS TU ESPACIO <br className="hidden sm:inline" />
                EN UNA REALIDAD.
              </h2>
               <p className="text-neutral-400 text-sm sm:text-base font-light max-w-xl mx-auto leading-relaxed">
            Contáctanos hoy para coordinar una reunión de asesoría técnica y diseño arquitectónico para tu proyecto.
          </p>
              
            </div>

            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <Link
                href="/#contacto"
                className="group relative inline-flex items-center justify-center bg-white text-black px-8 py-4 font-bold text-xs uppercase tracking-[3px] hover:bg-neutral-200 transition-all duration-300 shadow-lg"
              >
                <span className="pr-6">Contactar Ahora</span>
                <span className="absolute right-5 w-3 h-[2px] bg-black transition-all duration-300 group-hover:w-6" />
              </Link>

              {/* <a
                href="https://wa.me/51999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 border border-neutral-700 bg-neutral-900/80 hover:bg-emerald-600 hover:border-emerald-600 text-white px-6 py-4 font-semibold text-xs uppercase tracking-[2px] transition-all duration-300"
              >
                <WhatsAppIcon className="w-4 h-4 text-emerald-400 group-hover:text-white" />
                <span>WhatsApp</span>
              </a> */}
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 2. GRID PRINCIPAL ARQUITECTÓNICO (4 COLUMNAS)             */}
      {/* ========================================================= */}
      <div className="max-w-[1340px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          
          {/* COLUMNA 1: LOGO, DESCRIPCIÓN Y REDES (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-flex items-center gap-3.5 group">
              <div className="relative w-12 h-9 sm:w-14 sm:h-10 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/images/iconos/logo2.svg"
                  alt="Voladizo Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span
                className="text-2xl sm:text-3xl tracking-[0.14em] text-white uppercase font-bold"
                style={{ fontFamily: "'Oswald-Bold', 'Oswald', sans-serif" }}
              >
                VOLADIZO
              </span>
            </Link>

            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm font-light">
              Firma especializada en arquitectura contemporánea, ingeniería, construcción y diseño de interiores para proyectos residenciales, comerciales y corporativos de alta exigencia.
            </p>

            {/* Redes Sociales con estilo architectural tag */}
            <div className="pt-2">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[11px] font-bold uppercase tracking-[2.5px] text-neutral-400">
                  Redes Sociales
                </span>
                <div className="flex-1 h-[1px] bg-neutral-800" />
              </div>
              <div className="flex items-center gap-2.5">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-10 h-10 border border-neutral-800 bg-neutral-900/60 hover:bg-white hover:text-black hover:border-white text-neutral-300 flex items-center justify-center transition-all duration-300 group"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                {/* <a
                  href="#"
                  aria-label="LinkedIn"
                  className="w-10 h-10 border border-neutral-800 bg-neutral-900/60 hover:bg-white hover:text-black hover:border-white text-neutral-300 flex items-center justify-center transition-all duration-300 group"
                >
                  <LinkedInIcon className="w-4 h-4" />
                </a> */}
                {/* <a
                  href="https://wa.me/51999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="w-10 h-10 border border-neutral-800 bg-neutral-900/60 hover:bg-[#25D366] hover:text-white hover:border-[#25D366] text-neutral-300 flex items-center justify-center transition-all duration-300 group"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                </a> */}
              </div>
            </div>
          </div>

          {/* COLUMNA 2: NAVEGACIÓN RÁPIDA (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3 pb-2 border-b border-neutral-800">
              <span className="text-xs font-bold uppercase tracking-[2.5px] text-white">
                Navegación
              </span>
            </div>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="text-neutral-400 hover:text-white transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1.5 h-[1.5px] bg-neutral-600 group-hover:w-3 group-hover:bg-white transition-all duration-200" />
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/quienes-somos" className="text-neutral-400 hover:text-white transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1.5 h-[1.5px] bg-neutral-600 group-hover:w-3 group-hover:bg-white transition-all duration-200" />
                  Quiénes Somos
                </Link>
              </li>
              <li>
                <Link href="/#servicios" className="text-neutral-400 hover:text-white transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1.5 h-[1.5px] bg-neutral-600 group-hover:w-3 group-hover:bg-white transition-all duration-200" />
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/#equipo" className="text-neutral-400 hover:text-white transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1.5 h-[1.5px] bg-neutral-600 group-hover:w-3 group-hover:bg-white transition-all duration-200" />
                  Nuestro Equipo
                </Link>
              </li>
              <li>
                <Link href="/#proyectos" className="text-neutral-400 hover:text-white transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1.5 h-[1.5px] bg-neutral-600 group-hover:w-3 group-hover:bg-white transition-all duration-200" />
                  Proyectos
                </Link>
              </li>
              <li>
                <Link href="/#contacto" className="text-neutral-400 hover:text-white transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1.5 h-[1.5px] bg-neutral-600 group-hover:w-3 group-hover:bg-white transition-all duration-200" />
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMNA 3: ESPECIALIDADES / SERVICIOS (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="flex items-center gap-3 pb-2 border-b border-neutral-800">
              <span className="text-xs font-bold uppercase tracking-[2.5px] text-white">
                Servicios
              </span>
            </div>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/#servicios" className="text-neutral-400 hover:text-white transition-colors duration-200 block font-light">
                  Diseño e Ingeniería
                </Link>
              </li>
              <li>
                <Link href="/#servicios" className="text-neutral-400 hover:text-white transition-colors duration-200 block font-light">
                  Construcción y Remodelación
                </Link>
              </li>
              <li>
                <Link href="/#servicios" className="text-neutral-400 hover:text-white transition-colors duration-200 block font-light">
                  Diseño Interior y Mobiliario
                </Link>
              </li>
              <li>
                <Link href="/#servicios" className="text-neutral-400 hover:text-white transition-colors duration-200 block font-light">
                  Gestión y Supervisión de Obra
                </Link>
              </li>
              <li>
                <Link href="/#servicios" className="text-neutral-400 hover:text-white transition-colors duration-200 block font-light">
                  Expedientes Técnicos & Licencias
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMNA 4: UBICACIÓN & CONTACTO (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="flex items-center gap-3 pb-2 border-b border-neutral-800">
              <span className="text-xs font-bold uppercase tracking-[2.5px] text-white">
                Contacto Directo
              </span>
            </div>
            <div className="space-y-4 text-sm text-neutral-400 font-light leading-relaxed">
              <div>
                <span className="block text-white text-[11px] font-bold uppercase tracking-[1.5px] mb-1">
                  Oficina Principal
                </span>
                <p>Lima, Perú</p>
              </div>

              <div>
                <span className="block text-white text-[11px] font-bold uppercase tracking-[1.5px] mb-1">
                  Teléfono / Móvil
                </span>
                <a href="tel:+51999999999" className="hover:text-white transition-colors font-medium">
                  +51 999 999 999
                </a>
              </div>

              <div>
                <span className="block text-white text-[11px] font-bold uppercase tracking-[1.5px] mb-1">
                  Consultas & Cotizaciones
                </span>
                <a href="mailto:contacto@voladizo.com" className="hover:text-white transition-colors">
                  contacto@voladizo.com
                </a>
              </div>

              <div>
                <span className="block text-white text-[11px] font-bold uppercase tracking-[1.5px] mb-1">
                  Horario de Atención
                </span>
                <p>Lunes a Viernes: 8:30 am — 6:30 pm</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ========================================================= */}
      {/* 3. BARRA INFERIOR DE DERECHOS RESERVADOS & BACK TO TOP     */}
      {/* ========================================================= */}
      <div className="border-t border-neutral-900 bg-black py-6">
        <div className="max-w-[1340px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-20">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-light">
            <p>
              © {new Date().getFullYear()} <span className="text-neutral-300 font-medium tracking-wider">VOLADIZO</span> Arquitectura & Construcción. Todos los derechos reservados.
            </p>

            <div className="flex items-center gap-6">
              <Link href="/privacidad" className="hover:text-neutral-300 transition-colors">
                Políticas de Privacidad
              </Link>
              <span className="w-1 h-1 rounded-full bg-neutral-800" />
              <Link href="/terminos" className="hover:text-neutral-300 transition-colors">
                Términos y Condiciones
              </Link>
              <span className="w-1 h-1 rounded-full bg-neutral-800" />
              <button
                onClick={scrollToTop}
                aria-label="Volver arriba"
                className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors cursor-pointer"
              >
                <span>Subir</span>
                <ArrowUpIcon className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
