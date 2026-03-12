"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, Layout, Server, Database, Wrench, Smartphone, Code2 } from "lucide-react";

const skillGroups = [
  {
    title: "Frontend",
    icon: <Layout className="w-5 h-5" />,
    skills: ["React", "React Native", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "JavaScript", "TypeScript", "Expo"],
  },
  {
    title: "Backend",
    icon: <Server className="w-5 h-5" />,
    skills: ["Node.js", "NestJS", "Spring Boot", "PHP", "Firebase", "REST API"],
  },
  {
    title: "Databases",
    icon: <Database className="w-5 h-5" />,
    skills: ["MongoDB", "MySQL", "Firestore"],
  },
  {
    title: "Tools & Others",
    icon: <Wrench className="w-5 h-5" />,
    skills: ["Git", "GitHub", "Postman", "VS Code", "UI/UX Design", "Full Stack Architecture"],
  }
];

export default function Skills() {
  return (
    <section id="skills" className="relative">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-2 text-primary font-bold mb-4"
        >
          <Code2 className="w-5 h-5" />
          <span className="uppercase tracking-widest text-sm">Skills & Tech Stack</span>
        </motion.div>
        <h2 className="text-4xl font-bold font-outfit mb-4">My <span className="text-primary">Technical Arsenal</span></h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          I use a wide variety of modern tools and technologies to build high-quality applications that are both fast and scalable.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillGroups.map((group, idx) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="glass-card flex flex-col h-full"
          >
            <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 w-fit mb-6">
              <div className="text-indigo-400">
                {group.icon}
              </div>
            </div>
            <h3 className="text-xl font-bold font-outfit mb-6 text-white">{group.title}</h3>
            <div className="flex flex-wrap gap-2 mt-auto">
              {group.skills.map(skill => (
                <span 
                  key={skill}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-slate-800/50 border border-slate-700 text-slate-300 hover:border-primary transition-colors hover:text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
