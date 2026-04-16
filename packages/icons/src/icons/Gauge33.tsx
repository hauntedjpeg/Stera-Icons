import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { Gauge33Regular } from './Gauge33Regular.js';
import { Gauge33RegularDuotone } from './Gauge33RegularDuotone.js';
import { Gauge33Bold } from './Gauge33Bold.js';
import { Gauge33BoldDuotone } from './Gauge33BoldDuotone.js';
import { Gauge33Fill } from './Gauge33Fill.js';
import { Gauge33FillDuotone } from './Gauge33FillDuotone.js';

export interface Gauge33Props extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Gauge33 - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { Gauge33Regular } from 'stera-icons/icons/Gauge33Regular';
 */
const Gauge33 = memo(forwardRef<SVGSVGElement, Gauge33Props>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <Gauge33BoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <Gauge33Bold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <Gauge33FillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <Gauge33Fill ref={ref} {...rest} />;
  if (duotone) return <Gauge33RegularDuotone ref={ref} {...rest} />;
  return <Gauge33Regular ref={ref} {...rest} />;
}));

Gauge33.displayName = 'Gauge33';

// Triple export pattern (lucide-react style)
export { Gauge33, Gauge33 as Gauge33Icon, Gauge33 as SiGauge33 };
export default Gauge33;
