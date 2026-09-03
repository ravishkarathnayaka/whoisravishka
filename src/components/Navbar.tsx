import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Primary desktop links to avoid crowding
  const primaryLinks = [
    { label: 'About', href: '#about' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Credentials', href: '#credentials' },
    { label: 'Community', href: '#community' },
    { label: 'Writing', href: '#writing' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = primaryLinks.map(link => link.href.substring(1));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 220) {
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
          ? 'bg-[#060709]/95 backdrop-blur-md border-b border-white/10 py-3.5 shadow-2xl' 
          : 'bg-transparent border-b border-white/5 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Terminal Wordmark (Fixed inline wrap) */}
        <a 
          href="#home" 
          className="group flex items-center gap-2.5 font-mono text-sm tracking-tight text-[#f4f1eb] hover:text-white transition-colors shrink-0"
        >
          <div className="w-6 h-6 rounded border border-white/15 bg-white/5 flex items-center justify-center text-[#ff4d00] group-hover:border-[#ff4d00]/50 transition-colors">
            <Terminal size={12} />
          </div>
          <div className="flex items-center whitespace-nowrap">
            <span className="text-[#ff4d00] font-semibold">whois</span>
            <span className="text-white font-normal ml-0.5">ravishka</span>
            <span className="inline-block w-1.5 h-3 ml-1 bg-[#ff4d00] animate-pulse" />
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-7 font-mono text-[11px] uppercase tracking-widest text-[#9a9894]">
          {primaryLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.label}
                href={link.href}
                className={`transition-colors py-1 relative ${
                  isActive ? 'text-[#ff4d00] font-semibold' : 'hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#ff4d00] shadow-[0_0_8px_#ff4d00]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Availability Badge */}
        <div className="hidden sm:flex items-center gap-4 shrink-0">
          <a
            href={`mailto:${portfolioData.profile.email}`}
            className="group flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/15 bg-white/[0.03] hover:border-[#ff4d00]/50 hover:bg-[#ff4d00]/10 transition-all font-mono text-[10px] tracking-widest uppercase text-[#f4f1eb]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f59b] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00f59b]"></span>
            </span>
            <span>Available to connect</span>
            <ArrowUpRight size={12} className="text-[#ff4d00] opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile / Tablet Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden p-2 text-white border border-white/15 rounded bg-white/5 hover:border-[#ff4d00]/50 transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#060709]/98 border-b border-white/10 backdrop-blur-xl px-6 py-6 animate-fadeIn">
          <nav className="flex flex-col gap-3 font-mono text-xs uppercase tracking-wider">
            {primaryLinks.map((link) => (
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
            <div className="pt-3">
              <a
                href={`mailto:${portfolioData.profile.email}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg border border-[#ff4d00]/40 bg-[#ff4d00]/10 text-white font-mono text-xs uppercase tracking-wider"
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
