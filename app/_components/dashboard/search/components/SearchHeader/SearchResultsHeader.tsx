import React from "react";
import { motion } from "framer-motion";
import { EditableTitle } from "./EditableTitle";
import { RelevanceBar } from "./RelevanceBar";
import { KeyMetrics } from "./KeyMetrics";
import TypingAnimation from "@/components/ui/typing-animation";
import PulsingPoint from "@/app/_ui/PulsingPoint";
import { useSearchDialog } from "../../SearchDialogContext";

interface SearchResultsHeaderProps {
  query: string;
  onQueryChange: (query: string) => void;
}

export const SearchResultsHeader: React.FC<SearchResultsHeaderProps> = ({
  query,
  onQueryChange,
}) => {
  const { messages, descriptions, recommendations, msg } = useSearchDialog();

  const sentences = [
    "Has expertise in HTML, CSS, and JavaScript",
    "Proficient in frameworks like React, Angular, or Vue.js",
    "Experience in building responsive web designs",
    "Skilled in using version control systems like Git",
  ];

  return (
    <div className="space-y-6 pb-6">
      <EditableTitle query={query} onQueryChange={onQueryChange} />

      {msg.map((ms, index) => (
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-lg  leading-relaxed"
          key={index}
        >
          <TypingAnimation
            className="text-black font-normal dark:text-[#F5F5F5] tracking-wide "
            text={ms}
          />
        </motion.h2>
      ))}

      {descriptions.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-2"
        >
          <h2 className="text-base text-gray-600 dark:text-brand-400 font-medium leading-relaxed">
            Search Overview:
          </h2>
          {descriptions.map((desc, index) => (
            <div key={index} className="flex items-center space-x-2">
              <PulsingPoint />
              <TypingAnimation
                className="text-black font-normal dark:text-[#F5F5F5] tracking-wide "
                text={desc}
              />
            </div>
          ))}
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className=""
      >
        {recommendations.length > 0 && (
          <KeyMetrics onRecommendations={recommendations} />
        )}
      </motion.div>
    </div>
  );
};
