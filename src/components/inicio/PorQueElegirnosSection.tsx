"use client";

import Image from "next/image";
import { revealProps, useReveal } from "@/lib/use-reveal";

// TODO: reemplazar por las imágenes del brochure (proyectos en vertical, proporción 4:5)
const IMAGEN_PROYECTOS = "/images/inicio/servicios/servicio1/3.jpg";
const IMAGEN_VANGUARDIA = "/images/inicio/servicios/servicio2/5-sm.jpg";

// =========================================================
// ICONOS SVG
// =========================================================
function UsersIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  );
}

function LeafIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 4c0 9-5 16-13 16-1.5 0-2.5-.3-3-.5C4 11 9 4 20 4z" />
      <path d="M4 20c3-6 7-10 12-12" />
    </svg>
  );
}

// =========================================================
// CONTENIDO
// =========================================================
const features = [
  {
    id: 1,
    title: "Atención Personalizada",
    text: "Transparencia total en cada proceso, asegurando que su visión se cumpla con rigor.",
    Icon: UsersIcon,
  },
  {
    id: 2,
    title: "Vanguardia y Sostenibilidad",
    text: "Fusionamos un diseño moderno y sostenible con espacios funcionales e identidad propia.",
    Icon: LeafIcon,
  },
];

const showcase = [
  {
    id: 1,
    tag: "Proyectos",
    title: "Diseño Conceptual",
    text: "Gestión de ciclo de vida completo del proyecto.",
    image: IMAGEN_PROYECTOS,
    alt: "Proyecto residencial de arquitectura contemporánea de Voladizo",
    position: "object-[58%_50%]",
  },
  {
    id: 2,
    tag: "Vanguardia",
    title: "Visión del Cliente",
    text: "Atención exclusiva y diseño elegante.",
    image: IMAGEN_VANGUARDIA,
    alt: "Interior minimalista diseñado por Voladizo",
    position: "object-center",
  },
];

