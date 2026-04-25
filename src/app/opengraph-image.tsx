import { ImageResponse } from "next/og";

export const alt = "Zentrik Technologies · Global software studio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#0b0f1a",
          backgroundImage:
            "radial-gradient(ellipse at 20% 0%, rgba(59,130,246,0.45), transparent 50%), radial-gradient(ellipse at 90% 90%, rgba(168,85,247,0.35), transparent 50%)",
          color: "white",
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "linear-gradient(135deg, #3b82f6, #a855f7)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
              fontSize: 32,
            }}
          >
            Z
          </div>
          <div
            style={{
              fontSize: 28,
              fontWeight: 600,
              letterSpacing: -0.5,
            }}
          >
            Zentrik Technologies
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 70,
              fontWeight: 600,
              letterSpacing: -2,
              lineHeight: 1.05,
              maxWidth: 980,
            }}
          >
            We build the software that moves modern businesses.
          </div>
          <div
            style={{
              fontSize: 26,
              color: "rgba(255,255,255,0.7)",
              fontWeight: 400,
              letterSpacing: -0.3,
              maxWidth: 900,
            }}
          >
            Custom development, SaaS products and API integrations. Global software
            studio operating from Latin America.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 18,
            fontSize: 22,
            color: "rgba(255,255,255,0.55)",
          }}
        >
          <span>zentrik.lat</span>
          <span>·</span>
          <span>Zentrik Technologies LLC</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
