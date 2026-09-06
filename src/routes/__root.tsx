import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import { Toaster } from "sonner";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { AuthProvider } from "@/lib/auth/provider";
import { ThemeProvider, useTheme } from "@/lib/theme";
import { SITE } from "@/lib/site";
import appCss from "../styles.css?url";

const APP_NAME = `${SITE.name} — ${SITE.tagline}`;

const THEME_BOOTSTRAP = `(function(){try{var k="pony-theme";var t=localStorage.getItem(k);var d=t==="dark"||(t!=="light"&&window.matchMedia("(prefers-color-scheme: dark)").matches);if(d){document.documentElement.classList.add("dark");document.documentElement.style.colorScheme="dark";}else{document.documentElement.style.colorScheme="light";}}catch(e){}})();`;

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      { name: "description", content: SITE.description },
      { name: "theme-color", content: "#FBF3E8" },
    ],
    links: [
      { rel: "icon", type: "image/png", href: "/pony-logo-sm.png" },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Nunito:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,600&display=swap",
      },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/pony-logo-sm.png" },
    ],
  }),
  component: RootDocument,
});

function ToasterHost() {
  const { theme } = useTheme();
  return (
    <Toaster
      theme={theme}
      position="bottom-center"
      richColors
      closeButton
      toastOptions={{
        className: "font-sans",
      }}
    />
  );
}

function RootDocument() {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
        <script dangerouslySetInnerHTML={{ __html: THEME_BOOTSTRAP }} />
      </head>
      <body className="min-h-dvh bg-bg font-sans text-fg antialiased">
        <PreviewHostBridge />
        <AuthProvider>
          <ThemeProvider>
            <Outlet />
            <ToasterHost />
          </ThemeProvider>
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}
