import React, { useRef, useState } from "react";
import { UserCircleIcon, Cog6ToothIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { ProfileDropdown } from "./ProfileDropdown/ProfileDropdown";

interface ProfileSectionProps {
  name: string;
  role: string;
  email: string;
  imageUrl?: string;
  isCollapsed?: boolean;
  onSettingsClick?: () => void;
  onSectionChange?: (section: string) => void;
}

export const ProfileSection: React.FC<ProfileSectionProps> = ({
  name,
  role,
  onSectionChange,
  email,
  imageUrl,
  isCollapsed = false,
  onSettingsClick,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={profileRef}
      className="relative p-4 after:content-[''] after:absolute after:bottom-0 after:left-4 after:right-4 after:h-px after:bg-slate-400 dark:after:bg-slate-800"
      initial={false}
      animate={{
        width: isCollapsed ? "64px" : "100%",
      }}
    >
      <div
        className={`flex items-center  ${
          isCollapsed ? "justify-center" : "gap-0"
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
              className="w-10 h-10 rounded-full object-cover"
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center">
              <UserCircleIcon className="w-8 h-8 text-brand-500" />
            </div>
          )}
        </motion.div>

        {!isCollapsed && (
          <div className="flex items-center gap-14  flex-1">
            <motion.button
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              className="flex-1 py-2  hover:bg-stone-900 rounded-lg"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <h2 className="text-base font-semibold text-gray-900 dark:text-white">
                {name}
              </h2>
            </motion.button>

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
        <ProfileDropdown
          isOpen={isDropdownOpen}
          onClose={() => setIsDropdownOpen(false)}
          email={email}
          referenceElement={profileRef.current}
          onSectionChange={onSectionChange}
        />
      </div>
    </motion.div>
  );
};
