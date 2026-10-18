import { resolveMediaUrl, type ApiProjectItem, type ApiProjectDetail } from "@/lib/api";
import { type Proyecto, type CategoriaProyecto } from "@/features/proyectos/data";

/**
 * Convierte un item de proyecto de la API al tipo Proyecto de la interfaz
 */
export function apiProjectToProyecto(apiItem: ApiProjectItem): Proyecto {
  const catSlug = apiItem.category_slug === "oficina" ? "oficinas" : apiItem.category_slug;
  return {
    slug: apiItem.slug,
    titulo: apiItem.title,
    categoria: (catSlug as CategoriaProyecto) || "residencial",
    locacion: apiItem.location || undefined,
    descripcion: apiItem.excerpt || undefined,
    ejecucion: apiItem.execution_percentage ? `${apiItem.execution_percentage}%` : undefined,
    anio: apiItem.year || undefined,
    imagen: resolveMediaUrl(apiItem.cover_url) || "/images/inicio/servicios/servicio1/servicio_disenio.png",
  };
}

/**
 * Convierte el detalle completo de un proyecto de la API al tipo Proyecto con fases interactivas
 */
export function apiDetailToProyecto(detail: ApiProjectDetail): Proyecto {
  const phases = detail.phases || [];
  const phase1 = phases[0];
  const phase2 = phases[1];
  const catSlug = detail.category_slug === "oficina" ? "oficinas" : detail.category_slug;

  return {
    slug: detail.slug,
    titulo: detail.title,
    categoria: (catSlug as CategoriaProyecto) || "residencial",
    locacion: detail.location || undefined,
    descripcion: detail.description ? detail.description.replace(/<[^>]*>?/gm, "").trim() : detail.excerpt,
    ejecucion: detail.execution_percentage ? `${detail.execution_percentage}%` : undefined,
    anio: detail.year || undefined,
    imagen: resolveMediaUrl(detail.cover_url) || "/images/inicio/servicios/servicio1/servicio_disenio.png",
    comparacion: (phase1 && phase2) ? {
      antesLabel: phase1.title || "Proceso de Ejecución",
      antesImagen: resolveMediaUrl(phase1.image_url) || "",
      despuesLabel: phase2.title || "Realidad",
      despuesImagen: resolveMediaUrl(phase2.image_url) || "",
    } : undefined,
    galeria: phases.map((p, idx) => ({
      etiqueta: (p.title || (idx === 0 ? "FASE INICIAL" : `FASE 0${idx + 1}`)).toUpperCase(),
      fase: p.title || `FASE 0${idx + 1}`,
      imagen: resolveMediaUrl(p.image_url) || "",
      descripcion: p.content ? p.content.replace(/<[^>]*>?/gm, "").trim() : "",
    })),
    videoId: detail.video
      ? (parseYoutubeId(detail.video.embed_url) || parseYoutubeId(detail.video.url))
      : undefined,
  };
}

function parseYoutubeId(val: string | null | undefined): string | undefined {
  if (!val) return undefined;
  const trimmed = val.trim();
  if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) return trimmed;
  const match = trimmed.match(/(?:embed\/|v=|youtu\.be\/|\/v\/|\/e\/|watch\?v=)([\w-]{11})/);
  return match ? match[1] : undefined;
}
