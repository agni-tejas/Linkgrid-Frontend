import React from "react";
import { motion } from "framer-motion";

interface AnimatedCheckmarkProps {
  className?: string;
}

export const AnimatedCheckmark: React.FC<AnimatedCheckmarkProps> = ({
  className = "",
}) => {
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { type: "spring", duration: 0.8, bounce: 0.2 },
        opacity: { duration: 0.2 },
      },
    },
  };

  const circleVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className={`relative ${className}`}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-full bg-green-500/20 blur-md" />

      {/* SVG container */}
      <motion.div variants={circleVariants} className="relative">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Background circle */}
          <motion.circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="2"
            className="text-green-500"
            variants={circleVariants}
          />

          {/* Checkmark path */}
          <motion.path
            d="M8 12.5L10.5 15L16 9"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
            variants={pathVariants}
          />

          {/* Particle effects */}
          <g className="animate-ping-slow opacity-50">
            <circle
              cx="12"
              cy="2"
              r="1"
              fill="currentColor"
              className="text-green-300"
            />
            <circle
              cx="22"
              cy="12"
              r="1"
              fill="currentColor"
              className="text-green-300"
            />
            <circle
              cx="12"
              cy="22"
              r="1"
              fill="currentColor"
              className="text-green-300"
            />
            <circle
              cx="2"
              cy="12"
              r="1"
              fill="currentColor"
              className="text-green-300"
            />
          </g>
        </svg>
      </motion.div>
    </motion.div>
  );
};
