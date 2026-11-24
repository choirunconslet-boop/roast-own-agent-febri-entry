import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "My agent Untung asks my permission before every transaction, then writes a 2,000-word Indonesian report explaining why it asked — even for a free mint.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(line);
