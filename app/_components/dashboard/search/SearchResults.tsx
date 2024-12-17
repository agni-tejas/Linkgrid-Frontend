import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import { SearchResultCard } from "./SearchResultCard";
import { SearchBottomBar } from "./SearchBottomBar";

import { mockSearchResults } from "./mockData";
import { SearchResultsHeader } from "./components/SearchHeader/SearchResultsHeader";
import { Separator } from "@/app/_ui/separator";
import { ScrollProgress } from "../Recommendations/ui/ScrollProgress";

interface SearchResultsProps {
  query: string;
  onQueryChange: (query: string) => void;
}

export const SearchResults: React.FC<SearchResultsProps> = ({
  query,
  onQueryChange,
}) => {
  return (
    <div className="flex flex-col w-full relative">
      <ScrollProgress />
      {/* Header Section */}
      <header>
        <div className="w-full mx-auto px-4 py-4">
          <SearchResultsHeader query={query} onQueryChange={onQueryChange} />
        </div>
      </header>
      <Separator label={<span className="px-2">Results</span>} gradient />

      {/* Results List */}
      <main className="flex-1 overflow-y-auto">
        <div className="w-full mx-auto py-6">
          <div className="space-y-4">
            <AnimatePresence>
              {mockSearchResults.map((result, index) => (
                <motion.div
                  key={result.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <SearchResultCard {...result} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </main>

      {/* Bottom Search Bar */}
      <SearchBottomBar onSearch={(newQuery) => onQueryChange(newQuery)} />
    </div>
  );
};
