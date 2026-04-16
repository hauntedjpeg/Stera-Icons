import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { PolarisRegular } from './PolarisRegular.js';
import { PolarisRegularDuotone } from './PolarisRegularDuotone.js';
import { PolarisBold } from './PolarisBold.js';
import { PolarisBoldDuotone } from './PolarisBoldDuotone.js';
import { PolarisFill } from './PolarisFill.js';
import { PolarisFillDuotone } from './PolarisFillDuotone.js';

export interface PolarisProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Polaris - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { PolarisRegular } from 'stera-icons/icons/PolarisRegular';
 */
const Polaris = memo(forwardRef<SVGSVGElement, PolarisProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <PolarisBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <PolarisBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <PolarisFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <PolarisFill ref={ref} {...rest} />;
  if (duotone) return <PolarisRegularDuotone ref={ref} {...rest} />;
  return <PolarisRegular ref={ref} {...rest} />;
}));

Polaris.displayName = 'Polaris';

// Triple export pattern (lucide-react style)
export { Polaris, Polaris as PolarisIcon, Polaris as SiPolaris };
export default Polaris;
