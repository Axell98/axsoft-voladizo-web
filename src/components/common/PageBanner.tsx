"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getPageCover, resolveMediaUrl, type PageCoverData } from "@/lib/api";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageBannerProps {
  pageKey: string;
  defaultTitle: string;
  defaultImage: string;
  breadcrumbs: BreadcrumbItem[];
}

export default function PageBanner({
  pageKey,
  defaultTitle,
  defaultImage,
  breadcrumbs,
}: PageBannerProps) {
  const [cover, setCover] = useState<PageCoverData | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function loadCover() {
      try {
        const data = await getPageCover(pageKey);
        if (isMounted) {
          setCover(data);
          setIsReady(true);
        }
      } catch (err) {
        console.error(`[PageBanner] Error cargando portada para ${pageKey}:`, err);
        if (isMounted) setIsReady(true);
      }
    }

    loadCover();

    return () => {
      isMounted = false;
    };
  }, [pageKey]);

  // Opción 1: Si la portada está desactivada en el panel de administración, se oculta el banner por completo
  if (isReady && cover && cover.is_active === false) {
    return null;
  }

  // Si el backend tiene título personalizado, lo usa; sino, usa el default
  const title = (cover?.title && cover.title.trim().length > 0) ? cover.title : defaultTitle;

  // Si el backend tiene imagen activa, la resuelve; sino, usa la default local
  const imageUrl = cover?.image_url ? resolveMediaUrl(cover.image_url) : defaultImage;
  const isDynamicImage = !!cover?.image_url;

  return (
    <div className="relative w-full h-[450px] sm:h-[500px] lg:h-[520px] bg-neutral-950 overflow-hidden flex items-center pt-24 pb-10 select-none">
      {/* Imagen de fondo */}
      <Image
        key={imageUrl}
        src={imageUrl}
        alt={title}
        fill
        priority
        unoptimized={isDynamicImage}
        className="object-cover object-center transition-opacity duration-500"
      />

      {/* Overlay oscuro para legibilidad arquitectónica */}
      <div className="absolute inset-0 bg-black/75 z-[1]" />

      {/* Contenido enmarcado */}
      <div className="relative z-10 max-w-[1340px] w-full mx-auto px-6 sm:px-12 lg:px-16 xl:px-20">
        <div className="wt-bnr-inr-entry">
          {/* MARCO ARQUITECTÓNICO C-SHAPE */}
          <div className="relative py-10 sm:py-14 pl-6 sm:pl-8 border-t-[8px] sm:border-t-[10px] border-b-[8px] sm:border-b-[10px] border-l-[8px] sm:border-l-[10px] border-white w-[160px] sm:w-[220px] mb-8 after:content-[''] after:absolute after:right-0 after:top-0 after:w-[8px] sm:after:w-[10px] after:h-[35px] sm:after:h-[45px] after:bg-white before:content-[''] before:absolute before:right-0 before:bottom-0 before:w-[8px] sm:before:w-[10px] before:h-[35px] sm:before:h-[45px] before:bg-white">
            <div className="w-[280px] sm:w-[480px] md:w-[600px] lg:w-[680px]">
              <h1 className="text-white text-base sm:text-lg md:text-xl font-light uppercase tracking-[4px] sm:tracking-[5px] leading-relaxed">
                {title}
              </h1>
            </div>
          </div>

          {/* BREADCRUMB ROW */}
          <div className="text-white text-xs sm:text-sm font-medium tracking-[2px]">
            {breadcrumbs.map((bc, idx) => {
              const isLast = idx === breadcrumbs.length - 1;
              return (
                <span key={idx} className="inline-flex items-center">
                  {idx > 0 && <span className="mx-2 text-white/80">»</span>}
                  {bc.href && !isLast ? (
                    <Link href={bc.href} className="hover:text-neutral-300 transition-colors">
                      {bc.label}
                    </Link>
                  ) : (
                    <span className={isLast ? "text-brand" : "text-white"}>
                      {bc.label}
                    </span>
                  )}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
