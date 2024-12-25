import React from "react";
import { motion } from "framer-motion";
import { DeleteAccountCard } from "./DeleteAccountCard";
import { useAdvancedSettings } from "./hooks/useAdvancedSettings";

interface AdvancedSettingsProps {
  onUpdate: (settings: any) => Promise<void>;
  isLoading: boolean;
}

export const AdvancedSettings: React.FC<AdvancedSettingsProps> = ({
  onUpdate,
  isLoading,
}) => {
  const { handleDeleteAccount } = useAdvancedSettings(onUpdate);

  return (
    <div className="space-y-8 w-full pr-4 mx-auto">
      <DeleteAccountCard
        onDeleteAccount={handleDeleteAccount}
        isLoading={isLoading}
      />
    </div>
  );
};
