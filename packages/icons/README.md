# Stera Icons

[npm version](https://www.npmjs.com/package/stera-icons)
[License: MIT](https://opensource.org/licenses/MIT)

700+ React icons in 6 variants (Regular, Bold, Fill × Standard/Duotone). Tree-shakeable, ~300 bytes per icon gzipped, ESM-only.

## Install

```bash
npm install stera-icons
```

Requires React 17+ and Node 18+.

## Usage

```tsx
import { SiHomeBold, SiSearchFill, SiUserRegularDuotone } from 'stera-icons';

function App() {
  return <SiHomeBold size={24} color="blue" />;
}
```

**Naming pattern:** `Si` + `Name` + `Bold|Fill|Regular` + `Duotone?` — e.g. `SiSearchBold`, `SiHomeFillDuotone`. Omitting the weight gives you Regular (`SiSearch` = `SiSearchRegular`).

Each icon also exports without the `Si` prefix (`Search`, `SearchIcon`). The `Si`-prefixed form is recommended to avoid name collisions.

For maximum tree-shaking control, use subpath imports: `import { SiSearch } from 'stera-icons/icons/Search'`

**Dynamic variants** — switch weight/duotone at runtime (~1KB per icon):

```tsx
import { Search } from 'stera-icons/dynamic-variants';

<Search weight="bold" duotone />
```

**Dynamic loading** — load icons by name from external data (~2KB + lazy-loaded): `import { DynamicIcon } from 'stera-icons/dynamic'`

## Props


| Prop      | Type                          | Default          | Description                                                |
| --------- | ----------------------------- | ---------------- | ---------------------------------------------------------- |
| `size`    | `number | string`             | —                | Sets SVG `width`/`height`. Omit to let CSS control sizing. |
| `color`   | `string`                      | `'currentColor'` | Icon color.                                                |
| `weight`  | `'regular' | 'bold' | 'fill'` | `'regular'`      | Weight (dynamic-variants only).                            |
| `duotone` | `boolean`                     | `false`          | Duotone style (dynamic-variants only).                     |


All standard SVG attributes and `aria-`* props are supported. Icons automatically get `aria-hidden="true"` unless you provide `aria-label`, `role`, or `title`.

## Bundle Size


| Import                                           | Size (gzip)    |
| ------------------------------------------------ | -------------- |
| Direct import (`SiSearch`)                       | ~300 bytes     |
| Dynamic variant (`stera-icons/dynamic-variants`) | ~1 KB per icon |
| Dynamic loading (`stera-icons/dynamic`)          | ~2 KB + lazy   |


## Finding Icons

Search `index.d.ts` for keywords — each icon has JSDoc `@tags` with intent and aliases (e.g. searching "kebab" finds `SiMore`).

## License

MIT