import type { Metadata } from "next";

const markdownAlternates = {
  "text/markdown": [
    { url: "/llms.txt", title: "llms.txt" },
    { url: "/llms-full.txt", title: "llms-full.txt" },
  ],
} satisfies NonNullable<Metadata["alternates"]>["types"];

export function canonicalAlternates(
  canonical: string,
): NonNullable<Metadata["alternates"]> {
  return {
    canonical,
    types: markdownAlternates,
  };
}
