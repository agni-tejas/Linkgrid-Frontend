export interface Recommendation {
  id: string;
  profilePicture: string;
  name: string;
  username: string;
  bio: string;
  matchPercentage: number;
  matchingReasons: string[];
}

export type SortOption = 'matchPercentage' | 'matchPercentageAsc' | 'name';