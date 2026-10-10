import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { PepperRegular } from './PepperRegular.js';
import { PepperRegularDuotone } from './PepperRegularDuotone.js';
import { PepperBold } from './PepperBold.js';
import { PepperBoldDuotone } from './PepperBoldDuotone.js';
import { PepperFill } from './PepperFill.js';
import { PepperFillDuotone } from './PepperFillDuotone.js';

export interface PepperProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Pepper - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { PepperRegular } from 'stera-icons/icons/PepperRegular';
 */
const Pepper = memo(forwardRef<SVGSVGElement, PepperProps>(({
  weight = 'regular',
  duotone = false,
  ...rest
}, ref) => {
  if (weight === 'bold' && duotone) return <PepperBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <PepperBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <PepperFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <PepperFill ref={ref} {...rest} />;
  if (duotone) return <PepperRegularDuotone ref={ref} {...rest} />;
  return <PepperRegular ref={ref} {...rest} />;
}));

Pepper.displayName = 'Pepper';

// Triple export pattern
export { Pepper, Pepper as PepperIcon, Pepper as SiPepper };
export default Pepper;
