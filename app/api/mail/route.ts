import { HttpStatusCode } from "axios";
import { sendEmail } from "@/lib/sendgrid";
import { getLogger } from "@/utils/app-utils";

const logger = getLogger();

const htmlContent = `<h1>Hello from ConnectX360</h1>`;
export async function GET(req: Request) {
  logger.info({ url: req.url, method: req.method });
  try {
    const data = await sendEmail({
      to: "adityadhanraj1357@gmail.com",
      subject: "Hello from ConnectX360",
      html: htmlContent,
    });
    return new Response(JSON.stringify(data), {
      status: HttpStatusCode.Ok,
    });
  } catch (sendMailApiHandlerError) {
    logger.error({ sendMailApiHandlerError });
    return new Response(JSON.stringify({ error: "Server Error" }), {
      status: HttpStatusCode.InternalServerError,
    });
  }
}
