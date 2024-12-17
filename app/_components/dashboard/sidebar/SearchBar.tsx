import React, { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';
import { useFloating, FloatingPortal, offset, flip } from '@floating-ui/react';

export const SearchBar: React.FC<{ isCollapsed?: boolean }> = ({ isCollapsed = false }) => {
  const [isFocused, setIsFocused] = useState(false);
  const { refs, floatingStyles } = useFloating({
    placement: 'bottom-start',
    middleware: [offset(4), flip()],
  });

  if (isCollapsed) {
    return (
      <motion.button
        className="w-10 h-10 mx-auto flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <MagnifyingGlassIcon className="w-5 h-5 text-gray-500" />
      </motion.button>
    );
  }

  return (
    <div className="px-4 mb-4" ref={refs.setReference}>
      <div className="relative group">
        <MagnifyingGlassIcon 
          className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 
                     transition-colors group-focus-within:text-brand-500" 
        />
        <input
          type="text"
          placeholder="Search people, groups, or content..."
          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 
                     bg-gray-50 focus:bg-white
                     focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500
                     transition-all duration-200"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <AnimatePresence>
          {isFocused && (
            <FloatingPortal>
              <div ref={refs.setFloating} style={floatingStyles}>
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="w-[calc(100%-2rem)] bg-white rounded-lg shadow-lg border border-gray-100 p-2"
                >
                  <div className="text-sm text-gray-500 p-2">Start typing to search...</div>
                </motion.div>
              </div>
            </FloatingPortal>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};