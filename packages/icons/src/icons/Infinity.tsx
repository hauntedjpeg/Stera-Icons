import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { InfinityRegular } from './InfinityRegular.js';
import { InfinityRegularDuotone } from './InfinityRegularDuotone.js';
import { InfinityBold } from './InfinityBold.js';
import { InfinityBoldDuotone } from './InfinityBoldDuotone.js';
import { InfinityFill } from './InfinityFill.js';
import { InfinityFillDuotone } from './InfinityFillDuotone.js';

export interface InfinityProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Infinity - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { InfinityRegular } from 'stera-icons/icons/InfinityRegular';
 */
// eslint-disable-next-line no-shadow-restricted-names
const Infinity = memo(forwardRef<SVGSVGElement, InfinityProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <InfinityBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <InfinityBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <InfinityFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <InfinityFill ref={ref} {...rest} />;
  if (duotone) return <InfinityRegularDuotone ref={ref} {...rest} />;
  return <InfinityRegular ref={ref} {...rest} />;
}));

Infinity.displayName = 'Infinity';

// Triple export pattern (lucide-react style)
export { Infinity, Infinity as InfinityIcon, Infinity as SiInfinity };
export default Infinity;
