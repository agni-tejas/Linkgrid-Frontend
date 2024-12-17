import React from "react";
import { motion } from "framer-motion";
import { EditableTitle } from "./EditableTitle";
import { RelevanceBar } from "./RelevanceBar";
import { KeyMetrics } from "./KeyMetrics";
import TypingAnimation from "@/components/ui/typing-animation";

interface SearchResultsHeaderProps {
  query: string;
  onQueryChange: (query: string) => void;
}

export const SearchResultsHeader: React.FC<SearchResultsHeaderProps> = ({
  query,
  onQueryChange,
}) => {
  return (
    <div className="space-y-6 pb-6">
      <EditableTitle query={query} onQueryChange={onQueryChange} />

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-lg  leading-relaxed"
      >
        <TypingAnimation
          className="text-black font-normal dark:text-[#F5F5F5] tracking-wide "
          text=" We've found 78 incredible individuals matching your search for founders
        in New York. Of these, 12 are first-degree connections, and 8 have
        expressed interest in startups this week."
        />
      </motion.h2>

      <RelevanceBar />
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-base text-gray-600 dark:text-slate-300 font-medium leading-relaxed"
      >
        Key Stats:
      </motion.h2>

      <KeyMetrics />
    </div>
  );
};
