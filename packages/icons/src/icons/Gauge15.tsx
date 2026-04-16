import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { Gauge15Regular } from './Gauge15Regular.js';
import { Gauge15RegularDuotone } from './Gauge15RegularDuotone.js';
import { Gauge15Bold } from './Gauge15Bold.js';
import { Gauge15BoldDuotone } from './Gauge15BoldDuotone.js';
import { Gauge15Fill } from './Gauge15Fill.js';
import { Gauge15FillDuotone } from './Gauge15FillDuotone.js';

export interface Gauge15Props extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Gauge15 - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { Gauge15Regular } from 'stera-icons/icons/Gauge15Regular';
 */
const Gauge15 = memo(forwardRef<SVGSVGElement, Gauge15Props>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <Gauge15BoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <Gauge15Bold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <Gauge15FillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <Gauge15Fill ref={ref} {...rest} />;
  if (duotone) return <Gauge15RegularDuotone ref={ref} {...rest} />;
  return <Gauge15Regular ref={ref} {...rest} />;
}));

Gauge15.displayName = 'Gauge15';

// Triple export pattern (lucide-react style)
export { Gauge15, Gauge15 as Gauge15Icon, Gauge15 as SiGauge15 };
export default Gauge15;
