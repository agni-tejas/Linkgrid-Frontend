import React, { useState } from "react";
import { SearchHeader } from "./SearchHeader";
import { SearchContainer } from "./SearchContainer";
import { SearchForm } from "./SearchForm";
import { SearchContext } from "./SearchContext";
import { AnimatePresence } from "framer-motion";
import { useNetworkSearch } from "./useNetworkSearch";
import { SearchResults } from "./SearchResults";

export const NetworkSearch2: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const { isLoading, handleSearch } = useNetworkSearch();

  const handleSearchSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleSearch(e);
    setShowResults(true);
  };

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery, isLoading }}>
      <AnimatePresence mode="wait">
        {!showResults ? (
          <div className="w-full h-screen mx-auto px-4  ">
            <SearchHeader />
            <SearchContainer>
              <SearchForm onSubmit={handleSearchSubmit} />
            </SearchContainer>
          </div>
        ) : (
          <div className="w-full mx-auto px-4  ">
            <SearchResults
              query={searchQuery}
              onQueryChange={(newQuery) => setSearchQuery(newQuery)}
            />
          </div>
        )}
      </AnimatePresence>
    </SearchContext.Provider>
  );
};
