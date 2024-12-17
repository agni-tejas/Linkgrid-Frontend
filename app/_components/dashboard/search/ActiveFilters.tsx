import React from 'react';
import { motion } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface ActiveFiltersProps {
  filters: string[];
  onRemove: (filter: string) => void;
}

export const ActiveFilters: React.FC<ActiveFiltersProps> = ({ filters, onRemove }) => {
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {filters.map((filter) => (
        <motion.span
          key={filter}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gray-100
                   text-sm text-gray-700 hover:bg-gray-200 transition-colors"
        >
          {filter}
          <button
            onClick={() => onRemove(filter)}
            className="p-0.5 hover:bg-gray-300 rounded-full transition-colors"
            aria-label={`Remove ${filter} filter`}
          >
            <XMarkIcon className="w-4 h-4" />
          </button>
        </motion.span>
      ))}
    </div>
  );
};