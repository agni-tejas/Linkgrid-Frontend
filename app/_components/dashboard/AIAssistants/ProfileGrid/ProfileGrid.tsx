import React from "react";
import { motion } from "framer-motion";
import { ProfileCard } from "./ProfileCard";
import { Profile } from "../../../../_lib/ai-assistants";

interface ProfileGridProps {
  profiles: Profile[];
  onChatClick: (id: string) => void;
}

export const ProfileGrid: React.FC<ProfileGridProps> = ({
  profiles,
  onChatClick,
}) => {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
    >
      {profiles.map((profile) => (
        <ProfileCard
          key={profile.id}
          profile={profile}
          onChatClick={onChatClick}
        />
      ))}
    </motion.div>
  );
};
