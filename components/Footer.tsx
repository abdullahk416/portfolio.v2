import Image from "next/image";

export function Footer() {
  return (
    <footer className="relative pb-12">
      <div className="h-px bg-white/10 mb-12" />
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row lg:px-12">
        <div className="flex items-center gap-3 text-[12px] text-white/40">
          <Image
            src="/initials_logo.webp"
            alt="Abdullah Khan"
            width={18}
            height={18}
            className="h-[18px] w-[18px] rounded-sm object-contain opacity-60"
          />
          <span>© 2026 Abdullah Khan</span>
          <span className="text-white/20">·</span>
          <span>Toronto, Canada</span>
        </div>
        <div className="flex items-center gap-5 text-[12px] text-white/40">
          <a href="https://linkedin.com/in/abdvllah-khan" target="_blank" rel="noopener" className="transition-colors hover:text-white">LinkedIn</a>
          <a href="https://github.com/abdullahk416" target="_blank" rel="noopener" className="transition-colors hover:text-white">GitHub</a>
          <a href="mailto:abdullah.khan14@ontariotechu.net" className="transition-colors hover:text-white">Email</a>
        </div>
      </div>
    </footer>
  );
}
