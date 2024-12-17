import React from "react";
import { motion } from "framer-motion";
import { ClockIcon, TagIcon } from "@heroicons/react/24/outline";
import { SearchHistoryItem } from "../../../_lib/search";

interface SearchHistoryListProps {
  searches: SearchHistoryItem[];
  onSearchSelect: (query: string) => void;
}

export const SearchHistoryList: React.FC<SearchHistoryListProps> = ({
  searches,
  onSearchSelect,
}) => {
  return (
    <motion.div
      className="space-y-2"
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.05,
          },
        },
      }}
    >
      {searches.map((search) => (
        <motion.button
          key={search.id}
          className="w-full group flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50
                     transition-colors duration-200"
          onClick={() => onSearchSelect(search.query)}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="flex-1">
            <p className="text-base text-gray-900 text-left font-medium group-hover:text-brand-600">
              {search.query}
            </p>
            <div className="flex items-center gap-4 mt-1">
              <span className="flex items-center gap-1.5 text-sm text-gray-500">
                <ClockIcon className="w-4 h-4" />
                {search.timestamp}
              </span>
              {search.category && (
                <span className="flex items-center gap-1.5 text-sm text-gray-500">
                  <TagIcon className="w-4 h-4" />
                  {search.category}
                </span>
              )}
            </div>
          </div>
        </motion.button>
      ))}
    </motion.div>
  );
};
