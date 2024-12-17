import React, { useContext } from "react";
import { motion } from "framer-motion";
import { SearchInput } from "./SearchInput";
import { SearchContext } from "./SearchContext";
import { buttonVariants } from "./animations";
import { Sparkles } from "lucide-react";

interface SearchFormProps {
  onSubmit: (e: React.FormEvent) => void;
}

export const SearchForm: React.FC<SearchFormProps> = ({ onSubmit }) => {
  const { searchQuery, setSearchQuery, isLoading } = useContext(SearchContext);

  return (
    <form onSubmit={onSubmit} className="flex flex-col">
      <SearchInput
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Enter skills, interests, or names..."
        aria-label="Search network"
      />

      <motion.button
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
        disabled={isLoading}
        type="submit"
        className="w-full text-lg bg-gradient-to-r from-sky-400 to-indigo-600
       dark:from-violet-800 dark:to-blue-900
                   hover:from-brand-400 hover:to-brand-500
                   text-white font-medium py-4 px-6
                   transition-all duration-300 shadow-sm
                   disabled:opacity-70 disabled:cursor-not-allowed
                   flex items-center justify-center gap-2"
      >
        <Sparkles className="w-5 h-5" />
        {isLoading ? "Searching..." : "Search Network"}

        {isLoading && (
          <motion.div
            className="absolute right-4 w-5 h-5 border-2 border-white border-t-transparent
                       rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        )}
      </motion.button>
    </form>
  );
};
