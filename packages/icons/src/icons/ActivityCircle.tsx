import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ActivityCircleRegular } from './ActivityCircleRegular.js';
import { ActivityCircleRegularDuotone } from './ActivityCircleRegularDuotone.js';
import { ActivityCircleBold } from './ActivityCircleBold.js';
import { ActivityCircleBoldDuotone } from './ActivityCircleBoldDuotone.js';
import { ActivityCircleFill } from './ActivityCircleFill.js';
import { ActivityCircleFillDuotone } from './ActivityCircleFillDuotone.js';

export interface ActivityCircleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ActivityCircle - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ActivityCircleRegular } from 'stera-icons/icons/ActivityCircleRegular';
 */
const ActivityCircle = memo(forwardRef<SVGSVGElement, ActivityCircleProps>(({
  weight = 'regular',
  duotone = false,
  ...rest
}, ref) => {
  if (weight === 'bold' && duotone) return <ActivityCircleBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ActivityCircleBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ActivityCircleFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ActivityCircleFill ref={ref} {...rest} />;
  if (duotone) return <ActivityCircleRegularDuotone ref={ref} {...rest} />;
  return <ActivityCircleRegular ref={ref} {...rest} />;
}));

ActivityCircle.displayName = 'ActivityCircle';

// Triple export pattern
export { ActivityCircle, ActivityCircle as ActivityCircleIcon, ActivityCircle as SiActivityCircle };
export default ActivityCircle;
