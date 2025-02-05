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
        <section className="flex min-h-screen bg-gray-100 w-full p-6">
          {props.children}
        </section>
      </SidebarProvider>
    </QueryClientWrapper>
  );
};

export default LayoutSidebar;
