"use client";

import { useState } from "react";
import Image from "next/image";
import { Heart, MessageCircle, Share } from "lucide-react";

import type { Tweet } from "./data";
import { SiteLink } from "./site-link";

const actionClass =
  "-m-1.5 flex cursor-pointer items-center gap-1.5 rounded-full p-1.5 text-sm text-muted-foreground transition-colors";

export function TweetCard({ tweet }: { tweet: Tweet }) {
  const [expanded, setExpanded] = useState(false);
  const clamped = tweet.clamp && !expanded;
  return (
    <div className="break-inside-avoid">
      <div className="overflow-hidden rounded-lg border bg-background/60 transition-colors hover:border-primary/30">
        <div className="flex gap-3 p-4">
          <div className="shrink-0 pt-0.5">
            <SiteLink href={tweet.authorHref}>
              {tweet.avatar ? (
                <Image
                  src={tweet.avatar}
                  alt={`${tweet.author} profile picture`}
                  width={32}
                  height={32}
                  className="size-8 rounded-full border border-border object-cover shadow-xs transition-opacity hover:opacity-80"
                />
              ) : (
                <span className="block size-8 rounded-full border border-border bg-muted" />
              )}
            </SiteLink>
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5">
              <div className="min-w-0 flex-1 truncate">
                <span className="inline-flex max-w-full items-center gap-1.5 text-sm">
                  <SiteLink href={tweet.authorHref} className="shrink-0 leading-tight font-semibold hover:underline">
                    {tweet.author}
                  </SiteLink>
                  <span className="shrink-0 text-xs text-muted-foreground">on</span>
                  <SiteLink
                    href={tweet.startupHref}
                    className="inline-flex items-center gap-1 truncate leading-tight font-semibold hover:underline"
                  >
                    {tweet.startupLogo ? (
                      <Image src={tweet.startupLogo} alt={`${tweet.startup} logo`} width={14} height={14} className="size-3.5 shrink-0 rounded" />
                    ) : null}
                    <span className="truncate">{tweet.startup}</span>
                  </SiteLink>
                  <span className="shrink-0 text-xs text-muted-foreground">· {tweet.time}</span>
                </span>
              </div>
            </div>
            <div className="mt-1">
              <p className={`text-sm whitespace-pre-line text-foreground ${clamped ? "line-clamp-6" : ""}`}>
                {tweet.segments.map((seg, i) =>
                  seg.href ? (
                    <a
                      key={i}
                      href={seg.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline dark:text-blue-400"
                    >
                      {seg.text}
                    </a>
                  ) : (
                    <span key={i}>{seg.text}</span>
                  ),
                )}
              </p>
              {tweet.clamp ? (
                <button
                  type="button"
                  onClick={() => setExpanded((v) => !v)}
                  className="mt-1 cursor-pointer text-xs text-muted-foreground hover:text-foreground"
                >
                  {expanded ? "Show less" : "Show more"}
                </button>
              ) : null}
            </div>
            {tweet.media.map((src, i) =>
              src ? (
                <div key={i} className="mt-3 overflow-hidden rounded-lg border">
                  <div className="relative max-h-[400px] bg-muted">
                    <Image
                      src={src}
                      alt={`${tweet.startup} product update image`}
                      width={800}
                      height={600}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              ) : null,
            )}
            <div className="mt-2.5 flex items-center gap-6">
              <button type="button" className={`${actionClass} hover:bg-red-500/10 hover:text-red-500`}>
                <Heart className="size-3.5" />
                <span>{tweet.likes}</span>
              </button>
              <SiteLink href={tweet.startupHref} className={`${actionClass} hover:bg-blue-500/10 hover:text-blue-500`}>
                <MessageCircle className="size-3.5" />
                <span>{tweet.replies}</span>
              </SiteLink>
              <SiteLink href={tweet.startupHref} aria-label="Share" className={`${actionClass} hover:bg-green-500/10 hover:text-green-500`}>
                <Share className="size-3.5" />
              </SiteLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
