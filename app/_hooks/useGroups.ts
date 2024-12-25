import { useState, useEffect, useMemo } from "react";
import { Group } from "../_lib/groups";

const ITEMS_PER_PAGE = 10;

// Mock data

const mockGroups: Group[] = [
  {
    id: "1",
    groupName: "Tech Innovators",
    groupMembers: [
      {
        name: "Alice",
        username: "@alice",
        profilePicture: "https://i.pravatar.cc/150?img=1",
        bio: "Software Engineer",
      },
      {
        name: "Bob",
        username: "@bob",
        profilePicture: "https://i.pravatar.cc/150?img=2",
        bio: "Product Manager",
      },
      {
        name: "Carol",
        username: "@carol",
        profilePicture: "https://i.pravatar.cc/150?img=3",
        bio: "UX Designer",
      },
    ],
    createdBy: {
      name: "David Chen",
      username: "@davidchen",
      profilePicture: "https://i.pravatar.cc/150?img=4",
      bio: "Tech Lead & Mentor",
      connectionDate: "2023-06-15",
    },
    reason:
      "Collaborating on innovative tech solutions and sharing industry insights. Focus on AI and machine learning applications in enterprise software.",
    createdAt: "2024-12-22T10:00:00Z",
  },
  {
    id: "2",
    groupName: "AI Enthusiasts",
    groupMembers: [
      {
        name: "John",
        username: "@john",
        profilePicture: "https://i.pravatar.cc/150?img=4",
        bio: "Data Scientist",
      },
      {
        name: "Eve",
        username: "@eve",
        profilePicture: "https://i.pravatar.cc/150?img=5",
        bio: "AI Researcher",
      },
      {
        name: "Charlie",
        username: "@charlie",
        profilePicture: "https://i.pravatar.cc/150?img=6",
        bio: "ML Engineer",
      },
    ],
    createdBy: {
      name: "Sarah Wilson",
      username: "@sarahw",
      profilePicture: "https://i.pravatar.cc/150?img=5",
      bio: "AI Research Lead",
      connectionDate: "2023-08-20",
    },
    reason:
      "Exploring cutting-edge AI technologies and their practical applications in business.",
    createdAt: "2024-12-22T11:15:00Z",
  },
];

export const useGroups = (searchQuery: string, currentPage: number) => {
  const [groups] = useState<Group[]>(mockGroups);

  const filteredGroups = useMemo(() => {
    if (!searchQuery) return groups;

    const query = searchQuery.toLowerCase();
    return groups.filter(
      (group) =>
        group.groupName.toLowerCase().includes(query) ||
        group.groupMembers.some(
          (member) =>
            member.name.toLowerCase().includes(query) ||
            member.bio?.toLowerCase().includes(query)
        ) ||
        group.createdBy.name.toLowerCase().includes(query) ||
        group.reason.toLowerCase().includes(query)
    );
  }, [groups, searchQuery]);

  const paginatedGroups = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredGroups.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredGroups, currentPage]);

  const totalPages = Math.ceil(filteredGroups.length / ITEMS_PER_PAGE);

  return {
    groups: paginatedGroups,
    totalPages,
  };
};
