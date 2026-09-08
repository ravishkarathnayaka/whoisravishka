import React, { useState } from 'react';
import { Layers, ArrowUpRight, Github, ExternalLink } from 'lucide-react';
import { portfolioData, Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const ProjectsArchive: React.FC = () => {
  const { projects } = portfolioData;
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { key: 'all', label: 'ALL PROJECTS' },
    { key: 'cybersecurity', label: 'CYBERSECURITY & SOAR' },
    { key: 'devops', label: 'DEVOPS & CLOUD' },
    { key: 'fullstack', label: 'FULL-STACK & APPS' }
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-28 bg-[#06070a] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-[#ff4d00] mb-3 flex items-center gap-2">
              <Layers size={14} className="text-[#ff4d00]" />
              <span>// Things I've Built &amp; Deployed</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl font-medium tracking-tight text-white leading-tight">
              PROJECTS &amp;<br />
              <i className="text-[#ff4d00] not-italic italic font-normal">REAL-WORLD BUILDS.</i>
            </h2>
          </div>
          <p className="text-[#9a9894] text-sm max-w-sm font-sans leading-relaxed">
            Production DevSecOps pipelines, multi-cloud automated SOAR architectures, AI-assisted web systems, and live cloud applications from my GitHub and LinkedIn.
          </p>
        </div>

        {/* Project Command Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 border border-white/15 bg-black/50 p-6 rounded-t-xl divide-y md:divide-y-0 md:divide-x divide-white/10 font-mono">
          <div className="p-3">
            <strong className="text-3xl text-white font-serif block">06</strong>
            <span className="text-[10px] text-[#9a9894] uppercase tracking-widest">Documented Builds</span>
          </div>
          <div className="p-3">
            <strong className="text-3xl text-white font-serif block">18+</strong>
            <span className="text-[10px] text-[#9a9894] uppercase tracking-widest">GitHub Repositories</span>
          </div>
          <div className="p-3">
            <strong className="text-3xl text-[#ff4d00] font-serif block">SLSA 3</strong>
            <span className="text-[10px] text-[#9a9894] uppercase tracking-widest">Compliant Security</span>
          </div>
          <div className="p-3">
            <strong className="text-3xl text-[#00f59b] font-serif block">100%</strong>
            <span className="text-[10px] text-[#9a9894] uppercase tracking-widest">Verified Repositories</span>
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="p-4 border-x border-b border-white/15 bg-[#090b10] flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-3.5 py-1.5 rounded-full font-mono text-[11px] tracking-wider uppercase transition-all ${
                activeCategory === cat.key
                  ? 'bg-[#ff4d00] text-black font-semibold shadow-[0_0_15px_rgba(255,77,0,0.3)]'
                  : 'border border-white/15 text-[#9a9894] hover:text-white hover:border-white/30 bg-white/[0.02]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="border-x border-b border-white/15 bg-[#090b10] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:gap-[1px] md:bg-white/10 shadow-2xl">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group bg-[#090b10] p-6 sm:p-7 flex flex-col justify-between hover:bg-[#ff4d00]/[0.02] transition-all cursor-pointer relative"
            >
              <div>
                {/* Image Container with Grayscale Effect */}
                <div className="relative aspect-[16/10] rounded-lg overflow-hidden mb-6 bg-black border border-white/10">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top brightness-95 contrast-105 group-hover:brightness-105 group-hover:scale-105 transition-all duration-500 ease-out"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/80 backdrop-blur-md border border-white/10 font-mono text-[9px] uppercase tracking-wider text-[#ff4d00]">
                    {project.categoryLabel}
                  </div>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl text-white font-medium group-hover:text-[#ff4d00] transition-colors leading-snug mb-3">
                  {project.title}
                </h3>

                <p className="text-[#9a9894] text-xs sm:text-sm font-sans leading-relaxed line-clamp-3 mb-6">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Metrics Highlight */}
                <div className="font-mono text-[10px] text-[#00f59b] tracking-wider mb-4 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00f59b]" />
                  <span>{project.metrics}</span>
                </div>

                {/* Tags and Inspect Arrow */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5 max-w-[75%]">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[9px] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-white/80"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="font-mono text-[9px] text-[#9a9894] self-center">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    {project.github && (
                      <span className="text-[#9a9894] group-hover:text-white transition-colors p-1">
                        <Github size={14} />
                      </span>
                    )}
                    <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:border-[#ff4d00] group-hover:bg-[#ff4d00] group-hover:text-black transition-all">
                      <ArrowUpRight size={14} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Footnote Link */}
        <div className="p-6 border-x border-b border-white/15 bg-black/40 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#9a9894]">
          <span>EXPLORE ALL 18+ OPEN-SOURCE REPOSITORIES ON GITHUB</span>
          <a
            href="https://github.com/ravishkarathnayaka"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded border border-white/20 bg-white/5 hover:border-[#ff4d00] hover:text-[#ff4d00] transition-colors text-white"
          >
            <Github size={14} />
            <span>github.com/ravishkarathnayaka</span>
            <ExternalLink size={12} />
          </a>
        </div>
      </div>

      {/* Detail Inspection Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};
