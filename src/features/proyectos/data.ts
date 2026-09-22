export type CategoriaProyecto = "residencial" | "comercial" | "en-ejecucion";

export const CATEGORIAS: Record<CategoriaProyecto, string> = {
  residencial: "Residencial",
  comercial: "Comercial",
  "en-ejecucion": "En ejecución",
};

export interface Proyecto {
  slug: string;
  titulo: string;
  categoria: CategoriaProyecto;
  locacion?: string;
  /** Avance de ejecución, ej. "100%" */
  ejecucion?: string;
  anio?: number;
  /** Imagen principal (render en los proyectos que tienen comparativa) */
  imagen: string;
  /** Foto de la obra terminada, si existe */
  imagenRealidad?: string;
}

// TODO: total real de proyectos del brochure (11). Cuando estén todos cargados en `proyectos`,
// reemplazar por `proyectos.length`.
export const TOTAL_PROYECTOS = 11;

// TODO: completar los proyectos restantes del brochure y reemplazar las imágenes provisionales.
export const proyectos: Proyecto[] = [
  {
    slug: "edificio-multifamiliar-san-borja",
    titulo: "Diseño Edificio Multifamiliar",
    categoria: "residencial",
    locacion: "San Borja, Lima",
    ejecucion: "100%",
    anio: 2020,
    // Provisionales: usar el render y la foto real del edificio
    imagen: "/images/inicio/servicios/servicio1/1.jpg",
    imagenRealidad: "/images/inicio/servicios/servicio1/3.jpg",
  },
  {
    slug: "oficinas-kia",
    titulo: "Diseño de oficinas KIA",
    categoria: "comercial",
    imagen: "/images/inicio/slider/slider1.jpg",
  },
  {
    slug: "concesionario-isuzu",
    titulo: "Diseño de Concesionario Isuzu",
    categoria: "comercial",
    imagen: "/images/inicio/slider/slider2.jpg",
  },
];
