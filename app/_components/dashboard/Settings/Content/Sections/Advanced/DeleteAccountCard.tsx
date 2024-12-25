import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { DeleteConfirmationModal } from "./DeleteConfirmationModal";
import { ReAuthenticationModal } from "./ReAuthenticationModal";

interface DeleteAccountCardProps {
  onDeleteAccount: (password: string) => Promise<void>;
  isLoading: boolean;
}

export const DeleteAccountCard: React.FC<DeleteAccountCardProps> = ({
  onDeleteAccount,
  isLoading,
}) => {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);

  const handleDeleteClick = () => {
    setShowConfirmModal(true);
  };

  const handleConfirmDelete = () => {
    setShowConfirmModal(false);
    setShowAuthModal(true);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-stone-950 rounded-xl shadow-sm 
                 border border-red-200 dark:border-red-800/30 overflow-hidden"
      >
        <div className="p-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div
                className="w-10 h-10 rounded-full bg-red-100 
                           flex items-center justify-center"
              >
                <ExclamationTriangleIcon className="w-6 h-6 text-red-600" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-red-600 dark:text-red-500">
                Delete Account Data
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Permanently delete all your account data. This action cannot be
                undone and will result in the immediate loss of all your data
                and settings.
              </p>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleDeleteClick}
                disabled={isLoading}
                className="mt-4 px-4 py-2 bg-red-600 hover:bg-red-700 
                         text-white rounded-lg shadow-sm hover:shadow-md 
                         transition-all text-sm font-medium
                         disabled:opacity-50 disabled:cursor-not-allowed
                         flex items-center gap-2"
              >
                Delete Account Data
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>

      <DeleteConfirmationModal
        isOpen={showConfirmModal}
        onClose={() => setShowConfirmModal(false)}
        onConfirm={handleConfirmDelete}
      />

      <ReAuthenticationModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onConfirm={onDeleteAccount}
        isLoading={isLoading}
      />
    </>
  );
};
