import React from 'react';

interface BreadcrumbsProps {
  category: string;
  title: string;
}

export const TechnicalBreadcrumbs: React.FC<BreadcrumbsProps> = ({ category, title }) => {
  return (
    <nav className="flex items-center gap-2 text-xs font-mono text-white/60 mb-4" aria-label="Breadcrumb">
      <span>root</span>
      <span>/</span>
      <span className="text-cyan-400">{category}</span>
      <span>/</span>
      <span className="text-white truncate max-w-xs">{title}</span>
    </nav>
  );
};
