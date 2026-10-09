import { ArrowUpRight, Code2, Globe } from "lucide-react";

import { portfolio } from "@/data/portfolio";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function Contact() {
  return (
    <AnimatedSection id="contact" className="px-4 pb-20 pt-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-[var(--border)] bg-[var(--panel)] p-6 shadow-[0_24px_50px_rgba(17,24,39,0.08)] sm:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
              Contact
            </p>
            <h2 className="text-4xl font-semibold tracking-[-0.06em] text-[var(--foreground)] sm:text-5xl">
              Have a problem worth solving?
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-8 text-[var(--muted)]">
              Let&apos;s discuss your product, backend architecture, or next engineering challenge.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href={`mailto:${portfolio.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--foreground)] px-5 py-3 text-sm font-medium text-[var(--background)]"
            >
              {portfolio.email}
              <ArrowUpRight size={16} />
            </a>
            <div className="flex gap-3">
              {portfolio.socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  aria-label={link.label}
                >
                  {link.label === "LinkedIn" ? <Globe size={16} /> : <Code2 size={16} />}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
