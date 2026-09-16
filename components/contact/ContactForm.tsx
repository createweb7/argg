"use client";

import { useId, useState, type FormEvent, type ReactNode } from "react";
import Script from "next/script";
import { Button } from "@/components/ui/Button";
import { IconCheckCircle } from "@/components/icons";
import {
  contactSchema,
  SERVICE_INTEREST_OPTIONS,
  type ContactFieldErrors,
  type ContactInput,
} from "@/lib/validation/contact";
import { COMPANY } from "@/lib/constants";

type Status = "idle" | "submitting" | "success" | "error";

const baseValues: ContactInput = {
  name: "",
  company: "",
  email: "",
  phone: "",
  serviceInterest: "",
  message: "",
};

function quickEnquiryMessage(service?: string) {
  return `Quick enquiry from the website — interested in ${service || "ARGG Associates services"}.`;
}

declare global {
  interface Window {
    grecaptcha?: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

function getRecaptchaToken(action: string): Promise<string | null> {
  if (!RECAPTCHA_SITE_KEY || typeof window === "undefined" || !window.grecaptcha) {
    return Promise.resolve(null);
  }
  return new Promise((resolve) => {
    window.grecaptcha!.ready(() => {
      window
        .grecaptcha!.execute(RECAPTCHA_SITE_KEY!, { action })
        .then(resolve)
        .catch(() => resolve(null));
    });
  });
}

export function ContactForm({
  defaultService,
  compact = false,
}: {
  defaultService?: (typeof SERVICE_INTEREST_OPTIONS)[number];
  compact?: boolean;
}) {
  const initialValues: ContactInput = {
    ...baseValues,
    serviceInterest: defaultService ?? "",
    // The compact hero form skips the Message field to stay short — submit
    // a sensible default instead so the (shared) schema's message
    // requirement is still satisfied without asking for it twice.
    message: compact ? quickEnquiryMessage(defaultService) : "",
  };
  const [values, setValues] = useState<ContactInput>(initialValues);
  const [errors, setErrors] = useState<ContactFieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState<string | null>(null);
  const formId = useId();

  function update<K extends keyof ContactInput>(key: K, value: ContactInput[K]) {
    setValues((v) => ({
      ...v,
      [key]: value,
      ...(compact && key === "serviceInterest" ? { message: quickEnquiryMessage(value as string) } : null),
    }));
    setErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setServerError(null);

    const result = contactSchema.safeParse(values);
    if (!result.success) {
      const fieldErrors: ContactFieldErrors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof ContactInput;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setStatus("submitting");

    try {
      const recaptchaToken = await getRecaptchaToken("contact_form");
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...result.data, recaptchaToken }),
      });
      const data = await res.json();

      if (!res.ok || !data.ok) {
        setServerError(
          data.error ?? `Something went wrong. Please call us at ${COMPANY.phones[0].number} or email ${COMPANY.email}.`
        );
        setStatus("error");
        return;
      }

      setStatus("success");
      setValues(initialValues);
    } catch {
      setServerError(
        `We couldn't send your message. Please call us at ${COMPANY.phones[0].number} or email ${COMPANY.email}.`
      );
      setStatus("error");
    }
  }

  // Loaded here (rather than globally) so only pages that actually render a
  // form pull in Google's script and show the reCAPTCHA badge.
  const recaptchaScript = RECAPTCHA_SITE_KEY ? (
    <Script src={`https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`} strategy="afterInteractive" />
  ) : null;

  if (status === "success") {
    return (
      <>
        {recaptchaScript}
        <div
          role="status"
          className={`flex flex-col items-center border border-emerald-600/20 bg-emerald-50/60 text-center ${compact ? "p-6" : "p-10"}`}
        >
          <span
            className={`flex shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white ${compact ? "h-11 w-11" : "h-14 w-14"}`}
          >
            <IconCheckCircle className={compact ? "h-6 w-6" : "h-8 w-8"} />
          </span>
          <h3
            className={`font-display font-medium tracking-tight text-ink ${compact ? "mt-3 text-lg" : "mt-5 text-2xl"}`}
          >
            Message sent.
          </h3>
          <p className={`max-w-sm leading-relaxed text-ink/70 ${compact ? "mt-2 text-sm" : "mt-3"}`}>
            Thank you for reaching out — we usually respond within one business day. If your enquiry is
            urgent, call us at{" "}
            <a href={COMPANY.phones[0].href} className="font-medium text-gold-deep">
              {COMPANY.phones[0].number}
            </a>
            .
          </p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className={`font-semibold text-gold-deep underline underline-offset-4 ${compact ? "mt-4 text-xs" : "mt-6 text-sm"}`}
          >
            Send another message
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      {recaptchaScript}
      <form onSubmit={handleSubmit} noValidate className={`flex flex-col ${compact ? "gap-3" : "gap-5"}`}>
      {status === "error" && serverError ? (
        <p
          role="alert"
          className={`border border-red-300 bg-red-50 text-red-800 ${compact ? "px-3 py-2 text-xs" : "px-4 py-3 text-sm"}`}
        >
          {serverError}
        </p>
      ) : null}

      <Field
        id={`${formId}-name`}
        label="Full Name"
        error={errors.name}
        required
        compact={compact}
        input={(props) => (
          <input
            {...props}
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
          />
        )}
      />

      {compact ? null : (
        <Field
          id={`${formId}-company`}
          label="Business / Company"
          error={errors.company}
          input={(props) => (
            <input
              {...props}
              type="text"
              autoComplete="organization"
              value={values.company}
              onChange={(e) => update("company", e.target.value)}
            />
          )}
        />
      )}

      <div className={`grid grid-cols-1 sm:grid-cols-2 ${compact ? "gap-3" : "gap-5"}`}>
        <Field
          id={`${formId}-email`}
          label="Email"
          error={errors.email}
          required
          compact={compact}
          input={(props) => (
            <input
              {...props}
              type="email"
              autoComplete="email"
              value={values.email}
              onChange={(e) => update("email", e.target.value)}
            />
          )}
        />
        <Field
          id={`${formId}-phone`}
          label="Phone"
          error={errors.phone}
          compact={compact}
          input={(props) => (
            <input
              {...props}
              type="tel"
              autoComplete="tel"
              value={values.phone}
              onChange={(e) => update("phone", e.target.value)}
            />
          )}
        />
      </div>

      <Field
        id={`${formId}-service`}
        label="Service Interested In"
        error={errors.serviceInterest}
        compact={compact}
        input={(props) => (
          <select
            {...props}
            value={values.serviceInterest}
            onChange={(e) => update("serviceInterest", e.target.value as ContactInput["serviceInterest"])}
          >
            <option value="">Select a service</option>
            {SERVICE_INTEREST_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        )}
      />

      {compact ? null : (
        <Field
          id={`${formId}-message`}
          label="Message"
          error={errors.message}
          required
          input={(props) => (
            <textarea
              {...props}
              rows={5}
              value={values.message}
              onChange={(e) => update("message", e.target.value)}
            />
          )}
        />
      )}

      <Button
        type="submit"
        variant="primary"
        disabled={status === "submitting"}
        className={compact ? "mt-1 w-full py-3 text-xs" : "mt-2"}
      >
        {status === "submitting" ? "Sending…" : "Send Enquiry"}
      </Button>

      {RECAPTCHA_SITE_KEY ? (
        <p className={`text-ink/40 ${compact ? "text-[10px]" : "text-xs"}`}>
          This site is protected by reCAPTCHA and the Google{" "}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="underline">
            Terms of Service
          </a>{" "}
          apply.
        </p>
      ) : null}
      </form>
    </>
  );
}

function Field({
  id,
  label,
  error,
  required,
  compact = false,
  input,
}: {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
  compact?: boolean;
  input: (props: {
    id: string;
    name: string;
    "aria-invalid": boolean;
    "aria-describedby"?: string;
    required?: boolean;
    className: string;
  }) => ReactNode;
}) {
  const errorId = `${id}-error`;

  return (
    <div className={`flex flex-col ${compact ? "gap-1" : "gap-2"}`}>
      <label htmlFor={id} className={`font-medium text-ink/80 ${compact ? "text-xs" : "text-sm"}`}>
        {label} {required ? <span className="text-gold-deep">*</span> : null}
      </label>
      {input({
        id,
        name: id,
        "aria-invalid": Boolean(error),
        "aria-describedby": error ? errorId : undefined,
        required,
        className: `border border-ink/15 bg-paper text-ink placeholder:text-ink/35 focus:border-gold-deep focus:outline-none ${
          compact ? "px-3 py-2 text-sm" : "px-4 py-3"
        }`,
      })}
      {error ? (
        <p id={errorId} className={`text-red-700 ${compact ? "text-xs" : "text-sm"}`}>
          {error}
        </p>
      ) : null}
    </div>
  );
}
