import React from 'react';
import { motion } from 'framer-motion';
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

interface ProcessingFooterProps {
  progress: number;
}

export const ProcessingFooter: React.FC<ProcessingFooterProps> = ({ progress }) => {
  return (
    <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <p className="text-gray-600 dark:text-gray-300">
            Your data is {progress}% processed
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            We'll notify you as soon as everything is ready!
          </p>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center gap-2 px-4 py-2 rounded-lg
                   bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300
                   hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
        >
          <QuestionMarkCircleIcon className="w-5 h-5" />
          Need help? Contact support
        </motion.button>
      </div>
    </div>
  );
};