import Image from "next/image";
import { Code2, Globe } from "lucide-react";

import { portfolio } from "@/data/portfolio";

export function Footer() {
  const year = 2026;

  return (
    <footer className="border-t border-[var(--border)] px-4 py-6 text-sm text-[var(--muted)] sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-[var(--border)] bg-[var(--panel)] p-1">
            <Image src="/logo.svg" alt="MD Shariful Islam logo" width={28} height={28} className="h-full w-full rounded-full object-cover" />
          </span>
          <span>{portfolio.name}</span>
        </div>

        <div className="flex items-center gap-4">
          {portfolio.socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-[var(--foreground)]"
            >
              {link.label === "LinkedIn" ? <Globe size={15} /> : <Code2 size={15} />}
              {link.label}
            </a>
          ))}
        </div>

        <p>© {year} {portfolio.name}</p>
      </div>
    </footer>
  );
}
