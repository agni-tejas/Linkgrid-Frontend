import React from "react";
import { motion } from "framer-motion";
import { theme } from "../styles/theme";

export const WelcomeBanner: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-500/10 to-brand-600/10 p-8"
    >
      <div className="relative z-10">
        <motion.h1
          className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 
                     bg-clip-text text-transparent tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Welcome to LinkGrid!
        </motion.h1>
        <motion.p
          className="mt-4 text-xl text-gray-600 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Complete these quick steps to set up your account and start
          connecting.
        </motion.p>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -right-8 -top-8 w-64 h-64 bg-red-400/20 rounded-full blur-3xl" />
        <div className="absolute -left-8 -bottom-8 w-48 h-48 bg-indigo-600/20 rounded-full blur-2xl" />
      </div>
    </motion.div>
  );
};
