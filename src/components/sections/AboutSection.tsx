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
        {/* Left Column: Story & Bio Card */}
        <div className="lg:col-span-7 space-y-6">
          <GlassCard glow className="p-8">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Code2 className="w-5 h-5 text-blue-400" />
              <span>Engineering Journey & Mission</span>
            </h3>
            <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
              <p>
                My passion lies at the intersection of high-throughput backend microservices and hyper-polished, responsive user interfaces. Over the past 5+ years, I have architected platforms handling millions of transactions, built custom system tools like <span className="text-cyan-400 font-mono">CeyOS</span>, and pioneered AI vector engines like <span className="text-blue-400 font-mono font-semibold">StarChance</span> and <span className="text-indigo-400 font-mono">Antigravity Hub</span>.
              </p>
              <p>
                Whether designing transactional ticket distribution systems with zero lock contention or building real-time telemetry dashboards that render 60 FPS smoothly, I adhere strictly to clean code principles, OWASP security, and sub-100ms latency standard.
              </p>
            </div>
            
            <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap gap-3">
              <Badge variant="outline">Distributed Systems</Badge>
              <Badge variant="outline">RAG Vector AI</Badge>
              <Badge variant="outline">Cloud Microservices</Badge>
              <Badge variant="outline">Clean Code Architecture</Badge>
            </div>
          </GlassCard>

          {/* Current Goals */}
          <GlassCard className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-blue-600/20 text-blue-400">
                <Rocket className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-white">Current Focus & Roadmap</h4>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Deep-diving into next-generation AI agent orchestration, multi-modal vector search optimizations, and zero-trust microservice meshes using Go, Next.js 15, and WebGL shaders.
            </p>
          </GlassCard>
        </div>

        {/* Right Column: Core Principles Grid */}
        <div className="lg:col-span-5 space-y-4">
          <h3 className="text-lg font-mono font-semibold text-slate-200 mb-2 tracking-wider uppercase">
            // Core Engineering Principles
          </h3>
          {principles.map((p, idx) => {
            const Icon = p.icon;
            return (
              <GlassCard key={idx} hoverScale className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-slate-800 text-cyan-400 border border-slate-700">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white mb-1">{p.title}</h4>
                    <p className="text-slate-400 text-xs leading-relaxed">{p.description}</p>
                  </div>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};
