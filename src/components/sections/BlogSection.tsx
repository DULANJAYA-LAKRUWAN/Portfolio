'use client';

import React, { useState } from 'react';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { Search, Clock, ArrowRight } from 'lucide-react';

export interface BlogPostItem {
  slug: string;
  title: string;
  summary: string;
  category: string;
  tags: string[];
  readingTime: string;
  publishedAt: string;
}

export const SAMPLE_BLOGS: BlogPostItem[] = [
  {
    slug: "scaling-redis-ticket-queues-sub-second",
    title: "Scaling Distributed Ticket Queues to 15,000 req/sec with Redis Pub/Sub",
    summary: "An in-depth look into how we eliminated PostgreSQL row-level locks during flash sales by implementing an in-memory token-bucket buffer layer.",
    category: "Systems Architecture",
    tags: ["Redis", "Node.js", "PostgreSQL", "Concurrency"],
    readingTime: "6 min read",
    publishedAt: "July 2026"
  },
  {
    slug: "rag-vector-chunking-precision-guide",
    title: "Building Production RAG Engines: Vector Chunking & Semantic Recall",
    summary: "Why vector retrieval quality is 80% chunking strategy and 20% prompt tuning. Architectural insights on hybrid BM25 + PgVector similarity search.",
    category: "AI & Vector Search",
    tags: ["OpenAI", "PgVector", "Python", "LangChain"],
    readingTime: "8 min read",
    publishedAt: "June 2026"
  },
  {
    slug: "nextjs-15-app-router-sub-100ms-vitals",
    title: "Achieving 100/100 Core Web Vitals on Next.js 15 App Router",
    summary: "How to eliminate layout shifts, optimize React Server Components (RSC), and leverage edge streaming for zero-latency user experiences.",
    category: "Frontend Excellence",
    tags: ["Next.js 15", "React 19", "Performance", "Web Vitals"],
    readingTime: "5 min read",
    publishedAt: "May 2026"
  }
];

export const BlogSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Systems Architecture', 'AI & Vector Search', 'Frontend Excellence'];

  const filteredBlogs = SAMPLE_BLOGS.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          blog.summary.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="blog" className="relative z-10 py-20">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <Badge variant="accent" className="mb-3">
          Engineering Writings & MDX
        </Badge>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
          Technical Articles & <span className="text-gradient-primary">System Notes</span>
        </h2>
        <p className="text-slate-400 text-base">
          In-depth technical guides on distributed systems, AI vector search, and high-performance frontend architecture.
        </p>
      </div>

      {/* Search & Category Filter Bar */}
      <div className="max-w-4xl mx-auto mb-12 space-y-4">
        <div className="relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search articles by topic, technology, or title..."
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 text-white placeholder-slate-500 outline-none focus:border-blue-500 transition-colors font-sans text-sm"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all border ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white border-blue-500'
                  : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {filteredBlogs.map((post) => (
          <GlassCard key={post.slug} glow className="p-6 flex flex-col justify-between h-full group">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-cyan-400 mb-3">
                <span>{post.category}</span>
                <span className="flex items-center gap-1 text-slate-400">
                  <Clock className="w-3 h-3" />
                  {post.readingTime}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {post.title}
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-4">
                {post.summary}
              </p>
            </div>

            <div>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {post.tags.map((t) => (
                  <Badge key={t} variant="outline" size="sm">
                    {t}
                  </Badge>
                ))}
              </div>

              <button className="text-xs font-mono text-blue-400 font-semibold flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                <span>Read Full Article</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
};
