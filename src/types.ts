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

export type ProposalStatus =
  | "awaiting_acceptance"
  | "accepted"
  | "lost"
  | "ending_soon"
  | "completed";

export type ProposalType = {
  id: string;
  client: string;
  proposal_name: string;
  start: string;
  end: string;
  sent: string;
  reminders: string;
  viewed: boolean;
  value: string;
  status: ProposalStatus;
};
