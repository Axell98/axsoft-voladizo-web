"use client";

import Image from "next/image";

// =========================================================
// DATOS DE EQUIPO
// =========================================================
interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  socials?: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    youtube?: string;
    instagram?: string;
  };
}

// Integrantes reales activos
const featuredLeader: TeamMember = {
  id: 1,
  name: "Arq. Renzo Alvarez",
  role: "Gerente General",
  image: "/images/inicio/equipo/gerente_general.jpg",
  socials: {
    facebook: "#",
    twitter: "#",
    linkedin: "#",
    youtube: "#",
    instagram: "#",
  },
};

const lauraMember: TeamMember = {
  id: 2,
  name: "Laura Maglia",
  role: "Jefe Comercial",
  image: "/images/inicio/equipo/personal1.jpg",
  socials: { facebook: "#", twitter: "#", linkedin: "#", youtube: "#", instagram: "#" },
};

// NOTA: Descomentar y añadir cuando el cliente envíe las fotos y datos del resto del equipo:
/*
const futureTeamMembers: TeamMember[] = [
  {
    id: 3,
    name: "Taylor Roberts",
    role: "Coordinador de Obra",
    image: "/images/inicio/equipo/pic3.jpg",
  },
  {
    id: 4,
    name: "Robert Willson",
    role: "Supervisor de Proyectos",
    image: "/images/inicio/equipo/pic4.jpg",
  },
  {
    id: 5,
    name: "Austin Evon",
    role: "Asociado de Proyectos",
    image: "/images/inicio/equipo/pic5.jpg",
  },
];
*/

export default function EquipoSection() {
  return (
    <section
      id="equipo"
      className="section-full clearfix relative z-20 overflow-hidden"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="flex flex-col lg:flex-row w-full">
        {/* ========================================================= */}
        {/* MITAD IZQUIERDA (50%): Fondo #141414 & Líder (Renzo)      */}
        {/* ========================================================= */}
        <div className="w-full lg:w-1/2 bg-[#141414] text-white py-16 sm:py-20 lg:py-24 xl:py-28 px-6 sm:px-12 lg:px-12 xl:px-16 flex justify-center lg:justify-end items-center relative overflow-hidden">
          {/* Figura geométrica anclada en la esquina */}
          <div
            aria-hidden="true"
            className="absolute -right-24 sm:-right-36 lg:-right-32 xl:-right-40 -bottom-24 sm:-bottom-32 lg:-bottom-28 xl:-bottom-30 w-[280px] sm:w-[340px] xl:w-[380px] h-[280px] sm:h-[340px] xl:h-[380px] border-[24px] sm:border-[28px] xl:border-[34px] border-white/[0.045] rotate-45 pointer-events-none"
          />

          <div className="w-full max-w-[440px] relative z-10 lg:mr-4 xl:mr-10">
            {/* Título de la sección */}
            <div className="mb-6 text-left">
              <span className="text-[11px] font-bold uppercase tracking-[3px] text-brand block">
                Conoce a
              </span>

              <h2 className="font-oswald-bold uppercase text-3xl sm:text-4xl lg:text-[42px] leading-[1.1] tracking-tight mt-4 mb-5 text-white">
                Nuestro <span className="text-brand">Equipo</span>
              </h2>
            </div>

            {/* Tarjeta de Líder Principal */}
            <div className="w-full">
              <div className="relative w-full h-[400px] sm:h-[460px] lg:h-[480px] xl:h-[500px] bg-neutral-900 overflow-hidden shadow-2xl group border border-neutral-800">
                <Image
                  src={featuredLeader.image}
                  alt={featuredLeader.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 70vw, 440px"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  priority
                />
              </div>

              {/* Información del Líder */}
              <div className="text-center pt-5 pb-2">
                <h3
                  className="text-xl sm:text-2xl font-semibold text-white tracking-wide leading-tight"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {featuredLeader.name}
                </h3>
                <p
                  className="text-neutral-300 text-sm sm:text-base mt-1 font-light"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {featuredLeader.role}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* MITAD DERECHA (50%): Fondo #f5f5f5 & Laura (Mismo diseño)  */}
        {/* ========================================================= */}
        <div className="w-full lg:w-1/2 bg-[#f5f5f5] text-black py-16 sm:py-20 lg:py-24 xl:py-28 px-6 sm:px-12 lg:px-12 xl:px-16 flex justify-center lg:justify-start items-center">
          <div className="w-full max-w-[380px] sm:max-w-[400px] lg:max-w-[420px] lg:ml-6 xl:ml-12 flex flex-col items-center">
            {/* Tarjeta de Laura Maglia (Mismo diseño con proporción ampliada y acento angular en L) */}
            <div className="w-full bg-white shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group flex flex-col border border-neutral-200/90">
              {/* Contenedor de Imagen con proporción vertical precisa */}
              <div className="relative w-full h-[300px] sm:h-[340px] lg:h-[360px] xl:h-[380px] overflow-hidden bg-neutral-200">
                <Image
                  src={lauraMember.image}
                  alt={lauraMember.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 70vw, 420px"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  priority
                />
              </div>

              {/* Info de Laura con acento angular en L */}
              <div className="relative p-6 sm:p-7 text-center bg-white border-t border-neutral-100 flex-1 flex flex-col justify-center">
                {/* Acento geométrico en esquina inferior izquierda */}
                <div className="absolute left-0 bottom-0 w-8 sm:w-9 h-[3px] bg-black" />
                <div className="absolute left-0 bottom-0 w-[3px] h-8 sm:h-9 bg-black" />

                <h4
                  className="text-lg sm:text-xl font-bold uppercase tracking-wider text-black leading-snug"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {lauraMember.name}
                </h4>
                <p
                  className="text-sm sm:text-base text-neutral-500 mt-1.5 font-normal"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {lauraMember.role}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
