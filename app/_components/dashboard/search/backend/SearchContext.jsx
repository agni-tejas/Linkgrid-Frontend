import React, { createContext, useState, useContext } from "react";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [messages, setMessages] = useState([]);
  const [descriptions, setDescriptions] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [msg , setMsg] = useState([])

  return (
    <SearchContext.Provider
      value={{
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
        setMsg
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => useContext(SearchContext);
