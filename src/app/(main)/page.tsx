"use client";

import { useState } from "react";
import SliderPrincipal from "@/components/inicio/SliderPrincipal";
import QuienesSomosSection from "@/components/inicio/QuienesSomosSection";
import ServiciosSection from "@/components/inicio/ServiciosSection";
import EquipoSection from "@/components/inicio/EquipoSection";

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
      {/* SLIDER PRINCIPAL (ARCTIT STYLE) */}
      <SliderPrincipal />

      {/* SECCIÓN QUIÉNES SOMOS (DE WEB.HTML) */}
      <QuienesSomosSection />

      {/* SECCIÓN SERVICIOS (INTERACTIVO ARCTIT) */}
      <ServiciosSection />

      {/* SECCIÓN NUESTRO EQUIPO (DE WEB.HTML) */}
      <EquipoSection />
    

          </div>
  );
}
