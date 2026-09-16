const MIN_SCORE = 0.5;

export function isRecaptchaConfigured() {
  return Boolean(process.env.RECAPTCHA_SECRET_KEY);
}

export async function verifyRecaptcha(token: string | null | undefined): Promise<boolean> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  if (!secretKey) return true; // Not configured — degrade gracefully rather than blocking all enquiries.
  if (!token) return false;

  try {
    const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret: secretKey, response: token }),
    });
    const data = await res.json();
    return Boolean(data.success) && (typeof data.score !== "number" || data.score >= MIN_SCORE);
  } catch (error) {
    console.error("[recaptcha] Verification request failed:", error);
    return false;
  }
}
