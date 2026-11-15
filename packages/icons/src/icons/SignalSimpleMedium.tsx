import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { SignalSimpleMediumRegular } from './SignalSimpleMediumRegular.js';
import { SignalSimpleMediumRegularDuotone } from './SignalSimpleMediumRegularDuotone.js';
import { SignalSimpleMediumBold } from './SignalSimpleMediumBold.js';
import { SignalSimpleMediumBoldDuotone } from './SignalSimpleMediumBoldDuotone.js';
import { SignalSimpleMediumFill } from './SignalSimpleMediumFill.js';
import { SignalSimpleMediumFillDuotone } from './SignalSimpleMediumFillDuotone.js';

export interface SignalSimpleMediumProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * SignalSimpleMedium - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { SignalSimpleMediumRegular } from 'stera-icons/icons/SignalSimpleMediumRegular';
 */
const SignalSimpleMedium = memo(forwardRef<SVGSVGElement, SignalSimpleMediumProps>(({
  weight = 'regular',
  duotone = false,
  ...rest
}, ref) => {
  if (weight === 'bold' && duotone) return <SignalSimpleMediumBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <SignalSimpleMediumBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <SignalSimpleMediumFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <SignalSimpleMediumFill ref={ref} {...rest} />;
  if (duotone) return <SignalSimpleMediumRegularDuotone ref={ref} {...rest} />;
  return <SignalSimpleMediumRegular ref={ref} {...rest} />;
}));

SignalSimpleMedium.displayName = 'SignalSimpleMedium';

// Triple export pattern
export { SignalSimpleMedium, SignalSimpleMedium as SignalSimpleMediumIcon, SignalSimpleMedium as SiSignalSimpleMedium };
export default SignalSimpleMedium;
