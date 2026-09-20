"use client";

import Image from "next/image";

// =========================================================
// ICONOS DE REDES SOCIALES ESTILO SQUARE EXACTOS
// =========================================================
function FacebookIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 320 512">
      <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
    </svg>
  );
}

function TwitterIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 512 512">
      <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
    </svg>
  );
}

function LinkedInIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 448 512">
      <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
    </svg>
  );
}

function YoutubeIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 576 512">
      <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.583V174.334l142.739 81.666-142.739 81.666z" />
    </svg>
  );
}

function InstagramIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 448 512">
      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
    </svg>
  );
}

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
    role: "Co-manager associated",
    image: "/images/inicio/equipo/pic3.jpg",
    socials: { facebook: "#", twitter: "#", linkedin: "#", youtube: "#", instagram: "#" },
  },
  {
    id: 4,
    name: "Robert Willson",
    role: "Co-manager associated",
    image: "/images/inicio/equipo/pic4.jpg",
    socials: { facebook: "#", twitter: "#", linkedin: "#", youtube: "#", instagram: "#" },
  },
  {
    id: 5,
    name: "Austin Evon",
    role: "Co-manager associated",
    image: "/images/inicio/equipo/pic5.jpg",
    socials: { facebook: "#", twitter: "#", linkedin: "#", youtube: "#", instagram: "#" },
  },
];

