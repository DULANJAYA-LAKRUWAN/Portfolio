'use client';

import React from 'react';
import { Github, Linkedin, Twitter, ArrowUp, Activity, Terminal, Shield, Sparkles } from 'lucide-react';
import { PROFILE } from '@/lib/constants';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#030612] text-slate-400 py-16 relative overflow-hidden">
      {/* Glow background gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-blue-600/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Col 1: Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white font-bold font-mono">
                D
              </div>
              <span className="text-white font-mono font-bold text-lg">
                Dulanjaya<span className="text-blue-500">.dev</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm max-w-md leading-relaxed">
              An AI-powered personal developer platform built for high performance, continuous learning, and system architecture excellence. Designed with Next.js 15, React 19, and RAG vector intelligence.
            </p>
            {/* Live System Health Badge */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-slate-300">All Systems Operational</span>
              <span className="text-slate-600">|</span>
              <span className="text-blue-400">v2.5.0-prod</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-white font-mono text-sm font-semibold tracking-wider uppercase">Architecture</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About Story</a></li>
              <li><a href="#stack" className="hover:text-blue-400 transition-colors">Tech Stack</a></li>
              <li><a href="#projects" className="hover:text-blue-400 transition-colors">Featured Projects</a></li>
              <li><a href="#experience" className="hover:text-blue-400 transition-colors">Career Journey</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Services Offered</a></li>
            </ul>
          </div>

          {/* Col 3: Interactive Sandbox Links */}
          <div className="space-y-3">
            <h4 className="text-white font-mono text-sm font-semibold tracking-wider uppercase">Interactive</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#ai-playground" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"><Sparkles className="w-3.5 h-3.5 text-cyan-400" /> AI Assistant RAG</a></li>
              <li><a href="#github-dashboard" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"><Activity className="w-3.5 h-3.5 text-blue-400" /> Live GitHub Dashboard</a></li>
              <li><a href={PROFILE.resumeUrl} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">Download Resume PDF</a></li>
              <li><a href="#contact" className="hover:text-cyan-400 transition-colors">Schedule Consultation</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div>
            © {new Date().getFullYear()} {PROFILE.name}. All Rights Reserved. Built with Next.js 15 & React 19.
          </div>

          <div className="flex items-center gap-6">
            <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <Github className="w-4 h-4" />
            </a>
            <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href={PROFILE.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-all flex items-center gap-1"
              title="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
