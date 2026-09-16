import { Resend } from "resend";
import { COMPANY, SITE_URL } from "@/lib/constants";
import type { ContactInput } from "@/lib/validation/contact";

const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL ?? "ARGG Associates <onboarding@resend.dev>";
const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? COMPANY.email;
const SUPPORT_EMAIL = COMPANY.email;
// argg.in's DNS currently only points at mail (MX), not the site itself, so
// SITE_URL alone would produce a broken logo image in real emails. Vercel's
// own production-domain env var is always accurate regardless of that.
const SITE_ORIGIN = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : SITE_URL;
// The full "hexagon + ARGG Associates" lockup — same logo used on the site
// itself (Header/Footer) — as a PNG for broad email-client compatibility.
const LOGO_URL = `${SITE_ORIGIN}/images/logo-email.png`;

export function isResendConfigured() {
  return Boolean(process.env.RESEND_API_KEY);
}

export async function sendContactEmail(input: ContactInput) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured");
  }

  const resend = new Resend(apiKey);

  const rows: Array<[string, string]> = [
    ["Name", input.name],
    ...(input.company ? ([["Business / Company", input.company]] as [string, string][]) : []),
    ["Email", input.email],
    ...(input.phone ? ([["Phone", input.phone]] as [string, string][]) : []),
    ...(input.serviceInterest
      ? ([["Service Interested In", input.serviceInterest]] as [string, string][])
      : []),
  ];

  const html = buildEmailShell({
    preheader: `New website enquiry from ${input.name}`,
    body: `
      <h1 style="margin: 0 0 20px; font-family: Georgia, 'Times New Roman', serif; font-size: 22px; font-weight: 600; color: #020202;">
        New enquiry from the website
      </h1>
      <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse; margin-bottom: 24px;">
        ${rows
          .map(
            ([label, value]) => `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #ece9e2; font-size: 13px; font-weight: 600; color: #8a8578; width: 40%; vertical-align: top;">
                  ${escapeHtml(label)}
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #ece9e2; font-size: 15px; color: #020202; vertical-align: top;">
                  ${escapeHtml(value)}
                </td>
              </tr>
            `
          )
          .join("")}
      </table>
      <p style="margin: 0 0 6px; font-size: 13px; font-weight: 600; color: #8a8578;">Message</p>
      <p style="margin: 0; font-size: 15px; line-height: 1.6; color: #020202; white-space: pre-wrap;">${escapeHtml(input.message)}</p>
    `,
  });

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

  const html = buildEmailShell({
    preheader: "We've received your enquiry and will be in touch within one business day.",
    body: `
      <h1 style="margin: 0 0 16px; font-family: Georgia, 'Times New Roman', serif; font-size: 22px; font-weight: 600; color: #020202;">
        Thank you for reaching out, ${escapeHtml(input.name)}.
      </h1>
      <p style="margin: 0 0 16px; font-size: 15px; line-height: 1.7; color: #3a3a3a;">
        We've received your enquiry${input.serviceInterest ? ` about <strong style="color: #020202;">${escapeHtml(input.serviceInterest)}</strong>` : ""} and will get back to you within one business day.
      </p>
      <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse; margin: 24px 0;">
        <tr>
          <td style="background-color: #f8f7f4; border-left: 3px solid #c4943d; padding: 16px 20px; font-size: 14px; color: #3a3a3a;">
            Need us sooner? Call <strong style="color: #020202;">${COMPANY.phones[0].number}</strong> directly.
          </td>
        </tr>
      </table>
      <p style="margin: 0; font-size: 15px; line-height: 1.7; color: #3a3a3a;">
        Warm regards,<br />
        <strong style="color: #020202;">${COMPANY.name}</strong>
      </p>
    `,
  });

  return resend.emails.send({
    from: FROM_EMAIL,
    to: input.email,
    replyTo: SUPPORT_EMAIL,
    subject: `We've received your enquiry — ${COMPANY.name}`,
    html,
  });
}

function buildEmailShell({ preheader, body }: { preheader: string; body: string }) {
  return `
    <!DOCTYPE html>
    <html>
      <body style="margin: 0; padding: 0; background-color: #f0efe9; font-family: Arial, Helvetica, sans-serif;">
        <div style="display: none; max-height: 0; overflow: hidden; opacity: 0;">${escapeHtml(preheader)}</div>
        <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f0efe9; padding: 32px 16px;">
          <tr>
            <td align="center">
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width: 560px; background-color: #ffffff; border: 1px solid #e5e2d9;">
                <tr>
                  <td style="background-color: #020202; padding: 28px 32px; text-align: center;">
                    <table role="presentation" cellpadding="0" cellspacing="0" style="margin: 0 auto; border-collapse: collapse;">
                      <tr>
                        <td style="background-color: #f8f7f4; border-radius: 8px; padding: 10px 18px;">
                          <img src="${LOGO_URL}" width="220" alt="${COMPANY.name}" style="display: block; width: 220px; height: auto;" />
                        </td>
                      </tr>
                    </table>
                    <div style="margin-top: 12px; font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; color: #c4943d;">
                      ${COMPANY.tagline}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 36px 32px;">
                    ${body}
                  </td>
                </tr>
                <tr>
                  <td style="border-top: 1px solid #e5e2d9; background-color: #f8f7f4; padding: 20px 32px; font-size: 12px; line-height: 1.7; color: #8a8578;">
                    <strong style="color: #3a3a3a;">${COMPANY.name}</strong><br />
                    ${COMPANY.address.full}<br />
                    ${COMPANY.phones.map((p) => p.number).join(" · ")} · ${COMPANY.email}
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
