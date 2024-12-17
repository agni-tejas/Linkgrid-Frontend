import React from "react";
import { motion } from "framer-motion";
import { ChatBubbleLeftIcon } from "@heroicons/react/24/outline";
import { CardHeader } from "./ProfileCard/CardHeader";
import { CardContent } from "./ProfileCard/CardContent";
import { Profile } from "../../../../_lib/ai-assistants";

interface ProfileCardProps {
  profile: Profile;
  onChatClick: (id: string) => void;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({
  profile,
  onChatClick,
}) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-gradient-to-r 
     from-teal-100 via-[#ffffff] to-teal-100
     dark:from-[#000000] dark:via-stone-900 dark:to-[#000000] flex flex-col rounded-3xl p-6 shadow-sm hover:shadow-md
                 border border-gray-100 dark:border-gray-800 transition-all duration-300"
    >
      <CardHeader profile={profile} />
      <CardContent
        name={profile.name}
        username={profile.username}
        bio={profile.bio}
      />
      <div className="flex items-center justify-center">
        <motion.button
          onClick={() => onChatClick(profile.id)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-[8rem] px-4 py-2 bg-gradient-to-r border border-gray-800 dark:border-gray-300 from-gray-50/90 to-slate-200/90
          dark:from-stone-800 dark:to-stone-950
        text-black dark:text-white rounded-lg font-medium shadow-sm
        hover:shadow-lg hover:from-sky-300 hover:to-blue-400
        dark:hover:from-sky-400 dark:hover:to-blue-500
        transition-all duration-300
        flex items-center justify-center gap-2"
        >
          <ChatBubbleLeftIcon className="w-5 h-5" />
          Chat
        </motion.button>
      </div>
    </motion.div>
  );
};
