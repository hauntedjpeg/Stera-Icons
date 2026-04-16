import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { GaugeDots50Regular } from './GaugeDots50Regular.js';
import { GaugeDots50RegularDuotone } from './GaugeDots50RegularDuotone.js';
import { GaugeDots50Bold } from './GaugeDots50Bold.js';
import { GaugeDots50BoldDuotone } from './GaugeDots50BoldDuotone.js';
import { GaugeDots50Fill } from './GaugeDots50Fill.js';
import { GaugeDots50FillDuotone } from './GaugeDots50FillDuotone.js';

export interface GaugeDots50Props extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * GaugeDots50 - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { GaugeDots50Regular } from 'stera-icons/icons/GaugeDots50Regular';
 */
const GaugeDots50 = memo(forwardRef<SVGSVGElement, GaugeDots50Props>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <GaugeDots50BoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <GaugeDots50Bold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <GaugeDots50FillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <GaugeDots50Fill ref={ref} {...rest} />;
  if (duotone) return <GaugeDots50RegularDuotone ref={ref} {...rest} />;
  return <GaugeDots50Regular ref={ref} {...rest} />;
}));

GaugeDots50.displayName = 'GaugeDots50';

// Triple export pattern (lucide-react style)
export { GaugeDots50, GaugeDots50 as GaugeDots50Icon, GaugeDots50 as SiGaugeDots50 };
export default GaugeDots50;
