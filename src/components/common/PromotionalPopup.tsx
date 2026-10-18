"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getPopup, resolveMediaUrl, type PopupData } from "@/lib/api";

export default function PromotionalPopup() {
  const [popup, setPopup] = useState<PopupData | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    async function checkPopup() {
      try {
        const data = await getPopup();
        if (!data || !data.items || data.items.length === 0) {
          return;
        }

        setPopup(data);
        setIsOpen(true);
      } catch (err) {
        console.error("[PromotionalPopup] Error cargando popup:", err);
      }
    }

    checkPopup();
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen || !popup || !popup.items || popup.items.length === 0) return null;

  const currentItem = popup.items[currentSlide] || popup.items[0];
  const isSlider = popup.type === "slider" && popup.items.length > 1;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % popup.items.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + popup.items.length) % popup.items.length);
  };

  const mediaUrl = resolveMediaUrl(currentItem.url);

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-sm animate-fade-in">
      <div
        className={`relative w-full max-w-[92vw] sm:max-w-2xl mx-auto bg-[#181818] text-white shadow-2xl overflow-hidden rounded-sm ${
          popup.show_border ? "border-2 border-brand" : "border border-neutral-800"
        }`}
      >
        {/* Cabecera / Título */}
        {popup.show_header && popup.title && (
          <div className="py-2.5 px-4 bg-black/95 border-b border-neutral-800 flex items-center justify-between pr-12">
            <h3
              className="text-sm sm:text-base font-bold uppercase tracking-wider text-white truncate"
              style={{ fontFamily: "'Oswald-Bold', 'Oswald', sans-serif" }}
            >
              {popup.title}
            </h3>
          </div>
        )}

        {/* Botón Cerrar */}
        <button
          type="button"
          onClick={handleClose}
          aria-label="Cerrar anuncio"
          className="absolute top-2.5 right-2.5 z-30 w-8 h-8 sm:w-9 sm:h-9 bg-black/80 hover:bg-brand hover:text-black text-white flex items-center justify-center transition-colors cursor-pointer border border-neutral-700 shadow-md"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Contenido Visual Principal (Imagen / Video / Slider) con aspecto horizontal fijo */}
        <div className="relative w-full aspect-[16/10] max-h-[75vh] bg-neutral-950 overflow-hidden flex items-center justify-center">
          {currentItem.kind === "youtube" && currentItem.embed_url ? (
            <div className="w-full h-full">
              <iframe
                src={currentItem.embed_url}
                title={popup.title || "Video promocional"}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>
          ) : currentItem.kind === "video" && currentItem.url ? (
            <video
              src={mediaUrl}
              controls
              autoPlay
              muted
              className="w-full h-full object-cover"
            />
          ) : (
            // Imagen normal o slide con object-cover
            <>
              {popup.link_url ? (
                <Link
                  href={popup.link_url}
                  target={popup.link_url.startsWith("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  onClick={handleClose}
                  className="block relative w-full h-full"
                >
                  <img
                    src={mediaUrl}
                    alt={popup.title || "Anuncio promocional"}
                    className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-[1.02]"
                  />
                </Link>
              ) : (
                <div className="relative w-full h-full">
                  <img
                    src={mediaUrl}
                    alt={popup.title || "Anuncio promocional"}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              )}
            </>
          )}

          {/* Flechas de navegación para Slider de imágenes */}
          {isSlider && (
            <>
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Slide anterior"
                className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 bg-black/75 hover:bg-brand hover:text-black text-white flex items-center justify-center transition-colors cursor-pointer border border-white/20 text-xl font-bold"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={nextSlide}
                aria-label="Siguiente slide"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 bg-black/75 hover:bg-brand hover:text-black text-white flex items-center justify-center transition-colors cursor-pointer border border-white/20 text-xl font-bold"
              >
                ›
              </button>

              {/* Indicadores de puntos */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-2 bg-black/60 px-3 py-1 rounded-full backdrop-blur-sm pointer-events-auto">
                {popup.items.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-2 transition-all cursor-pointer rounded-full ${
                      currentSlide === idx ? "w-6 bg-brand" : "w-2 bg-white/60 hover:bg-white"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Botón CTA opcional si hay link_url y no tiene encabezado */}
        {popup.link_url && !popup.show_header && (
          <div className="p-3 bg-black/90 border-t border-neutral-800 text-center">
            <Link
              href={popup.link_url}
              target={popup.link_url.startsWith("http") ? "_blank" : "_self"}
              rel="noopener noreferrer"
              onClick={handleClose}
              className="inline-block px-6 py-2 bg-brand text-black text-xs font-bold uppercase tracking-[2px] hover:bg-white transition-colors"
            >
              Ver Más Información
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
