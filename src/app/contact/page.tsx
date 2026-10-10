import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ContactForm } from "@/components/ContactForm";
import { company } from "@/lib/data";
import { Clock, Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to Powerise Solutions, visit us in Nairobi, email or book a walkthrough."
};

const details = [
  {
    icon: MapPin,
    label: "Head Office",
    value: company.address
  },
  {
    icon: Mail,
    label: "Email",
    value: company.email,
    href: `mailto:${company.email}`
  },
  {
    icon: Clock,
    label: "Hours",
    value: company.hours
  }
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get in touch"
        title={<>Let&apos;s design your first deployment.</>}
        description="Tell us about your site, fleet or facility. A Powerise engineer will reply within one business day with a costed next step."
      />

      <section className="bg-gradient-to-b from-ink-50 to-brand-50/40 py-16 md:py-20">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-4">
            {details.map((d) => (
              <div
                key={d.label}
                className="flex items-start gap-4 rounded-2xl border border-ink-300 bg-ink-50 p-5"
              >
                <span className="grid h-10 w-10 flex-none place-items-center rounded-xl bg-brand-50 text-brand-600">
                  <d.icon className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-fog-300">
                    {d.label}
                  </p>
                  {d.href ? (
                    <a
                      href={d.href}
                      className="mt-1 block text-sm text-fog-100 hover:text-brand-600"
                    >
                      {d.value}
                    </a>
                  ) : (
                    <p className="mt-1 text-sm text-fog-100">{d.value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="overflow-hidden rounded-2xl border border-ink-300">
              <iframe
                title="Powerise Solutions on Google Maps"
                src="https://www.google.com/maps?q=Jabavu+Lane,+Hurlingham,+Nairobi&output=embed"
                className="block h-72 w-full border-0"
                loading="lazy"
              />
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
