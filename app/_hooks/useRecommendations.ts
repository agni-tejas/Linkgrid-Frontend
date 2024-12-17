import { useState, useMemo } from "react";
import { Recommendation, SortOption } from "../_lib/recommendations";

const mockRecommendations: Recommendation[] = [
  {
    id: "1",
    profilePicture: "https://i.pravatar.cc/300?img=1",
    name: "Dr. Jane Doe",
    username: "@jane_doe",
    bio: "AI researcher and startup founder. Passionate about deep learning and neural networks. Building the future of autonomous systems.",
    matchPercentage: 95,
    matchingReasons: [
      "Frequent discussions on AI and machine learning",
      "Similar professional background in tech startups",
      "You both follow 30+ mutual Twitter accounts",
    ],
  },
  {
    id: "2",
    profilePicture: "https://i.pravatar.cc/300?img=2",
    name: "John Smith",
    username: "@john_smith",
    bio: "Software engineer specializing in blockchain and Web3. Building decentralized applications.",
    matchPercentage: 81,
    matchingReasons: [
      "Shared interest in blockchain technology",
      "You both actively engage with crypto influencers",
      "Frequent mentions of decentralized finance",
    ],
  },
  {
    id: "3",
    profilePicture: "https://i.pravatar.cc/300?img=2",
    name: "John Smith",
    username: "@john_smith",
    bio: "Software engineer specializing in blockchain and Web3. Building decentralized applications.",
    matchPercentage: 75,
    matchingReasons: [
      "Shared interest in blockchain technology",
      "You both actively engage with crypto influencers",
      "Frequent mentions of decentralized finance",
    ],
  },
  {
    id: "4",
    profilePicture: "https://i.pravatar.cc/300?img=2",
    name: "John Smith",
    username: "@john_smith",
    bio: "Software engineer specializing in blockchain and Web3. Building decentralized applications.",
    matchPercentage: 67,
    matchingReasons: [
      "Shared interest in blockchain technology",
      "You both actively engage with crypto influencers",
      "Frequent mentions of decentralized finance",
    ],
  },
  {
    id: "5",
    profilePicture: "https://i.pravatar.cc/300?img=2",
    name: "John Smith",
    username: "@john_smith",
    bio: "Software engineer specializing in blockchain and Web3. Building decentralized applications.",
    matchPercentage: 54,
    matchingReasons: [
      "Shared interest in blockchain technology",
      "You both actively engage with crypto influencers",
      "Frequent mentions of decentralized finance",
    ],
  },
  {
    id: "6",
    profilePicture: "https://i.pravatar.cc/300?img=2",
    name: "John Smith",
    username: "@john_smith",
    bio: "Software engineer specializing in blockchain and Web3. Building decentralized applications.",
    matchPercentage: 45,
    matchingReasons: [
      "Shared interest in blockchain technology",
      "You both actively engage with crypto influencers",
      "Frequent mentions of decentralized finance",
    ],
  },
  {
    id: "7",
    profilePicture: "https://i.pravatar.cc/300?img=2",
    name: "John Smith",
    username: "@john_smith",
    bio: "Software engineer specializing in blockchain and Web3. Building decentralized applications.",
    matchPercentage: 38,
    matchingReasons: [
      "Shared interest in blockchain technology",
      "You both actively engage with crypto influencers",
      "Frequent mentions of decentralized finance",
    ],
  },
  // Add more mock data here...
];

export const useRecommendations = (
  searchQuery: string,
  sortOption: SortOption
) => {
  const [recommendations] = useState<Recommendation[]>(mockRecommendations);

  const filteredAndSortedRecommendations = useMemo(() => {
    let result = [...recommendations];

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (rec) =>
          rec.name.toLowerCase().includes(query) ||
          rec.username.toLowerCase().includes(query) ||
          rec.bio.toLowerCase().includes(query)
      );
    }

    // Apply sorting
    result.sort((a, b) => {
      switch (sortOption) {
        case "matchPercentage":
          return b.matchPercentage - a.matchPercentage;
        case "matchPercentageAsc":
          return a.matchPercentage - b.matchPercentage;
        case "name":
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

    return result;
  }, [recommendations, searchQuery, sortOption]);

  return {
    recommendations: filteredAndSortedRecommendations,
    totalCount: filteredAndSortedRecommendations.length,
  };
};
