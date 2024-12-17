import React from "react";
import { motion } from "framer-motion";
import {
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
} from "@heroicons/react/24/outline";
import { useSearchAnimation } from "./useSearchAnimation";

interface SearchSectionProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const SearchSection: React.FC<SearchSectionProps> = ({
  searchQuery,
  onSearchChange,
}) => {
  const { containerRef, isExpanded, toggleExpand } = useSearchAnimation();

  return (
    <motion.div
      ref={containerRef}
      initial={false}
      animate={isExpanded ? "expanded" : "collapsed"}
      className="relative mb-8"
    >
      <div className="relative max-w-2xl mx-auto">
        <motion.div
          className="relative bg-white dark:bg-stone-900 rounded-2xl shadow-lg shadow-blue-400/60 dark:shadow-sky-400/40 ring-1 ring-gray-100/50 dark:ring-sky-300/50 overflow-hidden"
          variants={{
            expanded: { height: "auto" },
            collapsed: { height: "64px" },
          }}
        >
          <div className="flex items-center px-4 h-16">
            <MagnifyingGlassIcon className="w-6 h-6 text-blue-400 dark:text-sky-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search AI personas by name, expertise, or interests..."
              className="flex-1 ml-3 text-base text-gray-900 dark:text-gray-200  placeholder-gray-400 dark:placeholder-slate-400
                       bg-transparent border-none focus:outline-none focus:ring-0"
              aria-label="Search AI personas"
            />
            <motion.button
              onClick={toggleExpand}
              className="p-2 rounded-lg hover:bg-gray-50 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AdjustmentsHorizontalIcon className="w-5 h-5 text-gray-400" />
            </motion.button>
          </div>

          <motion.div
            variants={{
              expanded: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            className="border-t border-gray-100"
          >
            {/* Advanced search options can be added here */}
          </motion.div>
        </motion.div>

        {/* Search suggestions */}
        {/* {searchQuery && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute left-0 right-0 mt-2 bg-white rounded-xl shadow-xl 
                     ring-1 ring-gray-100/50 overflow-hidden z-10"
          >
            <h1>Hello</h1>
          </motion.div>
        )} */}
      </div>
    </motion.div>
  );
};
