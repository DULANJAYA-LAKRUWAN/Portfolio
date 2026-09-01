'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SKILL_CATEGORIES } from '@/lib/constants';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { Cpu } from 'lucide-react';

export const TechStackSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', ...SKILL_CATEGORIES.map(c => c.category)];

  const displayedCategories = activeCategory === 'All'
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter(c => c.category === activeCategory);

  return (
    <section id="stack" className="relative z-10 py-20">
      {/* Section Title */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <Badge variant="primary" className="mb-3">
          Technical Expertise
        </Badge>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
          Tech Stack & <span className="text-gradient-primary">System Capabilities</span>
        </h2>
        <p className="text-slate-400 text-base">
          Proven proficiency levels across modern frontend frameworks, distributed backends, AI vector pipelines, and cloud DevOps.
        </p>
      </div>

      {/* Filter Tabs */}
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

      {/* Skills Bento Grid */}
      <div className="space-y-10">
        {displayedCategories.map((cat) => (
          <div key={cat.category} className="space-y-4">
            <h3 className="text-lg font-mono font-bold text-slate-200 flex items-center gap-2 border-b border-slate-800/80 pb-2">
              <Cpu className="w-4 h-4 text-blue-400" />
              <span>{cat.category}</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {cat.skills.map((skill) => (
                <GlassCard key={skill.name} className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="text-base font-bold text-white flex items-center gap-2">
                        <span>{skill.name}</span>
                        <Badge variant="outline" size="sm">
                          {skill.experience}
                        </Badge>
                      </h4>
                      <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                        {skill.description}
                      </p>
                    </div>

                    <div className="text-right ml-4">
                      <div className="text-sm font-mono font-bold text-cyan-400">
                        {skill.confidence}%
                      </div>
                      <div className="text-[10px] text-slate-500 font-mono">
                        {skill.projectsUsed} Projects
                      </div>
                    </div>
                  </div>

                  {/* Confidence Progress Meter */}
                  <div className="w-full bg-slate-800/80 rounded-full h-1.5 overflow-hidden mt-3">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.confidence}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      className="bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 h-full rounded-full"
                    />
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
