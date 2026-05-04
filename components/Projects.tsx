import { HolographicCard } from "@/components/ui/holographic-card";

const projects = [
  {
    label: "Healthcare · 2025",
    title: "HealthCare Management System",
    description: "Full-stack appointment platform with patient registration, scheduling, and admin control. Twilio SMS confirmations cut no-show rates and improved trust.",
    tags: ["Next.js", "TypeScript", "Appwrite", "Twilio"],
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
        <path d="M12 21s-7-4.5-7-10a4 4 0 017-2.6A4 4 0 0119 11c0 5.5-7 10-7 10z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Quant · 2025",
    title: "S&P 500 Market Predictor",
    description: "Time-series forecasting model in scikit-learn and yfinance reaching 72% accuracy on historical data. Custom backtesting engine simulates real-world trading.",
    tags: ["Python", "scikit-learn", "pandas"],
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
        <path d="M3 18l4-4 3 3 5-6 6 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "AI · 2024",
    title: "AI Therapist",
    description: "Real-time mental-health assistant with voice and text — Gemini API, AWS Transcribe and Polly — hitting 95%+ speech-to-text accuracy.",
    tags: ["Next.js", "Flask", "AWS", "Gemini"],
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
        <path d="M12 4v8M8 16a4 4 0 008 0M5 10v3a7 7 0 0014 0v-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="9" y="3" width="6" height="9" rx="3" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
];

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] text-white/80">
      {children}
    </span>
  );
}

export function Projects() {
  return (
    <section className="relative" id="projects">
      <div className="mx-auto max-w-7xl px-6 py-[120px] lg:px-12">
        <div className="mx-auto max-w-[680px] text-center">
          <div className="flex items-center justify-center gap-3 text-sm text-white/62">
            <span className="relative inline-block w-3.5 h-px bg-white/40" />
            <span className="font-serif italic text-[15px] text-white/90">Projects</span>
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
            Built for the love of it.
            <br />
            Shipped on my own time.
          </h2>
          <p className="mt-5 text-[15px] leading-[1.7] text-white/62 max-w-[480px] mx-auto">
            Self-directed work where I pick the stack, the scope, and the standards.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-3 md:grid-cols-3">
          {projects.map((p) => (
            <HolographicCard key={p.title} className="group rounded-xl border border-white/10 bg-white/[0.03] p-[22px]">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-md border border-white/10 bg-white/[0.04] text-white/70">
                  {p.icon}
                </div>
                <span className="text-[12px] text-white">{p.label}</span>
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
                {p.title}
              </h3>
              <p className="mt-3 text-[13px] leading-[1.65] text-white/62">{p.description}</p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {p.tags.map((t) => <Pill key={t}>{t}</Pill>)}
              </div>
            </HolographicCard>
          ))}
        </div>
      </div>
      <div className="h-px bg-white/10" />
    </section>
  );
}
