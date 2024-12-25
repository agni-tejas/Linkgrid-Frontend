import React from 'react';
import { motion } from 'framer-motion';

export const OnboardingHeader: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center space-y-4"
    >
      <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 
                     bg-clip-text text-transparent">
        Welcome to LinkGrid!
      </h1>
      <p className="text-xl text-gray-600">
        Complete these quick steps to set up your account and start connecting.
      </p>
    </motion.div>
  );
};