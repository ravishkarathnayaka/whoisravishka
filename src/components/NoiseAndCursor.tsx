import React, { useEffect, useState } from 'react';

export const NoiseAndCursor: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: -200, y: -200 });
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Top scroll progress indicator */}
      <div 
        className="fixed top-0 left-0 h-[2.5px] bg-[#ff4d00] z-50 transition-all duration-75 shadow-[0_0_12px_#ff4d00]"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      {/* Film grain noise texture */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Radial cursor spotlight glow */}
      <div 
        className="fixed pointer-events-none rounded-full z-0 transition-transform duration-100 ease-out hidden md:block"
        style={{
          width: '520px',
          height: '520px',
          background: 'radial-gradient(circle, rgba(255, 77, 0, 0.11) 0%, rgba(255, 113, 55, 0.03) 40%, transparent 70%)',
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
        aria-hidden="true"
      />
    </>
  );
};
