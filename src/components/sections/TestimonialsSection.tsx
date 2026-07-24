'use client';

import React from 'react';
import { TESTIMONIALS } from '@/lib/constants';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { Quote, Star } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="relative z-10 py-20">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <Badge variant="accent" className="mb-3">
          Social Proof & Endorsements
        </Badge>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
          Client & Engineering <span className="text-gradient-primary">Recommendations</span>
        </h2>
        <p className="text-slate-400 text-base">
          What VPs of Engineering, Startup Founders, and Product Leaders say about working with Dulanjaya.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {TESTIMONIALS.map((item, idx) => (
          <GlassCard key={idx} glow className="p-6 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-1 text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400" />
                ))}
              </div>
              <Quote className="w-8 h-8 text-blue-500/40 mb-3" />
              <p className="text-slate-300 text-sm leading-relaxed italic mb-6">
                &quot;{item.quote}&quot;
              </p>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
              <img
                src={item.avatar}
                alt={item.author}
                className="w-10 h-10 rounded-full object-cover border border-slate-700"
              />
              <div>
                <h4 className="text-sm font-bold text-white">{item.author}</h4>
                <p className="text-xs text-cyan-400 font-mono">{item.role}, {item.company}</p>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
};
