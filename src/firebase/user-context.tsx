"user client";
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
import { LogEvent } from "@/utils/app-utils";
import firebase from "firebase/compat/app";
// import { useRouter } from "next/router";

const defaultAuthUser: UserContextType = {
  user: null,
  isLoading: true,
  logOut: () => Promise.resolve(),
  dbUser: null,
};

const authUserContext = createContext(defaultAuthUser);

export function UserProvider({ children }: { children: ReactNode }) {
  const firebaseAuth = useFirebaseAuth();
  const [dbUser, setDbUser] = useState<any | null>(null);

  useEffect(() => {
    const unsubscribe = firebaseAuth.auth.onIdTokenChanged(
      async (user: any) => {
        if (!user) {
          nookies.set(undefined, "token", "", { path: "/" });
        } else {
          try {
            const token = await user.getIdToken();
            nookies.set(undefined, "token", token, { path: "/" });
            const res = await axios.get("/api/user");
            setDbUser(res?.data?.user);
            window.onfocus = () => {
              user.getIdToken().then((token: any) => {
                nookies.set(undefined, "token", token, { path: "/" });
              });
            };
          } catch (error) {
            console.error("Error fetching user data:", error);
          }
        }
      }
    );

    return () => {
      unsubscribe();
    };
  }, []);
  // useEffect(() => {
  //   console.log("HIII");
  //   const handleRouteChange = (url: string) => {
  //     LogEvent("page_view", { page_path: url });
  //   };
  //   handleRouteChange(window.location.pathname);

  //   router.events.on("routeChangeComplete", handleRouteChange);

  //   return () => {
  //     router.events.off("routeChangeComplete", handleRouteChange);
  //   };
  // }, [router.events]);

  return (
    <authUserContext.Provider value={{ ...firebaseAuth, dbUser }}>
      {children}
    </authUserContext.Provider>
  );
}

export const useUser = () => useContext(authUserContext);
