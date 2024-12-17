export interface ConnectedBy {
  name: string;
  profilePicture: string;
}

export interface Invitation {
  profilePicture: string;
  name: string;
  username: string;
  bio: string;
  status: 'Pending' | 'Accepted' | 'Declined';
  connectedBy: ConnectedBy;
}

export type SortField = 'name' | 'status';
export type SortOrder = 'asc' | 'desc';
export type StatusFilter = 'All' | 'Pending' | 'Accepted' | 'Declined';