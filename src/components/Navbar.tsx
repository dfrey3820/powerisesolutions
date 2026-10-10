"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { navigation } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [desktopSubmenu, setDesktopSubmenu] = useState<string | null>(null);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors",
        scrolled
          ? "bg-ink-50/95 border-ink-300 backdrop-blur"
          : "bg-ink-50 border-transparent"
      )}
      style={{ height: "var(--nav-h)" }}
    >
      <div className="container-x h-full">
        <nav className="flex h-full items-center justify-between">
          <Logo size={32} />

          <ul className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              if (item.children) {
                return (
                  <li
                    key={item.href}
                    className="relative"
                    onMouseEnter={() => setSolutionsOpen(true)}
                    onMouseLeave={() => {
                      setSolutionsOpen(false);
                      setDesktopSubmenu(null);
                    }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center gap-1 rounded-md px-3.5 py-2 text-sm font-medium transition-colors",
                        active
                          ? "text-fog-100"
                          : "text-fog-300 hover:text-fog-100"
                      )}
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          "h-3.5 w-3.5 transition-transform",
                          solutionsOpen && "rotate-180"
                        )}
                      />
                    </Link>
                    <AnimatePresence>
                      {solutionsOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }}
                          transition={{ duration: 0.15 }}
                          className="absolute left-1/2 top-full -translate-x-1/2 pt-3"
                        >
                          <div className="w-[320px] rounded-xl border border-ink-300 bg-ink-50 p-1.5 shadow-xl shadow-ink-900/5">
                            {item.children.map((c) => (
                              <div
                                key={c.href}
                                className="relative border-b border-ink-300/70 last:border-b-0"
                                onMouseEnter={() =>
                                  c.children && setDesktopSubmenu(c.href)
                                }
                                onMouseLeave={() => setDesktopSubmenu(null)}
                              >
                                <div className="flex items-center rounded-xl transition-colors hover:bg-ink-100">
                                  <Link
                                    href={c.href}
                                    className="group flex min-w-0 flex-1 flex-col px-2.5 py-2"
                                  >
                                    <span className="text-sm font-medium text-fog-100 group-hover:text-brand-600">
                                      {c.label}
                                    </span>
                                  </Link>
                                  {c.children && (
                                    <span
                                      aria-hidden
                                      className="mr-2 grid h-8 w-8 flex-none place-items-center text-fog-300"
                                    >
                                      <ChevronDown
                                        className={cn(
                                          "h-4 w-4 -rotate-90 transition-opacity",
                                          desktopSubmenu !== c.href && "opacity-60"
                                        )}
                                      />
                                    </span>
                                  )}
                                </div>
                                {c.children && (
                                  <div
                                    className={cn(
                                      "absolute left-full top-0 z-10 ml-2 w-56 rounded-lg border border-ink-300 bg-ink-50 p-1.5 shadow-xl shadow-ink-900/5",
                                      "before:absolute before:-left-2 before:top-0 before:h-full before:w-2",
                                      desktopSubmenu === c.href ? "block" : "hidden"
                                    )}
                                  >
                                    {c.children.map((s) => (
                                      <Link
                                        key={s.href}
                                        href={s.href}
                                        className="block rounded-lg px-3 py-2 text-xs text-fog-300 transition-colors hover:bg-ink-100 hover:text-brand-600"
                                      >
                                        {s.label}
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              }
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "relative rounded-md px-3.5 py-2 text-sm font-medium transition-colors",
                      active
                        ? "text-fog-100"
                        : "text-fog-300 hover:text-fog-100"
                    )}
                  >
                    {item.label}
                    {active && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-brand-500"
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
            >
              Get in touch
              <span aria-hidden>→</span>
            </Link>
          </div>

          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-lg border border-ink-300 bg-ink-50 text-fog-100 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="container-x lg:hidden"
          >
            <div className="mt-2 rounded-2xl border border-ink-300 bg-ink-50 p-3 shadow-xl shadow-ink-900/5">
              <ul className="flex flex-col gap-0.5">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block rounded-lg px-3 py-2.5 text-sm font-medium text-fog-100 hover:bg-ink-100"
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <ul className="ml-3 border-l border-ink-300 pl-3">
                        {item.children.map((c) => (
                          <li key={c.href}>
                            <div className="flex items-center">
                              <Link
                                href={c.href}
                                className="flex-1 rounded-lg px-3 py-2 text-xs text-fog-300 hover:text-fog-100"
                              >
                                {c.label}
                              </Link>
                              {c.children && (
                                <button
                                  type="button"
                                  aria-label={`Show ${c.label} models`}
                                  aria-expanded={mobileSubmenu === c.href}
                                  onClick={() =>
                                    setMobileSubmenu((current) =>
                                      current === c.href ? null : c.href
                                    )
                                  }
                                  className="grid h-8 w-8 place-items-center rounded-md text-fog-300 hover:bg-ink-100 hover:text-fog-100"
                                >
                                  <ChevronDown
                                    className={cn(
                                      "h-4 w-4 transition-transform",
                                      mobileSubmenu === c.href && "rotate-180"
                                    )}
                                  />
                                </button>
                              )}
                            </div>
                            {c.children && (
                              <AnimatePresence initial={false}>
                                {mobileSubmenu === c.href && (
                                  <motion.ul
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="ml-3 overflow-hidden border-l border-ink-300 pl-3"
                                  >
                                    {c.children.map((s) => (
                                      <li key={s.href}>
                                        <Link
                                          href={s.href}
                                          className="block rounded-lg px-3 py-2 text-xs text-fog-400 hover:text-fog-100"
                                        >
                                          {s.label}
                                        </Link>
                                      </li>
                                    ))}
                                  </motion.ul>
                                )}
                              </AnimatePresence>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="mt-3 flex items-center justify-center rounded-md bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-700"
              >
                Get in touch →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
