import { Resend } from "resend";
import { COMPANY } from "@/lib/constants";
import type { ContactInput } from "@/lib/validation/contact";

const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL ?? "ARGG Associates <onboarding@resend.dev>";
const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? COMPANY.email;

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

  return resend.emails.send({
    from: FROM_EMAIL,
    to: TO_EMAIL,
    replyTo: input.email,
    subject: `New enquiry from ${input.name} — ARGG Associates website`,
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
