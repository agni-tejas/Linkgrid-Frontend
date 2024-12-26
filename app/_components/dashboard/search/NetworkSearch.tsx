import React, { useState } from "react";
import { SearchHeader } from "./SearchHeader";
import { SearchContainer } from "./SearchContainer";
import { SearchForm } from "./SearchForm";
import { SearchContext } from "./SearchContext";
import { AnimatePresence } from "framer-motion";
import { useNetworkSearch } from "./useNetworkSearch";
import { SearchResults } from "./SearchResults";
import { useSearchDialog } from "./SearchDialogContext";

export const NetworkSearch2: React.FC = () => {
  const {
    searchQuery,
    setSearchQuery,
    setMessages,
    setDescriptions,
    setRecommendations,
    setIsLoading,
    isLoading,
    setMsg,
  } = useSearchDialog();
  const [showResults, setShowResults] = useState(false);
  const { handleSearch } = useNetworkSearch();
  console.log(searchQuery);

  const handleSearchSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    await handleSearch(e);
    setShowResults(true);

    try {
      const response = await fetch("http://127.0.0.1:8000/recommendations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id: 1, user_input: searchQuery }),
      });

      if (!response.ok) {
        throw new Error("Failed to start task");
      }

      const { task_id } = await response.json();
      await pollTaskResult(task_id);
    } catch (error) {
      console.error("Error starting task:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const pollTaskResult = async (taskId) => {
    const interval = 2000;
    const seenSteps = new Set(); // Track steps to avoid duplicates

    while (true) {
      const response = await fetch(
        `http://127.0.0.1:8000/recommendations/result/${taskId}`
      );

      if (!response.ok) {
        console.error("Failed to fetch task result");
        return;
      }

      const data = await response.json();
      console.log(data);

      if (data.status === "completed") {
        // Handle full response with nested recommendations
        if (data.recommendations?.steps) {
          updateState(data.recommendations.steps);
        }
        break;
      }

      if (data.steps) {
        // Handle partial response
        updateState(data.steps);
      }

      await new Promise((resolve) => setTimeout(resolve, interval));
    }
  };

  const updateState = (steps) => {
    steps.forEach((step) => {
      switch (step.step) {
        case "ai_message":
          if (step.message) {
            setMsg((prev) => [...new Set([...prev, step.message])]); // Avoid duplicates
          }
          break;

        case "analyze_input":
          if (step.message) {
            setMessages((prev) => [...new Set([...prev, step.message])]); // Avoid duplicates
          }
          break;

        case "generate_descriptions":
          if (step.descriptions) {
            setDescriptions((prev) => [
              ...new Set([...prev, ...step.descriptions]),
            ]);
          }
          break;

        case "generate_recommendations":
          if (step.recommendations) {
            setRecommendations((prev) => [
              ...new Set([...prev, ...step.recommendations]),
            ]);
          }
          break;

        default:
          console.warn("Unknown step:", step.step);
      }
    });
  };

  return (
    <AnimatePresence mode="wait">
      {!showResults ? (
        <div className="w-full h-screen mx-auto px-4  ">
          <SearchHeader />
          <div className="mx-auto max-w-3xl ">
            <SearchContainer>
              <SearchForm onSubmit={handleSearchSubmit} />
            </SearchContainer>
          </div>
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
  );
};
