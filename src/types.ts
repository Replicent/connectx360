import { User } from "firebase/auth";

export type UserContextType = {
  user: User | null;
  isLoading: boolean;
  logOut: () => Promise<void>;
  dbUser: string | null;
};
