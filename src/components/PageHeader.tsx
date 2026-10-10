import { Breadcrumbs } from "./Breadcrumbs";

export function PageHeader({
  eyebrow,
  title,
  description
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-ink-300 bg-gradient-to-b from-ink-200 via-ink-100 to-ink-100">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-[-8%] h-96 w-96 rounded-full bg-brand-200/35 blur-3xl"
      />
      <div className="container-x relative pb-16 pt-8 md:pb-24 md:pt-10">
        <Breadcrumbs />
        <div className="mt-10 max-w-3xl md:mt-14">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-fog-100 sm:text-5xl md:text-[3.25rem] md:leading-[1.05]">
            {title}
          </h1>
          {description && (
            <p className="mt-5 text-base leading-relaxed text-fog-300 md:text-lg">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
