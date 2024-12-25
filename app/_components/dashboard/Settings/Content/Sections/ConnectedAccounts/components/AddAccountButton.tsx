import React from "react";
import { motion } from "framer-motion";
import { PlusIcon } from "@heroicons/react/24/outline";

interface AddAccountButtonProps {
  onClick: () => void;
}

export const AddAccountButton: React.FC<AddAccountButtonProps> = ({
  onClick,
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="px-4 py-2 bg-purple-500/20 hover:bg-brand-600 text-white 
                 rounded-lg shadow-sm hover:shadow-md transition-all
                 flex items-center gap-2"
    >
      <PlusIcon className="w-5 h-5" />
      Add New Account
    </motion.button>
  );
};
