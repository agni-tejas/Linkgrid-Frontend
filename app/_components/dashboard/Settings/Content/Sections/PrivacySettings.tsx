import React from "react";
import { motion } from "framer-motion";
import { PasswordManagement } from "./Privacy/PasswordManagement";
import { SettingsCard } from "../shared/SettingsCard";

interface PrivacySettingsProps {
  settings: {
    hasPassword: boolean;
    lastPasswordChange: string;
  };
  onUpdate: (settings: any) => Promise<void>;
  isLoading: boolean;
}

export const PrivacySettings: React.FC<PrivacySettingsProps> = ({
  settings,
  onUpdate,
  isLoading,
}) => {
  return (
    <div className="space-y-8 w-full mx-auto">
      <div className="dark:bg-zinc-950 bg-gray-100 border border-gray-400 dark:border-gray-800 rounded-xl">
        <SettingsCard
          title="Password Management"
          description="Update your password and manage your account security"
        >
          <PasswordManagement
            hasPassword={settings.hasPassword}
            lastPasswordChange={settings.lastPasswordChange}
            onUpdate={onUpdate}
            isLoading={isLoading}
          />
        </SettingsCard>
      </div>
    </div>
  );
};
