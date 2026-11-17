export type RiskSeverity = 'low' | 'medium' | 'high' | 'critical';

export function getSeverityColor(severity: RiskSeverity): string {
  switch (severity) {
    case 'critical': return 'text-red-500 bg-red-950/40 border-red-800';
    case 'high': return 'text-amber-500 bg-amber-950/40 border-amber-800';
    case 'medium': return 'text-cyan-400 bg-cyan-950/40 border-cyan-800';
    case 'low':
    default: return 'text-emerald-400 bg-emerald-950/40 border-emerald-800';
  }
}
