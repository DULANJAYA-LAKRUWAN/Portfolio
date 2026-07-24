"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Folder, Layers } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Saku UniLMS",
    category: "Web",
    desc: "Learning Management System designed for universities with features such as course management, role-based access, and student dashboards.",
    tech: ["React", "Next.js", "Tailwind", "Firebase"],
    github: "https://github.com/",
    demo: "#",
    color: "linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(29, 78, 216, 0.2) 100%)",
    icon: "🎓"
  },
  {
    id: 2,
    title: "Camera Hub",
    category: "E-commerce",
    desc: "Full-stack e-commerce camera store built with React and Firebase featuring authentication, product catalog, and an admin panel.",
    tech: ["React", "Firebase", "Stripe", "Tailwind"],
    github: "https://github.com/",
    demo: "#",
    color: "linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(4, 120, 87, 0.2) 100%)",
    icon: "📷"
  },
  {
    id: 3,
    title: "Todo Application",
    category: "Full Stack",
    desc: "Full-stack Todo application built with Spring Boot and MySQL backend with a React frontend. Demonstrates CRUD operations.",
    tech: ["Spring Boot", "MySQL", "React", "Docker"],
    github: "https://github.com/",
    demo: "#",
    color: "linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(67, 56, 202, 0.2) 100%)",
    icon: "📋"
  },
  {
    id: 4,
    title: "Reader Mobile App",
    category: "Mobile",
    desc: "Mobile reading application built using React Native and TypeScript with modern UI and mobile-first architecture.",
    tech: ["React Native", "TypeScript", "Expo"],
    github: "https://github.com/",
    demo: "#",
    color: "linear-gradient(135deg, rgba(147, 51, 234, 0.2) 0%, rgba(109, 40, 217, 0.2) 100%)",
    icon: "📱"
  },
  {
    id: 5,
    title: "Water Color Sort Game",
    category: "Mobile",
    desc: "Mobile puzzle game developed using React Native and Expo demonstrating complex game logic and interactive UI design.",
    tech: ["React Native", "Expo", "Reanimated"],
    github: "https://github.com/",
    demo: "#",
    color: "linear-gradient(135deg, rgba(236, 72, 153, 0.2) 0%, rgba(190, 24, 74, 0.2) 100%)",
    icon: "🧪"
  },
  {
    id: 6,
    title: "Online Library System",
    category: "Backend",
    desc: "Library system built using PHP with features including book catalog management, search functionality, and admin controls.",
    tech: ["PHP", "MySQL", "Bootstrap"],
    github: "https://github.com/",
    demo: "#",
    color: "linear-gradient(135deg, rgba(249, 115, 22, 0.2) 0%, rgba(194, 65, 12, 0.2) 100%)",
    icon: "📚"
  },
  {
    id: 7,
    title: "Bookstore System",
    category: "Full Stack",
    desc: "Full-stack bookstore application with CRUD operations, authentication, and search features using Node.js and JavaScript.",
    tech: ["Node.js", "Express", "MongoDB"],
    github: "https://github.com/",
    demo: "#",
    color: "linear-gradient(135deg, rgba(6, 182, 212, 0.2) 0%, rgba(9, 79, 114, 0.2) 100%)",
    icon: "📖"
  }
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = React.useState("All");
  const [projectsList, setProjectsList] = React.useState(projects);
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
    const localData = localStorage.getItem("dl_portfolio");
    if (localData) {
      try {
        const parsed = JSON.parse(localData);
        if (Array.isArray(parsed) && parsed.length > 0) {
          const mapped = parsed.map((p: any, idx: number) => {
            const tech = p.tags
              ? p.tags.split(",").map((t: string) => t.trim()).filter(Boolean)
              : [];
            
            let cat = p.category || "Web";
            // Normalize categories to capitalize them
            cat = cat.charAt(0).toUpperCase() + cat.slice(1);
            if (cat === "Fullstack" || cat === "Full stack") cat = "Full Stack";
            
            return {
              id: p.id || `local-${idx}`,
              title: p.title,
              category: cat,
              desc: p.description || "",
              tech: tech,
              github: p.github || "#",
              demo: p.url || "#",
              color: p.bannerColor || "linear-gradient(135deg, rgba(147, 51, 234, 0.2) 0%, rgba(59, 130, 246, 0.2) 100%)",
              icon: p.icon || "💼"
            };
          });
          setProjectsList(mapped);
        }
      } catch (err) {
        console.error("Error reading projects from local storage:", err);
      }
    }
  }, []);

  const categories = React.useMemo(() => {
    const list = ["All", "Web", "Mobile", "Full Stack", "Backend"];
    projectsList.forEach(p => {
      if (!list.includes(p.category)) {
        list.push(p.category);
      }
    });
    return list;
  }, [projectsList]);

  const filteredProjects = activeCategory === "All" 
    ? projectsList 
    : projectsList.filter(p => p.category === activeCategory || (activeCategory === "Full Stack" && (p.category === "Full Stack" || p.category === "E-commerce")));


  return (
    <section id="projects" className="relative">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="flex items-center gap-2 text-primary font-bold mb-4">
            <Layers className="w-5 h-5" />
            <span className="uppercase tracking-widest text-sm">Portfolio</span>
          </div>
          <h2 className="text-4xl font-bold font-outfit">Selected <span className="text-primary">Projects</span></h2>
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                activeCategory === cat 
                ? "bg-primary text-white shadow-lg shadow-indigo-500/20" 
                : "glass text-slate-400 hover:text-white hover:bg-slate-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <motion.div 
        layout
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="glass-card flex flex-col group h-full cursor-pointer overflow-hidden border-white/5"
            >
              {/* Project Image Placeholder / Decorative */}
              <div 
                className="h-48 -mx-6 -mt-6 mb-6 flex items-center justify-center relative overflow-hidden transition-all duration-500 bg-slate-900/60 border-b border-white/5"
                style={{
                  background: project.color && (project.color.includes('linear-gradient') || project.color.includes('rgba') || project.color.startsWith('#'))
                    ? project.color
                    : 'linear-gradient(135deg, rgba(30, 41, 59, 0.4) 0%, rgba(15, 23, 42, 0.6) 100%)'
                }}
              >
                 {(!project.color || !project.color.includes('linear-gradient')) && (
                   <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-emerald-500/10" />
                 )}
                 {project.icon ? (
                   <span className="text-5xl select-none filter drop-shadow-[0_4px_12px_rgba(255,255,255,0.15)] group-hover:scale-110 transition-transform duration-500">{project.icon}</span>
                 ) : (
                   <Folder className="w-12 h-12 text-slate-700 group-hover:text-indigo-500/50 transition-colors duration-500 group-hover:scale-110" />
                 )}
                 
                 <div className="absolute top-4 right-4 flex gap-2">
                   <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 glass rounded-full hover:bg-slate-700 transition-colors">
                     <Github className="w-4 h-4 text-white" />
                   </a>
                   <a href={project.demo} target="_blank" rel="noopener noreferrer" className="p-2 glass rounded-full hover:bg-slate-700 transition-colors">
                     <ExternalLink className="w-4 h-4 text-white" />
                   </a>
                 </div>

                 <div className="absolute bottom-4 left-4">
                    <span className="px-2 py-1 rounded-md bg-slate-900/80 text-[10px] uppercase font-bold tracking-widest border border-white/5 text-slate-400">
                      {project.category}
                    </span>
                 </div>
              </div>

              <h3 className="text-xl font-bold font-outfit text-white mb-3 group-hover:text-indigo-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                {project.desc}
              </p>

              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map(t => (
                    <span key={t} className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">
                      #{t}
                    </span>
                  ))}
                </div>
                
                <button className="flex items-center gap-2 text-indigo-400 font-bold text-xs uppercase tracking-widest group-hover:gap-3 transition-all">
                  Read Case Study <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
