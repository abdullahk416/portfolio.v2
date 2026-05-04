import { BentoGrid, type BentoItem } from "@/components/ui/bento-grid";
import {
  Code2,
  MonitorSmartphone,
  Server,
  Cloud,
  Wrench,
  Sparkles,
} from "lucide-react";

const stackItems: BentoItem[] = [
  {
    title: "Languages",
    meta: "5+ years",
    description:
      "Building reliably across paradigms — from object-oriented services to scripting and SQL. Strong typing where it matters, ergonomic syntax where it doesn't.",
    icon: <Code2 className="h-4 w-4 text-amber-400" />,
    status: "Core",
    tags: ["Java", "Python", "C#", "JS", "SQL"],
    colSpan: 2,
    hasPersistentHover: true,
  },
  {
    title: "Frontend",
    meta: "Production",
    description:
      "Next.js + Tailwind for fast, accessible UIs. Component systems, animations, and design tokens that scale.",
    icon: <MonitorSmartphone className="h-4 w-4 text-sky-400" />,
    status: "Live",
    tags: ["Next.js", "React", "Tailwind"],
  },
  {
    title: "Backend",
    meta: "Multi-stack",
    description:
      "REST APIs and server-side logic in ASP.NET Core, Flask, and Node — auth, queues, and external integrations.",
    icon: <Server className="h-4 w-4 text-emerald-400" />,
    status: "Active",
    tags: [".NET", "ASP.NET Core", "Flask", "Node"],
  },
  {
    title: "Cloud & Data",
    meta: "Scaling",
    description:
      "Deploying on AWS, Vercel, and Supabase. Optimised query design and live aggregations on Postgres + SQL Server.",
    icon: <Cloud className="h-4 w-4 text-blue-400" />,
    status: "Beta",
    tags: ["AWS", "Vercel", "Supabase", "Postgres"],
    colSpan: 2,
  },
  {
    title: "Tooling",
    meta: "Daily driver",
    description:
      "GitHub flows, Figma, Agile rituals, Jupyter — the workshop floor.",
    icon: <Wrench className="h-4 w-4 text-violet-400" />,
    status: "Daily",
    tags: ["GitHub", "Figma", "Agile", "Jupyter"],
  },
  {
    title: "AI / LLMs",
    meta: "Shipped",
    description:
      "Real-time AI assistants with Gemini API, AWS Transcribe and Polly. LLM-powered narratives that translate metrics into plain English.",
    icon: <Sparkles className="h-4 w-4 text-rose-400" />,
    status: "Building",
    tags: ["Gemini", "AWS AI", "LLMs", "Prompt Eng"],
    colSpan: 2,
  },
];

export function Stack() {
  return (
    <section className="relative overflow-hidden" id="stack">
      <div className="mx-auto max-w-7xl px-6 py-[120px] lg:px-12">
        <div className="mx-auto max-w-[640px] text-center">
          <div className="flex items-center justify-center gap-3 text-sm text-white/62">
            <span className="relative inline-block w-3.5 h-px bg-white/40" />
            <span className="font-serif italic text-[15px] text-white/90">
              The full stack
            </span>
          </div>
          <h2
            className="mt-6 text-[44px] font-medium tracking-[-0.035em] md:text-[64px]"
            style={{
              background: "linear-gradient(180deg,#fff 0%,#a3a3a3 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              lineHeight: 1.0,
            }}
          >
            One engineer,
            <br />
            across the lifecycle.
          </h2>
          <p className="mt-5 max-w-[500px] mx-auto text-[15px] leading-[1.7] text-white/62">
            Comfortable from the database to the design file. Below is the kit I
            reach for when shipping production work.
          </p>
        </div>

        <div className="mt-16 mx-auto max-w-5xl">
          <BentoGrid items={stackItems} />
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://github.com/abdullahk416"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[13px] text-white/70 transition-all duration-200 hover:bg-white/[0.08] hover:text-white"
          >
            See the full GitHub
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className="h-px bg-white/10" />
    </section>
  );
}
