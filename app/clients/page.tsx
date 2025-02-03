import type { Metadata } from "next";
import LayoutPrivate from "@/components/molecules/LayoutPrivate";
import Clients from "@/components/organisms/Clients";

export const metadata: Metadata = {
  title: "ConnectX360 - Clients",
  description:
    "ConnectX360 is a platform for connecting people with similar interests.",
};

export default function ClientsPage() {
  return (
    <LayoutPrivate>
      <Clients />
    </LayoutPrivate>
  );
}
