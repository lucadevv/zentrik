import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Zentrik Technologies · Global software studio",
    short_name: "Zentrik",
    description:
      "Custom software, SaaS products and API integrations. Global software studio operating from Latin America.",
    start_url: "/",
    display: "standalone",
    background_color: "#0b0f1a",
    theme_color: "#2563eb",
    icons: [
      {
        src: "/icon",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
