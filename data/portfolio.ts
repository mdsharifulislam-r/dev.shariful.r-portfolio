export type SocialLink = {
  label: string;
  href: string;
};

export type NavigationItem = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  problem: string;
  solution: string;
  role: string;
  category: string;
  tech: string[];
  status: "Completed" | "In progress";
  githubUrl?: string;
  demoUrl?: string;
  caseStudyUrl?: string;
  image?: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type ExperienceItem = {
  title: string;
  company: string;
  dates: string;
  employmentType?: string;
  summary: string;
  highlights: string[];
  verification?: string;
};

export type Principle = {
  number: string;
  title: string;
  description: string;
};

export const portfolio = {
  name: "MD Shariful Islam",
  title: "Software Engineer | Backend Engineer | Full-Stack Developer",
  location: "Bangladesh",
  email: "devsharif9@gmail.com",
  availability: "Available for selected product and backend engineering work.",
  navItems: [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ] as NavigationItem[],
  socialLinks: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/md-shariful-islam-160311229/" },
    { label: "GitHub", href: "https://github.com/mdsharifulislam-r" },
  ] as SocialLink[],
  hero: {
    eyebrow: "SOFTWARE ENGINEER / BACKEND SPECIALIST",
    headline: ["Building systems.", "Engineering solutions."],
    intro:
      "I’m MD Shariful Islam, a software developer focused on building robust backend systems, scalable APIs, and full-stack applications that solve real-world problems.",
    role: "Backend systems • API engineering • Production deployment",
  },
projects: [
  {
    title: "BackBuilder",
    problem:
      "Backend projects can require repetitive setup for APIs, application structure, configuration, and common development workflows.",
    solution:
      "Worked on a backend-focused project intended to streamline backend development and provide a reusable foundation for building server-side applications.",
    role: "Backend Developer",
    category: "Backend tooling / developer productivity",
    tech: [
      "Node.js",
      "TypeScript",
      "REST API",
      "Backend Architecture",
    ],
    status: "Completed",
    demoUrl: "https://back-builder-omega.vercel.app/",
    githubUrl: "https://github.com/mdsharifulislam-r/BackBuilder",
    caseStudyUrl: "",
    image: "/images/projects/backbuilder.png",
  },
  {
    title: "Jobarman",
    problem:
      "A job platform needed a dependable backend and production environment to support job-related workflows, application functionality, and ongoing platform operations.",
    solution:
      "Worked on backend development, database integration, server configuration, and production deployment. Helped configure the application environment and troubleshoot deployment and infrastructure issues.",
    role: "Backend Developer & Deployment Engineer",
    category: "Job platform / backend infrastructure",
    tech: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Docker",
      "Linux",
      "Nginx",
      "AWS EC2",
      "CI/CD",
    ],
    status: "Completed",
    demoUrl: "https://jobarman.com",
    githubUrl: "",
    caseStudyUrl: "",
    image: "/images/projects/jobarman.png",
  },
  {
    title: "Sendit",
    problem:
      "A delivery-focused platform needed a reliable backend to manage application workflows, API integrations, data persistence, and production operations.",
    solution:
      "Contributed to backend development and infrastructure tasks, focusing on API reliability, database integration, server configuration, and deployment workflows.",
    role: "Backend Developer",
    category: "Backend platform / production deployment",
    tech: [
      "Node.js",
      "TypeScript",
      "REST API",
      "Database Integration",
      "Linux",
      "Nginx",
    ],
    status: "Completed",
    demoUrl: "",
    githubUrl: "https://github.com/mdsharifulislam-r/sendit-app-backend",
    caseStudyUrl: "",
    image: "/images/projects/sendit.png",
  },
  {
    title: "NestJS Template",
    problem:
      "Building distributed backend applications from scratch often requires repetitive service configuration, communication patterns, and infrastructure setup.",
    solution:
      "Developed a reusable NestJS microservices project structure designed to organize independent services, establish service-to-service communication, and provide a foundation for scalable backend applications.",
    role: "Backend Developer / Project Architect",
    category: "Microservices / backend architecture",
    tech: [
      "NestJS",
      "Node.js",
      "TypeScript",
      "Microservices",
      "REST API",
      "Docker",
      "Redis",
      "PostgreSQL",
    ],
    status: "Completed",
    demoUrl: "",
    githubUrl: "https://github.com/mdsharifulislam-r/nest-js-microservice-template",
    caseStudyUrl: "",
    image: "/images/projects/nestjs-template.png",
  },
] as Project[],
  skills: [
    {
      title: "Backend",
      items: [
        "Node.js",
        "TypeScript",
        "Express.js",
        "NestJS",
        "REST APIs",
        "Authentication and authorization",
        "Webhooks",
      ],
    },
    {
      title: "Frontend",
      items: ["React", "Next.js", "JavaScript", "TypeScript", "HTML", "CSS"],
    },
    {
      title: "Databases and caching",
      items: ["PostgreSQL", "MongoDB", "Redis"],
    },
    {
      title: "Infrastructure and DevOps",
      items: ["Docker", "Linux", "Nginx", "AWS", "GitHub Actions", "CI/CD"],
    },
    {
      title: "Messaging and architecture",
      items: [
        "Microservices",
        "Background jobs",
        "Goroutines and channels",
        "Queue-based processing",
        "Long polling and real-time communication concepts",
      ],
    },
    {
      title: "Payments and integrations",
      items: ["Stripe", "Webhooks", "Third-party API integration"],
    },
  ] as SkillGroup[],
  experience: [
    {
      title: "Backend Developer",
      company: "Sparktech Agency",
      dates: "Feb 2025 — Present",
      employmentType: "Full-time",
      summary:
        "Working on backend services, API flows, and production-ready application features in a product-focused engineering environment.",
      highlights: [
        "Built and maintained backend logic for application services and API endpoints.",
        "Collaborated on database-backed product features and deployment workflows.",
        "Worked with production-facing systems that needed reliability, monitoring, and clean integration patterns.",
      ],
      verification:
        "Role title and dates should be confirmed against official records before publishing a formal timeline.",
    },
    {
      title: "MERN Stack Developer Intern",
      company: "BD Task Ltd",
      dates: "Sep 2024 — Dec 2024",
      employmentType: "Internship",
      summary:
        "Worked as a MERN Stack Developer Intern, gaining practical experience in full-stack web development and backend application development.",
      highlights: [
        "Worked with MongoDB, Express.js, React.js, and Node.js.",
        "Gained hands-on experience in REST API development and database integration.",
        "Developed practical skills in application architecture, debugging, and full-stack development workflows.",
      ],
    },
  ] as ExperienceItem[],
  principles: [
    { number: "01", title: "Understand the problem.", description: "I begin by clarifying the real business and technical constraints before writing code or designing architecture." },
    { number: "02", title: "Design the architecture.", description: "I map how services, data flows, and integrations fit together so the solution remains maintainable and predictable." },
    { number: "03", title: "Build maintainable solutions.", description: "I focus on clean interfaces, consistent patterns, and code that can evolve with the product rather than only satisfying the immediate request." },
    { number: "04", title: "Test integrations and edge cases.", description: "I verify payment flows, API contracts, data states, and failure paths before deployment so production issues are reduced." },
    { number: "05", title: "Deploy, monitor, and improve.", description: "I consider the full lifecycle from release to runtime health so systems remain reliable after launch." },
  ] as Principle[],
  about:
    "I work across backend engineering, API design, database integration, frontend development, and deployment. The goal is always the same: build systems that are dependable, understandable, and ready for real usage.",
};
