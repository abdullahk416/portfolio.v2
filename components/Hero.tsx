"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { RocketIcon, ArrowRightIcon, MailIcon } from "lucide-react";

interface Ripple {
  id: number;
  x: number;
  y: number;
}

export function Hero() {
  const [mouseGradientStyle, setMouseGradientStyle] = useState({
    left: "0px",
    top: "0px",
    opacity: 0,
  });
  const [ripples, setRipples] = useState<Ripple[]>([]);

  // Word entrance animations driven by data-delay
  useEffect(() => {
    const animate = () => {
      const els = document.querySelectorAll<HTMLElement>(".word-animate");
      els.forEach((word) => {
        const delay = parseInt(word.getAttribute("data-delay") || "0");
        setTimeout(() => {
          word.style.animation = "word-appear 0.8s ease-out forwards";
        }, delay);
      });
    };
    const t = setTimeout(animate, 500);
    return () => clearTimeout(t);
  }, []);

  // Mouse-following blur gradient
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setMouseGradientStyle({
        left: `${e.clientX}px`,
        top: `${e.clientY}px`,
        opacity: 1,
      });
    };
    const onLeave = () => setMouseGradientStyle((p) => ({ ...p, opacity: 0 }));
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  // Click ripples
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const r = { id: Date.now(), x: e.clientX, y: e.clientY };
      setRipples((prev) => [...prev, r]);
      setTimeout(
        () => setRipples((prev) => prev.filter((x) => x.id !== r.id)),
        1000
      );
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  // Hover glow on word elements
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".word-animate");
    const onEnter = (e: Event) => {
      (e.target as HTMLElement).style.textShadow = "0 0 20px rgba(255,255,255,0.5)";
    };
    const onLeave = (e: Event) => {
      (e.target as HTMLElement).style.textShadow = "none";
    };
    els.forEach((w) => {
      w.addEventListener("mouseenter", onEnter);
      w.addEventListener("mouseleave", onLeave);
    });
    return () => {
      els.forEach((w) => {
        w.removeEventListener("mouseenter", onEnter);
        w.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  const pageStyles = `
    #mouse-gradient-hero {
      position: fixed;
      pointer-events: none;
      border-radius: 9999px;
      background-image: radial-gradient(circle, rgba(255,255,255,0.06), rgba(255,255,255,0.03), transparent 70%);
      transform: translate(-50%, -50%);
      will-change: left, top, opacity;
      transition: left 70ms linear, top 70ms linear, opacity 300ms ease-out;
      z-index: 5;
    }
    @keyframes word-appear {
      0%   { opacity: 0; transform: translateY(20px) scale(0.92); filter: blur(6px); }
      60%  { opacity: 1; transform: translateY(4px) scale(0.98); filter: blur(1px); }
      100% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
    }
    @keyframes grid-draw {
      0%   { stroke-dashoffset: 1000; opacity: 0; }
      50%  { opacity: 0.3; }
      100% { stroke-dashoffset: 0; opacity: 0.15; }
    }
    @keyframes pulse-glow {
      0%, 100% { opacity: 0.1; transform: scale(1); }
      50%      { opacity: 0.3; transform: scale(1.1); }
    }
    .word-animate {
      display: inline-block;
      opacity: 0;
      margin: 0 0.1em;
      transition: color 0.3s ease, transform 0.3s ease;
    }
    .word-animate:hover { color: #f4f4f5; transform: translateY(-2px); }
    .grid-line {
      stroke: rgba(255,255,255,0.20);
      stroke-width: 0.5;
      opacity: 0;
      stroke-dasharray: 5 5;
      stroke-dashoffset: 1000;
      animation: grid-draw 2s ease-out forwards;
    }
    .detail-dot {
      fill: rgba(255,255,255,0.85);
      opacity: 0;
      animation: pulse-glow 3s ease-in-out infinite;
    }
    .corner-element-animate {
      position: absolute;
      width: 40px;
      height: 40px;
      border: 1px solid rgba(255,255,255,0.18);
      opacity: 0;
      animation: word-appear 1s ease-out forwards;
    }
    .text-decoration-animate { position: relative; }
    .text-decoration-animate::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 0;
      width: 0;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.7), transparent);
      animation: underline-grow 2s ease-out forwards;
      animation-delay: 2s;
    }
    @keyframes underline-grow { to { width: 100%; } }
    .floating-element-animate {
      position: absolute;
      width: 2px;
      height: 2px;
      background: rgba(255,255,255,0.85);
      border-radius: 50%;
      opacity: 0;
      animation: float 4s ease-in-out infinite;
    }
    @keyframes float {
      0%, 100% { transform: translateY(0) translateX(0); opacity: 0.2; }
      25%      { transform: translateY(-10px) translateX(5px); opacity: 0.6; }
      50%      { transform: translateY(-5px) translateX(-3px); opacity: 0.4; }
      75%      { transform: translateY(-15px) translateX(7px); opacity: 0.8; }
    }
    .ripple-effect {
      position: fixed;
      width: 4px;
      height: 4px;
      background: rgba(255,255,255,0.6);
      border-radius: 50%;
      transform: translate(-50%, -50%);
      pointer-events: none;
      animation: pulse-glow 1s ease-out forwards;
      z-index: 9999;
    }
  `;

  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      <style>{pageStyles}</style>

      {/* Grid SVG */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <pattern id="heroGridDark" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#heroGridDark)" />
        <line x1="0" y1="20%" x2="100%" y2="20%" className="grid-line" style={{ animationDelay: "0.5s" }} />
        <line x1="0" y1="80%" x2="100%" y2="80%" className="grid-line" style={{ animationDelay: "1s" }} />
        <line x1="20%" y1="0" x2="20%" y2="100%" className="grid-line" style={{ animationDelay: "1.5s" }} />
        <line x1="80%" y1="0" x2="80%" y2="100%" className="grid-line" style={{ animationDelay: "2s" }} />
        <line x1="50%" y1="0" x2="50%" y2="100%" className="grid-line" style={{ animationDelay: "2.5s", opacity: 0.05 }} />
        <line x1="0" y1="50%" x2="100%" y2="50%" className="grid-line" style={{ animationDelay: "3s", opacity: 0.05 }} />
        <circle cx="20%" cy="20%" r="2" className="detail-dot" style={{ animationDelay: "3s" }} />
        <circle cx="80%" cy="20%" r="2" className="detail-dot" style={{ animationDelay: "3.2s" }} />
        <circle cx="20%" cy="80%" r="2" className="detail-dot" style={{ animationDelay: "3.4s" }} />
        <circle cx="80%" cy="80%" r="2" className="detail-dot" style={{ animationDelay: "3.6s" }} />
        <circle cx="50%" cy="50%" r="1.5" className="detail-dot" style={{ animationDelay: "4s" }} />
      </svg>

      {/* Floating dots */}
      <div className="floating-element-animate" style={{ top: "25%", left: "15%", animationDelay: "0.5s" }} />
      <div className="floating-element-animate" style={{ top: "60%", left: "85%", animationDelay: "1s" }} />
      <div className="floating-element-animate" style={{ top: "40%", left: "10%", animationDelay: "1.5s" }} />
      <div className="floating-element-animate" style={{ top: "75%", left: "90%", animationDelay: "2s" }} />

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-between items-center px-6 py-10 sm:px-8 sm:py-12 md:px-16 md:py-20">
        {/* Top label — appears AFTER the name */}
        <div className="text-center">
          <h2 className="text-xs sm:text-sm font-mono font-light text-white/80 uppercase tracking-[0.2em]">
            <span className="word-animate" data-delay="2400">Software</span>
            <span className="word-animate" data-delay="2550">·</span>
            <span className="word-animate" data-delay="2700">Engineer</span>
            <span className="word-animate" data-delay="2850">·</span>
            <span className="word-animate" data-delay="3000">Toronto</span>
          </h2>
          <div className="mt-4 w-12 sm:w-16 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-30 mx-auto" />
        </div>

        {/* Middle: name FIRST, then subtitle, then pill + CTAs */}
        <div className="text-center max-w-5xl mx-auto relative">
          {/* Name — appears first */}
          <h1
            className="hero-name text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-medium tracking-tight text-decoration-animate text-white"
            style={{
              lineHeight: 1.0,
              textShadow: "0 0 40px rgba(255,255,255,0.25), 0 0 80px rgba(255,255,255,0.1)",
            }}
          >
            <span className="word-animate" data-delay="0">Abdullah</span>
            <span className="word-animate" data-delay="250">Khan</span>
          </h1>

          {/* Subtitle — cascades after name */}
          <p className="mt-8 text-base sm:text-lg md:text-xl font-light text-white/80 leading-relaxed tracking-wide max-w-xl mx-auto">
            <span className="word-animate" data-delay="700">Software</span>
            <span className="word-animate" data-delay="820">engineer</span>
            <span className="word-animate" data-delay="940">—</span>
            <span className="word-animate" data-delay="1060">I</span>
            <span className="word-animate" data-delay="1180">turn</span>
            <span className="word-animate" data-delay="1300">ideas</span>
            <span className="word-animate" data-delay="1420">into</span>
            <span className="word-animate" data-delay="1540">working</span>
            <span className="word-animate" data-delay="1660">products.</span>
          </p>

          {/* Pill + CTAs */}
          <div
            className="opacity-0 mt-8"
            style={{ animation: "word-appear 0.8s ease-out forwards", animationDelay: "1.9s" }}
          >
            <a
              href="#contact"
              className="group inline-flex w-fit items-center gap-3 rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 shadow mb-8"
            >
              <RocketIcon className="size-3 text-white/60" />
              <span className="text-xs">open to SWE internships &amp; new grad roles</span>
              <span className="block h-5 border-l border-white/15" />
              <ArrowRightIcon className="size-3 transition-transform duration-150 ease-out group-hover:translate-x-1" />
            </a>
          </div>

          <div
            className="opacity-0 mt-2 flex flex-row flex-wrap items-center justify-center gap-3"
            style={{ animation: "word-appear 0.8s ease-out forwards", animationDelay: "2.2s" }}
          >
            <Button className="rounded-full" size="lg" variant="secondary" asChild>
              <a href="mailto:abdullah.khan14@ontariotechu.net">
                <MailIcon className="size-4 mr-2" />
                Get in touch
              </a>
            </Button>
            <Button className="rounded-full" size="lg" asChild>
              <a href="#projects">
                See my work
                <ArrowRightIcon className="size-4 ms-2" />
              </a>
            </Button>
          </div>

          {/* Decorative side dashes */}
          <div
            className="absolute -left-6 sm:-left-8 top-1/2 transform -translate-y-1/2 w-3 sm:w-4 h-px bg-white opacity-0"
            style={{ animation: "word-appear 1s ease-out forwards", animationDelay: "3.6s" }}
          />
          <div
            className="absolute -right-6 sm:-right-8 top-1/2 transform -translate-y-1/2 w-3 sm:w-4 h-px bg-white opacity-0"
            style={{ animation: "word-appear 1s ease-out forwards", animationDelay: "3.8s" }}
          />
        </div>

        {/* Bottom label — mirrors the top: dots, divider, label (label sits at bottom edge) */}
        <div className="text-center">
          <div
            className="mb-6 flex justify-center space-x-4 opacity-0"
            style={{ animation: "word-appear 1s ease-out forwards", animationDelay: "4.3s" }}
          >
            <div className="w-1 h-1 bg-white rounded-full opacity-40" />
            <div className="w-1 h-1 bg-white rounded-full opacity-60" />
            <div className="w-1 h-1 bg-white rounded-full opacity-40" />
          </div>
          <div className="mb-4 w-12 sm:w-16 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-30 mx-auto" />
          <h2 className="text-xs sm:text-sm font-mono font-light text-white/80 uppercase tracking-[0.2em]">
            <span className="word-animate" data-delay="3300">Build</span>
            <span className="word-animate" data-delay="3450">·</span>
            <span className="word-animate" data-delay="3600">Ship</span>
            <span className="word-animate" data-delay="3750">·</span>
            <span className="word-animate" data-delay="3900">Iterate</span>
          </h2>
        </div>
      </div>

      {/* Mouse-following gradient */}
      <div
        id="mouse-gradient-hero"
        className="w-60 h-60 blur-xl sm:w-80 sm:h-80 sm:blur-2xl md:w-96 md:h-96 md:blur-3xl"
        style={{
          left: mouseGradientStyle.left,
          top: mouseGradientStyle.top,
          opacity: mouseGradientStyle.opacity,
        }}
      />

      {/* Click ripples */}
      {ripples.map((r) => (
        <div
          key={r.id}
          className="ripple-effect"
          style={{ left: `${r.x}px`, top: `${r.y}px` }}
        />
      ))}
    </section>
  );
}
