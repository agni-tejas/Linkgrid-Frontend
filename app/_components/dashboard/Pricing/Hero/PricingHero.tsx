import React from "react";
import { motion } from "framer-motion";

export const PricingHero: React.FC = () => {
  return (
    <div className="relative pt-16  text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto space-y-6"
      >
        <h1
          className="text-6xl font-bold tracking-tight bg-gradient-to-b
                     from-gray-900 via-gray-800 to-gray-700
                     dark:from-white dark:via-teal-500 dark:to-sky-700
                     bg-clip-text text-transparent"
        >
          Upgrade your plan
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
          Choose the Perfect Plan for Your Networking Goals.
        </p>
      </motion.div>
    </div>
  );
};
