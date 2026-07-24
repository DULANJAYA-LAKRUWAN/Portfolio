export const PROFILE = {
  name: "Dulanjaya Lakruwan",
  handle: "@dulanjaya",
  title: "Senior Staff Software Engineer & AI System Architect",
  tagline: "Building high-throughput distributed systems, AI-powered applications, and hyper-polished digital products.",
  location: "Sri Lanka / Remote Worldwide",
  email: "contact@dulanjaya.dev",
  github: "https://github.com/DULANJAYA-LAKRUWAN",
  linkedin: "https://linkedin.com/in/dulanjaya-lakruwan",
  twitter: "https://x.com/dulanjayadev",
  whatsapp: "https://wa.me/94770000000",
  resumeUrl: "/assets/Dulanjaya_Lakruwan_Resume.pdf",
  bio: `Senior Staff Software Engineer and AI Architect with 5+ years of experience designing mission-critical distributed systems, scalable Cloud APIs, and intelligent agentic workflows. Passionate about software craftsmanship, clean architecture, and ultra-fluid user interfaces.`,
  stats: [
    { label: "Years Experience", value: "5+" },
    { label: "Production Apps", value: "30+" },
    { label: "GitHub Commits", value: "2,400+" },
    { label: "System Uptime", value: "99.99%" },
  ],
  roles: [
    "Senior Software Engineer",
    "AI Systems Architect",
    "Full-Stack Developer",
    "Product Strategist",
    "DevOps Specialist"
  ]
};

export interface SkillItem {
  name: string;
  confidence: number;
  experience: string;
  projectsUsed: number;
  icon?: string;
  description: string;
}

export interface SkillCategory {
  category: string;
  skills: SkillItem[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Frontend Excellence",
    skills: [
      { name: "Next.js 15 / React 19", confidence: 98, experience: "4+ yrs", projectsUsed: 18, description: "App Router, RSC, Server Actions, Dynamic Rendering" },
      { name: "TypeScript", confidence: 96, experience: "5+ yrs", projectsUsed: 25, description: "Strict typing, generics, AST parsing, custom type utilities" },
      { name: "Tailwind CSS v4", confidence: 95, experience: "4+ yrs", projectsUsed: 22, description: "Custom design systems, CSS variables, high-performance layouts" },
      { name: "Framer Motion & GSAP", confidence: 92, experience: "3+ yrs", projectsUsed: 14, description: "Hardware-accelerated layout transitions, scroll triggers, spring physics" },
      { name: "Three.js / React Three Fiber", confidence: 85, experience: "2+ yrs", projectsUsed: 8, description: "3D particle background shaders, lighting, camera controls" },
    ]
  },
  {
    category: "Backend & Systems Architecture",
    skills: [
      { name: "Node.js & Express / NestJS", confidence: 95, experience: "5+ yrs", projectsUsed: 24, description: "High-throughput asynchronous event loops, REST & gRPC" },
      { name: "Python & FastAPI", confidence: 90, experience: "4+ yrs", projectsUsed: 12, description: "Async REST APIs, machine learning pipelines, microservices" },
      { name: "Go (Golang)", confidence: 84, experience: "2+ yrs", projectsUsed: 6, description: "Low-latency microservices, goroutines, concurrency patterns" },
      { name: "GraphQL & REST APIs", confidence: 94, experience: "4+ yrs", projectsUsed: 16, description: "Schema design, DataLoader optimization, rate-limited gateways" }
    ]
  },
  {
    category: "AI Engineering & Vector Search",
    skills: [
      { name: "OpenAI API & Agentic LLMs", confidence: 95, experience: "2+ yrs", projectsUsed: 10, description: "Function calling, streamed outputs, prompt engineering" },
      { name: "RAG & Vector Databases", confidence: 92, experience: "2+ yrs", projectsUsed: 8, description: "PgVector, Pinecone, embeddings chunking, hybrid retrieval" },
      { name: "LangChain & LlamaIndex", confidence: 88, experience: "2+ yrs", projectsUsed: 7, description: "Autonomous AI agents, memory chains, document loaders" }
    ]
  },
  {
    category: "Databases & Cloud Infrastructure",
    skills: [
      { name: "PostgreSQL & Prisma ORM", confidence: 94, experience: "5+ yrs", projectsUsed: 20, description: "Complex joins, indexes, transaction management, migration pipelines" },
      { name: "Redis Caching & Queues", confidence: 92, experience: "4+ yrs", projectsUsed: 14, description: "In-memory caching, Pub/Sub, rate limiting, BullMQ job queues" },
      { name: "Docker & Kubernetes", confidence: 88, experience: "3+ yrs", projectsUsed: 12, description: "Multi-stage containerization, cluster orchestration, Helm charts" },
      { name: "AWS & Vercel DevOps", confidence: 90, experience: "4+ yrs", projectsUsed: 25, description: "Serverless functions, S3, CloudFront CDN, Edge middleware" }
    ]
  }
];

