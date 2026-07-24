'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
  hoverScale?: boolean;
  onClick?: () => void;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  glow = false,
  hoverScale = true,
  onClick
}) => {
  return (
    <motion.div
      whileHover={hoverScale ? { y: -4, scale: 1.01 } : {}}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      onClick={onClick}
      className={`glass-card p-6 relative overflow-hidden group ${
        glow ? 'glow-effect' : ''
      } ${className}`}
    >
      {/* Subtle top reflection line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent group-hover:via-blue-500/50 transition-all duration-500" />
      
      {children}
    </motion.div>
  );
};
