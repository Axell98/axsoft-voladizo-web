'use client';

import * as React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'gold';
  size?: 'sm' | 'md' | 'lg';
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}: ButtonProps) {
  const base = 'inline-flex items-center justify-center rounded-full font-bold transition-all active:scale-95 cursor-pointer';
  const variants = {
    primary: 'bg-[#0d59b2] text-white hover:bg-[#094182] shadow-md hover:shadow-lg',
    secondary: 'bg-white/10 text-white hover:bg-white/20 border border-white/20',
    outline: 'border-2 border-[#0d59b2] text-[#0d59b2] hover:bg-[#0d59b2] hover:text-white',
    gold: 'bg-amber-400 text-slate-900 hover:bg-amber-300 shadow-md hover:shadow-lg',
  };
  const sizes = {
    sm: 'px-4 py-1.5 text-xs',
    md: 'px-6 py-2.5 text-sm',
    lg: 'px-8 py-3.5 text-base',
  };

  return (
    <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  );
}
