import { portfolio } from "@/data/portfolio";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function Projects() {
  return (
    <AnimatedSection id="work" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Selected Work"
          title="Engineering real-world solutions."
          description="I build backend systems and application experiences that are practical, resilient, and grounded in the needs of real products and production environments."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {portfolio.projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
