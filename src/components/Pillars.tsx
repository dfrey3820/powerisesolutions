import Link from "next/link";
import Image from "next/image";
import {
  Gauge,
  Zap,
  Snowflake,
  Truck,
  Droplet,
  Home,
  ArrowRight
} from "lucide-react";
import { pillars } from "@/lib/data";
import { pillarImages } from "@/lib/images";

const icons = {
  gauge: Gauge,
  zap: Zap,
  snowflake: Snowflake,
  truck: Truck,
  droplet: Droplet,
  home: Home
} as const;

const imageAlts: Record<string, string> = {
  "energy-monitoring": "Smart energy meters installed in a distribution board",
  "cold-chain": "Frigga cold-chain temperature data loggers",
  "truck-telematics": "Truck telematics dashboard with live fleet view",
  "water-gas-metering": "Smart utility metering in the field",
  "smart-home": "Smart lock with fingerprint and PIN access"
};

export function Pillars() {
  return (
    <section id="divisions" className="relative py-16 md:py-24">
      <div className="container-x">
        {/* Section header */}
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="eyebrow">Our divisions</p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-fog-100 sm:text-4xl md:text-[2.75rem]">
              Five divisions.
              <br />
              <span className="text-brand-600">One connected platform.</span>
            </h2>
          </div>
          <div className="md:col-span-5">
            <p className="max-w-md text-sm leading-6 text-fog-300 md:text-base md:leading-7">
              Each division runs as a dedicated practice — its own hardware,
              its own specialists — reporting into one dashboard. Start where
              it hurts most, scale when you&apos;re ready.
            </p>
          </div>
        </div>

        {/* Index rail */}
        <nav
          aria-label="Divisions index"
          className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-y border-ink-300 py-4"
        >
          {pillars.map((p) => (
            <a
              key={p.slug}
              href={`#${p.slug}`}
              className="group inline-flex items-baseline gap-2 text-sm font-medium text-fog-300 transition-colors hover:text-fog-100"
            >
              <span className="underline-offset-4 group-hover:underline">
                {p.title}
              </span>
            </a>
          ))}
        </nav>

        {/* Division chapters */}
        <div>
          {pillars.map((p, i) => {
            const Icon = icons[p.icon as keyof typeof icons] ?? Gauge;
            const imageLeft = i % 2 === 1;

            return (
              <article
                key={p.slug}
                id={p.slug}
                className={`grid scroll-mt-28 gap-10 py-14 md:grid-cols-12 md:gap-x-12 md:py-20 ${
                  i > 0 ? "border-t border-ink-300" : ""
                }`}
              >
                {/* Copy */}
                <div
                  className={`flex flex-col justify-center md:col-span-6 lg:col-span-5 ${
                    imageLeft ? "md:order-2 lg:col-start-8" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="h-px w-8 bg-brand-500" aria-hidden />
                    <span className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.2em] text-brand-700">
                      <Icon className="h-3.5 w-3.5" />
                      {p.title}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-2xl font-semibold leading-snug text-fog-100 sm:text-3xl md:text-[2.125rem] md:leading-[1.2]">
                    {p.tagline}
                  </h3>

                  <p className="mt-4 max-w-xl text-sm leading-6 text-fog-300 md:text-[15px] md:leading-7">
                    {p.description}
                  </p>

                  <ul className="mt-7 grid gap-x-8 gap-y-3 border-t border-ink-300 pt-6 sm:grid-cols-2">
                    {p.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-sm leading-5 text-fog-200"
                      >
                        <span
                          className="mt-[7px] h-1.5 w-1.5 flex-none rotate-45 bg-brand-500"
                          aria-hidden
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <Link
                      href={`/services/${p.slug}`}
                      className="group inline-flex items-center gap-2.5 border border-ink-900 px-5 py-3 text-sm font-semibold text-fog-100 transition-colors hover:border-brand-600 hover:bg-brand-600 hover:text-white"
                    >
                      Explore {p.title}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>

                {/* Image with caption bar */}
                <div
                  className={`md:col-span-6 lg:col-span-7 ${
                    imageLeft ? "md:order-1 lg:col-start-1" : "lg:col-start-6"
                  }`}
                >
                  <div className="relative aspect-[16/11] overflow-hidden bg-ink-200">
                    <Image
                      src={pillarImages[p.slug]}
                      alt={imageAlts[p.slug] ?? p.title}
                      fill
                      sizes="(min-width: 1024px) 55vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
