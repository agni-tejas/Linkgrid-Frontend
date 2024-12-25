import React from 'react';
import { motion } from 'framer-motion';
import { SparklesIcon } from '@heroicons/react/24/outline';

export const PricingCTA: React.FC = () => {
  return (
    <div className="relative py-16">
      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-500/10 
                       to-purple-500/10 rounded-3xl" />
      </div>

      <div className="max-w-3xl mx-auto text-center space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-gray-900 dark:text-white"
        >
          Unlock the power of AI-driven networking today!
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-600 dark:text-gray-300"
        >
          Join thousands of professionals who are already leveraging our platform 
          to build meaningful connections.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r 
                   from-brand-500 to-brand-600 text-white font-medium rounded-xl
                   shadow-lg shadow-brand-500/25 hover:shadow-xl
                   hover:shadow-brand-500/30 transition-all duration-200"
        >
          <SparklesIcon className="w-5 h-5" />
          Get Started Now
        </motion.button>
      </div>
    </div>
  );
};