import React from 'react';
import { motion } from 'framer-motion';
import { GroupMember } from '../../../types/groups';
import { MemberAvatar } from './MemberAvatar';

interface GroupMembersProps {
  members: GroupMember[];
}

export const GroupMembers: React.FC<GroupMembersProps> = ({ members }) => {
  const visibleMembers = members.slice(0, 3);
  const remainingCount = members.length - 3;

  return (
    <div className="flex items-center -space-x-2">
      {visibleMembers.map((member, index) => (
        <MemberAvatar
          key={member.name}
          member={member}
          delay={index * 0.1}
        />
      ))}
      
      {remainingCount > 0 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700
                   flex items-center justify-center text-xs font-medium
                   text-gray-600 dark:text-gray-300 ring-2 ring-white
                   dark:ring-gray-800"
        >
          +{remainingCount}
        </motion.div>
      )}
    </div>
  );
};