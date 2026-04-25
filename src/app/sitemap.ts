import type { MetadataRoute } from "next";

import { routing } from "@/i18n/routing";

const BASE_URL = "https://zentrik.lat";

const PATHS = [
  { internal: "/", priority: 1 },
  { internal: "/terms", priority: 0.4 },
  { internal: "/privacy", priority: 0.4 },
] as const;

function urlFor(internal: string, locale: string): string {
  if (internal === "/") return `${BASE_URL}/${locale}`;
  const map = routing.pathnames[internal as keyof typeof routing.pathnames];
  if (typeof map === "string") return `${BASE_URL}/${locale}${map}`;
  const path = (map as Record<string, string>)[locale];
  return `${BASE_URL}/${locale}${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return PATHS.map(({ internal, priority }) => ({
    url: urlFor(internal, routing.defaultLocale),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority,
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((l) => [l, urlFor(internal, l)]),
      ),
    },
  }));
}
