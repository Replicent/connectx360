import { User } from "firebase/auth";

export type UserContextType = {
  user: User | null;
  isLoading: boolean;
  logOut: () => Promise<void>;
  dbUser: string | null;
};

export type UserRoles = "ADMIN" | "USER" | "CLIENT";

export type UserType = {
  firebaseid: string;
  phone: string;
  role: UserRoles;
  name?: string;
  email?: string;
};
