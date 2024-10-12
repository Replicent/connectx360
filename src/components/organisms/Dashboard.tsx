"use client";
import React from "react";
import useFirebaseAuth from "@/hooks/auth";
import Loader from "@/components/atoms/Loader";

const Dashboard = () => {
  const { user, isLoading, logOut } = useFirebaseAuth();

  if (!user?.phoneNumber || isLoading) return <Loader />;

  return (
    <div>
      <h1>Dashboard</h1>
      <p>User: {user?.phoneNumber}</p>
      <button onClick={logOut}>Log Out</button>
    </div>
  );
};

export default Dashboard;
