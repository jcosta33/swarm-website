"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { NavSection } from "../lib/canon";

const norm = (p: string) => p.replace(/\/+$/, "");

// Client component: the layout (server) computes `nav` and passes it down so node:fs stays server-side;
// here we light up the active page from the pathname. Collapsed groups auto-open when they hold it.
// On mobile the whole tree is tucked behind a disclosure so the opened doc isn't pushed ~1.8 screens
// down past the full nav; on desktop (and no-JS) it stays expanded and the toggle is hidden via CSS.
export function DocsNav({ nav }: { nav: NavSection[] }) {
  const current = norm(usePathname() || "");
  const isActive = (slug: string) => norm(`/docs/${slug}`) === current;
  const [open, setOpen] = useState(true); // SSR + desktop default: expanded

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 64rem)");
    const sync = () => setOpen(!mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const groups = nav.map((sec) => {
    const items = sec.items.map((it) => {
      const active = isActive(it.slug);
      return (
        <li key={it.slug}>
          <Link
            href={`/docs/${it.slug}/`}
            className={active ? "is-active" : undefined}
            aria-current={active ? "page" : undefined}
          >
            {it.label}
          </Link>
        </li>
      );
    });
    const hasActive = sec.items.some((it) => isActive(it.slug));
    return sec.collapsed ? (
      <details key={sec.title} className="docs-nav-group" open={hasActive}>
        <summary>{sec.title}</summary>
        <ul>{items}</ul>
      </details>
    ) : (
      <div key={sec.title} className="docs-nav-group">
        {/* A styled <p>, not <h2>: the sidebar sits before the article <h1> in the DOM, so heading
            group titles here would put h2s ahead of the page h1. The <nav> is already a labelled
            landmark, so these are group labels, not document headings. */}
        <p className="docs-nav-title">{sec.title}</p>
        <ul>{items}</ul>
      </div>
    );
  });

  return (
    <details
      className="docs-nav-disclosure"
      open={open}
      onToggle={(e) => setOpen((e.currentTarget as HTMLDetailsElement).open)}
    >
      <summary className="docs-nav-summary">Browse the docs</summary>
      <nav className="docs-nav" aria-label="Documentation">
        {groups}
      </nav>
    </details>
  );
}
