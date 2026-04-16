import "server-only";
import iconData from "@/data/icons.json";
import type { IconData } from "@/lib/types";

export type { IconData };

const data = iconData as IconData[];

export interface IconSummary {
  name: string;
  kebabName: string;
  tags: string[];
}

export interface IconDetail {
  name: string;
  kebabName: string;
  tags: string[];
  variants: {
    label: string;
    weight: "regular" | "bold" | "fill";
    duotone: boolean;
  }[];
}

function variantLabel(weight: string, duotone: boolean): string {
  const w = weight.charAt(0).toUpperCase() + weight.slice(1);
  if (duotone) return `${w} Duotone`;
  return w;
}

export function toPascalCase(kebab: string): string {
  return kebab
    .split("-")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join("");
}

export function getAllIcons(): IconSummary[] {
  return data.map((icon) => ({
    name: icon.name,
    kebabName: icon.kebabName,
    tags: icon.tags,
  }));
}

export function getIconByName(kebabName: string): IconDetail | null {
  const icon = data.find((i) => i.kebabName === kebabName);
  if (!icon) return null;

  const variants: IconDetail["variants"] = [];
  for (const [key, _info] of Object.entries(icon.variants)) {
    const isDuotone = key.endsWith("-duotone");
    const weight = (isDuotone ? key.replace("-duotone", "") : key) as
      | "regular"
      | "bold"
      | "fill";
    variants.push({
      label: variantLabel(weight, isDuotone),
      weight,
      duotone: isDuotone,
    });
  }

  return {
    name: icon.name,
    kebabName: icon.kebabName,
    tags: icon.tags,
    variants,
  };
}

export function getAllIconData(): IconData[] {
  return data;
}

export function getIconData(kebabName: string): IconData | null {
  return data.find((i) => i.kebabName === kebabName) ?? null;
}

export function getAllIconNames(): string[] {
  return data.map((i) => i.kebabName);
}
