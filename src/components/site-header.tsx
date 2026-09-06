import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { NAV, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function close() {
    setOpen(false);
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b transition-[background-color,box-shadow,border-color] duration-200",
        scrolled || open
          ? "border-border bg-bg/95 shadow-soft"
          : "border-transparent bg-bg/80",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-8">
        <a
          href="#top"
          className="flex min-h-11 items-center gap-2.5 rounded-xl pr-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70"
        >
          <img
            src="/pony-logo-sm.webp"
            alt=""
            width={40}
            height={40}
            className="size-9 rounded-full shadow-border sm:size-10"
          />
          <span className="font-display text-lg font-semibold tracking-tight text-fg sm:text-xl">
            {SITE.name}
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted transition-colors duration-150 hover:text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <ThemeToggle />
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href={SITE.buyUrl} target="_blank" rel="noopener noreferrer">
              {SITE.buyLabel}
            </a>
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative size-5" aria-hidden="true">
              <span
                className={cn(
                  "absolute inset-0 flex items-center justify-center transition-[opacity,filter,scale] duration-300 ease-[cubic-bezier(0.2,0,0,1)]",
                  open
                    ? "scale-100 opacity-100 blur-none"
                    : "scale-[0.25] opacity-0 blur-[4px]",
                )}
              >
                <X className="size-5" />
              </span>
              <span
                className={cn(
                  "flex items-center justify-center transition-[opacity,filter,scale] duration-300 ease-[cubic-bezier(0.2,0,0,1)]",
                  open
                    ? "scale-[0.25] opacity-0 blur-[4px]"
                    : "scale-100 opacity-100 blur-none",
                )}
              >
                <Menu className="size-5" />
              </span>
            </span>
          </Button>
        </div>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-border bg-bg lg:hidden"
      >
        <nav
          className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 sm:px-8"
          aria-label="Mobile"
        >
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={close}
              className="rounded-xl px-3 py-3 text-base font-medium text-fg hover:bg-fg/5"
            >
              {item.label}
            </a>
          ))}
          <Button asChild size="lg" className="mt-2 w-full">
            <a
              href={SITE.buyUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
            >
              {SITE.buyLabel}
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
