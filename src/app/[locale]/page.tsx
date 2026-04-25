import { setRequestLocale } from "next-intl/server";

import { Faq } from "@/components/landing/faq";
import { FinalCta } from "@/components/landing/final-cta";
import { Hero } from "@/components/landing/hero";
import { Process } from "@/components/landing/process";
import { Products } from "@/components/landing/products";
import { Services } from "@/components/landing/services";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <Products />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
