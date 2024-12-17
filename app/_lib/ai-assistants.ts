export interface Profile {
  id: string;
  name: string;
  username: string;
  bio: string;
  avatar: string;
  type: 'follower' | '2nd-degree';
}