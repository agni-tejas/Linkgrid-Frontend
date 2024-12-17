import React from 'react';
import { LucideIcon } from 'lucide-react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'success' | 'warning' | 'error' | 'info';
  icon?: LucideIcon;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'info',
  icon: Icon,
  className = ''
}) => {
  const baseStyles = "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium border transition-all duration-200";
  
  const variants = {
    success: `
      bg-gradient-to-r from-green-50 to-emerald-50
      text-green-700 border-green-200
      shadow-sm shadow-green-100/50
    `,
    warning: `
      bg-gradient-to-r from-yellow-50 to-amber-50
      text-yellow-700 border-yellow-200
      shadow-sm shadow-yellow-100/50
    `,
    error: `
      bg-gradient-to-r from-red-50 to-rose-50
      text-red-700 border-red-200
      shadow-sm shadow-red-100/50
    `,
    info: `
      bg-gradient-to-r from-blue-50 to-indigo-50
      text-blue-700 border-blue-200
      shadow-sm shadow-blue-100/50
    `
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {Icon && <Icon className="w-4 h-4" />}
      {children}
    </span>
  );
};

export default Badge;