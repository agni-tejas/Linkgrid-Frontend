import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GroupMember } from "../../../../_lib/groups";

interface MemberAvatarProps {
  member: GroupMember;
  delay?: number;
}

export const MemberAvatar: React.FC<MemberAvatarProps> = ({
  member,
  delay = 0,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay }}
      className="relative group cursor-pointer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <img
        src={member.profilePicture}
        alt={member.name}
        className="w-8 h-8 rounded-full ring-2 ring-white dark:ring-gray-800
                 object-cover transition-transform duration-200"
      />

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-full  -translate-x-1/2 mb-2 w-48
                     bg-white dark:bg-stone-900 rounded-lg shadow-lg p-3
                     pointer-events-none z-50 border border-gray-100 dark:border-gray-800"
          >
            <div className="text-sm font-medium text-gray-900 dark:text-white">
              {member.name}
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              {member.bio}
            </div>

            {/* Tooltip Arrow */}
            <div
              className="absolute -bottom-1  -translate-x-1/2 w-2 h-2 
                         bg-white dark:bg-stone-900 border-r border-b border-gray-100 
                         dark:border-gray-800 transform rotate-45"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
