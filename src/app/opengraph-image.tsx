import { ImageResponse } from "next/og";

export const alt = "Colegio Santo Tomás de Aquino | Padres Dominicos";
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
          backgroundColor: "#0d59b2",
          color: "white",
          fontFamily: "sans-serif",
          padding: "40px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              fontSize: 64,
              fontWeight: 900,
              letterSpacing: "-2px",
              color: "#ffffff",
              border: "4px solid #ffffff",
              borderRadius: "16px",
              padding: "10px 24px",
              backgroundColor: "#094182",
            }}
          >
            STA
          </div>
        </div>
        <div
          style={{
            fontSize: 48,
            fontWeight: 800,
            marginBottom: "12px",
            letterSpacing: "-1px",
          }}
        >
          Colegio Santo Tomás de Aquino
        </div>
        <div
          style={{
            fontSize: 26,
            fontWeight: 500,
            color: "#93c5fd",
          }}
        >
          Padres Dominicos — Formando líderes con valores cristianos en Lima
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
