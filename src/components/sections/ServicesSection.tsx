'use client';

import React from 'react';
import { SERVICES } from '@/lib/constants';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { Cpu, Layout, Server, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Cpu': return Cpu;
      case 'Layout': return Layout;
      case 'Server': return Server;
      default: return ShieldCheck;
    }
  };

  return (
    <section id="services" className="relative z-10 py-20">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <Badge variant="primary" className="mb-3">
          Specialized Offerings
        </Badge>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
          Services & <span className="text-gradient-primary">Architectural Offerings</span>
        </h2>
        <p className="text-slate-400 text-base">
          From RAG vector assistant integration to high-throughput backend microservices and security audits.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {SERVICES.map((service, idx) => {
          const Icon = getIcon(service.icon);
          return (
            <GlassCard key={idx} glow className="p-8 flex flex-col justify-between h-full">
              <div>
                <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 text-cyan-400 w-fit mb-6 shadow-lg shadow-cyan-500/10">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Technical Deliverables List */}
                <div className="space-y-2 mb-6">
                  <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">Key Deliverables:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.deliverables.map((d, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
                <a
                  href="#contact"
                  className="text-xs font-mono text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-1.5"
                >
                  <span>Book Strategy Call</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </GlassCard>
          );
        })}
      </div>
    </section>
  );
};
