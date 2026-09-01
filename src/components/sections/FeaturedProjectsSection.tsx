'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FEATURED_PROJECTS, ProjectItem } from '@/lib/constants';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { Github, ExternalLink, Cpu, Layers, X, ArrowUpRight } from 'lucide-react';

export const FeaturedProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Distributed Systems', 'AI & ML', 'Operating Systems', 'Web Applications'];

  const filteredProjects = activeCategory === 'All'
    ? FEATURED_PROJECTS
    : FEATURED_PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="relative z-10 py-20">
      {/* Section Title */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <Badge variant="accent" className="mb-3">
          Engineering Case Studies
        </Badge>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
          Featured Projects & <span className="text-gradient-primary">Architecture Solutions</span>
        </h2>
        <p className="text-slate-400 text-base">
          Production systems built for high throughput, minimal memory footprints, and real-time streaming AI vector inference.
        </p>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all border ${
              activeCategory === cat
                ? 'bg-blue-600 text-white border-blue-500 shadow-lg shadow-blue-600/25'
                : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:text-white hover:border-slate-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <GlassCard key={project.slug} glow className="p-0 overflow-hidden flex flex-col h-full">
            {/* Banner Image with Overlay */}
            <div className="relative h-48 sm:h-56 overflow-hidden group">
              <img
                src={project.bannerImage}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/40 to-transparent" />
              <Badge variant="accent" className="absolute top-4 left-4 backdrop-blur-md">
                {project.category}
              </Badge>
            </div>

            {/* Content Body */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Performance Metrics Pill Row */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {Object.entries(project.metrics).map(([key, val]) => (
                    <div key={key} className="px-2.5 py-1 rounded-lg bg-slate-900/80 border border-slate-800 text-[11px] font-mono">
                      <span className="text-slate-400">{key}: </span>
                      <span className="text-cyan-400 font-bold">{val}</span>
                    </div>
                  ))}
                </div>

                {/* Technology Badges */}
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" size="sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-mono text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-1.5"
                >
                  <Cpu className="w-3.5 h-3.5" />
                  <span>Deep-Dive Architecture</span>
                </button>

                <div className="flex items-center gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white transition-colors"
                    title="View GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                    title="Open Live Preview"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Deep-Dive Architecture Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-[#050816]/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl max-h-[85vh] bg-[#0f172a] border border-slate-700/80 rounded-2xl shadow-2xl overflow-y-auto p-6 md:p-8 z-10 space-y-6"
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between border-b border-slate-800 pb-4">
                <div>
                  <Badge variant="accent" className="mb-2">
                    {selectedProject.category}
                  </Badge>
                  <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                  <p className="text-slate-400 text-sm">{selectedProject.tagline}</p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Architecture Blueprint Summary */}
              <div className="space-y-3">
                <h4 className="text-base font-mono font-bold text-cyan-400 flex items-center gap-2">
                  <Layers className="w-4 h-4" />
                  <span>System Architecture Summary</span>
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                  {selectedProject.architectureSummary}
                </p>
              </div>

              {/* Challenges & Solution Split Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-900/40 p-4 rounded-xl border border-slate-800 space-y-2">
                  <h5 className="text-xs font-mono font-bold text-amber-400 uppercase">Core Engineering Challenge</h5>
                  <p className="text-slate-300 text-xs leading-relaxed">{selectedProject.challenges}</p>
                </div>
                <div className="bg-slate-900/40 p-4 rounded-xl border border-slate-800 space-y-2">
                  <h5 className="text-xs font-mono font-bold text-emerald-400 uppercase">Architectural Solution</h5>
                  <p className="text-slate-300 text-xs leading-relaxed">{selectedProject.solution}</p>
                </div>
              </div>

              {/* Key Metric Highlights */}
              <div>
                <h4 className="text-xs font-mono font-bold text-slate-400 mb-2 uppercase">Verified Production Metrics</h4>
                <div className="grid grid-cols-3 gap-3">
                  {Object.entries(selectedProject.metrics).map(([k, v]) => (
                    <div key={k} className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-center">
                      <div className="text-lg font-bold font-mono text-cyan-400">{v}</div>
                      <div className="text-[10px] text-slate-400 font-mono mt-0.5">{k}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Lessons Learned */}
              <div className="p-4 bg-blue-950/20 border border-blue-500/30 rounded-xl text-xs text-slate-300">
                <strong className="text-blue-400 font-mono">Architectural Insight: </strong>
                {selectedProject.lessonsLearned}
              </div>

              {/* Modal Footer Links */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-end gap-4">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white text-xs font-mono flex items-center gap-1.5"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                </a>
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono font-semibold flex items-center gap-1.5"
                >
                  <span>Launch Production Demo</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
