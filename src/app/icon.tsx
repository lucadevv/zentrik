import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, oklch(0.55 0.21 258), oklch(0.65 0.2 290))",
          borderRadius: 14,
          color: "white",
          fontWeight: 700,
          fontSize: 36,
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
        Z
      </div>
    ),
    { ...size },
  );
}
