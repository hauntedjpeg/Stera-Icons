import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { BadgeRegular } from './BadgeRegular.js';
import { BadgeRegularDuotone } from './BadgeRegularDuotone.js';
import { BadgeBold } from './BadgeBold.js';
import { BadgeBoldDuotone } from './BadgeBoldDuotone.js';
import { BadgeFill } from './BadgeFill.js';
import { BadgeFillDuotone } from './BadgeFillDuotone.js';

export interface BadgeProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Badge - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { BadgeRegular } from 'stera-icons/icons/BadgeRegular';
 */
const Badge = memo(forwardRef<SVGSVGElement, BadgeProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <BadgeBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <BadgeBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <BadgeFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <BadgeFill ref={ref} {...rest} />;
  if (duotone) return <BadgeRegularDuotone ref={ref} {...rest} />;
  return <BadgeRegular ref={ref} {...rest} />;
}));

Badge.displayName = 'Badge';

// Triple export pattern (lucide-react style)
export { Badge, Badge as BadgeIcon, Badge as SiBadge };
export default Badge;
