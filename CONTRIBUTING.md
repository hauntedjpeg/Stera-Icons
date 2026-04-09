# Contributing to Stera Icons

## Prerequisites

- Node.js >= 18
- pnpm (`corepack enable` to use the version pinned in package.json)

```bash
pnpm install
```

## Adding Icons

Follow the **changeset-first** workflow — create the changeset *before* adding icons so new icons get the correct version metadata.

```bash
# 1. Create a changeset (select "minor" for new icons)
pnpm changeset

# 2. Verify the pending version is detected
node packages/icons/scripts/hash-versioning.js info

# 3. Add your icons to packages/icons/icons-export.json

# 4. Build icons
pnpm build:icons

# 5. Commit everything (including dist/icons.meta.json)
git add .
git commit -m "feat: add new icons"
git push
```

## Build Commands

All commands run from the monorepo root:

| Command | Description |
|---------|-------------|
| `pnpm build` | Full production build (tsup + icons + declarations) |
| `pnpm build:icons` | Build icon components and metadata only |
| `pnpm dev` | Watch mode for development |
| `pnpm dev:docs` | Run the docs site locally |
| `pnpm test` | Run tests |
| `pnpm lint` | Lint the icons package |

### Useful Scripts

```bash
# Version info
node packages/icons/scripts/hash-versioning.js info

# Icon metadata summary
node packages/icons/scripts/metadata-utils.js summary

# Search icons
node packages/icons/scripts/metadata-utils.js search "chart"

# Bundle analysis
pnpm --filter stera-icons analyze:bundle
```

## Release Process

Releases are fully automated via GitHub Actions — **never run `pnpm changeset version` manually**.

1. Push a commit containing a `.changeset/*.md` file
2. GitHub Action creates a **"Version Packages"** PR
3. Review the PR (check CHANGELOG and version bump)
4. Merge the PR — GitHub Action publishes to npm and creates git tags

## Version Bump Types

| Type | Example | When to use |
|------|---------|-------------|
| `patch` | 3.1.0 → 3.1.1 | Bug fixes, minor icon tweaks |
| `minor` | 3.1.0 → 3.2.0 | **New icons** (most common) |
| `major` | 3.1.0 → 4.0.0 | Breaking changes, icon removals |

## Important Files

| File | Purpose |
|------|---------|
| `packages/icons/icons-export.json` | Icon definitions (SVG data from Figma) |
| `packages/icons/dist/icons.meta.json` | Version history per icon — **must be committed** |
| `.changeset/*.md` | Pending version bumps |
| `.github/workflows/release.yml` | Automated release pipeline |

## Troubleshooting

**New icons get the wrong version** — You likely forgot to create a changeset first. Run `pnpm changeset`, select the correct bump type, then rebuild with `pnpm build:icons`.

**"Has pending changesets: false"** — Check that `.changeset/` contains a `.md` file (not just `config.json`) with the correct format:
```markdown
---
"stera-icons": minor
---
Summary of changes
```

**All icons showing as "new"** — The metadata file (`dist/icons.meta.json`) is missing or wasn't committed. Restore it:
```bash
git checkout HEAD -- packages/icons/dist/icons.meta.json
```

**Version skip (e.g., 3.2 → 5.0)** — Someone ran `pnpm changeset version` manually. This is unrecoverable — document it and move forward with the current version. Prevent by always letting GitHub Actions handle versioning.
