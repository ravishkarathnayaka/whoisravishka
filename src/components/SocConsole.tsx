import React from 'react';
import { Radio, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const SocConsole: React.FC = () => {
  const { about } = portfolioData;

  return (
    <section id="capabilities" className="py-28 bg-[#06070a] border-b border-white/10 relative overflow-hidden tech-grid-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-[#ff4d00] mb-3 flex items-center gap-2">
              <Radio size={14} className="text-[#ff4d00] animate-pulse" />
              <span>// Operational Capabilities</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl font-medium tracking-tight text-white leading-tight">
              WHAT I DO &amp;<br />
              <i className="text-[#ff4d00] not-italic italic font-normal">SYSTEMS I BUILD.</i>
            </h2>
          </div>
          <p className="text-[#9a9894] text-sm max-w-sm font-sans leading-relaxed">
            Hands-on technical capabilities spanning cybersecurity defense, containerized DevOps pipelines, machine learning operations, and visual storytelling.
          </p>
        </div>

        {/* Central Operations Console */}
        <div className="rounded-xl border border-[#ff4d00]/30 bg-[#090b10]/90 backdrop-blur-xl overflow-hidden shadow-[0_0_80px_rgba(255,77,0,0.06)]">
          {/* Top Console Bar */}
          <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between font-mono text-xs text-[#9a9894] tracking-widest uppercase bg-black/40">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#00f59b] animate-ping" />
              <span className="text-white">CYBERSECURITY &amp; DEVOPS / ACTIVE ARSENAL</span>
            </div>
            <div className="flex items-center gap-4 text-[11px]">
              <span className="text-[#ff4d00]">WHOISRAVISHKA</span>
              <span className="text-white/20">|</span>
              <span>SLTC / COLOMBO</span>
            </div>
          </div>

          {/* Console Body: 2 Columns (Radar Display + Capabilities Stack) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
            {/* Left Radar Sweep Column */}
            <div className="lg:col-span-5 p-8 flex flex-col items-center justify-center border-b lg:border-b-0 lg:border-r border-white/10 relative overflow-hidden bg-radial from-black/40 to-[#07080d]">
              {/* Radar circular screen */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full border border-[#ff4d00]/40 radar-grid shadow-[0_0_50px_rgba(255,77,0,0.12)] flex items-center justify-center">
                {/* Crosshairs */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-full h-px bg-[#ff4d00]/20" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="h-full w-px bg-[#ff4d00]/20" />
                </div>

                {/* Sweeping Cone */}
                <div 
                  className="absolute inset-0 rounded-full animate-radar-sweep pointer-events-none"
                  style={{
                    background: 'conic-gradient(from 0deg, transparent 0% 75%, rgba(255, 77, 0, 0.08) 88%, rgba(255, 77, 0, 0.6) 100%)'
                  }}
                />

                {/* Target Blips */}
                <div className="absolute top-[28%] left-[64%] w-2 h-2 rounded-full bg-[#00f59b] shadow-[0_0_8px_#00f59b] animate-pulse" />
                <div className="absolute top-[68%] left-[32%] w-2 h-2 rounded-full bg-[#ff4d00] shadow-[0_0_8px_#ff4d00] animate-ping" />
                <div className="absolute top-[52%] left-[78%] w-1.5 h-1.5 rounded-full bg-[#ff9900] animate-pulse" />

                {/* Center Core Info */}
                <div className="relative z-10 text-center font-mono bg-[#060709]/80 px-3 py-1.5 rounded border border-white/10 backdrop-blur-sm">
                  <div className="text-white text-xs font-semibold">24×7</div>
                  <div className="text-[#ff4d00] text-[9px] tracking-widest uppercase">ACTIVE RUNTIME</div>
                </div>
              </div>

              {/* Radar Caption */}
              <div className="mt-6 text-center font-mono text-xs text-[#9a9894]">
                <span>Automated Pipelines, Threat Auditing &amp; Model Serving</span>
              </div>
            </div>

            {/* Right Capabilities Stack */}
            <div className="lg:col-span-7 flex flex-col justify-between divide-y divide-white/10 bg-black/20">
              {about.whatIDo.map((cap) => (
                <div 
                  key={cap.number} 
                  className="p-6 md:p-8 hover:bg-[#ff4d00]/[0.03] transition-colors group"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="font-mono text-xs text-[#ff4d00] font-medium pt-1">
                      {cap.number}
                    </div>

                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="font-serif text-xl sm:text-2xl text-white font-medium group-hover:text-[#ff4d00] transition-colors">
                          {cap.title}
                        </h3>
                        <span className="font-mono text-[9px] px-2 py-0.5 rounded border border-[#ff4d00]/40 text-[#ff4d00] bg-[#ff4d00]/10 tracking-widest">
                          {cap.badge}
                        </span>
                      </div>

                      <p className="text-[#9a9894] text-xs sm:text-sm leading-relaxed">
                        {cap.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tech Stack Stream */}
        <div className="mt-12">
          <div className="font-mono text-xs uppercase tracking-widest text-[#9a9894] mb-4 flex items-center gap-2">
            <Terminal size={14} className="text-[#ff4d00]" />
            <span>TECH I REGULARLY USE</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-3">
            {about.techStack.map((tech) => (
              <div 
                key={tech.name}
                className="p-3.5 rounded border border-white/10 bg-[#090b10] flex flex-col items-center justify-center gap-2 hover:border-[#ff4d00]/50 hover:bg-[#ff4d00]/[0.04] transition-all group"
              >
                <img 
                  src={tech.icon} 
                  alt={tech.name} 
                  className="w-7 h-7 object-contain group-hover:scale-110 transition-transform"
                  loading="lazy"
                />
                <span className="font-mono text-[11px] text-white/80 group-hover:text-white">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
