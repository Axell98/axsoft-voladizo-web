/**
 * Capa de Integración con la API REST del Administrador (axsoft-admin-web)
 * Documentación oficial: docs/API.md
 */

export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8085/api/v1";

// =========================================================
// 1. TIPOS DE DATOS DE LA API
// =========================================================

export interface CompanyContact {
  address: string | null;
  maps_url: string | null;
  business_hours: string | null;
  email: string | null;
  email_2: string | null;
  phone: string | null;
  whatsapp: string | null;
  whatsapp_2: string | null;
}

export interface CompanySocial {
  website: string | null;
  facebook: string | null;
  instagram: string | null;
  youtube: string | null;
  tiktok: string | null;
  linkedin: string | null;
  behance: string | null;
}

export interface CompanySeo {
  title: string | null;
  description: string | null;
}

export interface CompanyData {
  name: string;
  legal_name: string | null;
  ruc: string | null;
  slogan: string | null;
  description: string | null;
  logo_url: string | null;
  favicon_url: string | null;
  contact: CompanyContact;
  social: CompanySocial;
  seo: CompanySeo;
  updated_at: string;
}

export interface BannerSlide {
  type: "image" | "video" | "youtube";
  url?: string | null;
  embed_url?: string | null;
  thumbnail_url?: string | null;
  title?: string | null;
  description?: string | null;
  link_url?: string | null;
  image_url?: string | null;
}

export interface BannerData {
  type: "slider" | "video";
  screen_percentage: number;
  show_arrows: boolean;
  show_indicators: boolean;
  slides: BannerSlide[];
}

export interface PopupItem {
  kind: "image" | "video" | "youtube";
  url: string | null;
  embed_url: string | null;
  thumbnail_url: string | null;
}

export interface PopupData {
  type: "image" | "slider" | "video";
  title: string | null;
  show_header: boolean;
  show_border: boolean;
  link_url: string | null;
  items: PopupItem[];
  updated_at: string;
}

/**
 * Normaliza las URLs de archivos multimedia recibidas del backend
 * - Si es una URL completa (http:// o https://), la devuelve directamente
 * - Si es una ruta relativa (/storage/... o files/...), le antepone el origen configurado en NEXT_PUBLIC_API_URL
 */
export function resolveMediaUrl(url: string | null | undefined): string {
  if (!url) return "";

  // Si ya viene como URL absoluta (http:// o https://), se usa directamente
  if (
    url.startsWith("http://") ||
    url.startsWith("https://") ||
    url.startsWith("blob:") ||
    url.startsWith("data:")
  ) {
    return url;
  }

  // Si es un recurso estático local del frontend (carpeta public de Next.js)
  if (
    url.startsWith("/images/") ||
    url.startsWith("/svg/") ||
    url.startsWith("/icons/") ||
    url.startsWith("/favicon")
  ) {
    return url;
  }

  // Si viene como ruta relativa del backend (/storage/...), se antepone el origen de la API (.env)
  try {
    const apiOrigin = new URL(API_BASE_URL).origin;
    const cleanPath = url.startsWith("/") ? url : `/${url}`;
    return `${apiOrigin}${cleanPath}`;
  } catch {
    return url;
  }
}

export interface ApiProjectItem {
  slug: string;
  title: string;
  category: string | null;
  category_slug: string | null;
  location: string | null;
  execution_percentage: number | null;
  year: number | null;
  cover_url: string | null;
  excerpt: string;
}

export interface ProjectPhase {
  image_url: string | null;
  title: string | null;
  content: string | null;
}

export interface ProjectVideo {
  type: "video" | "youtube";
  url: string | null;
  embed_url: string | null;
  thumbnail_url: string | null;
}

export interface ApiProjectDetail extends ApiProjectItem {
  description: string | null;
  phases: ProjectPhase[];
  video: ProjectVideo | null;
  created_at: string;
  updated_at: string;
}

export interface ApiProjectCategory {
  name: string;
  slug: string;
  projects_count: number;
}

export interface ApiTestimonial {
  name: string;
  role: string | null;
  content: string;
  image_url: string | null;
}

export interface PaginationLinks {
  first: string | null;
  last: string | null;
  prev: string | null;
  next: string | null;
}

export interface PaginationMetaLink {
  url: string | null;
  label: string;
  page?: number | null;
  active: boolean;
}

