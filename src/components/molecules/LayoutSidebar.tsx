"use client";
import React from "react";
import { SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import AppSidebar from "../organisms/AppSidebar";
import QueryClientWrapper from "../atoms/QueryClientWrapper";

const LayoutSidebar = (props: { children: React.ReactNode }) => {
  return (
    <QueryClientWrapper>
      <SidebarProvider>
        <AppSidebar />
        <SidebarTrigger className="m-2" />
        <div className="flex min-h-screen bg-gray-100 w-full">
          <main className="flex-1 p-6">{props.children}</main>
        </div>
      </SidebarProvider>
    </QueryClientWrapper>
  );
};

export default LayoutSidebar;
