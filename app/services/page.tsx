import type { Metadata } from "next";
import LayoutPrivate from "@/components/molecules/LayoutPrivate";
import Services from "@/components/organisms/Services";

export const metadata: Metadata = {
  title: "ConnectX360 - Services",
  description:
    "ConnectX360 is a platform for connecting people with similar interests.",
};

export default function ServicesPage() {
  return (
    <LayoutPrivate>
      <Services />
    </LayoutPrivate>
  );
}
