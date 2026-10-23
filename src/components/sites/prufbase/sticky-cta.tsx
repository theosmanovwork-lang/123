"use client";

import { useEffect, useState } from "react";

import { Wordmark } from "./wordmark";

/**
 * Glass bar with the one conversion action, shown only while neither waitlist form is on screen.
 * Pure progressive enhancement: the page works the same without it.
 */
export function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const forms = ["waitlist", "waitlist-bottom"].map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const onScreen = new Set<Element>();
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) onScreen.add(entry.target);
        else onScreen.delete(entry.target);
      }
      // Show once the hero form has been scrolled past, hide again at the closing form.
      const pastHero = window.scrollY > 200;
      setVisible(pastHero && onScreen.size === 0);
    });
    forms.forEach((form) => observer.observe(form));
    return () => observer.disconnect();
  }, []);

  return (
    <div
      aria-hidden={!visible}
      inert={!visible}
      className={`fixed inset-x-0 top-0 z-50 border-b bg-background/80 backdrop-blur-[20px] transition-transform duration-300 ease-out ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
        <Wordmark className="text-base" />
        <a
          href="#waitlist"
          className="inline-flex h-9 items-center rounded-full bg-cta px-4 text-sm font-semibold text-cta-foreground transition-colors hover:bg-cta-hover focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none"
        >
          Встать в вейтлист
        </a>
      </div>
    </div>
  );
}
