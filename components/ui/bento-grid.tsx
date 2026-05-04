"use client";

import { cn } from "@/lib/utils";
import { HolographicCard } from "@/components/ui/holographic-card";

export interface BentoItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  status?: string;
  tags?: string[];
  meta?: string;
  cta?: string;
  colSpan?: number;
  hasPersistentHover?: boolean;
}

interface BentoGridProps {
  items: BentoItem[];
  className?: string;
}

export function BentoGrid({ items, className }: BentoGridProps) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-3", className)}>
      {items.map((item, index) => (
        <HolographicCard
          key={index}
          className={cn(
            "group relative rounded-xl overflow-hidden p-5",
            "border border-white/10 bg-white/[0.03]",
            "transition-all duration-300 will-change-transform",
            item.colSpan === 2 ? "md:col-span-2" : "col-span-1"
          )}
        >
          {/* Content */}
          <div className="relative flex h-full flex-col space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 transition-colors duration-300 group-hover:bg-white/15">
                {item.icon}
              </div>
              <span className="rounded-lg bg-white/10 px-2 py-1 text-xs font-medium text-white/70 backdrop-blur-sm transition-colors duration-300 group-hover:bg-white/20">
                {item.status || "Active"}
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="text-[15px] font-medium tracking-tight text-white">
                {item.title}
                {item.meta && (
                  <span className="ml-2 text-xs font-normal text-white/40">
                    {item.meta}
                  </span>
                )}
              </h3>
              <p className="text-sm leading-snug text-white/70">
                {item.description}
              </p>
            </div>

            <div className="mt-auto pt-2">
              <div className="flex flex-wrap items-center gap-2 text-xs">
                {item.tags?.map((tag, i) => (
                  <span
                    key={i}
                    className="rounded-md bg-white/10 px-2 py-1 text-white/60 backdrop-blur-sm transition-all duration-200 hover:bg-white/20"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </HolographicCard>
      ))}
    </div>
  );
}
