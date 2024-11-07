import React from "react";
import { Metadata } from "next";
import QueryClientWrapper from "@/components/atoms/QueryClientWrapper";
import SignInPage from "@/components/organisms/SignInPage";

export const metadata: Metadata = {
  title: "Sign In - ConnectX360",
  description:
    "ConnectX360 is a platform for connecting people with similar interests.",
};

const SignIn = () => {
  return (
    <div>
      <QueryClientWrapper>
        <SignInPage />
      </QueryClientWrapper>
    </div>
  );
};

export default SignIn;
