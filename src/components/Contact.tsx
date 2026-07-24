"use client";

import React from "react";
import { Mail, Github, Send, MessageSquare } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="glass-card overflow-hidden">
        <div className="grid lg:grid-cols-2">
          {/* Contact Info */}
          <div className="p-8 lg:p-12 bg-slate-800/20">
            <div className="text-primary font-bold flex items-center gap-2 mb-4">
              <MessageSquare className="w-5 h-5" />
              <span className="uppercase tracking-widest text-sm">Get In Touch</span>
            </div>
            <h2 className="text-4xl font-bold font-outfit mb-6">Let&apos;s build something <span className="text-primary">extraordinary</span> together.</h2>
            <p className="text-slate-400 mb-10 text-lg leading-relaxed">
              I&apos;m currently looking for new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
            </p>

            <div className="space-y-6">
              <a 
                href="mailto:dulanjaya15th@gmail.com" 
                className="flex items-center gap-4 group p-4 rounded-2xl hover:bg-slate-800/50 transition-all border border-transparent hover:border-slate-700"
              >
                <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 group-hover:bg-indigo-500 group-hover:text-white transition-all text-indigo-400">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-mono">Mail me at</p>
                  <p className="text-white font-bold">dulanjaya15th@gmail.com</p>
                </div>
              </a>

              <a 
                href="https://github.com/DULANJAYA-LAKRUWAN" 
                target="_blank"
                className="flex items-center gap-4 group p-4 rounded-2xl hover:bg-slate-800/50 transition-all border border-transparent hover:border-slate-700"
              >
                <div className="p-3 rounded-xl bg-slate-700/50 border border-slate-600/50 group-hover:bg-white group-hover:text-slate-900 transition-all text-white">
                  <Github className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-mono">Follow me on</p>
                  <p className="text-white font-bold">https://github.com/DULANJAYA-LAKRUWAN</p>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 lg:p-12">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold font-mono text-slate-500 uppercase mb-2 tracking-widest">Name</label>
                  <input type="text" className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="DulanJaya" />
                </div>
                <div>
                  <label className="block text-xs font-bold font-mono text-slate-500 uppercase mb-2 tracking-widest">Email</label>
                  <input type="email" className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="hello@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold font-mono text-slate-500 uppercase mb-2 tracking-widest">Subject</label>
                <input type="text" className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Project Inquiry" />
              </div>
              <div>
                <label className="block text-xs font-bold font-mono text-slate-500 uppercase mb-2 tracking-widest">Message</label>
                <textarea rows={4} className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="How can I help you?"></textarea>
              </div>
              <button 
                type="submit"
                className="w-full py-4 bg-primary text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-primary-hover transition-all transform hover:scale-[1.02] shadow-xl shadow-indigo-500/20 active:scale-95"
              >
                Send Message <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
