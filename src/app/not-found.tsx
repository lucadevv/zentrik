import Link from "next/link";

export default function NotFound() {
  return (
    <html lang="es">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 16,
          fontFamily:
            "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          background: "#fff",
          color: "#0b0f1a",
        }}
      >
        <h1 style={{ fontSize: 48, fontWeight: 600, margin: 0 }}>404</h1>
        <p style={{ color: "#666", margin: 0 }}>
          Página no encontrada / Page not found
        </p>
        <Link
          href="/"
          style={{
            marginTop: 12,
            padding: "10px 16px",
            borderRadius: 8,
            background: "#2563eb",
            color: "white",
            textDecoration: "none",
            fontSize: 14,
            fontWeight: 500,
          }}
        >
          Inicio · Home
        </Link>
      </body>
    </html>
  );
}
