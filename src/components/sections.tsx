import type { ReactNode } from "react";
import { useState } from "react";
import {
  ArrowUpRight,
  Check,
  Copy,
  Heart,
  Lock,
  PawPrint,
  Search,
  Wallet,
} from "lucide-react";
import { toast } from "sonner";
import { TelegramLogo, XLogo } from "@/components/icons";
import { PonyCoin } from "@/components/pony-coin";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

function Section({
  id,
  children,
  className,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-24 px-5 py-16 sm:px-8 sm:py-24", className)}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-3 font-display text-sm font-semibold tracking-wide text-primary">
      {children}
    </p>
  );
}

export function Hero() {
  return (
    <Section className="relative overflow-hidden pb-10 pt-8 sm:pb-14 sm:pt-12">
      <PawPrint
        aria-hidden
        className="pointer-events-none absolute -right-6 top-8 size-36 rotate-12 text-primary/10 sm:size-48"
        strokeWidth={1.25}
      />
      <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <PonyCoin className="mb-6 size-40 animate-float sm:size-48 lg:size-52" priority />
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-surface px-3 py-1.5 text-xs font-semibold text-muted shadow-border">
            <span className="size-1.5 rounded-full bg-primary" />
            Live on {SITE.chain}
          </span>
          <h1 className="font-display text-6xl font-semibold tracking-tight text-fg text-balance sm:text-7xl lg:text-8xl">
            {SITE.name}
          </h1>
          <p className="mt-4 max-w-md font-display text-xl font-medium text-pretty text-muted sm:text-2xl">
            {SITE.tagline}
          </p>
          <div className="mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <a href={SITE.buyUrl} target="_blank" rel="noopener noreferrer">
                {SITE.buyLabel}
                <ArrowUpRight />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="w-full sm:w-auto"
            >
              <a href="#buy">How to buy</a>
            </Button>
          </div>
          <p className="mt-5 max-w-md text-pretty text-base leading-relaxed text-muted">
            {SITE.description}
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-lg">
          <figure className="rounded-3xl bg-surface p-2.5 shadow-lift">
            <img
              src="/pony-hero.jpg"
              alt="Pony the Shiba Inu smiling with closed eyes while getting head pats"
              width={1024}
              height={1008}
              decoding="async"
              fetchPriority="high"
              className="aspect-square w-full rounded-2xl object-cover outline outline-1 -outline-offset-1 outline-fg/10"
            />
            <figcaption className="px-3 py-3 text-center font-display text-sm font-medium text-muted">
              Pony — my real lovely dog
            </figcaption>
          </figure>
        </div>
      </div>
    </Section>
  );
}

const TICKER = [
  SITE.name,
  SITE.chain,
  `${SITE.supplyShort} fixed supply`,
  "Liquidity locked",
  `${SITE.creatorFee} creator fees`,
  "Happiness on-chain",
];

export function Ticker() {
  const loop = [...TICKER, ...TICKER];
  return (
    <div
      className="relative overflow-hidden border-y border-border bg-bg-warm py-3"
      aria-hidden="true"
    >
      <div className="marquee-track flex w-max gap-10">
        {loop.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-10 font-display text-sm font-medium tracking-wide text-muted"
          >
            {item}
            <PawPrint className="size-3.5 text-primary" strokeWidth={2.4} />
          </span>
        ))}
      </div>
    </div>
  );
}

export function About() {
  return (
    <Section id="about" className="bg-bg-warm">
      <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="relative mx-auto w-full max-w-xs">
          <PonyCoin className="w-full" />
          <div className="absolute -right-3 -bottom-3 rounded-2xl bg-surface px-3 py-2 shadow-border">
            <p className="font-display text-sm font-semibold text-fg">
              Very good boy
            </p>
          </div>
        </div>
        <div>
          <Eyebrow>The lore</Eyebrow>
          <h2 className="font-display text-4xl font-semibold tracking-tight text-fg text-balance sm:text-5xl">
            Meet Pony
          </h2>
          <blockquote className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-fg sm:text-xl">
            Pony is my real lovely dog. This is not just a memecoin — it's
            pure love and happiness turned into a token.
          </blockquote>
          <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted">
            Every squinty-eyed grin, every head pat, every warm afternoon on the
            couch — that's the energy {SITE.name} is built on. Not a mascot
            invented in a group chat. A real Shiba, a real smile, and a token
            that exists because happiness is worth sharing.
          </p>
          <p className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary">
            <Heart className="size-4" fill="currentColor" />
            Love, on Robinhood Chain
          </p>
        </div>
      </div>
    </Section>
  );
}

