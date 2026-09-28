import { z } from "zod";

export const newsletterSchema = z.object({
  email: z.string().trim().min(1, "Please enter your email address").email("Please enter a valid email address"),
  // Honeypot field — real visitors never see or fill this input. Any value
  // here marks the submission as a bot; it's checked separately (not as a
  // schema constraint) so a filled honeypot still parses successfully and
  // can be handled with a silent fake-success response instead of a
  // validation error that would tip the bot off.
  website: z.string().optional().or(z.literal("")),
});

export type NewsletterInput = z.infer<typeof newsletterSchema>;
