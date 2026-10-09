"use client";

import Image from "next/image";
import { ArrowDown, Download } from "lucide-react";
import { motion } from "framer-motion";

import { portfolio } from "@/data/portfolio";

export function Hero() {
  return (
    <section id="top" className="relative px-4 pb-10 pt-8 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative"
        >
          <div className="mb-6 inline-flex items-center gap-2 px-2 py-1.5 text-[0.7rem] font-medium uppercase tracking-[0.24em] text-[var(--muted)] shadow-[0_12px_28px_rgba(17,24,39,0.04)]">
            {portfolio.hero.eyebrow}
          </div>

          <div className="space-y-5">
            <h1 className="max-w-xl text-4xl font-semibold leading-[0.95] tracking-[-0.07em] text-[var(--foreground)] sm:text-5xl lg:text-[4.2rem]">
              {portfolio.hero.headline.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>

            <p className="max-w-xl text-base leading-7 text-[var(--muted)] md:text-lg">
              {portfolio.hero.intro}
            </p>
          </div>

          <a
            href="/resume.pdf"
            download="MD-Shariful-Islam-Resume.pdf"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[var(--foreground)] px-5 py-3 text-sm font-medium text-[var(--background)] transition-transform duration-200 hover:-translate-y-0.5"
          >
            <Download size={16} />
            Download resume
          </a>

          <div className="mt-12 flex items-center gap-3 text-sm text-[var(--muted)]">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--panel)] text-[var(--foreground)]">
              <ArrowDown size={16} />
            </span>
            Scroll to explore
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute -left-8 top-16 hidden h-28 w-28 rounded-full border border-[var(--border)] bg-[var(--panel)] shadow-[0_25px_45px_rgba(17,24,39,0.08)] md:block" />
          <div className="absolute -right-6 bottom-10 hidden h-24 w-24 rounded-full border border-[var(--border)] bg-[var(--accent-soft)] md:block" />

          <div className="relative overflow-hidden rounded-[2.2rem] border border-[var(--border)] bg-[var(--panel)] p-5 shadow-[0_30px_75px_rgba(17,24,39,0.12)]">
            <div className="absolute left-6 top-6 rounded-full border border-[var(--border)] bg-[var(--panel)] px-3 py-1.5 text-[0.68rem] font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
              Hello, I&apos;m Shariful.
            </div>

            <div className="relative mt-12 overflow-hidden rounded-[1.8rem] border border-[var(--border)] bg-[linear-gradient(135deg,#fefdfc,#f3e8e2)] p-3 sm:p-6">
              <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_top_left,_rgba(217,109,86,0.19),transparent_30%)]" />
              <div className="relative overflow-hidden rounded-[1.4rem] border border-[rgba(17,24,39,0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.7),rgba(247,239,233,0.76))]">
                <div className="relative aspect-[0.96] w-full overflow-hidden bg-[#eae7e4]">
                  <Image
                    src="/images/hero-portrait.png"
                    alt="Portrait of MD Shariful Islam"
                    fill
                    priority
                    className="object-cover grayscale-[0.62] contrast-[1.08]"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
