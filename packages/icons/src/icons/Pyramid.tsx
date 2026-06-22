import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { PyramidRegular } from './PyramidRegular.js';
import { PyramidRegularDuotone } from './PyramidRegularDuotone.js';
import { PyramidBold } from './PyramidBold.js';
import { PyramidBoldDuotone } from './PyramidBoldDuotone.js';
import { PyramidFill } from './PyramidFill.js';
import { PyramidFillDuotone } from './PyramidFillDuotone.js';

export interface PyramidProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Pyramid - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { PyramidRegular } from 'stera-icons/icons/PyramidRegular';
 */
const Pyramid = memo(forwardRef<SVGSVGElement, PyramidProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <PyramidBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <PyramidBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <PyramidFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <PyramidFill ref={ref} {...rest} />;
  if (duotone) return <PyramidRegularDuotone ref={ref} {...rest} />;
  return <PyramidRegular ref={ref} {...rest} />;
}));

Pyramid.displayName = 'Pyramid';

// Triple export pattern (lucide-react style)
export { Pyramid, Pyramid as PyramidIcon, Pyramid as SiPyramid };
export default Pyramid;
