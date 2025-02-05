import type { Metadata } from "next";
import LayoutPrivate from "@/components/molecules/LayoutPrivate";
import Payments from "@/components/organisms/Payments";

export const metadata: Metadata = {
  title: "ConnectX360 - Payments",
  description:
    "ConnectX360 is a platform for connecting people with similar interests.",
};

export default function PaymentsPage() {
  return (
    <LayoutPrivate>
      <Payments />
    </LayoutPrivate>
  );
}