// =========================================================
// SECCIÓN
// =========================================================
export default function PorQueElegirnosSection() {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <section
      id="por-que-elegirnos"
      ref={ref}
      aria-labelledby="por-que-elegirnos-titulo"
      className="relative bg-white text-black overflow-hidden py-20 lg:py-28"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Trama de plano arquitectónico de fondo */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.045) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse at center, black 25%, transparent 72%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 25%, transparent 72%)",
        }}
      />

      <div className="relative max-w-[1340px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-20">
        {/* ========================================================= */}
        {/* ENCABEZADO                                                */}
        {/* ========================================================= */}
        <div className="text-center mb-14 lg:mb-20">
          <div
            className={`inline-flex items-center gap-4 ${revealProps(visible, 0).className}`}
            style={revealProps(visible, 0).style}
          >
            <span aria-hidden="true" className="w-10 sm:w-14 h-px bg-brand" />
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[4px] text-brand-dark">
              Excelencia en diseño
            </span>
            <span aria-hidden="true" className="w-10 sm:w-14 h-px bg-brand" />
          </div>

          <h2
            id="por-que-elegirnos-titulo"
            className={`font-oswald-bold uppercase tracking-tight leading-[1.05] text-4xl sm:text-6xl lg:text-7xl mt-5 ${
              revealProps(visible, 100).className
            }`}
            style={revealProps(visible, 100).style}
          >
            ¿Por qué{" "}
            <span className="relative inline-block isolate">
              elegirnos?
              {/* Resaltador que se dibuja detrás de la palabra */}
              <span
                aria-hidden="true"
                className={`absolute -inset-x-1 bottom-[8%] h-[34%] bg-brand -z-10 origin-left transition-transform duration-1000 delay-700 ease-out motion-reduce:transition-none motion-reduce:scale-x-100 ${
                  visible ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-start">
          {/* ========================================================= */}
          {/* COLUMNA IZQUIERDA: PROMESA + VENTAJAS                     */}
          {/* ========================================================= */}
          <div className="lg:col-span-6">
            <div className={revealProps(visible, 200, "left").className} style={revealProps(visible, 200, "left").style}>
              <span className="inline-flex items-center gap-2.5 border border-brand/60 bg-brand/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[3px] text-brand-dark">
                <span aria-hidden="true" className="w-2 h-2 rounded-full bg-brand animate-pulse" />
                Nuestra promesa
              </span>
            </div>

            <p
              className={`mt-7 text-lg sm:text-xl leading-relaxed text-neutral-600 font-light ${
                revealProps(visible, 300, "left").className
              }`}
              style={revealProps(visible, 300, "left").style}
            >
              En Voladizo ofrecemos un <strong className="font-semibold text-black">enfoque integral</strong> que
              abarca desde el diseño conceptual de un escritorio hasta el diseño y ejecución de un edificio a gran
              escala, garantizando la viabilidad técnica y calidad constructiva.
            </p>

            <ul className="mt-10 space-y-5">
              {features.map(({ id, title, text, Icon }, idx) => {
                const anim = revealProps(visible, 450 + idx * 150, "left");
                return (
                  <li key={id} className={`${anim.className} ${idx === 1 ? "lg:ml-10" : ""}`} style={anim.style}>
                    <article className="group relative flex items-start gap-5 bg-white border border-neutral-200 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-transparent">
                      {/* Barra de acento que se despliega al hover */}
                      <span
                        aria-hidden="true"
                        className="absolute left-0 top-0 h-full w-1 bg-brand origin-top scale-y-0 transition-transform duration-300 group-hover:scale-y-100"
                      />
                      <span className="shrink-0 w-14 h-14 flex items-center justify-center bg-black text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-black">
                        <Icon className="w-6 h-6" />
                      </span>
                      <div>
                        <h3 className="font-oswald-bold uppercase tracking-wide text-lg mb-1.5">{title}</h3>
                        <p className="text-sm text-neutral-600 font-light leading-relaxed">{text}</p>
                      </div>
                    </article>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* ========================================================= */}
          {/* COLUMNA DERECHA: TARJETAS CON IMAGEN                      */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 relative">
            {/* Marco decorativo desplazado */}
            <div
              aria-hidden="true"
              className="hidden sm:block absolute -top-8 -right-8 w-3/4 h-[62%] border-[20px] border-black/[0.06] pointer-events-none"
            />

            <div className="relative grid grid-cols-2 gap-5 sm:gap-8">
              {showcase.map((item, idx) => {
                const anim = revealProps(visible, 350 + idx * 200);
                return (
                  <div key={item.id} className={`${anim.className} ${idx === 1 ? "mt-10 sm:mt-16" : ""}`} style={anim.style}>
                    <figure className="group">
                      <div className="relative aspect-[4/5] overflow-hidden bg-neutral-200 shadow-xl">
                        <Image
                          src={item.image}
                          alt={item.alt}
                          fill
                          sizes="(max-width: 1024px) 45vw, 300px"
                          className={`object-cover ${item.position} transition-transform duration-[1500ms] ease-out group-hover:scale-105`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <span
                          aria-hidden="true"
                          className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-white/80 transition-all duration-300 group-hover:w-9 group-hover:h-9"
                        />
                        <span className="absolute left-3 bottom-3 sm:left-4 sm:bottom-4 bg-brand px-3 py-1.5 text-[10px] font-bold uppercase tracking-[2.5px] text-black">
                          {item.tag}
                        </span>
                      </div>

                      <figcaption className="pt-6">
                        <h3 className="font-oswald-bold uppercase tracking-wide text-lg sm:text-xl">{item.title}</h3>
                        <span
                          aria-hidden="true"
                          className="block w-8 h-[3px] bg-brand my-3 transition-all duration-300 group-hover:w-16"
                        />
                        <p className="text-sm text-neutral-600 font-light leading-relaxed">{item.text}</p>
                      </figcaption>
                    </figure>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
