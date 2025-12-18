"use client";

import { useEffect, useState } from "react";

type WindowWithCaptcha = Window &
  typeof globalThis & {
    onSubmit?: (token: string) => void;
    onExpired?: () => void;
    onError?: () => void;
  };

type ReCaptchaCallback = {
  onSuccessAction?: () => void;
  onExpiredAction?: () => void;
  onErrorAction?: () => void;
};

export function useReCaptcha({
  onSuccessAction,
  onExpiredAction,
  onErrorAction,
}: ReCaptchaCallback = {}) {
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js";
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    (window as WindowWithCaptcha).onSubmit = (token: string) => {
      if (token) {
        console.log({ token })
        setCaptchaToken(token);
        onSuccessAction?.();
      }
    };
    (window as WindowWithCaptcha).onExpired = () => {
      setCaptchaToken(null);
      onExpiredAction?.();
    };
    (window as WindowWithCaptcha).onError = () => {
      setCaptchaToken(null);
      onErrorAction?.();
    };
    return () => {
      const script = document.querySelector(
        `script[src="https://www.google.com/recaptcha/api.js"]`,
      );
      if (script) {
        script.remove();
      }
      delete (window as WindowWithCaptcha).onSubmit;
      delete (window as WindowWithCaptcha).onExpired;
      delete (window as WindowWithCaptcha).onError;
    };
  }, [setCaptchaToken, onSuccessAction, onExpiredAction, onErrorAction]);

  return { captchaToken };
}
