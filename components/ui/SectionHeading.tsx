type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "text-left";

  return (
    <div className={`mb-10 max-w-2xl ${alignment}`}>
      <p className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-[-0.06em] text-[var(--foreground)] md:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-[var(--muted)] md:text-lg">{description}</p>
    </div>
  );
}
