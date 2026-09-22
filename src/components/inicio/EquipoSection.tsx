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

const teamMembers: TeamMember[] = [
  {
    id: 2,
    name: "Laura Maglia",
    role: "Jefe Comercial",
    image: "/images/inicio/equipo/personal1.jpg",
    socials: { facebook: "#", twitter: "#", linkedin: "#", youtube: "#", instagram: "#" },
  },
  {
    id: 3,
    name: "Taylor Roberts",
    role: "Coordinador de Obra",
    image: "/images/inicio/equipo/pic3.jpg",
    socials: { facebook: "#", twitter: "#", linkedin: "#", youtube: "#", instagram: "#" },
  },
  {
    id: 4,
    name: "Robert Willson",
    role: "Supervisor de Proyectos",
    image: "/images/inicio/equipo/pic4.jpg",
    socials: { facebook: "#", twitter: "#", linkedin: "#", youtube: "#", instagram: "#" },
  },
  {
    id: 5,
    name: "Austin Evon",
    role: "Asociado de Proyectos",
    image: "/images/inicio/equipo/pic5.jpg",
    socials: { facebook: "#", twitter: "#", linkedin: "#", youtube: "#", instagram: "#" },
  },
];

export default function EquipoSection() {
  return (
    <section
      id="equipo"
      className="section-full clearfix py-20 lg:py-28 relative z-20 overflow-hidden bg-black lg:bg-transparent"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Fondo dividido a pantalla completa 50/50 (Izquierda: Negro / Derecha: Gris Claro #f5f5f5) */}
      <div className="absolute inset-0 pointer-events-none z-0 hidden lg:flex">
        <div className="w-1/2 h-full bg-black" />
        <div className="w-1/2 h-full bg-[#f5f5f5]" />
      </div>

      {/* Contenedor centralizado con la misma proporción y padding que QuienesSomosSection */}
      <div className="max-w-[1340px] mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* ========================================================= */}
          {/* COLUMNA IZQUIERDA (lg:col-span-6): Fondo Negro & Líder    */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 bg-black lg:bg-transparent text-white pt-2 pb-6 lg:py-4 flex flex-col justify-between relative overflow-hidden">
            {/* Figura geométrica decorativa en esquina */}
            <div
              aria-hidden="true"
              className="absolute -right-24 -bottom-24 w-80 h-80 border-[32px] border-white/[0.04] rotate-45 pointer-events-none"
            />

            {/* Título de la sección sincronizado con estilo QuienesSomos */}
            <div className="mb-8 text-left relative z-10">
              <span className="text-xs sm:text-sm font-normal uppercase tracking-[3.5px] text-neutral-400 block mb-2">
                Conoce a
              </span>
              <h2
                className="text-3xl sm:text-4xl lg:text-[40px] font-semibold uppercase tracking-tight text-white leading-[1.15] mb-3"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Nuestro Equipo
              </h2>
              <div className="w-16 h-[3px] bg-white" />
            </div>

            {/* Tarjeta de Líder Principal */}
            <div className="w-full max-w-[440px] mx-auto lg:mx-0">
              <div className="relative w-full h-[400px] sm:h-[480px] lg:h-[500px] bg-neutral-900 overflow-hidden shadow-2xl group border border-neutral-800">
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

          {/* ========================================================= */}
          {/* COLUMNA DERECHA (lg:col-span-6): Grid 2x2 de Integrantes  */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 bg-[#f5f5f5] lg:bg-transparent pt-6 pb-4 lg:py-4 flex items-center justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="bg-white shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden group flex flex-col border border-neutral-200/80"
                >
                  {/* Contenedor de Imagen con proporción vertical precisa para mostrar el rostro completo */}
                  <div className="relative w-full h-[220px] sm:h-[240px] lg:h-[230px] xl:h-[240px] overflow-hidden bg-neutral-200">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 260px"
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>

                  {/* Info del Integrante con acento angular en L */}
                  <div className="relative p-4 sm:p-5 text-center bg-white border-t border-neutral-100 flex-1 flex flex-col justify-center">
                    {/* Acento geométrico en esquina inferior izquierda */}
                    <div className="absolute left-0 bottom-0 w-7 h-[2.5px] bg-black" />
                    <div className="absolute left-0 bottom-0 w-[2.5px] h-7 bg-black" />

                    <h4
                      className="text-sm sm:text-base font-bold uppercase tracking-wider text-black leading-snug"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      {member.name}
                    </h4>
                    <p
                      className="text-xs text-neutral-500 mt-1 font-normal"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      {member.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
