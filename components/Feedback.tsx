import Image from "next/image";
import { HolographicCard } from "@/components/ui/holographic-card";

export function Feedback() {
  return (
    <section className="relative" id="highlights">
      <div className="mx-auto max-w-7xl px-6 py-[120px] lg:px-12">
        <div className="mx-auto max-w-[640px] text-center">
          <div className="flex items-center justify-center gap-3 text-sm text-white/62">
            <span className="relative inline-block w-3.5 h-px bg-white/40" />
            <span className="font-serif italic text-[15px] text-white/90">Feedback</span>
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
            What people say.
          </h2>
        </div>

        <div className="mt-14 mx-auto grid max-w-5xl gap-3 md:grid-cols-2 md:items-stretch">
          <HolographicCard className="h-full rounded-xl border border-white/10 bg-white/[0.03] p-8">
            <div className="flex h-full flex-col">
              <span className="mb-5 block font-serif text-5xl leading-none text-white/30">&ldquo;</span>
              <p className="text-[17px] leading-[1.75] text-white/78">
                Abdullah is a talented individual who is extremely skilled and knowledgeable. He
                works well in a team setting and is always willing to collaborate to find
                solutions. He is responsive, creative and a diligent worker, he consistently ensured
                his timelines were met.
              </p>
              <span className="mt-2 block text-right font-serif text-5xl leading-none text-white/30">&rdquo;</span>
              <div className="mt-auto flex items-center gap-4 border-t border-white/10 pt-6">
                <Image
                  src="/tara.jpg"
                  alt="Tara McIlroy"
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <div className="text-[13px] font-medium text-white">Tara McIlroy</div>
                  <div className="text-[12px] text-white/50">CEO &amp; Founder · Brand Love Inc. · Toronto, Ontario</div>
                </div>
              </div>
            </div>
          </HolographicCard>

          <HolographicCard className="h-full rounded-xl border border-white/10 bg-white/[0.03] p-8">
            <div className="flex h-full flex-col">
              <span className="mb-5 block font-serif text-5xl leading-none text-white/30">&ldquo;</span>
              <p className="text-[17px] leading-[1.75] text-white/78">
                Abdullah is a reliable and mature student. He is responsible and follows through
                on his commitments. I believe he enjoys his work and wants to do a good job.
                Abdullah would be a great employee for any organization. It was a pleasure
                working with Abdullah.
              </p>
              <span className="mt-2 block text-right font-serif text-5xl leading-none text-white/30">&rdquo;</span>
              <div className="mt-auto flex items-center gap-4 border-t border-white/10 pt-6">
                <Image
                  src="/Diana Ng.jpg"
                  alt="Diana Ng"
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <div className="text-[13px] font-medium text-white">Diana Ng</div>
                  <div className="text-[12px] text-white/50">CEO &amp; Founder</div>
                </div>
              </div>
            </div>
          </HolographicCard>
        </div>
      </div>
      <div className="h-px bg-white/10" />
    </section>
  );
}
