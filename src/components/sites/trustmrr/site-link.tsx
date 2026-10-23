import type { ComponentProps } from "react";

import { isExternal, siteHref } from "./links";

type SiteLinkProps = Omit<ComponentProps<"a">, "href"> & { href: string };

/** Anchor for source URLs: rewrites to the live site and opens it in a new tab. */
export function SiteLink({ href, rel, target, ...props }: SiteLinkProps) {
  const external = isExternal(href);
  return (
    <a
      href={siteHref(href)}
      target={target ?? (external ? "_blank" : undefined)}
      rel={rel ?? (external ? "noopener noreferrer" : undefined)}
      {...props}
    />
  );
}
