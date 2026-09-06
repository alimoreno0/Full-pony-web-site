import { SITE } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-bg-warm">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 pb-24 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:pb-20">
        <div className="flex items-center gap-3">
          <img
            src="/pony-logo-sm.webp"
            alt=""
            width={36}
            height={36}
            className="size-9 rounded-full shadow-border"
          />
          <div>
            <p className="font-display text-base font-semibold text-fg">
              {SITE.name}
            </p>
            <p className="text-sm text-muted">Made for a very good boy.</p>
          </div>
        </div>
        <p className="max-w-md text-pretty text-sm leading-relaxed text-muted sm:text-right">
          {SITE.name} is a memecoin created for fun. Nothing on this site is
          financial advice. Always do your own research.
        </p>
      </div>
    </footer>
  );
}
