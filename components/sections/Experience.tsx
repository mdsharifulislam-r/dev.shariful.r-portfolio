import { portfolio } from "@/data/portfolio";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Experience() {
  return (
    <AnimatedSection id="experience" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Experience"
          title="Product-minded engineering with real systems context."
          description="I value work that connects backend reliability, product goals, and deployment discipline."
        />

        <div className="relative ml-1 pl-6 before:absolute before:left-0 before:top-0 before:h-full before:w-px before:bg-[var(--border)]">
          {portfolio.experience.map((item) => (
            <article key={`${item.company}-${item.title}`} className="relative mb-8 last:mb-0">
              <span className="absolute -left-[1.7rem] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-[var(--background)] bg-[var(--accent)]" />
              <div className="rounded-[1.6rem] border border-[var(--border)] bg-[var(--panel)] p-5 shadow-[0_16px_32px_rgba(17,24,39,0.04)]">
                <div className="mb-3 flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold tracking-[-0.04em] text-[var(--foreground)]">{item.title}</h3>
                    <p className="mt-1 text-[var(--muted)]">{item.company}</p>
                  </div>
                  <div className="text-sm text-[var(--muted)] md:text-right">
                    <p>{item.dates}</p>
                    {item.employmentType ? <p className="mt-1">{item.employmentType}</p> : null}
                  </div>
                </div>

                <p className="mb-4 text-base leading-7 text-[var(--muted)]">{item.summary}</p>

                <ul className="space-y-2 text-sm leading-7 text-[var(--muted)]">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {item.verification ? (
                  <p className="mt-4 rounded-2xl border border-dashed border-[var(--border)] bg-[rgba(217,109,86,0.04)] px-3 py-2 text-sm text-[var(--muted)]">
                    {item.verification}
                  </p>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
