import { z } from "zod";

export const SERVICE_INTEREST_OPTIONS = [
  "Finance",
  "Taxation Services",
  "Business Advisory",
  "Business Growth",
  "Mayopi Advisories",
  "Not sure yet",
] as const;

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  company: z.string().trim().max(150).optional().or(z.literal("")),
  email: z.string().trim().min(1, "Please enter your email address").email("Please enter a valid email address"),
  phone: z.string().trim().max(20).optional().or(z.literal("")),
  serviceInterest: z.enum(SERVICE_INTEREST_OPTIONS).optional().or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(10, "Please add a short message (at least 10 characters)")
    .max(2000),
});

export type ContactInput = z.infer<typeof contactSchema>;
export type ContactFieldErrors = Partial<Record<keyof ContactInput, string>>;
