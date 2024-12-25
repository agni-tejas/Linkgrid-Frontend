import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../../../_lib/classNames";

interface SettingsTabItemProps {
  id: string;
  label: string;
  icon: React.ElementType;
  isActive: boolean;
  onClick: () => void;
}

export const SettingsTabItem: React.FC<SettingsTabItemProps> = ({
  label,
  icon: Icon,
  isActive,
  onClick,
}) => {
  return (
    <motion.button
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={cn(
        "relative px-4 py-2 rounded-lg flex items-center gap-2",
        "transition-colors duration-200",
        isActive
          ? "text-sky-800 dark:text-white"
          : "text-gray-600 dark:text-gray-400 hover:text-sky-500 dark:hover:text-violet-300"
      )}
    >
      <Icon className="w-5 h-5" />
      <span className="text-base font-medium whitespace-nowrap">{label}</span>

      {isActive && (
        <motion.div
          layoutId="activeTab"
          className="absolute inset-0 bg-sky-400/20 dark:bg-violet-600/20 rounded-lg"
          transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
        />
      )}
    </motion.button>
  );
};
