import type { Metadata, Viewport } from "next";
import {
  IBM_Plex_Mono,
  Inter,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";
import "./art-direction-pass.css";
import { Shell } from "./components/Shell";
import { JsonLd } from "./components/JsonLd";

const SITE_URL = "https://suspecframework.dev";

const backgroundMotionScript = `
(() => {
  const previousCleanup = window.__suspecBackgroundMotionCleanup;
  if (typeof previousCleanup === "function") previousCleanup();

  const root = document.documentElement;
  const motionQuery = window.matchMedia("(hover: hover) and (prefers-reduced-motion: no-preference)");
  const resetProperties = [
    "--background-plane-tilt-x",
    "--background-plane-tilt-y",
    "--background-plane-origin-x",
    "--background-plane-origin-y",
    "--background-plane-drift-x",
    "--background-plane-drift-y",
    "--background-header-drift-x",
    "--background-header-drift-y",
    "--background-plane-normal-x",
    "--background-plane-normal-y",
    "--background-plane-grid-x",
    "--background-plane-grid-y",
    "--background-plane-grid-minor-x",
    "--background-plane-grid-minor-y",
    "--background-header-grid-x",
    "--background-header-grid-y",
    "--background-header-origin-x",
    "--background-header-origin-y"
  ];
  let frame = 0;
  let pointerX = window.innerWidth / 2;
  let pointerY = window.innerHeight * 0.42;
  let tracking = false;
  let delayedSync = 0;

  const resetPointer = () => {
    for (const property of resetProperties) root.style.removeProperty(property);
  };

  const updatePointer = () => {
    frame = 0;
    const width = Math.max(window.innerWidth, 1);
    const height = Math.max(window.innerHeight, 1);
    const normalX = Math.max(-1, Math.min(1, (pointerX / width - 0.5) * 2));
    const normalY = Math.max(-1, Math.min(1, (pointerY / height - 0.5) * 2));

    root.style.setProperty("--background-plane-normal-x", normalX.toFixed(4));
    root.style.setProperty("--background-plane-normal-y", normalY.toFixed(4));
    root.style.setProperty("--background-plane-tilt-x", (normalY * -7.2).toFixed(3) + "deg");
    root.style.setProperty("--background-plane-tilt-y", (normalX * 8.4).toFixed(3) + "deg");
    root.style.setProperty("--background-plane-origin-x", (50 + normalX * 8).toFixed(2) + "%");
    root.style.setProperty("--background-plane-origin-y", (52 + normalY * 6).toFixed(2) + "%");
    root.style.setProperty("--background-plane-drift-x", (-normalX * 7.2).toFixed(2) + "px");
    root.style.setProperty("--background-plane-drift-y", (-normalY * 5.4).toFixed(2) + "px");
    root.style.setProperty("--background-header-drift-x", (-normalX * 4.8).toFixed(2) + "px");
    root.style.setProperty("--background-header-drift-y", (-normalY * 3.6).toFixed(2) + "px");
    root.style.setProperty("--background-header-origin-x", (50 + normalX * 9).toFixed(2) + "%");
    root.style.setProperty("--background-header-origin-y", (46 + normalY * 6).toFixed(2) + "%");
    root.style.setProperty("--background-plane-grid-x", (-normalX * 9).toFixed(2) + "px");
    root.style.setProperty("--background-plane-grid-y", (-normalY * 6).toFixed(2) + "px");
    root.style.setProperty("--background-plane-grid-minor-x", (-normalX * 4.5).toFixed(2) + "px");
    root.style.setProperty("--background-plane-grid-minor-y", (-normalY * 3).toFixed(2) + "px");
    root.style.setProperty("--background-header-grid-x", (normalX * 12).toFixed(2) + "px");
    root.style.setProperty("--background-header-grid-y", (normalY * 7).toFixed(2) + "px");
  };

  const queuePointer = (event) => {
    if (!tracking) return;
    pointerX = event.clientX;
    pointerY = event.clientY;
    if (frame === 0) frame = window.requestAnimationFrame(updatePointer);
  };

  const startTracking = () => {
    if (tracking) return;
    tracking = true;
    document.addEventListener("pointermove", queuePointer, { capture: true, passive: true });
    window.addEventListener("pointermove", queuePointer, { passive: true });
    document.addEventListener("mousemove", queuePointer, { capture: true, passive: true });
    window.addEventListener("mousemove", queuePointer, { passive: true });
    updatePointer();
  };

  const stopTracking = () => {
    if (!tracking) return;
    tracking = false;
    document.removeEventListener("pointermove", queuePointer, true);
    window.removeEventListener("pointermove", queuePointer);
    document.removeEventListener("mousemove", queuePointer, true);
    window.removeEventListener("mousemove", queuePointer);
    if (frame !== 0) window.cancelAnimationFrame(frame);
    frame = 0;
    resetPointer();
  };

  const syncTracking = () => {
    if (motionQuery.matches) startTracking();
    else stopTracking();
  };

  const onResize = () => {
    pointerX = Math.max(0, Math.min(window.innerWidth, pointerX));
    pointerY = Math.max(0, Math.min(window.innerHeight, pointerY));
    syncTracking();
    if (tracking) updatePointer();
  };

  const addQueryListener = () => {
    if (typeof motionQuery.addEventListener === "function") motionQuery.addEventListener("change", syncTracking);
    else if (typeof motionQuery.addListener === "function") motionQuery.addListener(syncTracking);
  };

  const removeQueryListener = () => {
    if (typeof motionQuery.removeEventListener === "function") motionQuery.removeEventListener("change", syncTracking);
    else if (typeof motionQuery.removeListener === "function") motionQuery.removeListener(syncTracking);
  };

  addQueryListener();
  window.addEventListener("focus", syncTracking);
  window.addEventListener("pageshow", syncTracking);
  window.addEventListener("resize", onResize);
  syncTracking();
  delayedSync = window.setTimeout(syncTracking, 120);

  window.__suspecBackgroundMotionCleanup = () => {
    window.clearTimeout(delayedSync);
    removeQueryListener();
    window.removeEventListener("focus", syncTracking);
    window.removeEventListener("pageshow", syncTracking);
    window.removeEventListener("resize", onResize);
    stopTracking();
  };
})();
`;

// Site-wide structured data (SEO/GEO). The Organization + WebSite entities give answer engines and
// crawlers a stable, machine-readable statement of what this is; the SearchAction is wired to the
// real docs search (SearchBox reads ?q= on load and triggers Pagefind), so it is not a dead claim.
const siteGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Suspec",
      url: SITE_URL,
      description:
        "Suspec is a plain-markdown workflow for specs, tasks, reviews, findings, and evidence when teams use coding agents.",
      sameAs: [
        "https://github.com/jcosta33/suspec",
        "https://github.com/jcosta33/suspec-starter-kit",
        "https://github.com/jcosta33/suspec-skills",
        "https://github.com/jcosta33/suspec-agents",
        "https://github.com/jcosta33/suspec-cli",
        "https://github.com/jcosta33/suspec-mcp",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: "Suspec",
      url: SITE_URL,
      publisher: { "@id": `${SITE_URL}/#organization` },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${SITE_URL}/docs/?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
  // Mono is only used for code/labels, never the LCP heading. Keep it from
  // preload-competing with the display and body faces on the critical path.
  preload: false,
});

