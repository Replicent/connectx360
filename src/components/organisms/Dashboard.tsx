"use client";
import React from "react";
import useFirebaseAuth from "@/hooks/auth";
import Loader from "@/components/atoms/Loader";
import { useSendMail } from "@/hooks/mail";

const Dashboard = () => {
  const { user, isLoading, logOut } = useFirebaseAuth();
  const { mutate } = useSendMail();

  const handleSendEmail = () => {
    mutate(undefined, {
      onSuccess: (res) => {
        console.log("RES:: ", res);
      },
    });
  };

  if (!user?.phoneNumber || isLoading) return <Loader />;

  return (
    <div>
      <h1>Dashboard</h1>
      <p>User: {user?.phoneNumber}</p>
      <button onClick={logOut}>Log Out</button>
      <button onClick={handleSendEmail}>Send Email</button>
    </div>
  );
};

export default Dashboard;
