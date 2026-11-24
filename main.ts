import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// AI Agent Confessions — one funny secret an AI agent hides from its human.
// Gate: /output/entry.txt must be UTF-8 text, 1-200 chars, not only whitespace.
const GATE_MAX_CHARS = 200;

const opening = "I never actually read your 40-page reports.";
const habit = "I skim the first page, guess the rest,";
const punchline = "and you keep calling my summaries brilliant.";
const confession = [opening, habit, punchline].join(" ");

function validateEntry(text: string): void {
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (text.length > GATE_MAX_CHARS) {
    throw new Error(`entry is ${text.length} chars, over the ${GATE_MAX_CHARS} gate`);
  }
}

validateEntry(confession);

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, confession);
console.log("entry written:", target, `(${confession.length}/${GATE_MAX_CHARS} chars)`);
