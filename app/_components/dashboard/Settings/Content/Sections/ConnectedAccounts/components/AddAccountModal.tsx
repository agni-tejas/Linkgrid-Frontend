import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface AddAccountModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConnect: (serviceId: string) => void;
  connectedServices: Array<{
    id: string;
    name: string;
    icon: string;
    connected: boolean;
  }>;
}

export const AddAccountModal: React.FC<AddAccountModalProps> = ({
  isOpen,
  onClose,
  onConnect,
  connectedServices,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed left-1/3 top-1/3 -translate-x-1/2 -translate-y-1/2 
                     w-full max-w-md bg-white dark:bg-gray-800 rounded-xl 
                     shadow-xl z-50 overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Add New Account
                </h3>
                <button
                  onClick={onClose}
                  className="p-2 text-gray-400 hover:text-gray-500 
                           rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <XMarkIcon className="w-5 h-5" />
                </button>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {connectedServices
                  .filter((service) => !service.connected)
                  .map((service) => (
                    <motion.button
                      key={service.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        onConnect(service.id);
                        onClose();
                      }}
                      className="p-4 rounded-lg border border-gray-200 
                               dark:border-gray-700 hover:bg-gray-50 
                               dark:hover:bg-gray-700 transition-colors
                               flex flex-col items-center gap-2"
                    >
                      <img
                        src={service.icon}
                        alt={`${service.name} logo`}
                        className="w-8 h-8"
                      />
                      <span
                        className="text-sm font-medium text-gray-900 
                                   dark:text-white"
                      >
                        {service.name}
                      </span>
                    </motion.button>
                  ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
