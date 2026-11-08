---
'stera-icons': patch
---

Keep stale files out of the published package: the icon build now empties `dist/esm/icons` before compiling, so removed or renamed icons no longer leave old files behind, and source maps written by the development build are excluded from the npm package.
