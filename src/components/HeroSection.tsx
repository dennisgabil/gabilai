import React, { useState } from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import heroPortrait from "../assets/images/gabil_hero_face.jpg";

interface HeroSectionProps {
  onDiscover: () => void;
  onConnect: () => void;
}

export default function HeroSection({
  onDiscover,
  onConnect,
}: HeroSectionProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  return (
    <section
      id="hero-section"
      onMouseMove={handleMouseMove}
      className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 pt-4 lg:pt-8 pb-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4 min-h-[560px]"
    >
      {/* Left Column: Mission Subhead, Massive Brand Headline & Primary CTAs */}
      <div className="w-full lg:w-1/2 flex flex-col items-start z-20">
        {/* Mission Statement Subhead with Arrow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-start gap-2.5 max-w-md mb-8 sm:mb-12 text-neutral-300 group"
        >
          <div className="mt-1 p-1 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 shrink-0 group-hover:scale-110 transition-transform">
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </div>
          <p className="text-xs sm:text-sm md:text-[15px] font-normal leading-relaxed text-neutral-300/90 tracking-wide">
            We're constantly pushing the boundaries of what's possible,
            exploring new frontiers, and redefining industry standards.
          </p>
        </motion.div>

        {/* Main Brand Headline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="mb-8 sm:mb-12"
        >
          <h1
            id="hero-headline"
            className="text-6xl sm:text-7xl md:text-8xl lg:text-[7.25rem] font-black tracking-tighter leading-none select-none text-white drop-shadow-2xl"
          >
            GABIL
            <span className="text-cyan-400 drop-shadow-[0_0_35px_rgba(34,211,238,0.5)]">
              AI
            </span>
          </h1>
          <div className="flex items-center gap-2 mt-3">
            <span className="h-1.5 w-12 rounded-full bg-gradient-to-r from-cyan-400 via-teal-300 to-transparent"></span>
            <span className="text-xs font-semibold uppercase tracking-widest text-cyan-300/80">
              Cognitive Frameworks
            </span>
          </div>
        </motion.div>

        {/* Action Buttons: Discover & Connect With Us */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
          className="flex items-center gap-4 sm:gap-6 flex-wrap"
        >
          {/* Primary CTA: Capsule Button "Discover" with inner circular black arrow button */}
          <button
            id="cta-discover"
            onClick={onDiscover}
            className="group relative inline-flex items-center gap-3 pl-6 pr-2.5 py-2.5 rounded-full bg-white text-slate-950 font-semibold text-sm sm:text-base transition-all duration-300 hover:bg-neutral-100 hover:shadow-[0_0_30px_rgba(255,255,255,0.35)] active:scale-95 cursor-pointer"
          >
            <span>Discover</span>
            <div className="w-8 h-8 rounded-full bg-slate-950 text-white flex items-center justify-center transition-transform duration-300 group-hover:rotate-45 group-hover:bg-cyan-400 group-hover:text-slate-950 shadow-md">
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </div>
          </button>

          {/* Thin Vertical Divider */}
          <div
            className="hidden sm:block h-6 w-[1px] bg-white/20"
            aria-hidden="true"
          />

          {/* Secondary CTA: Understated Text Link "Connect With Us" */}
          <button
            id="cta-connect"
            onClick={onConnect}
            className="group flex items-center gap-1.5 text-sm sm:text-base font-medium text-neutral-300 hover:text-white transition-colors cursor-pointer"
          >
            <span className="relative">
              Connect With Us
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </span>
            <ArrowUpRight className="w-4 h-4 text-cyan-400 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </button>
        </motion.div>
      </div>

      {/* Right Column / Center Stage: Ethereal 3D Portrait Visual */}
      <div className="w-full lg:w-1/2 flex items-center justify-center relative">
        {/* Background Ambient Glows */}
        <div className="absolute w-80 h-80 sm:w-96 sm:h-96 bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none -top-10 right-10" />
        <div className="absolute w-72 h-72 sm:w-80 sm:h-80 bg-purple-600/25 rounded-full blur-[90px] pointer-events-none -bottom-10 left-10" />
        <div className="absolute w-60 h-60 bg-pink-500/15 rounded-full blur-[80px] pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

        {/* Ethereal Portrait Frame with subtle floating effect */}
        <motion.div
          animate={{
            y: [0, -8, 0],
            rotate: [0, 0.5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            transform: `perspective(1000px) rotateX(${mousePos.y * -8}deg) rotateY(${mousePos.x * 8}deg)`,
          }}
          className="relative group w-full max-w-105 sm:max-w-120 p-1.5 transition-transform duration-200"
        >
          {/* Subtle Outer Neon Border Ribbon */}
          <div className="absolute inset-0 rounded-full bg-linear-to-tr from-cyan-400/40 via-purple-500/30 to-pink-500/40 blur-[1px]" />

          {/* Inner Content Card with vignette blending */}
          <div className="relative w-full h-full rounded-full overflow-hidden bg-[#0d0d1e] shadow-2xl shadow-cyan-950/50">
            <img
              src={heroPortrait}
              alt="GABILAI Ethereal Digital Intelligence Artwork"
              referrerPolicy="no-referrer"
              className="w-full h-full rounded-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
            />

            {/* Radial dark vignette around edges to blend naturally with the page */}
            <div className="absolute inset-0 bg-radial from-transparent via-[#070714]/20 to-[#070714]/70 pointer-events-none" />

            {/* Floating Live Indicator Badge */}
            <div className="absolute bottom-5 left-1/2 right-auto flex w-max -translate-x-1/2 items-center justify-center gap-4 rounded-2xl border border-white/10 bg-black/40 p-3 text-xs backdrop-blur-xl">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping" />
                <span className="font-semibold text-neutral-200">
                  Neural Core Active
                </span>
              </div>
              {/* <span className="font-mono text-cyan-300 text-[11px] flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-cyan-300" />
                v4.8 Stable
              </span> */}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
