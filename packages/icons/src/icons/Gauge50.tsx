import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { Gauge50Regular } from './Gauge50Regular.js';
import { Gauge50RegularDuotone } from './Gauge50RegularDuotone.js';
import { Gauge50Bold } from './Gauge50Bold.js';
import { Gauge50BoldDuotone } from './Gauge50BoldDuotone.js';
import { Gauge50Fill } from './Gauge50Fill.js';
import { Gauge50FillDuotone } from './Gauge50FillDuotone.js';

export interface Gauge50Props extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Gauge50 - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { Gauge50Regular } from 'stera-icons/icons/Gauge50Regular';
 */
const Gauge50 = memo(forwardRef<SVGSVGElement, Gauge50Props>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <Gauge50BoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <Gauge50Bold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <Gauge50FillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <Gauge50Fill ref={ref} {...rest} />;
  if (duotone) return <Gauge50RegularDuotone ref={ref} {...rest} />;
  return <Gauge50Regular ref={ref} {...rest} />;
}));

Gauge50.displayName = 'Gauge50';

// Triple export pattern (lucide-react style)
export { Gauge50, Gauge50 as Gauge50Icon, Gauge50 as SiGauge50 };
export default Gauge50;
