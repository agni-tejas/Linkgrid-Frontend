import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { theme } from '../styles/theme';

interface DashboardButtonProps {
  isCompleted: boolean;
  onClick: () => void;
}

export const DashboardButton: React.FC<DashboardButtonProps> = ({
  isCompleted,
  onClick,
}) => {
  return (
    <motion.button
      whileHover={isCompleted ? { scale: 1.02, y: -1 } : {}}
      whileTap={isCompleted ? { scale: 0.98 } : {}}
      onClick={onClick}
      disabled={!isCompleted}
      className={`group w-full px-6 py-4 rounded-xl font-medium text-white
                 transition-all duration-300 relative overflow-hidden ${
                   isCompleted
                     ? 'bg-gradient-to-r from-brand-500 to-brand-600 shadow-lg shadow-brand-500/25'
                     : 'bg-gray-200 cursor-not-allowed'
                 }`}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        Go to Dashboard
        <ArrowRightIcon className={`w-5 h-5 transition-transform duration-300
                                ${isCompleted ? 'group-hover:translate-x-1' : ''}`} />
      </span>
      
      {isCompleted && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-brand-600 to-brand-700"
          initial={{ x: '100%' }}
          whileHover={{ x: 0 }}
          transition={theme.animation.spring}
        />
      )}
    </motion.button>
  );
};