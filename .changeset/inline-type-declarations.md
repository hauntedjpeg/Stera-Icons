---
'stera-icons': patch
---

Declare every icon inline in `index.d.ts` and `dynamic-variants.d.ts` instead of re-exporting the per-icon declaration files. TypeScript now opens one file to type an import from `stera-icons`, where it used to open about 5,000, which cuts type-check time and memory for every consumer. The exported names, types, `@tags` JSDoc and `@deprecated` markers are unchanged, and deep imports from `stera-icons/icons/<Name>` still have their own declaration files.
