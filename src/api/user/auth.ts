import { getUserId } from "@/middleware/firebase";
import { getLogger } from "@/utils/app-utils";
import { NextApiRequest, NextApiResponse } from "next";

const logger = getLogger();

export default async function authHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const userId = await getUserId(req);
    if (!userId) return res.status(401).json({ error: "Unauthorized" });
    res.status(200).json({ user: userId });
  } catch (authHandlerError) {
    logger.info({ authHandlerError });
    res.status(500).json({ error: "Internal Server Error" });
  }
}
