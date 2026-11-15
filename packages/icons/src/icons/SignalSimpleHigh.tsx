import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { SignalSimpleHighRegular } from './SignalSimpleHighRegular.js';
import { SignalSimpleHighRegularDuotone } from './SignalSimpleHighRegularDuotone.js';
import { SignalSimpleHighBold } from './SignalSimpleHighBold.js';
import { SignalSimpleHighBoldDuotone } from './SignalSimpleHighBoldDuotone.js';
import { SignalSimpleHighFill } from './SignalSimpleHighFill.js';
import { SignalSimpleHighFillDuotone } from './SignalSimpleHighFillDuotone.js';

export interface SignalSimpleHighProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * SignalSimpleHigh - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { SignalSimpleHighRegular } from 'stera-icons/icons/SignalSimpleHighRegular';
 */
const SignalSimpleHigh = memo(forwardRef<SVGSVGElement, SignalSimpleHighProps>(({
  weight = 'regular',
  duotone = false,
  ...rest
}, ref) => {
  if (weight === 'bold' && duotone) return <SignalSimpleHighBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <SignalSimpleHighBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <SignalSimpleHighFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <SignalSimpleHighFill ref={ref} {...rest} />;
  if (duotone) return <SignalSimpleHighRegularDuotone ref={ref} {...rest} />;
  return <SignalSimpleHighRegular ref={ref} {...rest} />;
}));

SignalSimpleHigh.displayName = 'SignalSimpleHigh';

// Triple export pattern
export { SignalSimpleHigh, SignalSimpleHigh as SignalSimpleHighIcon, SignalSimpleHigh as SiSignalSimpleHigh };
export default SignalSimpleHigh;
