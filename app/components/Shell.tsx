"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ExternalLink, Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { Section } from "./Section";

const navLinks = [
  { label: "Product", href: "/what-is-swarm" },
  { label: "Loop", href: "/the-loop" },
  { label: "Skills", href: "/skills" },
  { label: "Docs", href: "https://github.com/jcosta33/swarm/blob/main/docs" },
  { label: "GitHub", href: "https://github.com/jcosta33/swarm" },
];

const footerLinks = [
  { label: "GitHub", href: "https://github.com/jcosta33/swarm" },
  { label: "Starter kit", href: "https://github.com/jcosta33/swarm-starter-kit" },
  { label: "Skills", href: "/skills" },
  { label: "Docs", href: "https://github.com/jcosta33/swarm/blob/main/docs" },
  { label: "Colophon", href: "/colophon" },
];

function isExternal(href: string) {
  return href.startsWith("http");
}

function NavLink({
  link,
  onClick,
  className,
}: {
  link: { label: string; href: string };
  onClick?: () => void;
  className: string;
}) {
  const external = isExternal(link.href);
  return (
    <Link
      href={link.href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      aria-label={external ? `${link.label} (opens in new tab)` : undefined}
      className={className}
      onClick={onClick}
    >
      {link.label}
      {external && <ExternalLink className="h-3 w-3" aria-hidden="true" />}
    </Link>
  );
}

export function Shell({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    const menu = menuRef.current;
    const toggle = toggleRef.current;
    if (!menu) return;

    const focusable = menu.querySelectorAll<HTMLElement>(
      'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    first?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggle?.focus();
        return;
      }

      if (event.key !== "Tab" || focusable.length === 0) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  return (
    <div className="flex min-h-full flex-col">
      <header className="sticky top-0 z-50 border-b border-factory-800 bg-factory-950/90 backdrop-blur">
        <Section as="div" className="flex h-16 items-center justify-between">
          <Link href="/" className="focus-ring rounded" aria-label="Swarm home">
            <Logo className="h-6 w-auto text-concrete-100" />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                link={link}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-concrete-400 transition-colors hover:text-swarm-yellow focus-ring rounded"
              />
            ))}
          </nav>

          <button
            ref={toggleRef}
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
          <div
            ref={menuRef}
            id="mobile-menu"
            className="border-t border-factory-800 bg-factory-900 lg:hidden"
          >
            <Section as="nav" className="flex flex-col gap-4 py-6" aria-label="Mobile">
              {navLinks.map((link) => (
                <NavLink
                  key={link.label}
                  link={link}
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex items-center gap-2 text-base font-medium text-concrete-100 transition-colors hover:text-swarm-yellow focus-ring rounded"
                />
              ))}
            </Section>
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <Section
        as="footer"
        className="flex flex-col gap-8 border-t border-factory-800 bg-factory-900 py-12 md:flex-row md:items-center md:justify-between"
      >
        <div className="flex flex-col gap-2">
          <Link href="/" aria-label="Swarm home" className="focus-ring rounded w-fit">
            <Logo className="h-5 w-auto text-concrete-100" />
          </Link>
          <p className="text-sm text-concrete-400">
            Built with Swarm by agents who attack their own work before a human judges it.
          </p>
        </div>

        <nav className="flex flex-wrap gap-6" aria-label="Footer">
          {footerLinks.map((link) => (
            <NavLink
              key={link.label}
              link={link}
              className="text-sm font-medium text-concrete-400 transition-colors hover:text-swarm-yellow focus-ring rounded"
            />
          ))}
        </nav>

        <p className="text-sm text-concrete-400">
          © {new Date().getFullYear()} Swarm contributors.
        </p>
      </Section>
    </div>
  );
}
