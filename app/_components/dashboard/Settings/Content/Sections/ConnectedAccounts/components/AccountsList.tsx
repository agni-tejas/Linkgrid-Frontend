import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ServiceCard } from './ServiceCard';

interface AccountsListProps {
  accounts: Array<{
    id: string;
    name: string;
    icon: string;
    connected: boolean;
    email?: string;
    username?: string;
  }>;
  onRevokeAccess: (id: string) => void;
  isLoading: boolean;
}

export const AccountsList: React.FC<AccountsListProps> = ({
  accounts,
  onRevokeAccess,
  isLoading,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-4"
    >
      <AnimatePresence mode="popLayout">
        {accounts.map((account) => (
          <ServiceCard
            key={account.id}
            service={account}
            onRevokeAccess={() => onRevokeAccess(account.id)}
            isLoading={isLoading}
          />
        ))}
      </AnimatePresence>
    </motion.div>
  );
};