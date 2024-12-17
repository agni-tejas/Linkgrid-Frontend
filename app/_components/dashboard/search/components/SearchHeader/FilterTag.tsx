import React from 'react';
import { motion } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface FilterTagProps {
  label: string;
  onRemove: () => void;
}

export const FilterTag: React.FC<FilterTagProps> = ({ label, onRemove }) => {
  return (
    <motion.span
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full
               bg-gradient-to-r from-gray-50 to-gray-100
               text-sm text-gray-700 shadow-sm hover:shadow-md
               transition-all duration-200"
    >
      {label}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onRemove}
        className="p-0.5 hover:bg-gray-200 rounded-full transition-colors"
        aria-label={`Remove ${label} filter`}
      >
        <XMarkIcon className="w-4 h-4" />
      </motion.button>
    </motion.span>
  );
};