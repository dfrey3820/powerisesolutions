"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

type Slide = {
  src: string;
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  imageAlt: string;
};

const slides: Slide[] = [
  {
    src: "/hero/slide-2.jpg",
    eyebrow: "Energy & Solar",
    title: "Make every unit of power count.",
    description:
      "See consumption, generation and load across your sites, all in one place.",
    href: "/services/energy-monitoring",
    imageAlt: "Connected devices and cloud technology representing energy monitoring"
  },
  {
    src: "/products/energy-meters-install.jpg",
    eyebrow: "Utility Monitoring",
    title: "Catch losses before they add up.",
    description:
      "Track usage and spot leaks, tampering and unusual readings sooner.",
    href: "/services/water-gas-metering",
    imageAlt: "Installed smart electricity meters and wiring"
  },
  {
    src: "/hero/slide-1.jpg",
    eyebrow: "Smart Homes",
    title: "Control your home from one place.",
    description:
      "Bring locks, lighting, switches and cameras together in one app.",
    href: "/services/smart-home",
    imageAlt: "Connected home with lighting, security and climate controls"
  },
  {
    src: "/hero/slide-3.jpg",
    eyebrow: "Cold Chain",
    title: "Keep every shipment in range.",
    description:
      "Follow temperature, location and route from collection through delivery.",
    href: "/services/cold-chain",
    imageAlt: "Refrigerated truck travelling between cold storage and delivery"
  },
  {
    src: "/dashboards/truck-telematics.jpg",
    eyebrow: "Truck & Fleet Telematics",
    title: "Know what is happening on the road.",
    description:
      "See vehicle location, fuel events and driver activity across your fleet.",
    href: "/services/truck-telematics",
    imageAlt: "Fleet tracking dashboard showing vehicle routes and fuel events"
  }
];

export function Hero() {
  const [index, setIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReducedMotion(preference.matches);
    updatePreference();
    preference.addEventListener("change", updatePreference);
    return () => preference.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;

    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 7000);
    return () => window.clearInterval(id);
  }, [reducedMotion]);

  const prev = () => setIndex((current) => (current - 1 + slides.length) % slides.length);
  const next = () => setIndex((current) => (current + 1) % slides.length);
  const active = slides[index];

  return (
    <section
      aria-label="Powerise solutions"
      aria-roledescription="carousel"
      className="relative isolate h-[min(680px,calc(68svh-var(--nav-h)))] min-h-[460px] overflow-hidden bg-ink-950 text-white"
    >
      <div className="absolute inset-0 -z-10">
        {slides.map((slide, i) => (
          <Image
            key={slide.src}
            src={slide.src}
            alt={i === index ? slide.imageAlt : ""}
            fill
            priority={i === 0}
            sizes="100vw"
            className={`object-cover transition-opacity duration-700 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/95 via-ink-950/70 to-ink-950/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/75 via-transparent to-ink-950/10" />
      </div>

      <div className="container-x relative flex h-full flex-col justify-end py-8 pr-14 sm:py-10 sm:pr-16 lg:py-12">
        <div className="max-w-3xl pb-8 sm:pb-10 lg:pb-12">
          <div aria-live="polite" aria-atomic="true" key={index} className="animate-[hero-copy-in_500ms_ease-out_both]">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-brand-300 sm:text-sm">
              {active.eyebrow}
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
              {active.title}
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
              {active.description}
            </p>
            <div className="mt-7">
              <Link
                href={active.href}
                className="inline-flex min-h-12 items-center gap-3 bg-brand-500 px-5 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
              >
                Explore solution
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute right-3 top-1/2 z-20 flex -translate-y-1/2 flex-col items-center sm:right-6">
          <div className="flex flex-col items-center gap-1 rounded-lg border border-white/20 bg-ink-950/45 p-1.5 shadow-lg backdrop-blur-md sm:gap-2 sm:p-2">
            <span className="mb-1 font-mono text-[10px] tabular-nums text-white/65 sm:text-xs">
              0{index + 1}<span className="text-white/35">/0{slides.length}</span>
            </span>
            <div className="flex flex-col items-center" role="group" aria-label="Choose a slide">
              {slides.map((slide, i) => (
                <button
                  key={slide.href}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Show ${slide.eyebrow} slide`}
                  aria-current={i === index ? "true" : undefined}
                  className="grid h-7 w-9 place-items-center"
                >
                  <span className={`rounded-full transition-all ${i === index ? "h-4 w-1 bg-brand-400" : "h-1.5 w-1.5 bg-white/45 hover:bg-white/80"}`} />
                </button>
              ))}
            </div>
          </div>
          <div className="mt-2 flex items-center justify-center gap-1" role="group" aria-label="Slide navigation">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous slide"
              className="grid h-9 w-9 place-items-center border border-white/25 text-white transition-colors hover:border-white hover:bg-white/10 sm:h-10 sm:w-10"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next slide"
              className="grid h-9 w-9 place-items-center border border-white/25 text-white transition-colors hover:border-white hover:bg-white/10 sm:h-10 sm:w-10"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}