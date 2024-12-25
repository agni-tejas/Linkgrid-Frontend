import React from "react";
import { motion } from "framer-motion";
import { SearchBar } from "./SearchBar";

interface GroupsHeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const GroupsHeader: React.FC<GroupsHeaderProps> = ({
  searchQuery,
  onSearchChange,
}) => {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1
          className="text-6xl font-bold bg-gradient-to-b dark:from-white dark:to-sky-600 
                     bg-clip-text text-transparent"
        >
          Groups
        </h1>
        <p className="mt-2 text-gray-500 dark:text-gray-300">
          View and manage your connection groups
        </p>
      </motion.div>

      <SearchBar
        value={searchQuery}
        onChange={onSearchChange}
        placeholder="Search groups by name or members..."
      />
    </div>
  );
};
