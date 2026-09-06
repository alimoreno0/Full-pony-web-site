import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Search, c as Menu, d as Copy, f as Check, i as Sun, l as Lock, n as Wallet, o as PawPrint, p as ArrowUpRight, s as Moon, t as X, u as Heart } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { i as useTheme, n as NAV, r as SITE } from "./router-CQnjqb-k.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-i6hhVs2R.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border bg-bg-warm",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 pb-24 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:pb-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/pony-logo-sm.webp",
					alt: "",
					width: 36,
					height: 36,
					className: "size-9 rounded-full shadow-border"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-base font-semibold text-fg",
					children: SITE.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: "Made for a very good boy."
				})] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "max-w-md text-pretty text-sm leading-relaxed text-muted sm:text-right",
				children: [SITE.name, " is a memecoin created for fun. Nothing on this site is financial advice. Always do your own research."]
			})]
		})
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap font-display font-medium transition-[transform,background-color,color,box-shadow,opacity] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-disabled:scale-[0.96]", {
	variants: {
		variant: {
			primary: "bg-primary text-primary-fg shadow-soft hover:brightness-110",
			secondary: "bg-surface text-fg shadow-border hover:shadow-border-hover",
			ghost: "bg-transparent text-fg hover:bg-fg/5",
			outline: "bg-transparent text-fg shadow-border hover:bg-fg/5 hover:shadow-border-hover"
		},
		size: {
			sm: "h-10 rounded-lg px-3.5 text-sm [&_svg]:size-4",
			md: "h-11 rounded-xl px-5 text-sm [&_svg]:size-4",
			lg: "h-14 rounded-2xl px-7 text-base [&_svg]:size-5",
			icon: "size-11 rounded-xl [&_svg]:size-5"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
function ThemeToggle({ className }) {
	const { theme, toggle } = useTheme();
	const isDark = theme === "dark";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		type: "button",
		variant: "ghost",
		size: "icon",
		onClick: toggle,
		"aria-label": isDark ? "Switch to light mode" : "Switch to dark mode",
		className: cn("relative", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "relative size-5",
			"aria-hidden": "true",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("absolute inset-0 flex items-center justify-center transition-[opacity,filter,scale] duration-300 ease-[cubic-bezier(0.2,0,0,1)]", isDark ? "scale-100 opacity-100 blur-none" : "scale-[0.25] opacity-0 blur-[4px]"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, {
					className: "size-5",
					strokeWidth: 2
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("flex items-center justify-center transition-[opacity,filter,scale] duration-300 ease-[cubic-bezier(0.2,0,0,1)]", isDark ? "scale-[0.25] opacity-0 blur-[4px]" : "scale-100 opacity-100 blur-none"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, {
					className: "size-5",
					strokeWidth: 2
				})
			})]
		})
	});
}
function SiteHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 8);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	function close() {
		setOpen(false);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("sticky top-0 z-40 border-b transition-[background-color,box-shadow,border-color] duration-200", scrolled || open ? "border-border bg-bg/95 shadow-soft" : "border-transparent bg-bg/80"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#top",
					className: "flex min-h-11 items-center gap-2.5 rounded-xl pr-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/pony-logo-sm.webp",
						alt: "",
						width: 40,
						height: 40,
						className: "size-9 rounded-full shadow-border sm:size-10"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-lg font-semibold tracking-tight text-fg sm:text-xl",
						children: SITE.name
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-1 lg:flex",
					"aria-label": "Primary",
					children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: item.href,
						className: "rounded-lg px-3 py-2 text-sm font-medium text-muted transition-colors duration-150 hover:text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70",
						children: item.label
					}, item.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "sm",
							className: "hidden sm:inline-flex",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: SITE.buyUrl,
								target: "_blank",
								rel: "noopener noreferrer",
								children: SITE.buyLabel
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "ghost",
							size: "icon",
							className: "lg:hidden",
							"aria-expanded": open,
							"aria-controls": "mobile-nav",
							"aria-label": open ? "Close menu" : "Open menu",
							onClick: () => setOpen((v) => !v),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "relative size-5",
								"aria-hidden": "true",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("absolute inset-0 flex items-center justify-center transition-[opacity,filter,scale] duration-300 ease-[cubic-bezier(0.2,0,0,1)]", open ? "scale-100 opacity-100 blur-none" : "scale-[0.25] opacity-0 blur-[4px]"),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("flex items-center justify-center transition-[opacity,filter,scale] duration-300 ease-[cubic-bezier(0.2,0,0,1)]", open ? "scale-[0.25] opacity-0 blur-[4px]" : "scale-100 opacity-100 blur-none"),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
								})]
							})
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			id: "mobile-nav",
			hidden: !open,
			className: "border-t border-border bg-bg lg:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 sm:px-8",
				"aria-label": "Mobile",
				children: [NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: item.href,
					onClick: close,
					className: "rounded-xl px-3 py-3 text-base font-medium text-fg hover:bg-fg/5",
					children: item.label
				}, item.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					size: "lg",
					className: "mt-2 w-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: SITE.buyUrl,
						target: "_blank",
						rel: "noopener noreferrer",
						onClick: close,
						children: SITE.buyLabel
					})
				})]
			})
		})]
	});
}
function XLogo(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		fill: "currentColor",
		"aria-hidden": "true",
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.724-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z" })
	});
}
function TelegramLogo(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		fill: "currentColor",
		"aria-hidden": "true",
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M21.5 3.6 2.9 10.7c-1.3.5-1.3 1.2-.2 1.5l4.7 1.5 1.8 5.6c.2.6.1.9.7.9.4 0 .6-.2.8-.4l2.6-2.5 5.4 4c1 .5 1.7.2 2-.9l3.4-16.1c.4-1.5-.5-2.2-1.6-1.7zM8.2 13.6l10.4-6.4c.5-.3.9 0 .5.3l-8.5 7.7-.3 3.3z" })
	});
}
function PonyCoin({ className, imgClassName, alt = "$PONY logo — Pony the smiling Shiba Inu", priority = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("relative aspect-square rounded-full bg-primary p-1.5 shadow-lift", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-full w-full overflow-hidden rounded-full bg-bg p-1",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/pony-logo.webp",
				alt,
				width: 640,
				height: 640,
				draggable: false,
				decoding: "async",
				fetchPriority: priority ? "high" : "auto",
				className: cn("h-full w-full rounded-full object-cover", imgClassName)
			})
		})
	});
}
function Section({ id, children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id,
		className: cn("scroll-mt-24 px-5 py-16 sm:px-8 sm:py-24", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto w-full max-w-6xl",
			children
		})
	});
}
function Eyebrow({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mb-3 font-display text-sm font-semibold tracking-wide text-primary",
		children
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		className: "relative overflow-hidden pb-10 pt-8 sm:pb-14 sm:pt-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PawPrint, {
			"aria-hidden": true,
			className: "pointer-events-none absolute -right-6 top-8 size-36 rotate-12 text-primary/10 sm:size-48",
			strokeWidth: 1.25
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-center text-center lg:items-start lg:text-left",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PonyCoin, {
						className: "mb-6 size-40 animate-float sm:size-48 lg:size-52",
						priority: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "mb-4 inline-flex items-center gap-2 rounded-full bg-surface px-3 py-1.5 text-xs font-semibold text-muted shadow-border",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-primary" }),
							"Live on ",
							SITE.chain
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-6xl font-semibold tracking-tight text-fg text-balance sm:text-7xl lg:text-8xl",
						children: SITE.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-md font-display text-xl font-medium text-pretty text-muted sm:text-2xl",
						children: SITE.tagline
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							className: "w-full sm:w-auto",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: SITE.buyUrl,
								target: "_blank",
								rel: "noopener noreferrer",
								children: [SITE.buyLabel, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							variant: "secondary",
							className: "w-full sm:w-auto",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#buy",
								children: "How to buy"
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-md text-pretty text-base leading-relaxed text-muted",
						children: SITE.description
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative mx-auto w-full max-w-lg",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					className: "rounded-3xl bg-surface p-2.5 shadow-lift",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/pony-hero.jpg",
						alt: "Pony the Shiba Inu smiling with closed eyes while getting head pats",
						width: 1024,
						height: 1008,
						decoding: "async",
						fetchPriority: "high",
						className: "aspect-square w-full rounded-2xl object-cover outline outline-1 -outline-offset-1 outline-fg/10"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
						className: "px-3 py-3 text-center font-display text-sm font-medium text-muted",
						children: "Pony — my real lovely dog"
					})]
				})
			})]
		})]
	});
}
var TICKER = [
	SITE.name,
	SITE.chain,
	`${SITE.supplyShort} fixed supply`,
	"Liquidity locked",
	`${SITE.creatorFee} creator fees`,
	"Happiness on-chain"
];
function Ticker() {
	const loop = [...TICKER, ...TICKER];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative overflow-hidden border-y border-border bg-bg-warm py-3",
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "marquee-track flex w-max gap-10",
			children: loop.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex items-center gap-10 font-display text-sm font-medium tracking-wide text-muted",
				children: [item, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PawPrint, {
					className: "size-3.5 text-primary",
					strokeWidth: 2.4
				})]
			}, `${item}-${i}`))
		})
	});
}
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "about",
		className: "bg-bg-warm",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto w-full max-w-xs",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PonyCoin, { className: "w-full" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute -right-3 -bottom-3 rounded-2xl bg-surface px-3 py-2 shadow-border",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-sm font-semibold text-fg",
						children: "Very good boy"
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "The lore" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-4xl font-semibold tracking-tight text-fg text-balance sm:text-5xl",
					children: "Meet Pony"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
					className: "mt-6 max-w-xl text-pretty text-lg leading-relaxed text-fg sm:text-xl",
					children: "Pony is my real lovely dog. This is not just a memecoin — it's pure love and happiness turned into a token."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted",
					children: [
						"Every squinty-eyed grin, every head pat, every warm afternoon on the couch — that's the energy ",
						SITE.name,
						" is built on. Not a mascot invented in a group chat. A real Shiba, a real smile, and a token that exists because happiness is worth sharing."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
						className: "size-4",
						fill: "currentColor"
					}), "Love, on Robinhood Chain"]
				})
			] })]
		})
	});
}
var TOKEN_CARDS = [
	{
		icon: PawPrint,
		label: "Fixed supply",
		value: SITE.supply,
		detail: "One billion tokens. No mint button, no surprises — the whole pie is already baked."
	},
	{
		icon: Lock,
		label: "Liquidity locked",
		value: "On Pons",
		detail: "Trading opens in a locked pool from the first block. The liquidity stays put."
	},
	{
		icon: Heart,
		label: "Creator fees",
		value: SITE.creatorFee,
		detail: "Seventy percent of swap fees go back to the creator, so Pony’s corner of the chain stays fed."
	}
];
function Tokenomics() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "tokenomics",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-2xl text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Tokenomics" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-4xl font-semibold tracking-tight text-fg text-balance sm:text-5xl",
					children: "Simple on purpose"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-pretty text-base leading-relaxed text-muted",
					children: "Same honest rules as every Pons launch — a fixed billion, locked liquidity, and creator fees that keep the lights on."
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-12 grid gap-4 sm:grid-cols-3",
			children: TOKEN_CARDS.map((card) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "flex flex-col rounded-3xl bg-surface p-6 shadow-border sm:p-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "inline-flex size-10 items-center justify-center rounded-xl bg-primary/12 text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card.icon, {
							className: "size-5",
							strokeWidth: 2
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-sm font-medium text-muted",
						children: card.label
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 font-display text-3xl font-semibold tracking-tight text-fg",
						children: card.value
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-pretty text-sm leading-relaxed text-muted",
						children: card.detail
					})
				]
			}, card.label))
		})]
	});
}
var STEPS = [
	{
		n: "01",
		icon: Wallet,
		title: "Get ETH on Robinhood Chain",
		body: `Add ${SITE.chain} (chain ID ${SITE.chainId}) to your wallet and bridge a little ETH for gas and the swap.`
	},
	{
		n: "02",
		icon: Search,
		title: "Open Pons and connect",
		body: "Head to ponsfamily.com, connect the same wallet, and you’re in the launchpad."
	},
	{
		n: "03",
		icon: PawPrint,
		title: `Find ${SITE.name}`,
		body: "Search for PONY and double-check the contract before you buy. Names are not unique — the address is."
	},
	{
		n: "04",
		icon: Heart,
		title: "Swap and smile",
		body: "Buy with ETH. Liquidity is locked, supply is fixed, and Pony is waiting on the other side."
	}
];
function HowToBuy() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "buy",
		className: "bg-bg-warm",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-2xl text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "How to buy" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-4xl font-semibold tracking-tight text-fg text-balance sm:text-5xl",
						children: "Four steps to the pack"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-pretty text-base leading-relaxed text-muted",
						children: [SITE.name, " lives on Pons. If you can connect a wallet, you can grab a bag."]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-12 grid gap-4 sm:grid-cols-2",
				children: STEPS.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex flex-col rounded-3xl bg-bg p-6 shadow-border sm:p-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-flex size-10 items-center justify-center rounded-xl bg-primary/12 text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(step.icon, { className: "size-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-sm font-semibold text-primary",
								children: step.n
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-5 font-display text-xl font-semibold text-fg",
							children: step.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-pretty text-sm leading-relaxed text-muted",
							children: step.body
						})
					]
				}, step.n))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 flex justify-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					size: "lg",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: SITE.buyUrl,
						target: "_blank",
						rel: "noopener noreferrer",
						children: [SITE.buyLabel, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
					})
				})
			})
		]
	});
}
function soonToast(label) {
	toast("Pack assembling", { description: `${label} dropping soon. Check back in a bit.` });
}
function Socials() {
	const [copied, setCopied] = (0, import_react.useState)(false);
	async function copyContract() {
		const value = SITE.contractAddress ?? `${SITE.name} contract dropping soon`;
		try {
			await navigator.clipboard.writeText(value);
			setCopied(true);
			toast.success("Copied", { description: SITE.contractAddress ? "Contract address is on your clipboard." : "Placeholder copied — official CA is coming." });
			window.setTimeout(() => setCopied(false), 1800);
		} catch {
			toast.error("Couldn’t copy. Try again.");
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "socials",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-2xl text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "The pack" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-4xl font-semibold tracking-tight text-fg text-balance sm:text-5xl",
						children: "Come sit with Pony"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-pretty text-base leading-relaxed text-muted",
						children: "Socials and the contract will land here. Until then, the door on Pons is already open."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto mt-12 grid max-w-3xl gap-3 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						type: "button",
						variant: "secondary",
						size: "lg",
						className: "w-full",
						onClick: () => {
							if (SITE.twitterUrl) {
								window.open(SITE.twitterUrl, "_blank", "noopener,noreferrer");
								return;
							}
							soonToast("X");
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XLogo, { className: "size-4" }), "X"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						type: "button",
						variant: "secondary",
						size: "lg",
						className: "w-full",
						onClick: () => {
							if (SITE.telegramUrl) {
								window.open(SITE.telegramUrl, "_blank", "noopener,noreferrer");
								return;
							}
							soonToast("Telegram");
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TelegramLogo, { className: "size-5" }), "Telegram"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						type: "button",
						variant: "secondary",
						size: "lg",
						className: "w-full",
						onClick: copyContract,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "relative size-5",
							"aria-hidden": "true",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("absolute inset-0 flex items-center justify-center transition-[opacity,filter,scale] duration-300 ease-[cubic-bezier(0.2,0,0,1)]", copied ? "scale-100 opacity-100 blur-none" : "scale-[0.25] opacity-0 blur-[4px]"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("flex items-center justify-center transition-[opacity,filter,scale] duration-300 ease-[cubic-bezier(0.2,0,0,1)]", copied ? "scale-[0.25] opacity-0 blur-[4px]" : "scale-100 opacity-100 blur-none"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-5" })
							})]
						}), SITE.contractAddress ? "Copy CA" : "Contract"]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-6 text-center font-display text-sm text-muted",
				children: [
					"Chain ID ",
					SITE.chainId,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mx-2 text-border",
						children: "·"
					}),
					SITE.chain
				]
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		id: "top",
		className: "flex min-h-dvh flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#about",
				className: "sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-xl focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-fg",
				children: "Skip to content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "flex-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ticker, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tokenomics, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HowToBuy, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Socials, {})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { Home as component };
