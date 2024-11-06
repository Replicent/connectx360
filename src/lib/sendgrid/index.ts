import sgMail from "@sendgrid/mail";

const SENDGRID_API_KEY = process.env.NEXT_PUBLIC_SENDGRID_API_KEY;

export async function sendEmail(dat: {
  to: string;
  subject: string;
  html: string;
}) {
  if (!SENDGRID_API_KEY) throw new Error("Sendgrid API key not found");
  sgMail.setApiKey(SENDGRID_API_KEY);
  const msg = {
    to: dat.to,
    subject: dat.subject,
    html: dat.html,
    from: "replicent.india@gmail.com",
  };
  try {
    const resp = await sgMail.send(msg);
    return resp;
  } catch (error) {
    console.error(error);
  }
}
