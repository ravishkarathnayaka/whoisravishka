import React from 'react';
import { ArrowDownRight, ShieldCheck, Activity, Terminal, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const { profile } = portfolioData;

  return (
    <section 
      id="home" 
      className="relative min-h-[100svh] pt-28 sm:pt-36 pb-12 flex flex-col justify-between overflow-hidden border-b border-white/10"
      style={{
        background: 'radial-gradient(circle at 65% 35%, rgba(255, 77, 0, 0.12) 0%, transparent 45%), linear-gradient(135deg, #060709 0%, #0a0c12 100%)'
      }}
    >
      {/* Orbital Glowing Rings in background */}
      <div className="absolute top-1/2 left-[70%] w-[580px] h-[220px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-[#ff4d00]/15 pointer-events-none animate-orbit-1 hidden md:block" />
      <div className="absolute top-1/2 left-[70%] w-[780px] h-[300px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-white/5 pointer-events-none animate-orbit-2 hidden md:block" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex-1 flex flex-col justify-between relative z-10">
        {/* Top Kicker */}
        <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-widest text-[#9a9894] mb-6">
          <span className="text-[#ff4d00] font-bold">01</span>
          <span className="h-px w-6 bg-white/20" />
          <span>CYBERSECURITY &amp; DEVOPS / SRI LANKA · {profile.location}</span>
        </div>

        {/* Main Grid: Typography (Left) + Integrated Telemetry HUD (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center my-auto py-4">
          {/* Left Column: Bold Editorial Typography */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="font-serif tracking-tight leading-[0.88] select-none">
              <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-[6.8rem] xl:text-[7.8rem] font-medium text-white drop-shadow-2xl">
                RAVISHKA
              </span>
              <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-[6.8rem] xl:text-[7.8rem] font-medium text-stroke mt-1 sm:mt-2 transition-colors hover:text-stroke-orange">
                RATHNAYAKA
              </span>
            </h1>

            {/* Sub-headline quote */}
            <p className="font-serif italic text-lg sm:text-2xl text-[#f4f1eb] leading-snug max-w-xl pt-2">
              {profile.tagline}
            </p>

            {/* Action CTA buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a 
                href="#projects"
                className="group flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#ff4d00] hover:bg-[#ff7137] text-black font-mono text-xs uppercase tracking-wider font-semibold transition-all duration-300 shadow-[0_0_25px_rgba(255,77,0,0.3)]"
              >
                <span>EXPLORE PROJECTS</span>
                <ArrowDownRight size={16} className="group-hover:rotate-[-45deg] transition-transform duration-300" />
              </a>

              <a
                href="#about"
                className="flex items-center gap-2 px-5 py-3.5 rounded-full border border-white/20 bg-white/[0.03] hover:border-white/40 hover:bg-white/10 text-white font-mono text-xs uppercase tracking-wider transition-all"
              >
                <span>READ PHILOSOPHY</span>
              </a>
            </div>
          </div>

          {/* Right Column: Integrated Telemetry HUD Card (No overlaps!) */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-white/15 bg-[#080910]/90 backdrop-blur-xl p-6 shadow-2xl relative overflow-hidden group hover:border-[#ff4d00]/40 transition-colors">
              {/* HUD Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5 font-mono text-xs text-[#9a9894]">
                <div className="flex items-center gap-2 text-white">
                  <span className="w-2 h-2 rounded-full bg-[#00f59b] animate-ping" />
                  <span className="font-medium tracking-wider">DEVSECOPS TELEMETRY</span>
                </div>
                <span className="text-[10px] text-[#ff4d00] uppercase tracking-widest">SRI LANKA · 06.9271° N</span>
              </div>

              {/* Status Modules */}
              <div className="space-y-4 font-mono text-xs">
                {/* Status 1 */}
                <div className="flex items-center justify-between p-3 rounded-lg bg-white/[0.03] border border-white/10">
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck size={16} className="text-[#ff4d00]" />
                    <span className="text-[#9a9894]">Defensive Focus</span>
                  </div>
                  <span className="text-white font-medium">{profile.telemetry.posture}</span>
                </div>

                {/* Status 2 */}
                <div className="flex items-center justify-between p-3 rounded-lg bg-white/[0.03] border border-white/10">
                  <div className="flex items-center gap-2.5">
                    <Activity size={16} className="text-[#00f59b]" />
                    <span className="text-[#9a9894]">Pipeline Health</span>
                  </div>
                  <span className="text-[#00f59b] font-medium">{profile.telemetry.uptime}</span>
                </div>

                {/* Interactive Shell Snippet */}
                <div className="p-3.5 rounded-lg bg-black border border-white/10 font-mono text-[11px] text-[#f4f1eb]/90 leading-relaxed">
                  <div className="flex items-center gap-2 text-[#ff4d00] text-[10px] mb-1.5 uppercase tracking-widest">
                    <Terminal size={12} />
                    <span>SYSTEM RUNTIME SUMMARY</span>
                  </div>
                  <div className="text-[#9a9894] space-y-0.5">
                    <div><span className="text-white">&gt; Identity:</span> Ravishka Rathnayaka</div>
                    <div><span className="text-white">&gt; Education:</span> BSc Cyber Security (SLTC)</div>
                    <div><span className="text-white">&gt; Leadership:</span> Chair @ CloudSpace v1.0</div>
                    <div><span className="text-[#ff4d00]">&gt; Status:</span> {profile.status}</div>
                  </div>
                </div>

                {/* Badges footer */}
                <div className="pt-2 flex flex-wrap gap-2 text-[10px]">
                  {['Docker', 'Kubernetes', 'Python', 'Azure', 'Videography'].map((item) => (
                    <span 
                      key={item} 
                      className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-white/80"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Bottom Bar with generous right padding to avoid AI button collision */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs text-[#9a9894] uppercase tracking-wider pr-20">
          <div className="flex items-center gap-3">
            <span className="text-[#ff4d00]">●</span>
            <span className="text-white font-medium">{profile.role}</span>
            <span className="text-white/30">/</span>
            <span>{profile.secondaryRole}</span>
          </div>

          <div className="flex items-center gap-6">
            <span>PUBLIC IDENTITY: RAVISHKA RATHNAYAKA</span>
            <span className="hidden md:inline-block text-[#ff4d00]">SCROLL ↓</span>
          </div>
        </div>
      </div>
    </section>
  );
};
