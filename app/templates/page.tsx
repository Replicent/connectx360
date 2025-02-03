import type { Metadata } from "next";
import LayoutPrivate from "@/components/molecules/LayoutPrivate";
import Templates from "@/components/organisms/Templates";

export const metadata: Metadata = {
  title: "ConnectX360 - Templates",
  description:
    "ConnectX360 is a platform for connecting people with similar interests.",
};

export default function TemplatesPage() {
  return (
    <LayoutPrivate>
      <Templates />
    </LayoutPrivate>
  );
}
