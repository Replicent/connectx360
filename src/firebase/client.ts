import {
  ApplicationVerifier,
  GoogleAuthProvider,
  signInWithPhoneNumber,
  signInWithPopup,
  RecaptchaVerifier,
  getAuth,
  connectAuthEmulator,
} from "firebase/auth";
import { createFirebaseApp } from "./app";

const firebaseEmulator = process.env.NEXT_PUBLIC_FIREBASE_AUTH_EMULATOR_HOST;

const app = createFirebaseApp();
const auth = getAuth(app);

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

const getGoogleProvider = () => new GoogleAuthProvider();

function googleLogin() {
  return signInWithPopup(auth, getGoogleProvider());
}

function logOut() {
  return auth.signOut();
}

export { recaptchaVerifier, phoneLogin, googleLogin, logOut };
