import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const { profile } = portfolioData;

  return (
    <section className="hero-exact" id="home">
      {/* Exact whoislsam Orbital Rings */}
      <div className="hero-orbit-exact orbit-one-exact" aria-hidden="true" />
      <div className="hero-orbit-exact orbit-two-exact" aria-hidden="true" />

      {/* Telemetry A (Top Right) */}
      <div className="hero-telemetry-exact telemetry-a-exact" aria-hidden="true">
        <span>DEFENSIVE POSTURE</span>
        <strong>RESILIENT</strong>
        <i />
      </div>

      {/* Telemetry B (Right Middle) */}
      <div className="hero-telemetry-exact telemetry-b-exact" aria-hidden="true">
        <span>PRIMARY LEADERSHIP</span>
        <strong>CHAIRMAN</strong>
        <small>IEEE CS SLTC</small>
      </div>

      {/* Top Kicker (Top Left) */}
      <div className="hero-kicker-exact">
        <span className="text-white/75 font-mono mr-4 text-xs">01</span>
        <div className="inline-block align-top">
          <b className="font-semibold text-white tracking-wider block text-xs">
            CYBERSECURITY &amp; DEVOPS / BASED IN SRI LANKA
          </b>
          <small className="block mt-1 text-[#260900] font-medium text-[11px] tracking-wider uppercase">
            SLTC · FIRST CLASS TRACK · CHAIRMAN — IEEE COMPUTER SOCIETY
          </small>
        </div>
      </div>

      {/* Exact Giant Typographic Display Name */}
      <h1 className="hero-name-exact" aria-label="Ravishka Rathnayaka">
        <span className="solid">RAVISHKA</span>
        <span className="outline">RATHNAYAKA</span>
      </h1>

      {/* Center 3D Cyber Art (Exact mix-blend-mode: screen to eliminate any black box!) */}
      <div className="hero-art-exact" aria-hidden="true">
        <img 
          src="/assets/cyber-oracle.png" 
          alt="Abstract black chrome cybernetic figure dissolving into orange data particles" 
        />
      </div>

      {/* Floating Editorial Narrative Copy (Right Side) */}
      <div className="hero-copy-exact">
        <p>
          Securing systems, <em>automating</em> pipelines, and capturing stories through the lens.
        </p>
        <a className="round-link-exact" href="#projects" aria-label="Explore selected work">
          ↘
        </a>
      </div>

      {/* Identity Role (Bottom Left on Orange) */}
      <div className="hero-role-exact">
        Cybersecurity Undergraduate<br />
        <span>&amp; MLOps / DevOps Enthusiast</span>
        <small>
          Public identity: Ravishka Rathnayaka · Chairman — IEEE Computer Society of SLTC
        </small>
      </div>

      {/* Scroll to explore (Bottom Right on Dark) */}
      <div className="scroll-note-exact">
        Scroll to explore <b>↓</b>
      </div>
    </section>
  );
};
