'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Terminal } from 'lucide-react';
import { PROFILE, SKILL_CATEGORIES, FEATURED_PROJECTS, EXPERIENCES, EDUCATION } from '@/lib/constants';

interface TerminalModeProps {
  isOpen?: boolean;
  onClose?: () => void;
}

interface CommandOutput {
  command: string;
  output: React.ReactNode;
}

export const TerminalModeSection: React.FC<TerminalModeProps> = () => {
  const [inputCommand, setInputCommand] = useState('');
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: 'welcome',
      output: (
        <div className="space-y-2 text-xs font-mono text-cyan-300">
          <pre className="text-[10px] sm:text-xs leading-none text-blue-400 font-extrabold">
{`
  ___       _                 _                    _              
 |  _ \\ _  _| | __ _ _ __  |_| __ _ _  _  __  _| | _____  _ _ _ 
 | | | | | | | |/ _\` | '_ \\ / / / _\` | | | |/ _\\/ _\` |/ _ \\| | | |
 | |_| | |_| | | (_| | | | / /| (_| | |_| |  _/ (_| |  __/| | | |
 |____/ \\__,_|_|\\__,_|_| |_/_/  \\__,_|\\__,_|\\__|\\__,_|\\___|\\_|_|_|
`}
          </pre>
          <p>Dulanjaya.dev CLI Terminal Shell v2.5.0 [x86_64-ceyos-linux-gnu]</p>
          <p className="text-slate-400">Type <span className="text-yellow-400 font-bold">help</span> to list available shell commands.</p>
        </div>
      )
    }
  ]);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const executeCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    let out: React.ReactNode = null;

    switch (trimmed) {
      case 'help':
        out = (
          <div className="space-y-1 text-xs font-mono">
            <p className="text-yellow-400 font-bold">Available Commands:</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-slate-300 pt-1">
              <div><span className="text-blue-400">whoami</span> - Developer bio</div>
              <div><span className="text-blue-400">skills</span> - Stack & proficiency</div>
              <div><span className="text-blue-400">projects</span> - Case studies list</div>
              <div><span className="text-blue-400">experience</span> - Career timeline</div>
              <div><span className="text-blue-400">education</span> - Degrees & certs</div>
              <div><span className="text-blue-400">contact</span> - Email & handles</div>
              <div><span className="text-blue-400">github</span> - Live stats link</div>
              <div><span className="text-blue-400">clear</span> - Clear terminal screen</div>
            </div>
          </div>
        );
        break;

      case 'whoami':
        out = (
          <div className="space-y-1 text-xs font-mono text-slate-300">
            <p className="text-cyan-400 font-bold">{PROFILE.name} ({PROFILE.handle})</p>
            <p>{PROFILE.title}</p>
            <p className="text-slate-400">{PROFILE.bio}</p>
            <p className="text-blue-400 pt-1">Location: {PROFILE.location} | Email: {PROFILE.email}</p>
          </div>
        );
        break;

      case 'skills':
        out = (
          <div className="space-y-2 text-xs font-mono">
            {SKILL_CATEGORIES.map((cat) => (
              <div key={cat.category}>
                <p className="text-yellow-400 font-bold">{"// "}{cat.category}</p>
                <div className="pl-4 space-y-0.5 text-slate-300">
                  {cat.skills.map(s => (
                    <div key={s.name} className="flex justify-between max-w-md">
                      <span>• {s.name} ({s.experience})</span>
                      <span className="text-cyan-400 font-bold">{s.confidence}%</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );
        break;

      case 'projects':
        out = (
          <div className="space-y-2 text-xs font-mono">
            <p className="text-yellow-400 font-bold">Production Case Studies:</p>
            {FEATURED_PROJECTS.map((p) => (
              <div key={p.slug} className="p-2 bg-slate-900 border border-slate-800 rounded">
                <span className="text-cyan-400 font-bold">{p.title}</span> ({p.category})
                <p className="text-slate-400">{p.tagline}</p>
                <p className="text-blue-400 text-[11px]">GitHub: {p.githubUrl}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'experience':
        out = (
          <div className="space-y-2 text-xs font-mono text-slate-300">
            {EXPERIENCES.map((exp, idx) => (
              <div key={idx} className="border-l-2 border-blue-500 pl-3">
                <p className="text-cyan-400 font-bold">{exp.role} @ {exp.company}</p>
                <p className="text-slate-500">{exp.period} | {exp.location}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'education':
        out = (
          <div className="space-y-1 text-xs font-mono text-slate-300">
            <p className="text-cyan-400 font-bold">{EDUCATION.degree}</p>
            <p>{EDUCATION.institution} ({EDUCATION.period}) - Grade: {EDUCATION.grade}</p>
            <p className="text-slate-400">Research: {EDUCATION.researchTitle}</p>
          </div>
        );
        break;

      case 'contact':
        out = (
          <div className="text-xs font-mono text-slate-300 space-y-1">
            <p className="text-cyan-400 font-bold">Get In Touch:</p>
            <p>Email: <a href={`mailto:${PROFILE.email}`} className="text-blue-400 underline">{PROFILE.email}</a></p>
            <p>GitHub: {PROFILE.github}</p>
            <p>LinkedIn: {PROFILE.linkedin}</p>
          </div>
        );
        break;

      case 'github':
        window.open(PROFILE.github, '_blank');
        out = <div className="text-xs font-mono text-emerald-400">Opening GitHub profile in new tab...</div>;
        break;

      case 'clear':
        setHistory([]);
        return;

      case '':
        out = null;
        break;

      default:
        out = (
          <div className="text-xs font-mono text-red-400">
            zsh: command not found: {trimmed}. Type <span className="text-yellow-400 font-bold">help</span> for commands.
          </div>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: cmdStr, output: out }]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeCommand(inputCommand);
    setInputCommand('');
  };

  return (
    <section id="terminal" className="relative z-10 py-20">
      <div className="max-w-4xl mx-auto px-4">
        {/* Terminal Window Frame */}
        <div className="rounded-2xl border border-slate-700/80 bg-[#050816] shadow-2xl overflow-hidden font-mono text-sm">
          {/* Top Bar Controls */}
          <div className="bg-[#0f172a] px-4 py-3 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="text-xs font-mono text-slate-400 ml-2">dulanjaya@ceyos-macbook-pro:~</span>
            </div>

            <div className="flex items-center gap-2 text-slate-400 text-xs font-mono">
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span>bash - 80x24</span>
            </div>
          </div>

          {/* Terminal History Container */}
          <div className="p-6 max-h-[480px] overflow-y-auto space-y-4 bg-[#050816]/95">
            {history.map((item, idx) => (
              <div key={idx} className="space-y-1">
                {item.command !== 'welcome' && (
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                    <span className="text-emerald-400">dulanjaya@dev:~$</span>
                    <span className="text-white font-bold">{item.command}</span>
                  </div>
                )}
                {item.output}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Terminal Input Form */}
          <form onSubmit={handleSubmit} className="p-4 bg-slate-900 border-t border-slate-800 flex items-center gap-2 text-xs font-mono">
            <span className="text-emerald-400 font-bold shrink-0">dulanjaya@dev:~$</span>
            <input
              type="text"
              value={inputCommand}
              onChange={(e) => setInputCommand(e.target.value)}
              placeholder="Type command ('help', 'whoami', 'projects', 'clear')..."
              className="w-full bg-transparent text-white placeholder-slate-600 outline-none"
            />
          </form>
        </div>
      </div>
    </section>
  );
};
