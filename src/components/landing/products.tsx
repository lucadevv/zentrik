import { useTranslations } from "next-intl";
import { ArrowUpRight, Box, Lightbulb, MessageSquare, Package } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const PRODUCTS = [
  {
    key: "sendio",
    icon: MessageSquare,
    href: "mailto:hola@zentrik.lat?subject=Sendio",
    featured: true,
  },
  {
    key: "next",
    icon: Lightbulb,
    href: "mailto:hola@zentrik.lat?subject=New product idea",
    featured: false,
  },
  {
    key: "custom",
    icon: Box,
    href: "#contact",
    featured: false,
  },
] as const;

export function Products() {
  const t = useTranslations("Products");

  return (
    <section id="products" className="border-b border-border/60 py-20 sm:py-24">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            <Package className="size-3.5" />
            {t("kicker")}
          </span>
          <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">
            {t("subtitle")}
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 lg:grid-cols-3">
          {PRODUCTS.map(({ key, icon: Icon, href, featured }) => (
            <Card
              key={key}
              className={cn(
                "relative flex h-full flex-col gap-5 p-7",
                featured
                  ? "border-primary/40 bg-card ring-2 ring-primary shadow-xl shadow-primary/10"
                  : "",
              )}
            >
              <div className="flex items-start justify-between">
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                  <Icon className="size-5" />
                </span>
                <Badge
                  className={cn(
                    "h-6 px-2 text-[10px] uppercase tracking-wider",
                    featured
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground",
                  )}
                >
                  {t(`items.${key}.tag`)}
                </Badge>
              </div>

              <div className="flex flex-col gap-1.5">
                <h3 className="font-heading text-xl font-semibold tracking-tight">
                  {t(`items.${key}.name`)}
                </h3>
                <span className="text-xs font-medium text-muted-foreground">
                  {t(`items.${key}.status`)}
                </span>
              </div>

              <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                {t(`items.${key}.description`)}
              </p>

              <Button
                size="sm"
                variant={featured ? "default" : "outline"}
                className="h-9 w-full"
                render={
                  <a href={href}>
                    {t(`items.${key}.cta`)} <ArrowUpRight className="size-3.5" />
                  </a>
                }
              />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
