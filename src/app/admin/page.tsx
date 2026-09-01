'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { LayoutDashboard, FolderGit2, BookOpen, MessageSquare, Cpu, Plus, Trash2, Edit } from 'lucide-react';
import { FEATURED_PROJECTS } from '@/lib/constants';

type TabType = 'overview' | 'projects' | 'blogs' | 'messages' | 'rag';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<TabType>('overview');

  return (
    <div className="min-h-screen bg-[#050816] text-white p-6 font-sans">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Top Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold font-mono">
              D
            </div>
            <div>
              <h1 className="text-2xl font-bold flex items-center gap-2">
                <span>Dulanjaya.dev Admin Console</span>
                <Badge variant="success">Authenticated</Badge>
              </h1>
              <p className="text-xs text-slate-400 font-mono">System Control & Knowledge Management</p>
            </div>
          </div>

          <Link
            href="/"
            className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono hover:text-white transition-colors"
          >
            ← Exit to Live Site
          </Link>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap gap-2 border-b border-slate-800/80 pb-3">
          {[
            { id: 'overview' as const, label: 'System Overview', icon: LayoutDashboard },
            { id: 'projects' as const, label: 'Manage Projects', icon: FolderGit2 },
            { id: 'blogs' as const, label: 'Manage Blogs', icon: BookOpen },
            { id: 'messages' as const, label: 'Visitor Messages', icon: MessageSquare },
            { id: 'rag' as const, label: 'AI RAG Knowledge', icon: Cpu },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-mono flex items-center gap-2 transition-all ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white font-bold'
                    : 'bg-slate-900/60 text-slate-400 hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Views */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="p-5 bg-slate-900/80 rounded-2xl border border-slate-800">
                <div className="text-xs font-mono text-slate-400 mb-1">Total Page Views (Monthly)</div>
                <div className="text-3xl font-bold text-cyan-400 font-mono">48,920</div>
              </div>
              <div className="p-5 bg-slate-900/80 rounded-2xl border border-slate-800">
                <div className="text-xs font-mono text-slate-400 mb-1">AI Playground Queries</div>
                <div className="text-3xl font-bold text-blue-400 font-mono">3,240</div>
              </div>
              <div className="p-5 bg-slate-900/80 rounded-2xl border border-slate-800">
                <div className="text-xs font-mono text-slate-400 mb-1">Inquiries Received</div>
                <div className="text-3xl font-bold text-emerald-400 font-mono">18</div>
              </div>
              <div className="p-5 bg-slate-900/80 rounded-2xl border border-slate-800">
                <div className="text-xs font-mono text-slate-400 mb-1">RAG Vector Chunks</div>
                <div className="text-3xl font-bold text-purple-400 font-mono">1,420</div>
              </div>
            </div>

            <GlassCard className="p-6">
              <h3 className="text-base font-bold text-white mb-4">System Telemetry & Health Logs</h3>
              <div className="space-y-2 text-xs font-mono text-slate-300">
                <div className="p-2.5 rounded bg-slate-950 border border-slate-800 flex justify-between">
                  <span>[INFO] Next.js 15 App Router RSC rendering cache revalidated</span>
                  <span className="text-emerald-400">200 OK</span>
                </div>
                <div className="p-2.5 rounded bg-slate-950 border border-slate-800 flex justify-between">
                  <span>[INFO] PgVector 1536-dim embedding index synced</span>
                  <span className="text-cyan-400">0.42ms</span>
                </div>
                <div className="p-2.5 rounded bg-slate-950 border border-slate-800 flex justify-between">
                  <span>[INFO] GitHub GraphQL telemetry sync updated</span>
                  <span className="text-blue-400">Cached</span>
                </div>
              </div>
            </GlassCard>
          </div>
        )}

        {activeTab === 'projects' && (
          <GlassCard className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold">Projects Inventory ({FEATURED_PROJECTS.length})</h3>
              <button className="px-3 py-1.5 rounded-lg bg-blue-600 text-white text-xs font-mono flex items-center gap-1">
                <Plus className="w-4 h-4" /> Add Project
              </button>
            </div>

            <div className="space-y-3">
              {FEATURED_PROJECTS.map((p) => (
                <div key={p.slug} className="p-4 bg-slate-900/80 rounded-xl border border-slate-800 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-white text-sm">{p.title}</h4>
                    <span className="text-xs font-mono text-cyan-400">{p.category}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-2 rounded bg-slate-800 hover:bg-slate-700 text-slate-300">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="p-2 rounded bg-red-950/60 text-red-400 hover:bg-red-900">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        )}

        {activeTab === 'messages' && (
          <GlassCard className="p-6">
            <h3 className="text-lg font-bold mb-4">Contact Form Submissions</h3>
            <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-1">
              <div className="flex justify-between text-xs font-mono text-cyan-400">
                <span>Sarah Jenkins (StarChance CEO)</span>
                <span>Today 09:42 AM</span>
              </div>
              <p className="text-sm font-semibold text-white">High-scale microservices consultation</p>
              <p className="text-xs text-slate-400 leading-relaxed">
                Hi Dulanjaya, we saw your raffle ticket architecture benchmarks and would like to discuss an engineering contract.
              </p>
            </div>
          </GlassCard>
        )}

        {activeTab === 'rag' && (
          <GlassCard className="p-6">
            <h3 className="text-lg font-bold mb-2">AI Vector Embeddings Manager</h3>
            <p className="text-slate-400 text-xs mb-4">
              Re-index vector embeddings from profile constants, case studies, and MDX files into PostgreSQL PgVector.
            </p>
            <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-mono text-xs font-semibold">
              Re-index Vector Knowledge Base
            </button>
          </GlassCard>
        )}
      </div>
    </div>
  );
}
