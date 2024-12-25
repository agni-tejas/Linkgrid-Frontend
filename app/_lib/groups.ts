export interface GroupMember {
  name: string;
  username: string;
  profilePicture: string;
  bio?: string;
}

export interface CreatedBy extends GroupMember {
  connectionDate?: string;
}

export interface Group {
  id: string;
  groupName: string;
  groupMembers: GroupMember[];
  createdBy: CreatedBy;
  reason: string;
  createdAt: string;
}
