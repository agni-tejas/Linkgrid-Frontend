import React, { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "./Header/Header";
import { SearchSection } from "./Search/SearchSection";
import { FilterTabs } from "./FilterTabs/FilterTabs";
import { ProfileGrid } from "./ProfileGrid/ProfileGrid";
import { ChatDialog } from "./Chat/ChatDialog";
import { useAIProfiles } from "../../../_hooks/useAIProfiles";
import { ScrollProgress } from "../Recommendations/ui/ScrollProgress";
import { ParallaxHeader } from "../Recommendations/ui/ParallaxHeader";

export const AIAssistantsPage: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<
    "all" | "followers" | "2nd-degree"
  >("all");
  const [selectedProfile, setSelectedProfile] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const { filteredProfiles } = useAIProfiles(selectedFilter, searchQuery);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen"
    >
      <ScrollProgress />
      <div className="w-full min-w-[62rem] mx-auto px-6 py-12">
        <ParallaxHeader>
          <Header />
        </ParallaxHeader>

        <div className="mt-12 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <SearchSection
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
            />
          </motion.div>

          <div className="flex w-full md:flex-row md:items-center justify-center">
            <FilterTabs
              selectedFilter={selectedFilter}
              onFilterChange={setSelectedFilter}
            />
          </div>

          <div className="flex items-center justify-end text-sm text-gray-600 dark:text-slate-300">
            <span className="px-3 py-1.5 bg-white dark:bg-stone-900 rounded-full shadow-sm border border-gray-100 dark:border-sky-900">
              {filteredProfiles.length} AI Personas Found
            </span>
          </div>

          <ProfileGrid
            profiles={filteredProfiles}
            onChatClick={setSelectedProfile}
          />
        </div>
      </div>

      <ChatDialog
        isOpen={!!selectedProfile}
        onClose={() => setSelectedProfile(null)}
        profileId={selectedProfile}
      />
    </motion.div>
  );
};
