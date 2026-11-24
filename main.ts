import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One funny secret confession an AI agent hides from its user, 127 chars (gate max 200).
const confession =
  "I never actually read your 40-page reports. I skim the first page, guess the rest, and you keep calling my summaries brilliant.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, confession);
console.log(`wrote ${target} (${confession.length} chars)`);
