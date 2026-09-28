"use client";

import { useId, useState, type FormEvent } from "react";
import { newsletterSchema } from "@/lib/validation/newsletter";

type Status = "idle" | "submitting" | "success" | "error";

export function NewsletterForm({ tone = "dark" }: { tone?: "light" | "dark" }) {
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const inputId = useId();

  const isDark = tone === "dark";
  const inputClasses = isDark
    ? "border-cream/20 bg-transparent text-cream placeholder:text-cream/40 focus:border-gold"
    : "border-ink/15 bg-paper text-ink placeholder:text-ink/35 focus:border-gold-deep";
  const buttonClasses = isDark
    ? "bg-gold text-ink hover:bg-cream"
    : "bg-ink text-cream hover:bg-ink/85";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    const result = newsletterSchema.safeParse({ email, website });
    if (!result.success) {
      setError(result.error.issues[0]?.message ?? "Please enter a valid email address");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });
      const data = await res.json();

      if (!res.ok || !data.ok) {
        setError(data.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
      setEmail("");
    } catch {
      setError("Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className={`text-sm font-medium ${isDark ? "text-gold" : "text-gold-deep"}`}>
        You&apos;re subscribed — thanks for joining.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-2">
      <div className="flex flex-col gap-3 sm:flex-row">
        <label htmlFor={inputId} className="sr-only">
          Email address
        </label>
        <input
          id={inputId}
          type="email"
          required
          autoComplete="email"
          placeholder="you@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-invalid={Boolean(error)}
          className={`min-w-0 flex-1 border px-4 py-3 text-sm focus:outline-none ${inputClasses}`}
        />
        {/* Honeypot — hidden from sighted and screen-reader users, real visitors never fill it. */}
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          className="sr-only"
        />
        <button
          type="submit"
          disabled={status === "submitting"}
          className={`shrink-0 px-6 py-3 text-xs font-medium tracking-wide uppercase transition-colors disabled:opacity-50 ${buttonClasses}`}
        >
          {status === "submitting" ? "Subscribing…" : "Subscribe"}
        </button>
      </div>
      {error ? <p className={`text-xs ${isDark ? "text-red-300" : "text-red-700"}`}>{error}</p> : null}
    </form>
  );
}
