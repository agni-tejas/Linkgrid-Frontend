import React from "react";
import { motion } from "framer-motion";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";

interface ServiceCardProps {
  service: {
    id: string;
    name: string;
    icon: string;
    connected: boolean;
    email?: string;
    username?: string;
  };
  onRevokeAccess: () => void;
  isLoading: boolean;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  onRevokeAccess,
  isLoading,
}) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-white dark:bg-stone-950 rounded-xl shadow-sm 
                 border border-gray-100 dark:border-gray-800 
                 overflow-hidden p-4"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div
            className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-700 
                       flex items-center justify-center"
          >
            <img
              src={service.icon}
              alt={`${service.name} logo`}
              className="w-6 h-6"
            />
          </div>
          <div>
            <h3 className="text-base font-medium text-gray-900 dark:text-white">
              {service.name}
            </h3>
            {service.connected && (
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {service.email || service.username}
              </p>
            )}
          </div>
        </div>

        {service.connected ? (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onRevokeAccess}
            disabled={isLoading}
            className="px-4 py-2 text-sm font-medium text-red-600 
                     hover:text-red-700 rounded-lg border border-red-800
                     hover:bg-red-50 transition-all flex items-center gap-2
                     disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ArrowRightOnRectangleIcon className="w-4 h-4" />
            Revoke Access
          </motion.button>
        ) : (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            // onClick={}
            disabled={isLoading}
            className="px-4 py-2 text-sm font-medium text-brand-600 
                     hover:text-brand-700 rounded-lg border border-brand-800
                     hover:bg-brand-50 transition-all
                     disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Connect
          </motion.button>
        )}
      </div>
    </motion.div>
  );
};
