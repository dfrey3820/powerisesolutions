import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="border-y border-ink-800 bg-ink-900 py-16 text-white md:py-20">
      <div className="container-x grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-300">
            Ready to see it live?
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
            Book a 30-minute walkthrough. <span className="text-brand-300">Bring your worst site.</span>
          </h2>
        </div>
        <div className="max-w-xl">
          <p className="text-base leading-relaxed text-ink-300 md:text-lg">
            We&apos;ll take a real meter, a real genset or a real cold room and wire it into Powerise Cloud on-screen. If it doesn&apos;t change how you run operations, we&apos;ll buy the coffee.
          </p>
          <Link
            href="/contact"
            className="mt-7 inline-flex min-h-12 items-center gap-3 bg-brand-500 px-5 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
          >
            Book a 30-minute walkthrough
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
