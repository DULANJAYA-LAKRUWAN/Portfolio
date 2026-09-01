'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Terminal, Sparkles, FolderGit2, Mail, FileText, X, ArrowRight } from 'lucide-react';
import { PROFILE, FEATURED_PROJECTS } from '@/lib/constants';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenTerminal: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onOpenTerminal
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const navigateToSection = (id: string) => {
    onClose();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const actions = [
    {
      id: 'ai',
      title: 'Ask AI Assistant',
      category: 'Features',
      icon: Sparkles,
      action: () => navigateToSection('ai-playground')
    },
    {
      id: 'terminal',
      title: 'Launch Interactive CLI Terminal',
      category: 'Features',
      icon: Terminal,
      action: () => {
        onClose();
        onOpenTerminal();
      }
    },
    {
      id: 'resume',
      title: 'Download Resume PDF',
      category: 'Downloads',
      icon: FileText,
      action: () => {
        onClose();
        window.open(PROFILE.resumeUrl, '_blank');
      }
    },
    {
      id: 'contact',
      title: 'Send direct message or email',
      category: 'Actions',
      icon: Mail,
      action: () => navigateToSection('contact')
    },
    ...FEATURED_PROJECTS.map(p => ({
      id: p.slug,
      title: `View Project: ${p.title}`,
      category: 'Projects',
      icon: FolderGit2,
      action: () => navigateToSection('projects')
    }))
  ];

  const filteredActions = actions.filter(a =>
    a.title.toLowerCase().includes(query.toLowerCase()) ||
    a.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#050816]/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          transition={{ type: 'spring', stiffness: 350, damping: 25 }}
          className="relative w-full max-w-2xl bg-[#0f172a] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden z-10"
        >
          {/* Input Box */}
          <div className="flex items-center px-4 py-3.5 border-b border-slate-800 bg-slate-900/50">
            <Search className="w-5 h-5 text-blue-400 mr-3" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type a command or search platform (e.g. StarChance, Terminal, Resume)..."
              className="w-full bg-transparent text-white placeholder-slate-500 outline-none font-sans text-sm"
            />
            <button
              onClick={onClose}
              className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Results List */}
          <div className="max-h-80 overflow-y-auto p-2 space-y-1">
            {filteredActions.length === 0 ? (
              <div className="p-8 text-center text-slate-400 text-sm">
                No matching commands found for &quot;{query}&quot;.
              </div>
            ) : (
              filteredActions.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={item.action}
                    className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-blue-600/15 hover:border hover:border-blue-500/30 text-left group transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-slate-800/80 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-white text-sm font-medium">{item.title}</div>
                        <div className="text-xs text-slate-400 font-mono">{item.category}</div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                  </button>
                );
              })
            )}
          </div>

          {/* Footer Shortcuts Info */}
          <div className="px-4 py-2.5 bg-slate-900/90 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
            <span>Navigation: <kbd className="px-1 py-0.5 bg-slate-800 rounded">↑</kbd> <kbd className="px-1 py-0.5 bg-slate-800 rounded">↓</kbd></span>
            <span>Select: <kbd className="px-1 py-0.5 bg-slate-800 rounded">↵</kbd></span>
            <span>Close: <kbd className="px-1 py-0.5 bg-slate-800 rounded">ESC</kbd></span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
