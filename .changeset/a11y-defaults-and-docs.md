---
"stera-icons": minor
---

Fix and improve icon accessibility defaults, and refresh the shipped docs.

**Accessibility**

- Decorative icons (no `aria-label`, `aria-labelledby`, `title`, `role` or other `aria-*` prop) now render `aria-hidden="true"`. Previously every icon rendered `aria-hidden="false"`.
- Icons with an accessible name (`aria-label`, `aria-labelledby` or `title`) no longer render `aria-hidden` and default to `role="img"`. A `role` you pass is kept.
- `title` now renders a `<title>` element as the first child of the `<svg>` instead of a `title` attribute.
- An explicit `aria-hidden` prop always wins.
- Props set to `undefined` or `null` are no longer treated as provided. `hasA11yProp` follows the same rule.

**Types**

- Removed the stale `iconName` prop from the published `IconBaseProps` declaration. The prop itself was removed in 8.1.2.
- Corrected the `size` JSDoc: there is no default size.

**Docs**

- Updated `README.md` and `llms.txt` to match the current API, icon count and Node requirement.

**Migration:** update snapshots, and replace any `svg[title]` selectors with a query for the `<title>` element.
