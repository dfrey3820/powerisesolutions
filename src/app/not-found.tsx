import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] py-24">
      <div className="container-x">
        <div className="mx-auto max-w-xl text-center">
          <p className="eyebrow">Error 404</p>
          <h1 className="mt-4 font-display text-5xl font-semibold tracking-tight text-fog-100 md:text-6xl">
            Signal lost.
          </h1>
          <p className="mt-4 text-base leading-relaxed text-fog-300">
            The page you asked for isn&apos;t on this network. Head back to the
            homepage or explore our solutions.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700"
            >
              <ArrowLeft className="h-4 w-4" />
              Back home
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-ink-300 bg-ink-50 px-5 py-2.5 text-sm font-semibold text-fog-100 hover:bg-ink-100"
            >
              Explore solutions
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
