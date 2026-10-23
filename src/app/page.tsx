import { ClosingCta } from "@/components/sites/trustmrr/closing-cta";
import { CategoryChips } from "@/components/sites/trustmrr/category-chips";
import { Hero } from "@/components/sites/trustmrr/hero";
import { Leaderboard } from "@/components/sites/trustmrr/leaderboard";
import { NewsletterPopup } from "@/components/sites/trustmrr/newsletter-popup";
import { SiteFooter } from "@/components/sites/trustmrr/site-footer";
import { SponsorRails } from "@/components/sites/trustmrr/sponsor-rails";
import { TweetFeed } from "@/components/sites/trustmrr/tweet-feed";

export default function Home() {
  return (
    <>
      <SponsorRails />
      <div className="bg-muted">
        <div className="lg:mx-[16.666%]">
          <main className="min-h-screen">
            <div className="container mx-auto max-w-5xl px-4 py-8 md:py-12">
              <Hero />
              <Leaderboard />
              <TweetFeed />
              <ClosingCta />
              <CategoryChips />
            </div>
          </main>
          <SiteFooter />
        </div>
      </div>
      <NewsletterPopup />
    </>
  );
}
