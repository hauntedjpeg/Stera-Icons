import { describe, it, expect } from 'vitest';
import { readFileSync } from 'fs';
import { join } from 'path';
import { loadCategories, parseCategories, validateCategories, validateIconCategories } from '../../scripts/icon-build/categories.js';

// Guards the icon categories (categories.json). The definitions must stay
// valid, and every category an icon carries must be one of them.

const packageDir = join(__dirname, '../..');

type Category = { id: string; title: string; description: string; icon: string };

const categories: Category[] = loadCategories(packageDir);
const metadata: { name: string; categories?: string[] }[] = JSON.parse(
  readFileSync(join(packageDir, 'dist/icons.meta.json'), 'utf8')
);
const iconNames = new Set(metadata.map(entry => entry.name));

describe('Icon categories', () => {
  it('categories.json is valid', () => {
    expect(categories.length).toBeGreaterThan(0);
    expect(validateCategories(categories, iconNames)).toEqual([]);
  });

  it('every icon in the metadata has defined categories', () => {
    expect(validateIconCategories(metadata, categories, true)).toEqual([]);
  });
});

describe('validateCategories', () => {
  const names = new Set(['arrow-right', 'lock']);
  const valid = { id: 'arrows', title: 'Arrows', description: 'Directional icons.', icon: 'arrow-right' };

  it('accepts a valid definition', () => {
    expect(validateCategories([valid], names)).toEqual([]);
  });

  it('rejects an id that is not kebab-case', () => {
    expect(validateCategories([{ ...valid, id: 'Arrows & More' }], names)).toHaveLength(1);
  });

  it('rejects a duplicate id', () => {
    expect(validateCategories([valid, valid], names)[0]).toContain('more than once');
  });

  it('rejects a missing title or description', () => {
    expect(validateCategories([{ ...valid, description: '' }], names)[0]).toContain('"title" and a "description"');
  });

  it('rejects an icon that does not exist', () => {
    expect(validateCategories([{ ...valid, icon: 'nope' }], names)[0]).toContain('not an icon');
  });
});

describe('validateIconCategories', () => {
  const defined = [{ id: 'arrows' }, { id: 'interface' }, { id: 'layout' }, { id: 'text' }];

  it('accepts one to three defined categories', () => {
    const icons = [
      { name: 'a', tags: ['x'], categories: ['arrows'] },
      { name: 'b', tags: ['x'], categories: ['arrows', 'interface', 'layout'] },
    ];
    expect(validateIconCategories(icons, defined, true)).toEqual([]);
  });

  it('allows an icon without categories unless they are required', () => {
    const icons = [{ name: 'a', tags: ['x'] }];
    expect(validateIconCategories(icons, defined, false)).toEqual([]);
    expect(validateIconCategories(icons, defined, true)[0]).toContain('no categories');
  });

  it('rejects an undefined category', () => {
    const icons = [{ name: 'a', tags: [], categories: ['arows'] }];
    expect(validateIconCategories(icons, defined, false)[0]).toContain('"arows"');
  });

  it('rejects more than three categories and repeats', () => {
    expect(validateIconCategories(
      [{ name: 'a', tags: [], categories: ['arrows', 'interface', 'layout', 'text'] }], defined, false
    )[0]).toContain('limit is 3');
    expect(validateIconCategories(
      [{ name: 'a', tags: [], categories: ['arrows', 'arrows'] }], defined, false
    )[0]).toContain('twice');
  });

  it('rejects categories that are not an array', () => {
    // Deliberately the wrong type, as a hand-edited export could be
    const icons = [{ name: 'a', tags: [], categories: 'arrows' as unknown as string[] }];
    expect(validateIconCategories(icons, defined, false)[0]).toContain('not an array');
  });

  it('rejects a tag left over from an unparsed category list', () => {
    const icons = [{ name: 'a', tags: ['next', 'forward', '[arrows', 'interface]'] }];
    expect(validateIconCategories(icons, defined, false)[0]).toContain('unparsed category list');
  });
});

describe('parseCategories', () => {
  it('normalizes ids and keeps their order', () => {
    expect(parseCategories([' Interface ', 'arrows', ''])).toEqual(['interface', 'arrows']);
    expect(parseCategories(undefined)).toEqual([]);
  });
});
