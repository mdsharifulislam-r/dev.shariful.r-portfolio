"use client";

import Image from "next/image";
import { ArrowUpRight, Code2, Link2 } from "lucide-react";
import { motion } from "framer-motion";

import type { Project } from "@/data/portfolio";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.2 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--panel)] p-5 shadow-[0_18px_40px_rgba(17,24,39,0.06)] sm:p-6"
    >
      <div className="mb-6 overflow-hidden rounded-[1.6rem] border border-[var(--border)] bg-[linear-gradient(135deg,var(--accent-soft),rgba(255,255,255,0.35))] p-3">
        <div className="relative h-48 overflow-hidden rounded-[1.2rem] border border-[rgba(17,24,39,0.08)] bg-[radial-gradient(circle_at_top_left,_rgba(217,109,86,0.18),transparent_35%),linear-gradient(135deg,#ffffff,#f4eee8)]">
          <Image
            src={project.image ?? "/images/hero-portrait.png"}
            alt={`${project.title} project preview`}
            fill
            className="object-cover grayscale-[0.75] contrast-[1.08]"
          />
        </div>
      </div>

      <div className="mb-5 flex items-center justify-between gap-3">
        <span className="rounded-full border border-[rgba(217,109,86,0.25)] bg-[var(--accent-soft)] px-2.5 py-1 text-[0.62rem] font-medium uppercase tracking-[0.18em] text-[var(--accent)]">
          {project.category}
        </span>
        <span className="text-[0.72rem] uppercase tracking-[0.18em] text-[var(--muted)]">{project.status}</span>
      </div>

      <div className="mb-3 flex items-center justify-between gap-4">
        <h3 className="text-2xl font-semibold tracking-[-0.05em] text-[var(--foreground)]">{project.title}</h3>
        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-white/80 text-[var(--foreground)] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1">
          <ArrowUpRight size={16} />
        </div>
      </div>

      <p className="mb-4 text-sm uppercase tracking-[0.18em] text-[var(--muted)]">{project.role}</p>
      <p className="mb-5 text-sm leading-7 text-[var(--muted)]">
        <span className="font-medium text-[var(--foreground)]">Problem:</span> {project.problem}
      </p>
      <p className="mb-6 text-sm leading-7 text-[var(--muted)]">
        <span className="font-medium text-[var(--foreground)]">Solution:</span> {project.solution}
      </p>

      <div className="mt-auto flex flex-wrap gap-2">
        {project.tech.map((item) => (
          <span
            key={item}
            className="rounded-full border border-[var(--border)] bg-[rgba(255,255,255,0.5)] px-2.5 py-1 text-[0.72rem] text-[var(--muted)]"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {project.githubUrl ? (
          <a href={project.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-3 py-2 text-sm font-medium text-[var(--foreground)] hover:border-[var(--accent)] hover:text-[var(--accent)]">
            <Code2 size={15} />
            GitHub
          </a>
        ) : null}
        {project.demoUrl ? (
          <a href={project.demoUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[var(--foreground)] px-3 py-2 text-sm font-medium text-[var(--background)]">
            <Link2 size={15} />
            Live demo
          </a>
        ) : null}
        {project.caseStudyUrl ? (
          <a href={project.caseStudyUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-3 py-2 text-sm font-medium text-[var(--foreground)] hover:border-[var(--accent)] hover:text-[var(--accent)]">
            Case study
            <ArrowUpRight size={15} />
          </a>
        ) : null}
      </div>
    </motion.article>
  );
}
