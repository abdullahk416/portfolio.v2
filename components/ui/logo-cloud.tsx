"use client";
import Image from "next/image";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { cn } from "@/lib/utils";

type Logo = {
  src: string;
  alt: string;
  label?: string;
  width?: number;
  height?: number;
};

type LogoCloudProps = React.ComponentProps<"div"> & {
  logos: Logo[];
};

export function LogoCloud({ className, logos, ...props }: LogoCloudProps) {
  return (
    <div
      {...props}
      className={cn(
        "overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]",
        className
      )}
    >
      <InfiniteSlider gap={42} duration={45} durationOnHover={80}>
        {logos.map((logo) =>
          logo.label ? (
            <div
              key={`logo-${logo.alt}`}
              className="flex items-center gap-2.5 text-foreground/80 transition-colors duration-200 hover:text-foreground"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={20}
                height={20}
                className="h-5 w-5 shrink-0 select-none"
                style={{ filter: "brightness(0) invert(1)", opacity: 0.85 }}
                unoptimized
              />
              <span className="text-[15px] font-medium tracking-[-0.01em]">{logo.label}</span>
            </div>
          ) : (
            <Image
              key={`logo-${logo.alt}`}
              src={logo.src}
              alt={logo.alt}
              width={logo.width || 80}
              height={logo.height || 20}
              className="pointer-events-none h-4 w-auto select-none md:h-5"
              style={{ filter: "brightness(0) invert(1)", opacity: 0.78 }}
              unoptimized
            />
          )
        )}
      </InfiniteSlider>
    </div>
  );
}
