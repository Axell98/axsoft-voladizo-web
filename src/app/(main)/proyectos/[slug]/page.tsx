import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { proyectos, type Proyecto } from "@/features/proyectos/data";
import ProyectoDetalleInteractivo from "@/components/proyectos/ProyectoDetalleInteractivo";
import ProyectoDetalleDynamic from "@/components/proyectos/ProyectoDetalleDynamic";
import { SITE_NAME } from "@/lib/site";
import { getProjectBySlug, getProjects } from "@/lib/api";
import { apiDetailToProyecto } from "@/lib/project-mapper";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  // Slugs estáticos (hardcoded)
  const staticSlugs = proyectos.map((p) => p.slug);

  // Slugs dinámicos desde la API del backend
  let apiSlugs: string[] = [];
  try {
    const res = await getProjects({ per_page: 200 });
    if (res?.data) {
      apiSlugs = res.data.map((p) => p.slug);
    }
  } catch {
    // Si la API no está disponible durante el build, se usa solo los estáticos
    console.warn("[generateStaticParams] No se pudo obtener proyectos de la API");
  }

  // Combinar, deduplicar y añadir _fallback para rutas dinámicas post-build
  const allSlugs = [...new Set([...staticSlugs, ...apiSlugs, "_fallback"])];
  return allSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;

  if (slug === "_fallback") {
    return {
      title: `Proyecto | ${SITE_NAME}`,
      description: "Detalle del proyecto arquitectónico realizado por Voladizo.",
    };
  }

  let proyecto: Proyecto | undefined;

  try {
    const apiDetail = await getProjectBySlug(slug);
    if (apiDetail) {
      proyecto = apiDetailToProyecto(apiDetail);
    }
  } catch {
    // fallback
  }

  if (!proyecto) {
    proyecto = proyectos.find((p) => p.slug === slug);
  }

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

  // _fallback: renderizar componente client-side que lee el slug de la URL
  if (slug === "_fallback") {
    return <ProyectoDetalleDynamic />;
  }

  let proyecto: Proyecto | undefined;

  try {
    const apiDetail = await getProjectBySlug(slug);
    if (apiDetail) {
      proyecto = apiDetailToProyecto(apiDetail);
    }
  } catch {
    // fallback
  }

  if (!proyecto) {
    proyecto = proyectos.find((p) => p.slug === slug);
  }

  if (!proyecto) {
    notFound();
  }

  return <ProyectoDetalleInteractivo proyecto={proyecto} />;
}

