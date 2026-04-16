import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { MaximizeRegular } from './MaximizeRegular.js';
import { MaximizeRegularDuotone } from './MaximizeRegularDuotone.js';
import { MaximizeBold } from './MaximizeBold.js';
import { MaximizeBoldDuotone } from './MaximizeBoldDuotone.js';
import { MaximizeFill } from './MaximizeFill.js';
import { MaximizeFillDuotone } from './MaximizeFillDuotone.js';

export interface MaximizeProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Maximize - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { MaximizeRegular } from 'stera-icons/icons/MaximizeRegular';
 */
const Maximize = memo(forwardRef<SVGSVGElement, MaximizeProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <MaximizeBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <MaximizeBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <MaximizeFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <MaximizeFill ref={ref} {...rest} />;
  if (duotone) return <MaximizeRegularDuotone ref={ref} {...rest} />;
  return <MaximizeRegular ref={ref} {...rest} />;
}));

Maximize.displayName = 'Maximize';

// Triple export pattern (lucide-react style)
export { Maximize, Maximize as MaximizeIcon, Maximize as SiMaximize };
export default Maximize;
