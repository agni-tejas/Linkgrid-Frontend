import { useCallback } from 'react';

export const useConnectedAccounts = (onUpdate: (settings: any) => Promise<void>) => {
  const handleConnect = useCallback(async (serviceId: string) => {
    try {
      // In a real app, this would initiate the OAuth flow
      // For now, we'll just simulate the connection
      await onUpdate({
        connected: {
          services: {
            [serviceId]: {
              connected: true,
              email: 'user@example.com'
            }
          }
        }
      });
    } catch (error) {
      console.error('Failed to connect account:', error);
    }
  }, [onUpdate]);

  const handleRevoke = useCallback(async (serviceId: string) => {
    try {
      await onUpdate({
        connected: {
          services: {
            [serviceId]: {
              connected: false,
              email: null
            }
          }
        }
      });
    } catch (error) {
      console.error('Failed to revoke access:', error);
    }
  }, [onUpdate]);

  return {
    handleConnect,
    handleRevoke,
  };
};