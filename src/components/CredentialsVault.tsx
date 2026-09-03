import React, { useState, useEffect, useRef } from 'react';
import { Award, Search, ExternalLink, CheckCircle2, GraduationCap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const CredentialsVault: React.FC = () => {
  const { credentials } = portfolioData;
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Keyboard shortcut ⌘K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const filteredCredentials = credentials.filter((cred) => {
    const matchesQuery = 
      cred.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cred.issuer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesQuery;
  });

  return (
    <section id="credentials" className="py-28 bg-[#08090e] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-[#ff4d00] mb-3 flex items-center gap-2">
              <Award size={14} className="text-[#ff4d00]" />
              <span>// Verified Academic &amp; Professional Qualifications</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl font-medium tracking-tight text-white leading-tight">
              EDUCATION &amp;<br />
              <i className="text-[#ff4d00] not-italic italic font-normal">CREDENTIALS.</i>
            </h2>
          </div>
          <p className="text-[#9a9894] text-sm max-w-sm font-sans leading-relaxed">
            Educational journey, academic achievements, and earned qualifications spanning cybersecurity, computer engineering, and marketing.
          </p>
        </div>

        {/* Vault Controls: Search Bar */}
        <div className="p-4 rounded-t-xl border border-white/15 bg-black/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-mono text-xs text-white/80">
            REGISTER OF OFFICIAL QUALIFICATIONS
          </div>

          {/* Search Input with ⌘K Badge */}
          <div className="relative w-full sm:w-72">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9a9894]" />
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="SEARCH CREDENTIALS"
              className="w-full bg-[#0d0e15] border border-white/20 rounded pl-9 pr-12 py-1.5 font-mono text-xs text-white placeholder-[#9a9894] focus:outline-none focus:border-[#ff4d00] transition-colors"
            />
            <kbd className="absolute right-2.5 top-1/2 -translate-y-1/2 px-1.5 py-0.5 rounded bg-white/10 font-mono text-[9px] text-[#9a9894] border border-white/10 pointer-events-none">
              ⌘K
            </kbd>
          </div>
        </div>

        {/* Credentials Grid */}
        <div className="border-x border-b border-white/15 bg-[#090b10] grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-white/10 shadow-2xl">
          {filteredCredentials.map((cred) => (
            <div 
              key={cred.id} 
              className="p-7 bg-[#090b10] hover:bg-[#ff4d00]/[0.03] transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between font-mono text-[10px] text-[#9a9894] uppercase tracking-widest mb-3">
                  <span className="text-[#ff4d00] flex items-center gap-1.5 font-medium">
                    <GraduationCap size={13} />
                    <span>ACADEMIC</span>
                  </span>
                  <span>{cred.issueDate}</span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl text-white font-medium group-hover:text-[#ff4d00] transition-colors leading-snug mb-2">
                  {cred.title}
                </h3>

                <p className="text-[#9a9894] text-xs font-sans mb-4">
                  Institution: <strong className="text-white font-normal">{cred.issuer}</strong>
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs">
                <span className="text-[11px] text-[#00f59b] flex items-center gap-1.5">
                  <CheckCircle2 size={13} />
                  <span>VERIFIED RECORD</span>
                </span>

                {cred.verificationUrl !== '#' && (
                  <a
                    href={cred.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[11px] text-[#ff4d00] hover:underline"
                  >
                    <span>View Institution</span>
                    <ExternalLink size={11} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredCredentials.length === 0 && (
          <div className="border-x border-b border-white/15 bg-[#090b10] p-12 text-center font-mono text-xs text-[#9a9894]">
            No qualifications found matching your search.
          </div>
        )}

        {/* Vault Footer */}
        <div className="p-4 border-x border-b border-white/15 bg-black/40 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] text-[#9a9894] uppercase tracking-wider">
          <span>INSTITUTIONS: SRI LANKA TECHNOLOGY CAMPUS (SLTC) · ICET · SLIM · T/AGRABODHI COLLEGE</span>
          <span className="text-white">Total: {credentials.length} Qualifications</span>
        </div>
      </div>
    </section>
  );
};
