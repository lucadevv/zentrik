import { ArrowLeft } from "lucide-react";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Link } from "@/i18n/navigation";

export type LegalSection = {
  title: string;
  body: string;
};

export function LegalPage({
  title,
  intro,
  sections,
  lastUpdated,
  lastUpdatedLabel,
  backLabel,
}: {
  title: string;
  intro: string;
  sections: LegalSection[];
  lastUpdated: string;
  lastUpdatedLabel: string;
  backLabel: string;
}) {
  return (
    <>
      <Navbar />
      <main>
        <article className="container-page max-w-3xl py-16 sm:py-20">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            {backLabel}
          </Link>

          <header className="mt-6 border-b border-border/60 pb-8">
            <h1 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
              {title}
            </h1>
            <p className="mt-3 text-sm text-muted-foreground">
              {lastUpdatedLabel}: {lastUpdated}
            </p>
          </header>

          <p className="mt-8 text-base leading-relaxed text-muted-foreground text-pretty">
            {intro}
          </p>

          <div className="mt-10 flex flex-col gap-8">
            {sections.map((s) => (
              <section key={s.title} className="flex flex-col gap-3">
                <h2 className="font-heading text-xl font-semibold tracking-tight">
                  {s.title}
                </h2>
                <p className="text-[15px] leading-relaxed text-foreground/85 text-pretty">
                  {s.body}
                </p>
              </section>
            ))}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
