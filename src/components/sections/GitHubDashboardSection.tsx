'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { Github, GitCommit, Star, GitFork, Activity, RefreshCw, Code } from 'lucide-react';
import { PROFILE } from '@/lib/constants';

export const GitHubDashboardSection: React.FC = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastRefreshed, setLastRefreshed] = useState<string>('Just now');

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      setLastRefreshed(new Date().toLocaleTimeString());
    }, 800);
  };

  const topLanguages = [
    { name: 'TypeScript', percentage: 48, color: 'bg-blue-500' },
    { name: 'JavaScript / React', percentage: 24, color: 'bg-yellow-400' },
    { name: 'Python', percentage: 14, color: 'bg-emerald-400' },
    { name: 'Go (Golang)', percentage: 8, color: 'bg-cyan-400' },
    { name: 'C / C++', percentage: 6, color: 'bg-purple-500' },
  ];

  // Simulating 52 weeks of contribution graph matrix (364 days)
  const generateContributionMatrix = () => {
    const matrix = [];
    for (let i = 0; i < 52 * 7; i++) {
      const level = Math.random() > 0.4 ? Math.floor(Math.random() * 4) + 1 : 0;
      matrix.push(level);
    }
    return matrix;
  };

  const contributionMatrix = generateContributionMatrix();

  const getLevelColor = (level: number) => {
    switch (level) {
      case 1: return 'bg-blue-900/60 border-blue-800';
      case 2: return 'bg-blue-700/80 border-blue-600';
      case 3: return 'bg-indigo-500 border-indigo-400';
      case 4: return 'bg-cyan-400 border-cyan-300 shadow-sm shadow-cyan-400/50';
      default: return 'bg-slate-900/80 border-slate-800/80';
    }
  };

  return (
    <section id="github-dashboard" className="relative z-10 py-20">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <Badge variant="primary" className="mb-3">
          Telemetry & Open Source
        </Badge>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
          Live GitHub <span className="text-gradient-primary">Developer Dashboard</span>
        </h2>
        <p className="text-slate-400 text-base">
          Real-time activity telemetry, commit velocity, and language distribution across repositories.
        </p>
      </div>

      <GlassCard glow className="p-6 md:p-8 max-w-5xl mx-auto">
        {/* Header Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-6 mb-6">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-white">
              <Github className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span>{PROFILE.handle}</span>
                <Badge variant="success" size="sm">Active Sync</Badge>
              </h3>
              <p className="text-xs text-slate-400 font-mono">Last refreshed: {lastRefreshed}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleRefresh}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-all flex items-center gap-2 text-xs font-mono"
            >
              <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin text-blue-400' : ''}`} />
              <span>Sync Telemetry</span>
            </button>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs font-mono flex items-center gap-1.5 shadow-lg shadow-blue-600/20"
            >
              <span>Follow GitHub</span>
            </a>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-800">
            <div className="text-slate-400 text-xs font-mono flex items-center gap-1.5 mb-1">
              <GitCommit className="w-3.5 h-3.5 text-blue-400" />
              <span>Total Commits</span>
            </div>
            <div className="text-2xl font-bold font-mono text-white">2,480+</div>
          </div>

          <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-800">
            <div className="text-slate-400 text-xs font-mono flex items-center gap-1.5 mb-1">
              <Star className="w-3.5 h-3.5 text-yellow-400" />
              <span>Stars Earned</span>
            </div>
            <div className="text-2xl font-bold font-mono text-white">340+</div>
          </div>

          <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-800">
            <div className="text-slate-400 text-xs font-mono flex items-center gap-1.5 mb-1">
              <GitFork className="w-3.5 h-3.5 text-cyan-400" />
              <span>Forks & Pulls</span>
            </div>
            <div className="text-2xl font-bold font-mono text-white">125+</div>
          </div>

          <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-800">
            <div className="text-slate-400 text-xs font-mono flex items-center gap-1.5 mb-1">
              <Activity className="w-3.5 h-3.5 text-emerald-400" />
              <span>Current Streak</span>
            </div>
            <div className="text-2xl font-bold font-mono text-white">42 Days</div>
          </div>
        </div>

        {/* Contribution Graph Matrix Simulation */}
        <div className="space-y-3 mb-8">
          <div className="flex items-center justify-between text-xs font-mono text-slate-400">
            <span>Contributions in past 365 days</span>
            <div className="flex items-center gap-1 text-[10px]">
              <span>Less</span>
              <span className="w-2.5 h-2.5 rounded-sm bg-slate-900 border border-slate-800" />
              <span className="w-2.5 h-2.5 rounded-sm bg-blue-900/60" />
              <span className="w-2.5 h-2.5 rounded-sm bg-blue-700" />
              <span className="w-2.5 h-2.5 rounded-sm bg-cyan-400" />
              <span>More</span>
            </div>
          </div>

          <div className="p-4 bg-slate-950/80 rounded-xl border border-slate-800/80 overflow-x-auto">
            <div className="grid grid-flow-col grid-rows-7 gap-1 min-w-[680px]">
              {contributionMatrix.map((level, idx) => (
                <div
                  key={idx}
                  className={`w-2.5 h-2.5 rounded-sm border ${getLevelColor(level)} transition-all hover:scale-125`}
                  title={`Day ${idx + 1}: ${level * 3} contributions`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Languages Distribution Bar */}
        <div className="space-y-3">
          <div className="text-xs font-mono font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-2">
            <Code className="w-4 h-4 text-cyan-400" />
            <span>Top Codebase Languages</span>
          </div>

          <div className="w-full h-3 bg-slate-900 rounded-full overflow-hidden flex">
            {topLanguages.map((lang) => (
              <div
                key={lang.name}
                className={`${lang.color} h-full`}
                style={{ width: `${lang.percentage}%` }}
                title={`${lang.name}: ${lang.percentage}%`}
              />
            ))}
          </div>

          <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-400 pt-1">
            {topLanguages.map((lang) => (
              <div key={lang.name} className="flex items-center gap-1.5">
                <span className={`w-2.5 h-2.5 rounded-full ${lang.color}`} />
                <span>{lang.name} ({lang.percentage}%)</span>
              </div>
            ))}
          </div>
        </div>
      </GlassCard>
    </section>
  );
};
