type ReCaptchaResT = {
  success: boolean;
  score?: number; // v3 only
  action?: string; // v3 only
  challenge_ts?: string;
  hostname?: string;
  "error-codes"?: string[];
};

export async function reCaptchaVerify(
  secretKey: string,
  token: string,
): Promise<ReCaptchaResT> {
  const URL = `https://www.google.com/recaptcha/api/siteverify`;

   const body = new URLSearchParams({
    secret: secretKey,
    response: token,
  });

    const res = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: body,
  });
  return await res.json();
}
