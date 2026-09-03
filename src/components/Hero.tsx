import React from 'react';
import { ArrowDownRight, Award, ShieldCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const { profile } = portfolioData;

  return (
    <section 
      id="home" 
      className="relative min-h-[100svh] pt-32 pb-14 flex flex-col justify-between overflow-hidden border-b border-white/10"
      style={{
        background: 'radial-gradient(circle at 74% 38%, rgba(255, 77, 0, 0.16) 0%, transparent 42%), linear-gradient(135deg, #060709 0%, #0a0c12 100%)'
      }}
    >
      {/* Background Animated Orbital Rings */}
      <div className="absolute top-1/2 left-[68%] w-[680px] h-[260px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-[#ff4d00]/20 pointer-events-none animate-orbit-1 hidden md:block" />
      <div className="absolute top-1/2 left-[68%] w-[880px] h-[340px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-white/5 pointer-events-none animate-orbit-2 hidden md:block" />

      {/* Vertical subtle aesthetic divider */}
      <div className="absolute left-[48%] top-0 bottom-0 w-px bg-white/[0.04] pointer-events-none hidden lg:block" />

      {/* Floating Ethereal Telemetry Markers (Exact whoislsam style - no bulky cards!) */}
      <div className="hidden lg:flex absolute top-32 right-12 z-20 flex-col items-end gap-6 font-mono text-[11px] tracking-wider pointer-events-none">
        {/* Telemetry 1: Defensive Posture with orange accent line */}
        <div className="pl-4 border-l-2 border-[#ff4d00] text-right">
          <span className="text-[#9a9894] block text-[9px] uppercase tracking-widest">DEFENSIVE POSTURE</span>
          <strong className="text-white font-medium text-xs tracking-wider flex items-center justify-end gap-2">
            <span>RESILIENT / DEVSECOPS</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#00f59b] animate-ping" />
          </strong>
        </div>

        {/* Telemetry 2: Most Valuable Leadership */}
        <div className="text-right">
          <span className="text-[#ff4d00] block text-[9px] uppercase tracking-widest font-semibold flex items-center justify-end gap-1.5">
            <Award size={11} className="text-[#ff4d00]" />
            <span>PRIMARY LEADERSHIP</span>
          </span>
          <strong className="text-white font-serif text-sm font-medium tracking-normal block">
            CHAIRMAN
          </strong>
          <span className="text-[#9a9894] text-[10px] uppercase tracking-wider block">
            IEEE Computer Society of SLTC
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex-1 flex flex-col justify-between relative z-10">
        {/* Top Kicker */}
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-[#9a9894] mb-8 sm:mb-12">
          <span className="text-[#ff4d00] font-bold">01</span>
          <span className="h-px w-8 bg-white/20" />
          <div className="flex flex-wrap items-center gap-x-2">
            <span className="text-white font-medium">CYBERSECURITY &amp; DEVOPS</span>
            <span className="text-white/30">/</span>
            <span>SRI LANKA · {profile.location}</span>
          </div>
        </div>

        {/* Main Center Area: Giant Typography & Floating Editorial Copy */}
        <div className="relative my-auto py-6">
          {/* Floating Editorial Narrative Copy (Right-aligned above/beside text) */}
          <div className="lg:absolute lg:top-0 lg:right-0 z-30 max-w-sm mb-6 lg:mb-0">
            <p className="font-serif italic text-lg sm:text-xl text-[#f4f1eb] leading-relaxed">
              "{profile.tagline}"
            </p>
            <div className="flex items-center gap-4 mt-4">
              <a 
                href="#projects"
                className="group w-13 h-13 sm:w-14 sm:h-14 rounded-full border border-white/30 flex items-center justify-center text-white hover:border-[#ff4d00] hover:bg-[#ff4d00] hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(255,77,0,0.2)]"
                aria-label="Explore selected work"
              >
                <ArrowDownRight size={22} className="group-hover:rotate-[-45deg] transition-transform duration-300" />
              </a>
              <span className="font-mono text-[11px] uppercase tracking-widest text-[#9a9894]">
                Explore Real Projects
              </span>
            </div>
          </div>

          {/* Majestic Hero Name (Full screen breathing space, Zero clipping!) */}
          <h1 className="font-serif tracking-tight select-none pointer-events-none">
            <span className="block text-[15vw] sm:text-[13vw] lg:text-[9.2rem] xl:text-[10.5rem] font-medium text-white leading-[0.82] drop-shadow-2xl">
              RAVISHKA
            </span>
            <span className="block text-[15vw] sm:text-[13vw] lg:text-[9.2rem] xl:text-[10.5rem] font-medium text-stroke leading-[0.82] ml-3 sm:ml-8 lg:ml-16 -mt-2 sm:-mt-4 lg:-mt-6 transition-colors hover:text-stroke-orange">
              RATHNAYAKA
            </span>
          </h1>
        </div>

        {/* Hero Bottom Bar: Role, Prestigious Leadership & Scroll Note */}
        <div className="pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
          {/* Bottom Left: Identity & Leadership */}
          <div className="md:col-span-8 space-y-2">
            <div className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white font-medium leading-tight">
              Cybersecurity Undergraduate<br />
              <span className="text-[#9a9894] font-normal italic">&amp; MLOps / DevOps Enthusiast</span>
            </div>
            
            <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-xs">
              <span className="px-2.5 py-1 rounded bg-[#ff4d00]/15 text-[#ff4d00] border border-[#ff4d00]/40 font-semibold tracking-wider uppercase">
                {profile.primaryLeadership}
              </span>
              <span className="text-white/40">·</span>
              <span className="text-[#9a9894] uppercase tracking-wider">
                Videographer &amp; Media Director
              </span>
            </div>
          </div>

          {/* Bottom Right: Scroll to explore */}
          <div className="md:col-span-4 flex md:justify-end items-center gap-2 font-mono text-xs text-[#9a9894] uppercase tracking-widest pr-16">
            <span>Scroll to explore</span>
            <span className="text-[#ff4d00] animate-bounce">↓</span>
          </div>
        </div>
      </div>
    </section>
  );
};
