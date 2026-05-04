import Image from "next/image";
import { HolographicCard } from "@/components/ui/holographic-card";

interface Experience {
  company: string;
  role: string;
  year: string;
  description: string;
  tags: string[];
  logo: string;
}

const experiences: Experience[] = [
  {
    company: "Norsco Consulting",
    role: "Full-Stack Developer",
    year: "'26",
    description:
      "Real-time admin dashboard for EMA Fintech in C#, ASP.NET Core, and Blazor — visualizing live donation data for a Canadian nonprofit SaaS.",
    tags: ["C#", "Blazor", "SQL Server", "Chart.js"],
    logo: "/norsco.png",
  },
  {
    company: "Brand Love Inc.",
    role: "Full-Stack & UX Lead",
    year: "'26",
    description:
      "Built ContinuityOS — an executive dashboard aggregating ClickUp, Vapi, and Apollo, with an LLM that translates metrics into plain-English insights.",
    tags: ["Next.js", "Tailwind", "Supabase", "LLMs"],
    logo: "/brandloveinc_logo.jpeg",
  },
  {
    company: "Wouessi Digital",
    role: "Software Engineering Intern",
    year: "'25",
    description:
      "Web onboarding form for new hires in React with Java/Python backend handling account setup, permissions, and tool access — reducing manual coordination.",
    tags: ["React", "Java", "Python", "Agile"],
    logo: "/Wouessi_logo.jpeg",
  },
];

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] text-white/80">
      {children}
    </span>
  );
}

function SectionCard({ company, role, year, description, tags, logo }: Experience) {
  return (
    <HolographicCard className="group rounded-xl border border-white/10 bg-white/[0.03] p-[22px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-md border border-white/10 bg-white/[0.06]">
            <Image
              src={logo}
              alt={`${company} logo`}
              width={32}
              height={32}
              className="h-full w-full object-cover"
            />
          </div>
          <span className="text-[12px] text-white">{company}</span>
        </div>
        <span className="font-mono text-[10px] text-white/40">{year}</span>
      </div>
      <h3
        className="mt-7 text-[22px] font-medium leading-[1.05] tracking-[-0.02em]"
        style={{
          background: "linear-gradient(180deg,#fff 0%,#a3a3a3 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {role}
      </h3>
      <p className="mt-3 text-[13px] leading-[1.65] text-white/62">{description}</p>
      <div className="mt-5 flex flex-wrap gap-1.5">
        {tags.map((t) => <Pill key={t}>{t}</Pill>)}
      </div>
    </HolographicCard>
  );
}

export function Experience() {
  return (
    <section className="relative" id="work">
      <div className="mx-auto max-w-7xl px-6 py-[120px] lg:px-12">
        <div className="mx-auto max-w-[680px] text-center">
          <div className="flex items-center justify-center gap-3 text-sm text-white/62">
            <span className="relative inline-block w-3.5 h-px bg-white/40" />
            <span className="font-serif italic text-[15px] text-white/90">Experience</span>
          </div>
          <h2
            className="mt-6 text-[40px] font-medium tracking-[-0.035em] md:text-[56px]"
            style={{
              background: "linear-gradient(180deg,#fff 0%,#a3a3a3 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              lineHeight: 1.0,
            }}
          >
            Shipped in production.
            <br />
            From intern to lead.
          </h2>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-3 md:grid-cols-3">
          {experiences.map((exp) => <SectionCard key={exp.company} {...exp} />)}
        </div>
      </div>
      <div className="h-px bg-white/10" />
    </section>
  );
}
