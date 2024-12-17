import React from "react";
import { motion } from "framer-motion";

interface MatchPercentageRingProps {
  percentage: number;
}

export const MatchPercentageRing: React.FC<MatchPercentageRingProps> = ({
  percentage,
}) => {
  const radius = 16;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="absolute -bottom-2 -right-2">
      <div className="relative w-9 h-9 rounded-full bg-slate-100 dark:bg-stone-900">
        <svg className="w-full h-full transform  -rotate-90">
          <circle cx="18" cy="18" r={radius} strokeWidth="3" fill="none" />
          <motion.circle
            cx="18"
            cy="18"
            r={radius}
            stroke="url(#gradient)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            style={{ strokeDasharray: circumference }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#42c3ff" />
              <stop offset="100%" stopColor="#42c3ff" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs font-semibold text-gray-700 dark:text-slate-300">
            {percentage}%
          </span>
        </div>
      </div>
    </div>
  );
};
