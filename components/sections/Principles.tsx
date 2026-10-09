import { portfolio } from "@/data/portfolio";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Principles() {
  return (
    <AnimatedSection className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="How I Work"
          title="Engineering principles that keep delivery grounded."
          description="I focus on solving the right problem, designing for maintainability, and building systems that can be improved over time."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {portfolio.principles.map((principle) => (
            <div
              key={principle.number}
              className="rounded-[1.6rem] border border-[var(--border)] bg-[var(--panel)] p-5 shadow-[0_18px_36px_rgba(17,24,39,0.04)]"
            >
              <p className="mb-4 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
                {principle.number}
              </p>
              <h3 className="mb-3 text-xl font-semibold tracking-[-0.04em] text-[var(--foreground)]">
                {principle.title}
              </h3>
              <p className="text-sm leading-7 text-[var(--muted)]">{principle.description}</p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