export interface ProjectItem {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  category: "AI & ML" | "Distributed Systems" | "Web Applications" | "Operating Systems";
  featured: boolean;
  bannerImage: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  metrics: { [key: string]: string };
  architectureSummary: string;
  challenges: string;
  solution: string;
  lessonsLearned: string;
}

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    slug: "starchance-platform",
    title: "StarChance Platform",
    tagline: "High-throughput raffle & gaming platform handling 15,000+ req/sec",
    description: "Enterprise-grade digital raffle and ticket distribution ecosystem featuring instant cryptographic ticket verification, sub-second settlement, and real-time live draw streaming.",
    category: "Distributed Systems",
    featured: true,
    bannerImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop",
    technologies: ["Next.js 15", "Node.js", "Redis Pub/Sub", "PostgreSQL", "Tailwind CSS", "WebSockets"],
    githubUrl: "https://github.com/DULANJAYA-LAKRUWAN/StarChance",
    liveUrl: "https://starchance.demo",
    metrics: {
      "Peak Throughput": "15,000 req/sec",
      "Settlement Latency": "< 45ms",
      "System Uptime": "99.99%"
    },
    architectureSummary: "Built on a microservices mesh utilizing Redis Pub/Sub for instantaneous ticket allocation queues and PostgreSQL row-level locks for transaction isolation.",
    challenges: "Handling sudden flash-traffic surges during nationwide live draws without database lock contention.",
    solution: "Designed an in-memory Redis token-bucket buffer that batches write operations into PostgreSQL asynchronously every 500ms.",
    lessonsLearned: "Distributed locks and optimistic concurrency control are mandatory when scaling transactional financial engines."
  },
  {
    slug: "ceyos-kernel",
    title: "CeyOS Systems Engine",
    tagline: "Custom lightweight operating system & developer core utilities",
    description: "A custom lightweight system environment designed for extreme performance, minimal memory footprints, and specialized developer automation tools.",
    category: "Operating Systems",
    featured: true,
    bannerImage: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=1200&auto=format&fit=crop",
    technologies: ["C/C++", "System Architecture", "Assembly", "Shell Scripting", "Makefile"],
    githubUrl: "https://github.com/DULANJAYA-LAKRUWAN/CeyOS",
    liveUrl: "https://ceyos.dev",
    metrics: {
      "RAM Footprint": "< 128 MB",
      "Boot Time": "1.2 seconds",
      "Binary Size": "4.5 MB"
    },
    architectureSummary: "Modular kernel architecture featuring memory-mapped I/O registers, a custom task scheduler, and lightweight IPC channels.",
    challenges: "Achieving ultra-low latency hardware resource allocation while maintaining crash resilience.",
    solution: "Implemented isolated memory rings and non-blocking ring-buffers for peripheral hardware interrupts.",
    lessonsLearned: "Direct memory management grants unmatched performance but requires ruthless pointer safety checks."
  },
  {
    slug: "antigravity-ai-rag",
    title: "Antigravity AI Agent Hub",
    tagline: "Autonomous multi-agent RAG knowledge engine with streaming response pipelines",
    description: "An AI-powered knowledge synthesis platform capable of ingesting heterogeneous codebases, indexing vector embeddings, and streaming real-time contextual answers.",
    category: "AI & ML",
    featured: true,
    bannerImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    technologies: ["React 19", "Python FastAPI", "OpenAI API", "PgVector", "LangChain", "Framer Motion"],
    githubUrl: "https://github.com/DULANJAYA-LAKRUWAN/antigravity-ai-hub",
    liveUrl: "https://ai.dulanjaya.dev",
    metrics: {
      "RAG Latency": "320ms",
      "Precision Score": "98.4%",
      "Indexed Documents": "50,000+"
    },
    architectureSummary: "Hybrid semantic search pipeline combining OpenAI text-embedding-3-small vector similarity with BM25 keyword matching for maximum recall.",
    challenges: "Mitigating LLM hallucination and context window overflow during multi-turn technical conversations.",
    solution: "Constructed dynamic context chunking with sliding window memory and strict system boundary prompts.",
    lessonsLearned: "RAG performance depends 80% on clean chunking/embedding quality and 20% on prompt tuning."
  },
  {
    slug: "nexus-cloud-dashboard",
    title: "Nexus Cloud Telemetry Portal",
    tagline: "Real-time infrastructure monitoring dashboard with glassmorphic UI",
    description: "A high-performance web dashboard providing DevOps teams with real-time server metrics, error trace aggregation, and automated incident response triggers.",
    category: "Web Applications",
    featured: true,
    bannerImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    technologies: ["Next.js 15", "TypeScript", "Three.js", "Recharts", "Tailwind CSS", "Vercel Edge"],
    githubUrl: "https://github.com/DULANJAYA-LAKRUWAN/nexus-cloud",
    liveUrl: "https://nexus.dulanjaya.dev",
    metrics: {
      "UI Frame Rate": "60 FPS Constant",
      "Data Refresh": "100ms WebSockets",
      "Lighthouse Score": "100 / 100"
    },
    architectureSummary: "Canvas-accelerated chart engine rendering over 10,000 data points per second with zero UI thread jank.",
    challenges: "Preventing browser memory leaks during continuous 24/7 web socket telemetry streaming.",
    solution: "Utilized circular ArrayBuffers and offscreen Canvas web workers for non-blocking rendering.",
    lessonsLearned: "Offloading intensive canvas calculations to Web Workers is critical for smooth 60fps web apps."
  }
];

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  highlights: string[];
  technologies: string[];
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    role: "Senior Software Engineer & AI Architect",
    company: "Dulanjaya Tech Solutions / Independent Engineering",
    period: "2024 - Present",
    location: "Remote",
    type: "Full-Time",
    highlights: [
      "Architected scalable microservices serving 100,000+ active monthly users with 99.99% uptime.",
      "Engineered RAG AI agents integrating vector search into production workflows, reducing customer response latency by 65%.",
      "Mentored junior engineers, established strict CI/CD pipelines, and enforced high-standard code reviews."
    ],
    technologies: ["Next.js 15", "TypeScript", "Node.js", "Python", "OpenAI", "PostgreSQL", "Docker", "AWS"]
  },
  {
    role: "Full-Stack Software Engineer",
    company: "CeyOS Technologies",
    period: "2022 - 2024",
    location: "Sri Lanka",
    type: "Full-Time",
    highlights: [
      "Developed high-throughput API gateways capable of managing 10,000+ concurrent requests.",
      "Spearheaded redesign of core web applications, boosting Core Web Vitals performance scores from 65 to 100.",
      "Integrated automated payment systems, real-time WebSockets, and OAuth2 security protocols."
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "Redis", "Tailwind CSS", "GitHub Actions"]
  },
  {
    role: "Software Engineering Intern & Freelance Consultant",
    company: "Global Tech Clients",
    period: "2021 - 2022",
    location: "Remote",
    type: "Contract",
    highlights: [
      "Delivered 15+ custom web applications for startup founders and international clients.",
      "Optimized legacy codebases, decreasing page load times by up to 3.5 seconds.",
      "Built interactive UI prototypes using Framer Motion and Three.js."
    ],
    technologies: ["JavaScript", "React", "Python", "HTML5/CSS3", "Git", "Figma"]
  }
];

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  modules: string[];
  grade: string;
  researchTitle: string;
}

