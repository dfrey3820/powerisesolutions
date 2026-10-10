import Link from "next/link";
import { industries } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export function Places() {
  return (
    <section className="border-y border-ink-300 bg-ink-100 py-16 md:py-24">
      <div className="container-x">
        <div className="grid gap-5 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <SectionHeading
            eyebrow="Industries"
            title={<>Made for essential services and the people who run them.</>}
          />
          <div className="max-w-xl lg:justify-self-end">
            <p className="text-base leading-relaxed text-fog-300">
              From vaccine storage to utility networks, one adaptable platform supports the work behind everyday life.
            </p>
            <Link
              href="/industries"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-800"
            >
              Explore industries
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-12 grid gap-x-10 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => (
            <article key={ind.title} className="border-t border-ink-400 py-5">
              <p className="font-mono text-xs text-brand-700">0{i + 1}</p>
              <h3 className="mt-3 font-display text-lg font-semibold text-fog-100">
                {ind.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-fog-300">
                {ind.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
