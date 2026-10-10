import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ActivitySquareRegular } from './ActivitySquareRegular.js';
import { ActivitySquareRegularDuotone } from './ActivitySquareRegularDuotone.js';
import { ActivitySquareBold } from './ActivitySquareBold.js';
import { ActivitySquareBoldDuotone } from './ActivitySquareBoldDuotone.js';
import { ActivitySquareFill } from './ActivitySquareFill.js';
import { ActivitySquareFillDuotone } from './ActivitySquareFillDuotone.js';

export interface ActivitySquareProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ActivitySquare - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ActivitySquareRegular } from 'stera-icons/icons/ActivitySquareRegular';
 */
const ActivitySquare = memo(forwardRef<SVGSVGElement, ActivitySquareProps>(({
  weight = 'regular',
  duotone = false,
  ...rest
}, ref) => {
  if (weight === 'bold' && duotone) return <ActivitySquareBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ActivitySquareBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ActivitySquareFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ActivitySquareFill ref={ref} {...rest} />;
  if (duotone) return <ActivitySquareRegularDuotone ref={ref} {...rest} />;
  return <ActivitySquareRegular ref={ref} {...rest} />;
}));

ActivitySquare.displayName = 'ActivitySquare';

// Triple export pattern
export { ActivitySquare, ActivitySquare as ActivitySquareIcon, ActivitySquare as SiActivitySquare };
export default ActivitySquare;
