import React, { useState, useEffect, useRef } from 'react';
import { Award, Search, ExternalLink, CheckCircle2, ShieldCheck } from 'lucide-react';
import { portfolioData, Credential } from '../data/portfolioData';

export const CredentialsVault: React.FC = () => {
  const { credentials } = portfolioData;
  const [activeFilter, setActiveFilter] = useState<'all' | 'security' | 'cloud' | 'data' | 'academic'>('all');
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
    const matchesFilter = activeFilter === 'all' || cred.category === activeFilter;
    const matchesQuery = 
      cred.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cred.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (cred.credentialId && cred.credentialId.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesQuery;
  });

  const categories = [
    { key: 'all', label: 'ALL CREDENTIALS' },
    { key: 'security', label: 'SECURITY' },
    { key: 'cloud', label: 'CLOUD & DEVOPS' },
    { key: 'data', label: 'AI & DATA' },
    { key: 'academic', label: 'ACADEMIC DEGREES' },
  ];

  return (
    <section id="credentials" className="py-28 bg-[#08090e] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-[#ff4d00] mb-3 flex items-center gap-2">
              <Award size={14} className="text-[#ff4d00]" />
              <span>// Verified Learning &amp; Professional Credentials</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl font-medium tracking-tight text-white leading-tight">
              PROOF BEHIND<br />
              <i className="text-[#ff4d00] not-italic italic font-normal">THE PRACTICE.</i>
            </h2>
          </div>
          <p className="text-[#9a9894] text-sm max-w-sm font-sans leading-relaxed">
            A searchable record of academic degrees, professional certifications, and earned badges across cybersecurity, cloud architectures, and systems engineering.
          </p>
        </div>

        {/* Vault Controls: Categories & Search Bar */}
        <div className="p-4 rounded-t-xl border border-white/15 bg-black/60 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveFilter(cat.key as any)}
                className={`px-3 py-1.5 rounded-full font-mono text-[11px] tracking-wider uppercase transition-all ${
                  activeFilter === cat.key
                    ? 'bg-[#ff4d00] text-black font-semibold shadow-[0_0_15px_rgba(255,77,0,0.4)]'
                    : 'border border-white/15 text-[#9a9894] hover:text-white hover:border-white/30 bg-white/[0.02]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input with ⌘K Badge */}
          <div className="relative w-full md:w-72">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9a9894]" />
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="SEARCH THE REGISTER"
              className="w-full bg-[#0d0e15] border border-white/20 rounded pl-9 pr-12 py-1.5 font-mono text-xs text-white placeholder-[#9a9894] focus:outline-none focus:border-[#ff4d00] transition-colors"
            />
            <kbd className="absolute right-2.5 top-1/2 -translate-y-1/2 px-1.5 py-0.5 rounded bg-white/10 font-mono text-[9px] text-[#9a9894] border border-white/10 pointer-events-none">
              ⌘K
            </kbd>
          </div>
        </div>

        {/* Credentials Grid */}
        <div className="border-x border-b border-white/15 bg-[#090b10] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:gap-[1px] md:bg-white/10 shadow-2xl">
          {filteredCredentials.map((cred) => (
            <div 
              key={cred.id} 
              className="p-6 bg-[#090b10] hover:bg-[#ff4d00]/[0.03] transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between font-mono text-[10px] text-[#9a9894] uppercase tracking-widest mb-3">
                  <span className="text-[#ff4d00] flex items-center gap-1.5 font-medium">
                    <ShieldCheck size={12} />
                    <span>{cred.category.toUpperCase()}</span>
                  </span>
                  <span>{cred.issueDate}</span>
                </div>

                <h3 className="font-serif text-lg text-white font-medium group-hover:text-[#ff4d00] transition-colors leading-snug mb-2">
                  {cred.title}
                </h3>

                <p className="text-[#9a9894] text-xs font-sans mb-4">
                  Issued by: <strong className="text-white font-normal">{cred.issuer}</strong>
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs">
                {cred.credentialId ? (
                  <span className="text-[10px] text-[#9a9894] truncate max-w-[140px]">
                    ID: {cred.credentialId}
                  </span>
                ) : (
                  <span className="text-[10px] text-[#00f59b] flex items-center gap-1">
                    <CheckCircle2 size={11} />
                    VERIFIED
                  </span>
                )}

                <a
                  href={cred.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-[11px] text-[#ff4d00] hover:underline"
                >
                  <span>Verify</span>
                  <ExternalLink size={11} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredCredentials.length === 0 && (
          <div className="border-x border-b border-white/15 bg-[#090b10] p-12 text-center font-mono text-xs text-[#9a9894]">
            No credentials found matching your search. Clear query to reset.
          </div>
        )}

        {/* Vault Footer */}
        <div className="p-4 border-x border-b border-white/15 bg-black/40 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] text-[#9a9894] uppercase tracking-wider">
          <span>ISSUERS: SLTC · ICET · SLIM · MICROSOFT · CISCO · DOCKER · FORTINET · GOOGLE · PYTHON INSTITUTE</span>
          <span className="text-white">Total Verified: {credentials.length} Records</span>
        </div>
      </div>
    </section>
  );
};
