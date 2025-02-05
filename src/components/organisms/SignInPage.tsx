import React from "react";
import PhoneOnboarding from "../molecules/PhoneOnboarding";
import "../../../app/onboarding/gradient-background-styles.css";

const SignInPage = () => {
  return (
    <div
      id="onboarding-background"
      className="flex items-center justify-center min-h-screen"
    >
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Sign In to ConnectX360
        </h2>

        {/* Sign in with Phone Number */}
        <PhoneOnboarding />

        {/* Sign in with Google */}
        <button
          disabled
          className="w-full bg-white border border-gray-300 py-3 rounded-lg font-medium text-gray-700 mb-4 hover:bg-gray-100 flex items-center justify-center space-x-2"
        >
          <img
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            alt="Google icon"
            className="w-5 h-5"
          />
          <span>Sign in with Google</span>
        </button>

        {/* Other Sign-In Providers */}
        <button
          disabled
          className="w-full bg-gray-200 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-300"
        >
          Other Sign-In Options
        </button>
      </div>
    </div>
  );
};

export default SignInPage;
