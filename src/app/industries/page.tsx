import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/PageHeader";
import { CTA } from "@/components/CTA";
import { industries } from "@/lib/data";
import { industryImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Powerise serves utilities, health, food & beverage, logistics, real estate and residential customers across East Africa."
};

export default function IndustriesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Industries"
        title={<>Built for the operators keeping Africa running.</>}
        description="The Powerise stack is intentionally horizontal. The same platform adapts to vaccine cold rooms in Turkana, genset fleets in Lagos and Nairobi malls sub-metering their tenants."
      />

      <section className="bg-gradient-to-b from-ink-50 via-ink-100 to-brand-50/40 py-20 md:py-24">
        <div className="container-x grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind) => (
            <article
              key={ind.title}
              className="overflow-hidden rounded-2xl border border-ink-300 bg-ink-50"
            >
              <div className="relative aspect-[16/10] bg-ink-100">
                <Image
                  src={industryImages[ind.title]}
                  alt={ind.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold text-fog-100">
                  {ind.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-fog-300">
                  {ind.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
