import Image from "next/image";

import { footerColumns } from "./data";
import { SiteLink } from "./site-link";
import { ThemeToggle } from "./theme-toggle";

export function SiteFooter() {
  return (
    <footer className="mt-6 py-12 max-md:mb-12">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="mb-8 grid grid-cols-1 gap-8 border-t pt-8 sm:grid-cols-2 md:grid-cols-4">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="mb-4 text-sm font-semibold">{column.title}</h3>
              <nav className="flex flex-col gap-2">
                {column.links.map(([label, href]) => (
                  <SiteLink
                    key={`${label}-${href}`}
                    href={href}
                    className="cursor-pointer text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {label}
                  </SiteLink>
                ))}
              </nav>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-between gap-4 border-t pt-8 sm:flex-row">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Built by</span>
            <a
              href="https://marclou.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 underline transition-opacity hover:opacity-80"
            >
              <Image
                src="/sites/trustmrr/img/marc.jpeg"
                alt="Marc Lou profile picture"
                width={20}
                height={20}
                className="size-5 shrink-0 rounded-full object-cover"
              />
              <span className="font-medium">Marc Lou</span>
            </a>
            <span>with</span>
            <a
              href="https://shipfa.st?ref=trustmrr"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline transition-opacity hover:opacity-80"
            >
              ShipFast
            </a>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </footer>
  );
}
