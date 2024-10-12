import { getLogger } from "@/utils/app-utils";

const logger = getLogger();

export async function getUserByFirebaseId(firebaseId: string) {
  try {
    return { id: firebaseId };
  } catch (getUserByIdError) {
    logger.info({ getUserByIdError });
    throw getUserByIdError;
  }
}