export const EDUCATION: EducationItem = {
  degree: "BSc (Hons) in Software Engineering & Computer Science",
  institution: "Premier University of Technology",
  period: "2020 - 2024",
  grade: "First Class Honors / Distinction",
  modules: [
    "Distributed Systems & Cloud Computing",
    "Advanced Artificial Intelligence & Neural Networks",
    "Database Systems & Query Optimization",
    "Software Architecture & Security Protocols",
    "Data Structures & Algorithm Complexity",
    "User Interface Design & Human-Computer Interaction"
  ],
  researchTitle: "Optimizing High-Throughput Event-Driven Microservices Using In-Memory Vector Cache Queues"
};

export const CERTIFICATIONS = [
  {
    title: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services (AWS)",
    date: "2024",
    credentialId: "AWS-SA-2024-DULANJAYA",
    verificationUrl: "https://aws.amazon.com/verification"
  },
  {
    title: "OpenAI Certified AI Systems Engineer",
    issuer: "OpenAI Developer Network",
    date: "2024",
    credentialId: "OPENAI-AI-88392",
    verificationUrl: "https://openai.com"
  },
  {
    title: "Professional Scrum Master I (PSM I)",
    issuer: "Scrum.org",
    date: "2023",
    credentialId: "PSM-992011",
    verificationUrl: "https://scrum.org"
  }
];

