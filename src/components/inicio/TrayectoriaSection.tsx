"use client";

import Image from "next/image";
import { REVEAL_BASE, useReveal } from "@/lib/use-reveal";

// TODO: reemplazar por la imagen del brochure (p. ej. /images/inicio/trayectoria/trayectoria.jpg)
const TRAYECTORIA_IMAGE = "/images/inicio/servicios/servicio1/1.jpg";

interface TrayectoriaCard {
  id: number;
  number: string;
  title: string;
  text: string;
  variant: "dark" | "quote" | "accent";
}

const cards: TrayectoriaCard[] = [
  {
    id: 1,
    number: "01",
    title: "Trayectoria Local",
    text: "Contamos con una sólida trayectoria en el mercado peruano donde transformamos ideas en realidades tangibles.",
    variant: "dark",
  },
  {
    id: 2,
    number: "02",
    title: "Mundo de Innovación",
    text: "Elevamos cada proyecto hacia un estándar de vanguardia y funcionalidad excepcional.",
    variant: "quote",
  },
  {
    id: 3,
    number: "03",
    title: "Diseño Moderno",
    text: "Nuestro diseño contemporáneo distingue cada obra, asegurando calidad y vanguardia en cada detalle constructivo.",
    variant: "accent",
  },
];

export default function TrayectoriaSection() {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <section
      id="trayectoria"
      ref={ref}
      className="relative bg-[#141414] text-white overflow-hidden py-20 lg:py-28"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Trama de plano arquitectónico de fondo */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      <div className="relative max-w-[1340px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-20">
        {/* ========================================================= */}
        {/* TÍTULO CON LÍNEAS LATERALES                               */}
        {/* ========================================================= */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 mb-12 lg:mb-16">
          <span
            aria-hidden="true"
            className={`hidden sm:block h-px w-12 lg:w-24 bg-brand origin-right duration-1000 transition-transform motion-reduce:transition-none motion-reduce:scale-x-100 ${
              visible ? "scale-x-100" : "scale-x-0"
            }`}
          />
          <h2
            className={`font-oswald-bold text-center uppercase tracking-tight leading-none text-3xl sm:text-5xl lg:text-6xl ${REVEAL_BASE} ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Trayectoria <span className="text-brand">e Innovación</span>
          </h2>
          <span
            aria-hidden="true"
            className={`hidden sm:block h-px w-12 lg:w-24 bg-brand origin-left duration-1000 transition-transform motion-reduce:transition-none motion-reduce:scale-x-100 ${
              visible ? "scale-x-100" : "scale-x-0"
            }`}
          />
        </div>

        {/* ========================================================= */}
        {/* IMAGEN PANORÁMICA                                         */}
        {/* ========================================================= */}
        <div className="relative">
          {/* Marcas de esquina (estilo plano técnico) */}
          <span
            aria-hidden="true"
            className="hidden sm:block absolute -top-3 -left-3 w-10 h-10 border-t-[3px] border-l-[3px] border-brand z-20"
          />
          <span
            aria-hidden="true"
            className="hidden sm:block absolute -top-3 -right-3 w-10 h-10 border-t-[3px] border-r-[3px] border-brand z-20"
          />

          <div
            className={`relative h-[260px] sm:h-[340px] lg:h-[460px] overflow-hidden bg-neutral-900 shadow-2xl duration-[1400ms] ease-[cubic-bezier(0.25,1,0.5,1)] transition-[clip-path] motion-reduce:transition-none motion-reduce:[clip-path:inset(0)] ${
              visible ? "[clip-path:inset(0)]" : "[clip-path:inset(0_100%_0_0)]"
            }`}
          >
            <Image
              src={TRAYECTORIA_IMAGE}
              alt="Proyecto de arquitectura contemporánea de Voladizo"
              fill
              sizes="(max-width: 1340px) 100vw, 1340px"
              className={`object-cover object-[50%_60%] transition-transform duration-[2200ms] ease-out motion-reduce:transition-none motion-reduce:scale-100 ${
                visible ? "scale-100" : "scale-110"
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#141414]/80 via-transparent to-black/25" />
          </div>
        </div>

        {/* ========================================================= */}
        {/* TARJETAS (se solapan con el borde inferior de la imagen)   */}
        {/* ========================================================= */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6 -mt-10 lg:-mt-20 px-4 sm:px-8 lg:px-12">
          {cards.map((card, idx) => (
            <div
              key={card.id}
              className={`${REVEAL_BASE} ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: visible ? `${350 + idx * 150}ms` : "0ms" }}
            >
              <CardBody card={card} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CardBody({ card }: { card: TrayectoriaCard }) {
  const isAccent = card.variant === "accent";
  const isQuote = card.variant === "quote";

  const surface = isAccent
    ? "bg-brand text-[#0d0d0d] border-brand"
    : isQuote
      ? "bg-[#0d0d0d] text-white border-white/10 hover:border-brand/60"
      : "bg-[#222222] text-white border-white/10 hover:border-brand/60";

  return (
    <article
      className={`group relative h-full p-7 lg:p-9 border shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl ${surface} ${
        isQuote ? "flex flex-col items-center justify-center text-center" : ""
      }`}
    >
      {/* Número decorativo */}
      <span
        aria-hidden="true"
        className={`absolute top-4 right-5 font-oswald-bold text-5xl leading-none select-none ${
          isAccent ? "text-black/15" : "text-white/[0.07]"
        }`}
      >
        {card.number}
      </span>

      {isQuote && (
        <span
          aria-hidden="true"
          className="font-oswald-bold text-brand text-6xl leading-none h-8 select-none"
        >
          &ldquo;
        </span>
      )}

      <h3
        className={`font-oswald-bold uppercase tracking-wide text-lg lg:text-xl mb-3 flex items-center gap-3 ${
          isQuote ? "mt-2" : ""
        }`}
      >
        {!isQuote && (
          <span
            aria-hidden="true"
            className={`inline-block w-1 h-5 transition-all duration-300 group-hover:h-7 ${
              isAccent ? "bg-black" : "bg-brand"
            }`}
          />
        )}
        {card.title}
      </h3>

      {isQuote ? (
        <blockquote className="text-sm lg:text-[15px] italic font-light leading-relaxed text-neutral-300">
          &ldquo;{card.text}&rdquo;
        </blockquote>
      ) : (
        <p
          className={`text-sm lg:text-[15px] leading-relaxed ${
            isAccent ? "text-black/80 font-medium" : "text-neutral-300 font-light"
          }`}
        >
          {card.text}
        </p>
      )}
    </article>
  );
}
