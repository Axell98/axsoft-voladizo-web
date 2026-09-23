import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactoSection from "@/components/contacto/ContactoSection";
import UbicacionSection from "@/components/contacto/UbicacionSection";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: `Contacto | ${SITE_NAME}`,
  description:
    "Escríbenos, llámanos o visítanos. Coordina una asesoría técnica y de diseño con el equipo de Voladizo.",
};

export default function ContactoPage() {
  return (
    <div className="w-full bg-white text-black" style={{ fontFamily: "'Poppins', sans-serif" }}>
      {/* ========================================================= */}
      {/* BANNER INTERNO (mismo patrón que Quiénes Somos)           */}
      {/* ========================================================= */}
      <div className="relative w-full h-[450px] sm:h-[500px] lg:h-[520px] bg-neutral-950 overflow-hidden flex items-center pt-24 pb-10">
        <Image
          src="/images/inicio/servicios/servicio2/1.jpg"
          alt="Contacto - Voladizo"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black/75" />

        <div className="relative z-10 max-w-[1340px] w-full mx-auto px-6 sm:px-12 lg:px-16 xl:px-20">
          <div>
            {/* MARCO ARQUITECTÓNICO C-SHAPE (mismo recurso que el banner de Quiénes Somos) */}
            <div className="relative py-10 sm:py-14 pl-6 sm:pl-8 border-t-[8px] sm:border-t-[10px] border-b-[8px] sm:border-b-[10px] border-l-[8px] sm:border-l-[10px] border-white w-[160px] sm:w-[220px] mb-8 after:content-[''] after:absolute after:right-0 after:top-0 after:w-[8px] sm:after:w-[10px] after:h-[35px] sm:after:h-[45px] after:bg-white before:content-[''] before:absolute before:right-0 before:bottom-0 before:w-[8px] sm:before:w-[10px] before:h-[35px] sm:before:h-[45px] before:bg-white">
              <div className="w-[280px] sm:w-[420px] md:w-[520px]">
                <h2 className="text-white text-base sm:text-lg md:text-xl font-light uppercase tracking-[4px] sm:tracking-[5px] leading-relaxed">
                  ESTAMOS LISTOS PARA ESCUCHAR TU IDEA.
                </h2>
              </div>
            </div>

            {/* BREADCRUMB ROW */}
            <div className="text-white text-xs sm:text-sm font-medium tracking-[2px]">
              <Link href="/" className="hover:text-neutral-300 transition-colors">
                Inicio
              </Link>
              <span className="mx-2 text-white/80">»</span>
              <span className="text-brand">Contacto</span>
            </div>
          </div>
        </div>
      </div>

      <ContactoSection />
      <UbicacionSection />
    </div>
  );
}
