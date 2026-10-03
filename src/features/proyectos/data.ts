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
    slug: "diseno-edificio-multifamiliar",
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
          "Propuesta 3D del edificio multifamiliar: volúmenes blancos ordenados alrededor de una celosía vertical de madera. Los balcones en voladizo con barandas de vidrio e iluminación empotrada dan ritmo a la fachada, y las terrazas con jardineras coronan el conjunto.",
      },
      {
        etiqueta: "REALIDAD",
        fase: "FASE 02: CONSTRUCCIÓN Y ENTREGA FINAL",
        imagen: "/images/proyectos/proyecto1_realidad.jpg",
        descripcion:
          "El edificio construido conserva la composición diseñada: celosía de madera, balcones en voladizo con vidrio y amplios ventanales que llenan los departamentos de luz natural. Un ingreso sobrio, con muro de concreto y portón de madera, completa una fachada elegante.",
      },
    ],
  },
  {
    // Proyecto 2
    slug: "diseno-de-oficinas-kia",
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
          "Propuesta 3D del área de atención KIA: un ambiente cálido con paneles de madera, mostrador curvo con tres puestos de atención y el logotipo de la marca como punto focal. Una zona de espera y un frente de vidrio completan el espacio.",
      },
      {
        etiqueta: "REALIDAD",
        fase: "FASE 02: CONSTRUCCIÓN Y ENTREGA FINAL",
        imagen: "/images/inicio/slider/slider1.jpg",
        descripcion:
          "La versión final mantiene la distribución y refuerza la ambientación: logotipo retroiluminado, piso de madera y una sala de espera acogedora. Los ventanales llenan el espacio de luz natural y conectan la atención con la zona de vehículos.",
      },
    ],
  },
  {
    // Proyecto 3
    slug: "diseno-y-ejecucion-vivienda-unifamiliar",
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
          "Propuesta 3D de una vivienda de dos niveles elevada sobre columnas, que libera el nivel de acceso. Las celosías de madera filtran el sol y favorecen la ventilación, mientras el amplio ventanal aprovecha la luz natural, pensado para el clima de Pucallpa.",
      },
      {
        etiqueta: "REALIDAD",
        fase: "FASE 02: CONSTRUCCIÓN Y ENTREGA FINAL",
        imagen: "/images/proyectos/vivienda_unifamiliar_despues.png",
        descripcion:
          "La vivienda construida respeta el diseño bioclimático: volumen blanco con paramento de ladrillo, celosías de madera y un cerco de listones que aporta privacidad. Rodeada de vegetación tropical, logra confort térmico y se integra con su entorno.",
      },
    ],
  },
  {
    // Proyecto 4
    slug: "diseno-de-concesionario-isuzu",
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
          "Propuesta 3D del concesionario Isuzu: un showroom de fachada acristalada y techo curvo en rojo corporativo, pensado para exhibir los vehículos a la vista y comunicar sus servicios de venta, centro de servicios y repuestos.",
      },
      {
        etiqueta: "REALIDAD",
        fase: "FASE 02: CONSTRUCCIÓN Y ENTREGA FINAL",
        imagen: "/images/proyectos/izuzu_despues.png",
        descripcion:
          "El concesionario construido mantiene la identidad de Isuzu: techo curvo rojo, fachada de vidrio, tótems de señalización y un amplio patio de exhibición y estacionamiento que facilita el acceso y el flujo de clientes.",
      },
    ],
  },
  {
    // Proyecto 5
    slug: "diseno-y-construccion-agencia-bancaria-bcp",
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
    slug: "diseno-y-ejecucion-local-la-choza-de-la-anconda",
    titulo: "Diseño y ejeución local La Choza de la Anconda",
    categoria: "en-ejecucion",
    anio: 2021,
    descripcion:
      "Diseño y ejecución del local La Choza de la Anconda, una obra en curso con un avance del 60%. Se trabaja sobre una estructura metálica, con el personal de Voladizo en obra y siguiendo las especificaciones del diseño proyectado. El proyecto muestra el proceso constructivo que acompañamos de principio a fin.",
    ejecucion: "60%",
    imagen: "/images/proyectos/LA_CHOZA_DESPUES.jpg",
  },
  {
    // Proyecto 7
    // TODO: proyecto pendiente de información y foto real del cliente.
    slug: "diseno-y-ejecucion-planta-produccion-amazon",
    titulo: "DISEÑO Y EJECUCION PLANTA PRODUCCION AMAZON",
    categoria: "residencial",
    imagen: "/images/inicio/trayectoria/trayectoria_innovacion.jpg",
    descripcion:
      "Diseño y ejecución de una planta de producción, desarrollada con un enfoque en la funcionalidad y la eficiencia operativa. La distribución de las áreas se pensó para ordenar el flujo de trabajo y garantizar condiciones seguras para el personal. Voladizo acompañó el proyecto desde la concepción del diseño hasta la construcción de la obra.",
  },
  {
    // Proyecto 8
    // TODO: proyecto pendiente de información y foto real del cliente.
    // videoId es un video de muestra (charla pública de Google I/O) solo para probar que el
    // botón "Reproducir video" y el modal funcionan; reemplazar por el video real del proyecto.
    slug: "diseno-y-ejecucion-departamento-linkce",
    titulo: "DISEÑO Y EJECUCION DEPARTAMENTO LINKCE",
    categoria: "residencial",
    descripcion:
      "Diseño y ejecución integral de un departamento para Linkce, pensado para aprovechar al máximo cada espacio y lograr ambientes cómodos y funcionales. Se cuidó la distribución, los acabados y la coherencia estética de todo el conjunto. Voladizo se encargó tanto del diseño como de la construcción hasta la entrega final.",
    imagen: "/images/inicio/quienes-somos/pic2.jpg",
    videoId: "M7lc1UVf-VE",
  },
  {
    // Proyecto 9
    slug: "diseno-y-ejecucion-vivienda-en-quinta-dona-angelica",
    titulo: "Diseño y Ejecución Vivienda en Quinta Doña Angélica",
    categoria: "residencial",
    locacion: "Jesús María, Lima",
    descripcion:
      "Diseño y ejecución de una vivienda en Quinta Doña Angélica, en Jesús María, finalizada en 2024. El proyecto aprovecha con criterio el espacio disponible en un lote de quinta, logrando ambientes funcionales, cómodos y bien ventilados. Se documenta todo el proceso, desde la ejecución en obra hasta el resultado final entregado al cliente.",
    ejecucion: "100%",
    anio: 2024,
    // TODO: imágenes provisionales (fotos reales del proyecto pendientes)
    imagen: "/images/proyectos/RM_JESUS_MARIA_DESPUES.png",
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
    slug: "diseno-y-remodelacion-oficinas-chocopro",
    titulo: "DISEÑO Y REMODELACION OFICINAS CHOCOPRO",
    categoria: "comercial",
    descripcion:
      "Diseño y remodelación de las oficinas de Chocopro, orientado a crear espacios de trabajo ordenados, funcionales y acordes con la imagen de la empresa. Se replanteó la distribución de los ambientes para mejorar la comodidad y el desempeño diario del equipo. Voladizo estuvo a cargo del diseño y de la ejecución de la remodelación.",
    imagen: "/images/proyectos/chocopro_despues.jpg",
    ejecucion: "100%",
    anio: 2025,
    locacion: "SAN ISIDRO, LIMA",
    galeria: [
      {
        etiqueta: "RENDER",
        fase: "FASE 01: CONCEPCIÓN Y MODELADO 3D",
        imagen: "/images/proyectos/chocopro_antes.jpg",
        descripcion:
          "Estado inicial del ambiente antes de la intervención: un espacio amplio, desmontado y con las instalaciones a la vista, listo para replantear su distribución. Es el punto de partida para crear un área moderna y funcional.",
      },
      {
        etiqueta: "REALIDAD",
        fase: "FASE 02: CONSTRUCCIÓN Y ENTREGA FINAL",
        imagen: "/images/proyectos/chocopro_despues.jpg",
        descripcion:
          "Resultado final: un área de cocina y comedor de estética contemporánea, con isla central de acabado en mármol, muebles blancos de alto brillo y paneles oscuros acanalados. La iluminación LED y de rieles realza un ambiente cómodo y práctico.",
      },
    ],
  },
  {
    // Proyecto 11
    // TODO: proyecto pendiente de información y foto real del cliente.
    slug: "diseno-y-remodelacion-kitchenette",
    titulo: "DISEÑO Y REMODELACION KITCHENNETTE",
    categoria: "residencial",
    descripcion:
      "Diseño y remodelación de un kitchenette, concebido para aprovechar el espacio disponible con una distribución práctica y funcional. Se renovaron los acabados y el mobiliario para lograr un ambiente cómodo, ordenado y de fácil uso. El proyecto se completó al 100% en 2026.",
    imagen: "/images/proyectos/KITCHENNETTE_despues.png",
    ejecucion: "100%",
    anio: 2026,
  },
];

export const TOTAL_PROYECTOS = proyectos.length;
