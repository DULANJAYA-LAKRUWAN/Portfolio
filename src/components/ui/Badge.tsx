'use client';

import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'success';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = ''
}) => {
  const variantStyles = {
    primary: 'bg-blue-600/15 text-blue-400 border-blue-500/30',
    secondary: 'bg-purple-600/15 text-purple-400 border-purple-500/30',
    accent: 'bg-cyan-600/15 text-cyan-400 border-cyan-500/30',
    outline: 'bg-slate-800/40 text-slate-300 border-slate-700/60',
    success: 'bg-emerald-600/15 text-emerald-400 border-emerald-500/30'
  };

  const sizeStyles = {
    sm: 'text-xs px-2.5 py-0.5 font-mono',
    md: 'text-sm px-3 py-1 font-medium'
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border backdrop-blur-md transition-colors duration-200 ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </span>
  );
};
