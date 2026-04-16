import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { Gauge100Regular } from './Gauge100Regular.js';
import { Gauge100RegularDuotone } from './Gauge100RegularDuotone.js';
import { Gauge100Bold } from './Gauge100Bold.js';
import { Gauge100BoldDuotone } from './Gauge100BoldDuotone.js';
import { Gauge100Fill } from './Gauge100Fill.js';
import { Gauge100FillDuotone } from './Gauge100FillDuotone.js';

export interface Gauge100Props extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Gauge100 - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { Gauge100Regular } from 'stera-icons/icons/Gauge100Regular';
 */
const Gauge100 = memo(forwardRef<SVGSVGElement, Gauge100Props>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <Gauge100BoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <Gauge100Bold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <Gauge100FillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <Gauge100Fill ref={ref} {...rest} />;
  if (duotone) return <Gauge100RegularDuotone ref={ref} {...rest} />;
  return <Gauge100Regular ref={ref} {...rest} />;
}));

Gauge100.displayName = 'Gauge100';

// Triple export pattern (lucide-react style)
export { Gauge100, Gauge100 as Gauge100Icon, Gauge100 as SiGauge100 };
export default Gauge100;
