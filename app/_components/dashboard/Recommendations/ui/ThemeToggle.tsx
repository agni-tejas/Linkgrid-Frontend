import React from "react";
import { motion } from "framer-motion";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useTheme } from "../../../../_hooks/useTheme";

export const ThemeToggle: React.FC = () => {
  const { isDark, toggle } = useTheme();

  return (
    <motion.button
      onClick={toggle}
      className="fixed bottom-8 right-8 p-3 rounded-full bg-white dark:bg-gray-800
                 shadow-lg dark:shadow-gray-900/20 backdrop-blur-sm
                 border border-gray-200 dark:border-gray-700
                 text-gray-700 dark:text-gray-300
                 hover:bg-gray-50 dark:hover:bg-gray-700
                 transition-all duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {isDark ? (
        <SunIcon className="w-5 h-5" />
      ) : (
        <MoonIcon className="w-5 h-5" />
      )}
    </motion.button>
  );
};
