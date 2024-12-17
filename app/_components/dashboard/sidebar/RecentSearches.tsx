import React from "react";
import { motion } from "framer-motion";
import { XMarkIcon, ClockIcon } from "@heroicons/react/24/outline";
import { SearchHistoryDialog } from "../../../_components/dashboard/historyDialogBox/SearchHistoryDialog";

import { useSearchDialog } from "../search/SearchDialogContext";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";

interface RecentSearch {
  id: string;
  term: string;
  timestamp: string;
}

interface RecentSearchesProps {
  searches: RecentSearch[];
  onClearSearch: (id: string) => void;
  onViewHistory: () => void;
}

export const RecentSearches: React.FC<RecentSearchesProps> = ({
  searches,
  onClearSearch,
}) => {
  const { isHistoryDialogOpen, setIsHistoryDialogOpen } = useSearchDialog();

  return (
    <>
      <div className="px-4">
        <h3 className="text-sm font-medium text-gray-600 dark:text-[#d3d3d3] mb-3 flex items-center gap-2">
          <ClockIcon className="w-4 h-4" />
          Recent Searches
        </h3>
        <motion.div
          className="space-y-1"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.05,
              },
            },
          }}
        >
          {searches.map((search) => (
            <motion.div
              key={search.id}
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
              className="group relative flex items-center gap-3 px-3 py-2 rounded-lg
                         hover:bg-white dark:hover:bg-zinc-900 transition-colors duration-200"
            >
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-700 dark:text-[#c2c2c2] truncate">
                  {search.term}
                </p>
                <p className="text-xs text-gray-500">{search.timestamp}</p>
              </div>
              <motion.button
                onClick={() => onClearSearch(search.id)}
                className="opacity-0 group-hover:opacity-100 p-1 hover:bg-gray-100 
                           rounded-full transition-all duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <XMarkIcon className="w-4 h-4 text-gray-400" />
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
        <motion.button
          onClick={() => setIsHistoryDialogOpen(true)}
          className="flex items-center gap-2 text-sm dark:text-sky-400 text-brand-600 hover:text-brand-700 mt-4
                     font-medium transition-colors duration-200"
          whileHover={{ x: 4 }}
        >
          <HistoryOutlinedIcon className="w-4 h-4" />
          View History
        </motion.button>
      </div>

      <SearchHistoryDialog
        isOpen={isHistoryDialogOpen}
        onClose={() => setIsHistoryDialogOpen(false)}
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        onSearchSelect={(query) => {
          // Handle search selection
          setIsHistoryDialogOpen(false);
        }}
      />
    </>
  );
};
