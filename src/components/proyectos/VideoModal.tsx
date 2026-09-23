"use client";

import { useEffect } from "react";

interface VideoModalProps {
  /** ID de YouTube (11 caracteres). Si es null, el modal no se renderiza. */
  videoId: string | null;
  title?: string;
  onClose: () => void;
}

export default function VideoModal({ videoId, title, onClose }: VideoModalProps) {
  useEffect(() => {
    if (!videoId) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);

    // Bloquea el scroll de fondo mientras el modal está abierto
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [videoId, onClose]);

  if (!videoId) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title ? `Video: ${title}` : "Video del proyecto"}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-10 bg-black/90 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl aspect-video shadow-2xl"
        // Evita que un click dentro del reproductor cierre el modal (solo el fondo lo cierra)
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar video"
          className="absolute -top-11 right-0 sm:-top-12 sm:-right-1 w-9 h-9 flex items-center justify-center text-white/80 hover:text-brand transition-colors cursor-pointer"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.7} viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <iframe
          key={videoId}
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title ?? "Video del proyecto"}
          className="absolute inset-0 w-full h-full border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}
