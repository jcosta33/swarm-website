import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Section } from "./components/Section";

export const metadata = {
  title: "Page not found — Swarm",
  description: "The requested page could not be found on the Swarm website.",
  robots: "noindex",
};

export default function NotFoundPage() {
  return (
    <Section className="flex flex-1 flex-col items-center justify-center py-32 text-center">
      <h1 className="font-heading text-6xl font-bold text-swarm-yellow">404</h1>
      <p className="mt-4 text-2xl font-semibold text-concrete-100">Drone lost signal.</p>
      <p className="mt-2 max-w-md text-concrete-400">
        The page you are looking for is not in the hive. Check the URL or head back home.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-swarm-yellow px-6 py-3 font-semibold text-factory-950 transition-colors hover:bg-yellow-300 focus-ring"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back to hive
      </Link>
    </Section>
  );
}
