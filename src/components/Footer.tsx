import React from 'react';
import { Terminal, Github, Linkedin, BookOpen, Instagram, ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const { profile } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 bg-[#040508] border-t border-white/10 font-mono text-xs text-[#9a9894]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
          <div className="md:col-span-6 space-y-4">
            <a 
              href="#home" 
              className="flex items-center gap-2 text-base text-white tracking-tight"
            >
              <div className="w-6 h-6 rounded border border-white/20 bg-white/5 flex items-center justify-center text-[#ff4d00]">
                <Terminal size={12} />
              </div>
              <div>
                <span className="text-[#ff4d00]">whois</span>
                <span>ravishka</span>
              </div>
            </a>
            <p className="text-[#9a9894] text-xs max-w-sm font-sans leading-relaxed">
              Ravishka Rathnayaka · Cybersecurity Specialist, MLOps &amp; DevOps Engineer. Securing systems, automating pipelines, and capturing stories through the lens.
            </p>
          </div>

          <div className="md:col-span-6 flex flex-col md:items-end justify-between space-y-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 rounded border border-white/15 hover:border-[#ff4d00] hover:text-white transition-colors"
            >
              <span>BACK TO TOP</span>
              <ArrowUp size={12} className="text-[#ff4d00]" />
            </button>

            <div className="flex flex-wrap gap-4 text-xs">
              <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#ff4d00] transition-colors flex items-center gap-1">
                <Linkedin size={13} />
                <span>LinkedIn</span>
              </a>
              <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#ff4d00] transition-colors flex items-center gap-1">
                <Github size={13} />
                <span>GitHub</span>
              </a>
              <a href={profile.socials.medium} target="_blank" rel="noopener noreferrer" className="hover:text-[#ff4d00] transition-colors flex items-center gap-1">
                <BookOpen size={13} />
                <span>Medium</span>
              </a>
              <a href={profile.socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-[#ff4d00] transition-colors flex items-center gap-1">
                <Instagram size={13} />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <div>
            © {new Date().getFullYear()} Ravishka Rathnayaka. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00f59b]" />
              <span>SYSTEMS FULLY OPERATIONAL</span>
            </span>
            <span className="text-white/20">|</span>
            <a 
              href="https://github.com/ravishkarathnayaka" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[#ff4d00] transition-colors"
            >
              VIEW SOURCE
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
