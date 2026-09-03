import React from 'react';
import { ArrowDownRight, ShieldCheck, Activity, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const { profile } = portfolioData;

  return (
    <section 
      id="home" 
      className="relative min-h-[100svh] pt-32 pb-16 flex flex-col justify-between overflow-hidden border-b border-white/10"
      style={{
        background: 'radial-gradient(circle at 70% 40%, rgba(255, 77, 0, 0.14) 0%, transparent 45%), linear-gradient(135deg, #060709 0%, #0c0e14 100%)'
      }}
    >
      {/* Orbital Glowing Rings in background */}
      <div className="absolute top-1/2 left-[65%] w-[680px] h-[260px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-[#ff4d00]/20 pointer-events-none animate-orbit-1" />
      <div className="absolute top-1/2 left-[65%] w-[880px] h-[340px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-white/5 pointer-events-none animate-orbit-2" />

      {/* Floating Telemetry Widgets (Desktop) */}
      <div className="hidden md:flex absolute top-36 right-12 z-20 flex-col gap-4 font-mono text-[11px] tracking-wider pointer-events-none">
        {/* Telemetry 1 */}
        <div className="flex items-center gap-3 px-4 py-2 rounded border border-white/10 bg-[#060709]/80 backdrop-blur-md">
          <ShieldCheck size={14} className="text-[#ff4d00]" />
          <div>
            <span className="text-[#9a9894] block text-[9px] uppercase tracking-widest">Defensive Posture</span>
            <strong className="text-white font-normal">{profile.telemetry.posture}</strong>
          </div>
          <span className="w-1.5 h-1.5 rounded-full bg-[#00f59b] animate-ping ml-2" />
        </div>

        {/* Telemetry 2 */}
        <div className="flex items-center gap-3 px-4 py-2 rounded border border-white/10 bg-[#060709]/80 backdrop-blur-md">
          <Activity size={14} className="text-[#00f59b]" />
          <div>
            <span className="text-[#9a9894] block text-[9px] uppercase tracking-widest">Pipeline Health</span>
            <strong className="text-white font-normal">{profile.telemetry.uptime}</strong>
          </div>
        </div>

        {/* Telemetry 3: Terminal command */}
        <div className="px-4 py-2.5 rounded border border-[#ff4d00]/30 bg-[#060709]/90 text-white/70 max-w-[280px]">
          <div className="flex items-center gap-2 text-[#ff4d00] text-[9px] mb-1">
            <Terminal size={10} />
            <span>KUBERNETES / SENTINEL TELEMETRY</span>
          </div>
          <code className="text-[10px] font-mono text-[#f4f1eb]/90 block">
            trivy scan --severity CRITICAL<br/>
            helm upgrade --atomic deploy
          </code>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex-1 flex flex-col justify-between relative z-10">
        {/* Top Kicker */}
        <div className="flex items-center gap-4 font-mono text-xs uppercase tracking-widest text-[#9a9894]">
          <span className="text-[#ff4d00] font-bold">01</span>
          <span className="h-px w-8 bg-white/20" />
          <span>CYBERSECURITY &amp; DEVOPS / SRI LANKA · {profile.coordinates}</span>
        </div>

        {/* Main Giant Typographic Hero Title */}
        <div className="my-auto py-8">
          <h1 className="font-serif tracking-tight leading-[0.88] select-none">
            <span className="block text-[14vw] lg:text-[10.5rem] font-medium text-white drop-shadow-2xl">
              RAVISHKA
            </span>
            <span className="block text-[14vw] lg:text-[10.5rem] font-medium text-stroke ml-4 md:ml-16 -mt-2 md:-mt-6 transition-all duration-500 hover:text-stroke-orange">
              RATHNAYAKA
            </span>
          </h1>

          {/* Subtext and Direct Action Arrow */}
          <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-6 lg:col-span-5">
              <p className="font-serif italic text-xl md:text-2xl text-[#f4f1eb] leading-snug">
                I engineer <span className="text-[#ff4d00] not-italic font-medium">calm</span> inside digital chaos—turning threat signals into resilient defenses and automated delivery.
              </p>
            </div>

            <div className="md:col-span-4 lg:col-span-5 flex items-center gap-6">
              <a 
                href="#work"
                className="group w-14 h-14 rounded-full border border-white/30 flex items-center justify-center text-white hover:border-[#ff4d00] hover:bg-[#ff4d00] hover:text-black transition-all duration-300"
                aria-label="Explore selected operations"
              >
                <ArrowDownRight size={22} className="group-hover:rotate-[-45deg] transition-transform duration-300" />
              </a>
              <div className="font-mono text-xs uppercase tracking-widest text-[#9a9894]">
                <span>Explore Selected<br />Operations</span>
              </div>
            </div>

            <div className="md:col-span-2 text-right hidden lg:block">
              <div className="font-mono text-xs text-[#9a9894] tracking-widest uppercase">
                <span>SCROLL DOWN</span>
                <div className="mt-2 text-[#ff4d00] animate-bounce">↓</div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs text-[#9a9894] uppercase tracking-wider">
          <div className="flex items-center gap-3">
            <span className="text-[#ff4d00]">●</span>
            <span className="text-white font-medium">{profile.role}</span>
            <span className="text-white/30">/</span>
            <span>{profile.secondaryRole}</span>
          </div>
          <div>
            <span>Public Identity: Ravishka Rathnayaka</span>
          </div>
        </div>
      </div>
    </section>
  );
};
