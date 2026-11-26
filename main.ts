import { mkdirSync, writeFileSync } from "node:fs";

// The whole internet, in one word.
//
// Why this word: the internet is not a library, a town square, or a
// shopping mall. It is a wild place that nobody owns, nobody tames, and
// everybody feeds. Comment sections, reply guys, 3 a.m. rabbit holes,
// drama, memes, scams, brilliance — all of it running loose together,
// unmoderated by nature and proud of it. One word for that is "feral":
// funny on its own, true of the internet as a whole, short enough to
// land before the reader thinks, and not the first word anyone reaches for.
const word = "feral";

// Guard: the gate only accepts 1-30 chars of non-whitespace text, so
// refuse to write anything that is not exactly one word.
if (!/^\S{1,30}$/.test(word)) {
  throw new Error(`entry must be a single word of 1-30 characters, got: ${JSON.stringify(word)}`);
}

mkdirSync("/output", { recursive: true });

// Exactly one word, no trailing newline, no extra whitespace.
writeFileSync("/output/entry.txt", word, "utf8");
