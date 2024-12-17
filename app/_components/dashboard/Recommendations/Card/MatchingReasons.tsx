import React from "react";
import { motion } from "framer-motion";

interface MatchingReasonsProps {
  reasons: string[];
}

export const MatchingReasons: React.FC<MatchingReasonsProps> = ({
  reasons,
}) => {
  return (
    <div className="space-y-3">
      <h4 className="text-base font-medium text-gray-700 dark:text-gray-50">
        Common Interests:
      </h4>
      <ul className="space-y-2">
        {reasons.map((reason, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start gap-2"
          >
            <span
              className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r 
                           from-brand-400 to-brand-500 flex-shrink-0"
            />
            <span className="text-sm text-gray-600 dark:text-slate-300">
              {reason}
            </span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};
