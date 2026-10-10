import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { PopcornRegular } from './PopcornRegular.js';
import { PopcornRegularDuotone } from './PopcornRegularDuotone.js';
import { PopcornBold } from './PopcornBold.js';
import { PopcornBoldDuotone } from './PopcornBoldDuotone.js';
import { PopcornFill } from './PopcornFill.js';
import { PopcornFillDuotone } from './PopcornFillDuotone.js';

export interface PopcornProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Popcorn - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { PopcornRegular } from 'stera-icons/icons/PopcornRegular';
 */
const Popcorn = memo(forwardRef<SVGSVGElement, PopcornProps>(({
  weight = 'regular',
  duotone = false,
  ...rest
}, ref) => {
  if (weight === 'bold' && duotone) return <PopcornBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <PopcornBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <PopcornFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <PopcornFill ref={ref} {...rest} />;
  if (duotone) return <PopcornRegularDuotone ref={ref} {...rest} />;
  return <PopcornRegular ref={ref} {...rest} />;
}));

Popcorn.displayName = 'Popcorn';

// Triple export pattern
export { Popcorn, Popcorn as PopcornIcon, Popcorn as SiPopcorn };
export default Popcorn;
