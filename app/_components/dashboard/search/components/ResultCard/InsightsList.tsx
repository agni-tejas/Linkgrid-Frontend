import React from 'react';
import { motion } from 'framer-motion';

interface InsightsListProps {
  insights: string[];
}

export const InsightsList: React.FC<InsightsListProps> = ({ insights }) => {
  return (
    <div className="mt-4 space-y-2">
      {insights.map((insight, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex items-center gap-2"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-brand-400 to-brand-500" />
          <p className="text-sm text-gray-600">{insight}</p>
        </motion.div>
      ))}
    </div>
  );
};