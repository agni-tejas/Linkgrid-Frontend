import React from "react";
import { motion } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Profile } from "../../../../_lib/ai-assistants";

interface ChatHeaderProps {
  profile: Profile;
  onClose: () => void;
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({ profile, onClose }) => {
  return (
    <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
      <div className="flex items-center gap-3">
        <motion.img
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          src={profile.avatar}
          alt={profile.name}
          className="w-10 h-10 rounded-full object-cover ring-2 ring-brand-50"
        />
        <div>
          <h3 className="font-semibold text-gray-900">{profile.name}</h3>
          <p className="text-sm text-gray-500">@{profile.username}</p>
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onClose}
        className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
        aria-label="Close chat"
      >
        <XMarkIcon className="w-5 h-5 text-gray-500" />
      </motion.button>
    </div>
  );
};
