import type { IconData } from '@/lib/types';

export type IconWeight = 'regular' | 'bold' | 'fill';

export interface IconNames {
  prettyName: string;
  prefixedName: string;
}

export function getIconNames(
  icon: IconData,
  weight: IconWeight,
  duotone: boolean
): IconNames {
  const variantKey = duotone ? `${weight}-duotone` : weight;
  const variantInfo = icon.variants[variantKey];

  const baseName = icon.componentName || icon.name;

  let displayVariantName: string;
  if (weight === 'regular') {
    displayVariantName = duotone ? `${baseName}Duotone` : baseName;
  } else {
    displayVariantName = variantInfo?.componentName || icon.name;
  }

  return {
    prettyName: baseName,
    prefixedName: `Si${displayVariantName}`,
  };
}

export function getUsageSnippet(prefixedName: string): string {
  return `import { ${prefixedName} } from 'stera-icons'

<${prefixedName} />`;
}
