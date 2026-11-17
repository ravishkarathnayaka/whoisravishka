import React from 'react';
import { Shield, ShieldCheck, ShieldAlert } from 'lucide-react';

interface SecurityBadgeProps {
  label: string;
  variant?: 'safe' | 'alert' | 'neutral';
}

export const SecurityBadge: React.FC<SecurityBadgeProps> = ({ label, variant = 'neutral' }) => {
  const getStyles = () => {
    switch (variant) {
      case 'safe':
        return 'border-emerald-500/40 text-emerald-400 bg-emerald-950/20';
      case 'alert':
        return 'border-rose-500/40 text-rose-400 bg-rose-950/20';
      default:
        return 'border-cyan-500/30 text-cyan-400 bg-cyan-950/20';
    }
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono rounded border ${getStyles()}`}>
      {variant === 'safe' && <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />}
      {variant === 'alert' && <ShieldAlert className="w-3.5 h-3.5 text-rose-400" />}
      {variant === 'neutral' && <Shield className="w-3.5 h-3.5 text-cyan-400" />}
      {label}
    </span>
  );
};
