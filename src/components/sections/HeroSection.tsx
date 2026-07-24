'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, FileText, ArrowRight, Github, Linkedin, MessageSquare, Terminal, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { PROFILE } from '@/lib/constants';
import { HeroCanvas } from '@/components/3d/HeroCanvas';
import { Badge } from '@/components/ui/Badge';

interface HeroSectionProps {
  onOpenTerminal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenTerminal }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing animation logic for rotating roles
  useEffect(() => {
    const currentRole = PROFILE.roles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentRole.substring(0, displayedText.length + 1));
        if (displayedText.length + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayedText(currentRole.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % PROFILE.roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex]);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* 3D Particle Background */}
      <HeroCanvas />

      {/* Radial Gradient Ambient Overlay */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-600/20 via-indigo-600/10 to-transparent blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center px-4">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-blue-950/40 border border-blue-500/30 text-blue-300 text-xs font-mono backdrop-blur-md shadow-lg shadow-blue-500/10"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Available for High-Impact Roles & Advisory</span>
          <ShieldCheck className="w-3.5 h-3.5 text-blue-400 ml-1" />
        </motion.div>

        {/* Name Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-4"
        >
          Hi, I&apos;m <span className="text-gradient-primary">{PROFILE.name}</span>
        </motion.h1>

        {/* Dynamic Typing Role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-12 flex items-center justify-center text-xl sm:text-3xl font-mono text-cyan-400 font-semibold mb-6"
        >
          <span>{displayedText}</span>
          <span className="animate-pulse text-blue-500 ml-1">|</span>
        </motion.div>

        {/* Subtitle Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10"
        >
          {PROFILE.tagline} Engineered with Apple-level polish, Linear-style micro-animations, and resilient distributed microservices.
        </motion.p>

        {/* CTA Button Group */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <a
            href="#projects"
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white font-medium text-sm flex items-center gap-2 shadow-xl shadow-blue-600/25 hover:shadow-blue-600/40 hover:scale-105 transition-all"
          >
            <span>Explore Featured Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#ai-playground"
            className="px-6 py-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-200 hover:text-cyan-400 hover:border-cyan-500/40 font-medium text-sm flex items-center gap-2 backdrop-blur-md hover:scale-105 transition-all"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Ask AI Assistant</span>
          </a>

          <a
            href={PROFILE.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 text-slate-300 hover:text-white font-medium text-sm flex items-center gap-2 hover:bg-slate-800 transition-all"
          >
            <FileText className="w-4 h-4 text-slate-400" />
            <span>Resume PDF</span>
          </a>
        </motion.div>

        {/* Stats Grid Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto pt-6 border-t border-slate-800/60"
        >
          {PROFILE.stats.map((stat, idx) => (
            <div key={idx} className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/60 backdrop-blur-sm">
              <div className="text-2xl font-bold font-mono text-gradient-primary">{stat.value}</div>
              <div className="text-xs text-slate-400 font-medium mt-0.5">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
