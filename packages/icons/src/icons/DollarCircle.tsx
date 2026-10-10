import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { DollarCircleRegular } from './DollarCircleRegular.js';
import { DollarCircleRegularDuotone } from './DollarCircleRegularDuotone.js';
import { DollarCircleBold } from './DollarCircleBold.js';
import { DollarCircleBoldDuotone } from './DollarCircleBoldDuotone.js';
import { DollarCircleFill } from './DollarCircleFill.js';
import { DollarCircleFillDuotone } from './DollarCircleFillDuotone.js';

export interface DollarCircleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * DollarCircle - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { DollarCircleRegular } from 'stera-icons/icons/DollarCircleRegular';
 */
const DollarCircle = memo(forwardRef<SVGSVGElement, DollarCircleProps>(({
  weight = 'regular',
  duotone = false,
  ...rest
}, ref) => {
  if (weight === 'bold' && duotone) return <DollarCircleBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <DollarCircleBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <DollarCircleFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <DollarCircleFill ref={ref} {...rest} />;
  if (duotone) return <DollarCircleRegularDuotone ref={ref} {...rest} />;
  return <DollarCircleRegular ref={ref} {...rest} />;
}));

DollarCircle.displayName = 'DollarCircle';

// Triple export pattern
export { DollarCircle, DollarCircle as DollarCircleIcon, DollarCircle as SiDollarCircle };
export default DollarCircle;
