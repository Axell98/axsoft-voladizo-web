"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

interface SubItem {
  name: string;
  href: string;
}

interface NavItem {
  name: string;
  href: string;
  children?: SubItem[];
}

const navItems: NavItem[] = [
  { name: "Inicio", href: "/" },
  {
    name: "Quienes Somos",
    href: "/quienes-somos",
  },
  {
    name: "Servicios",
    href: "/#servicios",
    children: [
      { name: "Diseño e Ingeniería", href: "/servicios/diseno-e-ingenieria" },
      { name: "Construcción y Remodelación", href: "/#servicios" },
      { name: "Diseño Interior y Mobiliario", href: "/#servicios" },
      { name: "Gestión y Supervisión", href: "/#servicios" },
    ],
  },
  {
    name: "Proyectos",
    href: "/#proyectos",
    children: [
      { name: "Residenciales", href: "/#proyectos" },
      { name: "Comerciales", href: "/#proyectos" },
      { name: "En Ejecución", href: "/#proyectos" },
    ],
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Bloquear scroll de la página cuando el menú móvil está abierto
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  const toggleMobileSubmenu = (name: string) => {
    setOpenMobileSubmenu((prev) => (prev === name ? null : name));
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#111111]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl"
          : "bg-gradient-to-b from-black/70 via-black/25 to-transparent py-4 sm:py-5 border-b border-white/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* 1. LOGO */}
          <Link href="/" className="flex items-center gap-3 sm:gap-4 group">
            <div className="relative w-12 h-9 sm:w-16 sm:h-11 lg:w-[68px] lg:h-[46px] flex-shrink-0 transition-transform group-hover:scale-105">
              <Image
                src="/images/iconos/logo2.svg"
                alt="Voladizo Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span
              className="font-oswald-bold text-2xl sm:text-3xl tracking-[0.12em] text-white uppercase select-none font-bold"
              style={{ fontFamily: "'Oswald-Bold', 'Oswald', sans-serif" }}
            >
              VOLADIZO
            </span>
          </Link>

          {/* 2. NAVEGACIÓN DESKTOP (Alineada a la Derecha) */}
          <nav className="hidden md:flex items-center ml-auto mr-4 lg:mr-6">
            <ul className="flex items-center m-0 p-0 list-none">
              {navItems.map((item) => {
                const hasChild = Boolean(item.children && item.children.length > 0);

                return (
                  <li key={item.name} className="relative group">
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-1.5 px-3.5 py-4 text-[13px] font-semibold tracking-[2px] text-white/90 hover:text-white uppercase transition-colors"
                    >
                      <span>{item.name}</span>
                      {hasChild && (
                        <svg
                          className="w-3 h-3 text-white/60 transition-transform duration-200 group-hover:rotate-180"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      )}
                    </Link>

                    {/* SUB-MENU DROPDOWN (.sub-menu) */}
                    {hasChild && (
                      <div className="absolute left-0 top-full pt-1 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50">
                        <ul className="w-[230px] bg-[#141414]/95 backdrop-blur-md border border-white/10 shadow-2xl list-none m-0 p-0 overflow-hidden rounded-sm">
                          {item.children!.map((sub) => (
                            <li
                              key={sub.name}
                              className="border-b border-white/5 last:border-b-0"
                            >
                              <Link
                                href={sub.href}
                                className="block px-5 py-3 text-[12px] uppercase tracking-[1.5px] text-neutral-300 hover:text-white hover:bg-white/10 transition-colors"
                              >
                                {sub.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* 3. BOTÓN CONTACTO RÁPIDO (DESKTOP) */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/#contacto"
              className="inline-flex items-center justify-center px-6 py-2.5 text-[12px] font-bold uppercase tracking-[2px] text-white bg-white/10 hover:bg-white hover:text-black border border-white/20 transition-all duration-300 backdrop-blur-sm shadow-sm"
            >
              Contactar
            </Link>
          </div>

          {/* 4. BOTÓN HAMBURGUESA (MÓVIL / TABLET) */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:bg-white/10 rounded-md focus:outline-none transition-colors"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 5. MENÚ MÓVIL / SIDEBAR DRAWER (Estilo Template) */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      <aside
        className={`fixed top-0 right-0 w-[290px] h-full bg-white z-50 shadow-2xl flex flex-col justify-between transform transition-transform duration-300 ease-in-out md:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="overflow-y-auto p-6">
          {/* Header del drawer */}
          <div className="flex items-center justify-between pb-4 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <div className="relative w-11 h-8 flex-shrink-0">
                <Image
                  src="/images/iconos/logo2.svg"
                  alt="Voladizo Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span
                className="font-oswald-bold text-lg font-bold tracking-[0.12em] text-black uppercase"
                style={{ fontFamily: "'Oswald-Bold', 'Oswald', sans-serif" }}
              >
                VOLADIZO
              </span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-1.5 text-neutral-500 hover:text-black transition-colors"
              aria-label="Cerrar menú"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Lista de navegación vertical con soporte de acordeón */}
          <nav className="mt-4">
            <ul className="list-none m-0 p-0 flex flex-col">
              {navItems.map((item) => {
                const hasChild = Boolean(item.children && item.children.length > 0);
                const isOpen = openMobileSubmenu === item.name;

                return (
                  <li key={item.name} className="border-b border-gray-100">
                    <div className="flex items-center justify-between py-3">
                      <Link
                        href={item.href}
                        onClick={() => !hasChild && setMobileMenuOpen(false)}
                        className="text-[13px] font-semibold tracking-[2px] uppercase text-black hover:text-neutral-500 transition-colors"
                      >
                        {item.name}
                      </Link>

                      {hasChild && (
                        <button
                          type="button"
                          onClick={() => toggleMobileSubmenu(item.name)}
                          className="p-2 text-black hover:text-neutral-500 transition-transform"
                          aria-label={`Desplegar submenú de ${item.name}`}
                        >
                          <svg
                            className={`w-4 h-4 transition-transform duration-200 ${
                              isOpen ? "rotate-90" : ""
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </button>
                      )}
                    </div>

                    {/* Submenú en móvil */}
                    {hasChild && isOpen && (
                      <ul className="list-none m-0 pl-4 pb-2 bg-neutral-50 flex flex-col">
                        {item.children!.map((sub) => (
                          <li key={sub.name} className="py-2">
                            <Link
                              href={sub.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="text-[12px] uppercase tracking-[1px] text-neutral-700 hover:text-black transition-colors"
                            >
                              {sub.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        {/* Footer del drawer móvil */}
        <div className="p-6 border-t border-gray-100">
          <Link
            href="/#contacto"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full flex items-center justify-center py-3 text-[12px] font-bold uppercase tracking-[2px] text-white bg-black hover:bg-neutral-800 transition-colors shadow-sm"
          >
            Contactar
          </Link>
        </div>
      </aside>
    </header>
  );
}
