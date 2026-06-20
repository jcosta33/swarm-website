import type { MetadataRoute } from "next";
import { listDocs } from "./docs/lib/canon";

export const dynamic = "force-static";

const BASE_URL = "https://swarmframework.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const marketing = [
    "/",
    "/what-is-swarm/",
    "/the-loop/",
    "/get-started/",
    "/skills/",
    "/skills/writing/",
    "/cli/",
  ];
  // One <url> per docs page (trailingSlash: true). listDocs() returns [] when the canon is absent,
  // so the sitemap still builds — just without docs entries.
  const docs = ["/docs/", ...listDocs().map((slug) => `/docs/${slug}/`)];
  return [...marketing, ...docs].map((p) => ({ url: `${BASE_URL}${p}`, lastModified: now }));
}
