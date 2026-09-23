export type CategoriaProyecto = "residencial" | "comercial" | "oficinas" | "en-ejecucion";

export const CATEGORIAS: Record<CategoriaProyecto, string> = {
  residencial: "Residencial",
  comercial: "Comercial",
  oficinas: "Oficinas",
  "en-ejecucion": "En ejecución",
};

export interface ProyectoComparacion {
  antesImagen: string;
  /** Por defecto "Antes" */
  antesLabel?: string;
  despuesImagen: string;
  /** Por defecto "Después" */
  despuesLabel?: string;
}

export interface Proyecto {
  slug: string;
  titulo: string;
  categoria: CategoriaProyecto;
  locacion?: string;
  /** Avance de ejecución, ej. "100%" */
  ejecucion?: string;
  anio?: number;
  /** Imagen de portada: la que se usa en el home y como respaldo si no hay comparación. */
  imagen: string;
  /** Comparación antes/después (o render/realidad, o proceso/realidad) para la interna de proyectos. */
  comparacion?: ProyectoComparacion;
  /** ID de YouTube (los 11 caracteres, ej. "dQw4w9WgXcQ"), no la URL completa. Si existe, se muestra el botón de video. */
  videoId?: string;
}

// TODO: reemplazar cada imagen provisional (marcada abajo) por la foto o video real del
// proyecto cuando el cliente los envíe. El orden de este arreglo es el orden en que se
// muestran: el home (`ProyectosSection`) toma solo los 4 primeros; la interna (`/proyectos`)
// muestra los 11 completos.
export const proyectos: Proyecto[] = [
  {
    // Proyecto 1
    slug: "edificio-multifamiliar-san-borja",
    titulo: "Diseño Edificio Multifamiliar",
    categoria: "residencial",
    locacion: "San Borja, Lima",
    ejecucion: "100%",
    anio: 2020,
    imagen: "/images/proyectos/proyecto_01_2.jpg",
    comparacion: {
      antesImagen: "/images/inicio/servicios/servicio1/1.jpg",
      antesLabel: "Render",
      despuesImagen: "/images/inicio/servicios/servicio1/3.jpg",
      despuesLabel: "Realidad",
    },
  },
  {
    // Proyecto 2
    slug: "oficinas-kia",
    titulo: "Diseño de Oficinas KIA",
    categoria: "oficinas",
    locacion: "San Luis, Lima",
    // TODO: imagen provisional (foto real del proyecto pendiente)
    imagen: "/images/inicio/slider/slider1.jpg",
  },
  {
    // Proyecto 3
    slug: "vivienda-unifamiliar-pucallpa",
    titulo: "Diseño y Ejecución Vivienda Unifamiliar",
    // TODO: confirmar categoría con el cliente (asumida "residencial" por tratarse de una vivienda)
    categoria: "residencial",
    locacion: "Pucallpa, Ucayali",
    // TODO: imagen provisional (foto real del proyecto pendiente)
    imagen: "/images/inicio/quienes-somos/pic5.jpg",
  },
  {
    // Proyecto 4
    slug: "concesionario-isuzu",
    titulo: "Diseño de Concesionario Isuzu",
    categoria: "comercial",
    locacion: "San Luis, Lima",
    // TODO: imagen provisional (foto real del proyecto pendiente)
    imagen: "/images/inicio/slider/slider2.jpg",
  },
  {
    // Proyecto 5
    // Estas 3 fotos SÍ son reales (traen el logo de Voladizo en la ropa del personal y el
    // letrero BCP visible): exterior terminado + interior en demolición + supervisión de obra.
    // TODO: confirmar título exacto, locación y año con el cliente.
    slug: "agencia-bancaria-bcp",
    titulo: "Diseño y Construcción Agencia Bancaria BCP",
    categoria: "comercial",
    imagen: "/images/inicio/servicios/servicio1/servicio_disenio.png",
    comparacion: {
      antesImagen: "/images/inicio/servicios/servicio2/servicio_construccion.jpg",
      antesLabel: "Proceso de Ejecución",
      despuesImagen: "/images/inicio/servicios/servicio1/servicio_disenio.png",
      despuesLabel: "Realidad",
    },
  },
  {
    // Proyecto 6
    // También es una foto real de obra (estructura metálica, personal con logo Voladizo),
    // pero no tenemos una foto de la obra terminada todavía.
    // TODO: confirmar título exacto, locación, año y agregar la foto de la obra terminada.
    slug: "vivienda-en-ejecucion",
    titulo: "Vivienda Unifamiliar en Ejecución",
    categoria: "en-ejecucion",
    ejecucion: "60%",
    imagen: "/images/inicio/servicios/servicio2/servicio_construccion.png",
  },
  {
    // Proyecto 7
    // TODO: proyecto pendiente de información y foto real del cliente.
    slug: "proyecto-07",
    titulo: "Proyecto 7",
    categoria: "residencial",
    imagen: "/images/inicio/quienes-somos/pic1.jpg",
  },
  {
    // Proyecto 8
    // TODO: proyecto pendiente de información y foto real del cliente.
    // videoId es un video de muestra (charla pública de Google I/O) solo para probar que el
    // botón "Reproducir video" y el modal funcionan; reemplazar por el video real del proyecto.
    slug: "proyecto-08",
    titulo: "Proyecto 8",
    categoria: "comercial",
    imagen: "/images/inicio/quienes-somos/pic2.jpg",
    videoId: "M7lc1UVf-VE",
  },
  {
    // Proyecto 9
    slug: "vivienda-quinta-dona-angelica",
    titulo: "Diseño y Ejecución Vivienda en Quinta Doña Angélica",
    categoria: "residencial",
    locacion: "Jesús María, Lima",
    ejecucion: "100%",
    anio: 2024,
    // TODO: imágenes provisionales (fotos reales del proyecto pendientes)
    imagen: "/images/inicio/quienes-somos/after.jpg",
    comparacion: {
      antesImagen: "/images/inicio/quienes-somos/before.jpg",
      antesLabel: "Proceso de Ejecución",
      despuesImagen: "/images/inicio/quienes-somos/after.jpg",
      despuesLabel: "Realidad",
    },
  },
  {
    // Proyecto 10
    // TODO: proyecto pendiente de información y foto real del cliente.
    slug: "proyecto-10",
    titulo: "Proyecto 10",
    categoria: "oficinas",
    imagen: "/images/inicio/quienes-somos/pic3.jpg",
  },
  {
    // Proyecto 11
    // TODO: proyecto pendiente de información y foto real del cliente.
    slug: "proyecto-11",
    titulo: "Proyecto 11",
    categoria: "en-ejecucion",
    imagen: "/images/inicio/quienes-somos/pic4.jpg",
  },
];

export const TOTAL_PROYECTOS = proyectos.length;
