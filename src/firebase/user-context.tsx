import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import axios from "axios";
import nookies from "nookies";
import { UserContextType } from "../types";
import useFirebaseAuth from "@/hooks/auth";
import { User } from "@firebase/auth";

const defaultAuthUser: UserContextType = {
  user: null,
  isLoading: true,
  logOut: () => Promise.resolve(),
  dbUser: null,
};

const authUserContext = createContext(defaultAuthUser);

export function UserProvider({ children }: { children: ReactNode }) {
  const firebaseAuth = useFirebaseAuth();
  const [dbUser, setDbUser] = useState(null);

  const onIdTokenChanged = async (user: User | null) => {
    if (!user) {
      nookies.set(undefined, "token", "", { path: "/" });
    } else {
      try {
        const token = await user.getIdToken();
        nookies.set(undefined, "token", token, { path: "/" });
        const res = await axios.get("/api/user/auth");
        setDbUser(res?.data?.user);
        window.onfocus = () => {
          user.getIdToken().then((token: string) => {
            nookies.set(undefined, "token", token, { path: "/" });
          });
        };
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }
  };

  useEffect(() => {
    const unsubscribe = firebaseAuth.auth.onIdTokenChanged(onIdTokenChanged);
    return () => unsubscribe();
  }, []);

  return (
    <authUserContext.Provider value={{ ...firebaseAuth, dbUser }}>
      {children}
    </authUserContext.Provider>
  );
}

export const useUser = () => useContext(authUserContext);
