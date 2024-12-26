import React from "react";
import { motion } from "framer-motion";
import { containerVariants } from "./animations";
import { useSearchDialog } from "./SearchDialogContext";

interface SearchContainerProps {
  children: React.ReactNode;
}

export const SearchContainer: React.FC<SearchContainerProps> = ({
  children,
}) => {
  const { isHistoryDialogOpen } = useSearchDialog();

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={`bg-white  w-full rounded-xl shadow-search backdrop-blur-sm
         border-gray-100/50 overflow-hidden
        transition-shadow duration-300 hover:shadow-search-hover
        z-10 relative ${isHistoryDialogOpen ? "hidden" : "block"}`}
    >
      {children}
    </motion.div>
  );
};
