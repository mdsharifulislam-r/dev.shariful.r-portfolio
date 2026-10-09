import { portfolio } from "@/data/portfolio";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Skills() {
  return (
    <AnimatedSection className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Technical Skills"
          title="Building reliable systems with practical engineering depth."
          description="I work across backend logic, data layers, product interfaces, and deployment workflows. The goal is dependable implementation rather than broad but shallow coverage."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {portfolio.skills.map((group) => (
            <div key={group.title} className="rounded-[1.6rem] border border-[var(--border)] bg-[var(--panel)] p-5 shadow-[0_16px_32px_rgba(17,24,39,0.04)]">
              <h3 className="mb-4 text-lg font-semibold text-[var(--foreground)]">{group.title}</h3>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm leading-6 text-[var(--muted)]">
                    <span className="inline-block h-2 w-2 rounded-full bg-[var(--accent)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
