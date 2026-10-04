import { describe, it, expect, vi, afterEach } from 'vitest';
import { readFileSync } from 'fs';
import { join } from 'path';
import * as icons from '../index';
import * as wrappers from '../dynamic-variants';
import { iconNames } from '../dynamic';
import { dynamicIconImports, dynamicIconAliases } from '../dynamicIconImports';
import { getIconComponent } from '../DynamicIcon';
// @ts-expect-error - build script, plain JS without types
import { validateAliases, getDeprecatedExports, compareVersions } from '../../scripts/icon-build/aliases.js';

// Guards the deprecated aliases for renamed icons (icon-aliases.json).
// Every old export name must keep resolving to the renamed icon until the
// alias is removed.

const packageDir = join(__dirname, '../..');

type Alias = { name: string; to: string; since: string; removeIn: string };

const aliases: Alias[] = Object.entries(
  JSON.parse(readFileSync(join(packageDir, 'icon-aliases.json'), 'utf8')) as Record<string, Omit<Alias, 'name'>>
).map(([name, alias]) => ({ name, ...alias }));

const metadata: { name: string }[] = JSON.parse(
  readFileSync(join(packageDir, 'dist/icons.meta.json'), 'utf8')
);
const realIconNames = new Set(metadata.map(entry => entry.name));

describe('Deprecated icon aliases', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('every alias points from a removed name to an existing icon', () => {
    for (const alias of aliases) {
      expect(realIconNames.has(alias.name), `${alias.name} is still an icon`).toBe(false);
      expect(realIconNames.has(alias.to), `${alias.to} is not an icon`).toBe(true);
    }
  });

  it('every deprecated export resolves to the renamed icon', () => {
    const exported = icons as Record<string, unknown>;
    const deprecated: Map<string, { replacement: string }> = getDeprecatedExports(aliases);

    expect(deprecated.size).toBe(aliases.length * 24);
    for (const [name, { replacement }] of deprecated) {
      expect(exported[name], `${name} is not exported`).toBeDefined();
      expect(exported[name], `${name} is not ${replacement}`).toBe(exported[replacement]);
    }
  });

  it('wrapper components are aliased in dynamic-variants', () => {
    const exported = wrappers as Record<string, unknown>;
    const pascal = (name: string) => name.split('-').map(s => s[0].toUpperCase() + s.slice(1)).join('');

    for (const alias of aliases) {
      const from = pascal(alias.name);
      const to = pascal(alias.to);
      expect(exported[from]).toBe(exported[to]);
      expect(exported[`${from}Icon`]).toBe(exported[to]);
      expect(exported[`Si${from}`]).toBe(exported[to]);
    }
  });

  it('aliases are not listed as icon names', () => {
    for (const alias of aliases) {
      expect(iconNames).not.toContain(alias.name);
    }
  });

  it('DynamicIcon resolves a deprecated name and warns once', async () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => undefined);

    for (const alias of aliases) {
      const viaAlias = await getIconComponent(alias.name, 'bold', true, dynamicIconImports, dynamicIconAliases);
      const direct = await getIconComponent(alias.to, 'bold', true, dynamicIconImports, dynamicIconAliases);
      expect(viaAlias).toBe(direct);

      await getIconComponent(alias.name, 'regular', false, dynamicIconImports, dynamicIconAliases);
    }

    expect(warn).toHaveBeenCalledTimes(aliases.length);
    if (aliases.length > 0) {
      expect(warn.mock.calls[0][0]).toContain(`renamed to "${aliases[0].to}"`);
    }
  });

  describe('validateAliases', () => {
    const names = new Set(['laptop', 'monitor']);
    const alias = { name: 'device-laptop', to: 'laptop', since: '8.8.0', removeIn: '9.0.0' };

    it('accepts an alias before its removal version', () => {
      expect(validateAliases([alias], names, '8.8.0')).toEqual([]);
      expect(validateAliases([alias], names, '8.99.3')).toEqual([]);
    });

    it('fails once the build reaches the removal version', () => {
      expect(validateAliases([alias], names, '9.0.0')[0]).toContain('expired');
      expect(validateAliases([alias], names, '10.1.0')[0]).toContain('expired');
    });

    it('rejects an alias whose target is missing or whose name is taken', () => {
      expect(validateAliases([{ ...alias, to: 'notebook' }], names, '8.8.0')[0]).toContain('not an icon');
      expect(validateAliases([{ ...alias, name: 'monitor' }], names, '8.8.0')[0]).toContain('existing icon');
    });

    it('rejects missing or malformed versions', () => {
      expect(validateAliases([{ ...alias, removeIn: '9' }], names, '8.8.0')).toHaveLength(1);
      expect(validateAliases([{ ...alias, removeIn: '8.8.0' }], names, '8.7.0')[0]).toContain('not after');
    });

    it('compares versions numerically', () => {
      expect(compareVersions('8.10.0', '8.9.0')).toBeGreaterThan(0);
      expect(compareVersions('9.0.0', '9.0.0')).toBe(0);
    });
  });
});
