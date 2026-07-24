'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { CommandPalette } from '@/components/command-palette/CommandPalette';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { TechStackSection } from '@/components/sections/TechStackSection';
import { FeaturedProjectsSection } from '@/components/sections/FeaturedProjectsSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { EducationCertsSection } from '@/components/sections/EducationCertsSection';
import { GitHubDashboardSection } from '@/components/sections/GitHubDashboardSection';
import { BlogSection } from '@/components/sections/BlogSection';
import { AIPlaygroundSection } from '@/components/ai/AIPlaygroundSection';
import { TerminalModeSection } from '@/components/terminal/TerminalModeSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function Home() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  const handleOpenTerminal = () => {
    const termEl = document.getElementById('terminal');
    if (termEl) {
      termEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-[#050816] text-[#F9FAFB] relative selection:bg-blue-600 selection:text-white">
      {/* Top Glass Navigation Header */}
      <Navbar
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
        onToggleTerminal={handleOpenTerminal}
      />

      {/* Global Keyboard Cmd+K Search Modal */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onOpenTerminal={handleOpenTerminal}
      />

      {/* 1. Hero Section */}
      <HeroSection onOpenTerminal={handleOpenTerminal} />

      {/* Subtle Divider */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent my-4" />

      {/* 2. About & Manifesto */}
      <AboutSection />

      {/* 3. Tech Stack Bento Grid */}
      <TechStackSection />

      {/* 4. Featured Projects Case Studies */}
      <FeaturedProjectsSection />

      {/* 5. Career Experience Timeline */}
      <ExperienceSection />

      {/* 6 & 7. Education & Verified Credentials */}
      <EducationCertsSection />

      {/* 8. Live GitHub Dashboard */}
      <GitHubDashboardSection />

      {/* 9. MDX Engineering Blog */}
      <BlogSection />

      {/* 10. Signature Feature: RAG AI Playground */}
      <AIPlaygroundSection />

      {/* 11. Interactive Terminal Shell */}
      <TerminalModeSection />

      {/* 12. Testimonials & Recommendations */}
      <TestimonialsSection />

      {/* 13. Architectural Services Offered */}
      <ServicesSection />

      {/* 14. Contact & Consultation Booking */}
      <ContactSection />

      {/* Footer System Bar */}
      <Footer />
    </main>
  );
}
