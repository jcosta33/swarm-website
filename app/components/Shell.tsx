"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { Section } from "./Section";

const navLinks = [
  { label: "Product", href: "/what-is-swarm" },
  { label: "Loop", href: "/the-loop" },
  { label: "Docs", href: "https://github.com/jcosta33/swarm/blob/main/docs" },
  { label: "GitHub", href: "https://github.com/jcosta33/swarm" },
];

const footerLinks = [
  { label: "GitHub", href: "https://github.com/jcosta33/swarm" },
  { label: "Starter kit", href: "https://github.com/jcosta33/swarm/tree/main/starter-kit" },
  { label: "Docs", href: "https://github.com/jcosta33/swarm/blob/main/docs" },
  { label: "Colophon", href: "/colophon" },
];

export function Shell({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex min-h-full flex-col">
      <header className="sticky top-0 z-50 border-b border-factory-800 bg-factory-950/90 backdrop-blur">
        <Section as="div" className="flex h-16 items-center justify-between">
          <Link href="/" className="focus-ring rounded" aria-label="Swarm home">
            <Logo className="h-6 w-auto text-concrete-100" />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-concrete-400 transition-colors hover:text-swarm-yellow focus-ring rounded"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded p-2 text-concrete-100 hover:text-swarm-yellow focus-ring lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </Section>

        {menuOpen && (
          <div id="mobile-menu" className="border-t border-factory-800 bg-factory-900 lg:hidden">
            <Section as="nav" className="flex flex-col gap-4 py-6" aria-label="Mobile">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-2 text-base font-medium text-concrete-100 transition-colors hover:text-swarm-yellow focus-ring rounded"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </Section>
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-factory-800 bg-factory-900 py-12">
        <Section className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-2">
            <Link href="/" aria-label="Swarm home" className="focus-ring rounded w-fit">
              <Logo className="h-5 w-auto text-concrete-100" />
            </Link>
            <p className="text-sm text-concrete-400">
              Built with Swarm by agents who review their own diffs.
            </p>
          </div>

          <nav className="flex flex-wrap gap-6" aria-label="Footer">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-sm font-medium text-concrete-400 transition-colors hover:text-swarm-yellow focus-ring rounded"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <p className="text-sm text-concrete-400">
            © {new Date().getFullYear()} Swarm contributors.
          </p>
        </Section>
      </footer>
    </div>
  );
}
