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

export interface ProyectoSlide {
  etiqueta: string;
  fase: string;
  imagen: string;
  descripcion: string;
}

export interface Proyecto {
  slug: string;
  titulo: string;
  categoria: CategoriaProyecto;
  locacion?: string;
  descripcion?: string;
  /** Avance de ejecución, ej. "100%" */
  ejecucion?: string;
  anio?: number;
  /** Imagen de portada: la que se usa en el home y como respaldo si no hay comparación. */
  imagen: string;
  /** Comparación antes/después (o render/realidad, o proceso/realidad) para la interna de proyectos. */
  comparacion?: ProyectoComparacion;
  /** Slides interactivos de la interna del proyecto (Render vs Realidad vs Detalle) */
  galeria?: ProyectoSlide[];
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
    descripcion:
      "Edificio multifamiliar en San Borja desarrollado de forma integral, desde el modelado 3D hasta la entrega final. Su fachada combina balcones en voladizo con celosías de madera y amplios ventanales que favorecen la iluminación natural. La distribución de cada departamento se optimizó para aprovechar el espacio, y la obra se ejecutó con total fidelidad al diseño proyectado.",
    ejecucion: "100%",
    anio: 2020,
    videoId: "1iUeq78m0wk",
    imagen: "/images/proyectos/proyecto1_realidad.jpg",
    comparacion: {
      antesImagen: "/images/proyectos/proyecto1_render.jpg",
      antesLabel: "Render",
      despuesImagen: "/images/proyectos/proyecto1_realidad.jpg",
      despuesLabel: "Realidad",
    },
    galeria: [
      {
        etiqueta: "RENDER",
        fase: "FASE 01: CONCEPCIÓN Y MODELADO 3D",
        imagen: "/images/proyectos/proyecto1_render.jpg",
        descripcion:
          "Desarrollo y modelado volumétrico 3D del edificio multifamiliar, integrando balcones voladizos con celosías de madera, amplios ventanales para iluminación natural y optimización de distribución espacial para cada departamento.",
      },
      {
        etiqueta: "REALIDAD",
        fase: "FASE 02: CONSTRUCCIÓN Y ENTREGA FINAL",
        imagen: "/images/proyectos/proyecto1_realidad.jpg",
        descripcion:
          "Ejecución integral de la obra con total fidelidad al diseño proyectado. Estructura antisísmica de concreto armado, carpintería de aluminio y vidrio templado, y acabados de primera calidad tanto en fachada como en áreas comunes.",
      },
    ],
  },
  {
    // Proyecto 2
    slug: "oficinas-kia",
    titulo: "Diseño de Oficinas KIA",
    categoria: "oficinas",
    locacion: "San Luis, Lima",
    ejecucion: "100%",
    anio: 2021,
    descripcion:
      "Diseño de oficinas para KIA en San Luis, pensado para reflejar la identidad y el dinamismo corporativo de la marca. Se priorizaron espacios de trabajo funcionales, ordenados y con una imagen moderna, que acompañan la operación diaria del equipo. El proyecto se concretó fiel al render original, con una ejecución completa al 100%.",
    // TODO: imagen provisional (foto real del proyecto pendiente)
    imagen: "/images/inicio/slider/slider1.jpg",
    galeria: [
      {
        etiqueta: "RENDER",
        fase: "FASE 01: CONCEPCIÓN Y MODELADO 3D",
        imagen: "/images/proyectos/KIA_ANTES.jpg",
        descripcion:
          "Modelado 3D de las oficinas KIA en San Luis, donde se definió la distribución de los ambientes, la circulación del personal y la imagen corporativa de la marca antes de iniciar la obra.",
      },
      {
        etiqueta: "REALIDAD",
        fase: "FASE 02: CONSTRUCCIÓN Y ENTREGA FINAL",
        imagen: "/images/inicio/slider/slider1.jpg",
        descripcion:
          "Ejecución de las oficinas con total fidelidad al diseño proyectado. Espacios de trabajo funcionales y ordenados, con acabados modernos que reflejan la identidad y el dinamismo de la marca.",
      },
    ],
  },
  {
    // Proyecto 3
    slug: "vivienda-unifamiliar-pucallpa",
    titulo: "Diseño y Ejecución Vivienda Unifamiliar",
    categoria: "residencial",
    locacion: "Pucallpa, Ucayali",
    descripcion:
      "Vivienda unifamiliar en Pucallpa con diseño y ejecución a cargo de Voladizo. La propuesta bioclimática responde al clima cálido de la selva, buscando confort térmico y una integración armónica con el entorno natural. Se acompañó el proyecto desde el modelado 3D hasta la obra terminada, manteniendo la fidelidad con el diseño original.",
    // TODO: imagen provisional (foto real del proyecto pendiente)
    imagen: "/images/proyectos/vivienda_unifamiliar_despues.png",
    ejecucion: "100%",
    anio: 2021,
    galeria: [
      {
        etiqueta: "RENDER",
        fase: "FASE 01: CONCEPCIÓN Y MODELADO 3D",
        imagen: "/images/proyectos/vivienda_unifamiliar_antes.png",
        descripcion:
          "Modelado 3D de la vivienda unifamiliar en Pucallpa con enfoque bioclimático, definiendo la orientación, la ventilación y la distribución de los ambientes para lograr confort térmico en el clima regional.",
      },
      {
        etiqueta: "REALIDAD",
        fase: "FASE 02: CONSTRUCCIÓN Y ENTREGA FINAL",
        imagen: "/images/proyectos/vivienda_unifamiliar_despues.png",
        descripcion:
          "Construcción de la vivienda con total fidelidad al diseño proyectado. La obra terminada logra confort térmico y una integración armónica con el entorno natural, con acabados cuidados en toda la vivienda.",
      },
    ],
  },
  {
    // Proyecto 4
    slug: "concesionario-isuzu",
    titulo: "Diseño de Concesionario Isuzu",
    categoria: "comercial",
    locacion: "San Luis, Lima",
    descripcion:
      "Diseño del concesionario Isuzu en San Luis, un showroom automotriz concebido para destacar la exhibición de los vehículos y facilitar el flujo de clientes. La propuesta equilibra una imagen comercial sólida con espacios amplios y bien iluminados. Del render a la obra construida, el resultado mantiene la esencia del diseño proyectado.",
    // TODO: imagen provisional (foto real del proyecto pendiente)
    imagen: "/images/inicio/slider/slider2.jpg",
    ejecucion: "100%",
    anio: 2022,
    galeria: [
      {
        etiqueta: "RENDER",
        fase: "FASE 01: CONCEPCIÓN Y MODELADO 3D",
        imagen: "/images/proyectos/izuzu_antes.png",
        descripcion:
          "Modelado 3D del concesionario Isuzu en San Luis, concebido como un showroom que destaca la exhibición de los vehículos y organiza el flujo de clientes dentro del local.",
      },
      {
        etiqueta: "REALIDAD",
        fase: "FASE 02: CONSTRUCCIÓN Y ENTREGA FINAL",
        imagen: "/images/proyectos/izuzu_despues.png",
        descripcion:
          "Ejecución del concesionario con total fidelidad al diseño proyectado. Un showroom amplio y bien iluminado, con una imagen comercial sólida que mantiene la esencia del render original.",
      },
    ],
  },
  {
    // Proyecto 5
    slug: "agencia-bancaria-bcp",
    titulo: "Diseño y Construcción Agencia Bancaria BCP",
    categoria: "comercial",
    locacion: "Lima, Perú",
    descripcion:
      "Diseño y construcción de una agencia bancaria BCP, con remodelación integral y acondicionamiento de los ambientes. El proyecto cumple los estrictos estándares de seguridad que exige el sector financiero, sin perder de vista la eficiencia operativa y la comodidad de clientes y colaboradores. Se muestra el proceso de ejecución frente al resultado final.",
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
    titulo: "Diseño y ejeución local La Choza de la Anconda",
    categoria: "en-ejecucion",
    anio: 2021,
    descripcion:
      "Vivienda unifamiliar actualmente en construcción, con un avance de obra del 60%. Se trabaja sobre una estructura metálica y con el personal de Voladizo en obra, siguiendo el cronograma y las especificaciones del diseño. Es una muestra del proceso constructivo que acompañamos de principio a fin.",
    ejecucion: "60%",
    imagen: "/images/proyectos/LA_CHOZA_DESPUES.jpg",
  },
  {
    // Proyecto 7
    // TODO: proyecto pendiente de información y foto real del cliente.
    slug: "proyecto-07",
    titulo: "DISEÑO Y EJECUCION PLANTA PRODUCCION AMAZON",
    categoria: "residencial",
    imagen: "/images/inicio/trayectoria/trayectoria_innovacion.jpg",
    descripcion:
      "Vivienda unifamiliar actualmente en construcción, con un avance de obra del 60%. Se trabaja sobre una estructura metálica y con el personal de Voladizo en obra, siguiendo el cronograma y las especificaciones del diseño. Es una muestra del proceso constructivo que acompañamos de principio a fin.",
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
    descripcion:
      "Diseño y ejecución de una vivienda en Quinta Doña Angélica, en Jesús María, finalizada en 2024. El proyecto aprovecha con criterio el espacio disponible en un lote de quinta, logrando ambientes funcionales, cómodos y bien ventilados. Se documenta todo el proceso, desde la ejecución en obra hasta el resultado final entregado al cliente.",
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
