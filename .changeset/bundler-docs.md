---
'stera-icons': patch
---

Document bundler setup in the README and llms.txt: add `stera-icons` to Next.js `experimental.optimizePackageImports`, and prefer subpath imports in large Vite apps, since the root entry re-exports every icon and the dev server pre-bundles all of it.
