import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { GaugeDots0Regular } from './GaugeDots0Regular.js';
import { GaugeDots0RegularDuotone } from './GaugeDots0RegularDuotone.js';
import { GaugeDots0Bold } from './GaugeDots0Bold.js';
import { GaugeDots0BoldDuotone } from './GaugeDots0BoldDuotone.js';
import { GaugeDots0Fill } from './GaugeDots0Fill.js';
import { GaugeDots0FillDuotone } from './GaugeDots0FillDuotone.js';

export interface GaugeDots0Props extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * GaugeDots0 - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { GaugeDots0Regular } from 'stera-icons/icons/GaugeDots0Regular';
 */
const GaugeDots0 = memo(forwardRef<SVGSVGElement, GaugeDots0Props>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <GaugeDots0BoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <GaugeDots0Bold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <GaugeDots0FillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <GaugeDots0Fill ref={ref} {...rest} />;
  if (duotone) return <GaugeDots0RegularDuotone ref={ref} {...rest} />;
  return <GaugeDots0Regular ref={ref} {...rest} />;
}));

GaugeDots0.displayName = 'GaugeDots0';

// Triple export pattern (lucide-react style)
export { GaugeDots0, GaugeDots0 as GaugeDots0Icon, GaugeDots0 as SiGaugeDots0 };
export default GaugeDots0;
