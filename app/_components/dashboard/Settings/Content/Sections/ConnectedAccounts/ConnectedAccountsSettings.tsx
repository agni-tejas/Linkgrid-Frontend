import React, { useState } from "react";
import { motion } from "framer-motion";
import { AccountsList } from "./components/AccountsList";
import { AddAccountButton } from "./components/AddAccountButton";
import { AddAccountModal } from "./components/AddAccountModal";
import { RevokeAccessModal } from "./components/RevokeAccessModal";
import { useConnectedAccounts } from "./hooks/useConnectedAccounts";

interface ConnectedAccountsSettingsProps {
  services: Array<{
    id: string;
    name: string;
    icon: string;
    connected: boolean;
    email?: string;
    username?: string;
  }>;
  onUpdate: (settings: any) => Promise<void>;
  isLoading: boolean;
}

export const ConnectedAccountsSettings: React.FC<
  ConnectedAccountsSettingsProps
> = ({ services, onUpdate, isLoading }) => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [revokeAccount, setRevokeAccount] = useState<string | null>(null);
  const { handleConnect, handleRevoke } = useConnectedAccounts(onUpdate);

  const revokeAccountDetails = revokeAccount
    ? services.find((s) => s.id === revokeAccount)
    : null;

  return (
    <div className="space-y-8 w-full mx-auto">
      <div className="space-y-6">
        <div className="flex justify-end">
          <AddAccountButton onClick={() => setShowAddModal(true)} />
        </div>

        <AccountsList
          accounts={services}
          onRevokeAccess={setRevokeAccount}
          isLoading={isLoading}
        />
      </div>

      <AddAccountModal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        onConnect={handleConnect}
        connectedServices={services}
      />

      <RevokeAccessModal
        isOpen={!!revokeAccount}
        onClose={() => setRevokeAccount(null)}
        onConfirm={() => {
          if (revokeAccount) {
            handleRevoke(revokeAccount);
            setRevokeAccount(null);
          }
        }}
        serviceName={revokeAccountDetails?.name}
      />
    </div>
  );
};
