"use client";
import React, { useState, useEffect, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { phoneLogin, recaptchaVerifier } from "@/firebase/auth";
import { ApplicationVerifier, ConfirmationResult } from "firebase/auth";
import useFirebaseAuth from "@/hooks/auth";

const PhoneOnboarding = () => {
  const { user, isLoading: userLoading, auth } = useFirebaseAuth();
  const [page, setPage] = useState(0);
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [verifier, setVerifier] = useState<ApplicationVerifier | null>(null);
  const [confirmation, setConfirmation] = useState<ConfirmationResult | null>(
    null
  );
  const router = useRouter();

  const redirectToDashboard = () => {
    setIsLoading(true);
    router.push("/");
  };

  useEffect(() => {
    const v = recaptchaVerifier();
    setVerifier(v);
    return () => v?.clear();
  }, [auth]);

  useEffect(() => {
    if (user?.phoneNumber) {
      setPhone(user.phoneNumber.slice(3));
      redirectToDashboard();
    }
  }, [user]);

  const signIn = () => {
    if (!verifier) {
      return setError("Recaptcha Verifier not found");
    }
    if (phone?.length !== 10) {
      return setError("Invalid phone number");
    }
    phoneLogin(`+91${phone}`, verifier)
      .then((confirmation) => {
        setConfirmation(confirmation);
        setPage(1);
      })
      .catch((phoneError) => {
        console.log({ phoneError });
        setError("Error signing in with phone");
      })
      .finally(() => setIsLoading(false));
  };

  const verifyOtp = () => {
    if (!confirmation?.verificationId) {
      return setError("Verification ID not found");
    }
    if (otp?.length !== 6) {
      return setError("Invalid OTP");
    }
    confirmation
      ?.confirm(otp)
      .then(redirectToDashboard)
      .catch((otpError) => {
        console.log({ otpError });
        setError("Error confirming OTP");
      })
      .finally(() => setIsLoading(false));
  };

  const handleSubmit = async (e?: FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    setIsLoading(true);
    if (page === 0) {
      signIn();
    }
    if (page === 1) {
      verifyOtp();
    }
  };

  return (
    <div>
      <h1>Sign In</h1>
      <span id="recaptcha-container"></span>
      {userLoading ? (
        <div>Loading...</div>
      ) : (
        <form onSubmit={handleSubmit}>
          {page === 0 && (
            <div>
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value?.trim())}
                disabled={isLoading}
              />
            </div>
          )}
          {page === 1 && (
            <div>
              <label htmlFor="otp">OTP</label>
              <input
                type="number"
                id="otp"
                name="otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value?.trim())}
                disabled={isLoading}
              />
            </div>
          )}
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Loading..." : "Next"}
          </button>
        </form>
      )}
      {error && <div>{error}</div>}
    </div>
  );
};

export default PhoneOnboarding;
