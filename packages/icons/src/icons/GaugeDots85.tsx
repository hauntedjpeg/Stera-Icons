import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { GaugeDots85Regular } from './GaugeDots85Regular.js';
import { GaugeDots85RegularDuotone } from './GaugeDots85RegularDuotone.js';
import { GaugeDots85Bold } from './GaugeDots85Bold.js';
import { GaugeDots85BoldDuotone } from './GaugeDots85BoldDuotone.js';
import { GaugeDots85Fill } from './GaugeDots85Fill.js';
import { GaugeDots85FillDuotone } from './GaugeDots85FillDuotone.js';

export interface GaugeDots85Props extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * GaugeDots85 - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { GaugeDots85Regular } from 'stera-icons/icons/GaugeDots85Regular';
 */
const GaugeDots85 = memo(forwardRef<SVGSVGElement, GaugeDots85Props>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <GaugeDots85BoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <GaugeDots85Bold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <GaugeDots85FillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <GaugeDots85Fill ref={ref} {...rest} />;
  if (duotone) return <GaugeDots85RegularDuotone ref={ref} {...rest} />;
  return <GaugeDots85Regular ref={ref} {...rest} />;
}));

GaugeDots85.displayName = 'GaugeDots85';

// Triple export pattern (lucide-react style)
export { GaugeDots85, GaugeDots85 as GaugeDots85Icon, GaugeDots85 as SiGaugeDots85 };
export default GaugeDots85;
