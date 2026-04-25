import { useTranslations } from "next-intl";
import {
  Code2,
  Compass,
  type LucideIcon,
  Plug,
  Rocket,
  Wrench,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const SERVICES = [
  { key: "customDev", icon: Code2 },
  { key: "saasProducts", icon: Rocket },
  { key: "apiIntegrations", icon: Plug },
  { key: "consulting", icon: Compass },
] as const satisfies ReadonlyArray<{
  key: string;
  icon: LucideIcon;
}>;

export function Services() {
  const t = useTranslations("Services");

  return (
    <section id="services" className="border-b border-border/60 py-20 sm:py-24">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            <Wrench className="size-3.5" />
            {t("kicker")}
          </span>
          <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">
            {t("subtitle")}
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {SERVICES.map(({ key, icon: Icon }) => (
            <Card
              key={key}
              className="group relative h-full p-7 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/5"
            >
              <CardHeader className="px-0">
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15 transition-colors group-hover:bg-primary/15">
                  <Icon className="size-5" />
                </span>
                <CardTitle className="mt-5 text-lg font-semibold leading-tight">
                  {t(`items.${key}.title`)}
                </CardTitle>
              </CardHeader>
              <CardContent className="px-0">
                <CardDescription className="text-[15px] leading-relaxed">
                  {t(`items.${key}.description`)}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
