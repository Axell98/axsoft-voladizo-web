"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Marca `visible` como true la primera vez que el elemento entra en pantalla.
 * Sirve para disparar animaciones de entrada al hacer scroll.
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -8% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

type RevealFrom = "up" | "left" | "right";

// Clases base de la animación de entrada (respeta prefers-reduced-motion)
export const REVEAL_BASE =
  "transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-x-0 motion-reduce:translate-y-0";

const REVEAL_HIDDEN: Record<RevealFrom, string> = {
  up: "opacity-0 translate-y-10",
  left: "opacity-0 -translate-x-10",
  right: "opacity-0 translate-x-10",
};

/**
 * className + style para animar la entrada de un elemento cuando `visible` pasa a true.
 * Si el elemento tiene efectos hover, aplícalo a un contenedor y no al elemento con hover
 * (el `transitionDelay` también retrasaría el hover).
 */
export function revealProps(visible: boolean, delay = 0, from: RevealFrom = "up") {
  return {
    className: `${REVEAL_BASE} ${visible ? "opacity-100 translate-x-0 translate-y-0" : REVEAL_HIDDEN[from]}`,
    style: { transitionDelay: visible ? `${delay}ms` : "0ms" },
  };
}
