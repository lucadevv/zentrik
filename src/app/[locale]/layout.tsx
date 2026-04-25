import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import Script from "next/script";

import { ThemeProvider } from "@/components/theme-provider";
import { routing } from "@/i18n/routing";

import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0f1a" },
  ],
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};

  const t = await getTranslations({ locale, namespace: "Meta.home" });
  const tBrand = await getTranslations({ locale, namespace: "Brand" });
  const baseUrl = "https://zentrik.lat";

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: t("title"),
      template: `%s · ${tBrand("fullName")}`,
    },
    description: t("description"),
    applicationName: tBrand("fullName"),
    authors: [{ name: tBrand("legalName") }],
    creator: tBrand("legalName"),
    publisher: tBrand("legalName"),
    keywords: [
      "Zentrik Technologies",
      "software studio",
      "custom software development",
      "SaaS products",
      "API integrations",
      "Meta Cloud API",
      "WhatsApp Business",
      "Stripe integration",
      "Latin America software",
      "LATAM software studio",
      "Sendio",
      "Next.js development",
      "TypeScript",
      "Go development",
    ],
    alternates: {
      canonical: `/${locale}`,
      languages: {
        es: "/es",
        en: "/en",
        "x-default": "/es",
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "es" ? "es_LA" : "en_US",
      alternateLocale: locale === "es" ? "en_US" : "es_LA",
      url: `${baseUrl}/${locale}`,
      siteName: tBrand("fullName"),
      title: t("title"),
      description: t("description"),
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: tBrand("fullName"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: ["/opengraph-image"],
    },
    icons: {
      icon: "/favicon.ico",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  const tBrand = await getTranslations({ locale, namespace: "Brand" });

  const organizationLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: tBrand("fullName"),
    legalName: tBrand("legalName"),
    description: tBrand("shortDescription"),
    url: "https://zentrik.lat",
    logo: "https://zentrik.lat/icon",
    foundingDate: "2025",
    areaServed: ["Worldwide", "Latin America"],
    knowsAbout: [
      "Custom software development",
      "SaaS products",
      "API integrations",
      "Meta Cloud API",
      "WhatsApp Business Platform",
      "Cloud architecture",
      "Technical consulting",
    ],
    brand: [
      {
        "@type": "Brand",
        name: "Sendio",
        description:
          "Business messaging platform on WhatsApp Business and Meta Cloud APIs.",
      },
    ],
    sameAs: [
      "https://twitter.com/zentriktech",
      "https://www.linkedin.com/company/zentrik-technologies",
      "https://github.com/zentrik-tech",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "hola@zentrik.lat",
        availableLanguage: ["en", "es"],
      },
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "ventas@zentrik.lat",
        availableLanguage: ["en", "es"],
      },
    ],
  };

  return (
    <html lang={locale} suppressHydrationWarning className={inter.variable}>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider>{children}</NextIntlClientProvider>
        </ThemeProvider>
        <Script
          id="ld-organization"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
        />
      </body>
    </html>
  );
}
