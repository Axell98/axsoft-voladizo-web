import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Exporta cada ruta como /ruta/index.html (Apache la sirve sin reglas de reescritura)
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  devIndicators: false,
};

export default nextConfig;
