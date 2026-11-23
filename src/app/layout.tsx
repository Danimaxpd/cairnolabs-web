import type { Metadata } from "next";
import { JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { CookieNotice } from "@/components/CookieNotice";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cairno Labs — Quiet, Zero-Egress B2B Software Studio",
  description:
    "Focused, zero-egress B2B software utilities built to last. First release: Cairno Docs for Confluence Cloud (Markdown, Mermaid diagrams, and OpenAPI/Swagger on Atlassian Forge).",
  icons: {
    icon: "/favicon.svg",
  },
  metadataBase: new URL("https://cairnolabs.com"),
};

const THEME_INIT_SCRIPT = `(function(){try{var m=document.cookie.match(/(?:^|; )cairno_theme=([^;]*)/);var t=m&&decodeURIComponent(m[1])==="dark"?"dark":"light";var r=document.documentElement;r.setAttribute("data-theme",t);if(t==="dark"){r.classList.add("dark");}else{r.classList.remove("dark");}r.style.colorScheme=t;}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="light"
      suppressHydrationWarning
      className={`${plusJakarta.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body>
        <ThemeProvider>
          {children}
          <CookieNotice />
        </ThemeProvider>
      </body>
    </html>
  );
}
