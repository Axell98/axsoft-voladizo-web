"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { getBanners, resolveMediaUrl } from "@/lib/api";

export interface SlideItem {
  id: number;
  number: string;
  meta: string[];
  title: string;
  href: string;
  image: string;
  overlay?: number;
  type?: "image" | "video" | "youtube";
  embed_url?: string | null;
  video_url?: string | null;
}

export const defaultArctitSlides: SlideItem[] = [
  {
    id: 1,
    number: "01",
    meta: ["Diseño", "Arquitectura"],
    title: "Creamos espacios con caracter corporativo.",
    href: "/proyectos",
    image: "/images/inicio/slider/planta_amazon.jpg",
    overlay: 5,
  },
  {
    id: 2,
    number: "02",
    meta: ["Oficina", "Arquitectura"],
    title: "Arquitectura que representa tu marca.",
    href: "/proyectos",
    image: "/images/inicio/slider/slider2.jpg",
    overlay: 5,
  },
];

interface SliderPrincipalProps {
  slides?: SlideItem[];
  autoPlayInterval?: number;
}

export default function SliderPrincipal({
  slides: initialSlides = defaultArctitSlides,
  autoPlayInterval = 6500,
}: SliderPrincipalProps) {
  const [slides, setSlides] = useState<SlideItem[]>(initialSlides);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = slides.length;

  const isAnimatingRef = useRef(false);
  const activeIndexRef = useRef(0);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const touchStartX = useRef<number | null>(null);

  // Control de audio para videos de YouTube y archivos de video
  const [isMuted, setIsMuted] = useState(true);
  const iframeRefs = useRef<(HTMLIFrameElement | null)[]>([]);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const toggleAudio = () => {
    const currentSlide = slides[activeIndex];
    if (currentSlide?.type === "youtube") {
      const iframe = iframeRefs.current[activeIndex];
      if (iframe && iframe.contentWindow) {
        if (isMuted) {
          iframe.contentWindow.postMessage(
            JSON.stringify({ event: "command", func: "unMute", args: [] }),
            "*"
          );
          iframe.contentWindow.postMessage(
            JSON.stringify({ event: "command", func: "setVolume", args: [100] }),
            "*"
          );
          setIsMuted(false);
        } else {
          iframe.contentWindow.postMessage(
            JSON.stringify({ event: "command", func: "mute", args: [] }),
            "*"
          );
          setIsMuted(true);
        }
      }
    } else if (currentSlide?.type === "video") {
      const video = videoRefs.current[activeIndex];
      if (video) {
        video.muted = !video.muted;
        setIsMuted(video.muted);
      }
    }
  };

  // Carga dinámica desde la API de Laravel
  useEffect(() => {
    async function loadBanners() {
      try {
        const data = await getBanners();
        if (data && data.slides && data.slides.length > 0) {
          const mappedSlides: SlideItem[] = data.slides.map((s, idx) => {
            const rawUrl = s.url || s.image_url || "";
            const imageUrl = s.thumbnail_url || (rawUrl ? resolveMediaUrl(rawUrl) : defaultArctitSlides[idx % defaultArctitSlides.length]?.image || "");

            const metaParts = s.description
              ? s.description.split(/[,|]/).map((m) => m.trim()).filter(Boolean)
              : [];

            return {
              id: idx + 1,
              number: String(idx + 1).padStart(2, "0"),
              meta: metaParts,
              title: s.title || "",
              href: s.link_url || "/proyectos",
              image: imageUrl,
              overlay: 5,
              type: s.type || "image",
              embed_url: s.embed_url || null,
              video_url: rawUrl ? resolveMediaUrl(rawUrl) : null,
            };
          });
          setSlides(mappedSlides);
          setActiveIndex(0);
        }
      } catch (err) {
        console.warn("[SliderPrincipal] Error al cargar banners dinámicos, usando fallback:", err);
      }
    }

    loadBanners();
  }, []);

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  // Transición exacta con GSAP letra por letra (stagger con back.in / back.out)
  const goToSlide = useCallback(
    (targetIndex: number, direction: "next" | "prev" = "next") => {
      const currentIdx = activeIndexRef.current;
      if (currentIdx === targetIndex || isAnimatingRef.current) return;

      isAnimatingRef.current = true;
      const isRight = direction === "prev";

      const oldContent = contentRefs.current[currentIdx];
      const newContent = contentRefs.current[targetIndex];

      const oldChars = oldContent?.querySelectorAll<HTMLElement>(".dsn-chars-wrapper");
      const oldMetas = oldContent?.querySelector<HTMLElement>(".metas");
      const newChars = newContent?.querySelectorAll<HTMLElement>(".dsn-chars-wrapper");
      const newMetas = newContent?.querySelector<HTMLElement>(".metas");

      const tl = gsap.timeline({
        onComplete: () => {
          isAnimatingRef.current = false;
        },
      });

      // 1. Salida de letras antiguas con back.in (idéntico a Arctit / custom.js)
      if (oldChars && oldChars.length > 0) {
        const charArray = Array.from(oldChars);
        const staggerList = isRight ? [...charArray].reverse() : charArray;

        tl.to(
          staggerList,
          {
            autoAlpha: 0,
            x: isRight ? "40%" : "-40%",
            ease: "back.in(3.5)",
            duration: 0.32,
            stagger: 0.025,
          },
          0
        );
      }

      if (oldMetas) {
        tl.to(
          oldMetas,
          {
            autoAlpha: 0,
            y: isRight ? 10 : -10,
            scale: 0.85,
            duration: 0.28,
            ease: "power2.in",
          },
          0
        );
      }

      // 2. Cambio de diapositiva en el punto medio
      tl.call(
        () => {
          setActiveIndex(targetIndex);
        },
        [],
        0.28
      );

      // 3. Entrada elástica de nuevas letras (back.out)
      if (newChars && newChars.length > 0) {
        const charArray = Array.from(newChars);
        const staggerList = isRight ? [...charArray].reverse() : charArray;

        tl.fromTo(
          staggerList,
          {
            autoAlpha: 0,
            x: !isRight ? "40%" : "-40%",
            scale: 1,
          },
          {
            autoAlpha: 1,
            x: "0%",
            scale: 1,
            ease: "back.out(3.5)",
            duration: 0.72,
            stagger: 0.03,
          },
          "-=0.12"
        );
      }

      if (newMetas) {
        tl.fromTo(
          newMetas,
          {
            autoAlpha: 0,
            y: isRight ? -12 : 12,
            scale: 0.9,
          },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.65,
            ease: "back.out(2)",
          },
          "-=0.55"
        );
      }
    },
    []
  );

  const nextSlide = useCallback(() => {
    const nextIdx = (activeIndexRef.current + 1) % total;
    goToSlide(nextIdx, "next");
  }, [goToSlide, total]);

  const prevSlide = useCallback(() => {
    const prevIdx = (activeIndexRef.current - 1 + total) % total;
    goToSlide(prevIdx, "prev");
  }, [goToSlide, total]);

  useEffect(() => {
    if (total <= 1 || isPaused || autoPlayInterval <= 0) return;
    const timer = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);
    return () => clearInterval(timer);
  }, [nextSlide, isPaused, autoPlayInterval, total]);

  useEffect(() => {
    if (total <= 1) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide, total]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 45) nextSlide();
    else if (diff < -45) prevSlide();
    touchStartX.current = null;
  };

  const nextIndex = (activeIndex + 1) % total;
  const nextSlideItem = slides[nextIndex];
  const progressPercent = ((activeIndex + 1) / total) * 100;

  return (
    <div
      className="dsn-slider-global has-horizontal dsn-slider v-dark dsn-header-animation relative w-full h-[90vh] min-h-[620px] lg:h-screen lg:min-h-[720px] overflow-hidden bg-[#141414] text-white select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="dsn-root-slider content-slider relative w-full h-full overflow-hidden bg-[#141414]">
        {/* =================================================================== */}
        {/* 1. HORIZONTAL TRACK DE IMÁGENES / VIDEOS */}
        {/* =================================================================== */}
        <div className={`bg-container relative w-full ${total > 1 ? "h-[calc(100%-80px)]" : "h-full"} overflow-hidden`}>
          <div className="slide-inner h-full w-full overflow-hidden relative">
            <div
              className="swiper-wrapper flex h-full transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
              style={{
                transform: `translate3d(-${activeIndex * 100}%, 0px, 0px)`,
              }}
            >
              {slides.map((slide, idx) => {
                const isActive = idx === activeIndex;
                const offset = (idx - activeIndex) * 25;

                return (
                  <div
                    key={slide.id}
                    className="slide-item swiper-slide w-full h-full flex-shrink-0 relative overflow-hidden"
                  >
                    <div
                      className="image-bg cover-bg w-full h-full relative overflow-hidden transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
                      style={{
                        transform: `scale(${isActive ? 1 : 1.12}) translate3d(${offset}%, 0px, 0px)`,
                      }}
                    >
                      {slide.type === "youtube" && slide.embed_url ? (
                        <div className="w-full h-full relative overflow-hidden pointer-events-auto">
                          <iframe
                            ref={(el) => {
                              iframeRefs.current[idx] = el;
                            }}
                            src={`${slide.embed_url}?autoplay=1&mute=1&loop=1&playlist=${slide.embed_url.split("/").pop()}&controls=1&modestbranding=1&rel=0&enablejsapi=1`}
                            title={slide.title || "Video de portada"}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full object-cover border-0 pointer-events-auto"
                          />
                        </div>
                      ) : slide.type === "video" && slide.video_url ? (
                        <div className="w-full h-full relative overflow-hidden">
                          <video
                            ref={(el) => {
                              videoRefs.current[idx] = el;
                            }}
                            src={slide.video_url}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/40 pointer-events-none" />
                        </div>
                      ) : (
                        <>
                          <Image
                            src={slide.image}
                            alt={slide.title || "Banner Voladizo"}
                            fill
                            priority={idx === 0 || idx === 1}
                            sizes="100vw"
                            className="cover-bg-img object-cover object-center"
                          />
                          {/* data-overlay="5" (50% oscuridad cinematográfica) */}
                          <div className="absolute inset-0 bg-black/50" />
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* =================================================================== */}
        {/* 2. CAPA FLOTANTE DE TÍTULOS Y METAS (Totalmente Responsive)          */}
        <div className={`dsn-slider-content absolute inset-0 w-full ${total > 1 ? "h-[calc(100%-80px)]" : "h-full"} pointer-events-none z-10 flex flex-col justify-end pb-6 sm:pb-10 lg:pb-14 px-6 sm:px-12 lg:px-16`}>
          {slides.map((slide, idx) => {
            const isActive = idx === activeIndex;
            const words = slide.title.split(" ");

            return (
              <div
                key={slide.id}
                ref={(el) => {
                  contentRefs.current[idx] = el;
                }}
                className={`slide-content transition-opacity duration-300 max-w-full md:max-w-[62%] lg:max-w-[60%] xl:max-w-[58%] ${isActive
                    ? "dsn-active opacity-100 visible z-10 pointer-events-auto"
                    : "opacity-0 invisible z-0 pointer-events-none absolute"
                  }`}
              >
                <div className="content relative">
                  {/* Metas: OFICINA | ARQUITECTURA con separador vertical blanco */}
                  {slide.meta && slide.meta.length > 0 && (
                    <div className="metas inline-flex items-center gap-3 mb-3 sm:mb-4 lg:mb-5">
                      {slide.meta.map((m, mIdx) => (
                        <span
                          key={mIdx}
                          className="relative uppercase text-[11px] sm:text-xs lg:text-[13px] tracking-[2.5px] font-semibold text-white/90 pr-3 mr-1 last:pr-0 last:mr-0 after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:right-0 after:w-[1.5px] after:h-3.5 after:bg-white/70 last:after:hidden"
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Título adaptativo con tipografía fluida */}
                  {slide.title ? (
                    <h1 className="title line-title user-no-selection text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[64px] font-bold text-white leading-[1.12] sm:leading-[1.08] tracking-tight">
                      <Link
                        href={slide.href}
                        className="effect-ajax hover:text-neutral-200 transition-colors inline-block"
                      >
                      {words.map((word, wIdx) => (
                        <span
                          key={wIdx}
                          className="dsn-word-wrapper inline-block whitespace-pre"
                        >
                          {word.split("").map((char, cIdx) => (
                            <span
                              key={cIdx}
                              className="dsn-chars-wrapper inline-block will-change-transform"
                            >
                              {char}
                            </span>
                          ))}
                          {wIdx < words.length - 1 && (
                            <span className="dsn-whitespace inline-block">
                              &nbsp;
                            </span>
                          )}
                        </span>
                      ))}
                    </Link>
                  </h1>
                ) : null}
              </div>
              </div>
            );
          })}
        </div>

        {/* =================================================================== */}
        {/* 3. BARRA INFERIOR CONTINUA (80px fondo oscuro #141414)              */}
        {/* =================================================================== */}
        {total > 1 && (
          <div className="bottom-bar-strip absolute bottom-0 left-0 w-full h-[80px] bg-[#141414] border-t border-white/5 z-20 flex items-center justify-between px-6 sm:px-12 lg:px-16">
            {/* LADO IZQUIERDO: Progreso y número actual */}
            <div className="progress-nav w-[35%] sm:w-[28%] lg:w-[22%] max-w-[280px]">
              <div
                className="progress-number text-[#666666] text-xs sm:text-sm font-semibold mb-2"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                <span>{slides[activeIndex].number}</span>
              </div>
              <div className="progress-w relative w-full h-[2px] bg-[#2a2a2a] rounded-full overflow-hidden">
                <div
                  className="progress-w-affter absolute top-0 left-0 h-full bg-white transition-all duration-700 ease-out"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {/* CENTRO-DERECHA: Botones Circulares SVG (justo a la izquierda de la caja siguiente) */}
            <div className="control-nav flex items-center gap-3 mr-auto ml-12 sm:ml-20 lg:ml-28">
              {/* Botón Prev */}
              <button
                onClick={prevSlide}
                type="button"
                aria-label="Slide anterior"
                className="slider-button-prev relative w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white hover:text-neutral-300 transition-all group focus:outline-none cursor-pointer"
              >
                <svg
                  className="border-svg absolute inset-0 w-full h-full text-white/30 group-hover:text-white transition-colors group-hover:animate-spin-slow"
                  viewBox="0 0 104 104"
                >
                  <circle
                    cx="52"
                    cy="52"
                    r="48"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeDasharray="4 6 4 6"
                  />
                </svg>
                <svg
                  className="w-5 h-4 sm:w-6 sm:h-5 relative z-10 transform -rotate-180 transition-transform group-hover:-translate-x-0.5"
                  viewBox="0 0 28.214 23.057"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="square"
                >
                  <path d="M23.528 11.685h-20M16.685 19.528l8-8-8-8" />
                </svg>
              </button>

              {/* Botón Next */}
              <button
                onClick={nextSlide}
                type="button"
                aria-label="Siguiente slide"
                className="slider-button-next relative w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white hover:text-neutral-300 transition-all group focus:outline-none cursor-pointer"
              >
                <svg
                  className="border-svg absolute inset-0 w-full h-full text-white/30 group-hover:text-white transition-colors group-hover:animate-spin-slow"
                  viewBox="0 0 104 104"
                >
                  <circle
                    cx="52"
                    cy="52"
                    r="48"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeDasharray="4 6 4 6"
                  />
                </svg>
                <svg
                  className="w-5 h-4 sm:w-6 sm:h-5 relative z-10 transition-transform group-hover:translate-x-0.5"
                  viewBox="0 0 28.214 23.057"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="square"
                >
                  <path d="M23.528 11.685h-20M16.685 19.528l8-8-8-8" />
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* =================================================================== */}
        {/* 4. CAJA NEXT-SLIDE-BOX: Miniatura sobresale hacia arriba (20vh)     */}
        {/* =================================================================== */}
        {total > 1 && nextSlideItem && (
          <div
            onClick={nextSlide}
            className="next-slide-box hidden md:flex absolute right-0 bottom-0 h-[175px] lg:h-[195px] z-30 cursor-pointer group items-end"
            title="Ver siguiente proyecto"
            role="navigation"
          >
            <div className="box-next-content flex items-end h-full">
              {/* Imagen miniatura sobresale hacia arriba en el área del hero */}
              <div className="box-img w-[140px] lg:w-[170px] h-full relative overflow-hidden shadow-2xl">
                <Image
                  src={nextSlideItem.image}
                  alt={nextSlideItem.title}
                  fill
                  sizes="(max-width: 1200px) 20vw, 15vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/15 group-hover:bg-black/0 transition-colors" />
              </div>

              {/* Título e indicador 03 - CENTRAL PARK dentro de la barra de 80px */}
              <div className="box-title h-[80px] bg-[#141414] px-6 lg:px-8 flex items-center gap-2">
                <span
                  className="num text-[#666666] text-xs sm:text-sm font-semibold tracking-wider"
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                  {nextSlideItem.number} -
                </span>
                <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-[2px] text-[#73BA78] whitespace-nowrap group-hover:text-white transition-colors">
                  {nextSlideItem.title}
                </h3>
              </div>
            </div>
          </div>
        )}

        {/* =================================================================== */}
        {/* 5. BOTÓN FLOTANTE DE CONTROL DE AUDIO (Lejos del Header)            */}
        {/* =================================================================== */}
        {(slides[activeIndex]?.type === "youtube" || slides[activeIndex]?.type === "video") && (
          <button
            type="button"
            onClick={toggleAudio}
            aria-label={isMuted ? "Activar audio" : "Silenciar audio"}
            className={`absolute z-40 flex items-center gap-2.5 px-4 py-2.5 rounded-full backdrop-blur-md shadow-2xl transition-all duration-300 border cursor-pointer group ${
              total > 1 ? "bottom-24 right-6 sm:right-10" : "bottom-8 right-6 sm:bottom-10 sm:right-10"
            } ${
              isMuted
                ? "bg-black/80 hover:bg-[#73BA78] text-white hover:text-black border-white/20 hover:border-[#73BA78]"
                : "bg-[#73BA78] text-black border-[#73BA78] hover:bg-white hover:text-black hover:border-white shadow-emerald-500/20"
            }`}
          >
            {isMuted ? (
              <>
                <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                </svg>
                <span className="text-xs sm:text-[13px] font-bold uppercase tracking-wider">Activar Audio</span>
              </>
            ) : (
              <>
                <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:scale-110 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>
                <span className="text-xs sm:text-[13px] font-bold uppercase tracking-wider">Silenciar</span>
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
}
