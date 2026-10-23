"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { ArrowRight, Mail, Sparkle, X } from "lucide-react";

/** Floating weekly-report signup. Submissions are acknowledged locally; nothing is sent to trustmrr.com. */
export function NewsletterPopup() {
  const [open, setOpen] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  if (!open) return null;

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-10 fixed right-4 bottom-4 z-[45] w-[90vw] max-w-md rounded-2xl bg-linear-to-r from-pink-400 via-purple-500 to-indigo-500 p-[2px] shadow-2xl duration-500">
      <div className="relative h-full w-full overflow-hidden rounded-2xl bg-white dark:bg-slate-900">
        <button
          type="button"
          aria-label="Dismiss newsletter popup"
          onClick={() => setOpen(false)}
          className="absolute top-3 right-3 z-10 cursor-pointer text-slate-400 transition-[color,scale] duration-150 after:absolute after:-inset-2.5 after:content-[''] hover:text-slate-600 active:scale-[0.96] dark:hover:text-slate-200"
        >
          <X className="size-5" />
        </button>
        <div className="flex flex-col gap-4 p-6 md:p-8">
          <div className="flex items-start gap-4">
            <div className="relative shrink-0">
              <div className="relative z-10 rotate-3 overflow-hidden rounded-xl bg-white dark:bg-slate-900">
                <Image src="/sites/trustmrr/img/unicorn.png" alt="" width={48} height={48} className="object-contain" />
              </div>
              <div className="animate-pulse-slow absolute -top-4 -right-4 z-20 text-purple-500">
                <Sparkle className="size-6 fill-current opacity-50" />
              </div>
            </div>
            <div>
              <h3 className="bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-xl font-bold text-transparent dark:from-purple-400 dark:to-pink-400">
                Spot the Next Big Thing
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                Get the weekly data report: Top 5 fastest growing startups, best 3 startups for sale, and 1 underdog spotlight.
              </p>
            </div>
          </div>
          <form className="mt-2" onSubmit={onSubmit}>
            <div className="flex flex-col gap-3">
              <div className="group relative">
                <Mail className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-purple-500" />
                <input
                  type="email"
                  required
                  autoComplete="email"
                  aria-label="Email address"
                  placeholder="enter@your.email"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pr-4 pl-10 text-sm transition-all placeholder:text-slate-400 focus:ring-2 focus:ring-purple-500/50 focus:outline-none dark:border-slate-700 dark:bg-slate-800"
                />
              </div>
              <button
                type="submit"
                className="group flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-linear-to-r from-purple-600 to-pink-600 px-4 py-2.5 font-semibold text-white shadow-lg shadow-purple-500/20 transition-all hover:from-purple-700 hover:to-pink-700 hover:shadow-purple-500/30 active:scale-[0.98]"
              >
                {submitted ? "Thanks, you're on the list" : "Send me the data"}
                {submitted ? null : <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />}
              </button>
              <p className="text-center text-xs text-slate-500 dark:text-slate-400">
                5,000+ entrepreneurs are already subscribed. Just saying 🤫
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
