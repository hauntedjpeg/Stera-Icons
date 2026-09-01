import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { CircleDotRegular } from './CircleDotRegular.js';
import { CircleDotRegularDuotone } from './CircleDotRegularDuotone.js';
import { CircleDotBold } from './CircleDotBold.js';
import { CircleDotBoldDuotone } from './CircleDotBoldDuotone.js';
import { CircleDotFill } from './CircleDotFill.js';
import { CircleDotFillDuotone } from './CircleDotFillDuotone.js';

export interface CircleDotProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * CircleDot - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { CircleDotRegular } from 'stera-icons/icons/CircleDotRegular';
 */
const CircleDot = memo(forwardRef<SVGSVGElement, CircleDotProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CircleDotBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CircleDotBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CircleDotFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CircleDotFill ref={ref} {...rest} />;
  if (duotone) return <CircleDotRegularDuotone ref={ref} {...rest} />;
  return <CircleDotRegular ref={ref} {...rest} />;
}));

CircleDot.displayName = 'CircleDot';

// Triple export pattern (lucide-react style)
export { CircleDot, CircleDot as CircleDotIcon, CircleDot as SiCircleDot };
export default CircleDot;
