import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { GaugeDots66Regular } from './GaugeDots66Regular.js';
import { GaugeDots66RegularDuotone } from './GaugeDots66RegularDuotone.js';
import { GaugeDots66Bold } from './GaugeDots66Bold.js';
import { GaugeDots66BoldDuotone } from './GaugeDots66BoldDuotone.js';
import { GaugeDots66Fill } from './GaugeDots66Fill.js';
import { GaugeDots66FillDuotone } from './GaugeDots66FillDuotone.js';

export interface GaugeDots66Props extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * GaugeDots66 - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { GaugeDots66Regular } from 'stera-icons/icons/GaugeDots66Regular';
 */
const GaugeDots66 = memo(forwardRef<SVGSVGElement, GaugeDots66Props>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <GaugeDots66BoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <GaugeDots66Bold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <GaugeDots66FillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <GaugeDots66Fill ref={ref} {...rest} />;
  if (duotone) return <GaugeDots66RegularDuotone ref={ref} {...rest} />;
  return <GaugeDots66Regular ref={ref} {...rest} />;
}));

GaugeDots66.displayName = 'GaugeDots66';

// Triple export pattern (lucide-react style)
export { GaugeDots66, GaugeDots66 as GaugeDots66Icon, GaugeDots66 as SiGaugeDots66 };
export default GaugeDots66;
