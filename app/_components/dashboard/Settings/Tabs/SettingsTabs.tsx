import React from "react";
import { motion } from "framer-motion";
import { SettingsTab } from "../../../../_lib/settings";
import { SettingsTabItem } from "./SettingsTabItem";
import {
  UserCircleIcon,
  ShieldCheckIcon,
  BellIcon,
  ShareIcon,
  AdjustmentsHorizontalIcon,
} from "@heroicons/react/24/outline";

interface SettingsTabsProps {
  activeTab: SettingsTab;
  onTabChange: (tab: SettingsTab) => void;
}

export const SettingsTabs: React.FC<SettingsTabsProps> = ({
  activeTab,
  onTabChange,
}) => {
  const tabs = [
    { id: "account", label: "Account Settings", icon: UserCircleIcon },
    { id: "privacy", label: "Privacy & Security", icon: ShieldCheckIcon },
    { id: "notifications", label: "Notifications", icon: BellIcon },
    { id: "connected", label: "Connected Accounts", icon: ShareIcon },
    {
      id: "advanced",
      label: "Advanced Settings",
      icon: AdjustmentsHorizontalIcon,
    },
  ] as const;

  return (
    <div className="relative">
      <div className="flex  border max-w-fit max-h-fit rounded-xl bg-white dark:bg-black border-gray-400 dark:border-gray-800 hide-scrollbar gap-2">
        {tabs.map((tab) => (
          <SettingsTabItem
            key={tab.id}
            {...tab}
            isActive={activeTab === tab.id}
            onClick={() => onTabChange(tab.id)}
          />
        ))}
      </div>
    </div>
  );
};
