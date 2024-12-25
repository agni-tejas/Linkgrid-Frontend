import React from 'react';
import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/outline';
import { theme } from '../styles/theme';

interface StepNumberProps {
  number: number;
  isCompleted: boolean;
}

export const StepNumber: React.FC<StepNumberProps> = ({ number, isCompleted }) => {
  return (
    <motion.div
      className={`relative w-12 h-12 rounded-xl flex items-center justify-center
                 ${isCompleted 
                   ? 'bg-gradient-to-br from-green-400 to-green-500 text-white' 
                   : 'bg-gradient-to-br from-brand-50 to-brand-100 text-brand-600'}`}
      animate={isCompleted ? { scale: [1, 1.2, 1] } : {}}
      transition={theme.animation.spring}
    >
      {isCompleted ? (
        <CheckIcon className="w-6 h-6" />
      ) : (
        <span className="text-xl font-semibold">{number}</span>
      )}
      
      {/* Decorative ring */}
      <motion.div 
        className={`absolute inset-0 rounded-xl ring-2 ring-inset
                    ${isCompleted ? 'ring-green-400/20' : 'ring-brand-400/20'}`}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ ...theme.animation.spring, repeat: Infinity, repeatDelay: 2 }}
      />
    </motion.div>
  );
};