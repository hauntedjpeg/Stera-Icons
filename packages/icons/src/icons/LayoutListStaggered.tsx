import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { LayoutListStaggeredRegular } from './LayoutListStaggeredRegular.js';
import { LayoutListStaggeredRegularDuotone } from './LayoutListStaggeredRegularDuotone.js';
import { LayoutListStaggeredBold } from './LayoutListStaggeredBold.js';
import { LayoutListStaggeredBoldDuotone } from './LayoutListStaggeredBoldDuotone.js';
import { LayoutListStaggeredFill } from './LayoutListStaggeredFill.js';
import { LayoutListStaggeredFillDuotone } from './LayoutListStaggeredFillDuotone.js';

export interface LayoutListStaggeredProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * LayoutListStaggered - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { LayoutListStaggeredRegular } from 'stera-icons/icons/LayoutListStaggeredRegular';
 */
const LayoutListStaggered = memo(forwardRef<SVGSVGElement, LayoutListStaggeredProps>(({
  weight = 'regular',
  duotone = false,
  ...rest
}, ref) => {
  if (weight === 'bold' && duotone) return <LayoutListStaggeredBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <LayoutListStaggeredBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <LayoutListStaggeredFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <LayoutListStaggeredFill ref={ref} {...rest} />;
  if (duotone) return <LayoutListStaggeredRegularDuotone ref={ref} {...rest} />;
  return <LayoutListStaggeredRegular ref={ref} {...rest} />;
}));

LayoutListStaggered.displayName = 'LayoutListStaggered';

// Triple export pattern
export { LayoutListStaggered, LayoutListStaggered as LayoutListStaggeredIcon, LayoutListStaggered as SiLayoutListStaggered };
export default LayoutListStaggered;
