import React from "react";
import { UserCircleIcon, Cog6ToothIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

interface ProfileSectionProps {
  name: string;
  role: string;
  imageUrl?: string;
  isCollapsed?: boolean;
  onSettingsClick?: () => void;
}

export const ProfileSection: React.FC<ProfileSectionProps> = ({
  name,
  role,
  imageUrl,
  isCollapsed = false,
  onSettingsClick,
}) => {
  return (
    <motion.div
      className="relative p-4 after:content-[''] after:absolute after:bottom-0 after:left-4 after:right-4 after:h-px after:bg-slate-400 dark:after:bg-slate-800"
      initial={false}
      animate={{
        width: isCollapsed ? "64px" : "100%",
      }}
    >
      <div
        className={`flex items-center ${
          isCollapsed ? "justify-center" : "gap-4"
        }`}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative"
        >
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={name}
              className="w-12 h-12 rounded-full object-cover ring-2 ring-brand-100 ring-offset-2"
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center">
              <UserCircleIcon className="w-8 h-8 text-brand-500" />
            </div>
          )}
          <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-400 ring-2 ring-white" />
        </motion.div>

        {!isCollapsed && (
          <div className="flex items-center gap-2 flex-1">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              className="flex-1"
            >
              <h2 className="text-base font-semibold text-gray-900 dark:text-white">
                {name}
              </h2>
              <p className="text-sm text-gray-500 dark:text-[#d3d3d3]">
                {role}
              </p>
            </motion.div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={onSettingsClick}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Settings"
            >
              <Cog6ToothIcon className="w-5 h-5 text-gray-500" />
            </motion.button>
          </div>
        )}
      </div>
    </motion.div>
  );
};
