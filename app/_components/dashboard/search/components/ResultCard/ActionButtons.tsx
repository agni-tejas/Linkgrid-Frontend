import React from 'react';
import { motion } from 'framer-motion';
import { ChatBubbleLeftIcon, UserPlusIcon, CalendarIcon } from '@heroicons/react/24/outline';

const buttonVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  hover: { scale: 1.05, backgroundColor: 'var(--brand-50)' },
  tap: { scale: 0.95 }
};

export const ActionButtons: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <motion.button
        variants={buttonVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        whileTap="tap"
        className="p-2 rounded-lg bg-gray-50 text-gray-600 hover:text-brand-600
                 transition-colors duration-200"
        aria-label="Send message"
      >
        <ChatBubbleLeftIcon className="w-5 h-5" />
      </motion.button>
      
      <motion.button
        variants={buttonVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        whileTap="tap"
        className="p-2 rounded-lg bg-gray-50 text-gray-600 hover:text-brand-600
                 transition-colors duration-200"
        aria-label="Schedule intro"
      >
        <CalendarIcon className="w-5 h-5" />
      </motion.button>

      <motion.button
        variants={buttonVariants}
        initial="initial"
        animate="animate"
        whileHover={{ scale: 1.02, backgroundColor: 'var(--brand-600)' }}
        whileTap={{ scale: 0.98 }}
        className="ml-2 px-4 py-2 bg-brand-500 text-white rounded-lg
                 shadow-sm hover:shadow-md transition-all duration-200
                 flex items-center gap-2 font-medium"
      >
        <UserPlusIcon className="w-4 h-4" />
        Connect
      </motion.button>
    </div>
  );
};