import "server-only";
import { readFileSync } from "fs";
import { resolve } from "path";

interface IconVariantMeta {
  variant: { weight: "Regular" | "Bold" | "Fill"; duotone: boolean };
  svg: string;
}

interface RawIcon {
  name: string;
  tags: string[];
  variants: IconVariantMeta[];
}

interface IconsExport {
  icons: RawIcon[];
}

const data: IconsExport = JSON.parse(
  readFileSync(
    resolve(process.cwd(), "../../packages/icons/icons-export.json"),
    "utf-8"
  )
);

export interface IconSummary {
  name: string;
  tags: string[];
  defaultSvg: string;
}

export interface IconDetail {
  name: string;
  tags: string[];
  variants: { label: string; svg: string }[];
}

function variantLabel(v: IconVariantMeta["variant"]): string {
  if (v.duotone) return `${v.weight} Duotone`;
  return v.weight;
}

export function toPascalCase(kebab: string): string {
  return kebab
    .split("-")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join("");
}

export function getAllIcons(): IconSummary[] {
  return data.icons.map((icon) => {
    const defaultVariant = icon.variants.find(
      (v) => v.variant.weight === "Regular" && !v.variant.duotone
    );
    return {
      name: icon.name,
      tags: icon.tags,
      defaultSvg: defaultVariant?.svg ?? icon.variants[0].svg,
    };
  });
}

export function getIconByName(name: string): IconDetail | null {
  const icon = data.icons.find((i) => i.name === name);
  if (!icon) return null;
  return {
    name: icon.name,
    tags: icon.tags,
    variants: icon.variants.map((v) => ({
      label: variantLabel(v.variant),
      svg: v.svg,
    })),
  };
}

export function getAllIconNames(): string[] {
  return data.icons.map((i) => i.name);
}
