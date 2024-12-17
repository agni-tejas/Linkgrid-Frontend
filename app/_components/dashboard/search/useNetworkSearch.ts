import { useState, useCallback } from 'react';

export const useNetworkSearch = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      // Handle search logic here
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    isLoading,
    handleSearch,
  };
};