'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Search, Menu, X, Sparkles, Github, Linkedin, ArrowUpRight } from 'lucide-react';
import { PROFILE } from '@/lib/constants';

interface NavbarProps {
  onOpenCommandPalette: () => void;
  onToggleTerminal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenCommandPalette,
  onToggleTerminal
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Stack', href: '#stack' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Services', href: '#services' },
    { name: 'AI Assistant', href: '#ai-playground' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050816]/80 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="group flex items-center gap-2 text-lg font-bold tracking-tight">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/25 group-hover:scale-105 transition-transform">
            D
          </div>
          <span className="text-white font-mono font-bold tracking-wider">
            Dulanjaya<span className="text-blue-500">.dev</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-blue-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Controls & Interactive Triggers */}
        <div className="flex items-center gap-3">
          {/* Command Palette Trigger */}
          <button
            onClick={onOpenCommandPalette}
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700 text-xs font-mono transition-all"
            title="Search Platform (Cmd + K)"
          >
            <Search className="w-3.5 h-3.5 text-blue-400" />
            <span>Search...</span>
            <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-[10px] text-slate-400 border border-slate-700">
              ⌘K
            </kbd>
          </button>

          {/* Terminal Launcher */}
          <button
            onClick={onToggleTerminal}
            className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all flex items-center gap-1.5 text-xs font-mono"
            title="Toggle Web Terminal Shell"
          >
            <Terminal className="w-4 h-4 text-cyan-400" />
            <span className="hidden sm:inline">CLI</span>
          </button>

          {/* AI Playground CTA */}
          <a
            href="#ai-playground"
            className="hidden md:flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium text-xs shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 transition-all"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ask AI</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#050816]/95 border-b border-slate-800 px-6 py-6"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-slate-300 hover:text-white text-lg font-medium py-1"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCommandPalette();
                  }}
                  className="flex items-center gap-2 text-sm text-slate-400"
                >
                  <Search className="w-4 h-4 text-blue-400" />
                  <span>Search Cmd+K</span>
                </button>
                <div className="flex items-center gap-3">
                  <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
