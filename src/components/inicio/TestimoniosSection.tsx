"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";

interface TestimonialItem {
  id: number;
  name: string;
  position: string;
  image: string;
  content: string;
}

const testimonials: TestimonialItem[] = [
  {
    id: 1,
    name: "Aurelio Loret de Mola",
    position: "Gerente General Amazon Specialties",
    image: "/images/testimonials/loret.jpeg",
    content:
      "Desde el inicio entendieron nuestras necesidades y nos ayudaron a encontrar soluciones de diseño buscando el mejor equilibrio entre diseño, funcionalidad y costo.",
  },
  {
    id: 2,
    name: "Jose Carlos Montalván",
    position: "Gerente Comercial Mando",
    image: "/images/testimonials/montalvan.jpeg",
    content:
      "El resultado superó nuestras expectativas. Valoramos especialmente su capacidad para escuchar, proponer y acompañarnos durante todo el proceso de remodelación.",
  },
];

export default function TestimoniosSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(2);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  // Responsive: 1 card on mobile, 2 cards on md+
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else {
        setSlidesToShow(2);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - slidesToShow);

  const nextSlide = useCallback(() => {
    if (maxIndex === 0) return;
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    if (maxIndex === 0) return;
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Autoplay
  useEffect(() => {
    if (isPaused || maxIndex === 0) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [nextSlide, isPaused, maxIndex]);

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    touchStartX.current = null;
  };

  const totalDots = maxIndex + 1;

  return (
    <section
      id="testimonios"
      className="section-full py-20 lg:py-28 bg-white bg-repeat text-black relative z-20 overflow-hidden border-t border-neutral-200"
      style={{
        fontFamily: "'Poppins', sans-serif",
        backgroundImage: "url('/images/quienes-somos/ptn-1.png')",
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-[1340px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-20">
        
        {/* TÍTULO DE LA SECCIÓN */}
        <div className="section-head text-left mb-12 sm:mb-16">
          <span className="text-[11px] font-bold uppercase tracking-[3px] text-brand block mb-2">
            Opiniones de Clientes
          </span>
          <h2
            className="font-oswald-bold uppercase text-3xl sm:text-4xl lg:text-[42px] leading-[1.1] tracking-tight text-neutral-950"
          >
            TESTIMONIOS
          </h2>
          <div className="w-16 h-[3px] bg-black mt-4" />
        </div>

        {/* CONTENEDOR DEL CARROUSEL / SLIDER */}
        <div
          className="relative overflow-hidden w-full pb-4"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
            }}
          >
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="w-full md:w-1/2 flex-shrink-0 px-3 sm:px-4 lg:px-6"
              >
                {/* TARJETA DE TESTIMONIO (Estilo testimonial-6) */}
                <div className="testimonial-6 relative pt-4 pb-2">
                  
                  {/* FOTO CON MARCO ANGULAR EN L (ARRIBA A LA IZQUIERDA) */}
                  <div className="relative mb-4 ml-2">
                    {/* Acento angular en esquina superior izquierda */}
                    <div className="absolute -top-[4px] -left-[4px] w-[30px] h-[3px] bg-black z-10 pointer-events-none" />
                    <div className="absolute -top-[4px] -left-[4px] w-[3px] h-[30px] bg-black z-10 pointer-events-none" />

                    <div className="relative w-[80px] h-[80px] bg-neutral-200 overflow-hidden shadow-sm">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="80px"
                        className="object-cover object-center"
                      />
                    </div>
                  </div>

                  {/* BLOQUE BLANCO DE TEXTO */}
                  <div className="testimonial-text bg-white p-6 sm:p-8 shadow-[3px_3px_15px_rgba(0,0,0,0.07)] border border-neutral-100 hover:shadow-[3px_3px_20px_rgba(0,0,0,0.12)] transition-shadow duration-300">
                    
                    {/* Detalle de Nombre y Cargo */}
                    <div className="testimonial-detail mb-3">
                      <h4
                        className="testimonial-name text-base sm:text-lg font-bold uppercase tracking-wider text-black leading-snug"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        {item.name}
                      </h4>
                      <span className="testimonial-position text-xs sm:text-sm text-neutral-500 font-light block mt-0.5">
                        {item.position}
                      </span>
                    </div>

                    {/* Párrafo con Ícono de Comillas */}
                    <div className="testimonial-paragraph text-neutral-600 font-light text-xs sm:text-[13.5px] leading-relaxed pt-2">
                      <svg
                        className="w-5 h-5 text-brand mb-2 fill-current opacity-80"
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                      <p>{item.content}</p>
                    </div>

                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PAGINACIÓN DE PUNTOS RECTANGULARES (Estilo Owl-dots del template) */}
        {totalDots > 1 && (
          <div className="flex justify-center items-center gap-2.5 mt-8 sm:mt-10">
            {Array.from({ length: totalDots }).map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Ir al testimonio ${idx + 1}`}
                className={`h-2.5 transition-all duration-300 cursor-pointer ${
                  currentIndex === idx
                    ? "w-6 bg-black"
                    : "w-5 border border-black bg-transparent hover:bg-neutral-200"
                }`}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
