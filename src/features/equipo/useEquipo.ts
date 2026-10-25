"use client";

import { useEffect, useState } from "react";
import { getStaff, resolveMediaUrl } from "@/lib/api";

export interface MiembroEquipo {
  id: number;
  name: string;
  role: string;
  image: string | null;
  /** true si la imagen viene del backend (hay que desactivar la optimización de next/image) */
  dinamica: boolean;
}

// Respaldo: se muestra mientras carga la API y si la API falla o devuelve la lista vacía.
const EQUIPO_RESPALDO: MiembroEquipo[] = [
  {
    id: 1,
    name: "Arq. Renzo Alvarez",
    role: "Gerente General",
    image: "/images/inicio/equipo/foto_gerente_final.jpeg",
    dinamica: false,
  },
  {
    id: 2,
    name: "Laura Maglia",
    role: "Jefe Comercial",
    image: "/images/inicio/equipo/personal1.jpg",
    dinamica: false,
  },
  {
    id: 3,
    name: "Renato Álvarez",
    role: "Supervisor de Proyectos",
    image: "/images/inicio/equipo/foto_supervisor_final.jpeg",
    dinamica: false,
  },
];

/**
 * Equipo dinámico desde `GET /staff`. El primer integrante (menor "Orden" en el panel)
 * es el líder destacado; el resto va en la cuadrícula.
 */
export function useEquipo() {
  const [equipo, setEquipo] = useState<MiembroEquipo[]>(EQUIPO_RESPALDO);

  useEffect(() => {
    let activo = true;

    getStaff().then((staff) => {
      if (!activo || !staff || staff.length === 0) return;
      setEquipo(
        staff.map((s, i) => ({
          id: i,
          name: s.name,
          role: s.role ?? "",
          image: s.image_url ? resolveMediaUrl(s.image_url) : null,
          dinamica: !!s.image_url,
        })),
      );
    });

    return () => {
      activo = false;
    };
  }, []);

  const [lider, ...resto] = equipo;
  return { lider, resto };
}
