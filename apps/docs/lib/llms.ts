import "server-only";
import llms from "@/data/llms.json";
import { getAllIcons } from "@/lib/icons";

export const TEXT_HEADERS = { "Content-Type": "text/plain; charset=utf-8" };

export function getLlmsTxt(): string {
  return llms.guide;
}

export function getLlmsFullTxt(): string {
  const icons = getAllIcons();
  const lines = icons.map(
    ({ name, kebabName, tags }) =>
      `${kebabName} | Si${name} | ${tags.filter((tag) => tag !== name).join(", ")}`
  );

  return [
    llms.guide.trimEnd(),
    "",
    "## Icon Index",
    "",
    `${icons.length} icons, one per line: kebab-name | component | tags`,
    "",
    "The component listed is the Regular variant. Append Bold, Fill, Duotone, BoldDuotone or FillDuotone for the others, e.g. SiSearch -> SiSearchBoldDuotone.",
    "If a name is not listed here, the icon does not exist.",
    "",
    ...lines,
    "",
  ].join("\n");
}
