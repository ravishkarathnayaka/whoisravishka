import React from 'react';
import { ArrowUpRight, Linkedin, Github, Instagram, BookOpen } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Manifesto: React.FC = () => {
  const { profile, about } = portfolioData;

  return (
    <section id="about" className="py-28 bg-[#08090e] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="font-mono text-xs uppercase tracking-widest text-[#ff4d00] mb-4">
          {about.eyebrow}
        </div>

        <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-white leading-[0.95] mb-16">
          {about.displayTitle}<br />
          <i className="text-[#ff4d00] not-italic italic font-normal">{about.displayTitleItalic}</i>
        </h2>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-20 border-b border-white/10">
          <div className="lg:col-span-7">
            <p className="font-serif text-2xl sm:text-3xl text-[#f4f1eb] leading-snug font-normal">
              {about.lead}
            </p>
          </div>
          <div className="lg:col-span-5 space-y-6 text-[#9a9894] text-sm md:text-base leading-relaxed font-sans">
            <p>{about.body1}</p>
            <p>{about.body2}</p>
          </div>
        </div>

        {/* Identity Portrait Block */}
        <div className="py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Framed Portrait */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[420px] aspect-[4/5] portrait-polygon bg-[#12141d] p-3 border border-white/20 group">
              <div className="relative w-full h-full overflow-hidden portrait-polygon-inner bg-black">
                <img 
                  src={profile.portrait} 
                  alt="Portrait of Ravishka Rathnayaka" 
                  className="w-full h-full object-cover grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />

                {/* Animated Laser Scanning Beam */}
                <div 
                  className="absolute left-0 right-0 h-[2px] bg-[#ff4d00] shadow-[0_0_15px_3px_#ff4d00] animate-laser-scan pointer-events-none" 
                  aria-hidden="true" 
                />

                {/* Watermark Tag */}
                <div className="absolute bottom-4 left-4 z-10 font-mono text-[10px] tracking-widest text-[#ff4d00] bg-black/70 px-2 py-1 border border-[#ff4d00]/40 backdrop-blur-sm">
                  WHOIS / RAVISHKA
                </div>
              </div>
            </div>
          </div>

          {/* Identity Story & Social Links */}
          <div className="lg:col-span-7 space-y-6">
            <div className="font-mono text-xs tracking-widest uppercase text-[#ff4d00]">
              CYBERSECURITY &amp; DEVOPS ENTHUSIAST · VIDEOGRAPHER
            </div>

            <h3 className="font-serif text-3xl sm:text-5xl font-medium text-white tracking-tight">
              Ravishka <span className="italic text-[#ff4d00]">Rathnayaka</span>
            </h3>

            <p className="text-[#9a9894] text-base leading-relaxed max-w-xl">
              Undergraduate at Sri Lanka Technology Campus (SLTC) reading for BSc (Hons) in Cyber Security. Passionate about automated cloud systems, MLOps, open-source development, and visual storytelling.
            </p>

            <div className="font-mono text-xs text-[#9a9894] tracking-wider py-2">
              Based in Colombo, Sri Lanka · Founding Chair of CloudSpace v1.0 · Chair of Codemania V6.0 Datathon
            </div>

            {/* Social Profile Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 max-w-lg">
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded border border-white/10 bg-white/[0.02] hover:border-[#ff4d00]/50 hover:bg-[#ff4d00]/10 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <Linkedin size={18} className="text-[#ff4d00]" />
                  <div>
                    <div className="text-white text-xs font-medium font-sans">LinkedIn</div>
                    <div className="text-[#9a9894] text-[10px] font-mono">/in/ravishkarathnayaka</div>
                  </div>
                </div>
                <ArrowUpRight size={14} className="text-[#9a9894] group-hover:text-[#ff4d00] transition-colors" />
              </a>

              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded border border-white/10 bg-white/[0.02] hover:border-[#ff4d00]/50 hover:bg-[#ff4d00]/10 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <Github size={18} className="text-[#ff4d00]" />
                  <div>
                    <div className="text-white text-xs font-medium font-sans">GitHub</div>
                    <div className="text-[#9a9894] text-[10px] font-mono">/ravishkarathnayaka</div>
                  </div>
                </div>
                <ArrowUpRight size={14} className="text-[#9a9894] group-hover:text-[#ff4d00] transition-colors" />
              </a>

              <a
                href={profile.socials.medium}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded border border-white/10 bg-white/[0.02] hover:border-[#ff4d00]/50 hover:bg-[#ff4d00]/10 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <BookOpen size={18} className="text-[#ff4d00]" />
                  <div>
                    <div className="text-white text-xs font-medium font-sans">Medium</div>
                    <div className="text-[#9a9894] text-[10px] font-mono">@ravishkarathnayaka.v</div>
                  </div>
                </div>
                <ArrowUpRight size={14} className="text-[#9a9894] group-hover:text-[#ff4d00] transition-colors" />
              </a>

              <a
                href={profile.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded border border-white/10 bg-white/[0.02] hover:border-[#ff4d00]/50 hover:bg-[#ff4d00]/10 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <Instagram size={18} className="text-[#ff4d00]" />
                  <div>
                    <div className="text-white text-xs font-medium font-sans">Instagram</div>
                    <div className="text-[#9a9894] text-[10px] font-mono">@ravishka._</div>
                  </div>
                </div>
                <ArrowUpRight size={14} className="text-[#9a9894] group-hover:text-[#ff4d00] transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* 4 Metric Counters Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-white/10 pt-10 gap-8">
          {profile.metrics.map((m, idx) => (
            <div key={idx} className="space-y-2">
              <div className="font-serif text-5xl sm:text-6xl lg:text-7xl font-medium text-white tracking-tight">
                {m.count}
              </div>
              <div className="font-mono text-xs uppercase tracking-widest text-[#ff4d00]">
                {m.label}
              </div>
              <div className="text-[#9a9894] text-xs font-sans">
                {m.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
