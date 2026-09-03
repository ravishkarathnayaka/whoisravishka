import React, { useState } from 'react';
import { Share2, Sparkles, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Constellation: React.FC = () => {
  const { constellation } = portfolioData;
  const [selectedNodeId, setSelectedNodeId] = useState<string>('sec-ops');

  const selectedNode = constellation.find(n => n.id === selectedNodeId) || constellation[0];

  const getNodeById = (id: string) => constellation.find(n => n.id === id);

  return (
    <section id="constellation" className="py-28 bg-[#06070a] border-b border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-[#ff4d00] mb-3 flex items-center gap-2">
              <Share2 size={14} className="text-[#ff4d00]" />
              <span>// Connected Capability Graph</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl font-medium tracking-tight text-white leading-tight">
              THE OPERATIONAL<br />
              <i className="text-[#ff4d00] not-italic italic font-normal">CONSTELLATION.</i>
            </h2>
          </div>
          <p className="text-[#9a9894] text-sm max-w-sm font-sans leading-relaxed">
            Select an operational node to reveal how cybersecurity, DevOps pipelines, MLOps, software engineering, and creative media intersect in Ravishka's work.
          </p>
        </div>

        {/* Interactive Constellation Map Stage */}
        <div className="relative w-full h-[580px] sm:h-[660px] rounded-xl border border-white/15 bg-[#090b10] tech-grid-bg overflow-hidden shadow-2xl">
          {/* SVG Connecting Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {constellation.map((node) => 
              node.connectedTo.map((targetId) => {
                const target = getNodeById(targetId);
                if (!target) return null;

                const isLineActive = selectedNodeId === node.id || selectedNodeId === target.id;

                return (
                  <line
                    key={`${node.id}-${target.id}`}
                    x1={`${node.x}%`}
                    y1={`${node.y}%`}
                    x2={`${target.x}%`}
                    y2={`${target.y}%`}
                    className={`transition-all duration-500 ${
                      isLineActive 
                        ? 'stroke-[#ff4d00] stroke-2 filter drop-shadow-[0_0_8px_#ff4d00]' 
                        : 'stroke-white/15 stroke-1 stroke-dasharray-[4 8]'
                    }`}
                  />
                );
              })
            )}
          </svg>

          {/* Interactive Nodes */}
          {constellation.map((node) => {
            const isSelected = selectedNodeId === node.id;
            const isConnected = selectedNode.connectedTo.includes(node.id) || node.connectedTo.includes(selectedNodeId);

            return (
              <button
                key={node.id}
                onClick={() => setSelectedNodeId(node.id)}
                style={{ left: `${node.x}%`, top: `${node.y}%` }}
                className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full font-mono text-center transition-all duration-300 z-10 flex flex-col items-center justify-center ${
                  node.isCore
                    ? 'w-24 h-24 sm:w-28 sm:h-28 text-xs font-bold border-2'
                    : 'w-16 h-16 sm:w-20 sm:h-20 text-[10px] border'
                } ${
                  isSelected
                    ? 'bg-[#ff4d00] border-[#ff4d00] text-black shadow-[0_0_35px_#ff4d00] scale-110'
                    : isConnected
                    ? 'bg-[#141620] border-[#ff4d00]/60 text-white shadow-[0_0_15px_rgba(255,77,0,0.2)]'
                    : 'bg-[#0e1017] border-white/20 text-[#9a9894] hover:border-white/50 hover:text-white'
                }`}
              >
                <span className="whitespace-pre-line leading-tight uppercase tracking-wider">
                  {node.label}
                </span>
                {node.isCore && (
                  <span className={`text-[8px] tracking-widest mt-0.5 ${isSelected ? 'text-black font-semibold' : 'text-[#ff4d00]'}`}>
                    CORE
                  </span>
                )}
              </button>
            );
          })}

          {/* Dynamic Intel Readout Panel (Bottom-Left Glass Card) */}
          <div className="absolute bottom-6 left-6 right-6 sm:right-auto sm:max-w-md p-6 rounded-lg border border-[#ff4d00]/30 bg-[#06070a]/90 backdrop-blur-xl shadow-2xl z-20 transition-all duration-300">
            <div className="flex items-center justify-between font-mono text-[10px] text-[#ff4d00] uppercase tracking-widest mb-2">
              <span className="flex items-center gap-1.5">
                <Sparkles size={12} />
                <span>DOMAIN INSPECTION</span>
              </span>
              <span>{selectedNode.category}</span>
            </div>

            <h3 className="font-serif text-2xl text-white font-medium mb-2">
              {selectedNode.summary}
            </h3>

            <p className="text-[#9a9894] text-xs leading-relaxed mb-4">
              {selectedNode.description}
            </p>

            <div className="border-t border-white/10 pt-3">
              <div className="font-mono text-[10px] text-[#9a9894] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Terminal size={11} className="text-[#ff4d00]" />
                <span>INTEGRATED TOOLS &amp; PROTOCOLS</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {selectedNode.tools.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[10px] px-2.5 py-1 rounded bg-white/5 border border-white/10 text-white/90"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
