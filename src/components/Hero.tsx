import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const { profile } = portfolioData;

  return (
    <section 
      id="home" 
      className="hero-exact-split relative min-h-[100svh] overflow-hidden flex flex-col justify-between pt-28 sm:pt-32 pb-10 sm:pb-12 px-6 sm:px-10 lg:px-14 select-none"
    >
      {/* Background Animated Orbital Rings */}
      <div className="absolute top-1/2 left-[66%] w-[570px] h-[190px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-[#ff4d00]/25 pointer-events-none animate-orbit-1 hidden md:block" />
      <div className="absolute top-1/2 left-[66%] w-[760px] h-[260px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-white/5 pointer-events-none animate-orbit-2 hidden md:block" />

      {/* Center 3D Cyber Art (Exact cyber-oracle figure from whoislsam) */}
      <div className="absolute left-[54%] md:left-[48%] top-[50%] -translate-x-[42%] -translate-y-[50%] w-[85vw] max-w-[560px] pointer-events-none z-10 select-none">
        <img 
          src="/assets/cyber-oracle.png" 
          alt="Abstract black chrome cybernetic figure dissolving into orange data particles"
          className="w-full h-auto object-contain filter drop-shadow-[0_0_50px_rgba(255,77,0,0.25)]"
        />
      </div>

      {/* Top Telemetry A (Top right over dark background) */}
      <div className="hidden lg:flex absolute top-[125px] right-10 lg:right-14 z-20 flex-col items-end font-mono pointer-events-none">
        <div className="pl-4 border-l border-[#ff4d00] text-right">
          <span className="text-[#ff4d00] block text-[9px] uppercase tracking-widest mb-1">
            DEFENSIVE POSTURE
          </span>
          <div className="flex items-center justify-end gap-2">
            <strong className="text-white font-normal text-xs tracking-wider">RESILIENT</strong>
            <i className="inline-block w-8 h-[3px] bg-gradient-to-r from-[#ff4d00] from-70% to-[#333] to-70%" />
          </div>
        </div>
      </div>

      {/* Telemetry B (Right-middle over dark background) */}
      <div className="hidden lg:block absolute right-10 lg:right-14 top-[58%] text-right font-mono pointer-events-none z-20">
        <span className="text-[#ff4d00] block text-[9px] uppercase tracking-widest mb-1">
          PRIMARY LEADERSHIP
        </span>
        <strong className="text-white font-normal text-xs tracking-wider block">
          CHAIRMAN — IEEE CS
        </strong>
        <small className="text-[#9a9894] text-[10px] block mt-0.5 tracking-wider uppercase">
          STUDENT BRANCH CHAPTER SLTC
        </small>
      </div>

      {/* Telemetry C: Monospace code snippet */}
      <div className="hidden xl:block absolute left-[51%] bottom-[6%] text-left font-mono pointer-events-none z-20 opacity-60">
        <code className="text-[10px] text-[#ff4d00] leading-relaxed block">
          $ ravishkadev --status<br />
          | devsecops: active<br />
          | pipeline: 99.9% uptime
        </code>
      </div>

      {/* Top Kicker (Top left on the orange side) */}
      <div className="relative z-20 max-w-[500px]">
        <div className="flex items-start gap-4 font-mono text-xs uppercase tracking-widest">
          <span className="text-white font-bold text-sm sm:text-base">01</span>
          <div>
            <b className="text-white font-semibold text-xs sm:text-sm block tracking-wider leading-snug">
              CYBERSECURITY &amp; DEVOPS / BASED IN SRI LANKA
            </b>
            <small className="text-[#260900] font-medium text-[10px] sm:text-[11px] tracking-wider block mt-1">
              SLTC · FIRST CLASS TRACK · CHAIRMAN — IEEE COMPUTER SOCIETY
            </small>
          </div>
        </div>
      </div>

      {/* Center Display: Giant Typographic Name + Floating Editorial Copy */}
      <div className="relative z-20 my-auto py-8 sm:py-12">
        {/* Floating Editorial Copy (Top-right of name) */}
        <div className="hidden md:block absolute right-0 lg:right-4 top-0 z-20 w-[min(320px,26vw)]">
          <p className="font-serif text-lg lg:text-xl text-[#f4f1eb] leading-snug">
            Securing systems, <em className="text-[#ff4d00] not-italic italic">automating</em> pipelines, and capturing stories through the lens.
          </p>
          <a 
            href="#projects" 
            className="round-link-exact mt-6"
            aria-label="Explore selected work"
          >
            ↘
          </a>
        </div>

        {/* The Exact whoislsam Giant Typography */}
        <h1 
          className="font-serif tracking-tight select-none pointer-events-none leading-[0.72]"
          style={{ letterSpacing: '-0.075em' }}
        >
          <span className="block text-[15vw] sm:text-[13vw] lg:text-[10.5rem] xl:text-[12.5rem] font-medium text-white drop-shadow-2xl">
            RAVISHKA
          </span>
          <span className="block text-[15vw] sm:text-[13vw] lg:text-[10.5rem] xl:text-[12.5rem] font-medium text-stroke ml-[8%] sm:ml-[14%] -mt-[0.08em] transition-colors hover:text-stroke-orange">
            RATHNAYAKA
          </span>
        </h1>
      </div>

      {/* Hero Bottom: Role on orange side + Scroll note on dark side */}
      <div className="relative z-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
        {/* Bottom Left: Identity & Role */}
        <div>
          <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-white leading-[1.05] tracking-tight">
            Cybersecurity Undergraduate<br />
            <span className="text-white/95 font-normal">&amp; MLOps / DevOps Enthusiast</span>
          </div>
          <small className="block mt-3 font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-[#260900] font-medium">
            PUBLIC IDENTITY: RAVISHKA RATHNAYAKA · CHAIRMAN — IEEE COMPUTER SOCIETY OF SLTC
          </small>
        </div>

        {/* Bottom Right: Scroll to explore */}
        <div className="font-mono text-xs uppercase tracking-widest text-[#9a9894] flex items-center gap-2 pb-1">
          <span>Scroll to explore</span>
          <span className="text-[#ff4d00] font-bold animate-bounce">↓</span>
        </div>
      </div>
    </section>
  );
};
