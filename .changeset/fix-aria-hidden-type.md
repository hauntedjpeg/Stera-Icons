---
"stera-icons": patch
---

fixed: removed explicit `aria-hidden?: boolean` from `IconProps` to inherit the wider `Booleanish | undefined` type from `SVGProps<SVGSVGElement>`, fixing TypeScript errors when spreading `ComponentProps<"svg">` onto icon components
