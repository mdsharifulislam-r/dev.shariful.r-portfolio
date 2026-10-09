import { portfolio } from "@/data/portfolio";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <AnimatedSection id="about" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <SectionHeading
            eyebrow="About"
            title="More than writing code."
            description={portfolio.about}
          />

          <div className="space-y-5 text-base leading-8 text-[var(--muted)]">
            <p>
              I work across backend engineering, API design, database integration, frontend development, and deployment. My focus is on making systems understandable, maintainable, and ready for real production use.
            </p>
            <p>
              That means balancing architecture decisions with the practical realities of shipping features, integrating third-party services, and debugging issues in live environments.
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--panel)] p-6 shadow-[0_20px_44px_rgba(17,24,39,0.07)]">
          <div className="rounded-[1.5rem] border border-[var(--border)] bg-[linear-gradient(135deg,#fff,#f5ece7)] p-5">
            <div className="grid gap-4" aria-label="System architecture illustration">
              <div className="flex items-center justify-between rounded-2xl border border-[var(--border)] bg-white/70 px-4 py-3 text-sm text-[var(--muted)]">
                <span>Product layer</span>
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
              </div>
              <div className="flex items-center justify-center gap-4">
                <div className="rounded-2xl border border-[var(--border)] bg-white/80 px-4 py-3 text-sm text-[var(--muted)]">API</div>
                <div className="h-px flex-1 bg-[var(--border)]" />
                <div className="rounded-2xl border border-[var(--border)] bg-white/80 px-4 py-3 text-sm text-[var(--muted)]">Database</div>
              </div>
              <div className="grid grid-cols-3 gap-3 text-center text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                <div className="rounded-2xl border border-[var(--border)] bg-white/80 px-3 py-4">Auth</div>
                <div className="rounded-2xl border border-[var(--border)] bg-white/80 px-3 py-4">Workers</div>
                <div className="rounded-2xl border border-[var(--border)] bg-white/80 px-3 py-4">Deploy</div>
              </div>
              <div className="rounded-2xl border border-[var(--border)] bg-[rgba(217,109,86,0.08)] px-4 py-3 text-sm text-[var(--foreground)]">
                Observability, retries, and service health remain part of the design.
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
