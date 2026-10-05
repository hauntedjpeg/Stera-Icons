import { clsx, type ClassValue } from "clsx"
import { extendTailwindMerge } from "tailwind-merge"

// Typography utilities from styles/ui/typography.css (st-body-md, st-heading-lg, ...).
const isTypography = (value: string) =>
  /^(body|heading|display|hero|mono)-/.test(value)

const twMerge = extendTailwindMerge<"st-typography">({
  extend: {
    // Custom --inset-shadow-* sizes from app/ui/colors.css. Without this they
    // are read as inset-shadow colors and dropped when a real color follows.
    theme: {
      "inset-shadow": ["2xs-b"],
    },
    classGroups: {
      "st-typography": [{ st: [isTypography] }],
    },
    conflictingClassGroups: {
      "st-typography": [
        "font-family",
        "font-size",
        "font-weight",
        "leading",
        "tracking",
      ],
    },
  },
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