export default function EquipoSection() {
  return (
    <section
      id="equipo"
      className="section-full bg-neutral-100 relative overflow-hidden"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-full">
          {/* ========================================================= */}
          {/* COLUMNA IZQUIERDA: FONDO NEGRO Y LÍDER DESTACADO          */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 bg-black text-white px-8 sm:px-14 lg:px-20 xl:px-24 py-16 lg:py-24 flex flex-col justify-between relative overflow-hidden">
            {/* Elemento geométrico decorativo de fondo (.square_shape1 .square_shape2) */}
            <div
              className="absolute -right-24 -bottom-24 w-96 h-96 pointer-events-none opacity-20 border-[35px] border-neutral-700 rotate-45 z-0"
              aria-hidden="true"
            />

            {/* Título de la sección */}
            <div className="mb-10 relative z-10">
              <h2
                className="text-3xl sm:text-4xl font-bold uppercase tracking-wider text-white mb-3.5"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Nuestro Equipo
              </h2>
              <div className="w-16 h-[3px] bg-white" />
            </div>

            {/* Tarjeta de Líder Principal */}
            <div className="max-w-md mx-auto lg:mx-0 w-full mb-10 relative z-10">
              <div className="relative w-full h-[320px] sm:h-[380px] bg-neutral-900 overflow-hidden shadow-2xl group">
                <Image
                  src={featuredLeader.image}
                  alt={featuredLeader.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  priority
                />
              </div>

              {/* Información del Líder con tipografía exacta */}
              <div className="text-center pt-6 pb-2">
                <h2
                  className="text-2xl sm:text-[30px] font-medium text-white tracking-wide leading-tight"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {featuredLeader.name}
                </h2>
                <p
                  className="text-neutral-200 text-lg sm:text-[21px] mt-1.5 mb-5 font-light"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {featuredLeader.role}
                </p>

                {/* Redes Sociales con borde blanco y marco cuadrado exacto */}
               {/*  <ul className="flex items-center justify-center gap-2">
                  <li>
                    <a
                      href={featuredLeader.socials?.facebook || "#"}
                      aria-label="Facebook"
                      className="w-9 h-9 border border-white bg-black text-white flex items-center justify-center hover:bg-white hover:text-black transition-all duration-200"
                    >
                      <FacebookIcon className="w-3.5 h-3.5" />
                    </a>
                  </li>
                  <li>
                    <a
                      href={featuredLeader.socials?.twitter || "#"}
                      aria-label="Twitter"
                      className="w-9 h-9 border border-white bg-black text-white flex items-center justify-center hover:bg-white hover:text-black transition-all duration-200"
                    >
                      <TwitterIcon className="w-3.5 h-3.5" />
                    </a>
                  </li>
                  <li>
                    <a
                      href={featuredLeader.socials?.linkedin || "#"}
                      aria-label="LinkedIn"
                      className="w-9 h-9 border border-white bg-black text-white flex items-center justify-center hover:bg-white hover:text-black transition-all duration-200"
                    >
                      <LinkedInIcon className="w-3.5 h-3.5" />
                    </a>
                  </li>
                  <li>
                    <a
                      href={featuredLeader.socials?.youtube || "#"}
                      aria-label="YouTube"
                      className="w-9 h-9 border border-white bg-black text-white flex items-center justify-center hover:bg-white hover:text-black transition-all duration-200"
                    >
                      <YoutubeIcon className="w-3.5 h-3.5" />
                    </a>
                  </li>
                  <li>
                    <a
                      href={featuredLeader.socials?.instagram || "#"}
                      aria-label="Instagram"
                      className="w-9 h-9 border border-white bg-black text-white flex items-center justify-center hover:bg-white hover:text-black transition-all duration-200"
                    >
                      <InstagramIcon className="w-3.5 h-3.5" />
                    </a>
                  </li>
                </ul> */}
              </div>
            </div>

            {/* Badge inferior con tipografía (.hilite-title) */}
            {/* <div className="border-l-[6px] border-neutral-700 pl-4 py-0 relative z-10 mt-6">
              <strong
                className="block text-[#404040] uppercase text-[44px] sm:text-[54px] font-black tracking-wider leading-none select-none"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                EXPERTS
              </strong>
              <span
                className="text-white uppercase text-base sm:text-lg tracking-[3px] font-medium block mt-1"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                TEAM MEMBERS
              </span>
            </div> */}
          </div>

          {/* ========================================================= */}
          {/* COLUMNA DERECHA: GRID 2x2 DE INTEGRANTES DEL EQUIPO       */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 bg-neutral-100 px-6 sm:px-12 lg:px-14 xl:px-16 py-16 lg:py-24 flex items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 w-full">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="bg-white shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden group flex flex-col"
                >
                  {/* Contenedor de Imagen con Overlay de Redes Sociales */}
                  <div className="relative w-full h-[240px] sm:h-[260px] overflow-hidden bg-neutral-200">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Overlay al hacer Hover (Comentado - puedes descomentar cuando quieras mostrar redes sociales) */}
                    {/* <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                      <ul className="flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <li>
                          <a
                            href={member.socials?.facebook || "#"}
                            aria-label="Facebook"
                            className="w-8 h-8 border border-white/60 bg-black/80 hover:bg-white text-white hover:text-black flex items-center justify-center transition-colors"
                          >
                            <FacebookIcon className="w-3 h-3" />
                          </a>
                        </li>
                        <li>
                          <a
                            href={member.socials?.twitter || "#"}
                            aria-label="Twitter"
                            className="w-8 h-8 border border-white/60 bg-black/80 hover:bg-white text-white hover:text-black flex items-center justify-center transition-colors"
                          >
                            <TwitterIcon className="w-3 h-3" />
                          </a>
                        </li>
                        <li>
                          <a
                            href={member.socials?.linkedin || "#"}
                            aria-label="LinkedIn"
                            className="w-8 h-8 border border-white/60 bg-black/80 hover:bg-white text-white hover:text-black flex items-center justify-center transition-colors"
                          >
                            <LinkedInIcon className="w-3 h-3" />
                          </a>
                        </li>
                        <li>
                          <a
                            href={member.socials?.youtube || "#"}
                            aria-label="YouTube"
                            className="w-8 h-8 border border-white/60 bg-black/80 hover:bg-white text-white hover:text-black flex items-center justify-center transition-colors"
                          >
                            <YoutubeIcon className="w-3 h-3" />
                          </a>
                        </li>
                        <li>
                          <a
                            href={member.socials?.instagram || "#"}
                            aria-label="Instagram"
                            className="w-8 h-8 border border-white/60 bg-black/80 hover:bg-white text-white hover:text-black flex items-center justify-center transition-colors"
                          >
                            <InstagramIcon className="w-3 h-3" />
                          </a>
                        </li>
                      </ul>
                    </div> */}
                  </div>

                  {/* Info del Integrante con acento inferior */}
                  <div className="relative p-5 text-center bg-white border-t border-neutral-100">
                    {/* Acento geométrico en esquina inferior izquierda (.wt-team-info:before & :after) */}
                    <div className="absolute left-0 bottom-0 w-8 h-[3px] bg-black" />
                    <div className="absolute left-0 bottom-0 w-[3px] h-8 bg-black" />

                    <h4
                      className="text-base font-bold uppercase tracking-wider text-black"
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
