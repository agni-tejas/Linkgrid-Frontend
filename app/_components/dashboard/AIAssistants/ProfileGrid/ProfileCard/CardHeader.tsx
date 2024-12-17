import React from "react";
import { motion } from "framer-motion";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import { Profile } from "../../../../../_lib/ai-assistants";

interface CardHeaderProps {
  profile: Profile;
}

export const CardHeader: React.FC<CardHeaderProps> = ({ profile }) => {
  return (
    <div className="relative flex items-center justify-center mb-6">
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="relative inline-block"
      >
        <img
          src={profile.avatar}
          alt={profile.name}
          className="w-24 h-24 rounded-full  object-cover
                   ring-4 ring-brand-50 shadow-lg"
        />
        {profile.type === "follower" && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -bottom-1 -right-1 bg-white rounded-full p-1"
          >
            <CheckBadgeIcon className="w-6 h-6 text-brand-500" />
          </motion.div>
        )}
      </motion.div>

      <motion.span
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className={`absolute top-0 right-0 px-3 py-1 text-xs font-medium
                   rounded-full ${
                     profile.type === "follower"
                       ? "bg-brand-100 text-brand-700"
                       : "bg-gray-100 text-gray-700"
                   }`}
      >
        {profile.type === "follower" ? "Follower" : "2nd Degree"}
      </motion.span>
    </div>
  );
};
