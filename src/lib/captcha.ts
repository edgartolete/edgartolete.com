export async function reCaptchaVerify(secretkey: string, token: string) {
  const URL = `https://www.google.com/recaptcha/api/siteverify`;

  const res = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      secret: secretkey,
      response: token,
    }),
  });
  return await res.json();
}
