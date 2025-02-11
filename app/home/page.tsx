import type { Metadata } from "next";
import LayoutPrivate from "@/components/molecules/LayoutPrivate";
import Home from "@/components/organisms/HomePage";

export const metadata: Metadata = {
  title: "ConnectX360",
  description:
    "ConnectX360 is a platform for connecting people with similar interests.",
};

export default function HomePage() {
  return (
    <LayoutPrivate>
      <Home />
    </LayoutPrivate>
  );
}