export interface PaginationMeta {
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
  from: number | null;
  to: number | null;
  path?: string;
  links?: PaginationMetaLink[];
}

export interface ProjectsListResponse {
  data: ApiProjectItem[];
  links: PaginationLinks;
  meta: PaginationMeta;
}

// =========================================================
// 2. FUNCIÓN BASE DE CONSUMO FETCH
// =========================================================

async function fetchApi<T>(endpoint: string, options?: RequestInit): Promise<T | null> {
  try {
    const isExportBuild = process.env.NODE_ENV === "production" && typeof window === "undefined";
    const res = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...(isExportBuild ? { next: { revalidate: 60 } } : { cache: "no-store" }),
      headers: {
        Accept: "application/json",
      },
      ...options,
    });

    if (!res.ok) {
      if (res.status === 404) {
        return null;
      }
      console.warn(`[API] Error ${res.status} al consultar ${endpoint}`);
      return null;
    }

    const json = await res.json();
    return json;
  } catch (error) {
    // Si la API está apagada o inaccesible, se captura sin romper el render
    console.warn(`[API] No se pudo conectar con el endpoint ${endpoint}:`, error);
    return null;
  }
}

// =========================================================
// 3. MÉTODOS DE CONSULTA
// =========================================================

/**
 * Obtiene los datos generales de la empresa (contacto, redes, SEO)
 */
export async function getCompany(): Promise<CompanyData | null> {
  const res = await fetchApi<{ data: CompanyData }>("/company");
  return res?.data ?? null;
}

/**
 * Obtiene la configuración y slides del banner de portada
 */
export async function getBanners(): Promise<BannerData | null> {
  const res = await fetchApi<{ data: BannerData }>("/banners");
  return res?.data ?? null;
}

/**
 * Obtiene el pop-up emergente activo (o null si no hay ninguno)
 * Usa cache: "no-store" para que los cambios de visibilidad en el admin sean inmediatos
 */
export async function getPopup(): Promise<PopupData | null> {
  const res = await fetchApi<{ data: PopupData | null }>("/popup", {
    cache: "no-store",
  });
  return res?.data ?? null;
}

/**
 * Obtiene el listado paginado de proyectos
 */
export async function getProjects(params?: {
  category?: string;
  page?: number;
  per_page?: number;
}): Promise<ProjectsListResponse | null> {
  const searchParams = new URLSearchParams();
  if (params?.category) searchParams.append("category", params.category);
  if (params?.page) searchParams.append("page", String(params.page));
  if (params?.per_page) searchParams.append("per_page", String(params.per_page));

  const query = searchParams.toString();
  const endpoint = `/projects${query ? `?${query}` : ""}`;
  return fetchApi<ProjectsListResponse>(endpoint);
}

/**
 * Obtiene el detalle completo de un proyecto por su slug
 */
export async function getProjectBySlug(slug: string): Promise<ApiProjectDetail | null> {
  const res = await fetchApi<{ data: ApiProjectDetail }>(`/projects/${encodeURIComponent(slug)}`);
  return res?.data ?? null;
}

/**
 * Obtiene las categorías que tienen proyectos visibles
 */
export async function getProjectCategories(): Promise<ApiProjectCategory[] | null> {
  const res = await fetchApi<{ data: ApiProjectCategory[] }>("/project-categories");
  return res?.data ?? null;
}

/**
 * Obtiene la lista de testimonios visibles
 */
export async function getTestimonials(): Promise<ApiTestimonial[] | null> {
  const res = await fetchApi<{ data: ApiTestimonial[] }>("/testimonials");
  return res?.data ?? null;
}

// =========================================================
// PORTADAS DE PÁGINAS INTERNAS (/api/v1/covers)
// =========================================================
export interface PageCoverData {
  page: string;
  title: string | null;
  image_url: string | null;
  is_active?: boolean;
}

/**
 * Obtiene la portada activa de una página interna por su clave (ej: "quienes-somos", "proyectos", etc.)
 * Si no tiene portada activa o no existe, devuelve null para usar los valores por defecto del sitio.
 */
export async function getPageCover(page: string): Promise<PageCoverData | null> {
  const res = await fetchApi<{ data: PageCoverData | null }>(`/covers/${encodeURIComponent(page)}`, {
    cache: "no-store",
  });
  return res?.data ?? null;
}

