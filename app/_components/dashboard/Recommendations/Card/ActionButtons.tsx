import React from "react";
import { motion } from "framer-motion";
import {
  UserPlusIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";

interface ActionButtonsProps {
  onConnect: () => void;
  onViewProfile: () => void;
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({
  onConnect,
  onViewProfile,
}) => {
  return (
    <div className="flex items-center gap-3">
      <motion.button
        onClick={onConnect}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="flex-1 px-4 py-2.5 bg-gradient-to-r from-brand-500 to-brand-600
                 dark:from-brand-400 dark:to-brand-500
                 text-white rounded-lg shadow-sm hover:shadow-md
                 transition-all duration-300
                 flex items-center justify-center gap-2"
      >
        <UserPlusIcon className="w-5 h-5" />
        <span className="font-medium">Connect</span>
      </motion.button>

      <motion.button
        onClick={onViewProfile}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="px-4 py-2.5 border border-gray-200 dark:border-gray-700 
                 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800
                 transition-all duration-300
                 flex items-center justify-center gap-2
                 text-gray-700 dark:text-gray-300"
      >
        <ArrowTopRightOnSquareIcon className="w-5 h-5" />
        <span className="font-medium text-sm">Profile</span>
      </motion.button>
    </div>
  );
};
