"use client";

import React from "react";
import { motion } from "framer-motion";
import { User, Code, Smartphone, Database } from "lucide-react";

export default function About() {
  const highlights = [
    { icon: <Code className="w-6 h-6 text-indigo-400" />, title: "Web Development", desc: "Crafting modern, responsive web apps with React and Next.js." },
    { icon: <Smartphone className="w-6 h-6 text-emerald-400" />, title: "Mobile Apps", desc: "Building cross-platform mobile experiences with React Native." },
    { icon: <Database className="w-6 h-6 text-purple-400" />, title: "Backend Systems", desc: "Designing robust APIs and microservices with Node.js and Spring Boot." },
  ];

  return (
    <section id="about" className="relative">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2 text-primary font-bold mb-4">
            <User className="w-5 h-5" />
            <span className="uppercase tracking-widest text-sm">About Me</span>
          </div>
          <h2 className="text-4xl font-bold font-outfit mb-6">
            A Passionate Developer focused on <span className="text-primary">Scalable Solutions</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-8">
            I am a passionate Full Stack Software Engineer and undergraduate student at Java Institute for Advanced Technology. 
            I specialize in building scalable web applications, mobile apps, and backend systems using modern technologies.
          </p>
          <p className="text-slate-400 text-lg leading-relaxed mb-8">
            I enjoy designing clean user interfaces, developing robust APIs, and building real-world software systems including 
            learning management systems, e-commerce platforms, and mobile applications.
          </p>

          <div className="grid sm:grid-cols-1 gap-4">
            {highlights.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 glass-card">
                <div className="mt-1">{item.icon}</div>
                <div>
                  <h4 className="font-bold font-outfit text-white mb-1">{item.title}</h4>
                  <p className="text-sm text-slate-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="aspect-square rounded-3xl overflow-hidden glass border-4 border-slate-800/50 shadow-2xl relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-transparent group-hover:opacity-0 transition-opacity" />
            <img
              src="https://avatars.githubusercontent.com/u/106922828?s=400&u=4361714f40f1edb532ad88337eb4439f45633155&v=4"
              alt="Developer"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
            />
            {/* Overlay decorations */}
            <div className="absolute bottom-6 left-6 right-6 p-4 glass rounded-2xl border border-white/10">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-xs text-slate-400 font-mono">Status</p>
                  <p className="text-sm font-bold text-emerald-400">Available for Work</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-slate-400 font-mono">Location</p>
                  <p className="text-sm font-bold text-white">Sri Lanka</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative frames */}
          <div className="absolute -z-10 -top-6 -right-6 w-full h-full border-2 border-indigo-500/20 rounded-3xl" />
          <div className="absolute -z-10 -bottom-6 -left-6 w-full h-full border-2 border-emerald-500/20 rounded-3xl" />
        </motion.div>
      </div>
    </section>
  );
}
