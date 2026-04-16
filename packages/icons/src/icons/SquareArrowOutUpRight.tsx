import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { SquareArrowOutUpRightRegular } from './SquareArrowOutUpRightRegular.js';
import { SquareArrowOutUpRightRegularDuotone } from './SquareArrowOutUpRightRegularDuotone.js';
import { SquareArrowOutUpRightBold } from './SquareArrowOutUpRightBold.js';
import { SquareArrowOutUpRightBoldDuotone } from './SquareArrowOutUpRightBoldDuotone.js';
import { SquareArrowOutUpRightFill } from './SquareArrowOutUpRightFill.js';
import { SquareArrowOutUpRightFillDuotone } from './SquareArrowOutUpRightFillDuotone.js';

export interface SquareArrowOutUpRightProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * SquareArrowOutUpRight - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { SquareArrowOutUpRightRegular } from 'stera-icons/icons/SquareArrowOutUpRightRegular';
 */
const SquareArrowOutUpRight = memo(forwardRef<SVGSVGElement, SquareArrowOutUpRightProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <SquareArrowOutUpRightBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <SquareArrowOutUpRightBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <SquareArrowOutUpRightFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <SquareArrowOutUpRightFill ref={ref} {...rest} />;
  if (duotone) return <SquareArrowOutUpRightRegularDuotone ref={ref} {...rest} />;
  return <SquareArrowOutUpRightRegular ref={ref} {...rest} />;
}));

SquareArrowOutUpRight.displayName = 'SquareArrowOutUpRight';

// Triple export pattern (lucide-react style)
export { SquareArrowOutUpRight, SquareArrowOutUpRight as SquareArrowOutUpRightIcon, SquareArrowOutUpRight as SiSquareArrowOutUpRight };
export default SquareArrowOutUpRight;
