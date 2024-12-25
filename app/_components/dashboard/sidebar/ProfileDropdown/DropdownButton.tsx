import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../../../_lib/classNames";

interface DropdownButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  variant?: "default" | "danger";
}

export const DropdownButton: React.FC<DropdownButtonProps> = ({
  icon,
  label,
  onClick,
  variant = "default",
}) => {
  return (
    <motion.button
      whileHover={{ x: 4 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={cn(
        "w-full flex items-center gap-3 px-4 py-2 text-left text-sm",
        "transition-colors duration-200",
        variant === "default"
          ? "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
          : "text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/10"
      )}
    >
      {icon}
      {label}
    </motion.button>
  );
};
