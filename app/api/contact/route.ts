import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation/contact";
import { isResendConfigured, sendContactEmail } from "@/lib/resend";
import { verifyRecaptcha } from "@/lib/recaptcha";
import { COMPANY } from "@/lib/constants";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const { recaptchaToken, ...fields } = (body ?? {}) as Record<string, unknown>;

  const result = contactSchema.safeParse(fields);
  if (!result.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of result.error.issues) {
      const key = String(issue.path[0]);
      if (!fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return NextResponse.json({ ok: false, fieldErrors }, { status: 400 });
  }

  const isHuman = await verifyRecaptcha(typeof recaptchaToken === "string" ? recaptchaToken : null);
  if (!isHuman) {
    return NextResponse.json(
      { ok: false, error: "We couldn't verify your submission. Please try again." },
      { status: 400 }
    );
  }

  if (!isResendConfigured()) {
    console.error("[contact] RESEND_API_KEY is not configured — enquiry was not emailed.");
    return NextResponse.json(
      {
        ok: false,
        error: `Email service is not configured yet. Please call us directly at ${COMPANY.phones[0].number} or email ${COMPANY.email}.`,
      },
      { status: 503 }
    );
  }

  try {
    await sendContactEmail(result.data);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[contact] Failed to send email via Resend:", error);
    return NextResponse.json(
      {
        ok: false,
        error: `Something went wrong sending your message. Please try again or email us directly at ${COMPANY.email}.`,
      },
      { status: 502 }
    );
  }
}
