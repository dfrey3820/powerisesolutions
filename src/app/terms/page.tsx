import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { company } from "@/lib/data";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of service for ${company.name}.`
};

export default function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Terms of Service"
        description={`The terms under which ${company.short} provides its IoT hardware, software and monitoring services.`}
      />
      <section className="py-16 md:py-20">
        <div className="container-x">
          <div className="mx-auto max-w-3xl space-y-8 text-fog-200">
            <div>
              <h2 className="font-display text-2xl font-semibold text-fog-100">
                1. Scope
              </h2>
              <p className="mt-3 text-fog-300">
                These terms apply to all customers of {company.name}. Detailed
                deliverables, pricing and SLAs are governed by the signed
                Statement of Work per engagement.
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl font-semibold text-fog-100">
                2. Uptime & SLAs
              </h2>
              <p className="mt-3 text-fog-300">
                Powerise Cloud targets 99.9% monthly uptime. Field hardware
                warranty is 24 months from commissioning; extended cover is
                available.
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl font-semibold text-fog-100">
                3. Data ownership
              </h2>
              <p className="mt-3 text-fog-300">
                Customers own all telemetry generated on their devices. We
                retain a limited licence to use anonymised, aggregated data to
                improve the platform.
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl font-semibold text-fog-100">
                4. Governing law
              </h2>
              <p className="mt-3 text-fog-300">
                These terms are governed by the laws of the Republic of Kenya.
                Disputes shall first be resolved amicably; unresolved matters
                referred to arbitration in Nairobi.
              </p>
            </div>
            <p className="text-sm text-fog-300">
              Last updated: {new Date().toLocaleDateString("en-GB")}. This is a
              placeholder, replace with your legally-reviewed version before
              launch.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
