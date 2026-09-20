import { ImageResponse } from "next/og";
import { SITE_NAME } from "@/lib/site";

export const alt = "Voladizo | Arquitectura y Construcción";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#111111",
          color: "white",
          fontFamily: "sans-serif",
          padding: "40px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 120,
            fontWeight: 800,
            letterSpacing: "18px",
            textTransform: "uppercase",
            border: "10px solid #ffffff",
            padding: "24px 56px 24px 74px",
            marginBottom: "36px",
          }}
        >
          {SITE_NAME}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 30,
            fontWeight: 500,
            letterSpacing: "8px",
            textTransform: "uppercase",
            color: "#a3a3a3",
          }}
        >
          Arquitectura · Construcción · Diseño Interior
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
