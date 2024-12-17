import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { XMarkIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { SearchHistoryList } from "./SearchHistoryList";
import { useSearchHistory } from "../../../_hooks/useSearchHistory";

interface SearchHistoryDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSearchSelect: (query: string) => void;
}

export const SearchHistoryDialog: React.FC<SearchHistoryDialogProps> = ({
  isOpen,
  onClose,
  onSearchSelect,
}) => {
  const [filterQuery, setFilterQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);
  const { filteredHistory } = useSearchHistory(filterQuery);

  useEffect(() => {
    if (isOpen) {
      searchInputRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/10 backdrop-blur-sm "
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", bounce: 0.2 }}
            className="fixed left-[25%] top-[10%] -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl
                       bg-white rounded-xl shadow-2xl z-50 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="search-history-title"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <h2
                id="search-history-title"
                className="text-xl font-semibold text-gray-900"
              >
                Search History
              </h2>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Close dialog"
              >
                <XMarkIcon className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Search Input */}
            <div className="px-6 py-4 border-b border-gray-100">
              <div className="relative">
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Filter search history..."
                  value={filterQuery}
                  onChange={(e) => setFilterQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200
                           focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
                />
              </div>
            </div>

            {/* Search History List */}
            <div className="max-h-[60vh] overflow-y-auto px-6 py-4">
              <SearchHistoryList
                searches={filteredHistory}
                onSearchSelect={onSearchSelect}
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
