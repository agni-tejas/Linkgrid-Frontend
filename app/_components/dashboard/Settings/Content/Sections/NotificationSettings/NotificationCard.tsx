import React from "react";
import { motion } from "framer-motion";
import { Toggle } from "../../shared/Toggle";
import { cn } from "../../../../../../_lib/classNames";

interface NotificationOption {
  id: string;
  label: string;
  description: string;
  enabled: boolean;
}

interface NotificationCardProps {
  title: string;
  description?: string;
  options: NotificationOption[];
  onToggle: (id: string, enabled: boolean) => void;
}

export const NotificationCard: React.FC<NotificationCardProps> = ({
  title,
  description,
  options,
  onToggle,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-stone-950 rounded-xl shadow-sm 
                 border border-gray-100 dark:border-gray-700 overflow-hidden"
    >
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
        {description && (
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {description}
          </p>
        )}

        <div className="mt-6 space-y-6">
          {options.map((option, index) => (
            <React.Fragment key={option.id}>
              {index > 0 && (
                <div className="border-t border-gray-100 dark:border-gray-700" />
              )}
              <div className="pt-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1 pr-8">
                    <label
                      htmlFor={option.id}
                      className="text-base font-medium text-gray-900 dark:text-white"
                    >
                      {option.label}
                    </label>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                      {option.description}
                    </p>
                  </div>
                  <Toggle
                    id={option.id}
                    checked={option.enabled}
                    onChange={(enabled) => onToggle(option.id, enabled)}
                  />
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
