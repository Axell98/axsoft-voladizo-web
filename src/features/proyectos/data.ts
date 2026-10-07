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
    slug: "diseno-y-ejecucion-local-la-choza-de-la-anaconda",
    titulo: "Diseño y Ejecución Local La Choza de la Anaconda",
    categoria: "comercial",
    locacion: "Los Olivos, Lima",
    ejecucion: "100%",
    anio: 2021,
    descripcion:
      "Diseño y ejecución integral del local gastronómico La Choza de la Anaconda en Los Olivos, Lima. El proyecto abarcó desde la adecuación estructural y montaje de instalaciones hasta los acabados comerciales de alto impacto, integrando iluminación cálida, revestimientos de madera y áreas de servicio optimizadas para una operación eficiente.",
    imagen: "/images/proyectos/LA_CHOZA_DESPUES.jpg",
    comparacion: {
      antesImagen: "/images/proyectos/LA_CHOZA_DESPUES.jpg",
      antesLabel: "Proceso de Ejecución",
      despuesImagen: "/images/proyectos/LA_CHOZA_DESPUES.jpg",
      despuesLabel: "Realidad",
    },
    galeria: [
      {
        etiqueta: "PROCESO DE EJECUCIÓN",
        fase: "FASE 01: MONTAJE Y ESTRUCTURA",
        imagen: "/images/proyectos/LA_CHOZA_DESPUES.jpg",
        descripcion:
          "Adecuación estructural, montaje de redes e instalaciones y habilitación general del local en obra.",
      },
      {
        etiqueta: "REALIDAD",
        fase: "FASE 02: ACABADOS Y ENTREGA FINAL",
        imagen: "/images/proyectos/LA_CHOZA_DESPUES.jpg",
        descripcion:
          "Local gastronómico concluido al 100%: mostrador de madera iluminado, barra de atención y ambientación de marca.",
      },
    ],
  },
  {
    // Proyecto 6
    slug: "diseno-y-ejecucion-planta-produccion-amazon",
    titulo: "Diseño y Ejecución Planta Producción Amazon",
    categoria: "comercial",
    locacion: "Mala, Lima",
    ejecucion: "100%",
    anio: 2022,
    imagen: "/images/proyectos/amazon_despues.jpg",
    descripcion:
      "Diseño y ejecución integral de la planta de producción Amazon en Mala, Lima. Desarrollada con un enfoque de máxima eficiencia operativa, seguridad y durabilidad industrial, optimizando la nave de producción, accesos y áreas técnicas con acabados de alto impacto.",
    comparacion: {
      antesImagen: "/images/proyectos/amazon_antes.png",
      antesLabel: "Proceso de Ejecución",
      despuesImagen: "/images/proyectos/amazon_despues.jpg",
      despuesLabel: "Realidad",
    },
    galeria: [
      {
        etiqueta: "PROCESO DE EJECUCIÓN",
        fase: "FASE 01: MONTAJE Y ESTRUCTURA",
        imagen: "/images/proyectos/amazon_antes.png",
        descripcion:
          "Montaje de estructuras metálicas, cerramientos, pasarelas técnicas y habilitación integral de la nave en obra.",
      },
      {
        etiqueta: "REALIDAD",
        fase: "FASE 02: ACABADOS Y ENTREGA FINAL",
        imagen: "/images/proyectos/amazon_despues.jpg",
        descripcion:
          "Planta de producción ejecutada al 100%, con fachada industrial en color corporativo negro y verde, balcón técnico superior y accesos operativos listos.",
      },
    ],
  },
  {
    // Proyecto 7
    slug: "diseno-y-ejecucion-casa-de-campo-familia-paredes",
    titulo: "Diseño y Ejecución de Casa de Campo Familia Paredes",
    categoria: "residencial",
    locacion: "Cañete, Lima",
    ejecucion: "100% Prefabricado",
    anio: 2023,
    imagen: "/images/proyectos/campo_familia_paredes_despues.jpeg",
    descripcion:
      "Diseño y ejecución integral de casa de campo para la familia Paredes en Cañete, Lima. Desarrollada mediante un sistema constructivo prefabricado de alta eficiencia y sostenibilidad, optimizando los tiempos de obra y garantizando un excelente confort térmico e integración con el entorno natural.",
    comparacion: {
      antesImagen: "/images/proyectos/campo_familia_paredes_antes.jpeg",
      antesLabel: "Proceso de Ejecución",
      despuesImagen: "/images/proyectos/campo_familia_paredes_despues.jpeg",
      despuesLabel: "Realidad",
    },
    galeria: [
      {
        etiqueta: "PROCESO DE EJECUCIÓN",
        fase: "FASE 01: ESTRUCTURA Y MONTAJE",
        imagen: "/images/proyectos/campo_familia_paredes_antes.jpeg",
        descripcion:
          "Montaje de estructura prefabricada, cerramientos exteriores y habilitación de los dos niveles en obra.",
      },
      {
        etiqueta: "REALIDAD",
        fase: "FASE 02: ACABADOS Y ENTREGA FINAL",
        imagen: "/images/proyectos/campo_familia_paredes_despues.jpeg",
        descripcion:
          "Casa de campo concluida al 100%: amplias mamparas de vidrio, balcón superior, jardín y armonía con el paisaje campestre.",
      },
    ],
  },
  {
    // Proyecto 8
    slug: "diseno-y-ejecucion-departamento-lince",
    titulo: "Diseño y Ejecución Departamento Lince",
    categoria: "residencial",
    locacion: "Lince, Lima",
    ejecucion: "100%",
    anio: 2024,
    imagen: "/images/proyectos/linkce_despues.jpeg",
    descripcion:
      "Diseño y ejecución integral de departamento en Lince, Lima. Se optimizó cada metro cuadrado mediante una distribución contemporánea y mobiliario a medida, integrando centro de entretenimiento, iluminación técnica y cocina abierta en un ambiente sofisticado y altamente funcional.",
    comparacion: {
      antesImagen: "/images/proyectos/linkce_antes.jpeg",
      antesLabel: "Proceso de Ejecución",
      despuesImagen: "/images/proyectos/linkce_despues.jpeg",
      despuesLabel: "Realidad",
    },
    galeria: [
      {
        etiqueta: "PROCESO DE EJECUCIÓN",
        fase: "FASE 01: INSTALACIONES Y OBRA INTERIOR",
        imagen: "/images/proyectos/linkce_antes.jpeg",
        descripcion:
          "Adecuación de rieles de iluminación, cableado estructurado y preparación de pisos y muros.",
      },
      {
        etiqueta: "REALIDAD",
        fase: "FASE 02: MOBILIARIO Y ENTREGA FINAL",
        imagen: "/images/proyectos/linkce_despues.jpeg",
        descripcion:
          "Departamento terminado al 100%: centro de entretenimiento con madera cálida, iluminación LED focal y cocina integrada.",
      },
    ],
  },
  {
    // Proyecto 9
    slug: "diseno-y-ejecucion-vivienda-en-quinta-dona-angelica",
    titulo: "Diseño y Ejecución Vivienda en Quinta Doña Angélica",
    categoria: "residencial",
    locacion: "Jesús María, Lima",
    ejecucion: "100%",
    anio: 2024,
    imagen: "/images/proyectos/quinta_angelica_despues.jpeg",
    descripcion:
      "Diseño y ejecución integral de una vivienda unifamiliar en Quinta Doña Angélica, Jesús María. Se optimizó el espacio disponible logrando una distribución funcional, moderna y con excelente ventilación e iluminación natural.",
    comparacion: {
      antesImagen: "/images/proyectos/quinta_angelica_antes.jpeg",
      antesLabel: "Proceso de Ejecución",
      despuesImagen: "/images/proyectos/quinta_angelica_despues.jpeg",
      despuesLabel: "Realidad",
    },
    galeria: [
      {
        etiqueta: "PROCESO DE EJECUCIÓN",
        fase: "FASE 01: EJECUCIÓN Y MONTAJE",
        imagen: "/images/proyectos/quinta_angelica_antes.jpeg",
        descripcion:
          "Proceso constructivo y adecuación estructural en obra, habilitando muros, instalaciones y distribución interior.",
      },
      {
        etiqueta: "REALIDAD",
        fase: "FASE 02: ACABADOS Y ENTREGA FINAL",
        imagen: "/images/proyectos/quinta_angelica_despues.jpeg",
        descripcion:
          "Vivienda finalizada al 100% con acabados de calidad superior, integración lumínica y confort habitacional completo.",
      },
    ],
  },
  {
    // Proyecto 10
    slug: "diseno-y-remodelacion-oficinas-chocopro",
    titulo: "Diseño y Remodelación Oficinas Chocopro",
    categoria: "comercial",
    locacion: "San Isidro, Lima",
    ejecucion: "100%",
    anio: 2025,
    imagen: "/images/proyectos/chocopro_despues.png",
    descripcion:
      "Diseño y remodelación de las oficinas corporativas Chocopro en San Isidro, Lima. Se replanteó integralmente el espacio para crear un kitchenette y comedor de vanguardia, integrando isla central con iluminación LED perimetral, muebles de alto brillo y paneles acanalados.",
    comparacion: {
      antesImagen: "/images/proyectos/chocopro_antes.png",
      antesLabel: "Proceso de Ejecución",
      despuesImagen: "/images/proyectos/chocopro_despues.png",
      despuesLabel: "Realidad",
    },
    galeria: [
      {
        etiqueta: "PROCESO DE EJECUCIÓN",
        fase: "FASE 01: MONTAJE Y ADECUACIÓN EN OBRA",
        imagen: "/images/proyectos/chocopro_antes.png",
        descripcion:
          "Estado inicial y desmontaje de muros, nivelación de superficies e instalación de perfiles metálicos y redes técnicas.",
      },
      {
        etiqueta: "REALIDAD",
        fase: "FASE 02: ACABADOS Y ENTREGA FINAL",
        imagen: "/images/proyectos/chocopro_despues.png",
        descripcion:
          "Kitchenette corporativo terminado al 100%: isla en mármol con luz cálida inferior, muebles blancos y rieles de iluminación en techo.",
      },
    ],
  },

  {
    // Proyecto 11
    slug: "diseno-y-remodelacion-kitchenette",
    titulo: "Diseño y Remodelación Kitchenette",
    categoria: "residencial",
    ejecucion: "100%",
    anio: 2025,
    descripcion:
      "Diseño y remodelación integral de kitchenette residencial, optimizando el espacio con una distribución moderna, ergonómica y de alta funcionalidad. Se renovaron completamente los acabados, incorporando muebles en tono verde salvia y blanco, iluminación LED bajo reposteros y encimeras de cuarzo.",
    imagen: "/images/proyectos/KITCHENNETTE_despues.png",
    comparacion: {
      antesImagen: "/images/proyectos/KITCHENNETTE_antes.jpg",
      antesLabel: "Proceso de Ejecución",
      despuesImagen: "/images/proyectos/KITCHENNETTE_despues.png",
      despuesLabel: "Realidad",
    },
    galeria: [
      {
        etiqueta: "PROCESO DE EJECUCIÓN",
        fase: "FASE 01: ESTADO INICIAL Y DESMONTAJE",
        imagen: "/images/proyectos/KITCHENNETTE_antes.jpg",
        descripcion:
          "Estado previo a la intervención: mobiliario tradicional e instalaciones antiguas que requerían renovación funcional y estética.",
      },
      {
        etiqueta: "REALIDAD",
        fase: "FASE 02: ACABADOS Y ENTREGA FINAL",
        imagen: "/images/proyectos/KITCHENNETTE_despues.png",
        descripcion:
          "Kitchenette moderno terminado al 100%: iluminación LED cálida, combinación cromática elegante y máxima optimización de almacenamiento.",
      },
    ],
  },
];

export const TOTAL_PROYECTOS = proyectos.length;
