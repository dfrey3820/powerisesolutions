import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/Hero";
import { Partners } from "@/components/Partners";
import { Pillars } from "@/components/Pillars";
import { Places } from "@/components/Places";
import { Process } from "@/components/Process";
import { CTA } from "@/components/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Welcome />
      <Pillars />
      <Places />
      <Process />
      <CTA />
      <Partners />
    </>
  );
}

function Welcome() {
  return (
    <section className="border-b border-ink-300 bg-gradient-to-r from-ink-100 via-ink-50 to-brand-50/60 py-6 md:py-16">
      <div className="container-x">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="font-display text-2xl font-semibold text-fog-100 sm:text-3xl">
            Welcome to Powerise Solutions Limited
          </h2>
          <p className="mx-auto mt-3 max-w-5xl text-[15px] leading-6 text-fog-300 md:mt-4 md:text-lg md:leading-relaxed">
            Powerise Solutions Limited is an IoT provider specializing in smart technologies that improve the efficiency, reliability and sustainability of essential resources and infrastructure. Its portfolio spans energy management, power backup, smart home automation and supply-chain monitoring.
          </p>
          <Link
            href="/about"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
          >
            Read more about us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