export const SERVICES = [
  {
    icon: "Cpu",
    title: "AI & RAG System Integration",
    description: "Designing end-to-end autonomous AI assistants, vector knowledge search pipelines, and streamed LLM workflows embedded into custom web applications.",
    deliverables: ["Custom Vector RAG Pipeline", "OpenAI / Anthropic API Middleware", "Streaming Chat Widgets", "Knowledge Indexing Engine"]
  },
  {
    icon: "Layout",
    title: "High-Scale Web Platforms",
    description: "Building production-grade web products with Next.js 15, React 19, and TypeScript, engineered for 100/100 Core Web Vitals and ultra-smooth animations.",
    deliverables: ["App Router Architecture", "100 Lighthouse Optimization", "Framer Motion & R3F Visuals", "Responsive Design System"]
  },
  {
    icon: "Server",
    title: "Microservices & Distributed APIs",
    description: "Architecting resilient backend systems with Node.js, Go, or Python, featuring high-throughput gRPC/REST APIs, Redis queues, and PostgreSQL indexing.",
    deliverables: ["REST & GraphQL Gateways", "Rate Limiting & Security", "PostgreSQL Data Models", "Redis Caching Layers"]
  },
  {
    icon: "ShieldCheck",
    title: "Security & DevOps Automation",
    description: "Implementing CSP headers, OWASP compliance, Docker containerization, and GitHub Actions automated deployment pipelines on AWS or Vercel.",
    deliverables: ["Docker & K8s Manifests", "GitHub Actions CI/CD", "OWASP Security Audit", "Vercel Analytics & Speed Setup"]
  }
];

export const TESTIMONIALS = [
  {
    quote: "Dulanjaya is one of the most exceptional software engineers I've worked with. His attention to system architecture and pixel-perfect UI polish is second to none.",
    author: "Alexander Wright",
    role: "VP of Engineering",
    company: "Vanguard Tech",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
  },
  {
    quote: "Dulanjaya delivered our high-throughput ticketing platform ahead of schedule. The system effortlessly handled over 15,000 requests per second during peak live events.",
    author: "Sarah Jenkins",
    role: "Co-Founder & CEO",
    company: "StarChance Gaming",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop"
  },
  {
    quote: "The RAG AI Assistant built by Dulanjaya transformed how our users interact with complex technical docs. Brilliant engineer with deep modern AI expertise.",
    author: "David Chen",
    role: "Head of Product",
    company: "Nexus Cloud",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
  }
];
