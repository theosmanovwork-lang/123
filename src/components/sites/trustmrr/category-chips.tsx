import {
  Blocks,
  ChartNoAxesColumnIncreasing,
  Cloud,
  GraduationCap,
  Headphones,
  HeartPulse,
  House,
  Megaphone,
  PenTool,
  Plane,
  Share2,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  SquareCheckBig,
  Terminal,
  TrendingUp,
  Users,
  Video,
  Wallet,
  type LucideIcon,
} from "lucide-react";

import { categories } from "./data";
import { SiteLink } from "./site-link";

const icons: Record<string, LucideIcon> = {
  "Artificial Intelligence": Sparkles,
  SaaS: Cloud,
  "Developer Tools": Terminal,
  Fintech: Wallet,
  Productivity: SquareCheckBig,
  Marketing: Megaphone,
  "E-commerce": ShoppingBag,
  "Design Tools": PenTool,
  "No-Code": Blocks,
  Analytics: ChartNoAxesColumnIncreasing,
  Education: GraduationCap,
  "Health & Fitness": HeartPulse,
  "Social Media": Share2,
  "Content Creation": Video,
  Sales: TrendingUp,
  "Customer Support": Headphones,
  "Recruiting & HR": Users,
  "Real Estate": House,
  Travel: Plane,
  Security: ShieldCheck,
};

export function CategoryChips() {
  return (
    <section className="mt-16 border-t pt-8">
      <h2 className="mb-6 text-center text-xl font-bold">Browse by category</h2>
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map(([label, href]) => {
          const Icon = icons[label];
          return (
            <SiteLink
              key={href}
              href={href}
              className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm transition-all hover:border-primary/30 hover:bg-background"
            >
              {Icon ? <Icon className="size-3.5" /> : null}
              {label}
            </SiteLink>
          );
        })}
      </div>
    </section>
  );
}
