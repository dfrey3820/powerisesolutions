"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";
import { pillars, productModels } from "@/lib/data";

const segmentLabels: Record<string, string> = {
  services: "Solutions",
  industries: "Industries",
  about: "About",
  contact: "Contact",
  privacy: "Privacy Policy",
  terms: "Terms of Service"
};

function labelFor(segment: string) {
  if (segmentLabels[segment]) return segmentLabels[segment];
  const pillar = pillars.find((p) => p.slug === segment);
  if (pillar) return pillar.title;
  const model = Object.values(productModels)
    .flat()
    .find((m) => m.slug === segment);
  if (model) return model.name;
  return segment.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

export function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 0) return null;

  const crumbs = segments.map((seg, i) => ({
    label: labelFor(seg),
    href: "/" + segments.slice(0, i + 1).join("/")
  }));

  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1.5 text-xs text-fog-300">
        <li>
          <Link
            href="/"
            className="flex items-center gap-1.5 transition-colors hover:text-brand-600"
          >
            <Home className="h-3.5 w-3.5" />
            Home
          </Link>
        </li>
        {crumbs.map((c, i) => {
          const last = i === crumbs.length - 1;
          return (
            <li key={c.href} className="flex items-center gap-1.5">
              <ChevronRight className="h-3 w-3 text-ink-600" aria-hidden />
              {last ? (
                <span aria-current="page" className="font-medium text-brand-700">
                  {c.label}
                </span>
              ) : (
                <Link
                  href={c.href}
                  className="transition-colors hover:text-brand-600"
                >
                  {c.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