// Display face for headings and title moments: console-like, technical, and
// still warm enough for the manuscript/manual layer.
const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://suspecframework.dev"),
  title: "Suspec — spec and review workflow",
  description:
    "Suspec is a plain-markdown workflow for specs, tasks, reviews, findings, and evidence when teams use coding agents.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon/icon-192", sizes: "192x192", type: "image/png" },
      { url: "/icon/icon-512", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    siteName: "Suspec",
    locale: "en_US",
    images: [
      {
        url: "/og-home.png",
        width: 1200,
        height: 630,
        alt: "Suspec — spec and review workflow",
      },
    ],
  },
  twitter: {
    // Card type only — title/description/image cascade per page from each page's metadata + openGraph,
    // so every route gets its own card instead of inheriting the home page's everywhere.
    card: "summary_large_image",
  },
  alternates: {
    canonical: "/",
    // Surface the llms.txt files to agents/crawlers that look for a text/markdown alternate in the
    // head. The Metadata API renders these as <link rel="alternate" type="text/markdown" href=...>.
    types: {
      "text/markdown": [
        { url: "/llms.txt", title: "llms.txt" },
        { url: "/llms-full.txt", title: "llms-full.txt" },
      ],
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#110e0c", // --color-night: paints the mobile browser UI to match the dark shell
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-chassis text-concrete-100">
        <script
          id="suspec-background-motion"
          dangerouslySetInnerHTML={{ __html: backgroundMotionScript }}
        />
        <JsonLd data={siteGraph} />
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}
