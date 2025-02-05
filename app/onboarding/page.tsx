import type { Metadata } from "next";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import "./gradient-background-styles.css";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const metadata: Metadata = {
  title: "ConnectX360 - Onboarding",
  description:
    "ConnectX360 is a platform for connecting people with similar interests.",
};

const userTypes = ["Grow your business", "Explore services"];

export default function OnboardingPage() {
  return (
    <div
      id="onboarding-background"
      className="flex justify-center h-screen px-5 md:px-7 lg:px-10 py-[25%] md:py-[15%] lg:py-[10%]"
    >
      <Card className="p-1 md:p-2 lg:p-3 h-max">
        <CardHeader>
          <CardTitle className="text-lg md:text-xl lg:text-2xl">{`Name of your company`}</CardTitle>
          <CardDescription className="text-sm md:text-base lg:text-lg">
            {`You can change this later in your profile.`}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-2 md:gap-3 lg:gap-4">
          <Input type="text" placeholder="Enter your company name" />
          <Button>Continue</Button>
        </CardContent>
      </Card>
    </div>
  );
}
