"use client";

import { useCompany } from "@/context/CompanyContext";
import { REVEAL_BASE, revealProps, useReveal } from "@/lib/use-reveal";

export default function UbicacionSection() {
  const { contact } = useCompany();
  const { ref, visible } = useReveal<HTMLElement>();

  const directionsUrl = contact.mapsUrl || contact.mapsDirectionsUrl;
  const embedSrc = contact.mapsEmbedSrc;

  return (
    <section
      ref={ref}
      aria-labelledby="ubicacion-titulo"
      className="relative bg-[#141414] text-white overflow-hidden py-20 lg:py-28"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="max-w-[1340px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-20">
        {/* ========================================================= */}
        {/* TÍTULO CON LÍNEAS LATERALES (mismo diseño que Trayectoria) */}
        {/* ========================================================= */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 mb-6">
          <span
            aria-hidden="true"
            className={`hidden sm:block h-px w-12 lg:w-24 bg-brand origin-right duration-1000 transition-transform motion-reduce:transition-none motion-reduce:scale-x-100 ${
              visible ? "scale-x-100" : "scale-x-0"
            }`}
          />
          <h2
            id="ubicacion-titulo"
            className={`font-oswald-bold text-center uppercase tracking-tight leading-none text-3xl sm:text-5xl lg:text-6xl ${REVEAL_BASE} ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Nuestra <span className="text-brand">Ubicación</span>
          </h2>
          <span
            aria-hidden="true"
            className={`hidden sm:block h-px w-12 lg:w-24 bg-brand origin-left duration-1000 transition-transform motion-reduce:transition-none motion-reduce:scale-x-100 ${
              visible ? "scale-x-100" : "scale-x-0"
            }`}
          />
        </div>

        <p
          className={`text-center text-neutral-400 font-light mb-12 lg:mb-14 ${revealProps(visible, 100).className}`}
          style={revealProps(visible, 100).style}
        >
          {contact.address}
          <span className="mx-2 text-neutral-600">·</span>
          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand hover:text-white underline underline-offset-4 decoration-brand/40 hover:decoration-white transition-colors"
          >
            Cómo llegar
          </a>
        </p>

        {/* ========================================================= */}
        {/* MAPA (iframe de Google Maps)                              */}
        {/* ========================================================= */}
        <div
          className={`relative ${revealProps(visible, 200).className}`}
          style={revealProps(visible, 200).style}
        >
          <span
            aria-hidden="true"
            className="hidden sm:block absolute -top-3 -left-3 w-10 h-10 border-t-[3px] border-l-[3px] border-brand z-20"
          />
          <span
            aria-hidden="true"
            className="hidden sm:block absolute -bottom-3 -right-3 w-10 h-10 border-b-[3px] border-r-[3px] border-brand z-20"
          />

          <div className="relative h-[380px] sm:h-[440px] lg:h-[500px] w-full overflow-hidden bg-neutral-900 shadow-2xl grayscale-[15%] contrast-[1.05]">
            <iframe
              src={embedSrc}
              title="Ubicación de Voladizo en Google Maps"
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
