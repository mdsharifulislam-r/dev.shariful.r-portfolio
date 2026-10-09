import Image from "next/image";

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

        <div className="group relative overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--panel)] p-2 shadow-[0_20px_44px_rgba(17,24,39,0.07)]">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem]">
            <Image
              src="/images/about-workspace.png"
              alt="Developer working at a laptop"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover grayscale-[0.75] contrast-[1.08] transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
