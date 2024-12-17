import React from "react";
import { motion } from "framer-motion";
import TypingAnimation from "@/components/ui/typing-animation";

export const RelevanceBar: React.FC = () => {
  const relevanceScore = 85;

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-base font-medium text-gray-700">
          <TypingAnimation
            className=" text-black dark:text-[#d3d3d3]"
            text="Top matches"
          />
        </span>
        <span className="text-sm font-semibold text-brand-600 dark:text-sky-400">
          {relevanceScore}% Relevant
        </span>
      </div>

      <div className="h-2 bg-gray-100 dark:bg-stone-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${relevanceScore}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-blue-700 to-sky-400 rounded-full"
        />
      </div>

      <p className="text-xs text-gray-500 dark:text-slate-300">
        Based on profile matching and network analysis
      </p>
    </div>
  );
};
