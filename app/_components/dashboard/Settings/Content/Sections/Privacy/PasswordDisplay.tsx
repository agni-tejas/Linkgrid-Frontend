import React from "react";
import { motion } from "framer-motion";
import { formatDistanceToNow } from "date-fns";

interface PasswordDisplayProps {
  hasPassword: boolean;
  lastPasswordChange: string;
  onEdit: () => void;
}

export const PasswordDisplay: React.FC<PasswordDisplayProps> = ({
  hasPassword,
  lastPasswordChange,
  onEdit,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-4"
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-medium text-gray-950 dark:text-gray-300">
            Password:
          </h3>
          {hasPassword ? (
            <div className="mt-1 space-y-1">
              <p className="text-gray-500">••••••••</p>
              <p className="text-sm text-gray-400">
                Last changed {formatDistanceToNow(new Date(lastPasswordChange))}{" "}
                ago
              </p>
            </div>
          ) : (
            <p className="mt-1 text-sm text-gray-500">
              No password set. Set a password to secure your account.
            </p>
          )}
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onEdit}
          className="px-4 py-2 text-sm font-medium text-white bg-brand-500 
                   hover:bg-brand-600 rounded-lg shadow-sm hover:shadow-md
                   transition-all duration-200"
        >
          {hasPassword ? "Update Password" : "Set Password"}
        </motion.button>
      </div>
    </motion.div>
  );
};
