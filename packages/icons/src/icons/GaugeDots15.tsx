import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { GaugeDots15Regular } from './GaugeDots15Regular.js';
import { GaugeDots15RegularDuotone } from './GaugeDots15RegularDuotone.js';
import { GaugeDots15Bold } from './GaugeDots15Bold.js';
import { GaugeDots15BoldDuotone } from './GaugeDots15BoldDuotone.js';
import { GaugeDots15Fill } from './GaugeDots15Fill.js';
import { GaugeDots15FillDuotone } from './GaugeDots15FillDuotone.js';

export interface GaugeDots15Props extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * GaugeDots15 - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { GaugeDots15Regular } from 'stera-icons/icons/GaugeDots15Regular';
 */
const GaugeDots15 = memo(forwardRef<SVGSVGElement, GaugeDots15Props>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <GaugeDots15BoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <GaugeDots15Bold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <GaugeDots15FillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <GaugeDots15Fill ref={ref} {...rest} />;
  if (duotone) return <GaugeDots15RegularDuotone ref={ref} {...rest} />;
  return <GaugeDots15Regular ref={ref} {...rest} />;
}));

GaugeDots15.displayName = 'GaugeDots15';

// Triple export pattern (lucide-react style)
export { GaugeDots15, GaugeDots15 as GaugeDots15Icon, GaugeDots15 as SiGaugeDots15 };
export default GaugeDots15;
