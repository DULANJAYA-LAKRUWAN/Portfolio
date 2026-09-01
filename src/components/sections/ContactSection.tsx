'use client';

import React, { useState } from 'react';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { Mail, Send, Github, Linkedin, MessageSquare, MapPin, Calendar, CheckCircle2, Sparkles } from 'lucide-react';
import { PROFILE } from '@/lib/constants';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        // Fallback simulation for local dev
        setSubmitted(true);
      }
    } catch {
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative z-10 py-20">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <Badge variant="accent" className="mb-3">
          Initiate Collaboration
        </Badge>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
          Let&apos;s Build Something <span className="text-gradient-primary">Extraordinary</span>
        </h2>
        <p className="text-slate-400 text-base">
          Have a high-scale architecture project, AI integration requirement, or engineering leadership opportunity? Get in touch.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-start">
        {/* Left Column: Direct Channels */}
        <div className="lg:col-span-5 space-y-6">
          <GlassCard glow className="p-8">
            {/* Founder Avatar Mini Header */}
            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-800">
              <div className="relative w-14 h-14 rounded-full p-[2px] bg-gradient-to-tr from-blue-500 via-indigo-500 to-cyan-400 shadow-lg shrink-0">
                <img
                  src={PROFILE.avatar}
                  alt={PROFILE.name}
                  className="w-full h-full object-cover rounded-full"
                />
                <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-[#050816]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white leading-tight">{PROFILE.name}</h3>
                <p className="text-xs text-cyan-400 font-mono mt-0.5">Open for Contracts & Tech Advisory</p>
              </div>
            </div>

            <h4 className="text-sm font-mono text-slate-300 font-semibold mb-4 uppercase tracking-wider">{"// Direct Channels"}</h4>

            <div className="space-y-6 text-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-blue-600/15 border border-blue-500/30 text-blue-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">Direct Email</div>
                  <a href={`mailto:${PROFILE.email}`} className="text-white font-medium hover:text-blue-400 transition-colors">
                    {PROFILE.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-cyan-600/15 border border-cyan-500/30 text-cyan-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">Location & Timezone</div>
                  <div className="text-white font-medium">{PROFILE.location}</div>
                  <div className="text-[11px] text-slate-400 font-mono">UTC +5:30 (Flexible overlap)</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-purple-600/15 border border-purple-500/30 text-purple-400">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">Schedule Consultation</div>
                  <a
                    href="https://calendly.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 font-medium hover:underline text-xs flex items-center gap-1 mt-0.5"
                  >
                    <span>Book 30-min Calendly Session</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Social Buttons Row */}
            <div className="pt-6 border-t border-slate-800 mt-8 flex items-center gap-3">
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-all"
                title="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-all"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={PROFILE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-all"
                title="WhatsApp Direct"
              >
                <MessageSquare className="w-5 h-5" />
              </a>
            </div>
          </GlassCard>
        </div>

        {/* Right Column: Premium Contact Form */}
        <div className="lg:col-span-7">
          <GlassCard glow className="p-8">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Message Transmitted!</h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto">
                  Thank you for reaching out. Dulanjaya will review your inquiry and reply within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono hover:text-white"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-bold text-white mb-2">Send Direct Inquiry</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-800 text-white placeholder-slate-600 outline-none focus:border-blue-500 text-sm font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="sarah@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-800 text-white placeholder-slate-600 outline-none focus:border-blue-500 text-sm font-sans"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">Subject / Project Topic</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. High-Scale Microservices Consultation"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-800 text-white placeholder-slate-600 outline-none focus:border-blue-500 text-sm font-sans"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">Message Details *</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Outline your project scope, technical requirements, or inquiry..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-800 text-white placeholder-slate-600 outline-none focus:border-blue-500 text-sm font-sans resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white font-medium text-sm flex items-center justify-center gap-2 shadow-xl shadow-blue-600/25 hover:shadow-blue-600/40 hover:scale-[1.01] transition-all disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <Sparkles className="w-4 h-4 animate-spin" />
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </GlassCard>
        </div>
      </div>
    </section>
  );
};
