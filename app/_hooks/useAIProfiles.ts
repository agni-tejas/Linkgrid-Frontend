import { useState, useMemo } from "react";
import { Profile } from "../_lib/ai-assistants";
import { generateMockProfiles } from "../_lib/mockDataGenerators";

export const useAIProfiles = (
  filter: "all" | "followers" | "2nd-degree",
  searchQuery: string
) => {
  const [profiles] = useState<Profile[]>(generateMockProfiles());

  const filteredProfiles = useMemo(() => {
    let filtered = profiles;

    // Apply type filter
    if (filter !== "all") {
      filtered = filtered.filter((profile) =>
        filter === "followers"
          ? profile.type === "follower"
          : profile.type === "2nd-degree"
      );
    }

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (profile) =>
          profile.name.toLowerCase().includes(query) ||
          profile.username.toLowerCase().includes(query) ||
          profile.bio.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [profiles, filter, searchQuery]);

  return {
    profiles,
    filteredProfiles,
  };
};
