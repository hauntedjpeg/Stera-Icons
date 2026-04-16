import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { Gauge85Regular } from './Gauge85Regular.js';
import { Gauge85RegularDuotone } from './Gauge85RegularDuotone.js';
import { Gauge85Bold } from './Gauge85Bold.js';
import { Gauge85BoldDuotone } from './Gauge85BoldDuotone.js';
import { Gauge85Fill } from './Gauge85Fill.js';
import { Gauge85FillDuotone } from './Gauge85FillDuotone.js';

export interface Gauge85Props extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Gauge85 - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { Gauge85Regular } from 'stera-icons/icons/Gauge85Regular';
 */
const Gauge85 = memo(forwardRef<SVGSVGElement, Gauge85Props>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <Gauge85BoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <Gauge85Bold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <Gauge85FillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <Gauge85Fill ref={ref} {...rest} />;
  if (duotone) return <Gauge85RegularDuotone ref={ref} {...rest} />;
  return <Gauge85Regular ref={ref} {...rest} />;
}));

Gauge85.displayName = 'Gauge85';

// Triple export pattern (lucide-react style)
export { Gauge85, Gauge85 as Gauge85Icon, Gauge85 as SiGauge85 };
export default Gauge85;
