import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import { SearchResultCard } from "./SearchResultCard";
import { SearchBottomBar } from "./SearchBottomBar";

import { mockSearchResults } from "./mockData";
import { SearchResultsHeader } from "./components/SearchHeader/SearchResultsHeader";
import { Separator } from "@/app/_ui/separator";
import { ScrollProgress } from "../Recommendations/ui/ScrollProgress";
import { useSearchDialog } from "./SearchDialogContext";

interface SearchResultsProps {
  query: string;
  onQueryChange: (query: string) => void;
}

export const SearchResults: React.FC<SearchResultsProps> = ({
  query,
  onQueryChange,
}) => {
  const {
    setMessages,
    setDescriptions,
    setRecommendations,
    setIsLoading,
    isLoading,
    setMsg,
    recommendations,
  } = useSearchDialog();

  return (
    <div className="flex min-h-screen  flex-col w-full relative">
      <ScrollProgress />
      {/* Header Section */}
      <header>
        <div className="w-full   mx-auto px-4 pt-4">
          <SearchResultsHeader query={query} onQueryChange={onQueryChange} />
        </div>
      </header>
      {recommendations.length > 0 && (
        <Separator label={<span className="px-2">Results</span>} gradient />
      )}
      {/* Results List */}
      <main className="flex-1">
        <div className="w-full mx-auto py-6">
          <div className="space-y-4">
            <AnimatePresence>
              {recommendations.map((rec, index) => (
                <motion.div
                  key={rec.profile_id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <SearchResultCard {...rec} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </main>

      {/* Bottom Search Bar */}
      {recommendations.length > 0 && (
        <SearchBottomBar onSearch={(newQuery) => onQueryChange(newQuery)} />
      )}
    </div>
  );
};
