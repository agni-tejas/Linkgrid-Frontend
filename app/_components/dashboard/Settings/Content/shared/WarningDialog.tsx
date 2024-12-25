import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExclamationTriangleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

interface WarningDialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
  confirmLabel: string;
  cancelLabel: string;
}

export const WarningDialog: React.FC<WarningDialogProps> = ({
  isOpen,
  onClose,
  title,
  message,
  confirmLabel,
  cancelLabel,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 "
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed left-[40%] top-[25%] -translate-x-1/2 -translate-y-1/2 
                     w-full max-w-md bg-white dark:bg-gray-800 rounded-xl 
                     shadow-xl z-50 overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div
                    className="w-10 h-10 rounded-full bg-yellow-100 
                               flex items-center justify-center"
                  >
                    <ExclamationTriangleIcon className="w-6 h-6 text-yellow-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3
                    className="text-lg font-semibold text-gray-900 
                               dark:text-white mb-2"
                  >
                    {title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">{message}</p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 text-gray-400 hover:text-gray-500 
                           rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <XMarkIcon className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-6 flex justify-end gap-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onClose}
                  className="px-4 py-2 text-sm font-medium text-gray-700 
                           hover:text-gray-900 rounded-lg hover:bg-gray-100
                           dark:text-gray-300 dark:hover:text-white 
                           dark:hover:bg-gray-700 transition-colors"
                >
                  {cancelLabel}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onClose}
                  className="px-4 py-2 text-sm font-medium text-white 
                           bg-yellow-500 hover:bg-yellow-600 rounded-lg
                           shadow-sm hover:shadow-md transition-all"
                >
                  {confirmLabel}
                </motion.button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
