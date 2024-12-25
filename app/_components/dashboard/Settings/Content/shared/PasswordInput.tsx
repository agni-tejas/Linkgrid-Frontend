import React, { useState } from "react";
import { motion } from "framer-motion";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { cn } from "../../../../../_lib/classNames";

interface PasswordInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  disabled?: boolean;
}

export const PasswordInput: React.FC<PasswordInputProps> = ({
  label,
  value,
  onChange,
  error,
  disabled,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          disabled={disabled}
          className={cn(
            "w-full px-4 py-2 pr-10 rounded-lg bg-white",
            "border border-gray-200",
            "text-gray-900 placeholder-gray-400",
            "focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500",
            "transition-all duration-200",
            error &&
              "border-red-300 focus:border-red-500 focus:ring-red-500/20",
            disabled && "opacity-60 cursor-not-allowed"
          )}
        />
        <motion.button
          type="button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-2 -translate-y-1/2 p-1
                   text-gray-400 hover:text-gray-600
                   rounded-full hover:bg-gray-100
                   transition-colors"
        >
          {showPassword ? (
            <EyeSlashIcon className="w-4 h-4" />
          ) : (
            <EyeIcon className="w-4 h-4" />
          )}
        </motion.button>
        {isFocused && (
          <motion.div
            layoutId="input-focus"
            className="absolute inset-0 rounded-lg ring-2 ring-brand-500/20 pointer-events-none"
          />
        )}
      </div>
      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
};
