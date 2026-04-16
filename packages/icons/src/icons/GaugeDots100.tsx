import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { GaugeDots100Regular } from './GaugeDots100Regular.js';
import { GaugeDots100RegularDuotone } from './GaugeDots100RegularDuotone.js';
import { GaugeDots100Bold } from './GaugeDots100Bold.js';
import { GaugeDots100BoldDuotone } from './GaugeDots100BoldDuotone.js';
import { GaugeDots100Fill } from './GaugeDots100Fill.js';
import { GaugeDots100FillDuotone } from './GaugeDots100FillDuotone.js';

export interface GaugeDots100Props extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * GaugeDots100 - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { GaugeDots100Regular } from 'stera-icons/icons/GaugeDots100Regular';
 */
const GaugeDots100 = memo(forwardRef<SVGSVGElement, GaugeDots100Props>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <GaugeDots100BoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <GaugeDots100Bold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <GaugeDots100FillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <GaugeDots100Fill ref={ref} {...rest} />;
  if (duotone) return <GaugeDots100RegularDuotone ref={ref} {...rest} />;
  return <GaugeDots100Regular ref={ref} {...rest} />;
}));

GaugeDots100.displayName = 'GaugeDots100';

// Triple export pattern (lucide-react style)
export { GaugeDots100, GaugeDots100 as GaugeDots100Icon, GaugeDots100 as SiGaugeDots100 };
export default GaugeDots100;
