"use client";
import React, { useState, useEffect, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { phoneLogin, recaptchaVerifier } from "@/firebase/client";
import { ApplicationVerifier, ConfirmationResult } from "firebase/auth";
import useFirebaseAuth from "@/hooks/auth";
import Button from "../atoms/Button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "../ui/input-otp";
import { REGEXP_ONLY_DIGITS } from "input-otp";

const PhoneOnboarding = () => {
  const { user, isLoading: userLoading } = useFirebaseAuth();
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
    router.push("/home");
  };

  useEffect(() => {
    const v = recaptchaVerifier();
    setVerifier(v);
    return () => v?.clear();
  }, [user?.phoneNumber]);

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
      <span id="recaptcha-container"></span>
      {userLoading ? (
        <div>Loading...</div>
      ) : (
        <form onSubmit={handleSubmit} className="py-4 flex flex-col gap-4">
          {page === 0 && (
            <div>
              <Label htmlFor="phone" className="mb-1">
                Phone Number
              </Label>
              <Input
                type="tel"
                id="phone"
                name="phone"
                minLength={10}
                pattern="[0-9]{10}"
                maxLength={10}
                value={phone}
                onChange={(e) => setPhone(e.target.value?.trim())}
                disabled={isLoading}
              />
            </div>
          )}
          {page === 1 && (
            <div>
              <Label htmlFor="otp" className="mb-1">
                OTP
              </Label>
              <InputOTP
                maxLength={6}
                id="otp"
                name="otp"
                value={otp}
                onChange={(val) => setOtp(val)}
                disabled={isLoading}
                pattern={REGEXP_ONLY_DIGITS}
              >
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup>
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup>
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </div>
          )}
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Loading..." : "Next"}
          </Button>
        </form>
      )}
      {error && <div>{error}</div>}
    </div>
  );
};

export default PhoneOnboarding;
