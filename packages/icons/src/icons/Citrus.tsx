import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { CitrusRegular } from './CitrusRegular.js';
import { CitrusRegularDuotone } from './CitrusRegularDuotone.js';
import { CitrusBold } from './CitrusBold.js';
import { CitrusBoldDuotone } from './CitrusBoldDuotone.js';
import { CitrusFill } from './CitrusFill.js';
import { CitrusFillDuotone } from './CitrusFillDuotone.js';

export interface CitrusProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Citrus - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { CitrusRegular } from 'stera-icons/icons/CitrusRegular';
 */
const Citrus = memo(forwardRef<SVGSVGElement, CitrusProps>(({
  weight = 'regular',
  duotone = false,
  ...rest
}, ref) => {
  if (weight === 'bold' && duotone) return <CitrusBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CitrusBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CitrusFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CitrusFill ref={ref} {...rest} />;
  if (duotone) return <CitrusRegularDuotone ref={ref} {...rest} />;
  return <CitrusRegular ref={ref} {...rest} />;
}));

Citrus.displayName = 'Citrus';

// Triple export pattern
export { Citrus, Citrus as CitrusIcon, Citrus as SiCitrus };
export default Citrus;
