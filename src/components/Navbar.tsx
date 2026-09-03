import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Constellation', href: '#constellation' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Credentials', href: '#credentials' },
    { label: 'Community', href: '#community' },
    { label: 'Writing', href: '#writing' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navLinks.map(link => link.href.substring(1));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#060709]/90 backdrop-blur-md border-b border-white/10 py-4 shadow-2xl' 
          : 'bg-transparent border-b border-white/5 py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Terminal Wordmark */}
        <a 
          href="#home" 
          className="group flex items-center gap-2 font-mono text-base tracking-tighter text-[#f4f1eb] hover:text-white transition-colors"
        >
          <div className="w-7 h-7 rounded border border-white/15 bg-white/5 flex items-center justify-center text-[#ff4d00] group-hover:border-[#ff4d00]/50 transition-colors">
            <Terminal size={14} />
          </div>
          <div>
            <span className="text-[#ff4d00] font-medium">whois</span>
            <span className="text-white font-normal">ravishka</span>
            <span className="inline-block w-2 h-4 ml-1 bg-[#ff4d00] animate-pulse align-middle" />
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 font-mono text-xs uppercase tracking-widest text-[#9a9894]">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.label}
                href={link.href}
                className={`transition-colors py-1 relative ${
                  isActive ? 'text-[#ff4d00] font-medium' : 'hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#ff4d00]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Availability Badge */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href={`mailto:${portfolioData.profile.email}`}
            className="group flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/15 bg-white/[0.03] hover:border-[#ff4d00]/50 hover:bg-[#ff4d00]/10 transition-all font-mono text-[11px] tracking-wider uppercase text-[#f4f1eb]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f59b] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00f59b]"></span>
            </span>
            <span>Available to connect</span>
            <ArrowUpRight size={12} className="text-[#ff4d00] opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-white border border-white/15 rounded bg-white/5 hover:border-[#ff4d00]/50 transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#060709]/98 border-b border-white/10 backdrop-blur-xl px-6 py-8 animate-fadeIn">
          <nav className="flex flex-col gap-4 font-mono text-sm uppercase tracking-wider">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#9a9894] hover:text-[#ff4d00] py-2 border-b border-white/5 transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-xs text-white/20">→</span>
              </a>
            ))}
            <div className="pt-4">
              <a
                href={`mailto:${portfolioData.profile.email}`}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg border border-[#ff4d00]/40 bg-[#ff4d00]/10 text-white font-mono text-xs uppercase tracking-wider"
              >
                <span className="w-2 h-2 rounded-full bg-[#00f59b]" />
                <span>Available to Connect</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
