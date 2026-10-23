import { Audiences } from "@/components/sites/prufbase/audiences";
import { CardStrip } from "@/components/sites/prufbase/card-strip";
import { ClosingCta } from "@/components/sites/prufbase/closing-cta";
import { forSale, recentlyVerified } from "@/components/sites/prufbase/data";
import { Faq } from "@/components/sites/prufbase/faq";
import { Hero } from "@/components/sites/prufbase/hero";
import { HowItWorks } from "@/components/sites/prufbase/how-it-works";
import { Leaderboard } from "@/components/sites/prufbase/leaderboard";
import { Problem } from "@/components/sites/prufbase/problem";
import { Providers } from "@/components/sites/prufbase/providers";
import { Security } from "@/components/sites/prufbase/security";
import { SiteFooter } from "@/components/sites/prufbase/site-footer";
import { SponsorRails } from "@/components/sites/prufbase/sponsor-rails";
import { StickyCta } from "@/components/sites/prufbase/sticky-cta";

export default function Home() {
  return (
    <>
      <StickyCta />
      <SponsorRails />
      <div className="bg-background">
        <div className="xl:mx-[16.666%]">
          <main className="min-h-screen">
            <div className="container mx-auto max-w-5xl px-4 py-8 md:py-12">
              <Hero />
              <div className="mt-8 space-y-2 text-left md:mt-12">
                <CardStrip title="Недавно подтверждены" projects={recentlyVerified} />
                <CardStrip title="Продаются" projects={forSale} />
              </div>
              <Problem />
              <HowItWorks />
              <div className="mt-16 md:mt-24">
                <Leaderboard />
              </div>
              <Security />
              <Audiences />
              <Providers />
              <Faq />
              <ClosingCta />
            </div>
          </main>
          <SiteFooter />
        </div>
      </div>
    </>
  );
}
