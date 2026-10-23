import { ChevronRight } from "lucide-react";

import { tweets } from "./data";
import { SiteLink } from "./site-link";
import { TweetCard } from "./tweet-card";

export function TweetFeed() {
  return (
    <section className="mt-12">
      <div className="mb-3 flex items-center justify-between px-1">
        <h2 className="text-sm font-semibold text-muted-foreground">What&apos;s happening?</h2>
        <SiteLink
          href="/feed"
          className="flex items-center gap-1 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          View feed
          <ChevronRight className="size-3" />
        </SiteLink>
      </div>
      <div className="columns-1 gap-3 space-y-3 text-left md:columns-2 lg:columns-3">
        {tweets.map((tweet, i) => (
          <TweetCard key={`${tweet.authorHref}-${i}`} tweet={tweet} />
        ))}
      </div>
    </section>
  );
}
