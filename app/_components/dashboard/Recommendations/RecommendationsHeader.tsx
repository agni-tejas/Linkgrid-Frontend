import React from "react";
import { motion } from "framer-motion";
import {
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
} from "@heroicons/react/24/outline";
import { SortOption } from "../../../_lib/recommendations";

interface RecommendationsHeaderProps {
  totalCount: number;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  sortOption: SortOption;
  onSortChange: (option: SortOption) => void;
}

export const RecommendationsHeader: React.FC<RecommendationsHeaderProps> = ({
  totalCount,
  searchQuery,
  onSearchChange,
  sortOption,
  onSortChange,
}) => {
  return (
    <div className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <div className="text-center">
            <motion.h1
              className="text-6xl font-bold mb-4 bg-gradient-to-r from-black to-sky-700 dark:from-slate-200 dark:to-sky-300 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Your AI Recommendations
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 dark:text-slate-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Discover connections tailored to your interests and goals
            </motion.p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            <div className="relative">
              <MagnifyingGlassIcon
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 
                                            text-gray-400 dark:text-gray-500"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search recommendations..."
                className="w-full pl-12 pr-4 py-4 rounded-xl 
                         bg-white dark:bg-gray-800 
                         border border-gray-200 dark:border-gray-700
                         text-gray-900 dark:text-white
                         placeholder-gray-500 dark:placeholder-gray-400
                         focus:outline-none focus:ring-2 focus:ring-brand-500/20
                         focus:border-brand-500 dark:focus:border-brand-400
                         transition-all shadow-sm hover:shadow-md"
              />
            </div>

            <div className="flex items-center justify-between">
              <motion.span
                className="px-4 py-2 rounded-full bg-brand-50 dark:bg-brand-900/30
                         text-brand-600 dark:text-brand-400 text-sm font-medium"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                {totalCount} Matches Found
              </motion.span>

              <div className="flex items-center gap-2">
                <AdjustmentsHorizontalIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                <select
                  value={sortOption}
                  onChange={(e) => onSortChange(e.target.value as SortOption)}
                  className="pl-6 py-2  rounded-lg bg-white dark:bg-gray-800
                           border border-gray-200 dark:border-gray-700
                           text-gray-900 dark:text-white
                           focus:outline-none focus:ring-2 focus:ring-brand-500/20
                           focus:border-brand-500 dark:focus:border-brand-400
                           transition-all"
                >
                  <option value="matchPercentage">Highest Match</option>
                  <option value="matchPercentageAsc">Lowest Match</option>
                  <option value="name">Alphabetical</option>
                </select>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
