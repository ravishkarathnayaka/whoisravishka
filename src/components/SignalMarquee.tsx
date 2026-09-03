import React from 'react';

export const SignalMarquee: React.FC = () => {
  const words = [
    'DEFEND',
    'AUTOMATE',
    'DEPLOY',
    'SECURE',
    'MLOPS',
    'CONTAINERIZE',
    'CI / CD',
    'TRIAGE',
    'OBSERVE',
    'ORCHESTRATE',
    'CINEMATIC REEL'
  ];

  return (
    <div className="w-full border-y border-white/10 bg-[#08090d] py-3.5 overflow-hidden select-none pointer-events-none">
      <div className="flex whitespace-nowrap animate-marquee font-mono text-[11px] uppercase tracking-[0.25em] text-[#9a9894]">
        {/* Repeating sequence twice for seamless loop */}
        {[...words, ...words, ...words, ...words].map((word, idx) => (
          <span key={idx} className="inline-flex items-center">
            <span className="hover:text-white transition-colors">{word}</span>
            <span className="mx-6 text-[#ff4d00] font-normal">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
};
