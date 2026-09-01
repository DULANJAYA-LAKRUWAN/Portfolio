'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { Sparkles, Send, Bot, User, RefreshCw } from 'lucide-react';
import { FEATURED_PROJECTS } from '@/lib/constants';

interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
}

export const AIPlaygroundSection: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'ai',
      text: `Hello! I am Dulanjaya's AI RAG Assistant. I am trained on his engineering portfolio, project architecture blueprints, tech stack capabilities, and career journey. How can I assist you today?`,
      timestamp: 'Just now'
    }
  ]);
  const [inputPrompt, setInputPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const msgCounter = useRef(2);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isGenerating]);

  const suggestedPrompts = [
    "Who is Dulanjaya Lakruwan?",
    "Explain StarChance architecture.",
    "What backend technologies does he master?",
    "Can Dulanjaya build high-scale RAG pipelines?",
    "What is his experience with CeyOS?"
  ];

  // RAG Response Generation Logic
  const handleSend = (textToSend?: string) => {
    const query = textToSend || inputPrompt;
    if (!query.trim() || isGenerating) return;

    const nextId = String(msgCounter.current++);
    const now = new Date();
    const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

    const userMsg: ChatMessage = {
      id: nextId,
      sender: 'user',
      text: query,
      timestamp: timeStr
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputPrompt('');
    setIsGenerating(true);

    // Simulate RAG vector search & AI streaming delay
    setTimeout(() => {
      let aiAnswer = "";
      const qLower = query.toLowerCase();

      if (qLower.includes("who is") || qLower.includes("dulanjaya") || qLower.includes("about")) {
        aiAnswer = `Dulanjaya Lakruwan is a Senior Staff Software Engineer & AI System Architect with 5+ years of experience. He specializes in high-throughput distributed systems, Next.js 15 / React 19 web applications, and autonomous RAG vector AI agents.`;
      } else if (qLower.includes("starchance")) {
        const p = FEATURED_PROJECTS.find(x => x.slug === "starchance-platform");
        aiAnswer = `StarChance is a high-throughput raffle platform handling 15,000+ req/sec. Architecture: ${p?.architectureSummary} Core solution: ${p?.solution}`;
      } else if (qLower.includes("backend") || qLower.includes("technologies") || qLower.includes("stack")) {
        aiAnswer = `Dulanjaya's backend & database proficiencies include Node.js/Express (95%), Python FastAPI (90%), Go (84%), PostgreSQL with Prisma ORM (94%), Redis (92%), and Docker/Kubernetes (88%).`;
      } else if (qLower.includes("rag") || qLower.includes("ai")) {
        aiAnswer = `Yes! Dulanjaya has built multi-agent RAG vector engines utilizing PgVector, OpenAI embeddings (text-embedding-3-small), LangChain, and sliding window context memory with a precision score of 98.4%.`;
      } else if (qLower.includes("ceyos")) {
        aiAnswer = `CeyOS is Dulanjaya's custom lightweight operating system engine written in C/C++ and Assembly. It features a RAM footprint under 128 MB and a 1.2-second boot time for specialized embedded developer tasks.`;
      } else {
        aiAnswer = `Dulanjaya Lakruwan is an elite Senior Software Engineer and AI Architect. Key metrics: 2,400+ GitHub commits, 99.99% system uptime, and 30+ production apps delivered. Feel free to ask about specific projects or contact him at contact@dulanjaya.dev!`;
      }

      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: aiAnswer,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, aiMsg]);
      setIsGenerating(false);
    }, 700);
  };

  return (
    <section id="ai-playground" className="relative z-10 py-20">
      {/* Section Title */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <Badge variant="accent" className="mb-3">
          Signature Feature: RAG Assistant
        </Badge>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
          Interactive <span className="text-gradient-primary">AI Knowledge Playground</span>
        </h2>
        <p className="text-slate-400 text-base">
          Ask questions about Dulanjaya&apos;s system design decisions, engineering experience, or project blueprints powered by vector search.
        </p>
      </div>

      <GlassCard glow className="max-w-4xl mx-auto p-0 overflow-hidden border border-slate-700/80 shadow-2xl">
        {/* Terminal Chat Header */}
        <div className="bg-slate-900 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/20">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <span>Dulanjaya AI Vector Engine</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </h3>
              <p className="text-[11px] text-slate-400 font-mono">Model: gpt-4o-mini • Vector Index: PgVector-1536</p>
            </div>
          </div>

          <button
            onClick={() => setMessages([messages[0]])}
            className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors text-xs font-mono flex items-center gap-1"
            title="Reset Conversation"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Reset</span>
          </button>
        </div>

        {/* Suggested Prompts Bar */}
        <div className="bg-slate-950/60 px-6 py-3 border-b border-slate-800/80 flex items-center gap-2 overflow-x-auto">
          <span className="text-[11px] font-mono text-slate-400 shrink-0">Try asking:</span>
          {suggestedPrompts.map((p, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(p)}
              className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 text-xs font-mono shrink-0 transition-all"
            >
              {p}
            </button>
          ))}
        </div>

        {/* Chat History Window */}
        <div className="p-6 max-h-[420px] overflow-y-auto space-y-4 bg-[#050816]/90 font-sans">
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex items-start gap-3 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}
            >
              <div
                className={`p-2 rounded-xl text-white shrink-0 ${
                  msg.sender === 'user'
                    ? 'bg-blue-600'
                    : 'bg-gradient-to-br from-indigo-600 to-purple-600'
                }`}
              >
                {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              <div
                className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-blue-600/20 border border-blue-500/30 text-white rounded-tr-none'
                    : 'bg-slate-900/90 border border-slate-800 text-slate-200 rounded-tl-none'
                }`}
              >
                <div className="mb-1 text-[10px] font-mono text-slate-400 flex items-center justify-between">
                  <span>{msg.sender === 'user' ? 'Visitor' : 'Dulanjaya AI'}</span>
                  <span>{msg.timestamp}</span>
                </div>
                <p>{msg.text}</p>
              </div>
            </motion.div>
          ))}

          {isGenerating && (
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-indigo-600 text-white">
                <Bot className="w-4 h-4" />
              </div>
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-mono flex items-center gap-2">
                <Sparkles className="w-4 h-4 animate-spin" />
                <span>Searching PgVector embeddings & streaming response...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        <div className="p-4 bg-slate-900 border-t border-slate-800 flex items-center gap-3">
          <input
            type="text"
            value={inputPrompt}
            onChange={(e) => setInputPrompt(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask AI anything about Dulanjaya (e.g. StarChance, Next.js 15, Architecture)..."
            className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-500 outline-none focus:border-blue-500 text-sm font-sans"
          />
          <button
            onClick={() => handleSend()}
            disabled={isGenerating || !inputPrompt.trim()}
            className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-medium text-sm flex items-center gap-2 shadow-lg shadow-blue-600/20 transition-all shrink-0"
          >
            <span>Send</span>
            <Send className="w-4 h-4" />
          </button>
        </div>
      </GlassCard>
    </section>
  );
};
