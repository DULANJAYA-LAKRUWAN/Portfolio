'use client';

import React from 'react';
import { EDUCATION, CERTIFICATIONS } from '@/lib/constants';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { Award, BookOpen, ExternalLink, CheckCircle } from 'lucide-react';

export const EducationCertsSection: React.FC = () => {
  return (
    <section className="relative z-10 py-20">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <Badge variant="accent" className="mb-3">
          Qualifications & Credentialing
        </Badge>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
          Education & <span className="text-gradient-primary">Verified Certifications</span>
        </h2>
        <p className="text-slate-400 text-base">
          Formal software engineering degree with distinction, combined with continuous industry certifications.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
        {/* Left Column: Education Details */}
        <div className="lg:col-span-7 space-y-6">
          <GlassCard glow className="p-8">
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className="text-xs font-mono text-cyan-400 font-semibold">{EDUCATION.period}</span>
                <h3 className="text-xl font-bold text-white mt-1">{EDUCATION.degree}</h3>
                <p className="text-slate-400 text-sm">{EDUCATION.institution}</p>
              </div>
              <Badge variant="success">{EDUCATION.grade}</Badge>
            </div>

            {/* Relevant Academic Modules */}
            <div className="space-y-3 mb-6">
              <h4 className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-blue-400" />
                <span>Specialized Academic Modules</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {EDUCATION.modules.map((m, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 text-xs text-slate-300 flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>{m}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Research Thesis Topic */}
            <div className="p-4 bg-blue-950/20 border border-blue-500/30 rounded-xl text-xs space-y-1">
              <span className="text-blue-400 font-mono font-bold">Thesis & Research Work:</span>
              <p className="text-slate-300 leading-relaxed font-sans">{EDUCATION.researchTitle}</p>
            </div>
          </GlassCard>
        </div>

        {/* Right Column: Industry Certifications */}
        <div className="lg:col-span-5 space-y-4">
          <h3 className="text-lg font-mono font-semibold text-slate-200 mb-2 tracking-wider uppercase flex items-center gap-2">
            <Award className="w-5 h-5 text-cyan-400" />
            <span>Verified Industry Badges</span>
          </h3>

          {CERTIFICATIONS.map((cert, idx) => (
            <GlassCard key={idx} hoverScale className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-base font-bold text-white mb-1">{cert.title}</h4>
                  <div className="text-xs text-blue-400 font-mono">{cert.issuer}</div>
                  <div className="text-[10px] text-slate-500 font-mono mt-1">
                    Issued: {cert.date} • ID: {cert.credentialId}
                  </div>
                </div>

                <a
                  href={cert.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-cyan-400 hover:bg-slate-700 transition-colors"
                  title="Verify Credential"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
