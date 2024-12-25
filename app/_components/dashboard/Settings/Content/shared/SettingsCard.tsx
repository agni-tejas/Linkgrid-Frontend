import React from "react";
import { motion } from "framer-motion";

interface SettingsCardProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export const SettingsCard: React.FC<SettingsCardProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className=" overflow-hidden "
    >
      <div className="pt-6 pl-6 pr-6 ">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
        {description && (
          <p className="mt-1 text-sm text-gray-500 dark:text-slate-400">
            {description}
          </p>
        )}
        <div className="mt-6">{children}</div>
      </div>
    </motion.div>
  );
};
