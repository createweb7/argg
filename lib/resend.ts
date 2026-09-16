import { Resend } from "resend";
import { COMPANY } from "@/lib/constants";
import type { ContactInput } from "@/lib/validation/contact";

const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL ?? "ARGG Associates <onboarding@resend.dev>";
const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? COMPANY.email;
const SUPPORT_EMAIL = COMPANY.email;

export function isResendConfigured() {
  return Boolean(process.env.RESEND_API_KEY);
}

export async function sendContactEmail(input: ContactInput) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured");
  }

  const resend = new Resend(apiKey);

  const html = `
    <div style="font-family: Arial, sans-serif; font-size: 15px; color: #020202;">
      <h2 style="margin-bottom: 4px;">New enquiry via argg.in</h2>
      <p><strong>Name:</strong> ${escapeHtml(input.name)}</p>
      ${input.company ? `<p><strong>Business / Company:</strong> ${escapeHtml(input.company)}</p>` : ""}
      <p><strong>Email:</strong> ${escapeHtml(input.email)}</p>
      ${input.phone ? `<p><strong>Phone:</strong> ${escapeHtml(input.phone)}</p>` : ""}
      ${input.serviceInterest ? `<p><strong>Service Interested In:</strong> ${escapeHtml(input.serviceInterest)}</p>` : ""}
      <p><strong>Message:</strong></p>
      <p style="white-space: pre-wrap;">${escapeHtml(input.message)}</p>
    </div>
  `;

  await resend.emails.send({
    from: FROM_EMAIL,
    to: TO_EMAIL,
    replyTo: input.email,
    subject: `New enquiry from ${input.name} — ARGG Associates website`,
    html,
  });

  // Best-effort visitor confirmation — the internal notification above is the
  // enquiry of record, so a failure here shouldn't fail the whole submission.
  try {
    await sendConfirmationEmail(input);
  } catch (error) {
    console.error("[contact] Failed to send visitor confirmation email:", error);
  }
}

async function sendConfirmationEmail(input: ContactInput) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return;

  const resend = new Resend(apiKey);

  const html = `
    <div style="font-family: Arial, sans-serif; font-size: 15px; color: #020202;">
      <h2 style="margin-bottom: 4px;">Thank you for reaching out, ${escapeHtml(input.name)}.</h2>
      <p>We've received your enquiry${input.serviceInterest ? ` about <strong>${escapeHtml(input.serviceInterest)}</strong>` : ""} and will get back to you within one business day.</p>
      <p>If your enquiry is urgent, call us at <strong>${COMPANY.phones[0].number}</strong>.</p>
      <p style="margin-top: 24px; color: #555;">— ${COMPANY.name}<br />${COMPANY.website}</p>
    </div>
  `;

  return resend.emails.send({
    from: FROM_EMAIL,
    to: input.email,
    replyTo: SUPPORT_EMAIL,
    subject: `We've received your enquiry — ${COMPANY.name}`,
    html,
  });
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
