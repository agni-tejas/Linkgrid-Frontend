import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../../../../_lib/classNames";

interface ToggleProps {
  id: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
}

export const Toggle: React.FC<ToggleProps> = ({
  id,
  checked,
  onChange,
  disabled = false,
}) => {
  return (
    <motion.button
      type="button"
      role="switch"
      aria-checked={checked}
      id={id}
      onClick={() => !disabled && onChange(!checked)}
      className={cn(
        "relative inline-flex h-6 w-11 items-center rounded-full transition-colors",
        checked ? "bg-brand-500" : "bg-gray-200",
        disabled && "opacity-50 cursor-not-allowed"
      )}
      whileTap={{ scale: 0.95 }}
    >
      <span className="sr-only">Toggle {id}</span>
      <motion.span
        layout
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className={cn(
          "inline-block h-4 w-4 transform rounded-full bg-white shadow-sm",
          "transition-transform",
          checked ? "translate-x-6" : "translate-x-1"
        )}
      />
    </motion.button>
  );
};
