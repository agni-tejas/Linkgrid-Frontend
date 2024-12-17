import React, { useState, Suspense } from "react";
import { AnimatePresence } from "framer-motion";
import { RecommendationsHeader } from "./RecommendationsHeader";
import { RecommendationsGrid } from "./RecommendationsGrid";
import { useRecommendations } from "../../../_hooks/useRecommendations";
import { SortOption } from "../../../_lib/recommendations";
import { ScrollProgress } from "./ui/ScrollProgress";
import { ParallaxHeader } from "./ui/ParallaxHeader";

export const RecommendationsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState<SortOption>("matchPercentage");
  const { recommendations, totalCount } = useRecommendations(
    searchQuery,
    sortOption
  );

  return (
    <div className="min-h-screen transition-colors duration-300">
      <ScrollProgress />

      <ParallaxHeader>
        <RecommendationsHeader
          totalCount={totalCount}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          sortOption={sortOption}
          onSortChange={setSortOption}
        />
      </ParallaxHeader>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AnimatePresence mode="wait">
          {/* {isLoading ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {[...Array(6)].map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </motion.div>
          ) : ( */}
          <Suspense fallback={<div>Loading...</div>}>
            <RecommendationsGrid recommendations={recommendations} />
          </Suspense>
          {/* )} */}
        </AnimatePresence>
      </main>
    </div>
  );
};
