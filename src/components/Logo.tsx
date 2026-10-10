"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Powerise brandmark, SVG recreation of the original logo.
 *
 * Palette (sampled from the original PNG):
 *   green  #005a28  ·  #00a03d
 *   amber  #e68c1e  ·  #f0a642
 *   red    #dc4632
 */
export function LogoMark({
  className,
  size = 40,
  animated = true
}: {
  className?: string;
  size?: number;
  animated?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      aria-hidden="true"
      className={cn("shrink-0", className)}
    >
      <defs>
        <linearGradient id="pw-green" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#00a03d" />
          <stop offset="1" stopColor="#005a28" />
        </linearGradient>
        <linearGradient id="pw-amber" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f7b955" />
          <stop offset="0.55" stopColor="#e68c1e" />
          <stop offset="1" stopColor="#c26f0c" />
        </linearGradient>
        <filter id="pw-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.2" />
        </filter>
      </defs>

      {/* Green "P" letterform */}
      <path
        d="M14 6 h20 a17 17 0 0 1 0 34 H26 v18 h-12 z M26 18 v10 h8 a5 5 0 0 0 0 -10 z"
        fill="url(#pw-green)"
        fillRule="evenodd"
      />

      {/* Soft amber halo behind bolt */}
      {animated && (
        <path
          d="M38 8 L23 32 h8 l-3 18 L45 28 h-8 z"
          fill="#e68c1e"
          opacity="0.35"
          filter="url(#pw-glow)"
        >
          <animate
            attributeName="opacity"
            values="0.15;0.5;0.15"
            dur="2.4s"
            repeatCount="indefinite"
          />
        </path>
      )}

      {/* Amber lightning bolt */}
      <path
        d="M38 8 L23 32 h8 l-3 18 L45 28 h-8 z"
        fill="url(#pw-amber)"
        stroke="#7a3d00"
        strokeWidth="0.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Logo({
  className,
  size = 36,
  variant = "full",
  animated = true,
  href = "/"
}: {
  className?: string;
  size?: number;
  variant?: "full" | "mark" | "stacked";
  animated?: boolean;
  href?: string | null;
}) {
  const content =
    variant === "mark" ? (
      <LogoMark size={size} animated={animated} />
    ) : variant === "stacked" ? (
      <span className="flex flex-col items-center gap-1">
        <LogoMark size={size} animated={animated} />
        <span className="font-display text-[10px] font-bold uppercase tracking-[0.25em] leading-none">
          <span className="text-brand-red">Powerise</span>{" "}
          <span className="text-brand-green">Solutions</span>
        </span>
      </span>
    ) : (
      <span className="flex items-center gap-2.5">
        <LogoMark size={size} animated={animated} />
        <span className="flex flex-col leading-none">
          <span className="font-display text-[15px] font-extrabold uppercase tracking-[0.18em] text-brand-red">
            Powerise
          </span>
          <span className="mt-0.5 font-display text-[10px] font-bold uppercase tracking-[0.35em] text-brand-green">
            Solutions
          </span>
        </span>
      </span>
    );

  if (href === null) {
    return <span className={cn("inline-flex items-center", className)}>{content}</span>;
  }
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center transition-opacity hover:opacity-90",
        className
      )}
      aria-label="Powerise Solutions, home"
    >
      {content}
    </Link>
  );
}
