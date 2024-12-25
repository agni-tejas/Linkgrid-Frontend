import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LockClosedIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { PasswordInput } from "../../shared/PasswordInput";

interface ReAuthenticationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (password: string) => Promise<void>;
  isLoading: boolean;
}

export const ReAuthenticationModal: React.FC<ReAuthenticationModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  isLoading,
}) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password.trim()) {
      setError("Password is required");
      return;
    }
    try {
      await onConfirm(password);
      onClose();
    } catch (error) {
      setError("Invalid password");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0  z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed left-1/3 top-1/3 -translate-x-1/2 -translate-y-1/2 
                     w-full max-w-md bg-white dark:bg-stone-900 rounded-xl 
                     shadow-xl z-50 overflow-hidden"
          >
            <form onSubmit={handleSubmit} className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div
                    className="w-10 h-10 rounded-full bg-gray-100 
                               flex items-center justify-center"
                  >
                    <LockClosedIcon className="w-6 h-6 text-gray-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3
                    className="text-lg font-semibold text-gray-900 
                               dark:text-white mb-2"
                  >
                    Confirm Your Password
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">
                    Please enter your password to confirm this action.
                  </p>

                  <PasswordInput
                    label="Password"
                    value={password}
                    onChange={setPassword}
                    error={error}
                    disabled={isLoading}
                  />
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className="p-2 text-gray-400 hover:text-gray-500 
                           rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <XMarkIcon className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-6 flex justify-end gap-3">
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onClose}
                  disabled={isLoading}
                  className="px-4 py-2 text-sm font-medium text-gray-700 
                           hover:text-gray-900 rounded-lg hover:bg-gray-100
                           dark:text-gray-300 dark:hover:text-white 
                           dark:hover:bg-gray-700 transition-colors
                           disabled:opacity-50"
                >
                  Cancel
                </motion.button>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isLoading}
                  className="px-4 py-2 text-sm font-medium text-white 
                           bg-red-600 hover:bg-red-700 rounded-lg
                           shadow-sm hover:shadow-md transition-all
                           disabled:opacity-50 flex items-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <motion.div
                        className="w-4 h-4 border-2 border-white border-t-transparent 
                                 rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                      Confirming...
                    </>
                  ) : (
                    "Confirm Delete"
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
