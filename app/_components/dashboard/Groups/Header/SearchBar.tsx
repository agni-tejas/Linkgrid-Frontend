import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  placeholder = 'Search...',
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative">
      <MagnifyingGlassIcon 
        className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5
                   transition-colors duration-200 ${
                     isFocused ? 'text-brand-500' : 'text-gray-400'
                   }`}
      />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={placeholder}
        className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200
                 dark:border-gray-700 bg-white dark:bg-gray-800
                 focus:outline-none focus:ring-2 focus:ring-brand-500/20
                 focus:border-brand-500 transition-all"
      />
      {isFocused && (
        <motion.div
          layoutId="search-focus"
          className="absolute inset-0 rounded-xl ring-2 ring-brand-500/20 pointer-events-none"
        />
      )}
    </div>
  );
};