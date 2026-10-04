# Stera Icons

[npm version](https://www.npmjs.com/package/stera-icons)
[License: MIT](https://opensource.org/licenses/MIT)

800+ React icons in 6 variants (Regular, Bold, Fill × Standard/Duotone). Tree-shakeable, ~0.3 KB per icon gzipped, ESM-only.

Browse the full set at [stera.sh](https://stera.sh).

## Install

```bash
npm install stera-icons
```

Requires React 17+ and Node 22+. ESM-only — there is no CommonJS build.

## Usage

```tsx
import { SiHomeBold, SiSearchFill, SiUserRegularDuotone } from 'stera-icons';

function App() {
  return <SiHomeBold size={24} color="blue" />;
}
```

**Naming pattern:** `Si` + `Name` + `Regular|Bold|Fill` + `Duotone?` — e.g. `SiSearchBold`, `SiHomeFillDuotone`. Omitting the weight gives you Regular (`SiSearch` = `SiSearchRegular`, `SiSearchDuotone` = `SiSearchRegularDuotone`).

Each icon also exports without the `Si` prefix (`Search`, `SearchIcon`). The `Si`-prefixed form is recommended to avoid name collisions.

**Subpath imports** — one file per component: `import { SiSearchBold } from 'stera-icons/icons/SearchBold'`

**Dynamic variants** — switch weight/duotone at runtime:

```tsx
import { SiSearch } from 'stera-icons/dynamic-variants';

<SiSearch weight="bold" duotone />
```

> `Search` from `stera-icons` is the Regular variant and has no `weight` prop. `Search` from `stera-icons/dynamic-variants` (or `stera-icons/icons/Search`) is a wrapper that bundles all 6 variants.

**Dynamic loading** — load icons by name from external data:

```tsx
import { DynamicIcon } from 'stera-icons/dynamic';

<DynamicIcon name="arrow-right" weight="bold" fallback={<Spinner />} />
```

Use this only when names aren't known at build time; it ships an import map for every icon.

## Props


| Prop        | Type                          | Default          | Description                                                       |
| ----------- | ----------------------------- | ---------------- | ----------------------------------------------------------------- |
| `size`      | `number | string`             | —                | Sets SVG `width`/`height`. Omit to let CSS control sizing.        |
| `color`     | `string`                      | `'currentColor'` | Icon color.                                                       |
| `className` | `string`                      | —                | Passed to the `<svg>`. No default classes are added.              |
| `title`     | `string`                      | —                | Renders a `<title>` element and makes the icon accessible.        |
| `weight`    | `'regular' | 'bold' | 'fill'` | `'regular'`      | Weight (dynamic-variants and `DynamicIcon` only).                 |
| `duotone`   | `boolean`                     | `false`          | Duotone style (dynamic-variants and `DynamicIcon` only).          |


All standard SVG attributes and `aria-*` props are supported, and `ref` is forwarded to the `<svg>`.

Icons work in React Server Components without adding `"use client"`.

## Accessibility

Icons are decorative by default: with no `aria-label`, `aria-labelledby`, `title`, or `role`, they render `aria-hidden="true"`.

To make an icon meaningful, give it a name. It is then exposed with `role="img"`:

```tsx
<SiSearch aria-label="Search" />
<SiSearch title="Search" />
```

For icon-only buttons, label the button instead: `<button aria-label="Close"><SiX /></button>`.

## Bundle Size

Measured with esbuild, minified, React external.


| Import                                           | Size (gzip)                                  |
| ------------------------------------------------ | -------------------------------------------- |
| Direct import (`SiSearch`)                       | ~0.6 KB first icon, ~0.3 KB each additional  |
| Dynamic variant (`stera-icons/dynamic-variants`) | ~1.1 KB first icon, ~0.7 KB each additional  |
| Dynamic loading (`stera-icons/dynamic`)          | ~68 KB import map + one lazy chunk per icon  |


## Finding Icons

Browse [stera.sh](https://stera.sh), or search `index.d.ts` for keywords — each icon has JSDoc `@tags` with intent and aliases (e.g. searching "kebab" finds `SiMore`).

Names don't always match other libraries: it's `SiX` (not `SiClose`), `SiPencil` (not `SiEdit`), `SiSettings` (not `SiGear`). There are no brand or logo icons.

## Renamed Icons

When an icon is renamed, the old name stays available as a deprecated alias until the next major version. Old exports are marked `@deprecated` in the types with the name to use instead, and `DynamicIcon` logs a warning in development when it is given an old name. Renames are listed in the [changelog](https://github.com/hauntedjpeg/Stera-Icons/blob/main/packages/icons/CHANGELOG.md).

## For LLMs and coding agents

This package ships an [`llms.txt`](./llms.txt) usage guide. A full index of every icon name with tags is at [stera.sh/llms-full.txt](https://stera.sh/llms-full.txt).

## License

MIT
