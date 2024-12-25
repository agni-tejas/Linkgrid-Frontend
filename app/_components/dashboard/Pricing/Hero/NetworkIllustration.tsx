import React from 'react';
import { motion } from 'framer-motion';

export const NetworkIllustration: React.FC = () => {
  return (
    <div className="relative w-full h-48 overflow-hidden">
      <svg
        viewBox="0 0 800 200"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Network nodes */}
        {[...Array(10)].map((_, i) => (
          <motion.circle
            key={i}
            cx={100 + i * 70}
            cy={100 + Math.sin(i) * 30}
            r="8"
            fill="url(#nodeGradient)"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
          />
        ))}

        {/* Connection lines */}
        {[...Array(9)].map((_, i) => (
          <motion.line
            key={i}
            x1={108 + i * 70}
            y1={100 + Math.sin(i) * 30}
            x2={170 + i * 70}
            y2={100 + Math.sin(i + 1) * 30}
            stroke="url(#lineGradient)"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.5 }}
            transition={{ delay: i * 0.1, duration: 1 }}
          />
        ))}

        {/* Gradients */}
        <defs>
          <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0EA5E9" />
            <stop offset="100%" stopColor="#0284C7" />
          </linearGradient>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#0284C7" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};