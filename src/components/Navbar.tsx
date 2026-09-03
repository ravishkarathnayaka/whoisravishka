import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Constellation', href: '#constellation' },
    { label: 'Work', href: '#projects' },
    { label: 'Writing', href: '#writing' },
    { label: 'Journey', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

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
      className={`topbar-exact ${scrolled ? 'scrolled' : ''}`}
    >
      {/* Exact whoislsam Wordmark */}
      <a 
        href="#home" 
        className="wordmark-exact" 
        aria-label="Who is Ravishka — Home"
      >
        <span className="wm-command-exact">whois</span>
        <span className="wm-target-exact">ravishka</span>
        <i className="wordmark-cursor" aria-hidden="true" />
      </a>

      {/* Desktop Navigation Links */}
      <nav className="hidden lg:flex items-center gap-7 font-mono text-[11px] uppercase tracking-widest">
        {navLinks.map((link) => {
          const isActive = activeSection === link.href.substring(1);
          return (
            <a
              key={link.label}
              href={link.href}
              className={`transition-colors py-1 relative ${
                isActive 
                  ? 'text-white font-semibold' 
                  : 'text-white/80 hover:text-white'
              }`}
            >
              {link.label}
              {isActive && (
                <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#ff4d00]" />
              )}
            </a>
          );
        })}
      </nav>

      {/* Exact whoislsam Availability Badge */}
      <a 
        href={`mailto:${portfolioData.profile.email}`} 
        className="availability-exact hidden sm:flex"
      >
        <i aria-hidden="true" />
        <span>Available to connect</span>
      </a>

      {/* Mobile Hamburger Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="lg:hidden p-2 text-white border border-white/15 rounded bg-white/5 hover:border-[#ff4d00] transition-colors"
        aria-label="Toggle navigation menu"
      >
        {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
      </button>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#080808]/98 border-b border-white/10 backdrop-blur-xl px-6 py-6 animate-fadeIn">
          <nav className="flex flex-col gap-3 font-mono text-xs uppercase tracking-wider">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-white/80 hover:text-[#ff4d00] py-2 border-b border-white/5 transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-xs text-white/30">→</span>
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
