import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { DotRegular } from './DotRegular.js';
import { DotRegularDuotone } from './DotRegularDuotone.js';
import { DotBold } from './DotBold.js';
import { DotBoldDuotone } from './DotBoldDuotone.js';
import { DotFill } from './DotFill.js';
import { DotFillDuotone } from './DotFillDuotone.js';

export interface DotProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Dot - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { DotRegular } from 'stera-icons/icons/DotRegular';
 */
const Dot = memo(forwardRef<SVGSVGElement, DotProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <DotBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <DotBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <DotFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <DotFill ref={ref} {...rest} />;
  if (duotone) return <DotRegularDuotone ref={ref} {...rest} />;
  return <DotRegular ref={ref} {...rest} />;
}));

Dot.displayName = 'Dot';

// Triple export pattern (lucide-react style)
export { Dot, Dot as DotIcon, Dot as SiDot };
export default Dot;
