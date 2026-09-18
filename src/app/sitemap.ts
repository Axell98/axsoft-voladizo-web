import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://santotomasdeaquino.edu.pe";

  const routes = [
    "",
    "/inicial",
    "/primaria",
    "/secundaria",
    "/nosotros",
    "/admision-2026",
    "/open-day",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
