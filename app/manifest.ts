import type { MetadataRoute } from "next";

export const dynamic = "force-static";

// Web app manifest — makes the site installable + gives Android/Chrome a themed icon. Brand "Calma"
// matches the current chrome; the icon paths are the build-generated app/icon + app/apple-icon.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Calma — a spec-and-review workflow for coding agents",
    short_name: "Calma",
    description:
      "A lightweight spec-and-review workflow that keeps humans in charge of code written by AI agents. Plain markdown, any agent, no runtime.",
    start_url: "/",
    display: "standalone",
    background_color: "#0A0A08",
    theme_color: "#0A0A08",
    // Next serves the build-generated icons at these extensionless routes (dist/icon, dist/apple-icon).
    icons: [
      { src: "/icon", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
