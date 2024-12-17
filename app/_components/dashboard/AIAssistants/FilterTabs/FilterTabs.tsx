import React from "react";
import { motion } from "framer-motion";

interface FilterTabsProps {
  selectedFilter: "all" | "followers" | "2nd-degree";
  onFilterChange: (filter: "all" | "followers" | "2nd-degree") => void;
}

export const FilterTabs: React.FC<FilterTabsProps> = ({
  selectedFilter,
  onFilterChange,
}) => {
  const tabs = [
    { id: "all", label: "All" },
    { id: "followers", label: "Followers" },
    { id: "2nd-degree", label: "2nd-Degree Connections" },
  ] as const;

  return (
    <div className="flex justify-center">
      <div className="inline-flex p-1 rounded-xl bg-gray-100 dark:bg-stone-900 shadow-inner">
        {tabs.map(({ id, label }) => (
          <motion.button
            key={id}
            onClick={() => onFilterChange(id)}
            className={`relative px-6 py-2 text-sm font-medium rounded-lg
                       transition-colors duration-200 ${
                         selectedFilter === id
                           ? "text-gray-200 dark:text-gray-900"
                           : "text-gray-600 dark:text-slate-300 hover:text-gray-900"
                       }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {selectedFilter === id && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 dark:bg-white bg-black rounded-lg shadow-sm"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{label}</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
};
