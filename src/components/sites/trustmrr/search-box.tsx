import { Plus, Search } from "lucide-react";

import { SOURCE_ORIGIN } from "./data";

type SearchBoxProps = { className?: string; gap?: string };

/** Search form: submits to the live site's search, "Add startup" opens its dashboard. */
export function SearchBox({ className = "", gap = "gap-2 md:gap-4" }: SearchBoxProps) {
  return (
    <div className={`mx-auto flex max-w-lg flex-col items-stretch justify-center sm:flex-row ${gap} ${className}`}>
      <form action={`${SOURCE_ORIGIN}/search`} method="get" target="_blank" className="w-full sm:w-auto sm:flex-1">
        <div className="relative w-full max-w-md">
          <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
          <input
            type="text"
            name="q"
            placeholder={'"SaaS over $10K/mo"'}
            aria-label="Search startups"
            className="h-10 w-full min-w-0 rounded-md border border-input bg-card px-3 py-1 pr-10 pl-10 text-base shadow-xs transition-[color,box-shadow] outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 md:text-sm"
          />
        </div>
      </form>
      <a
        href={`${SOURCE_ORIGIN}/dashboard`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex h-10 shrink-0 cursor-pointer items-center justify-center gap-2 rounded-md bg-primary px-4 text-sm font-medium whitespace-nowrap text-primary-foreground transition-all outline-none hover:bg-primary/90 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
      >
        <Plus className="size-5" />
        Add startup
      </a>
    </div>
  );
}
