import { createUser, getUserByFirebaseId } from "@/db/users";
import { getLoggedInUser } from "@/middleware/firebase";
import { UserType } from "@/types";
import { getLogger } from "@/utils/app-utils";

const logger = getLogger();

export async function userSvc() {
  try {
    const firebaseUser = await getLoggedInUser();
    const firebaseid = firebaseUser?.uid;
    const phone = firebaseUser?.phone_number;

    if (!firebaseid || !phone) throw new Error("Bad Request");

    let user = await getUserByFirebaseId(firebaseid);
    const userId = user?.id;

    if (userId) {
      return { ok: true, data: userId };
    }

    const userData: UserType = {
      firebaseid,
      phone,
      role: "ADMIN",
    };
    user = await createUser(userData);

    return { ok: true, data: user?.id };
  } catch (userSvcError) {
    logger.error({ userSvcError });
    throw userSvcError;
  }
}
