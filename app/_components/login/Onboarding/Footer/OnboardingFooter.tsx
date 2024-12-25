import React from "react";
import { motion } from "framer-motion";
import { ProgressBar } from "./ProgressBar";

interface OnboardingFooterProps {
  progress: number;
  isCompleted: boolean;
  onDashboardClick: () => void;
}

export const OnboardingFooter: React.FC<OnboardingFooterProps> = ({
  progress,
  isCompleted,
  onDashboardClick,
}) => {
  return (
    <div className="space-y-6">
      <ProgressBar progress={progress} />

      <motion.button
        whileHover={isCompleted ? { scale: 1.02 } : {}}
        whileTap={isCompleted ? { scale: 0.98 } : {}}
        onClick={onDashboardClick}
        disabled={!isCompleted}
        className={`w-full px-6 py-3 rounded-xl font-medium text-white
                   transition-all duration-200 ${
                     isCompleted
                       ? "bg-sky-500/50 hover:bg-brand-600 shadow-lg hover:shadow-xl"
                       : "bg-gray-800 cursor-not-allowed"
                   }`}
      >
        Continue
      </motion.button>
    </div>
  );
};
