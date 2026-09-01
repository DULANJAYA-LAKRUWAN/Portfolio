'use client';

import React from 'react';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { Compass, Target, Zap } from 'lucide-react';
import { PROFILE } from '@/lib/constants';

export const AboutSection: React.FC = () => {
  const principles = [
    {
      icon: Target,
      title: "Precision Engineering",
      description: "Writing maintainable, strongly-typed codebases with clean architectural boundaries and complete test coverage."
    },
    {
      icon: Zap,
      title: "Sub-100ms Performance",
      description: "Optimizing database queries, caching strategies, and asset delivery to guarantee flawless Core Web Vitals."
    },
    {
      icon: Compass,
      title: "AI-First Solutions",
      description: "Leveraging LLM embeddings, RAG pipelines, and autonomous agent loops to automate complex enterprise workflows."
    }
  ];

  return (
    <section id="about" className="relative z-10 py-20">
      {/* Section Title */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <Badge variant="primary" className="mb-3">
          Manifesto & Identity
        </Badge>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
          Architecting Resilient Systems & <span className="text-gradient-primary">AI Experiences</span>
        </h2>
        <p className="text-slate-400 text-base">
          A blend of enterprise-grade distributed systems engineering, intuitive UX craftsmanship, and cutting-edge generative AI capabilities.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Portrait Image & Quick Profile Card */}
        <div className="lg:col-span-5 space-y-6">
          <GlassCard glow className="p-6 relative overflow-hidden group">
            <div className="relative w-full h-80 rounded-2xl overflow-hidden mb-6 border border-slate-700/80">
              <img
                src={PROFILE.avatar}
                alt={PROFILE.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-4 left-4 right-4">
                <span className="px-3 py-1 rounded-full bg-blue-600/90 backdrop-blur-md text-[11px] font-mono text-white">
                  Available for Senior/Lead Contracts
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white">{PROFILE.name}</h3>
              <p className="text-xs text-cyan-400 font-mono">{PROFILE.title}</p>
              <p className="text-slate-300 text-xs leading-relaxed">{PROFILE.tagline}</p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 grid grid-cols-2 gap-4 text-xs font-mono text-slate-400">
              <div>
                <span>📍 {PROFILE.location}</span>
              </div>
              <div className="text-right">
                <span className="text-emerald-400">● Remote Ready</span>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Right Column: Narrative Manifesto & Philosophy */}
        <div className="lg:col-span-7 space-y-6">
          <GlassCard className="p-8">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span>The Engineering Philosophy</span>
            </h3>

            <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
              <p>
                I believe software engineering is not merely about writing code; it is about building reliable, observable, and delightfully fast systems that solve tangible problems for human beings.
              </p>
              <p>
                Having architected and deployed high-throughput web applications, distributed microservices, and AI-driven platforms like <strong className="text-cyan-400">StarChance</strong> and <strong className="text-blue-400">CeyOS</strong>, I specialize in combining robust backend engineering with pixel-perfect, hyper-responsive user interfaces.
              </p>
              <p>
                Whether crafting real-time WebSocket communication pipelines, optimizing PostgreSQL database execution plans, or designing agentic RAG retrieval architectures, I maintain relentless attention to detail, maintainability, and clean code principles.
              </p>
            </div>

            {/* Tech Badges Row */}
            <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap gap-3">
              <Badge variant="outline">Full-Stack SaaS</Badge>
              <Badge variant="outline">Distributed Systems</Badge>
              <Badge variant="outline">RAG & AI Agents</Badge>
              <Badge variant="outline">Clean Code Architecture</Badge>
              <Badge variant="outline">High Performance</Badge>
            </div>
          </GlassCard>

          {/* Core Principles Grid */}
          <div className="space-y-4">
            <h3 className="text-sm font-mono font-semibold text-slate-200 tracking-wider uppercase">
              {"// Core Engineering Principles"}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {principles.map((p, idx) => {
                const Icon = p.icon;
                return (
                  <GlassCard key={idx} hoverScale className="p-5">
                    <div className="p-2.5 rounded-xl bg-slate-800 text-cyan-400 border border-slate-700 w-fit mb-3">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-bold text-white mb-1">{p.title}</h4>
                    <p className="text-slate-400 text-[11px] leading-relaxed">{p.description}</p>
                  </GlassCard>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
