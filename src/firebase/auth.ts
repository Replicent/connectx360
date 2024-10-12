import {
  ApplicationVerifier,
  GoogleAuthProvider,
  connectAuthEmulator,
  signInWithPhoneNumber,
  signInWithPopup,
  RecaptchaVerifier,
} from "firebase/auth";
import { auth } from "@/firebase/app";

const firebaseEmulator = process.env.NEXT_PUBLIC_FIREBASE_AUTH_EMULATOR_HOST;

const googleProvider = new GoogleAuthProvider();

if (firebaseEmulator) {
  connectAuthEmulator(auth, firebaseEmulator);
}

function recaptchaVerifier() {
  return new RecaptchaVerifier(auth, "recaptcha-container", {
    size: "invisible",
  });
}

async function phoneLogin(
  phoneNumber: string,
  appVerifier: ApplicationVerifier
) {
  return await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
}

function googleLogin() {
  return signInWithPopup(auth, googleProvider);
}

function logOut() {
  return auth.signOut();
}

export { recaptchaVerifier, phoneLogin, googleLogin, logOut };
