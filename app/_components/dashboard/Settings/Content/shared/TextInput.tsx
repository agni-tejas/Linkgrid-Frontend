import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../../../../_lib/classNames";

interface TextInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: "text" | "email" | "password";
  disabled?: boolean;
}

export const TextInput: React.FC<TextInputProps> = ({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  disabled = false,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
        {label}
      </label>
      <div className="relative">
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          disabled={disabled}
          className={cn(
            "w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-900",
            "border border-gray-200 dark:border-gray-700",
            "text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500",
            "focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500",
            "transition-all duration-200",
            disabled && "opacity-60 cursor-not-allowed"
          )}
        />
        {isFocused && (
          <motion.div
            layoutId="input-focus"
            className="absolute inset-0 rounded-lg ring-2 ring-brand-500/20 pointer-events-none"
          />
        )}
      </div>
    </div>
  );
};
