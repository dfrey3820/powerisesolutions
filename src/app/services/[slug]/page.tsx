import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { CTA } from "@/components/CTA";
import { pillars, productModels, services, specSheets } from "@/lib/data";
import { pillarImages } from "@/lib/images";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return pillars.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const pillar = pillars.find((p) => p.slug === slug);
  if (!pillar) return { title: "Solution" };
  return {
    title: pillar.title,
    description: pillar.description
  };
}

export default async function ServiceDetailPage({ params }: Params) {
  const { slug } = await params;
  const pillar = pillars.find((p) => p.slug === slug);
  if (!pillar) notFound();

  const items = services[slug as keyof typeof services] ?? [];
  const img = pillarImages[slug];
  const models = productModels[slug] ?? [];
  const specs = specSheets[slug] ?? [];

  return (
    <>
      <PageHeader
        eyebrow={pillar.title}
        title={pillar.tagline}
        description={pillar.description}
      />

      <section className="py-16 md:py-20">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-start">
            <div>
              <p className="eyebrow">What we deliver</p>
              <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-fog-100 md:text-3xl">
                Ruggedised hardware, cloud analytics and 24/7 alerting, all delivered as one integrated service.
              </h2>
              <ul className="mt-8 grid gap-3">
                {pillar.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 rounded-xl border border-ink-300 bg-ink-100 px-4 py-3 text-sm text-fog-100"
                  >
                    <span className="mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full bg-brand-500 text-white">
                      <Check className="h-3 w-3" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {img && (
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-ink-300 bg-ink-100 lg:aspect-square">
                <Image
                  src={img}
                  alt={pillar.title}
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {models.length > 0 && (
        <section className="border-t border-ink-300 bg-gradient-to-b from-ink-50 via-brand-50/50 to-ink-200/70 py-20 md:py-24">
          <div className="container-x">
            <div className="max-w-2xl">
              <p className="eyebrow">The line-up</p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-fog-100 md:text-4xl">
                {models.length} models. One platform.
              </h2>
            </div>
            <div className="mt-14 grid gap-16 md:gap-20">
              {models.map((m, i) => (
                <div
                  key={m.name}
                  className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14"
                >
                  <div className={i % 2 === 1 ? "lg:order-last" : undefined}>
                    <p className="text-xs font-semibold uppercase tracking-widest text-brand-600">
                      {m.tagline}
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-fog-100">
                      {m.name}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-fog-300 md:text-base">
                      {m.description}
                    </p>
                    <ul className="mt-6 grid gap-2.5">
                      {m.points.map((p) => (
                        <li
                          key={p}
                          className="flex items-start gap-3 text-sm text-fog-100"
                        >
                          <span className="mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full bg-brand-500 text-white">
                            <Check className="h-3 w-3" />
                          </span>
                          {p}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/services/${slug}/${m.slug}`}
                      className="mt-7 inline-flex items-center gap-2 rounded-md bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
                    >
                      Full datasheet
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-ink-300 bg-white">
                    <Image
                      src={m.image}
                      alt={m.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 45vw, 100vw"
                      className="object-contain p-6"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {items.length > 0 && (
        <section className="border-t border-ink-300 bg-ink-900 py-20 md:py-24">
          <div className="container-x">
            <div className="max-w-2xl">
              <p className="eyebrow">Modules</p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white md:text-4xl">
                Everything included in {pillar.title}.
              </h2>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
              {items.map((it) => (
                <div
                  key={it.title}
                  className="rounded-2xl border border-ink-700/60 bg-ink-800/80 p-6"
                >
                  <h3 className="font-display text-lg font-semibold text-white">
                    {it.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">
                    {it.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {specs.length > 0 && (
        <section className="border-t border-ink-300 bg-gradient-to-b from-ink-100 to-brand-50/60 py-20 md:py-24">
          <div className="container-x">
            <div className="max-w-2xl">
              <p className="eyebrow">Datasheet</p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-fog-100 md:text-4xl">
                Technical specifications.
              </h2>
            </div>
            <dl className="mt-12 overflow-hidden rounded-2xl border border-ink-300 bg-ink-50">
              {specs.map((s, i) => (
                <div
                  key={s.label}
                  className={cnRow(i)}
                >
                  <dt className="text-sm font-medium text-fog-100">{s.label}</dt>
                  <dd className="text-sm text-fog-300 sm:text-right">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}

      <CTA />
    </>
  );
}

function cnRow(i: number) {
  return [
    "grid gap-1 px-5 py-3.5 sm:grid-cols-[240px_1fr] sm:gap-6",
    i > 0 ? "border-t border-ink-300" : ""
  ].join(" ");
}
