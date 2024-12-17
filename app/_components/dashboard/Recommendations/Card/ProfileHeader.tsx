import React from "react";
import { motion } from "framer-motion";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import { MatchPercentageRing } from "../MatchPercentageRing";

interface ProfileHeaderProps {
  profilePicture: string;
  name: string;
  username: string;
  matchPercentage: number;
  isVerified?: boolean;
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  profilePicture,
  name,
  username,
  matchPercentage,
  isVerified = false,
}) => {
  return (
    <div className="flex items-start gap-4">
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="relative flex-shrink-0"
      >
        <div className="relative">
          <img
            src={profilePicture}
            alt={name}
            className="w-16 h-16 rounded-full object-cover 
                     ring-4 ring-brand-50 dark:ring-brand-900/20
                     shadow-lg"
          />
          {isVerified && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-1 -right-1 bg-white dark:bg-gray-800 
                       rounded-full p-1 shadow-md"
            >
              <CheckBadgeIcon className="w-4 h-4 text-brand-500" />
            </motion.div>
          )}
          <MatchPercentageRing percentage={matchPercentage} />
        </div>
      </motion.div>

      <div className="flex-1 min-w-0">
        <motion.h3
          className="text-lg font-semibold text-gray-900 dark:text-white truncate"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {name}
        </motion.h3>
        <motion.p
          className="text-sm text-gray-500 dark:text-slate-500"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          {username}
        </motion.p>
      </div>
    </div>
  );
};
