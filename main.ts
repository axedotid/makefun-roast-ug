// make.fun — "One-Line Roast: The Gadget You Use Every Day"
// Writes ONE original line (<=200 chars) to /output/entry.txt. No network, no external reads.
//
// Candidate angles considered:
//   1. Robot vacuum maps the whole apartment flawlessly, then loses a war with one rug.
//   2. Password manager + authenticator app deadlocking you out of your own accounts.
//   3. Wireless earbuds reconnect just to announce, mid-silence, that they've reconnected.
//   4. Smartwatch buzzes to remind you to breathe while you're already hyperventilating.
//   5. GPS recalculates in the exact tone of a disappointed driving instructor.
//
// Chosen: #5 — fresh angle (personifies the *tone* of the recalculation, not the wrong turn),
// one specific gripe, concrete behavior ("recalculating" voice), tight and universally recognized.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My GPS recalculates in the weary sigh of a driving instructor who's already written me off.";

function main(): void {
  const payload = LINE + "\n";

  // Primary target: the grader sandbox mounts /output writable.
  try {
    mkdirSync("/output", { recursive: true });
    writeFileSync("/output/entry.txt", payload);
    return;
  } catch {
    // Fallback for local testing where /output isn't writable.
    writeFileSync("./entry.txt", payload);
  }
}

main();