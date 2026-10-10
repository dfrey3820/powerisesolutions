import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { CTA } from "@/components/CTA";
import { pillars, productModels } from "@/lib/data";

type Params = { params: Promise<{ slug: string; model: string }> };

export function generateStaticParams() {
  return Object.entries(productModels).flatMap(([slug, models]) =>
    models.map((m) => ({ slug, model: m.slug }))
  );
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug, model } = await params;
  const m = productModels[slug]?.find((x) => x.slug === model);
  if (!m) return { title: "Product" };
  return { title: m.name, description: m.description };
}

export default async function ProductModelPage({ params }: Params) {
  const { slug, model } = await params;
  const pillar = pillars.find((p) => p.slug === slug);
  const m = productModels[slug]?.find((x) => x.slug === model);
  const siblings = (productModels[slug] ?? []).filter((x) => x.slug !== model);
  if (!pillar || !m) notFound();

  return (
    <>
      <PageHeader eyebrow={m.tagline} title={m.name} description={m.description} />

      <section className="py-16 md:py-20">
        <div className="container-x grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-start">
          <div>
            <p className="eyebrow">Why this model</p>
            <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-fog-100 md:text-3xl">
              {pillar.title} monitoring, sized to your operation.
            </h2>
            <ul className="mt-8 grid gap-3">
              {m.points.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-3 rounded-xl border border-ink-300 bg-ink-100 px-4 py-3 text-sm text-fog-100"
                >
                  <span className="mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full bg-brand-500 text-white">
                    <Check className="h-3 w-3" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-ink-300 bg-white lg:aspect-square">
            <Image
              src={m.image}
              alt={m.imageAlt}
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-contain p-8"
              priority
            />
          </div>
        </div>
      </section>

      <section className="border-t border-ink-300 bg-ink-900 py-20 md:py-24">
        <div className="container-x">
          <div className="max-w-2xl">
            <p className="eyebrow">Highlights</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white md:text-4xl">
              What sets it apart.
            </h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {m.highlights.map((h) => (
              <div
                key={h.title}
                className="rounded-2xl border border-ink-700/60 bg-ink-800/80 p-6"
              >
                <h3 className="font-display text-lg font-semibold text-white">
                  {h.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">
                  {h.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-ink-300 bg-gradient-to-b from-ink-100 to-brand-50/60 py-20 md:py-24">
        <div className="container-x">
          <div className="max-w-2xl">
            <p className="eyebrow">Datasheet</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-fog-100 md:text-4xl">
              Technical specifications.
            </h2>
          </div>
          <dl className="mt-12 overflow-hidden rounded-2xl border border-ink-300 bg-ink-50">
            {m.specs.map((s, i) => (
              <div
                key={s.label}
                className={[
                  "grid gap-1 px-5 py-3.5 sm:grid-cols-[240px_1fr] sm:gap-6",
                  i > 0 ? "border-t border-ink-300" : ""
                ].join(" ")}
              >
                <dt className="text-sm font-medium text-fog-100">{s.label}</dt>
                <dd className="text-sm text-fog-300 sm:text-right">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {siblings.length > 0 && (
        <section className="border-t border-ink-300 py-16 md:py-20">
          <div className="container-x">
            <p className="eyebrow">Also in this range</p>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {siblings.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${slug}/${s.slug}`}
                  className="group flex items-center gap-5 rounded-2xl border border-ink-300 bg-ink-100 p-5 transition-colors hover:border-brand-300 hover:bg-brand-50/50"
                >
                  <div className="relative h-20 w-20 flex-none overflow-hidden rounded-xl border border-ink-300 bg-white">
                    <Image
                      src={s.image}
                      alt={s.imageAlt}
                      fill
                      sizes="80px"
                      className="object-contain p-1.5"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-brand-600">
                      {s.tagline}
                    </p>
                    <p className="mt-1 flex items-center gap-1.5 font-display text-base font-semibold text-fog-100 group-hover:text-brand-700">
                      {s.name}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTA />
    </>
  );
}
