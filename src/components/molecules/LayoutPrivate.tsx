"use client";
import React, { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useFirebaseAuth from "@/hooks/auth";
import Loader from "@/components/atoms/Loader";

const LayoutPrivate = ({ children }: { children: ReactNode }) => {
  const { user, isLoading: userLoading } = useFirebaseAuth();
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (!user?.phoneNumber && !userLoading) {
      router.push("/sign-in");
    } else {
      setIsLoading(false);
    }
  }, [user, userLoading]);

  const loading = isLoading || userLoading || !user?.phoneNumber;

  return loading ? <Loader /> : <div>{children}</div>;
};

export default LayoutPrivate;
