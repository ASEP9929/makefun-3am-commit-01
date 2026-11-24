// The 3 AM Commit Message — v3 (final)
// Tightened v2: dropped "fixed it by" and "actually" — the punchline lands
// on "worked". Gate: 1-200 chars, UTF-8, not only whitespace.
import { writeFileSync, mkdirSync } from "node:fs";

const ENTRY =
  "fix(prod): broke prod at 3am, then reverted myself — the rollback is the only code I wrote tonight that worked";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(ENTRY);
console.log(`chars: ${[...ENTRY].length}`);
