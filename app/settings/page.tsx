import type { Metadata } from "next";
import LayoutPrivate from "@/components/molecules/LayoutPrivate";
import Settings from "@/components/organisms/Settings";

export const metadata: Metadata = {
  title: "ConnectX360 - Settings",
  description:
    "ConnectX360 is a platform for connecting people with similar interests.",
};

export default function SettingsPage() {
  return (
    <LayoutPrivate>
      <Settings />
    </LayoutPrivate>
  );
}
