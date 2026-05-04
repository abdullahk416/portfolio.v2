import { LogoCloud } from "@/components/ui/logo-cloud";

const logos = [
  { src: "https://cdn.simpleicons.org/typescript/fafafa", alt: "TypeScript", label: "TypeScript" },
  { src: "https://cdn.simpleicons.org/react/fafafa", alt: "React", label: "React" },
  { src: "https://cdn.simpleicons.org/nextdotjs/fafafa", alt: "Next.js", label: "Next.js" },
  { src: "https://cdn.simpleicons.org/python/fafafa", alt: "Python", label: "Python" },
  { src: "https://cdn.simpleicons.org/dotnet/fafafa", alt: ".NET", label: ".NET" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", alt: "AWS", label: "AWS" },
  { src: "https://cdn.simpleicons.org/tailwindcss/fafafa", alt: "Tailwind CSS", label: "Tailwind" },
  { src: "https://cdn.simpleicons.org/supabase/fafafa", alt: "Supabase", label: "Supabase" },
  { src: "https://cdn.simpleicons.org/postgresql/fafafa", alt: "PostgreSQL", label: "Postgres" },
  { src: "https://cdn.simpleicons.org/vercel/fafafa", alt: "Vercel", label: "Vercel" },
  { src: "https://cdn.simpleicons.org/github/fafafa", alt: "GitHub", label: "GitHub" },
  { src: "https://cdn.simpleicons.org/figma/fafafa", alt: "Figma", label: "Figma" },
];

export function LogoMarquee() {
  return (
    <section className="relative space-y-4 pt-6 pb-10">
      <h2 className="text-center font-medium text-lg text-muted-foreground tracking-tight md:text-xl">
        My toolkit · <span className="text-foreground">the stack I ship with</span>
      </h2>
      <div className="relative z-10 mx-auto max-w-4xl">
        <LogoCloud logos={logos} />
      </div>
    </section>
  );
}
