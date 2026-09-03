import React from 'react';
import { BookOpen, ExternalLink, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const WritingSection: React.FC = () => {
  const { articles, profile } = portfolioData;

  return (
    <section id="writing" className="py-28 bg-[#08090e] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-[#ff4d00] mb-3 flex items-center gap-2">
              <BookOpen size={14} className="text-[#ff4d00]" />
              <span>// Research, Write-Ups &amp; Field Notes</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl font-medium tracking-tight text-white leading-tight">
              THINKING IN<br />
              <i className="text-[#ff4d00] not-italic italic font-normal">PUBLIC.</i>
            </h2>
          </div>
          <a
            href={profile.socials.medium}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 hover:border-[#ff4d00] hover:bg-[#ff4d00] hover:text-black transition-all font-mono text-xs uppercase tracking-wider text-white"
          >
            <span>Read on Medium</span>
            <ExternalLink size={12} />
          </a>
        </div>

        {/* Articles 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((article, idx) => (
            <a
              key={idx}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 sm:p-8 rounded-xl border border-white/15 bg-[#0a0b12] hover:border-[#ff4d00]/50 hover:bg-[#ff4d00]/[0.02] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between font-mono text-[10px] text-[#9a9894] uppercase tracking-widest mb-4">
                  <span className="text-[#ff4d00]">{article.date}</span>
                  <span>{article.readTime}</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium group-hover:text-[#ff4d00] transition-colors leading-snug mb-3">
                  {article.title}
                </h3>

                <p className="text-[#9a9894] text-xs sm:text-sm font-sans leading-relaxed mb-6">
                  {article.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {article.tags.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] px-2.5 py-0.5 rounded bg-white/5 border border-white/10 text-white/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-1 font-mono text-xs text-[#ff4d00] group-hover:translate-x-1 transition-transform">
                  <span>Read Field Note</span>
                  <ArrowUpRight size={13} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
