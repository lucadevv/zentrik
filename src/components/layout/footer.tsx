import { useTranslations } from "next-intl";
import type { ComponentProps } from "react";

import { Logo } from "@/components/brand/logo";
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
} from "@/components/brand/social-icons";
import { Link } from "@/i18n/navigation";

type LinkHref = ComponentProps<typeof Link>["href"];

const SERVICES_LINKS = [
  { href: "#services", key: "services" },
  { href: "#process", key: "process" },
  { href: "#faq", key: "faq" },
] as const;

const PRODUCT_LINKS = [
  { href: "#products", key: "products" },
  { href: "mailto:hola@zentrik.lat?subject=Sendio", key: "sendio" },
] as const;

const COMPANY_LINKS = [
  { href: "mailto:hola@zentrik.lat", key: "contact" },
] as const;

const LEGAL_LINKS = [
  { href: "/terms" as const, key: "terms" },
  { href: "/privacy" as const, key: "privacy" },
] as const;

export function Footer() {
  const t = useTranslations("Footer");
  const tBrand = useTranslations("Brand");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 bg-card/40">
      <div className="container-page py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          <div className="flex flex-col gap-4">
            <Link href="/" aria-label={tBrand("name")}>
              <Logo />
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              {t("tagline")}
            </p>
            <p className="max-w-xs text-xs text-muted-foreground/80">
              {t("legalEntity")}
            </p>
            <div className="mt-2 flex items-center gap-1">
              <a
                href="https://twitter.com/zentriktech"
                aria-label="Twitter"
                className="grid size-9 place-items-center rounded-md border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <TwitterIcon className="size-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/zentrik-technologies"
                aria-label="LinkedIn"
                className="grid size-9 place-items-center rounded-md border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <LinkedinIcon className="size-4" />
              </a>
              <a
                href="https://github.com/zentrik-tech"
                aria-label="GitHub"
                className="grid size-9 place-items-center rounded-md border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <GithubIcon className="size-4" />
              </a>
            </div>
          </div>

          <FooterColumn title={t("sections.services")}>
            {SERVICES_LINKS.map((l) => (
              <FooterLink key={l.key} href={l.href}>
                {t(`links.${l.key}`)}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title={t("sections.products")}>
            {PRODUCT_LINKS.map((l) => (
              <FooterLink key={l.key} href={l.href}>
                {t(`links.${l.key}`)}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title={t("sections.company")}>
            {COMPANY_LINKS.map((l) => (
              <FooterLink key={l.key} href={l.href}>
                {t(`links.${l.key}`)}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title={t("sections.legal")}>
            {LEGAL_LINKS.map((l) => (
              <FooterLink key={l.key} href={l.href} internal>
                {t(`links.${l.key}`)}
              </FooterLink>
            ))}
          </FooterColumn>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border/60 pt-6">
          <p className="text-xs text-muted-foreground">{t("contact")}</p>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-muted-foreground">
              © {year} Zentrik Technologies LLC. {t("rights")}
            </p>
            <p className="max-w-md text-[11px] leading-relaxed text-muted-foreground/80 sm:text-right">
              {t("disclaimer")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3">
      <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground">
        {title}
      </h4>
      <ul className="flex flex-col gap-2 text-sm">{children}</ul>
    </div>
  );
}

function FooterLink({
  href,
  internal,
  children,
}: {
  href: string;
  internal?: boolean;
  children: React.ReactNode;
}) {
  if (internal) {
    return (
      <li>
        <Link
          href={href as LinkHref}
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          {children}
        </Link>
      </li>
    );
  }
  return (
    <li>
      <a
        href={href}
        className="text-muted-foreground transition-colors hover:text-foreground"
      >
        {children}
      </a>
    </li>
  );
}
