import { useTranslations } from "next-intl";
import { ArrowRight, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";

export function Hero() {
  const t = useTranslations("Hero");
  const tNav = useTranslations("Nav");

  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div aria-hidden className="absolute inset-0 -z-10 grid-pattern opacity-60" />
      <div aria-hidden className="absolute inset-0 -z-10 gradient-radial" />

      <div className="container-page py-20 sm:py-28 lg:py-32">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm backdrop-blur">
            <Sparkles className="size-3.5 text-primary" />
            {t("badge")}
          </span>

          <h1 className="mt-6 font-heading text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
            {t("title")}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
            {t("subtitle")}
          </p>

          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
            <Button
              size="lg"
              className="h-11 px-5 text-sm"
              render={
                <a href="#contact">
                  {t("ctaPrimary")} <ArrowRight className="size-4" />
                </a>
              }
            />
            <Button
              variant="outline"
              size="lg"
              className="h-11 px-5 text-sm"
              render={<a href="#services">{t("ctaSecondary")}</a>}
            />
          </div>

          <p className="mt-7 max-w-xl text-xs text-muted-foreground">
            {t("trustLine")}
          </p>
        </div>

        <HeroVisual labels={{ deployed: tNav("services") }} />
      </div>
    </section>
  );
}

const TECH_BADGES = [
  "TypeScript",
  "React",
  "Next.js",
  "Node",
  "Go",
  "PostgreSQL",
  "AWS",
  "GCP",
];

function HeroVisual({ labels }: { labels: { deployed: string } }) {
  return (
    <div className="relative mx-auto mt-16 max-w-4xl">
      <div className="absolute -inset-x-8 -top-4 -bottom-4 rounded-3xl bg-gradient-to-tr from-primary/15 via-chart-4/10 to-chart-3/15 blur-2xl" />

      <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-card shadow-2xl shadow-primary/10 ring-1 ring-foreground/5">
        <div className="flex items-center gap-1.5 border-b border-border/60 bg-muted/40 px-4 py-3">
          <span className="size-2.5 rounded-full bg-red-400/70" />
          <span className="size-2.5 rounded-full bg-amber-400/70" />
          <span className="size-2.5 rounded-full bg-emerald-400/70" />
          <span className="ml-3 text-xs font-medium text-muted-foreground">
            zentrik / engineering — production
          </span>
          <span className="ml-auto inline-flex items-center gap-1 text-[10px] font-medium text-emerald-600 dark:text-emerald-400">
            <span className="size-1.5 animate-pulse rounded-full bg-emerald-500" />
            All systems healthy
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-[200px_1fr]">
          <aside className="hidden flex-col gap-1 border-r border-border/60 bg-muted/20 p-3 sm:flex">
            <FileItem label="services/" folder />
            <FileItem label="  api.ts" />
            <FileItem label="  worker.go" />
            <FileItem label="products/" folder />
            <FileItem label="  sendio/" folder active />
            <FileItem label="    inbox.tsx" />
            <FileItem label="    flows.ts" />
            <FileItem label="infra/" folder />
            <FileItem label="  terraform.tf" />
            <FileItem label="docs/" folder />
            <FileItem label="README.md" />
          </aside>

          <div className="flex flex-col">
            <div className="flex items-center gap-1 border-b border-border/40 bg-muted/30 px-3 py-2 text-[11px] text-muted-foreground">
              <Tab>inbox.tsx</Tab>
              <Tab>flows.ts</Tab>
              <Tab active>api.ts</Tab>
            </div>

            <pre className="overflow-hidden bg-card px-5 py-5 font-mono text-[12.5px] leading-[1.65] text-foreground/85">
              <Line n={1}>
                <Kw>import</Kw> <Brace>{"{"}</Brace> Server <Brace>{"}"}</Brace>{" "}
                <Kw>from</Kw> <Str>&quot;@zentrik/core&quot;</Str>;
              </Line>
              <Line n={2}>
                <Kw>import</Kw> <Brace>{"{"}</Brace> meta, stripe{" "}
                <Brace>{"}"}</Brace> <Kw>from</Kw>{" "}
                <Str>&quot;@zentrik/integrations&quot;</Str>;
              </Line>
              <Line n={3} />
              <Line n={4}>
                <Cmt>{"// Built for clients that need to ship fast."}</Cmt>
              </Line>
              <Line n={5}>
                <Kw>export const</Kw> <Fn>app</Fn> = <Kw>new</Kw>{" "}
                <Type>Server</Type>(<Brace>{"{"}</Brace>
              </Line>
              <Line n={6}>
                {"  "}
                name: <Str>&quot;zentrik-prod&quot;</Str>,
              </Line>
              <Line n={7}>
                {"  "}
                region: <Str>&quot;us-east-1&quot;</Str>,
              </Line>
              <Line n={8}>
                {"  "}
                integrations: [meta, stripe],
              </Line>
              <Line n={9}>
                {"  "}
                <Cmt>{"// Deploy on every push to main."}</Cmt>
              </Line>
              <Line n={10}>
                <Brace>{"}"}</Brace>);
              </Line>
            </pre>

            <div className="flex flex-wrap items-center gap-2 border-t border-border/40 bg-muted/20 px-4 py-3">
              {TECH_BADGES.map((b) => (
                <span
                  key={b}
                  className="inline-flex items-center rounded-md border border-border bg-background px-2 py-0.5 text-[10px] font-medium text-foreground/80"
                >
                  {b}
                </span>
              ))}
              <span className="ml-auto text-[10px] font-medium text-muted-foreground">
                deploy · 12s · {labels.deployed.toLowerCase()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FileItem({
  label,
  folder,
  active,
}: {
  label: string;
  folder?: boolean;
  active?: boolean;
}) {
  return (
    <span
      className={`flex items-center gap-1.5 whitespace-pre rounded px-1.5 py-0.5 font-mono text-[11px] ${
        active
          ? "bg-primary/10 text-primary"
          : folder
            ? "text-foreground/85"
            : "text-muted-foreground"
      }`}
    >
      {folder ? "▸" : " "} {label}
    </span>
  );
}

function Tab({
  children,
  active,
}: {
  children: React.ReactNode;
  active?: boolean;
}) {
  return (
    <span
      className={`rounded-md px-2 py-1 ${
        active
          ? "bg-card text-foreground ring-1 ring-border"
          : "text-muted-foreground"
      }`}
    >
      {children}
    </span>
  );
}

function Line({ n, children }: { n: number; children?: React.ReactNode }) {
  return (
    <div className="flex">
      <span className="mr-4 inline-block w-5 select-none text-right text-muted-foreground/50">
        {n}
      </span>
      <span className="min-h-[1.65em] flex-1">{children}</span>
    </div>
  );
}

const Kw = ({ children }: { children: React.ReactNode }) => (
  <span className="text-chart-4">{children}</span>
);
const Str = ({ children }: { children: React.ReactNode }) => (
  <span className="text-emerald-600 dark:text-emerald-400">{children}</span>
);
const Cmt = ({ children }: { children: React.ReactNode }) => (
  <span className="text-muted-foreground/70">{children}</span>
);
const Fn = ({ children }: { children: React.ReactNode }) => (
  <span className="text-primary">{children}</span>
);
const Type = ({ children }: { children: React.ReactNode }) => (
  <span className="text-chart-2">{children}</span>
);
const Brace = ({ children }: { children: React.ReactNode }) => (
  <span className="text-foreground/60">{children}</span>
);
