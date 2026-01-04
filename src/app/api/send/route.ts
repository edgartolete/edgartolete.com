import { reCaptchaVerify } from "@/lib/captcha";
import { tryCatch } from "@/lib/try-catch.util";
import { CreateEmailOptions, Resend } from "resend";

export type ResendPayload = {
  email: string;
  firstName: string;
  lastName?: string;
  message: string;
};

const allowedOrigins = [
  "https://edgartolete.com",
  "https://www.edgartolete.com",
];

export async function POST(req: Request) {
  const data = await req.json();

  const origin = req.headers.get("origin") ?? "";

  if (!allowedOrigins.includes(origin)) {
    const error = { error: "Cross origin not allow" };
    return Response.json([error, error]);
  }

  const [captchaResp, captchaErr] = await tryCatch(reCaptchaVerify(
    process.env.GOOGLE_RECAPTCHA_SECRET!,
    data?.captchaToken,
  ));

  if (captchaErr || !captchaResp?.success) {
    return Response.json({ captchaResp, captchaErr });
  }

  const { email: senderEmail, firstName, lastName, message } = data;

  const resend = new Resend(process.env.RESEND_API_KEY);

  const providerEmail = process.env.PROVIDER_EMAIL;

  const recipientEmail = process.env.RECIPIENT_EMAIL || [];

  const receiverPayload: CreateEmailOptions = {
    from: `Edgar Tolete Website<${providerEmail}>`,
    to: recipientEmail,
    subject: "New message from your website",
    html: `<p>Email: ${senderEmail}</p>
          <p>First Name: ${firstName}</p>
          <p>Last Name: ${lastName}</p>
          <p>Message: ${message}</p>`,
  };

  const senderPayload: CreateEmailOptions = {
    from: `Edgar Tolete Website<${providerEmail}>`,
    to: [senderEmail],
    subject: "Here is a copy of your message to EdgarTolete.com",
    html: `<p>Email: ${senderEmail}</p>
          <p>First Name: ${firstName}</p>
          <p>Last Name: ${lastName}</p>
          <p>Message: ${message}</p>`,
  };

  const res = await Promise.all([
    resend.emails.send(receiverPayload),
    resend.emails.send(senderPayload),
  ]);

  return Response.json(res);
}
