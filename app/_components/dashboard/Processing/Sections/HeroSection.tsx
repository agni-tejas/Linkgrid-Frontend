import React from 'react';
import { motion } from 'framer-motion';
import { CircularProgress } from '../UI/CircularProgress';

interface HeroSectionProps {
  progress: number;
  timeLeft: number;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ progress, timeLeft }) => {
  return (
    <div className="relative text-center space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 
                       via-gray-800 to-gray-700 dark:from-white dark:via-gray-100 
                       dark:to-gray-300 bg-clip-text text-transparent">
          Processing Your Invitations
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          We're analyzing and optimizing your network connections to ensure the best 
          possible matches.
        </p>
      </motion.div>

      <div className="flex flex-col items-center justify-center gap-8">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
          className="relative"
        >
          <CircularProgress progress={progress} />
          
          {/* Decorative rings */}
          <div className="absolute inset-0 -m-4">
            <div className="w-full h-full rounded-full border-4 border-gray-100 
                           dark:border-gray-800 animate-pulse" />
          </div>
          <div className="absolute inset-0 -m-8">
            <div className="w-full h-full rounded-full border-2 border-gray-100 
                           dark:border-gray-800 animate-pulse" 
                 style={{ animationDelay: "500ms" }} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="space-y-2 text-center"
        >
          <p className="text-lg font-medium text-gray-900 dark:text-white">
            Estimated Time Remaining
          </p>
          <p className="text-3xl font-bold bg-gradient-to-r from-brand-500 to-brand-600 
                        bg-clip-text text-transparent">
            ~{timeLeft} minutes
          </p>
        </motion.div>
      </div>
    </div>
  );
};