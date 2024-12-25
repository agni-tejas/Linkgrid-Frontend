import React, { useState } from "react";
import { motion } from "framer-motion";
import { SettingsHeader } from "./Header/SettingsHeader";
import { SettingsTabs } from "./Tabs/SettingsTabs";
import { SettingsContent } from "./Content/SettingsContent";
import { useSettings } from "../../../_hooks/useSettings";
import { SettingsTab } from "../../../_lib/settings";

export const SettingsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<SettingsTab>("account");
  const { settings, updateSettings, isLoading } = useSettings();

  return (
    <div className="min-h-screen">
      <div className=" w-full pl-4 mx-auto py-8">
        <SettingsHeader />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8"
        >
          <SettingsTabs activeTab={activeTab} onTabChange={setActiveTab} />

          <div className="mt-8">
            <SettingsContent
              activeTab={activeTab}
              settings={settings}
              onUpdate={updateSettings}
              isLoading={isLoading}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};
