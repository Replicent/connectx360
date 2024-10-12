"use client";
import { User } from "firebase/auth";
import { useEffect, useState } from "react";
import { analytics, auth, isSupported, setUserId } from "../firebase/app";
import { logOut } from "../firebase/auth";

export default function useFirebaseAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        if (analytics && (await isSupported())) {
          setUserId(analytics, user.uid);
        }
      } else {
        setUser(null);
      }
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return {
    auth,
    user,
    isLoading,
    logOut,
  };
}
