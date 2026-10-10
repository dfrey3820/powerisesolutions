"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

type Variant = "primary" | "secondary" | "ghost";

const styles: Record<Variant, string> = {
  primary:
    "bg-brand-600 text-white hover:bg-brand-700 focus-visible:ring-brand-500",
  secondary:
    "bg-ink-50 text-fog-100 border border-ink-300 hover:bg-ink-100 focus-visible:ring-brand-500",
  ghost:
    "text-fog-100 hover:bg-ink-100 focus-visible:ring-brand-500"
};

export function Button({
  href,
  children,
  variant = "primary",
  arrow = false,
  className,
  onClick,
  type = "button"
}: {
  href?: string;
  children: React.ReactNode;
  variant?: Variant;
  arrow?: boolean;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}) {
  const cls = cn(
    "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-50",
    styles[variant],
    className
  );
  const content = (
    <>
      {children}
      {arrow && <ArrowRight className="h-4 w-4" />}
    </>
  );
  if (href) {
    return (
      <Link href={href} className={cls}>
        {content}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} className={cls}>
      {content}
    </button>
  );
}
