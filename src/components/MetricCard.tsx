import React from 'react';

interface MetricCardProps {
  value: string;
  label: string;
  caption?: string;
}

export const MetricCard: React.FC<MetricCardProps> = ({ value, label, caption }) => {
  return (
    <div className="p-4 rounded-xl border border-white/10 bg-black/40 backdrop-blur-md hover:border-cyan-500/40 transition-all duration-300">
      <div className="text-2xl font-bold font-mono text-cyan-400 mb-1">{value}</div>
      <div className="text-sm font-medium text-white/90">{label}</div>
      {caption && <div className="text-xs text-white/50 mt-1 font-mono">{caption}</div>}
    </div>
  );
};
