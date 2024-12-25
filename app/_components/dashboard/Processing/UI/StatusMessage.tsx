import React from "react";
import { motion } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

interface StatusMessageProps {
  message: string;
  isActive: boolean;
  delay?: number;
}

export const StatusMessage: React.FC<StatusMessageProps> = ({
  message,
  isActive,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay }}
      className={`flex items-center gap-4 p-6 rounded-2xl backdrop-blur-sm
                  transition-all duration-500 ${
                    isActive
                      ? "bg-gradient-to-r from-brand-500/10 to-brand-600/10 border border-brand-500/20"
                      : "bg-white/50 dark:bg-gray-800/50 border border-gray-200/20 dark:border-gray-700/20"
                  }`}
    >
      <div
        className={`flex-shrink-0 transition-colors duration-500 ${
          isActive ? "text-brand-500" : "text-gray-400"
        }`}
      >
        <CheckCircleIcon className="w-6 h-6" />
      </div>

      <div className="flex-1 min-w-0">
        <p
          className={`font-medium transition-colors duration-500 ${
            isActive
              ? "text-brand-900 dark:text-brand-100"
              : "text-gray-500 dark:text-gray-400"
          }`}
        >
          {message}
        </p>
      </div>

      {isActive && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="flex-shrink-0 w-2 h-2"
        >
          <span className="flex h-2 w-2">
            <span
              className="animate-ping absolute inline-flex h-2 w-2 rounded-full 
                           bg-brand-400 opacity-75"
            />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500" />
          </span>
        </motion.div>
      )}
    </motion.div>
  );
};
