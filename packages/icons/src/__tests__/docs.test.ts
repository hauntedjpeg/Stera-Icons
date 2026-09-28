import { describe, it, expect } from 'vitest';
import { readFileSync } from 'fs';
import { join } from 'path';

// Guards the hand-written docs against icon changes.
// Icons named in the docs must exist, so renaming or removing one fails here
// until the docs are updated.

const repoRoot = join(__dirname, '../../../..');

const DOCS = [
  'packages/icons/llms.txt',
  'packages/icons/README.md',
  'apps/docs/components/docs-content.tsx',
];

// Names the docs tell readers NOT to use. If one of these becomes a real icon,
// update the "do not guess" examples in the docs and remove it from this list.
const DOCUMENTED_AS_MISSING = ['SiClose', 'SiEdit', 'SiGear', 'SiCog'];

// Tag searches the docs use as examples: [tag, icon the docs say it finds]
const DOCUMENTED_TAG_SEARCHES: [string, string][] = [
  ['kebab', 'More'],
  ['overflow', 'More'],
  ['gear', 'Settings'],
];

const indexSource = readFileSync(join(repoRoot, 'packages/icons/src/index.ts'), 'utf8');
const exportedNames = new Set(
  [...indexSource.matchAll(/\bas (\w+)\b|[{,]\s*(\w+)\s*(?=[,}])/g)].map(match => match[1] || match[2])
);

const metadata: { name: string; componentName: string; tags: string[] }[] = JSON.parse(
  readFileSync(join(repoRoot, 'packages/icons/dist/icons.meta.json'), 'utf8')
);
const iconCount = new Set(metadata.map(entry => entry.name)).size;

describe('Documentation', () => {
  describe.each(DOCS)('%s', docPath => {
    const content = readFileSync(join(repoRoot, docPath), 'utf8');
    const referenced = [...new Set(content.match(/\bSi[A-Z]\w*/g) ?? [])];

    it('only references icons that exist', () => {
      const missing = referenced.filter(
        name => !DOCUMENTED_AS_MISSING.includes(name) && !exportedNames.has(name)
      );
      expect(missing).toEqual([]);
    });

    it('does not overstate the icon count', () => {
      for (const match of content.matchAll(/\b(\d+)\+ (?:React )?icons/g)) {
        expect(iconCount).toBeGreaterThanOrEqual(Number(match[1]));
      }
    });
  });

  it('names documented as missing are still missing', () => {
    const nowExist = DOCUMENTED_AS_MISSING.filter(name => exportedNames.has(name));
    expect(nowExist).toEqual([]);
  });

  it.each(DOCUMENTED_TAG_SEARCHES)('tag "%s" still finds %s', (tag, componentName) => {
    const found = metadata.some(
      entry => entry.componentName === componentName && entry.tags.includes(tag)
    );
    expect(found).toBe(true);
  });

  it('root README states the current icon count', () => {
    const readme = readFileSync(join(repoRoot, 'README.md'), 'utf8');
    const icons = readme.match(/\| Icons \| ([\d,]+) \|/);
    const variants = readme.match(/\| Total variants \| ([\d,]+) \|/);

    expect(Number(icons?.[1].replace(/,/g, ''))).toBe(iconCount);
    expect(Number(variants?.[1].replace(/,/g, ''))).toBe(metadata.length);
  });
});
