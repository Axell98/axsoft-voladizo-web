import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { proyectos, type Proyecto } from "@/features/proyectos/data";
import ProyectoDetalleInteractivo from "@/components/proyectos/ProyectoDetalleInteractivo";
import { SITE_NAME } from "@/lib/site";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return proyectos.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const proyecto = proyectos.find((p) => p.slug === slug);

  if (!proyecto) {
    return {
      title: `Proyecto no encontrado | ${SITE_NAME}`,
    };
  }

  return {
    title: `${proyecto.titulo} | ${SITE_NAME}`,
    description:
      proyecto.descripcion ||
      `Detalle y proceso arquitectónico del proyecto ${proyecto.titulo} realizado por Voladizo.`,
  };
}

export default async function ProyectoDetallePage({ params }: PageProps) {
  const { slug } = await params;
  const proyecto = proyectos.find((p) => p.slug === slug);

  if (!proyecto) {
    notFound();
  }

  return <ProyectoDetalleInteractivo proyecto={proyecto} />;
}
