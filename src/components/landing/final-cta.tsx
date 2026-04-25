import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function FinalCta() {
  const t = useTranslations("FinalCta");

  return (
    <section id="contact" className="border-b border-border/60 py-20 sm:py-24">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary via-chart-1 to-chart-4 px-8 py-16 text-center shadow-2xl shadow-primary/20 sm:px-16">
          <div
            aria-hidden
            className="absolute inset-0 opacity-30 mix-blend-overlay [background-image:radial-gradient(ellipse_at_top,white_0%,transparent_60%)]"
          />
          <div className="relative mx-auto flex max-w-2xl flex-col items-center text-primary-foreground">
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              {t("title")}
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-primary-foreground/85 text-pretty">
              {t("subtitle")}
            </p>

            <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
              <Button
                size="lg"
                variant="secondary"
                className="h-11 px-5 text-sm"
                render={
                  <a href="mailto:hola@zentrik.lat">
                    {t("ctaPrimary")} <ArrowRight className="size-4" />
                  </a>
                }
              />
              <Button
                size="lg"
                variant="outline"
                className="h-11 border-primary-foreground/30 bg-transparent px-5 text-sm text-primary-foreground hover:bg-primary-foreground/10"
                render={
                  <a href="mailto:ventas@zentrik.lat?subject=Book%20a%20call">
                    {t("ctaSecondary")}
                  </a>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
