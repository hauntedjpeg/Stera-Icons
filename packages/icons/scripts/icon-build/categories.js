/**
 * Icon Categories
 *
 * categories.json defines the closed list of categories an icon can belong to:
 *
 *   { "id": "arrows", "title": "Arrows", "description": "...", "icon": "arrow-right" }
 *
 * Each icon in icons-export.json lists one to three category ids, the first
 * being its primary category. The build fails on an id that is not defined here.
 */

import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

export const CATEGORIES_FILE = 'categories.json';
export const MAX_CATEGORIES_PER_ICON = 3;

// Every icon must have at least one category
export const REQUIRE_CATEGORIES = true;

const SLUG = /^[a-z0-9]+(-[a-z0-9]+)*$/;

/**
 * Load categories.json
 * @param {string} packageDir - Path to packages/icons
 * @returns {Array<{id: string, title: string, description: string, icon: string}>} - Categories in display order
 */
export function loadCategories(packageDir) {
  const categoriesPath = join(packageDir, CATEGORIES_FILE);
  if (!existsSync(categoriesPath)) return [];

  return JSON.parse(readFileSync(categoriesPath, 'utf8'));
}

/**
 * Normalize an icon's categories
 * @param {string[]} [categories] - Category ids from the export
 * @returns {string[]} - Trimmed, lowercase ids in their original order
 */
export function parseCategories(categories) {
  if (!Array.isArray(categories)) return [];
  return categories.map(category => String(category).trim().toLowerCase()).filter(category => category.length > 0);
}

/**
 * Check the category definitions
 * @param {Array<Object>} categories - Categories from loadCategories
 * @param {Set<string>} iconNames - Kebab-case names of the icons in the export
 * @returns {string[]} - Error messages, empty if the definitions are valid
 */
export function validateCategories(categories, iconNames) {
  const errors = [];
  const seen = new Set();

  if (!Array.isArray(categories)) {
    return [`${CATEGORIES_FILE} must be an array of categories`];
  }

  for (const category of categories) {
    const { id, title, description, icon } = category ?? {};

    if (typeof id !== 'string' || !SLUG.test(id)) {
      errors.push(`"${id}" is not a kebab-case category id`);
      continue;
    }
    if (seen.has(id)) {
      errors.push(`"${id}" is defined more than once`);
    }
    seen.add(id);

    if (typeof title !== 'string' || !title.trim() || typeof description !== 'string' || !description.trim()) {
      errors.push(`"${id}" needs a "title" and a "description"`);
    }
    if (!iconNames.has(icon)) {
      errors.push(`"${id}" uses "${icon}" as its icon, which is not an icon`);
    }
  }

  return errors;
}

/**
 * Check the categories and tags of every icon in the export
 * @param {Array<{name: string, tags?: string[], categories?: string[]}>} icons - Icons from icons-export.json
 * @param {Array<Object>} categories - Categories from loadCategories
 * @param {boolean} [required] - Whether an icon without categories is an error
 * @returns {string[]} - Error messages, empty if every icon is valid
 */
export function validateIconCategories(icons, categories, required = REQUIRE_CATEGORIES) {
  const errors = [];
  const ids = new Set(categories.map(category => category.id));

  for (const icon of icons) {
    // A bracket in a tag means the "tag, tag, [a, b]" description was exported
    // without its categories being split off
    const brokenTag = (icon.tags ?? []).find(tag => /[[\]]/.test(tag));
    if (brokenTag !== undefined) {
      errors.push(`"${icon.name}" has the tag "${brokenTag}", which looks like an unparsed category list`);
    }

    if (icon.categories !== undefined && !Array.isArray(icon.categories)) {
      errors.push(`"${icon.name}" has categories that are not an array`);
      continue;
    }

    const iconCategories = parseCategories(icon.categories);
    if (iconCategories.length === 0) {
      if (required) errors.push(`"${icon.name}" has no categories`);
      continue;
    }
    if (iconCategories.length > MAX_CATEGORIES_PER_ICON) {
      errors.push(`"${icon.name}" has ${iconCategories.length} categories, the limit is ${MAX_CATEGORIES_PER_ICON}`);
    }
    if (new Set(iconCategories).size !== iconCategories.length) {
      errors.push(`"${icon.name}" lists the same category twice`);
    }
    for (const category of iconCategories) {
      if (!ids.has(category)) {
        errors.push(`"${icon.name}" is in "${category}", which is not defined in ${CATEGORIES_FILE}`);
      }
    }
  }

  return errors;
}
