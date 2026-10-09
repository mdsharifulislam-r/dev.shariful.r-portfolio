"use client";

import Image from "next/image";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { portfolio } from "@/data/portfolio";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navClass = scrolled
    ? "border-[var(--border)]/80 bg-[rgba(255,255,255,0.72)] backdrop-blur-xl shadow-[0_12px_32px_rgba(17,24,39,0.08)] dark:bg-[rgba(13,18,25,0.66)]"
    : "border-transparent bg-transparent";

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border px-3 py-2.5 transition-all duration-300 ${navClass}`}
      >
        <a href="#top" className="flex items-center gap-3 text-[var(--foreground)]" aria-label="Go to top">
          <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-[var(--border)] bg-[var(--panel)] p-1">
            <Image src="/logo.svg" alt="MD Shariful Islam logo" width={32} height={32} className="h-full w-full rounded-full object-cover" />
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {portfolio.navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={`mailto:${portfolio.email}`}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--panel)] px-4 py-2 text-sm font-medium text-[var(--foreground)] shadow-[0_10px_28px_rgba(17,24,39,0.05)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            {portfolio.email}
            <ArrowUpRight size={15} />
          </a>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileMenuOpen((current) => !current)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--panel)] text-[var(--foreground)]"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {mobileMenuOpen ? (
        <div className="mx-auto mt-3 max-w-6xl rounded-[1.5rem] border border-[var(--border)] bg-[var(--panel)] p-4 shadow-[0_20px_40px_rgba(17,24,39,0.08)] md:hidden">
          <div className="flex flex-col gap-3">
            {portfolio.navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-full px-3 py-2 text-sm font-medium text-[var(--muted)] transition-colors hover:bg-[var(--accent-soft)] hover:text-[var(--foreground)]"
              >
                {item.label}
              </a>
            ))}
            <a
              href={`mailto:${portfolio.email}`}
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--foreground)] px-4 py-2.5 text-sm font-medium text-[var(--background)]"
            >
              {portfolio.email}
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
