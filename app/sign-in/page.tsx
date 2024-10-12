import React from "react";
import { Metadata } from "next";
import PhoneOnboarding from "@/components/app/PhoneOnboarding";
import QueryClientWrapper from "@/components/atoms/QueryClientWrapper";

export const metadata: Metadata = {
  title: "Sign In - ConnectX360",
  description:
    "ConnectX360 is a platform for connecting people with similar interests.",
};

const SignIn = () => {
  return (
    <div>
      <QueryClientWrapper>
        <PhoneOnboarding />
      </QueryClientWrapper>
    </div>
  );
};

export default SignIn;
