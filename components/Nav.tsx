"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[#0a0a0a]/90 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-[72px] w-full max-w-7xl items-center justify-between px-6 lg:px-12">
        <Link href="/" className="flex items-center gap-2 text-white">
          <Image
            src="/initials_logo.webp"
            alt="Abdullah Khan"
            width={24}
            height={24}
            className="h-6 w-6 rounded-sm object-contain"
            priority
          />
          <span className="text-[14px] font-medium tracking-[-0.01em]">Abdullah Khan</span>
        </Link>

        <div className="hidden items-center gap-7 text-[13px] text-white/62 md:flex">
          {["Work", "Projects", "Stack", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="transition-colors duration-200 hover:text-white"
            >
              {item}
            </a>
          ))}
        </div>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white px-4 py-2 text-[13px] font-medium text-black transition-all duration-200 hover:bg-white/90 hover:-translate-y-px"
        >
          Resume
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
            <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </nav>
      <div className="h-px bg-white/10" />
    </header>
  );
}
