"use client";

import React from "react";
import Link from "next/link";
import { Github, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-900 bg-slate-950/50 backdrop-blur-sm py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="text-center md:text-left">
            <Link href="/" className="text-2xl font-bold font-outfit tracking-tight mb-2 inline-block">
              DL<span className="text-primary">.</span>
            </Link>
            <p className="text-slate-500 max-w-sm">
              Full Stack Software Engineer building scalable and modern digital experiences.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex items-center gap-6">
              <a href="https://github.com/DULANJAYA-LAKRUWAN" className="text-slate-500 hover:text-white transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="mailto:dulanjaya15th@gmail.com" className="text-slate-500 hover:text-white transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
            <button 
              onClick={scrollToTop}
              className="p-3 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-all flex items-center justify-center group"
            >
              <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono tracking-widest text-slate-600 uppercase">
          <p>© {new Date().getFullYear()} DulanJaya Lakruwan. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-primary">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
