import React, { useEffect } from 'react';
import { X, Github, ExternalLink, CheckCircle2, Shield } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-xl animate-fadeIn">
      {/* Click outside backdrop */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Dialog Window */}
      <div className="relative w-full max-w-3xl rounded-xl border border-[#ff4d00]/40 bg-[#090b10] overflow-hidden shadow-[0_0_80px_rgba(255,77,0,0.15)] z-10 my-8">
        {/* Top Window Header */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-black/60 font-mono text-xs text-[#9a9894]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#ff4d00]" />
            <span className="text-white uppercase tracking-wider">{project.categoryLabel}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded hover:bg-white/10 text-white transition-colors"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Hero Banner */}
        <div className="relative aspect-video w-full overflow-hidden bg-black">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090b10] via-transparent to-transparent" />
          
          <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between">
            <span className="px-3 py-1 rounded bg-[#ff4d00] text-black font-mono text-xs font-semibold tracking-wider uppercase">
              {project.metrics}
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h3 className="font-serif text-2xl sm:text-3xl font-medium text-white mb-2">
              {project.title}
            </h3>
            <p className="text-[#9a9894] text-sm sm:text-base leading-relaxed font-sans">
              {project.longDescription}
            </p>
          </div>

          {/* Key Architecture Highlights */}
          <div className="space-y-3 pt-2">
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#ff4d00] flex items-center gap-2">
              <Shield size={13} />
              <span>KEY ARCHITECTURAL HIGHLIGHTS</span>
            </h4>
            <div className="space-y-2">
              {project.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-white/90 font-sans">
                  <CheckCircle2 size={14} className="text-[#00f59b] shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="border-t border-white/10 pt-4">
            <div className="font-mono text-[10px] uppercase tracking-widest text-[#9a9894] mb-2.5">
              TECHNOLOGIES UTILIZED
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span 
                  key={tag}
                  className="font-mono text-xs px-3 py-1 rounded bg-white/5 border border-white/15 text-white/90"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded bg-white/10 hover:bg-[#ff4d00] hover:text-black border border-white/20 transition-all font-mono text-xs uppercase tracking-wider text-white"
              >
                <Github size={14} />
                <span>Source Repository</span>
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded bg-[#ff4d00] hover:bg-[#ff7137] text-black font-semibold transition-all font-mono text-xs uppercase tracking-wider"
              >
                <span>Explore Live Build</span>
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
