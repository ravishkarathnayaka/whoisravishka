import React, { useState } from 'react';
import { Radio, RefreshCw, ExternalLink, AlertTriangle, Globe, ShieldAlert, Newspaper } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const ThreatIntel: React.FC = () => {
  const { threatIntelData } = portfolioData;
  const [selectedPoint, setSelectedPoint] = useState<string | null>('US-CENTRAL');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const threatPoints = [
    { id: 'US-CENTRAL', label: 'North America / East', x: 220, y: 160, targets: '18,420 attacks', origin: 'AS15169 Google LLC' },
    { id: 'EU-WEST', label: 'Western Europe', x: 490, y: 140, targets: '12,390 attacks', origin: 'AS24940 Hetzner Online' },
    { id: 'AP-SOUTH', label: 'South Asia (Colombo / SL)', x: 680, y: 270, targets: '4,150 attacks', origin: 'AS9329 Sri Lanka Telecom' },
    { id: 'EA-NORTH', label: 'East Asia', x: 790, y: 180, targets: '9,810 attacks', origin: 'AS4134 Chinanet' },
    { id: 'SA-EAST', label: 'South America', x: 340, y: 340, targets: '2,890 attacks', origin: 'AS27699 Telecomunicacoes' },
    { id: 'AU-EAST', label: 'Oceania', x: 860, y: 370, targets: '1,250 attacks', origin: 'AS1221 Telstra Corp' },
  ];

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 800);
  };

  const currentPointData = threatPoints.find(p => p.id === selectedPoint) || threatPoints[2];

  return (
    <section id="intel" className="py-28 bg-[#07080c] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-[#ff4d00] mb-3 flex items-center gap-2">
              <Globe size={14} className="text-[#ff4d00]" />
              <span>// Evidence-Backed Threat &amp; Telemetry Observatory</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl font-medium tracking-tight text-white leading-tight">
              OBSERVED THREAT<br />
              <i className="text-[#ff4d00] not-italic italic font-normal">ACTIVITY &amp; INTEL.</i>
            </h2>
          </div>
          <p className="text-[#9a9894] text-sm max-w-sm font-sans leading-relaxed">
            Real-time security telemetry derived from public CTI feeds, CISA KEV catalogs, honeypot sensors, and live threat streams.
          </p>
        </div>

        {/* Global Threat Status Strip */}
        <div className="p-4 rounded-t-xl border border-white/15 bg-black/60 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-[#9a9894]">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00f59b] animate-pulse" />
            <span className="text-white font-medium">{threatIntelData.status}</span>
            <span className="text-white/20">|</span>
            <span className="text-[#ff4d00]">GLOBAL SENSOR VIEW</span>
          </div>

          <div className="flex items-center gap-4">
            <span>SYNC: {threatIntelData.syncTime}</span>
            <button
              onClick={handleRefresh}
              className="flex items-center gap-1.5 px-3 py-1 rounded border border-white/20 bg-white/5 hover:border-[#ff4d00] hover:text-white transition-colors"
            >
              <RefreshCw size={12} className={isRefreshing ? 'animate-spin text-[#ff4d00]' : ''} />
              <span>REFRESH</span>
            </button>
          </div>
        </div>

        {/* Main Threat Console: Interactive SVG Map + Network Readout */}
        <div className="border-x border-b border-white/15 bg-[#090b10] grid grid-cols-1 lg:grid-cols-12 overflow-hidden shadow-2xl">
          {/* Interactive World Sensor Map */}
          <div className="lg:col-span-8 p-6 relative min-h-[380px] sm:min-h-[460px] flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10 tech-grid-bg">
            <div className="flex items-center justify-between font-mono text-[10px] text-[#9a9894] uppercase tracking-widest">
              <span>SENSOR MATRIX / COUNTRY CENTROIDS</span>
              <span>GEO: 90°N 180°W / 90°S 180°E</span>
            </div>

            {/* SVG Stylized World Map */}
            <div className="relative my-auto w-full max-w-[800px] mx-auto aspect-[2/1]">
              <svg viewBox="0 0 1000 500" className="w-full h-full">
                {/* Landmass Paths */}
                <g className="fill-[#141620] stroke-[#ff4d00]/20 stroke-[1]">
                  {/* North America */}
                  <path d="M63 114l38-44 80-27 73 19 59 54-13 32-45 14-15 30-38 10-27 48-28 1-13-46-34-23-49-5-15-34z" />
                  {/* South America */}
                  <path d="M252 236l43 25 22 52-9 48-27 70-25 24-21-63 8-55-27-47z" />
                  {/* Eurasia */}
                  <path d="M433 91l54-31 65 8 36 22 44-13 96 19 80 50 111 28 45 51-21 40-63 8-43-23-52 8-31 36-52-9-33 42-45-17-15-47-57-24-36-68-54-14-26-33z" />
                  {/* Africa */}
                  <path d="M492 198l65 13 47 36 11 61-27 68-48 67-31-24-5-63-29-51 7-64z" />
                  {/* Australia */}
                  <path d="M790 351l47-31 64 11 31 37-28 42-64 5-40-29z" />
                </g>

                {/* Coordinate Grid lines */}
                <g className="stroke-white/[0.04] stroke-[1] stroke-dasharray-[4 8]">
                  <line x1="0" y1="125" x2="1000" y2="125" />
                  <line x1="0" y1="250" x2="1000" y2="250" />
                  <line x1="0" y1="375" x2="1000" y2="375" />
                  <line x1="250" y1="0" x2="250" y2="500" />
                  <line x1="500" y1="0" x2="500" y2="500" />
                  <line x1="750" y1="0" x2="750" y2="500" />
                </g>

                {/* Threat Points */}
                {threatPoints.map((pt) => {
                  const isSelected = selectedPoint === pt.id;
                  return (
                    <g 
                      key={pt.id} 
                      className="cursor-pointer transition-all duration-300"
                      onClick={() => setSelectedPoint(pt.id)}
                    >
                      {/* Pulse Halo */}
                      <circle 
                        cx={pt.x} 
                        cy={pt.y} 
                        r={isSelected ? "18" : "12"} 
                        className={`fill-none ${isSelected ? 'stroke-[#ff4d00]' : 'stroke-white/20'} animate-ping opacity-60`} 
                      />
                      {/* Core Dot */}
                      <circle 
                        cx={pt.x} 
                        cy={pt.y} 
                        r={isSelected ? "7" : "5"} 
                        className={isSelected ? 'fill-[#ff4d00] filter drop-shadow-[0_0_8px_#ff4d00]' : 'fill-[#00f59b]'} 
                      />
                      {/* Label */}
                      <text 
                        x={pt.x + 10} 
                        y={pt.y - 8} 
                        className={`text-[11px] font-mono tracking-wider ${isSelected ? 'fill-[#ff4d00] font-bold' : 'fill-white/60'}`}
                      >
                        {pt.id}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Readout Overlay in Bottom Left of Map */}
            <div className="p-4 rounded border-l-2 border-[#ff4d00] bg-black/80 backdrop-blur-md max-w-sm font-mono text-xs">
              <span className="text-[#ff4d00] block text-[10px] tracking-widest">SELECTED SENSOR CLUSTER</span>
              <strong className="text-white text-sm font-sans block my-0.5">{currentPointData.label}</strong>
              <div className="text-[#9a9894] text-[11px]">
                Reported Attacks: <span className="text-white">{currentPointData.targets}</span><br />
                Origin ASN: <span className="text-[#ff4d00]">{currentPointData.origin}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Actively Exploited CVE Feed */}
          <div className="lg:col-span-4 p-6 flex flex-col justify-between bg-black/30">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                <div className="flex items-center gap-2">
                  <ShieldAlert size={16} className="text-[#ff4d00]" />
                  <span className="font-mono text-xs uppercase tracking-widest text-white">ACTIVELY EXPLOITED (CISA KEV)</span>
                </div>
                <a 
                  href="https://www.cisa.gov/known-exploited-vulnerabilities-catalog" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#9a9894] hover:text-[#ff4d00] transition-colors"
                >
                  <ExternalLink size={12} />
                </a>
              </div>

              {/* Feed items list */}
              <div className="space-y-3.5">
                {threatIntelData.cveFeed.map((cve) => (
                  <div 
                    key={cve.id} 
                    className="p-3 rounded border border-white/10 bg-white/[0.02] hover:border-[#ff4d00]/40 transition-colors"
                  >
                    <div className="flex items-center justify-between text-xs font-mono mb-1">
                      <span className="text-[#ff4d00] font-semibold">{cve.id}</span>
                      <span className="px-1.5 py-0.5 rounded bg-red-950/60 border border-red-500/40 text-red-400 text-[9px]">
                        CVSS {cve.cvss}
                      </span>
                    </div>
                    <div className="text-white text-xs font-medium font-sans">
                      {cve.vendor} · {cve.product}
                    </div>
                    <p className="text-[#9a9894] text-[11px] mt-1 leading-relaxed">
                      {cve.summary}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 mt-6 border-t border-white/10 font-mono text-[10px] text-[#9a9894]">
              Data synced with public US-CERT &amp; SANS DShield catalogs.
            </div>
          </div>
        </div>

        {/* 4 Intel Metrics Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 border border-white/15 border-t-0 bg-[#06070a] divide-x divide-white/10">
          <div className="p-6">
            <span className="font-mono text-[10px] text-[#ff4d00] uppercase tracking-widest block">01 / Observed Netblocks</span>
            <strong className="font-serif text-3xl sm:text-4xl text-white block mt-1">{threatIntelData.stats.observedNetworks}</strong>
            <span className="text-[#9a9894] text-xs font-mono">DShield Honeypot List</span>
          </div>
          <div className="p-6">
            <span className="font-mono text-[10px] text-[#ff4d00] uppercase tracking-widest block">02 / Reporting Targets</span>
            <strong className="font-serif text-3xl sm:text-4xl text-white block mt-1">{threatIntelData.stats.reportingTargets}</strong>
            <span className="text-[#9a9894] text-xs font-mono">Global Distributed Nodes</span>
          </div>
          <div className="p-6">
            <span className="font-mono text-[10px] text-[#ff4d00] uppercase tracking-widest block">03 / Tracked KEV CVEs</span>
            <strong className="font-serif text-3xl sm:text-4xl text-white block mt-1">{threatIntelData.stats.activeCves}</strong>
            <span className="text-[#9a9894] text-xs font-mono">Actively Weaponized</span>
          </div>
          <div className="p-6">
            <span className="font-mono text-[10px] text-[#ff4d00] uppercase tracking-widest block">04 / Botnet C2 Trackers</span>
            <strong className="font-serif text-3xl sm:text-4xl text-white block mt-1">{threatIntelData.stats.c2Trackers}</strong>
            <span className="text-[#9a9894] text-xs font-mono">Abuse.ch Verified Feodo</span>
          </div>
        </div>

        {/* Current Threat Headlines Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {threatIntelData.headlines.map((item, idx) => (
            <a
              key={idx}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-lg border border-white/10 bg-[#090b10] hover:border-[#ff4d00]/50 transition-all flex items-start gap-4 group"
            >
              <div className="p-2 rounded bg-white/5 text-[#ff4d00] group-hover:bg-[#ff4d00] group-hover:text-black transition-colors shrink-0">
                <Newspaper size={16} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between text-[11px] font-mono text-[#9a9894] mb-1">
                  <span>{item.source}</span>
                  <span>{item.time}</span>
                </div>
                <h4 className="text-white text-sm font-medium font-sans group-hover:text-[#ff4d00] transition-colors leading-snug">
                  {item.title}
                </h4>
              </div>
              <ExternalLink size={14} className="text-white/20 group-hover:text-[#ff4d00] transition-colors shrink-0 mt-1" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
