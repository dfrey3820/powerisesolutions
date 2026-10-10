import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { CTA } from "@/components/CTA";
import { Stats } from "@/components/Stats";
import { company, vision, process } from "@/lib/data";
import { Check, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Powerise Solutions Limited is a cutting-edge IoT provider of smart energy, cold-chain and connected-home platforms."
};

/**
 * "How we deliver" points, drawn from the client's own capability decks.
 * These are verifiable statements about the system, not fabricated bios.
 */
const capabilities = [
  {
    title: "Comprehensive solution stack",
    body: "One portfolio across energy, water, gas, logistics, cold chain and home automation, with one accountable partner from sensor to dashboard."
  },
  {
    title: "Data-driven insights",
    body: "Continuous telemetry, automated audit reports and actionable analytics turn readings from meters and sensors into decisions your team can act on."
  },
  {
    title: "Resilient in the field",
    body: "IP64/IP67 rugged enclosures and multi-network connectivity (4G, Wi-Fi, WLAN, Ethernet) with 2G fallback for last-mile reliability."
  },
  {
    title: "Open protocols, no lock-in",
    body: "The gateway supports HTTP, MQTT, Modbus TCP and Modbus RTU. Integrate it with your existing ERP, billing or M-Pesa systems via API."
  },
  {
    title: "On-device data safety",
    body: "Up to 50,000 readings stored on each logger, with over-the-air firmware upgrades and AP Wi-Fi configuration for painless commissioning."
  },
  {
    title: "Dedicated implementation support",
    body: "A hands-on delivery team that walks the site, installs around live operations and stays on the account after go-live."
  }
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Powerise"
        title={<>Intelligent IoT for a connected Africa.</>}
        description={company.intro}
      />

      <section className="py-20 md:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          <div>
            <p className="eyebrow">Our vision</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-fog-100 md:text-4xl">
              {vision.headline}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-fog-300 md:text-lg">
              {vision.body}
            </p>
            <div className="mt-8 flex items-start gap-3 rounded-2xl border border-ink-300 bg-ink-100 p-5">
              <MapPin className="mt-0.5 h-5 w-5 flex-none text-brand-600" />
              <div>
                <p className="text-sm font-semibold text-fog-100">Head Office</p>
                <p className="text-sm text-fog-300">{company.address}</p>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            {vision.whyUs.map((w) => (
              <div
                key={w.title}
                className="rounded-2xl border border-ink-300 bg-ink-50 p-6"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-1 grid h-6 w-6 place-items-center rounded-full bg-brand-500 text-white">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-fog-100">
                      {w.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-fog-300">
                      {w.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Stats />

      <section className="bg-gradient-to-b from-ink-50 to-ink-200/60 py-20 md:py-24">
        <div className="container-x">
          <div className="max-w-2xl">
            <p className="eyebrow">How we deliver</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-fog-100 md:text-4xl">
              A four-step engagement, built on evidence.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-fog-300">
              We combine on-site assessment with continuous, real-time
              monitoring. Every recommendation is anchored to measured data,
              not opinions.
            </p>
          </div>
          <ol className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {process.map((p) => (
              <li
                key={p.step}
                className="rounded-2xl border border-ink-300 bg-ink-50 p-6"
              >
                <p className="font-mono text-xs uppercase tracking-widest text-brand-600">
                  Step {p.step}
                </p>
                <h3 className="mt-3 font-display text-lg font-semibold text-fog-100">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-fog-300">
                  {p.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-y border-ink-300 bg-gradient-to-br from-ink-100 via-brand-50/50 to-ink-100 py-20 md:py-24">
        <div className="container-x">
          <div className="max-w-2xl">
            <p className="eyebrow">Our system & support</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-fog-100 md:text-4xl">
              What you can count on from Powerise.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-fog-300">
              Every capability below is verifiable in the Powerise product
              documentation. We make no marketing claims we can&apos;t back with a spec
              sheet.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-ink-300 bg-ink-50 p-6"
              >
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-50 text-brand-600">
                  <Check className="h-4 w-4" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-fog-100">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-fog-300">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
