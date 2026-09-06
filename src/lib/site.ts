export const SITE = {
  name: "$PONY",
  shortName: "PONY",
  dogName: "Pony",
  tagline: "The happiest dog on Robinhood Chain",
  description:
    "A real Shiba, a real smile, and a billion tokens of happiness. Liquidity locked on Pons from the first trade.",
  buyUrl: "https://ponsfamily.com",
  buyLabel: "Buy on Pons",
  chain: "Robinhood Chain",
  chainId: 4663,
  supply: "1,000,000,000",
  supplyShort: "1B",
  creatorFee: "1%",
  twitterUrl: null as string | null,
  telegramUrl: null as string | null,
  contractAddress: null as string | null,
} as const;

export const NAV = [
  { href: "#about", label: "About" },
  { href: "#tokenomics", label: "Tokenomics" },
  { href: "#buy", label: "How to buy" },
  { href: "#socials", label: "Socials" },
] as const;
