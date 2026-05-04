import { HolographicCard } from "@/components/ui/holographic-card";

export function CTA() {
  return (
    <section className="relative" id="contact">
      <div className="mx-auto max-w-7xl px-6 py-[120px] lg:px-12">
        <div className="mx-auto max-w-[680px] text-center">
          <h2
            className="text-[40px] font-medium tracking-[-0.035em] md:text-[56px]"
            style={{
              background: "linear-gradient(180deg,#fff 0%,#a3a3a3 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              lineHeight: 1.0,
            }}
          >
            Let&apos;s build something.
          </h2>
          <p className="mt-5 max-w-[480px] mx-auto text-[15px] leading-[1.7] text-white/62">
            Open to internships, contract work, and ambitious side projects. Fastest reply is by email.
          </p>
        </div>

        <div className="mt-14 mx-auto grid max-w-[920px] grid-cols-1 gap-3 md:grid-cols-2">
          <HolographicCard className="rounded-xl border border-white/10 bg-white/[0.03]">
          <a
            href="mailto:abdullah.khan14@ontariotechu.net"
            className="group block p-7"
          >
            <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.1em] text-white/40">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              Direct line
            </div>
            <h3
              className="mt-8 text-[28px] font-medium leading-none tracking-[-0.02em]"
              style={{
                background: "linear-gradient(180deg,#fff 0%,#a3a3a3 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Email me
            </h3>
            <p className="mt-2 text-[13px] text-white/62">abdullah.khan14@ontariotechu.net</p>
            <div className="mt-7 flex items-center justify-between">
              <span className="text-[12px] text-white/40">Usually within a day.</span>
              <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] text-white/70">
                Compose →
              </span>
            </div>
          </a>
          </HolographicCard>

          <HolographicCard className="rounded-xl border border-white/10 bg-white/[0.03]">
          <a
            href="https://linkedin.com/in/abdvllah-khan"
            target="_blank"
            rel="noopener"
            className="group block p-7"
          >
            <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.1em] text-white/40">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43A2.06 2.06 0 113.27 5.36a2.07 2.07 0 012.07 2.07zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.99 0 1.78-.77 1.78-1.72V1.72C24 .77 23.21 0 22.22 0z" />
              </svg>
              Network
            </div>
            <h3
              className="mt-8 text-[28px] font-medium leading-none tracking-[-0.02em]"
              style={{
                background: "linear-gradient(180deg,#fff 0%,#a3a3a3 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              LinkedIn
            </h3>
            <p className="mt-2 text-[13px] text-white/62">linkedin.com/in/abdvllah-khan</p>
            <div className="mt-7 flex items-center justify-between">
              <span className="text-[12px] text-white/40">Connect &amp; chat shop.</span>
              <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] text-white/70">
                View profile →
              </span>
            </div>
          </a>
          </HolographicCard>
        </div>
      </div>
    </section>
  );
}
