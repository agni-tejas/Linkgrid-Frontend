import React, { createContext, useContext, useState } from "react";

interface SearchDialogContextProps {
  isHistoryDialogOpen: boolean;
  setIsHistoryDialogOpen: (isOpen: boolean) => void;
  isCollapsed: boolean;
  setIsCollapsed: (isCollapsed: boolean) => void;
}

const SearchDialogContext = createContext<SearchDialogContextProps | undefined>(
  undefined
);

export const SearchDialogProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isHistoryDialogOpen, setIsHistoryDialogOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <SearchDialogContext.Provider
      value={{
        isHistoryDialogOpen,
        setIsHistoryDialogOpen,
        isCollapsed,
        setIsCollapsed,
      }}
    >
      {children}
    </SearchDialogContext.Provider>
  );
};

export const useSearchDialog = () => {
  const context = useContext(SearchDialogContext);
  if (!context) {
    throw new Error(
      "useSearchDialog must be used within a SearchDialogProvider"
    );
  }
  return context;
};
