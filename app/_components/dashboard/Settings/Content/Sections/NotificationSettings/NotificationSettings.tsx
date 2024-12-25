import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NotificationCard } from "./NotificationCard";
import { SaveChangesBar } from "../../shared/SaveChangesBar";
import { WarningDialog } from "../../shared/WarningDialog";

interface NotificationSettingsProps {
  settings: {
    email: boolean;
    push: boolean;
    mentions: boolean;
    followers: boolean;
    likes: boolean;
    comments: boolean;
  };
  onUpdate: (settings: any) => Promise<void>;
  isLoading: boolean;
}

export const NotificationSettings: React.FC<NotificationSettingsProps> = ({
  settings,
  onUpdate,
  isLoading,
}) => {
  const [localSettings, setLocalSettings] = useState(settings);
  const [hasChanges, setHasChanges] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  const handleToggle = (id: string, enabled: boolean) => {
    const newSettings = { ...localSettings, [id]: enabled };
    setLocalSettings(newSettings);
    setHasChanges(true);

    // Check if all notifications would be disabled
    const allDisabled = Object.values(newSettings).every((value) => !value);
    if (allDisabled) {
      setShowWarning(true);
    }
  };

  const handleSave = async () => {
    try {
      await onUpdate({ notifications: localSettings });
      setHasChanges(false);
    } catch (error) {
      console.error("Failed to save notification settings:", error);
    }
  };

  const communicationOptions = [
    {
      id: "email",
      label: "Email Notifications",
      description:
        "Receive important updates and activity notifications via email",
      enabled: localSettings.email,
    },
    {
      id: "push",
      label: "Push Notifications",
      description: "Get instant notifications on your desktop or mobile device",
      enabled: localSettings.push,
    },
  ];

  const activityOptions = [
    {
      id: "followers",
      label: "New Connection",
      description: "Notify me when someone accepts my connection request",
      enabled: localSettings.followers,
    },
  ];

  return (
    <div className="space-y-8 w-full mx-auto">
      <div className="space-y-6">
        <NotificationCard
          title="Communication Preferences"
          description="Choose how you want to receive notifications"
          options={communicationOptions}
          onToggle={handleToggle}
        />

        <NotificationCard
          title="Activity Notifications"
          description="Control notifications for different types of activity"
          options={activityOptions}
          onToggle={handleToggle}
        />
      </div>

      <WarningDialog
        isOpen={showWarning}
        onClose={() => setShowWarning(false)}
        title="Turn off all notifications?"
        message="You won't receive any notifications. Are you sure you want to continue?"
        confirmLabel="Yes, turn off all"
        cancelLabel="No, keep some on"
      />
    </div>
  );
};
