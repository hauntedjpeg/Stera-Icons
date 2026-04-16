import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { Gauge66Regular } from './Gauge66Regular.js';
import { Gauge66RegularDuotone } from './Gauge66RegularDuotone.js';
import { Gauge66Bold } from './Gauge66Bold.js';
import { Gauge66BoldDuotone } from './Gauge66BoldDuotone.js';
import { Gauge66Fill } from './Gauge66Fill.js';
import { Gauge66FillDuotone } from './Gauge66FillDuotone.js';

export interface Gauge66Props extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Gauge66 - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { Gauge66Regular } from 'stera-icons/icons/Gauge66Regular';
 */
const Gauge66 = memo(forwardRef<SVGSVGElement, Gauge66Props>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <Gauge66BoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <Gauge66Bold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <Gauge66FillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <Gauge66Fill ref={ref} {...rest} />;
  if (duotone) return <Gauge66RegularDuotone ref={ref} {...rest} />;
  return <Gauge66Regular ref={ref} {...rest} />;
}));

Gauge66.displayName = 'Gauge66';

// Triple export pattern (lucide-react style)
export { Gauge66, Gauge66 as Gauge66Icon, Gauge66 as SiGauge66 };
export default Gauge66;
