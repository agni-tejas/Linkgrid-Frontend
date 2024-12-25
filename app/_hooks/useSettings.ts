import { useState, useCallback } from "react";
import { Settings } from "../_lib/settings";

const mockSettings: Settings = {
  account: {
    username: "johndoe",
    email: "john.doe@example.com",
    profilePhoto: "https://i.pravatar.cc/300",
  },
  privacy: {
    twoFactorEnabled: false,
    lastPasswordChange: "2024-01-15",
  },
  notifications: {
    email: true,
    push: true,
    sms: false,
  },
  connected: {
    services: [
      {
        id: "twitter",
        name: "X",
        icon: "/icons/x.svg",
        connected: true,
      },
      {
        id: "google",
        name: "Google",
        icon: "/icons/google.svg",
        connected: false,
      },
    ],
  },
  advanced: {
    betaFeatures: false,
    experimentalMode: false,
  },
};

export const useSettings = () => {
  const [settings, setSettings] = useState<Settings>(mockSettings);
  const [isLoading, setIsLoading] = useState(false);

  const updateSettings = useCallback(async (newSettings: Partial<Settings>) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSettings((prev) => ({ ...prev, ...newSettings }));
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    settings,
    updateSettings,
    isLoading,
  };
};