const TOKEN_CARDS = [
  {
    icon: PawPrint,
    label: "Fixed supply",
    value: SITE.supply,
    detail:
      "One billion tokens. No mint button, no surprises — the whole pie is already baked.",
  },
  {
    icon: Lock,
    label: "Liquidity locked",
    value: "On Pons",
    detail:
      "Trading opens in a locked pool from the first block. The liquidity stays put.",
  },
  {
    icon: Heart,
    label: "Creator fees",
    value: SITE.creatorFee,
    detail:
      "Seventy percent of swap fees go back to the creator, so Pony’s corner of the chain stays fed.",
  },
] as const;

export function Tokenomics() {
  return (
    <Section id="tokenomics">
      <div className="mx-auto max-w-2xl text-center">
        <Eyebrow>Tokenomics</Eyebrow>
        <h2 className="font-display text-4xl font-semibold tracking-tight text-fg text-balance sm:text-5xl">
          Simple on purpose
        </h2>
        <p className="mt-4 text-pretty text-base leading-relaxed text-muted">
          Same honest rules as every Pons launch — a fixed billion, locked
          liquidity, and creator fees that keep the lights on.
        </p>
      </div>
      <div className="mt-12 grid gap-4 sm:grid-cols-3">
        {TOKEN_CARDS.map((card) => (
          <article
            key={card.label}
            className="flex flex-col rounded-3xl bg-surface p-6 shadow-border sm:p-7"
          >
            <span className="inline-flex size-10 items-center justify-center rounded-xl bg-primary/12 text-primary">
              <card.icon className="size-5" strokeWidth={2} />
            </span>
            <p className="mt-5 text-sm font-medium text-muted">{card.label}</p>
            <p className="mt-1 font-display text-3xl font-semibold tracking-tight text-fg">
              {card.value}
            </p>
            <p className="mt-3 text-pretty text-sm leading-relaxed text-muted">
              {card.detail}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}

const STEPS = [
  {
    n: "01",
    icon: Wallet,
    title: "Get ETH on Robinhood Chain",
    body: `Add ${SITE.chain} (chain ID ${SITE.chainId}) to your wallet and bridge a little ETH for gas and the swap.`,
  },
  {
    n: "02",
    icon: Search,
    title: "Open Pons and connect",
    body: "Head to ponsfamily.com, connect the same wallet, and you’re in the launchpad.",
  },
  {
    n: "03",
    icon: PawPrint,
    title: `Find ${SITE.name}`,
    body: "Search for PONY and double-check the contract before you buy. Names are not unique — the address is.",
  },
  {
    n: "04",
    icon: Heart,
    title: "Swap and smile",
    body: "Buy with ETH. Liquidity is locked, supply is fixed, and Pony is waiting on the other side.",
  },
] as const;

export function HowToBuy() {
  return (
    <Section id="buy" className="bg-bg-warm">
      <div className="mx-auto max-w-2xl text-center">
        <Eyebrow>How to buy</Eyebrow>
        <h2 className="font-display text-4xl font-semibold tracking-tight text-fg text-balance sm:text-5xl">
          Four steps to the pack
        </h2>
        <p className="mt-4 text-pretty text-base leading-relaxed text-muted">
          {SITE.name} lives on Pons. If you can connect a wallet, you can grab
          a bag.
        </p>
      </div>
      <ol className="mt-12 grid gap-4 sm:grid-cols-2">
        {STEPS.map((step) => (
          <li
            key={step.n}
            className="flex flex-col rounded-3xl bg-bg p-6 shadow-border sm:p-7"
          >
            <div className="flex items-center justify-between">
              <span className="inline-flex size-10 items-center justify-center rounded-xl bg-primary/12 text-primary">
                <step.icon className="size-5" />
              </span>
              <span className="font-display text-sm font-semibold text-primary">
                {step.n}
              </span>
            </div>
            <h3 className="mt-5 font-display text-xl font-semibold text-fg">
              {step.title}
            </h3>
            <p className="mt-2 text-pretty text-sm leading-relaxed text-muted">
              {step.body}
            </p>
          </li>
        ))}
      </ol>
      <div className="mt-10 flex justify-center">
        <Button asChild size="lg">
          <a href={SITE.buyUrl} target="_blank" rel="noopener noreferrer">
            {SITE.buyLabel}
            <ArrowUpRight />
          </a>
        </Button>
      </div>
    </Section>
  );
}

function soonToast(label: string) {
  toast("Pack assembling", {
    description: `${label} dropping soon. Check back in a bit.`,
  });
}

export function Socials() {
  const [copied, setCopied] = useState(false);

  async function copyContract() {
    const value = SITE.contractAddress ?? `${SITE.name} contract dropping soon`;
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      toast.success("Copied", {
        description: SITE.contractAddress
          ? "Contract address is on your clipboard."
          : "Placeholder copied — official CA is coming.",
      });
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      toast.error("Couldn’t copy. Try again.");
    }
  }

  return (
    <Section id="socials">
      <div className="mx-auto max-w-2xl text-center">
        <Eyebrow>The pack</Eyebrow>
        <h2 className="font-display text-4xl font-semibold tracking-tight text-fg text-balance sm:text-5xl">
          Come sit with Pony
        </h2>
        <p className="mt-4 text-pretty text-base leading-relaxed text-muted">
          Socials and the contract will land here. Until then, the door on Pons
          is already open.
        </p>
      </div>
      <div className="mx-auto mt-12 grid max-w-3xl gap-3 sm:grid-cols-3">
        <Button
          type="button"
          variant="secondary"
          size="lg"
          className="w-full"
          onClick={() => {
            if (SITE.twitterUrl) {
              window.open(SITE.twitterUrl, "_blank", "noopener,noreferrer");
              return;
            }
            soonToast("X");
          }}
        >
          <XLogo className="size-4" />
          X
        </Button>
        <Button
          type="button"
          variant="secondary"
          size="lg"
          className="w-full"
          onClick={() => {
            if (SITE.telegramUrl) {
              window.open(SITE.telegramUrl, "_blank", "noopener,noreferrer");
              return;
            }
            soonToast("Telegram");
          }}
        >
          <TelegramLogo className="size-5" />
          Telegram
        </Button>
        <Button
          type="button"
          variant="secondary"
          size="lg"
          className="w-full"
          onClick={copyContract}
        >
          <span className="relative size-5" aria-hidden="true">
            <span
              className={cn(
                "absolute inset-0 flex items-center justify-center transition-[opacity,filter,scale] duration-300 ease-[cubic-bezier(0.2,0,0,1)]",
                copied
                  ? "scale-100 opacity-100 blur-none"
                  : "scale-[0.25] opacity-0 blur-[4px]",
              )}
            >
              <Check className="size-5" />
            </span>
            <span
              className={cn(
                "flex items-center justify-center transition-[opacity,filter,scale] duration-300 ease-[cubic-bezier(0.2,0,0,1)]",
                copied
                  ? "scale-[0.25] opacity-0 blur-[4px]"
                  : "scale-100 opacity-100 blur-none",
              )}
            >
              <Copy className="size-5" />
            </span>
          </span>
          {SITE.contractAddress ? "Copy CA" : "Contract"}
        </Button>
      </div>
      <p className="mt-6 text-center font-display text-sm text-muted">
        Chain ID {SITE.chainId}
        <span className="mx-2 text-border">·</span>
        {SITE.chain}
      </p>
    </Section>
  );
}
