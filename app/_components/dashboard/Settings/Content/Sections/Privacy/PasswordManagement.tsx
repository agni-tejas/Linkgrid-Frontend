import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PasswordForm } from "./PasswordForm";
import { PasswordDisplay } from "./PasswordDisplay";
import { formatDistanceToNow } from "date-fns";

interface PasswordManagementProps {
  hasPassword: boolean;
  lastPasswordChange: string;
  onUpdate: (settings: any) => Promise<void>;
  isLoading: boolean;
}

export const PasswordManagement: React.FC<PasswordManagementProps> = ({
  hasPassword,
  lastPasswordChange,
  onUpdate,
  isLoading,
}) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = async (data: {
    currentPassword?: string;
    newPassword: string;
  }) => {
    try {
      await onUpdate({ privacy: { password: data.newPassword } });
      setIsEditing(false);
    } catch (error) {
      console.error("Failed to update password:", error);
    }
  };

  return (
    <div className="space-y-6 pb-6">
      <AnimatePresence mode="wait">
        {isEditing ? (
          <PasswordForm
            key="form"
            hasPassword={hasPassword}
            onSave={handleSave}
            onCancel={() => setIsEditing(false)}
            isLoading={isLoading}
          />
        ) : (
          <PasswordDisplay
            key="display"
            hasPassword={hasPassword}
            lastPasswordChange={lastPasswordChange}
            onEdit={() => setIsEditing(true)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};
