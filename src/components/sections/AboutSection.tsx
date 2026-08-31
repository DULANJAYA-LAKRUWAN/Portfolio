'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { Compass, Target, Rocket, Award, Code2, Zap } from 'lucide-react';
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
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <Badge variant="accent" className="mb-3">
          About & Manifesto
        </Badge>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
          Architecting Software with <span className="text-gradient-primary">Craftsmanship & Rigor</span>
        </h2>
        <p className="text-slate-400 text-base leading-relaxed">
          I am a Senior Staff Software Engineer and System Architect focused on building resilient cloud platforms and AI-driven products.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Portrait Image & Quick Profile Card */}
        <div className="lg:col-span-5 space-y-6">
          <GlassCard glow className="p-6 overflow-hidden">
            {/* Image Frame */}
            <div className="relative rounded-2xl overflow-hidden aspect-square border border-white/10 group mb-6 shadow-2xl">
              <img
                src={PROFILE.avatar}
                alt={PROFILE.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent opacity-80" />
              
              {/* Floating Status Tag */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div className="px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-700/80 backdrop-blur-md text-xs font-mono text-cyan-300 flex items-center gap-2 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Senior Staff Architect</span>
                </div>
                <div className="px-2.5 py-1.5 rounded-xl bg-blue-600/90 text-white font-mono text-[11px] font-bold shadow-lg">
                  5+ Yrs
                </div>
              </div>
            </div>

            {/* Quick Bio Specs */}
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-white">{PROFILE.name}</h3>
              <p className="text-xs text-cyan-400 font-mono">{PROFILE.title}</p>
              <p className="text-slate-300 text-xs leading-relaxed">{PROFILE.tagline}</p>
            </div>

            {/* Location & Status Pill */}
            <div className="mt-6 pt-5 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>📍 {PROFILE.location}</span>
              <span className="text-emerald-400 font-semibold">Available for Hire</span>
            </div>
          </GlassCard>
        </div>

        {/* Right Column: Story & Principles */}
        <div className="lg:col-span-7 space-y-6">
          <GlassCard glow className="p-8">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Code2 className="w-5 h-5 text-blue-400" />
              <span>Engineering Journey & Mission</span>
            </h3>
            <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
              <p>
                My passion lies at the intersection of high-throughput backend microservices and hyper-polished, responsive user interfaces. Over the past 5+ years, I have architected platforms handling millions of transactions, built custom developer systems, and pioneered AI vector engines and modern SaaS platforms like <span className="text-cyan-400 font-mono">BizCRM Pro</span>, <span className="text-indigo-400 font-mono">Wedding Invitation Builder</span>, and <span className="text-blue-400 font-mono">FUTURELEAKS Studio</span>.
              </p>
              <p>
                Whether designing transactional distribution systems with zero lock contention or building real-time telemetry dashboards that render 60 FPS smoothly, I adhere strictly to clean code principles, OWASP security, and sub-100ms latency standard.
              </p>
            </div>
            
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
              // Core Engineering Principles
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
