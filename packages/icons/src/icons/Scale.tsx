import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ScaleRegular } from './ScaleRegular.js';
import { ScaleRegularDuotone } from './ScaleRegularDuotone.js';
import { ScaleBold } from './ScaleBold.js';
import { ScaleBoldDuotone } from './ScaleBoldDuotone.js';
import { ScaleFill } from './ScaleFill.js';
import { ScaleFillDuotone } from './ScaleFillDuotone.js';

export interface ScaleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Scale - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ScaleRegular } from 'stera-icons/icons/ScaleRegular';
 */
const Scale = memo(forwardRef<SVGSVGElement, ScaleProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ScaleBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ScaleBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ScaleFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ScaleFill ref={ref} {...rest} />;
  if (duotone) return <ScaleRegularDuotone ref={ref} {...rest} />;
  return <ScaleRegular ref={ref} {...rest} />;
}));

Scale.displayName = 'Scale';

// Triple export pattern (lucide-react style)
export { Scale, Scale as ScaleIcon, Scale as SiScale };
export default Scale;
