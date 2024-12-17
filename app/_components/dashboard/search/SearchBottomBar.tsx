import React, { useState } from "react";
import { motion } from "framer-motion";
import { PlaceholdersAndVanishInput } from "@/app/_ui/placeholders-and-vanish-input";

interface SearchBottomBarProps {
  onSearch: (query: string) => void;
}

export const SearchBottomBar: React.FC<SearchBottomBarProps> = ({
  onSearch,
}) => {
  const [query, setQuery] = useState("");

  const placeholders = [
    "Looking for a software developer experienced in AI",
    "Connect me with startup founders in the fintech industry",
    "Find marketing experts skilled in social media strategies",
    "Who are the top investors in my network?",
    "Search Co-Founders in my network",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
    setQuery("");
  };

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="sticky bottom-0 w-full py-6
                  z-50"
    >
      <div className="w-full mx-auto flex items-center gap-4">
        <PlaceholdersAndVanishInput
          placeholders={placeholders}
          onChange={(e) => setQuery(e.target.value)}
          onSubmit={handleSubmit}
        />
      </div>
    </motion.div>
  );
};
