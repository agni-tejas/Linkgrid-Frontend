import React from "react";
import { motion } from "framer-motion";

export const Header: React.FC = () => {
  return (
    <header className="text-center mb-12">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-6xl font-bold bg-gradient-to-r from-black to-sky-700 dark:from-white dark:to-sky-300
                   bg-clip-text text-transparent mb-4"
      >
        AI Persona Connections
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-lg text-gray-600 dark:text-slate-300 mb-8"
      >
        Explore your network and start conversations with AI personas
      </motion.p>
    </header>
  );
};
