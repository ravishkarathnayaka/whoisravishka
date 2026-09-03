/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          ink: '#060709',
          dark: '#090a0f',
          card: '#0c0d14',
          panel: '#11131b',
          line: 'rgba(255, 255, 255, 0.12)',
          orange: '#ff4d00',
          ember: '#ff7137',
          amber: '#ff9900',
          emerald: '#00f59b',
          paper: '#f4f1eb',
          muted: '#9a9894',
          dim: '#666460'
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        mono: ['"DM Mono"', 'monospace'],
        sans: ['Manrope', 'sans-serif'],
      },
      animation: {
        'radar-sweep': 'sweep 4s linear infinite',
        'laser-scan': 'laserScan 4s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'orbit-slow': 'orbit 25s linear infinite',
        'orbit-reverse': 'orbitRev 30s linear infinite',
        'marquee': 'marquee 25s linear infinite',
        'blink': 'blink 1s step-start infinite',
      },
      keyframes: {
        sweep: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        laserScan: {
          '0%, 100%': { top: '0%', opacity: '0.2' },
          '50%': { top: '100%', opacity: '0.8' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
        orbit: {
          '0%': { transform: 'translate(-50%, -50%) rotate(0deg)' },
          '100%': { transform: 'translate(-50%, -50%) rotate(360deg)' },
        },
        orbitRev: {
          '0%': { transform: 'translate(-50%, -50%) rotate(360deg)' },
          '100%': { transform: 'translate(-50%, -50%) rotate(0deg)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        }
      }
    },
  },
  plugins: [],
}
