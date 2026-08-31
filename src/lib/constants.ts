export const PROFILE = {
  name: "Dulanjaya Lakruwan",
  handle: "@dulanjaya",
  avatar: "/images/dulanjaya.jpg",
  title: "Senior Staff Software Engineer & AI System Architect",
  tagline: "Building high-throughput distributed systems, AI-powered applications, and hyper-polished digital products.",
  location: "Sri Lanka / Remote Worldwide",
  email: "devlakruwan@gmail.com",
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
    "Full-Stack Software Engineer",
    "AI Systems Architect",
    "SaaS Platform Builder",
    "Cloud & DevOps Engineer",
    "Technical Consultant"
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
    slug: "juicevibe-lk",
    title: "JuiceVibe.lk - Juice Bar & Operations Platform",
    tagline: "Complete customer web app, authenticated admin portal, and backend order engine",
    description: "A production-grade digital ordering and kitchen management ecosystem built for a premier Sri Lankan juice brand. Features real-time menu management, WhatsApp order triggers, custom add-ons, and live sales analytics.",
    category: "Web Applications",
    featured: true,
    bannerImage: "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?q=80&w=1200&auto=format&fit=crop",
    technologies: ["Next.js", "TypeScript", "Node.js", "Tailwind CSS", "WhatsApp API", "Vercel"],
    githubUrl: "https://github.com/DULANJAYA-LAKRUWAN/JuiceVibe",
    liveUrl: "https://juicevibe.lk/",
    metrics: {
      "Status": "Live Production",
      "Order Dispatch": "< 2s Realtime",
      "Mobile Performance": "100 / 100"
    },
    architectureSummary: "Built with a responsive mobile-first customer storefront integrated with an authenticated admin kitchen dispatch console. Uses real-time order state streams and WhatsApp notification webhooks.",
    challenges: "Providing seamless mobile checkout with custom recipe modifications and instant kitchen slip dispatch during high-rush hours.",
    solution: "Constructed a streamlined one-page cart with local persistence, automated WhatsApp invoice generation, and real-time order status tracking.",
    lessonsLearned: "Direct messaging integration (WhatsApp) delivers 3x higher customer repeat rates in Sri Lankan food & beverage businesses."
  },
  {
    slug: "salon-sidra-luxury",
    title: "Salon Sidra - Luxury Beauty & Booking Platform",
    tagline: "High-converting luxury salon platform with appointment scheduling & service catalog",
    description: "A luxury beauty & wellness web platform featuring an opulent modern aesthetic, interactive service pricing tiers, stylist appointment reservations, and client consultation workflows.",
    category: "Web Applications",
    featured: true,
    bannerImage: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1200&auto=format&fit=crop",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    githubUrl: "https://github.com/DULANJAYA-LAKRUWAN/Salon-Sidra-Luxury",
    liveUrl: "https://salon-sidra-luxury-v1.vercel.app/",
    metrics: {
      "Design Tier": "Luxury Aesthetic",
      "Booking Conversion": "+55% Boost",
      "Lighthouse Score": "99 / 100"
    },
    architectureSummary: "Engineered with modern Next.js and Framer Motion for liquid-smooth micro-interactions. Features a customized dynamic appointment scheduling funnel and responsive service catalog.",
    challenges: "Crafting a luxury brand experience with heavy media assets without sacrificing mobile load speed.",
    solution: "Implemented Next.js Image optimization with responsive WebP transformations and CSS hardware-accelerated animations.",
    lessonsLearned: "High-ticket service businesses require visual elegance, clear pricing transparency, and instant friction-free booking."
  },
  {
    slug: "bizcrm-pro",
    title: "BizCRM Pro - Lead Engine & Instant Site Generator",
    tagline: "SaaS platform discovering local leads and auto-generating high-converting demo websites",
    description: "An automated agency sales engine that scrapes local businesses lacking web presence, manages pipeline stages, and dynamically synthesizes personalized single-page client websites in seconds.",
    category: "Web Applications",
    featured: true,
    bannerImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    technologies: ["Next.js 14", "TypeScript", "MongoDB Atlas", "Tailwind CSS", "Vercel"],
    githubUrl: "https://github.com/DULANJAYA-LAKRUWAN/BizCRM-Pro",
    liveUrl: "https://bizcrm.demo",
    metrics: {
      "Lead Discovery": "1,000+ per batch",
      "Site Gen Latency": "< 1.5s",
      "Client Conversion": "+42% Rate"
    },
    architectureSummary: "Built with Next.js App Router and server actions communicating with MongoDB Atlas. Features a dynamic JSON schema page generator that transforms raw company profiles into responsive landing pages.",
    challenges: "Generating diverse, aesthetically unique landing page templates on the fly without heavy server-side overhead.",
    solution: "Implemented a modular React component registry with dynamic theme token injection and pre-compiled layout blocks.",
    lessonsLearned: "Automating the demo preview dramatically lowers customer acquisition cost (CAC) in agency sales."
  },
  {
    slug: "wedding-invitation-builder",
    title: "Wedding & Event Digital Invitation System",
    tagline: "Interactive digital invitation builder with live RSVP, wish wall, and audio playback",
    description: "A full-scale event SaaS platform featuring animated envelope covers, dynamic themes (Luxe Garden, Vintage Retro, Modern Minimalist), real-time guest RSVP tracking, and WhatsApp sharing.",
    category: "Web Applications",
    featured: true,
    bannerImage: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
    technologies: ["Next.js 16", "React 19", "TypeScript", "Mongoose", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/DULANJAYA-LAKRUWAN/Wedding-Invitation-Builder",
    liveUrl: "https://invites.demo",
    metrics: {
      "Active Templates": "6 Luxury Themes",
      "RSVP Sync Time": "< 50ms",
      "Lighthouse Score": "99 / 100"
    },
    architectureSummary: "Engineered on Next.js 16 and React 19 Server Components. Uses MongoDB for event state management with dedicated dynamic slug endpoints `/e/[slug]` and authenticated admin dashboards.",
    challenges: "Ensuring ultra-smooth mobile opening animations and cross-browser audio background streaming on iOS/Android.",
    solution: "Designed touch-activated user gesture audio triggers and hardware-accelerated CSS envelope transitions.",
    lessonsLearned: "Mobile-first emotional UX creates massive viral sharing loops through WhatsApp and social messaging."
  },
  {
    slug: "futureleaks-studio",
    title: "FutureLeaks Studio - AI Content OS",
    tagline: "Multi-LLM content orchestration platform automating multi-network social distribution",
    description: "An enterprise AI operating system transforming raw trends and ideas into high-retention video scripts, multi-platform captions, and automated publishing workflows across 6 major networks.",
    category: "AI & ML",
    featured: true,
    bannerImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    technologies: ["Turborepo", "Next.js", "OpenAI / Gemini", "Prisma", "PostgreSQL", "BullMQ"],
    githubUrl: "https://github.com/DULANJAYA-LAKRUWAN/FutureLeaks-Studio",
    liveUrl: "https://futureleaks.ai",
    metrics: {
      "Multi-Network": "6 Platforms",
      "Token Cost Reduction": "40%",
      "Architecture Docs": "38 Specs"
    },
    architectureSummary: "Turborepo monorepo with modular micro-packages. Features dynamic model routing, embedding caching, and asynchronous social distribution queues using Redis and BullMQ.",
    challenges: "Handling rate limits, varying character restrictions, and media format constraints across 6 social APIs simultaneously.",
    solution: "Created platform-specific schema adapters and an automated retry matrix with exponential backoff.",
    lessonsLearned: "Centralized prompt engineering handbooks and shared types are vital for reliable multi-model output."
  },
  {
    slug: "ceyskill-marketplace",
    title: "CeySkill - Trusted Skilled Worker Platform",
    tagline: "Hyper-local marketplace connecting households with verified technicians",
    description: "A location-aware service platform for blue-collar trades in Sri Lanka with real-time job dispatch, verified identity audits, in-app chat, and rating analytics.",
    category: "Distributed Systems",
    featured: true,
    bannerImage: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop",
    technologies: ["React Native (Expo)", "NestJS", "PostgreSQL + PostGIS", "Prisma", "WebSockets"],
    githubUrl: "https://github.com/DULANJAYA-LAKRUWAN/CeySkill-Platform",
    liveUrl: "https://ceyskill.lk",
    metrics: {
      "Geo-Query Radius": "< 5km Spatial",
      "Socket Latency": "< 30ms",
      "Worker Verification": "100% KYC"
    },
    architectureSummary: "PostGIS spatial geospatial indexing for real-time proximity matching, connected to NestJS microservices and WebSocket event gateways.",
    challenges: "Delivering real-time worker location updates and dispatch notifications on constrained 3G/4G mobile connections.",
    solution: "Used lightweight binary WebSocket payloads with geofence triggers to minimize mobile battery and data drain.",
    lessonsLearned: "Designing for local emerging markets requires extreme data efficiency and offline-first mobile states."
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
