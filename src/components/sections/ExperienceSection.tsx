'use client';

import React from 'react';
import { EXPERIENCES } from '@/lib/constants';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="relative z-10 py-20">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <Badge variant="primary" className="mb-3">
          Career Journey
        </Badge>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
          Professional Experience & <span className="text-gradient-primary">Track Record</span>
        </h2>
        <p className="text-slate-400 text-base">
          Proven history of engineering leadership, system performance optimization, and autonomous delivery.
        </p>
      </div>

      {/* Linear Timeline Container */}
      <div className="relative max-w-4xl mx-auto space-y-8 before:absolute before:inset-0 before:left-4 md:before:left-1/2 before:-ml-px before:w-0.5 before:bg-gradient-to-b before:from-blue-600 before:via-indigo-500 before:to-transparent">
        {EXPERIENCES.map((exp, idx) => (
          <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            {/* Timeline Icon Marker */}
            <div className="flex items-center justify-center w-9 h-9 rounded-full bg-slate-900 border-2 border-blue-500 text-blue-400 shadow-lg shadow-blue-500/20 absolute left-0 md:left-1/2 -translate-x-1/2 z-10">
              <Briefcase className="w-4 h-4" />
            </div>

            {/* Experience Card */}
            <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] ml-12 md:ml-0">
              <GlassCard glow className="p-6">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono text-cyan-400 font-semibold flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {exp.period}
                  </span>
                  <Badge variant="outline" size="sm">
                    {exp.type}
                  </Badge>
                </div>

                <h3 className="text-lg font-bold text-white mb-1">{exp.role}</h3>
                <div className="text-sm text-blue-400 font-medium mb-4 flex items-center gap-2">
                  <span>{exp.company}</span>
                  <span className="text-slate-600">•</span>
                  <span className="text-slate-400 text-xs flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {exp.location}
                  </span>
                </div>

                {/* Highlights List */}
                <ul className="space-y-2 mb-6">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="text-slate-300 text-xs leading-relaxed flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800">
                  {exp.technologies.map((t) => (
                    <Badge key={t} variant="outline" size="sm">
                      {t}
                    </Badge>
                  ))}
                </div>
              </GlassCard>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
