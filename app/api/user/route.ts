import { userSvc } from "@/services/users";
import { getLogger } from "@/utils/app-utils";
import { HttpStatusCode } from "axios";

const logger = getLogger();

export async function GET(req: Request) {
  logger.info({ url: req.url, method: req.method });
  try {
    const user = await userSvc();
    return new Response(JSON.stringify(user), {
      status: HttpStatusCode.Ok,
    });
  } catch (authHandlerError) {
    logger.error({ authHandlerError });
    //@ts-ignore
    if (authHandlerError?.code === "auth/id-token-expired") {
      return new Response(
        JSON.stringify({
          error: {
            code: "expired_token",
            message: "refresh the page",
          },
        }),
        {
          status: HttpStatusCode.Unauthorized,
        }
      );
    }
    return new Response(
      JSON.stringify({
        error: {
          code: "unknown",
        },
      }),
      {
        status: HttpStatusCode.InternalServerError,
      }
    );
  }
}
