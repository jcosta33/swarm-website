// Ensure the swarm/docs canon is available to the build (prebuild step).
// - local dev: use the sibling checkout ../swarm/docs (no-op).
// - CI / Vercel (no sibling): shallow-clone the canon into .swarm-canon/ (gitignored, ephemeral —
//   never committed, so single-sourcing holds). Pin a ref via SWARM_REF for reproducible builds.
// Chosen over a git submodule: lower contributor friction (no submodule init/update), works the same
// locally and on Vercel, and SWARM_REF gives the same pinning a submodule would.
import { existsSync } from "node:fs";
import { execSync } from "node:child_process";
import path from "node:path";

const cwd = process.cwd();
const sibling = path.join(cwd, "..", "swarm", "docs");
const vendor = path.join(cwd, ".swarm-canon");
const vendorDocs = path.join(vendor, "docs");
const ref = process.env.SWARM_REF || "main";
const repo = process.env.SWARM_REPO || "https://github.com/jcosta33/swarm";

if (existsSync(sibling)) {
  console.log("[ensure-canon] using the local sibling ../swarm/docs");
} else if (existsSync(vendorDocs)) {
  console.log("[ensure-canon] using the vendored .swarm-canon/docs");
} else {
  console.log(`[ensure-canon] cloning ${repo}@${ref} -> .swarm-canon`);
  execSync(`git clone --depth 1 --branch ${ref} ${repo} ${vendor}`, { stdio: "inherit" });
}
