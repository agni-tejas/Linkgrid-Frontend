import React from "react";
import { motion } from "framer-motion";

export const SkeletonCard: React.FC = () => {
  return (
    <div
      className="bg-white dark:bg-gray-800 rounded-xl p-6 space-y-6
                   border border-gray-100 dark:border-gray-700"
    >
      <div className="flex items-start gap-4">
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-700"
        />
        <div className="flex-1 space-y-2">
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="h-4 w-2/3 bg-gray-200 dark:bg-gray-700 rounded"
          />
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.1 }}
            className="h-3 w-1/3 bg-gray-200 dark:bg-gray-700 rounded"
          />
        </div>
      </div>

      <div className="space-y-2">
        {[1, 2].map((i) => (
          <motion.div
            key={i}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
            className="h-3 w-full bg-gray-200 dark:bg-gray-700 rounded"
          />
        ))}
      </div>

      <div className="flex gap-3">
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="h-10 flex-1 bg-gray-200 dark:bg-gray-700 rounded-lg"
        />
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.1 }}
          className="h-10 w-24 bg-gray-200 dark:bg-gray-700 rounded-lg"
        />
      </div>
    </div>
  );
};
