import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { DropletHalfRegular } from './DropletHalfRegular.js';
import { DropletHalfRegularDuotone } from './DropletHalfRegularDuotone.js';
import { DropletHalfBold } from './DropletHalfBold.js';
import { DropletHalfBoldDuotone } from './DropletHalfBoldDuotone.js';
import { DropletHalfFill } from './DropletHalfFill.js';
import { DropletHalfFillDuotone } from './DropletHalfFillDuotone.js';

export interface DropletHalfProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * DropletHalf - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { DropletHalfRegular } from 'stera-icons/icons/DropletHalfRegular';
 */
const DropletHalf = memo(forwardRef<SVGSVGElement, DropletHalfProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <DropletHalfBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <DropletHalfBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <DropletHalfFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <DropletHalfFill ref={ref} {...rest} />;
  if (duotone) return <DropletHalfRegularDuotone ref={ref} {...rest} />;
  return <DropletHalfRegular ref={ref} {...rest} />;
}));

DropletHalf.displayName = 'DropletHalf';

// Triple export pattern (lucide-react style)
export { DropletHalf, DropletHalf as DropletHalfIcon, DropletHalf as SiDropletHalf };
export default DropletHalf;
