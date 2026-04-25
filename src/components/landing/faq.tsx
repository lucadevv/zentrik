import { useTranslations } from "next-intl";
import { HelpCircle } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ_ITEMS = [
  "what",
  "where",
  "size",
  "stack",
  "billing",
  "compliance",
  "differenceUS",
] as const;

export function Faq() {
  const t = useTranslations("Faq");

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((key) => ({
      "@type": "Question",
      name: t(`items.${key}.q`),
      acceptedAnswer: {
        "@type": "Answer",
        text: t(`items.${key}.a`),
      },
    })),
  };

  return (
    <section id="faq" className="border-b border-border/60 bg-muted/30 py-20 sm:py-24">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            <HelpCircle className="size-3.5" />
            {t("kicker")}
          </span>
          <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">
            {t("subtitle")}
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-border bg-card px-6 ring-1 ring-foreground/5">
          <Accordion>
            {FAQ_ITEMS.map((key) => (
              <AccordionItem key={key} value={key}>
                <AccordionTrigger className="text-left text-base font-medium hover:no-underline py-4">
                  {t(`items.${key}.q`)}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {t(`items.${key}.a`)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
    </section>
  );
}
