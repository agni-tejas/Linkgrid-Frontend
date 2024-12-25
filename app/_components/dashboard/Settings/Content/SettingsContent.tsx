import React from "react";
import { Settings, SettingsTab } from "../../../../_lib/settings";
import { AccountSettings } from "./Sections/AccountSettings";
import { PrivacySettings } from "./Sections/PrivacySettings";
import { NotificationSettings } from "./Sections/NotificationSettings/NotificationSettings";
import { ConnectedAccountsSettings } from "./Sections/ConnectedAccounts/ConnectedAccountsSettings";
import { AdvancedSettings } from "./Sections/Advanced/AdvancedSettings";
interface SettingsContentProps {
  activeTab: SettingsTab;
  settings: Settings;
  onUpdate: (settings: Partial<Settings>) => Promise<void>;
  isLoading: boolean;
}

export const SettingsContent: React.FC<SettingsContentProps> = ({
  activeTab,
  settings,
  onUpdate,
  isLoading,
}) => {
  const renderContent = () => {
    switch (activeTab) {
      case "account":
        return (
          <AccountSettings
            settings={settings.account}
            onUpdate={onUpdate}
            isLoading={isLoading}
          />
        );
      case "privacy":
        return (
          <PrivacySettings
            settings={settings.privacy}
            onUpdate={onUpdate}
            isLoading={isLoading}
          />
        );
      case "notifications":
        return (
          <NotificationSettings
            settings={settings.notifications}
            onUpdate={onUpdate}
            isLoading={isLoading}
          />
        );
      case "connected":
        return (
          <ConnectedAccountsSettings
            services={settings.connected.services}
            onUpdate={onUpdate}
            isLoading={isLoading}
          />
        );
      case "advanced":
        return (
          <AdvancedSettings
            settings={settings.advanced}
            onUpdate={onUpdate}
            isLoading={isLoading}
          />
        );
      default:
        return null;
    }
  };

  return <div className="flex flex-col gap-8">{renderContent()}</div>;
};
