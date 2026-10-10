import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { EuroCircleRegular } from './EuroCircleRegular.js';
import { EuroCircleRegularDuotone } from './EuroCircleRegularDuotone.js';
import { EuroCircleBold } from './EuroCircleBold.js';
import { EuroCircleBoldDuotone } from './EuroCircleBoldDuotone.js';
import { EuroCircleFill } from './EuroCircleFill.js';
import { EuroCircleFillDuotone } from './EuroCircleFillDuotone.js';

export interface EuroCircleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * EuroCircle - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { EuroCircleRegular } from 'stera-icons/icons/EuroCircleRegular';
 */
const EuroCircle = memo(forwardRef<SVGSVGElement, EuroCircleProps>(({
  weight = 'regular',
  duotone = false,
  ...rest
}, ref) => {
  if (weight === 'bold' && duotone) return <EuroCircleBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <EuroCircleBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <EuroCircleFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <EuroCircleFill ref={ref} {...rest} />;
  if (duotone) return <EuroCircleRegularDuotone ref={ref} {...rest} />;
  return <EuroCircleRegular ref={ref} {...rest} />;
}));

EuroCircle.displayName = 'EuroCircle';

// Triple export pattern
export { EuroCircle, EuroCircle as EuroCircleIcon, EuroCircle as SiEuroCircle };
export default EuroCircle;
