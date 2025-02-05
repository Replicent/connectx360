import type { Metadata } from "next";
import LayoutPrivate from "@/components/molecules/LayoutPrivate";
import HelpAndSupport from "@/components/organisms/HelpAndSupport";

export const metadata: Metadata = {
  title: "ConnectX360 - Help & Support",
  description:
    "ConnectX360 is a platform for connecting people with similar interests.",
};

export default function HelpAndSupportPage() {
  return (
    <LayoutPrivate>
      <HelpAndSupport />
    </LayoutPrivate>
  );
}
