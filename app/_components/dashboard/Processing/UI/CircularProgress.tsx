import React from 'react';
import { motion } from 'framer-motion';

interface CircularProgressProps {
  progress: number;
}

export const CircularProgress: React.FC<CircularProgressProps> = ({ progress }) => {
  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative w-48 h-48">
      <svg className="w-full h-full transform -rotate-90">
        {/* Background circle */}
        <circle
          cx="96"
          cy="96"
          r={radius}
          stroke="currentColor"
          strokeWidth="4"
          fill="none"
          className="text-gray-100 dark:text-gray-800"
        />
        
        {/* Progress circle */}
        <motion.circle
          cx="96"
          cy="96"
          r={radius}
          stroke="url(#progress-gradient)"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          style={{ strokeDasharray: circumference }}
          className="drop-shadow-lg"
        />

        {/* Gradient definition */}
        <defs>
          <linearGradient id="progress-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0EA5E9" />
            <stop offset="50%" stopColor="#0284C7" />
            <stop offset="100%" stopColor="#0369A1" />
          </linearGradient>
        </defs>
      </svg>

      {/* Percentage text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-4xl font-bold bg-gradient-to-r from-brand-500 
                      to-brand-600 bg-clip-text text-transparent">
          {progress}%
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400">Complete</span>
      </div>
    </div>
  );
};