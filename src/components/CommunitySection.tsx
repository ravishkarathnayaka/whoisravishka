import React from 'react';
import { Users, ExternalLink, ArrowUpRight, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const CommunitySection: React.FC = () => {
  const { community } = portfolioData;

  return (
    <section id="community" className="py-28 bg-[#08090e] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-[#ff4d00] mb-3 flex items-center gap-2">
              <Users size={14} className="text-[#ff4d00]" />
              <span>// Leadership, Datathons &amp; Ecosystem</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl font-medium tracking-tight text-white leading-tight">
              COMMUNITY IN<br />
              <i className="text-[#ff4d00] not-italic italic font-normal">ACTION.</i>
            </h2>
          </div>
          <p className="text-[#9a9894] text-sm max-w-sm font-sans leading-relaxed">
            Founding Sri Lanka's premier university cloud conferences, leading national datathons, and mentoring the next generation of engineers.
          </p>
        </div>

        {/* Community Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {community.map((org, idx) => (
            <a
              key={idx}
              href={org.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 sm:p-8 rounded-xl border border-white/15 bg-[#0a0c14] hover:border-[#ff4d00]/50 hover:bg-[#ff4d00]/[0.02] transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded border border-white/15 bg-white/5 flex items-center justify-center overflow-hidden p-1.5">
                      <img 
                        src={org.logo} 
                        alt={org.name} 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl sm:text-2xl text-white font-medium group-hover:text-[#ff4d00] transition-colors leading-snug">
                        {org.name}
                      </h3>
                      <div className="font-mono text-xs text-[#ff4d00]">
                        {org.role}
                      </div>
                    </div>
                  </div>

                  <ArrowUpRight size={16} className="text-[#9a9894] group-hover:text-[#ff4d00] transition-colors shrink-0" />
                </div>

                {org.featuredHighlight && (
                  <div className="mb-4 inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#ff4d00]/10 border border-[#ff4d00]/30 font-mono text-[10px] text-[#ff4d00] uppercase tracking-wider">
                    <Sparkles size={11} />
                    <span>{org.featuredHighlight}</span>
                  </div>
                )}

                <p className="text-[#9a9894] text-xs sm:text-sm font-sans leading-relaxed">
                  {org.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between font-mono text-xs">
                <span className="text-[#9a9894]">{org.period}</span>
                {org.current ? (
                  <span className="text-[#00f59b] flex items-center gap-1.5 text-[11px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00f59b] animate-pulse" />
                    ACTIVE LEADER
                  </span>
                ) : (
                  <span className="text-[#9a9894] text-[11px]">COMPLETED TERM</span>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
