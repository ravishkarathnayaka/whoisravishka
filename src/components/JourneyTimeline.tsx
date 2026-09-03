import React from 'react';
import { Clock, Briefcase, GraduationCap, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const JourneyTimeline: React.FC = () => {
  const { timeline } = portfolioData;

  return (
    <section id="journey" className="py-28 bg-[#06070a] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-[#ff4d00] mb-3 flex items-center gap-2">
              <Clock size={14} className="text-[#ff4d00]" />
              <span>// Chronological Field Log</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl font-medium tracking-tight text-white leading-tight">
              EXPERIENCE IN<br />
              <i className="text-[#ff4d00] not-italic italic font-normal">MOTION.</i>
            </h2>
          </div>
          <p className="text-[#9a9894] text-sm max-w-sm font-sans leading-relaxed">
            Professional roles, enterprise support operations, academic achievements, and technical specializations.
          </p>
        </div>

        {/* Timeline List */}
        <div className="border-t border-white/10 divide-y divide-white/10">
          {timeline.map((item, idx) => {
            const isEdu = item.type === 'education';

            return (
              <div 
                key={idx}
                className={`py-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-start transition-colors ${
                  isEdu ? 'bg-gradient-to-r from-[#ff4d00]/[0.04] to-transparent pl-4 md:pl-6 -mx-4 md:-mx-6 rounded-lg' : 'hover:bg-white/[0.01]'
                }`}
              >
                {/* Period Column */}
                <div className="md:col-span-3 font-mono text-xs text-[#ff4d00] tracking-wider uppercase pt-1">
                  {item.period}
                </div>

                {/* Details Column */}
                <div className="md:col-span-6 space-y-2">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium">
                      {item.role}
                    </h3>
                    {item.achievement && (
                      <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#00f59b]/10 text-[#00f59b] border border-[#00f59b]/30">
                        {item.achievement}
                      </span>
                    )}
                  </div>

                  <div className="text-sm font-medium text-white/90 font-sans flex items-center gap-2">
                    {isEdu ? <GraduationCap size={14} className="text-[#ff4d00]" /> : <Briefcase size={14} className="text-[#ff4d00]" />}
                    <span>{item.organization}</span>
                    <span className="text-white/30">·</span>
                    <span className="text-[#9a9894] font-normal text-xs">{item.location}</span>
                  </div>

                  <p className="text-[#9a9894] text-xs sm:text-sm font-sans leading-relaxed pt-1 max-w-xl">
                    {item.description}
                  </p>
                </div>

                {/* Tags Column */}
                <div className="md:col-span-3 flex flex-wrap gap-1.5 md:justify-end pt-2">
                  {item.tags.map((t) => (
                    <span 
                      key={t}
                      className="font-mono text-[10px] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-white/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
