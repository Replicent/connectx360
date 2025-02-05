import type { Metadata } from "next";
import LayoutPrivate from "@/components/molecules/LayoutPrivate";
import Dashboard from "@/components/organisms/Dashboard";

export const metadata: Metadata = {
  title: "ConnectX360 - Dashboard",
  description:
    "ConnectX360 is a platform for connecting people with similar interests.",
};

export default function DashboardPage() {
  return (
    <LayoutPrivate>
      <Dashboard />
    </LayoutPrivate>
  );
}
