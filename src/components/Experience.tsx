"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";

const experience = [
  {
    role: "Independent Software Developer",
    company: "Freelance",
    period: "Mar 2023 - Present",
    desc: "Developed multiple full-stack web applications, mobile apps, APIs, and system architectures as personal and academic projects. Specialized in React, Node.js, and Spring Boot."
  }
];

const education = [
  {
    degree: "Undergraduate – Software Engineering / Information Technology",
    school: "Java Institute for Advanced Technology",
    desc: "Currently pursuing a degree with a focus on enterprise software development, database design, and advanced algorithms."
  }
];

export default function ExperienceEducation() {
  return (
    <section id="experience" className="relative">
      <div className="grid lg:grid-cols-2 gap-16">
        {/* Experience Part */}
        <div>
          <div className="flex items-center gap-2 text-primary font-bold mb-8">
            <Briefcase className="w-5 h-5" />
            <span className="uppercase tracking-widest text-sm">Experience</span>
          </div>
          
          <div className="space-y-12">
            {experience.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative pl-8 border-l-2 border-slate-800"
              >
                {/* Dot */}
                <div className="absolute top-0 -left-[9px] w-4 h-4 rounded-full bg-primary border-4 border-slate-950" />
                
                <div className="flex items-center gap-2 text-indigo-400 text-sm font-bold mb-2">
                  <Calendar className="w-3 h-3" />
                  {item.period}
                </div>
                
                <h3 className="text-2xl font-bold font-outfit text-white mb-1">
                  {item.role}
                </h3>
                <p className="text-slate-400 font-medium mb-4">{item.company}</p>
                <p className="text-slate-500 leading-relaxed max-w-lg">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Part */}
        <div id="education">
          <div className="flex items-center gap-2 text-emerald-400 font-bold mb-8">
            <GraduationCap className="w-5 h-5" />
            <span className="uppercase tracking-widest text-sm">Education</span>
          </div>
          
          <div className="space-y-12">
            {education.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-card"
              >
                <h3 className="text-2xl font-bold font-outfit text-white mb-2">
                  {item.degree}
                </h3>
                <p className="text-emerald-400 font-bold mb-4">{item.school}</p>
                <p className="text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
