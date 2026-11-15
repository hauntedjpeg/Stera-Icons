import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { PushPinAngledRegular } from './PushPinAngledRegular.js';
import { PushPinAngledRegularDuotone } from './PushPinAngledRegularDuotone.js';
import { PushPinAngledBold } from './PushPinAngledBold.js';
import { PushPinAngledBoldDuotone } from './PushPinAngledBoldDuotone.js';
import { PushPinAngledFill } from './PushPinAngledFill.js';
import { PushPinAngledFillDuotone } from './PushPinAngledFillDuotone.js';

export interface PushPinAngledProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * PushPinAngled - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { PushPinAngledRegular } from 'stera-icons/icons/PushPinAngledRegular';
 */
const PushPinAngled = memo(forwardRef<SVGSVGElement, PushPinAngledProps>(({
  weight = 'regular',
  duotone = false,
  ...rest
}, ref) => {
  if (weight === 'bold' && duotone) return <PushPinAngledBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <PushPinAngledBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <PushPinAngledFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <PushPinAngledFill ref={ref} {...rest} />;
  if (duotone) return <PushPinAngledRegularDuotone ref={ref} {...rest} />;
  return <PushPinAngledRegular ref={ref} {...rest} />;
}));

PushPinAngled.displayName = 'PushPinAngled';

// Triple export pattern
export { PushPinAngled, PushPinAngled as PushPinAngledIcon, PushPinAngled as SiPushPinAngled };
export default PushPinAngled;
