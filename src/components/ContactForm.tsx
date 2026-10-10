"use client";

import { useState } from "react";
import { Check, Loader2 } from "lucide-react";
import { Button } from "./Button";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "sent">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    await new Promise((r) => setTimeout(r, 900));
    setStatus("sent");
  };

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-ink-300 bg-ink-50 p-10 text-center">
        <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-brand-50 text-brand-600">
          <Check className="h-6 w-6" />
        </div>
        <h3 className="mt-5 font-display text-2xl font-semibold text-fog-100">
          Thank you.
        </h3>
        <p className="mt-2 text-sm text-fog-300">
          A Powerise engineer will reach out within one business day.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-5 rounded-2xl border border-ink-300 bg-ink-50 p-6 md:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" name="name" required />
        <Field label="Company" name="company" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone" name="phone" type="tel" />
      </div>
      <div>
        <label className="text-xs font-semibold uppercase tracking-widest text-fog-300">
          Interested in
        </label>
        <select
          name="interest"
          defaultValue=""
          className="mt-2 block w-full rounded-md border border-ink-300 bg-ink-50 px-3 py-2.5 text-sm text-fog-100 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
        >
          <option value="" disabled>
            Select a solution
          </option>
          <option value="energy-monitoring">Energy Monitoring</option>
          <option value="generator-monitoring">Generator Monitoring</option>
          <option value="cold-chain">Cold Chain</option>
          <option value="truck-telematics">Truck &amp; Fleet Telematics</option>
          <option value="utility-monitoring">Utility Monitoring</option>
          <option value="smart-home">Smart Home &amp; Locks</option>
          <option value="other">Something else</option>
        </select>
      </div>
      <div>
        <label className="text-xs font-semibold uppercase tracking-widest text-fog-300">
          How can we help?
        </label>
        <textarea
          name="message"
          rows={5}
          required
          placeholder="Tell us about your site, fleet or facility."
          className="mt-2 block w-full rounded-md border border-ink-300 bg-ink-50 px-3 py-2.5 text-sm text-fog-100 placeholder:text-fog-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
        />
      </div>
      <div className="flex items-center justify-between gap-4 border-t border-ink-300 pt-5">
        <p className="text-xs text-fog-300">
          We reply within one business day. No spam, ever.
        </p>
        <Button
          type="submit"
          variant="primary"
          arrow={status !== "submitting"}
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending
            </>
          ) : (
            "Send message"
          )}
        </Button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-widest text-fog-300">
        {label}
        {required && <span className="text-brand-600"> *</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="mt-2 block w-full rounded-md border border-ink-300 bg-ink-50 px-3 py-2.5 text-sm text-fog-100 placeholder:text-fog-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
      />
    </div>
  );
}
