import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { LegalPage, type LegalSection } from "@/components/layout/legal-page";
import { routing } from "@/i18n/routing";

const SECTION_KEYS = [
  "controller",
  "data",
  "purpose",
  "legal",
  "share",
  "transfer",
  "retention",
  "rights",
  "security",
  "changes",
] as const;

const LAST_UPDATED = "2026-04-25";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};

  const t = await getTranslations({ locale, namespace: "Meta.privacy" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: locale === "es" ? "/es/privacidad" : "/en/privacy",
      languages: {
        es: "/es/privacidad",
        en: "/en/privacy",
      },
    },
  };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "Legal.privacy" });
  const tCommon = await getTranslations({
    locale,
    namespace: "Legal.common",
  });

  const sections: LegalSection[] = SECTION_KEYS.map((key) => ({
    title: t(`sections.${key}.title`),
    body: t(`sections.${key}.body`),
  }));

  return (
    <LegalPage
      title={t("title")}
      intro={t("intro")}
      sections={sections}
      lastUpdated={LAST_UPDATED}
      lastUpdatedLabel={tCommon("lastUpdated")}
      backLabel={tCommon("backHome")}
    />
  );
}
