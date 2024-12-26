import React, { createContext, useContext, useState } from "react";

interface SearchDialogContextProps {
  isHistoryDialogOpen: boolean;
  setIsHistoryDialogOpen: (isOpen: boolean) => void;
  isCollapsed: boolean;
  setIsCollapsed: (isCollapsed: boolean) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  messages: any[];
  setMessages: (messages: any[]) => void;
  descriptions: any[];
  setDescriptions: (descriptions: any[]) => void;
  recommendations: any[];
  setRecommendations: (recommendations: any[]) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  msg: any[];
  setMsg: (msg: any[]) => void;
}

const SearchDialogContext = createContext<SearchDialogContextProps | undefined>(
  undefined
);

export const SearchDialogProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isHistoryDialogOpen, setIsHistoryDialogOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [messages, setMessages] = useState<any[]>([]);
  const [descriptions, setDescriptions] = useState<any[]>([]);
  const [recommendations, setRecommendations] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [msg, setMsg] = useState<any[]>([]);

  return (
    <SearchDialogContext.Provider
      value={{
        isHistoryDialogOpen,
        setIsHistoryDialogOpen,
        isCollapsed,
        setIsCollapsed,
        searchQuery,
        setSearchQuery,
        messages,
        setMessages,
        descriptions,
        setDescriptions,
        recommendations,
        setRecommendations,
        isLoading,
        setIsLoading,
        msg,
        setMsg,
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
