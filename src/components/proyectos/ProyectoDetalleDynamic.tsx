"use client";

import { useEffect, useState } from "react";
import { API_BASE_URL, resolveMediaUrl } from "@/lib/api";
import type { ApiProjectDetail } from "@/lib/api";
import { apiDetailToProyecto } from "@/lib/project-mapper";
import type { Proyecto } from "@/features/proyectos/data";
import ProyectoDetalleInteractivo from "./ProyectoDetalleInteractivo";

/**
 * Componente client-side que carga un proyecto dinámicamente desde la API
 * usando el slug de la URL actual. Se usa como fallback cuando la página
 * estática no fue pre-generada (proyecto creado después del último build).
 */
export default function ProyectoDetalleDynamic() {
  const [proyecto, setProyecto] = useState<Proyecto | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    // Extraer slug de la URL actual: /proyectos/mi-slug → mi-slug
    const segments = window.location.pathname.split("/").filter(Boolean);
    const slugIndex = segments.indexOf("proyectos");
    const slug = slugIndex !== -1 ? segments[slugIndex + 1] : null;

    if (!slug || slug === "_fallback") {
      setNotFound(true);
      setLoading(false);
      return;
    }

    fetch(`${API_BASE_URL}/projects/${encodeURIComponent(slug)}`, {
      headers: { Accept: "application/json" },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Not found");
        return res.json();
      })
      .then((json: { data: ApiProjectDetail }) => {
        if (json?.data) {
          setProyecto(apiDetailToProyecto(json.data));
        } else {
          setNotFound(true);
        }
      })
      .catch(() => {
        setNotFound(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // Actualizar título del documento
  useEffect(() => {
    if (proyecto) {
      document.title = `${proyecto.titulo} | Voladizo`;
    }
  }, [proyecto]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#141414]">
        <div className="flex flex-col items-center gap-4">
          <div className="size-10 animate-spin rounded-full border-4 border-white/20 border-t-white" />
          <p className="text-sm text-white/60" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Cargando proyecto…
          </p>
        </div>
      </div>
    );
  }

  if (notFound || !proyecto) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#141414] px-6 text-center">
        <h1
          className="text-4xl font-bold text-white"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Proyecto no encontrado
        </h1>
        <p
          className="mt-4 text-white/60"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          El proyecto que buscas no existe o fue eliminado.
        </p>
        <a
          href="/proyectos"
          className="mt-8 rounded-full bg-white px-8 py-3 text-sm font-semibold text-[#141414] transition hover:bg-white/90"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Ver todos los proyectos
        </a>
      </div>
    );
  }

  return <ProyectoDetalleInteractivo proyecto={proyecto} />;
}
