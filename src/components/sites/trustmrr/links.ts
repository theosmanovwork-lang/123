import { SOURCE_ORIGIN } from "./data";

/** Source pathnames that are not cloned point at the live site; "/" stays local. */
export function siteHref(href: string): string {
  if (href === "/") return "/";
  return href.startsWith("/") ? `${SOURCE_ORIGIN}${href}` : href;
}

export function isExternal(href: string): boolean {
  return /^https?:\/\//.test(siteHref(href));
}
