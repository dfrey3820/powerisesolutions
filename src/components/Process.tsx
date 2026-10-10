import { benefits } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";

export function Process() {
  return (
    <section className="bg-gradient-to-br from-brand-50/70 via-ink-50 to-ink-200/60 py-16 md:py-24">
      <div className="container-x">
        <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <SectionHeading
            eyebrow="Why Powerise"
            title={<>Better decisions start with a clearer picture.</>}
            description="Live data, dependable equipment and practical controls help teams act sooner and run more efficiently."
          />
          <div className="grid gap-x-10 md:grid-cols-2">
            {benefits.map((benefit, i) => (
              <article key={benefit.title} className="border-t border-ink-400 py-5">
                <p className="font-mono text-xs text-brand-700">0{i + 1}</p>
                <h3 className="mt-3 font-display text-lg font-semibold text-fog-100">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-fog-300">
                  {benefit.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
