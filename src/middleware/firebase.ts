import qs from "querystring";
import Debug from "debug";
import { NextApiRequest } from "next";
import admin, { credential } from "firebase-admin";
import { getApps, initializeApp } from "firebase-admin/app";
import { getLogger } from "@/utils/app-utils";
import { getUserByFirebaseId } from "@/db/ops/user";

const debug = Debug("src:middleware:firebase: ");
const logger = getLogger();

const serviceAccountKey = process.env
  .NEXT_PUBLIC_FIREBASE_SERVICE_ACCOUNT_KEY as string;

const serviceAccount = JSON.parse(serviceAccountKey);

if (getApps().length <= 0) {
  initializeApp({
    credential: credential.cert(serviceAccount),
  });
}

export function getAccesstoken(req: NextApiRequest): string | null {
  let token = req.headers.accesstoken;
  if (!token) {
    const filteredCookie = req.headers.cookie
      ?.split(";")
      ?.filter((val: string) => val.split("=")[0].match("token"))[0]
      ?.trim();
    const cookies = qs.decode(filteredCookie ?? "");
    if (cookies && cookies.token) {
      token = cookies.token as string;
    }
  }
  debug({ token });
  return token && typeof token === "string" ? token : null;
}

export async function getLoggedInUser(req: NextApiRequest) {
  const token = getAccesstoken(req);
  if (!token) return null;
  try {
    const firebaseUser = await admin.auth().verifyIdToken(token);
    debug({ firebaseUser });
    return firebaseUser;
  } catch (error) {
    logger.error({ error });
    throw error;
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
    const firebaseUserFind = await admin.auth().getUserByPhoneNumber(phone);
    const firebaseId = firebaseUserFind?.uid;
    if (!firebaseId) {
      const firebaseUserCreate = await admin
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
export async function getUserId(req: NextApiRequest) {
  try {
    const firebaseUser = await getLoggedInUser(req);
    debug({ firebaseUser });
    const firebaseId = firebaseUser?.uid;
    if (!firebaseId) return null;

    const dbUser = await getUserByFirebaseId(firebaseId);
    debug({ dbUser });
    const userId = dbUser?.id;
    if (!userId) return null;
    return userId;
  } catch (getUserIdError) {
    logger.error({ getUserIdError });
    throw getUserIdError;
  }
}
