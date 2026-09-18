"use client";

import { useState } from "react";

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [selectedPlan, setSelectedPlan] = useState<string>("Negocio Pro");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    telefono: "",
    tipoWeb: "Landing Page Express",
    mensaje: "",
  });

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const faqs = [
    {
      q: "¿Cuánto tiempo demora la entrega de una página web?",
      a: "Una Landing Page suele estar lista en 3 a 5 días hábiles. Un sitio web corporativo completo toma entre 7 a 12 días, y un e-commerce o desarrollo a medida de 2 a 3 semanas.",
    },
    {
      q: "¿El pago es único o mensual?",
      a: "El diseño y desarrollo es un pago único. No cobramos mensualidades forzosas. Solo necesitarás renovar anualmente tu dominio y hosting estándar (que incluimos 100% gratis el primer año).",
    },
    {
      q: "¿Podré editar los textos e imágenes yo mismo?",
      a: "Sí, totalmente. Te entregamos un panel autoadministrable intuitivo y una breve capacitación para que puedas modificar textos, precios, fotos o productos sin tocar código.",
    },
    {
      q: "¿Incluye optimización para aparecer en Google (SEO)?",
      a: "Todos nuestros sitios vienen optimizados con buenas prácticas de SEO técnico: velocidad de carga extrema, metadatos, indexación en Google Search Console y estructura semántica para posicionamiento local.",
    },
    {
      q: "¿Cómo es el proceso de pago?",
      a: "Trabajamos con un anticipo del 50% al iniciar el proyecto y el 50% restante una vez que revises, apruebes la web y la pongamos en vivo en tu dominio.",
    },
  ];

  const planes = [
    {
      nombre: "Landing Page Express",
      descripcion: "Ideal para campañas publicitarias (Google/Meta Ads) y captación directa de clientes.",
      precio: "$149",
      periodo: "Pago único",
      popular: false,
      caracteristicas: [
        "1 Página de alto impacto (One Page)",
        "Estructura orientada 100% a conversión",
        "Diseño responsive (Móvil, Tablet, PC)",
        "Botón flotante directo a WhatsApp",
        "Formulario de contacto a tu correo",
        "Dominio .com + Hosting por 1 año GRATIS",
        "Entrega rápida en 3 a 5 días",
      ],
    },
    {
      nombre: "Negocio Pro",
      descripcion: "La solución completa para empresas que buscan proyectar autoridad y confianza total.",
      precio: "$299",
      periodo: "Pago único",
      popular: true,
      caracteristicas: [
        "Hasta 5 Secciones (Inicio, Nosotros, Servicios, etc.)",
        "Diseño ultra premium a medida con tu marca",
        "Optimización de velocidad PageSpeed 90+",
        "Correos corporativos personalizados (@tuempresa)",
        "Integración con Google Analytics y Pixel",
        "Panel autoadministrable fácil de usar",
        "Dominio .com + Hosting SSL por 1 año GRATIS",
        "Soporte prioritario por 3 meses",
      ],
    },
    {
      nombre: "E-Commerce / Tienda",
      descripcion: "Tu sucursal digital abierta 24/7 con pasarela de pagos y catálogo ilimitado.",
      precio: "$489",
      periodo: "Pago único",
      popular: false,
      caracteristicas: [
        "Catálogo completo de productos con filtros",
        "Pasarela de pagos (Tarjetas, PayPal, Transferencias)",
        "Gestión de stock, pedidos y clientes",
        "Carrito de compras y cupones de descuento",
        "Notificaciones automáticas por WhatsApp / Email",
        "Dominio .com + Hosting de alta capacidad por 1 año",
        "Capacitación completa para subir productos",
      ],
    },
  ];

  const servicios = [
    {
      titulo: "Landing Pages de Conversión",
      desc: "Diseñadas psicológicamente para convertir visitas en llamadas, mensajes de WhatsApp y ventas inmediatas.",
      badge: "Más Solicitado",
      icon: (
        <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      titulo: "Sitios Web Corporativos",
      desc: "Presencia digital sólida para empresas que necesitan posicionar su marca, generar confianza y cerrar acuerdos comerciales.",
      badge: "Empresarial",
      icon: (
        <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      titulo: "Tiendas Online & E-Commerce",
      desc: "Vende productos las 24 horas del día con pagos seguros en línea, control de inventario y pedidos automatizados.",
      badge: "Ventas 24/7",
      icon: (
        <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
    },
    {
      titulo: "Desarrollo Web a Medida",
      desc: "Plataformas interactivas, sistemas de reservas, portales de clientes y dashboards personalizados a tus flujos.",
      badge: "Full Custom",
      icon: (
        <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
  ];

  const proyectos = [
    {
      nombre: "Aura Dental Clinic",
      categoria: "Salud & Medicina",
      resultado: "+180% agendamientos online",
      imagen: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
    },
    {
      nombre: "Velox Logistics",
      categoria: "Transporte & Corporativo",
      resultado: "Cotizaciones en tiempo real",
      imagen: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    },
    {
      nombre: "Komorebi Café & Roast",
      categoria: "Gastronomía & E-Commerce",
      resultado: "+240 pedidos mensuales",
      imagen: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80",
    },
    {
      nombre: "Novex Real Estate",
      categoria: "Bienes Raíces",
      resultado: "Portafolio de propiedades 3D",
      imagen: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-indigo-600 selection:text-white">
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-24 lg:pt-20 lg:pb-32">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-600/20 blur-[130px] pointer-events-none rounded-full" />
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-cyan-500/15 blur-[100px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-indigo-500/10 border border-indigo-500/30 text-indigo-300">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>✦ Agencia de Diseño y Desarrollo Web de Alto Rendimiento</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              No necesitas solo una página web. <br />
              <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
                Necesitas una máquina de ventas.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
              Diseñamos páginas web modernas, rápidas y elegantes para empresas y profesionales que buscan generar confianza, liderar su nicho y captar clientes todos los días.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href="#contacto"
                className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-bold bg-gradient-to-r from-indigo-500 via-indigo-600 to-cyan-500 text-white shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-95 transition-all"
              >
                Solicitar Cotización Gratis
              </a>
              <a
                href="#portafolio"
                className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-semibold bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-200 hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
              >
                <span>Ver Portafolio</span>
                <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>

            {/* Metrics */}
            <div className="pt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-slate-800/80 mt-12 text-left">
              <div className="p-3">
                <p className="text-3xl font-extrabold text-white">99.4%</p>
                <p className="text-xs text-slate-400 font-medium mt-1">Satisfacción de clientes</p>
              </div>
              <div className="p-3">
                <p className="text-3xl font-extrabold text-indigo-400">+140</p>
                <p className="text-xs text-slate-400 font-medium mt-1">Sitios web entregados</p>
              </div>
              <div className="p-3">
                <p className="text-3xl font-extrabold text-cyan-400">&lt; 1.2s</p>
                <p className="text-xs text-slate-400 font-medium mt-1">Velocidad promedio</p>
              </div>
              <div className="p-3">
                <p className="text-3xl font-extrabold text-emerald-400">100%</p>
                <p className="text-xs text-slate-400 font-medium mt-1">Móvil & Tablet ready</p>
              </div>
            </div>
          </div>

          {/* Hero Mockup Preview */}
          <div className="mt-14 relative rounded-2xl p-2 bg-gradient-to-b from-slate-700/50 via-slate-800/30 to-slate-900/10 border border-slate-700/50 shadow-2xl shadow-indigo-950/50">
            <div className="rounded-xl overflow-hidden bg-slate-950 border border-slate-800">
              <div className="h-10 bg-slate-900 px-4 flex items-center gap-2 border-b border-slate-800">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="mx-auto w-1/3 max-w-sm bg-slate-950 rounded-md py-1 px-3 text-[11px] text-slate-400 font-mono text-center truncate border border-slate-800">
                  https://tunegocio.com
                </div>
              </div>
              <div className="p-8 sm:p-12 bg-gradient-to-b from-slate-900/60 to-slate-950 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-7 space-y-4 text-left">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                    Diseño Exclusivo
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    Interfaces que cautivan y generan autoridad
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Cada elemento visual y de texto está optimizado para transmitir confianza absoluta y guiar a tu visitante a contactarte de inmediato.
                  </p>
                  <div className="flex flex-wrap gap-3 pt-2">
                    <div className="px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700 text-xs text-slate-300">
                      ⚡ 98/100 Google PageSpeed
                    </div>
                    <div className="px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700 text-xs text-slate-300">
                      🔒 Certificado SSL Seguro
                    </div>
                  </div>
                </div>
                <div className="md:col-span-5 bg-slate-900/90 rounded-xl p-5 border border-slate-800 shadow-lg space-y-4">
                  <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800 pb-3">
                    <span>Métricas en tiempo real</span>
                    <span className="text-emerald-400 font-semibold">+312% Conversión</span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div className="w-4/5 h-full bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full" />
                    </div>
                    <div className="flex justify-between text-[11px] text-slate-400">
                      <span>Tráfico desde celulares</span>
                      <span>84%</span>
                    </div>
                  </div>
                  <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-xs text-emerald-300 flex items-center gap-2">
                    <span>🟢</span> 14 nuevos leads recibidos hoy
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="py-20 bg-slate-900/40 border-t border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-widest text-indigo-400 font-bold">
              Nuestras Soluciones
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Páginas web creadas para cada objetivo
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              No usamos plantillas genéricas. Desarrollamos la herramienta exacta que tu negocio necesita para destacar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicios.map((s, idx) => (
              <div
                key={idx}
                className="group relative p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {s.icon}
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700">
                      {s.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                    {s.titulo}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center text-xs font-semibold text-indigo-400 group-hover:text-cyan-400 transition-colors">
                  <a href="#contacto">Solicitar este servicio →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFICIOS / POR QUÉ ELEGIRNOS */}
      <section id="beneficios" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs uppercase tracking-widest text-cyan-400 font-bold">
                Ventaja Competitiva
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                ¿Por qué una web profesional cambia el rumbo de tu negocio?
              </h2>
              <p className="text-slate-400 text-base leading-relaxed">
                El 75% de los consumidores juzgan la credibilidad de una empresa basándose únicamente en el diseño de su sitio web. Si tu web luce anticuada o es lenta, estás perdiendo ventas valiosas.
              </p>

              <div className="space-y-4 pt-2">
                {[
                  {
                    t: "Carga en menos de 1.5 segundos",
                    d: "Evita que el 53% de visitantes abandonen tu web antes de ver tu oferta comercial.",
                  },
                  {
                    t: "Diseñada para teléfonos móviles primero",
                    d: "Más del 80% de tus clientes navegarán desde su celular. Tu web responderá con fluidez total.",
                  },
                  {
                    t: "Optimización para aparecer en Google",
                    d: "Estructura preparada para indexar palabras clave de tu sector y ciudad.",
                  },
                  {
                    t: "Cero dependencias técnicas",
                    d: "Tú tienes el control total de tu dominio, correos y contenidos de tu web.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-3 rounded-xl bg-slate-900/40 border border-slate-800/60">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                      ✓
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">{item.t}</h4>
                      <p className="text-xs text-slate-400 mt-0.5">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-gradient-to-tr from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700/60 shadow-2xl space-y-6">
                <div className="flex items-center justify-between border-b border-slate-700/60 pb-4">
                  <span className="font-bold text-white text-lg">Garantía NovaWeb</span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300">
                    100% Sin Riesgo
                  </span>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  No publicamos el sitio hasta que estés completamente conforme con el diseño y la funcionalidad. Incluimos rondas de revisión y soporte post-lanzamiento para que nunca te sientas solo.
                </p>
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 text-xs space-y-2">
                  <div className="flex justify-between text-slate-300 font-medium">
                    <span>Dominio .com propio</span>
                    <span className="text-emerald-400">Incluido gratis x 1 año</span>
                  </div>
                  <div className="flex justify-between text-slate-300 font-medium">
                    <span>Alojamiento SSD Ultrarrápido</span>
                    <span className="text-emerald-400">Incluido gratis x 1 año</span>
                  </div>
                  <div className="flex justify-between text-slate-300 font-medium">
                    <span>Correos corporativos (@tudominio)</span>
                    <span className="text-emerald-400">Configurado</span>
                  </div>
                  <div className="flex justify-between text-slate-300 font-medium">
                    <span>Seguridad SSL (Candado verde)</span>
                    <span className="text-emerald-400">Activo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PORTAFOLIO */}
      <section id="portafolio" className="py-20 bg-slate-900/30 border-t border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs uppercase tracking-widest text-indigo-400 font-bold">
              Casos Reales
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Proyectos recientes que generan resultados
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Explora una muestra de páginas diseñadas a medida para negocios de diversos sectores.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {proyectos.map((p, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-2xl"
              >
                <div className="h-64 sm:h-72 overflow-hidden relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.imagen}
                    alt={p.nombre}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-950/80 backdrop-blur-md text-slate-200 border border-slate-700">
                      {p.categoria}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white">{p.nombre}</h3>
                      <p className="text-sm text-emerald-400 font-medium mt-1 flex items-center gap-1.5">
                        <span>📈</span> {p.resultado}
                      </p>
                    </div>
                    <a
                      href="#contacto"
                      className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 group-hover:bg-indigo-600 group-hover:text-white transition-colors"
                    >
                      ↗
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLANES Y PRECIOS */}
      <section id="planes" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-widest text-cyan-400 font-bold">
              Precios Claros y Transparentes
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Elige el plan ideal para tu empresa
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Sin costos ocultos ni letras pequeñas. Inversión inteligente para hacer crecer tu marca.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {planes.map((plan, i) => (
              <div
                key={i}
                className={`relative rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  plan.popular
                    ? "bg-slate-900 border-2 border-indigo-500 shadow-2xl shadow-indigo-500/20 lg:-translate-y-2"
                    : "bg-slate-900/50 border border-slate-800 hover:border-slate-700"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-md">
                    ★ Opción Más Elegida
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{plan.nombre}</h3>
                  <p className="text-xs text-slate-400 min-h-[36px]">{plan.descripcion}</p>

                  <div className="my-6 flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-extrabold text-white">{plan.precio}</span>
                    <span className="text-xs text-slate-400 font-medium">{plan.periodo}</span>
                  </div>

                  <div className="space-y-3 border-t border-slate-800/80 pt-6">
                    <p className="text-xs font-bold text-slate-300 uppercase tracking-wider">Incluye:</p>
                    {plan.caracteristicas.map((c, cIdx) => (
                      <div key={cIdx} className="flex items-center gap-2.5 text-xs text-slate-300">
                        <svg className="w-4 h-4 text-emerald-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{c}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8">
                  <a
                    href="#contacto"
                    onClick={() => {
                      setSelectedPlan(plan.nombre);
                      setFormData(prev => ({ ...prev, tipoWeb: plan.nombre }));
                    }}
                    className={`w-full py-3.5 rounded-xl font-bold text-sm block text-center transition-all ${
                      plan.popular
                        ? "bg-gradient-to-r from-indigo-500 to-cyan-500 text-white hover:opacity-95 shadow-lg shadow-indigo-500/25"
                        : "bg-slate-800 hover:bg-slate-700 text-white border border-slate-700"
                    }`}
                  >
                    Elegir {plan.nombre}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-slate-900/40 border-t border-slate-800/60">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-2">
            <span className="text-xs uppercase tracking-widest text-indigo-400 font-bold">
              Resolvemos Tus Dudas
            </span>
            <h2 className="text-3xl font-extrabold text-white">Preguntas Frecuentes</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-xl bg-slate-900/80 border border-slate-800 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-5 font-semibold text-white text-sm sm:text-base flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span>{faq.q}</span>
                  <span className={`text-indigo-400 font-bold transition-transform duration-200 ${openFaq === idx ? "rotate-180" : ""}`}>
                    ▼
                  </span>
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 pt-1 text-slate-400 text-sm leading-relaxed border-t border-slate-800/40">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMULARIO DE CONTACTO / COTIZACIÓN */}
      <section id="contacto" className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 blur-[100px] pointer-events-none rounded-full" />

            <div className="text-center max-w-xl mx-auto mb-10 space-y-3">
              <span className="text-xs uppercase tracking-widest text-emerald-400 font-bold">
                Cotización Rápida
              </span>
              <h2 className="text-3xl font-extrabold text-white">
                ¿Listo para lanzar tu nueva página web?
              </h2>
              <p className="text-slate-400 text-sm">
                Completa tus datos y te responderemos en menos de 2 horas con una propuesta personalizada y asesoría sin compromiso.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center text-xl font-bold">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-white">¡Mensaje Recibido con Éxito!</h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  Gracias <strong className="text-emerald-400">{formData.nombre}</strong>. Nos comunicaremos contigo al teléfono o WhatsApp <strong className="text-emerald-400">{formData.telefono}</strong> a la brevedad posible.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-4 px-6 py-2 rounded-full bg-slate-800 text-xs font-semibold text-slate-300 hover:bg-slate-700"
                >
                  Enviar otra consulta
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-2">Tu Nombre y Apellido *</label>
                    <input
                      required
                      type="text"
                      placeholder="Ej. Carlos Mendoza"
                      value={formData.nombre}
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-100 text-sm focus:border-indigo-500 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-2">Nombre de tu Negocio o Marca</label>
                    <input
                      type="text"
                      placeholder="Ej. Clínica Dental / Estudio Contable"
                      value={formData.empresa}
                      onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-100 text-sm focus:border-indigo-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-2">Teléfono / WhatsApp *</label>
                    <input
                      required
                      type="tel"
                      placeholder="Ej. +51 987 654 321"
                      value={formData.telefono}
                      onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-100 text-sm focus:border-indigo-500 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-2">Plan o Tipo de Web</label>
                    <select
                      value={formData.tipoWeb}
                      onChange={(e) => setFormData({ ...formData, tipoWeb: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-100 text-sm focus:border-indigo-500 focus:outline-none transition-colors"
                    >
                      <option value="Landing Page Express">Landing Page Express ($149)</option>
                      <option value="Negocio Pro">Sitio Negocio Pro ($299)</option>
                      <option value="E-Commerce / Tienda">Tienda Online / E-Commerce ($489)</option>
                      <option value="A Medida">Desarrollo a Medida / Personalizado</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">Cuéntanos un poco sobre tu proyecto</label>
                  <textarea
                    rows={3}
                    placeholder="¿Qué objetivo tienes? ¿Cuentas con logo o referencias de páginas que te gusten?"
                    value={formData.mensaje}
                    onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-100 text-sm focus:border-indigo-500 focus:outline-none transition-colors resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <span className="text-xs text-slate-400 flex items-center gap-1.5">
                    <span>🔒</span> Datos 100% protegidos. Sin spam.
                  </span>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-sm bg-gradient-to-r from-indigo-500 via-indigo-600 to-cyan-500 text-white shadow-xl shadow-indigo-500/25 hover:opacity-95 active:scale-95 transition-all"
                  >
                    Enviar Solicitud de Cotización
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

          </div>
  );
}
