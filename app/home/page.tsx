import type { Metadata } from "next";
import LayoutPrivate from "@/components/molecules/LayoutPrivate";
import Home from "@/components/organisms/HomePage";
import QueryClientWrapper from "@/components/atoms/QueryClientWrapper";

export const metadata: Metadata = {
  title: "ConnectX360",
  description:
    "ConnectX360 is a platform for connecting people with similar interests.",
};

export default function HomePage() {
  return (
    <LayoutPrivate>
      <QueryClientWrapper>
        <Home />
      </QueryClientWrapper>
    </LayoutPrivate>
  );
}
