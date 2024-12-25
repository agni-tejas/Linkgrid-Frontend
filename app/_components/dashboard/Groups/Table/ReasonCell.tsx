import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ReasonCellProps {
  reason: string;
}

export const ReasonCell: React.FC<ReasonCellProps> = ({ reason }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const shouldTruncate = reason.length > 100;

  return (
    <div className="max-w-md">
      <AnimatePresence mode="wait">
        {isExpanded ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-sm text-gray-600 dark:text-gray-300"
          >
            {reason}
            {shouldTruncate && (
              <button
                onClick={() => setIsExpanded(false)}
                className="ml-1 text-brand-500 hover:text-brand-600 text-sm font-medium"
              >
                View Less
              </button>
            )}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-sm text-gray-600 dark:text-gray-300"
          >
            {shouldTruncate ? `${reason.slice(0, 100)}...` : reason}
            {shouldTruncate && (
              <button
                onClick={() => setIsExpanded(true)}
                className="ml-1 text-brand-500 hover:text-brand-600 text-sm font-medium"
              >
                View More
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};