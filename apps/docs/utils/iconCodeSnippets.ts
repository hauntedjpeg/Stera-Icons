import type { IconData } from '@/lib/types';

export type IconWeight = 'regular' | 'bold' | 'fill';

export interface IconNames {
  baseName: string;
  fileName: string;
  prettyName: string;
  displayVariantName: string;
  prefixedName: string;
  suffixedName: string;
}

export interface CodeSnippets {
  recommendedCode: string;
  aliasesCode: string;
  dynamicVariantsCode: string;
  subpathImportCode: string;
}

export function getIconNames(
  icon: IconData,
  weight: IconWeight,
  duotone: boolean
): IconNames {
  const variantKey = duotone ? `${weight}-duotone` : weight;
  const variantInfo = icon.variants[variantKey];

  const baseName = icon.componentName || icon.name;
  const fileName = variantInfo?.fileName || variantInfo?.componentName || icon.name;
  const prettyName = baseName;

  let displayVariantName: string;
  if (weight === 'regular') {
    displayVariantName = duotone ? `${baseName}Duotone` : baseName;
  } else {
    displayVariantName = variantInfo?.componentName || icon.name;
  }

  const prefixedName = `Si${displayVariantName}`;
  const suffixedName = `${displayVariantName}Icon`;

  return {
    baseName,
    fileName,
    prettyName,
    displayVariantName,
    prefixedName,
    suffixedName,
  };
}

export function generateCodeSnippets(
  names: IconNames,
  weight: IconWeight,
  duotone: boolean,
  iconSize: number
): CodeSnippets {
  const { baseName, fileName, displayVariantName, prefixedName, suffixedName } = names;

  const recommendedCode = `import { ${prefixedName} } from 'stera-icons';

<${prefixedName} size={${iconSize}} />`;

  const aliasesCode = `// Base
<${displayVariantName} />

// Prefix (Recommended)
<${prefixedName} />

// Suffix
<${suffixedName} />`;

  const dynamicWeightProp = weight !== 'regular' ? ` weight="${weight}"` : '';
  const dynamicDuotoneProp = duotone ? ' duotone' : '';
  const dynamicVariantsCode = `import { Si${baseName} } from 'stera-icons/dynamic-variants';

<Si${baseName}${dynamicWeightProp}${dynamicDuotoneProp} size={${iconSize}} />`;

  const subpathImportCode = `import { ${prefixedName} } from 'stera-icons/icons/${fileName}';

<${prefixedName} size={${iconSize}} />`;

  return {
    recommendedCode,
    aliasesCode,
    dynamicVariantsCode,
    subpathImportCode,
  };
}
