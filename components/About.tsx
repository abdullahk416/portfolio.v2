"use client";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import { Monitor, Server, Zap, Cloud, Database, Layers } from "lucide-react";

const timelineData = [
  {
    id: 1,
    title: "Frontend",
    date: "React · Next",
    content: "Fast, accessible interfaces with Next.js, TypeScript, and Tailwind — from component system to production.",
    category: "Frontend",
    icon: Monitor,
    relatedIds: [2, 6],
    status: "completed" as const,
    energy: 95,
  },
  {
    id: 2,
    title: "Backend",
    date: ".NET · Python",
    content: "APIs and business logic in ASP.NET Core, Flask, and Node.js — strongly typed schemas at every layer.",
    category: "Backend",
    icon: Server,
    relatedIds: [1, 3, 5],
    status: "completed" as const,
    energy: 92,
  },
  {
    id: 3,
    title: "AI / LLMs",
    date: "Gemini · AWS",
    content: "Real-time AI assistants using Gemini API, AWS Transcribe and Polly — voice, text, and contextual retrieval.",
    category: "AI",
    icon: Zap,
    relatedIds: [2, 4],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 4,
    title: "Cloud",
    date: "AWS · Vercel",
    content: "Shipping and scaling across AWS, Vercel, and Supabase — auth, storage, edge functions all wired up.",
    category: "Cloud",
    icon: Cloud,
    relatedIds: [2, 3],
    status: "completed" as const,
    energy: 91,
  },
  {
    id: 5,
    title: "Data & SQL",
    date: "SQL · Postgres",
    content: "Optimised query design, schema architecture, and live aggregations — surface insights without killing perf.",
    category: "Data",
    icon: Database,
    relatedIds: [1, 2],
    status: "completed" as const,
    energy: 93,
  },
  {
    id: 6,
    title: "Design Systems",
    date: "Figma · Tailwind",
    content: "Component libraries, spacing tokens, and design-to-code pipelines — consistency enforced at the source.",
    category: "Design",
    icon: Layers,
    relatedIds: [1],
    status: "completed" as const,
    energy: 90,
  },
];

export function About() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-[120px] lg:px-12">
        <div className="mx-auto max-w-[640px] text-center">
          <div className="flex items-center justify-center gap-3 text-sm text-white/62">
            <span className="relative inline-block w-3.5 h-px bg-white/40 after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:border-t after:border-r after:border-white/40 after:w-1.5 after:h-1.5 after:rotate-45" />
            <span className="font-serif italic text-[15px] text-white/90">Built with intent</span>
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
            Designed for clarity.
            <br />
            Built for scale.
          </h2>
          <p className="mt-5 max-w-[480px] mx-auto text-[15px] leading-[1.7] text-white/78">
            I work across the stack — modern web, .NET services, and the AI plumbing in between.
            Equal parts engineer and designer, with a bias for taste and reliability.
          </p>
          <p className="mt-3 text-[13px] text-white/40">
            Click any node to explore
          </p>
        </div>

        <div className="mt-8">
          <RadialOrbitalTimeline timelineData={timelineData} />
        </div>
      </div>
      <div className="h-px bg-white/10" />
    </section>
  );
}
