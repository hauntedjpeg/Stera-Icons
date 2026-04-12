'use client';

import { iconMap, type DynamicVariantProps } from '@/data/icon-components';

interface IconRendererProps extends Omit<DynamicVariantProps, 'weight'> {
  iconName: string;
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

export function IconRenderer({
  iconName,
  weight = 'regular',
  duotone = false,
  ...props
}: IconRendererProps) {
  const IconComponent = iconMap[iconName];

  if (!IconComponent) {
    return null;
  }

  return <IconComponent weight={weight} duotone={duotone} {...props} />;
}
