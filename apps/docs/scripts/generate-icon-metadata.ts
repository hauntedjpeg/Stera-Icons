import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";

interface IconMeta {
  name: string;
  kebab: string;
  tags: string[];
}

// Parse the generated .d.ts to extract icon names and tags from JSDoc
const dtsPath = resolve(
  import.meta.dirname,
  "../../../packages/icons/dist/esm/index.d.ts"
);
const content = readFileSync(dtsPath, "utf-8");

const icons: IconMeta[] = [];
const seen = new Set<string>();

// Match JSDoc blocks followed by export lines
// Pattern: @component SiName, @tags ..., then export { XRegular as Name, ... }
const blockRegex =
  /\/\*\*\s*\n\s*\*\s*@component\s+Si(\w+)\s*\n\s*\*\s*@tags\s+([^\n]+)\n\s*\*\/\s*\nexport\s*\{[^}]+\}\s*from\s*'[^']+';/g;

let match: RegExpExecArray | null;
while ((match = blockRegex.exec(content)) !== null) {
  const componentName = match[1]; // e.g. "Accessibility" or "AccessibilityDuotone"

  // Skip duotone variants — we only want base icon names
  if (componentName.endsWith("Duotone")) continue;

  // Skip bold/fill variants (they only appear in the weight-specific sections)
  if (componentName.endsWith("Bold") || componentName.endsWith("Fill"))
    continue;

  if (seen.has(componentName)) continue;
  seen.add(componentName);

  const tags = match[2]
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);

  // Convert PascalCase to kebab-case
  const kebab = componentName
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/([A-Z])([A-Z][a-z])/g, "$1-$2")
    .toLowerCase();

  icons.push({ name: componentName, kebab, tags });
}

const outPath = resolve(import.meta.dirname, "../public/icon-metadata.json");
writeFileSync(outPath, JSON.stringify(icons));

console.log(`Generated icon metadata: ${icons.length} icons → ${outPath}`);
