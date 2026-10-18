import type { Metadata } from "next";
import ProyectosCatalogo from "@/components/proyectos/ProyectosCatalogo";
import PageBanner from "@/components/common/PageBanner";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: `Proyectos | ${SITE_NAME}`,
  description:
    "Conoce el portafolio completo de proyectos de Voladizo: diseño, construcción y remodelación de espacios residenciales, comerciales y corporativos.",
};

export default function ProyectosPage() {
  return (
    <div className="w-full bg-[#141414] text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
      {/* ========================================================= */}
      {/* BANNER INTERNO (Dinámico desde /admin/portadas)          */}
      {/* ========================================================= */}
      <PageBanner
        pageKey="proyectos"
        defaultTitle="DE LA IDEA EN RENDER A LA OBRA TERMINADA."
        defaultImage="/images/inicio/servicios/servicio1/servicio_disenio.png"
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Proyectos" },
        ]}
      />

      <ProyectosCatalogo />
    </div>
  );
}
