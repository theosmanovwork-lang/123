"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Check } from "lucide-react";

type Status = "idle" | "sending" | "done" | "error";

/** Waitlist signup: posts to /api/waitlist. `source` records which block the signup came from. */
export function WaitlistForm({ source, className = "" }: { source: string; className?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setStatus("sending");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email: form.get("email"), website: form.get("website"), source }),
      });
      const data = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) throw new Error(data.error ?? "Не получилось отправить");
      setStatus("done");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Не получилось отправить");
    }
  }

  if (status === "done") {
    return (
      <div
        role="status"
        className={`mx-auto flex max-w-md items-center gap-3 rounded-[10px] border border-ring/50 bg-card px-4 py-3 text-left text-sm ${className}`}
      >
        <Check className="size-4 shrink-0 text-brand" />
        <span>Ты в списке. Напишем, когда откроем подключение.</span>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className={`mx-auto w-full max-w-md ${className}`} noValidate>
      <div className="flex flex-col gap-2 sm:flex-row">
        <label htmlFor={`${source}-email`} className="sr-only">
          Email
        </label>
        <input
          id={`${source}-email`}
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@project.ru"
          className="h-11 min-w-0 flex-1 rounded-lg border border-input bg-muted/60 px-3.5 text-base text-foreground shadow-none outline-none transition-[border-color,box-shadow,background-color] placeholder:text-muted-foreground focus-visible:border-ring focus-visible:bg-card focus-visible:ring-[3px] focus-visible:ring-ring/30 md:text-sm"
        />
        {/* Honeypot: invisible to people, tempting for bots. */}
        <input name="website" tabIndex={-1} autoComplete="off" aria-hidden className="absolute -left-[9999px] size-0 opacity-0" />
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex h-11 shrink-0 cursor-pointer items-center justify-center gap-2 rounded-full bg-cta px-5 text-sm font-semibold whitespace-nowrap text-cta-foreground shadow-[0_8px_2px_0_#0000,0_5px_2px_0_#00000003,0_3px_2px_0_#0000000a,0_1px_1px_0_#00000012,0_0_1px_0_#00000014] transition-[background-color,transform] outline-none hover:bg-cta-hover focus-visible:ring-[3px] focus-visible:ring-ring/50 active:scale-[0.98] disabled:cursor-wait disabled:opacity-70"
        >
          {status === "sending" ? "Отправляем…" : "Встать в вейтлист"}
          {status === "sending" ? null : <ArrowRight className="size-4" />}
        </button>
      </div>
      <p role="alert" className="mt-2 min-h-5 text-left text-sm text-brand">
        {status === "error" ? message : ""}
      </p>
    </form>
  );
}
