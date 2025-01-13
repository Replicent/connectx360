"use client";
import React from "react";
import { useSendMail } from "@/hooks/mail";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import { SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import AppSidebar from "./AppSidebar";

const Home = () => {
  const { mutate } = useSendMail();

  const handleSendEmail = () => {
    mutate(undefined, {
      onSuccess: (res) => {
        console.log("RES:: ", res);
      },
    });
  };

  return (
    <div>
      {/* Dashboard Header */}
      <header className="flex items-center justify-between bg-white shadow p-4 rounded-lg mb-6">
        <h1 className="text-3xl font-semibold text-gray-800">
          Welcome to ConnectX360
        </h1>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 flex gap-2 items-center justify-center font-semibold hover:cursor-pointer">
          <span>New Proposal</span>
          <PlusCircledIcon />
        </button>
      </header>

      {/* Dashboard Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold text-gray-800">Overview</h2>
          <p className="text-gray-600">
            Quick insights about your performance.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold text-gray-800">Tasks</h2>
          <p className="text-gray-600">
            View and manage your tasks efficiently.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold text-gray-800">Activity Log</h2>
          <p className="text-gray-600">Recent actions and updates.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
