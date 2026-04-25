import { useTranslations } from "next-intl";
import { GitBranch } from "lucide-react";

const STEPS = ["step1", "step2", "step3", "step4"] as const;

export function Process() {
  const t = useTranslations("Process");

  return (
    <section
      id="process"
      className="relative overflow-hidden border-b border-border/60 bg-muted/30 py-20 sm:py-24"
    >
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            <GitBranch className="size-3.5" />
            {t("kicker")}
          </span>
          <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">
            {t("subtitle")}
          </p>
        </div>

        <ol className="relative mx-auto mt-14 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((key, idx) => (
            <li
              key={key}
              className="group relative flex flex-col gap-3 rounded-2xl border border-border bg-card p-6 ring-1 ring-foreground/5 transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <span className="absolute -top-3 left-6 inline-flex size-6 items-center justify-center rounded-full bg-primary text-[11px] font-semibold text-primary-foreground shadow-sm">
                {idx + 1}
              </span>
              <h3 className="mt-2 font-heading text-base font-semibold leading-tight">
                {t(`steps.${key}.title`)}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {t(`steps.${key}.description`)}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
