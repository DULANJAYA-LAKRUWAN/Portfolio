"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, ExternalLink, Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center pt-32 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-indigo-600/30 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-emerald-600/20 rounded-full blur-[100px] animate-pulse" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="z-10"
      >
        <span className="px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6 inline-block">
          Open for Internships & Full-time Roles
        </span>
        
        <h1 className="text-5xl md:text-7xl font-bold font-outfit mb-6 tracking-tight">
          Hi, I&apos;m <span className="text-gradient">DulanJaya Lakruwan</span>
        </h1>
        
        <p className="text-xl md:text-2xl font-medium text-slate-300 mb-4 max-w-2xl mx-auto font-outfit">
          Full Stack Software Engineer
        </p>
        
        <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Building scalable web applications, mobile apps, and modern software systems. 
          Undergraduate Student at Java Institute for Advanced Technology.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="px-8 py-4 bg-primary text-white font-bold rounded-2xl flex items-center gap-2 shadow-lg shadow-indigo-500/30 hover:bg-primary-hover transition-all"
          >
            View My Work <ArrowRight className="w-5 h-5" />
          </motion.a>
          
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/DULANJAYA-LAKRUWAN"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 glass text-white font-bold rounded-2xl flex items-center gap-2 hover:bg-slate-800/80 transition-all"
          >
            GitHub Profile <Github className="w-5 h-5" />
          </motion.a>
          
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/resume.pdf"
            className="px-8 py-4 bg-slate-800 text-slate-200 font-bold rounded-2xl flex items-center gap-2 hover:bg-slate-700 transition-all border border-slate-700"
          >
            Download CV <Download className="w-5 h-5" />
          </motion.a>
        </div>
      </motion.div>

      {/* Floating Elements (Visual Decoration) */}
      <div className="hidden lg:block">
        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 right-[15%] glass-card p-4 animate-float"
        >
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-emerald-500" />
            <span className="text-xs font-mono text-slate-400">Next.js + TypeScript</span>
          </div>
        </motion.div>
        
        <motion.div 
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-40 left-[10%] glass-card p-4 animate-float"
        >
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-indigo-500" />
            <span className="text-xs font-mono text-slate-400">Spring Boot Backend</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
