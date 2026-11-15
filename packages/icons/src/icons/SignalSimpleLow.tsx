import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { SignalSimpleLowRegular } from './SignalSimpleLowRegular.js';
import { SignalSimpleLowRegularDuotone } from './SignalSimpleLowRegularDuotone.js';
import { SignalSimpleLowBold } from './SignalSimpleLowBold.js';
import { SignalSimpleLowBoldDuotone } from './SignalSimpleLowBoldDuotone.js';
import { SignalSimpleLowFill } from './SignalSimpleLowFill.js';
import { SignalSimpleLowFillDuotone } from './SignalSimpleLowFillDuotone.js';

export interface SignalSimpleLowProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * SignalSimpleLow - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { SignalSimpleLowRegular } from 'stera-icons/icons/SignalSimpleLowRegular';
 */
const SignalSimpleLow = memo(forwardRef<SVGSVGElement, SignalSimpleLowProps>(({
  weight = 'regular',
  duotone = false,
  ...rest
}, ref) => {
  if (weight === 'bold' && duotone) return <SignalSimpleLowBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <SignalSimpleLowBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <SignalSimpleLowFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <SignalSimpleLowFill ref={ref} {...rest} />;
  if (duotone) return <SignalSimpleLowRegularDuotone ref={ref} {...rest} />;
  return <SignalSimpleLowRegular ref={ref} {...rest} />;
}));

SignalSimpleLow.displayName = 'SignalSimpleLow';

// Triple export pattern
export { SignalSimpleLow, SignalSimpleLow as SignalSimpleLowIcon, SignalSimpleLow as SiSignalSimpleLow };
export default SignalSimpleLow;
