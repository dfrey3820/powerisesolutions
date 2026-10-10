const partners = [
  "Kenya Power",
  "Safaricom",
  "Davis & Shirtliff",
  "Total Energies",
  "Jubilee Holdings",
];

export function Partners() {
  return (
    <section aria-label="Our partners" className="border-t border-ink-300 bg-ink-100 py-9 md:py-11">
      <div className="container-x grid gap-5 md:grid-cols-[180px_1fr] md:items-center">
        <p className="eyebrow">Partners</p>
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-ink-100 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-ink-100 to-transparent" />
          <ul className="flex w-max animate-marquee items-center gap-12 pr-12">
            {[...partners, ...partners].map((name, i) => (
              <li
                key={`${name}-${i}`}
                aria-hidden={i >= partners.length}
                className="whitespace-nowrap font-display text-lg font-semibold text-fog-300 transition-colors hover:text-fog-100 sm:text-xl"
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
