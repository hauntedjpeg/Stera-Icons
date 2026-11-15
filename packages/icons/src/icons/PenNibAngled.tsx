import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { PenNibAngledRegular } from './PenNibAngledRegular.js';
import { PenNibAngledRegularDuotone } from './PenNibAngledRegularDuotone.js';
import { PenNibAngledBold } from './PenNibAngledBold.js';
import { PenNibAngledBoldDuotone } from './PenNibAngledBoldDuotone.js';
import { PenNibAngledFill } from './PenNibAngledFill.js';
import { PenNibAngledFillDuotone } from './PenNibAngledFillDuotone.js';

export interface PenNibAngledProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * PenNibAngled - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { PenNibAngledRegular } from 'stera-icons/icons/PenNibAngledRegular';
 */
const PenNibAngled = memo(forwardRef<SVGSVGElement, PenNibAngledProps>(({
  weight = 'regular',
  duotone = false,
  ...rest
}, ref) => {
  if (weight === 'bold' && duotone) return <PenNibAngledBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <PenNibAngledBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <PenNibAngledFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <PenNibAngledFill ref={ref} {...rest} />;
  if (duotone) return <PenNibAngledRegularDuotone ref={ref} {...rest} />;
  return <PenNibAngledRegular ref={ref} {...rest} />;
}));

PenNibAngled.displayName = 'PenNibAngled';

// Triple export pattern
export { PenNibAngled, PenNibAngled as PenNibAngledIcon, PenNibAngled as SiPenNibAngled };
export default PenNibAngled;
