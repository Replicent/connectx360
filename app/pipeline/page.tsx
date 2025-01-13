import type { Metadata } from "next";
import LayoutPrivate from "@/components/molecules/LayoutPrivate";
import Pipeline from "@/components/organisms/Pipeline";

export const metadata: Metadata = {
  title: "ConnectX360 - Pipeline",
  description:
    "ConnectX360 is a platform for connecting people with similar interests.",
};

export default function PipelinePage() {
  return (
    <LayoutPrivate>
      <Pipeline />
    </LayoutPrivate>
  );
}
