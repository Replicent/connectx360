import Debug from "debug";
import firebaseAdmin, { credential } from "firebase-admin";
import { getLogger } from "@/utils/app-utils";
import { getUserByFirebaseId } from "@/db/users";
import { cookies } from "next/headers";
import { getApps, initializeApp } from "firebase-admin/app";

const debug = Debug("src:middleware:firebase: ");
const logger = getLogger();

const FIREBASE_SERVICE_ACCOUNT_KEY = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;

const serviceAccount = JSON.parse(FIREBASE_SERVICE_ACCOUNT_KEY as string);

if (getApps().length <= 0) {
  initializeApp({
    credential: credential.cert(serviceAccount),
  });
}

export async function getLoggedInUser() {
  const cookieStore = cookies();
  const token = cookieStore.get("token");
  const tokenValue = token?.value as string;
  try {
    const firebaseUser = await firebaseAdmin
      .auth()
      .verifyIdToken(tokenValue as string);
    debug({ firebaseUser });
    return firebaseUser;
  } catch (getLoggedInUserError) {
    logger.error({ getLoggedInUserError });
    throw getLoggedInUserError;
  }
}

/**
 * Creates a Firebase user based on phone number. Checks if user exists first.
 * If user exists, returns the user id. If user does not exist, creates the user and returns the user id.
 * @param phone The phone number to create the user with country code.
 * @returns A promise that resolves to a string of the user's firebase id.
 */
export async function createFirebaseUser(phone: string): Promise<string> {
  if (phone.length !== 10) {
    logger.warn(`Invalid phone number: ${phone}`);
    throw new Error("Invalid phone number");
  }
  try {
    const firebaseUserFind = await firebaseAdmin
      .auth()
      .getUserByPhoneNumber(phone);
    const firebaseId = firebaseUserFind?.uid;
    if (!firebaseId) {
      const firebaseUserCreate = await firebaseAdmin
        .auth()
        .createUser({ phoneNumber: phone });
      logger.info(`Firebase User Created: ${firebaseId}`);
      return firebaseUserCreate?.uid;
    }
    logger.info(`Firebase User Found: ${firebaseId}`);
    return firebaseId;
  } catch (createFirebaseUserError) {
    logger.error({ createFirebaseUserError });
    throw createFirebaseUserError;
  }
}

/**
 * Gets user ID of a user from the database based on firebase ID.
 * @param req request object
 * @returns database user object
 */
export async function getUserId() {
  try {
    const firebaseUser = await getLoggedInUser();
    debug({ firebaseUser });
    const firebaseId = firebaseUser?.uid;
    if (!firebaseId) return null;

    const user = await getUserByFirebaseId(firebaseId);
    debug({ user });
    return user?.id || null;
  } catch (getUserIdError) {
    logger.error({ getUserIdError });
    throw getUserIdError;
  }
}
