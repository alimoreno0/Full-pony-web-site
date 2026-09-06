import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  About,
  Hero,
  HowToBuy,
  Socials,
  Ticker,
  Tokenomics,
} from "@/components/sections";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div id="top" className="flex min-h-dvh flex-col">
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-xl focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-fg"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Ticker />
        <About />
        <Tokenomics />
        <HowToBuy />
        <Socials />
      </main>
      <SiteFooter />
    </div>
  );
}
