"use client";

import { useId, useState, type FormEvent, type ReactNode } from "react";
import { Button } from "@/components/ui/Button";
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
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
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

  if (status === "success") {
    return (
      <div role="status" className={`border border-gold-deep/30 bg-cream ${compact ? "p-5" : "p-8"}`}>
        <h3 className={`font-display font-medium tracking-tight ${compact ? "text-lg" : "text-2xl"}`}>
          Message sent.
        </h3>
        <p className={`leading-relaxed text-ink/70 ${compact ? "mt-2 text-sm" : "mt-3"}`}>
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
    );
  }

  return (
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
    </form>
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
