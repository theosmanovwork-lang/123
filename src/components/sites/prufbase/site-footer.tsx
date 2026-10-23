import { footerColumns } from "./data";
import { ThemeToggle } from "./theme-toggle";
import { Wordmark } from "./wordmark";

export function SiteFooter() {
  return (
    <footer className="mt-6 py-12 max-md:mb-12">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="mb-8 grid grid-cols-1 gap-8 border-t pt-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="sm:col-span-2">
            <Wordmark className="text-lg" />
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">
              Витрина верифицированной выручки для российских инди-фаундеров. Пруф вместо скриншота.
            </p>
          </div>
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="mb-4 text-sm font-semibold">{column.title}</h3>
              <nav className="flex flex-col gap-2">
                {column.links.map(([label, href]) => (
                  <a key={label} href={href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {label}
                  </a>
                ))}
              </nav>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-between gap-4 border-t pt-8 sm:flex-row">
          <p className="text-center text-sm text-muted-foreground sm:text-left">
            © 2026 Prufbase · prufbase.ru · Сервис на этапе MVP, «как есть»
          </p>
          <ThemeToggle />
        </div>
      </div>
    </footer>
  );
}
