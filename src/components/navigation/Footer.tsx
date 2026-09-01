'use client';

import React from 'react';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  ArrowUp, 
  Sparkles, 
  Mail, 
  MessageSquare, 
  FileText, 
  ShieldCheck, 
  MapPin,
  Heart,
  Layers,
  Cpu
} from 'lucide-react';
import { PROFILE } from '@/lib/constants';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#030612] text-slate-400 pt-16 pb-12 relative overflow-hidden">
      {/* Background ambient lighting effects */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-48 bg-blue-600/10 blur-[130px] pointer-events-none" />
      <div className="absolute top-0 right-10 w-72 h-72 bg-cyan-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/70">
          {/* Col 1: Author Profile & Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-5">
            <div className="flex items-center gap-3.5">
              {/* Profile Avatar with status indicator */}
              <div className="relative group shrink-0">
                <div className="w-13 h-13 rounded-full p-[2px] bg-gradient-to-tr from-blue-500 via-indigo-500 to-cyan-400 shadow-lg shadow-blue-500/25 group-hover:scale-105 transition-transform overflow-hidden">
                  <img
                    src={PROFILE.avatar}
                    alt={PROFILE.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
                <span 
                  className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-[#030612] ring-2 ring-emerald-500/30" 
                  title="Available for projects & consulting"
                />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-white font-bold text-lg tracking-tight hover:text-blue-400 transition-colors">
                    {PROFILE.name}
                  </h3>
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    Staff Engineer
                  </span>
                </div>
                <p className="text-xs font-mono text-cyan-400/90">
                  {PROFILE.handle} · {PROFILE.title}
                </p>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              {PROFILE.tagline} Specializing in Next.js 15, React 19, distributed microservices, and AI-powered workflow automations.
            </p>

            {/* Location & Live System Status Badge */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-300">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Available for high-impact roles</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-400">
                <MapPin className="w-3 h-3 text-cyan-400" />
                <span>{PROFILE.location}</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10 transition-all"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10 transition-all"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={PROFILE.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10 transition-all"
                title="Twitter / X"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PROFILE.email}`}
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10 transition-all"
                title="Email Me"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={PROFILE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all"
                title="WhatsApp Direct"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-white font-mono text-xs font-semibold tracking-wider uppercase flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-blue-400" />
              Architecture
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About Story</a></li>
              <li><a href="#stack" className="hover:text-blue-400 transition-colors">Tech Stack Matrix</a></li>
              <li><a href="#projects" className="hover:text-blue-400 transition-colors">Featured Projects</a></li>
              <li><a href="#experience" className="hover:text-blue-400 transition-colors">Career Timeline</a></li>
              <li><a href="#education" className="hover:text-blue-400 transition-colors">Education & Certs</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Engineering Services</a></li>
            </ul>
          </div>

          {/* Col 3: Interactive Labs & AI (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-white font-mono text-xs font-semibold tracking-wider uppercase flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              Interactive Lab
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#ai-playground" className="hover:text-cyan-400 transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform" />
                  <span>RAG AI Assistant</span>
                </a>
              </li>
              <li>
                <a href="#terminal" className="hover:text-emerald-400 transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 group-hover:scale-125 transition-transform" />
                  <span>Interactive Terminal</span>
                </a>
              </li>
              <li>
                <a href="#github-dashboard" className="hover:text-blue-400 transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 group-hover:scale-125 transition-transform" />
                  <span>Live GitHub Stats</span>
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-purple-400 transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 group-hover:scale-125 transition-transform" />
                  <span>Engineering Blog</span>
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-amber-400 transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 group-hover:scale-125 transition-transform" />
                  <span>Client Testimonials</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Actions & Admin (2 cols) */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-white font-mono text-xs font-semibold tracking-wider uppercase flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-indigo-400" />
              Resources
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a 
                  href={PROFILE.resumeUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors flex items-center gap-1.5 text-blue-400 font-medium"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Resume PDF</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5" />
                  <span>Book Consultation</span>
                </a>
              </li>
              <li>
                <a 
                  href="/admin/" 
                  className="hover:text-white transition-colors flex items-center gap-1.5 text-slate-400 hover:text-cyan-300 font-mono text-xs"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Admin Panel</span>
                </a>
              </li>
            </ul>

            <div className="pt-2">
              <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80 text-[11px] font-mono text-slate-400 space-y-1">
                <div className="flex items-center justify-between">
                  <span>Latency</span>
                  <span className="text-emerald-400">~12ms</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Stack</span>
                  <span className="text-blue-400">Next.js 15</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-600 hidden sm:inline">|</span>
            <span className="text-slate-400 flex items-center gap-1">
              Crafted with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> & Next.js 15
            </span>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-blue-500/50 hover:bg-slate-800 transition-all flex items-center gap-1.5 group cursor-pointer ml-2"
              title="Back to Top"
            >
              <span className="text-[11px] hidden sm:inline group-hover:text-blue-400 transition-colors">Top</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform text-blue-400" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

