import React from "react";
import { motion } from "framer-motion";

interface CardContentProps {
  name: string;
  username: string;
  bio: string;
}

export const CardContent: React.FC<CardContentProps> = ({
  name,
  username,
  bio,
}) => {
  return (
    <div className="text-center mb-6 space-y-3">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h3 className="text-xl font-semibold text-gray-900 dark:text-[#F5F5F5]">
          {name}
        </h3>
        <p className="text-sm text-gray-500 dark:text-slate-400">@{username}</p>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-sm text-gray-800 dark:text-gray-300 leading-relaxed
                   px-4 py-3 bg-teal-300/20 dark:bg-stone-700 rounded-lg"
      >
        {bio}
      </motion.p>
    </div>
  );
};
