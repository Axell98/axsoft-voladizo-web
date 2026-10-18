import type { Metadata } from "next";
import ContactoSection from "@/components/contacto/ContactoSection";
import UbicacionSection from "@/components/contacto/UbicacionSection";
import PageBanner from "@/components/common/PageBanner";
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
      {/* BANNER INTERNO (Dinámico desde /admin/portadas)          */}
      {/* ========================================================= */}
      <PageBanner
        pageKey="contacto"
        defaultTitle="ESTAMOS LISTOS PARA ESCUCHAR TU IDEA."
        defaultImage="/images/inicio/servicios/servicio2/1.jpg"
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Contacto" },
        ]}
      />

      <ContactoSection />
      <UbicacionSection />
    </div>
  );
}
