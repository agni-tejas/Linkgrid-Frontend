export type SettingsTab =
  | "account"
  | "privacy"
  | "notifications"
  | "connected"
  | "advanced";

export interface Settings {
  account: {
    firstName: string;
    lastName: string;
    email: string;
    profilePhoto: string;
  };
  privacy: {
    twoFactorEnabled: boolean;
    lastPasswordChange: string;
  };
  notifications: {
    email: boolean;
    push: boolean;
    sms: boolean;
  };
  connected: {
    services: Array<{
      id: string;
      name: string;
      icon: string;
      connected: boolean;
    }>;
  };
  advanced: {
    betaFeatures: boolean;
    experimentalMode: boolean;
  };
}
