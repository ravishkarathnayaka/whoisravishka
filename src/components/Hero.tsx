import React, { useEffect, useRef } from 'react';

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const heroArtRef = useRef<HTMLDivElement>(null);
  const heroNameRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    let pointerX = 0;
    let pointerY = 0;
    let framePending = false;

    const paintMotion = () => {
      const scrollY = window.scrollY;
      if (scrollY < window.innerHeight && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        if (heroArtRef.current) {
          // Dynamic depth parallax for 3D cybernetic figure
          heroArtRef.current.style.transform = `translateX(-39%) translate3d(${pointerX * 26}px, ${scrollY * 0.08 + pointerY * 18}px, 0)`;
        }
        if (heroNameRef.current) {
          // Counter-parallax on giant typographic name
          heroNameRef.current.style.transform = `translateY(-50%) translate3d(${pointerX * -14}px, ${pointerY * -8}px, 0)`;
        }
      }
      framePending = false;
    };

    const requestPaint = () => {
      if (!framePending) {
        requestAnimationFrame(paintMotion);
        framePending = true;
      }
    };

    const handlePointerMove = (e: PointerEvent) => {
      pointerX = e.clientX / window.innerWidth - 0.5;
      pointerY = e.clientY / window.innerHeight - 0.5;
      requestPaint();
    };

    const handleScroll = () => {
      requestPaint();
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section ref={heroRef} className="hero-exact" id="home">
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
        <span>IDENTITY SIGNAL</span>
        <strong>98.7%</strong>
        <small>CONFIDENCE</small>
      </div>

      {/* Top Kicker (Top Left) */}
      <div className="hero-kicker-exact">
        <span className="text-white/75 font-mono mr-4 text-xs">01</span>
        <div className="inline-block align-top">
          <b className="font-semibold text-white tracking-wider block text-xs">
            CYBERSECURITY UNDERGRADUATE
          </b>
          <small className="block mt-1 text-[#260900] font-medium text-[11px] tracking-wider uppercase">
            PASSIONATE ABOUT SECURITY, ARTIFICIAL INTELLIGENCE &amp; SYSTEMS
          </small>
        </div>
      </div>

      {/* Exact Giant Typographic Display Name with Hover Kinetic Separation */}
      <h1 ref={heroNameRef} className="hero-name-exact" aria-label="Ravishka Rathnayaka">
        <span className="solid">RAVISHKA</span>
        <span className="outline">RATHNAYAKA</span>
      </h1>

      {/* Center 3D Cyber Art with Mouse Parallax & Hover Glow */}
      <div ref={heroArtRef} className="hero-art-exact" aria-hidden="true">
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
        <span>Passionate about Security &amp; AI</span>
        <small>
          Public identity: Ravishka Rathnayaka · Based in Sri Lanka
        </small>
      </div>

      {/* Scroll to explore (Bottom Right on Dark) */}
      <div className="scroll-note-exact">
        Scroll to explore <b>↓</b>
      </div>
    </section>
  );
};
