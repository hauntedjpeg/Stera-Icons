"use client";

import { forwardRef, useState, useEffect, ComponentType, ReactNode, Ref } from 'react';
import type { IconProps } from './types';

/**
 * Props for the DynamicIcon component.
 * 
 * @property name - The name of the icon to load (e.g., 'search', 'home', 'user')
 * @property fallback - Optional fallback component to show while loading
 * @property weight - Icon weight variant (default: 'regular')
 * @property duotone - Enable duotone variant (default: false)
 * @property onError - Optional callback function called when icon fails to load
 */
export interface DynamicIconProps extends Omit<IconProps, 'weight' | 'duotone' | 'onError'> {
  name: string;
  fallback?: ComponentType | ReactNode;
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
  /** Callback function called when icon fails to load */
  onError?: (error: Error) => void;
}

/**
 * Type of a lazily loaded icon component.
 * Narrows `ref` to a plain `Ref`, which is what forwardRef components accept.
 */
export type DynamicIconComponent = ComponentType<Omit<IconProps, 'ref'> & { ref?: Ref<SVGSVGElement> }>;

/**
 * Type for the dynamic icon imports map.
 * Maps kebab-case icon names to dynamic import functions.
 */
export type DynamicIconImports = Record<string, () => Promise<{ default: DynamicIconComponent }>>;

/**
 * Type for the deprecated icon names map.
 * Maps the old kebab-case name of a renamed icon to its new name.
 */
export type DynamicIconAliases = Record<string, { to: string; removeIn: string }>;

const warnedAliases = new Set<string>();

function isDevelopment(): boolean {
  try {
    return process.env.NODE_ENV !== 'production';
  } catch {
    // No process global (e.g. unbundled in a browser)
    return false;
  }
}

/**
 * Resolves a deprecated icon name to its new name.
 * Warns once per name outside production.
 */
function resolveAlias(name: string, aliases: DynamicIconAliases): string {
  if (!Object.prototype.hasOwnProperty.call(aliases, name)) {
    return name;
  }
  
  const { to, removeIn } = aliases[name];
  if (isDevelopment() && !warnedAliases.has(name)) {
    warnedAliases.add(name);
    // eslint-disable-next-line no-console
    console.warn(
      `[stera-icons]: Icon "${name}" was renamed to "${to}". ` +
      `The old name will stop working in ${removeIn}.`
    );
  }
  return to;
}

/**
 * Gets an icon component by name using dynamic imports.
 * 
 * @param name - Icon name in kebab-case
 * @param weight - Icon weight variant
 * @param duotone - Whether to use duotone variant
 * @param dynamicIconImports - Map of icon names to import functions
 * @param aliases - Map of deprecated icon names to their new names
 * @returns Promise resolving to the icon component
 * @throws Error if icon name is not found
 */
export async function getIconComponent(
  name: string,
  weight: 'regular' | 'bold' | 'fill' = 'regular',
  duotone: boolean = false,
  dynamicIconImports: DynamicIconImports,
  aliases: DynamicIconAliases = {}
): Promise<DynamicIconComponent> {
  const requestedName = name;
  name = resolveAlias(name, aliases);
  
  // Build the variant suffix: regular weight uses no suffix, others use -weight
  const weightSuffix = weight === 'regular' ? '' : `-${weight}`;
  const duotoneSuffix = duotone ? '-duotone' : '';
  const iconKey = `${name}${weightSuffix}${duotoneSuffix}`;
  
  // Try exact match first
  if (iconKey in dynamicIconImports) {
    const module = await dynamicIconImports[iconKey]();
    return module.default;
  }
  
  // Fallback: try base name (wrapper component)
  if (name in dynamicIconImports) {
    const module = await dynamicIconImports[name]();
    return module.default;
  }
  
  throw new Error(
    `[stera-icons]: Icon "${requestedName}" with weight "${weight}"${duotone ? ' (duotone)' : ''} not found. ` +
    `Available icons can be found at https://github.com/hauntedjpeg/Stera-Icons`
  );
}

/**
 * DynamicIcon - Lazy-loads icon components at runtime.
 * 
 * Ideal for rendering a small number of icons whose names are determined at runtime
 * (e.g., from a database, CMS, or user input).
 * 
 * **When to use:** Icon names come from external data sources and aren't known at build time.
 * 
 * **When NOT to use:** For displaying many icons at once (like an icon gallery), use direct
 * imports instead - each DynamicIcon triggers an individual network request.
 * 
 * @example
 * // ✅ Best: Direct import when icon is known at build time
 * import { SearchBold } from 'stera-icons';
 * <SearchBold size={24} />
 * 
 * @example
 * // ✅ Good: Dynamic when icon name comes from external data
 * import { DynamicIcon } from 'stera-icons/dynamic';
 * <DynamicIcon name={iconNameFromCMS} weight="bold" />
 * 
 * @example
 * // With fallback while loading
 * <DynamicIcon 
 *   name={iconName} 
 *   fallback={<Loader />}
 *   size={24}
 *   color="blue"
 * />
 */
export const createDynamicIcon = (dynamicIconImports: DynamicIconImports, aliases: DynamicIconAliases = {}) => {
  const DynamicIcon = forwardRef<SVGSVGElement, DynamicIconProps>(
    ({ name, fallback: Fallback, weight = 'regular', duotone = false, onError, ...props }, ref) => {
      const [IconComponent, setIconComponent] = useState<DynamicIconComponent | null>(null);
      const [error, setError] = useState<Error | null>(null);

      useEffect(() => {
        let cancelled = false;
        // Reset state when icon name, weight, or duotone changes
        setIconComponent(null);
        setError(null);

        getIconComponent(name, weight, duotone, dynamicIconImports, aliases)
          .then(component => {
            if (!cancelled) setIconComponent(component);
          })
          .catch((err: Error) => {
            if (!cancelled) {
              setError(err);
              onError?.(err);
            }
          });

        return () => { cancelled = true; };
      }, [name, weight, duotone]);

      // Show fallback while loading
      if (IconComponent == null) {
        if (error) {
          // If there's an error and a fallback, show fallback
          if (Fallback != null) {
            return typeof Fallback === 'function' ? <Fallback /> : (Fallback as ReactNode);
          }
          // No fallback, return null
          return null;
        }
        
        // Loading state
        if (Fallback != null) {
          return typeof Fallback === 'function' ? <Fallback /> : (Fallback as ReactNode);
        }
        return null;
      }

      // Render the loaded icon with props
      // Note: weight and duotone are already handled in the icon selection logic
      return <IconComponent ref={ref} {...props} />;
    }
  );

  DynamicIcon.displayName = 'DynamicIcon';
  
  return DynamicIcon;
};

/**
 * Helper to get list of all available icon names from the imports map.
 * 
 * @param dynamicIconImports - The icon imports map
 * @returns Array of icon names
 */
export const getIconNames = (dynamicIconImports: DynamicIconImports): string[] => {
  return Object.keys(dynamicIconImports);
};
