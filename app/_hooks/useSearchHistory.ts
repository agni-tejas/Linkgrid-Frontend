import { useState, useMemo } from "react";
import { SearchHistoryItem } from "../_lib/search";
import { formatDistanceToNow, subDays, subHours, subMinutes } from "date-fns";

// Mock data generator for demonstration
const generateMockSearchHistory = (): SearchHistoryItem[] => {
  const categories = ["People", "Groups", "Documents", "Projects", "Messages"];
  const terms = [
    "Marketing Strategy 2024",
    "Frontend Development Team",
    "Q1 Financial Report",
    "Product Design Guidelines",
    "Team Building Activities",
    "Customer Feedback Analysis",
    "Project Timeline Template",
    "Sales Performance Dashboard",
    "Employee Onboarding Process",
    "Social Media Campaign",
    "Website Redesign Project",
    "Budget Planning Meeting",
    "Remote Work Policy",
    "Brand Style Guide",
    "User Research Results",
    "Content Calendar",
    "API Documentation",
    "Security Guidelines",
    "Training Materials",
    "Analytics Report",
  ];

  return terms.map((term, index) => {
    const timestamp =
      index % 4 === 0
        ? subMinutes(new Date(), Math.random() * 59 + 1)
        : index % 3 === 0
        ? subHours(new Date(), Math.random() * 23 + 1)
        : subDays(new Date(), Math.random() * 30 + 1);

    return {
      id: `search-${index + 1}`,
      query: term,
      timestamp: formatDistanceToNow(timestamp, { addSuffix: true }),
      category: categories[Math.floor(Math.random() * categories.length)],
    };
  });
};

export const useSearchHistory = (filterQuery: string) => {
  const [searchHistory] = useState<SearchHistoryItem[]>(
    generateMockSearchHistory()
  );

  const filteredHistory = useMemo(() => {
    if (!filterQuery) return searchHistory;

    const query = filterQuery.toLowerCase();
    return searchHistory.filter(
      (item) =>
        item.query.toLowerCase().includes(query) ||
        item.category?.toLowerCase().includes(query)
    );
  }, [searchHistory, filterQuery]);

  return {
    searchHistory,
    filteredHistory,
  };
};
