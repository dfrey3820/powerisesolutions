import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { CTA } from "@/components/CTA";
import { pillars } from "@/lib/data";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Powerise IoT solutions, energy & solar, cold chain, truck & fleet telematics with generator monitoring, utility monitoring, and smart homes."
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Solutions"
        title={<>Six IoT platforms, one accountable partner.</>}
        description="Every Powerise solution runs on the same DIN-rail IoT gateway, cloud analytics and alerting fabric, so you can start with one and add the rest without a re-platform."
      />

      <section className="bg-gradient-to-b from-ink-50 via-ink-200/60 to-brand-50/40 py-20 md:py-24">
        <div className="container-x space-y-14">
          {pillars.map((p, i) => (
            <article
              key={p.slug}
              className="grid gap-8 rounded-3xl border border-ink-300 bg-ink-50 p-8 md:grid-cols-[1.05fr_1fr] md:p-12"
            >
              <div>
                <p className="eyebrow">0{i + 1} · {p.title}</p>
                <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-fog-100 md:text-4xl">
                  {p.tagline}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-fog-300 md:text-lg">
                  {p.description}
                </p>
                <Link
                  href={`/services/${p.slug}`}
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700"
                >
                  Deep dive
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
              <ul className="grid gap-3 self-center">
                {p.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 rounded-xl border border-ink-300 bg-ink-100 px-4 py-3 text-sm text-fog-100"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-brand-500" />
                    {f}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
