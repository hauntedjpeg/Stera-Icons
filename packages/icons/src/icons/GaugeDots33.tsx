import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { GaugeDots33Regular } from './GaugeDots33Regular.js';
import { GaugeDots33RegularDuotone } from './GaugeDots33RegularDuotone.js';
import { GaugeDots33Bold } from './GaugeDots33Bold.js';
import { GaugeDots33BoldDuotone } from './GaugeDots33BoldDuotone.js';
import { GaugeDots33Fill } from './GaugeDots33Fill.js';
import { GaugeDots33FillDuotone } from './GaugeDots33FillDuotone.js';

export interface GaugeDots33Props extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * GaugeDots33 - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { GaugeDots33Regular } from 'stera-icons/icons/GaugeDots33Regular';
 */
const GaugeDots33 = memo(forwardRef<SVGSVGElement, GaugeDots33Props>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <GaugeDots33BoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <GaugeDots33Bold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <GaugeDots33FillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <GaugeDots33Fill ref={ref} {...rest} />;
  if (duotone) return <GaugeDots33RegularDuotone ref={ref} {...rest} />;
  return <GaugeDots33Regular ref={ref} {...rest} />;
}));

GaugeDots33.displayName = 'GaugeDots33';

// Triple export pattern (lucide-react style)
export { GaugeDots33, GaugeDots33 as GaugeDots33Icon, GaugeDots33 as SiGaugeDots33 };
export default GaugeDots33;
