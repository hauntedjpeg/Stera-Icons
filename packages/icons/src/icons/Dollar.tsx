import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { DollarRegular } from './DollarRegular.js';
import { DollarRegularDuotone } from './DollarRegularDuotone.js';
import { DollarBold } from './DollarBold.js';
import { DollarBoldDuotone } from './DollarBoldDuotone.js';
import { DollarFill } from './DollarFill.js';
import { DollarFillDuotone } from './DollarFillDuotone.js';

export interface DollarProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Dollar - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { DollarRegular } from 'stera-icons/icons/DollarRegular';
 */
const Dollar = memo(forwardRef<SVGSVGElement, DollarProps>(({
  weight = 'regular',
  duotone = false,
  ...rest
}, ref) => {
  if (weight === 'bold' && duotone) return <DollarBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <DollarBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <DollarFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <DollarFill ref={ref} {...rest} />;
  if (duotone) return <DollarRegularDuotone ref={ref} {...rest} />;
  return <DollarRegular ref={ref} {...rest} />;
}));

Dollar.displayName = 'Dollar';

// Triple export pattern
export { Dollar, Dollar as DollarIcon, Dollar as SiDollar };
export default Dollar;
