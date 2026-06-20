import type { ReactNode } from "react";
import "./docs.css";
import { DocsNav } from "./components/DocsNav";
import { SearchBox } from "./components/SearchBox";

export default function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="docs-layout">
      <aside data-pagefind-ignore>
        <SearchBox />
        <DocsNav />
      </aside>
      {/* data-pagefind-body scopes the search index to docs content only (not the marketing pages). */}
      <main className="docs-prose" data-pagefind-body>
        {children}
      </main>
    </div>
  );
}
