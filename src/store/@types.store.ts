export interface User {
  name: string;
  email: string;
  id: string;
  avatar: string;
  noOfFeedback: number;
  noOfPosts: number;
}

export interface UserStore {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}
