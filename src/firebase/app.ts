import { FirebaseApp, getApp, getApps, initializeApp } from "firebase/app";
import {
  getAnalytics,
  isSupported,
  logEvent,
  setUserId,
} from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

let analytics: ReturnType<typeof getAnalytics> | null = null;

export const createFirebaseApp = () => {
  let app: FirebaseApp;
  if (getApps().length <= 0) {
    app = initializeApp(firebaseConfig);
  } else {
    app = getApp();
  }
  // isSupported().then((isValid) => {
  //   analytics = isValid ? getAnalytics(app) : null;
  // });
  return app;
};

export { analytics, logEvent, isSupported, setUserId };
