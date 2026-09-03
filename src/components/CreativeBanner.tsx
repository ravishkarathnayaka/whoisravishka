import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const CreativeBanner: React.FC = () => {
  const { profile } = portfolioData;

  return (
    <section className="py-24 bg-[#08090e] border-b border-white/10 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
        <div className="font-mono text-xs uppercase tracking-widest text-[#ff4d00] mb-3">
          // CREATIVE VISION &amp; PERSPECTIVE
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl font-medium tracking-tight text-white mb-4">
          Thanks for checking in
        </h2>

        <p className="text-[#9a9894] font-mono text-xs sm:text-sm max-w-lg mx-auto mb-10">
          {profile.creativeQuote}
        </p>

        {/* Featured Visual Artwork */}
        <div className="relative rounded-2xl overflow-hidden border border-[#ff4d00]/30 shadow-[0_0_50px_rgba(255,77,0,0.15)] group max-w-4xl mx-auto">
          <img 
            src={profile.creativeBanner} 
            alt="Ravishka working with futuristic tech visualizations"
            className="w-full h-auto object-cover grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
          
          <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-left font-mono text-[11px] text-white/80">
            <span>RAVISHKA RATHNAYAKA</span>
            <span className="text-[#ff4d00]">CYBERSECURITY · DEVOPS · VIDEOGRAPHY</span>
          </div>
        </div>
      </div>
    </section>
  );
};
