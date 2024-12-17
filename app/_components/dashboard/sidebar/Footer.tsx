import React from "react";
import { motion } from "framer-motion";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

interface FooterProps {
  isCollapsed?: boolean;
  isDarkMode?: boolean;
  onThemeToggle?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  isCollapsed = false,
  isDarkMode = false,
  onThemeToggle,
}) => {
  return (
    <motion.div
      className="mt-auto pt-2 pb-4"
      initial={false}
      animate={{ width: isCollapsed ? "64px" : "100%" }}
    >
      <div className="border-t border-gray-400 dark:border-slate-800 pt-2 px-4">
        <div className="flex items-center justify-between">
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
          >
            <div
              className="w-12 h-12 rounded-full  
                           flex items-center justify-center "
            >
              <Image
                src="/logowhite.png"
                alt="Dashboard"
                width={520}
                height={520}
                quality={100}
              />
            </div>
            {!isCollapsed && (
              <motion.span
                className="text-2xl font-semibold bg-gradient-to-r from-blue-500 to-indigo-500  dark:from-sky-400 dark:to-blue-400
                           bg-clip-text text-transparent"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
              >
                Linkgrid
              </motion.span>
            )}
          </motion.div>

          {!isCollapsed && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onThemeToggle}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label={
                isDarkMode ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {isDarkMode ? (
                <SunIcon className="w-5 h-5 text-gray-500" />
              ) : (
                <MoonIcon className="w-5 h-5 text-gray-500" />
              )}
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  );
};
