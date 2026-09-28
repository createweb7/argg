import { NextResponse } from "next/server";
import { newsletterSchema } from "@/lib/validation/newsletter";
import { isResendConfigured, sendNewsletterSignupEmail } from "@/lib/resend";
import { COMPANY } from "@/lib/constants";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const result = newsletterSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json({ ok: false, error: result.error.issues[0]?.message ?? "Invalid email address." }, { status: 400 });
  }

  // Honeypot tripped — silently pretend success so bots don't learn to fix it.
  if (result.data.website) {
    return NextResponse.json({ ok: true });
  }

  if (!isResendConfigured()) {
    console.error("[newsletter] RESEND_API_KEY is not configured — signup was not emailed.");
    return NextResponse.json(
      { ok: false, error: `Something went wrong. Please email us directly at ${COMPANY.email}.` },
      { status: 503 }
    );
  }

  try {
    await sendNewsletterSignupEmail(result.data.email);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[newsletter] Failed to send signup email via Resend:", error);
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again." },
      { status: 502 }
    );
  }
}
