import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { EqualsRegular } from './EqualsRegular.js';
import { EqualsRegularDuotone } from './EqualsRegularDuotone.js';
import { EqualsBold } from './EqualsBold.js';
import { EqualsBoldDuotone } from './EqualsBoldDuotone.js';
import { EqualsFill } from './EqualsFill.js';
import { EqualsFillDuotone } from './EqualsFillDuotone.js';

export interface EqualsProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Equals - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { EqualsRegular } from 'stera-icons/icons/EqualsRegular';
 */
const Equals = memo(forwardRef<SVGSVGElement, EqualsProps>(({
  weight = 'regular',
  duotone = false,
  ...rest
}, ref) => {
  if (weight === 'bold' && duotone) return <EqualsBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <EqualsBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <EqualsFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <EqualsFill ref={ref} {...rest} />;
  if (duotone) return <EqualsRegularDuotone ref={ref} {...rest} />;
  return <EqualsRegular ref={ref} {...rest} />;
}));

Equals.displayName = 'Equals';

// Triple export pattern
export { Equals, Equals as EqualsIcon, Equals as SiEquals };
export default Equals;
