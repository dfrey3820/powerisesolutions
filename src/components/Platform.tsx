"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Radio, Wifi, LineChart, BellRing, Zap, ChevronRight } from "lucide-react";
import { platformLayers } from "@/lib/data";
import { platformShots } from "@/lib/images";
import { SectionHeading } from "./SectionHeading";

const iconMap = {
  sense: Radio,
  connect: Wifi,
  analyze: LineChart,
  alert: BellRing,
  act: Zap
} as const;

const shotCaptions: Record<string, string> = {
  sense:   "DIN-rail smart meters installed in a real Powerise deployment.",
  connect: "Gateway feature map: RS485, CAN-bus, 4G, Wi-Fi and Ethernet.",
  analyze: "Live generator dashboard: RPM, fuel rate, run-hours and load.",
  alert:   "Mobile control app: engine, pressure, temperature and fuel.",
  act:     "Truck & fleet telematics: fuel, route and driver behaviour."
};

export function Platform() {
  const [active, setActive] = useState(platformLayers[0].key);
  const current = platformLayers.find((t) => t.key === active)!;
  const Icon = iconMap[active as keyof typeof iconMap];
  const shot = platformShots[active];

  return (
    <section className="relative border-y border-ink-300 bg-ink-100 py-20 md:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="The Powerise platform"
          title={
            <>
              One stack.{" "}
              <span className="text-brand-600">Five clear layers.</span>
            </>
          }
          description="Powerise Cloud runs the whole pipeline, from ruggedised field sensors to the DIN-rail IoT gateway, cloud analytics and remote-control actions."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[300px_1fr]">
          <div className="rounded-2xl border border-ink-300 bg-ink-50 p-2">
            <ul className="flex flex-col gap-1">
              {platformLayers.map((t) => {
                const TabIcon = iconMap[t.key as keyof typeof iconMap];
                const isActive = t.key === active;
                return (
                  <li key={t.key}>
                    <button
                      onClick={() => setActive(t.key)}
                      className={`relative flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition-colors ${
                        isActive
                          ? "bg-brand-50 text-fog-100"
                          : "text-fog-300 hover:bg-ink-100 hover:text-fog-100"
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="platform-indicator"
                          className="absolute inset-y-2 left-0 w-1 rounded-r-full bg-brand-500"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                        />
                      )}
                      <span
                        className={`grid h-8 w-8 place-items-center rounded-lg ${
                          isActive
                            ? "bg-brand-600 text-white"
                            : "bg-ink-100 text-fog-300"
                        }`}
                      >
                        <TabIcon className="h-4 w-4" />
                      </span>
                      <span className="text-sm font-medium">{t.label}</span>
                      <ChevronRight
                        className={`ml-auto h-4 w-4 transition-transform ${
                          isActive ? "translate-x-1 text-brand-600" : ""
                        }`}
                      />
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="relative overflow-hidden rounded-2xl border border-ink-300 bg-ink-50 p-8 md:p-10"
          >
            <div className="grid gap-8 md:grid-cols-[1fr_1fr]">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-ink-300 bg-ink-100 px-3 py-1 text-[11px] font-medium uppercase tracking-widest text-brand-600">
                  <Icon className="h-3.5 w-3.5" />
                  {current.label}
                </span>
                <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight text-fog-100 md:text-3xl">
                  {current.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-fog-300 md:text-base">
                  {current.body}
                </p>
                <ul className="mt-6 flex flex-col gap-2.5">
                  {current.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-fog-100">
                      <span className="mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full bg-brand-500 text-white">
                        <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M2 6l3 3 5-6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              <figure className="flex flex-col">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-ink-300 bg-ink-100">
                  <Image
                    src={shot}
                    alt={shotCaptions[active] ?? current.title}
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-contain"
                  />
                </div>
                <figcaption className="mt-3 text-xs text-fog-300">
                  {shotCaptions[active]}
                </figcaption>
              </figure>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
