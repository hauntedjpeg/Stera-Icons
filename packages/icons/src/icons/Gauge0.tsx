import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { Gauge0Regular } from './Gauge0Regular.js';
import { Gauge0RegularDuotone } from './Gauge0RegularDuotone.js';
import { Gauge0Bold } from './Gauge0Bold.js';
import { Gauge0BoldDuotone } from './Gauge0BoldDuotone.js';
import { Gauge0Fill } from './Gauge0Fill.js';
import { Gauge0FillDuotone } from './Gauge0FillDuotone.js';

export interface Gauge0Props extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Gauge0 - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { Gauge0Regular } from 'stera-icons/icons/Gauge0Regular';
 */
const Gauge0 = memo(forwardRef<SVGSVGElement, Gauge0Props>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <Gauge0BoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <Gauge0Bold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <Gauge0FillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <Gauge0Fill ref={ref} {...rest} />;
  if (duotone) return <Gauge0RegularDuotone ref={ref} {...rest} />;
  return <Gauge0Regular ref={ref} {...rest} />;
}));

Gauge0.displayName = 'Gauge0';

// Triple export pattern (lucide-react style)
export { Gauge0, Gauge0 as Gauge0Icon, Gauge0 as SiGauge0 };
export default Gauge0;
