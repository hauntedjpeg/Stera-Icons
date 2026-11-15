import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { SignInInsetRegular } from './SignInInsetRegular.js';
import { SignInInsetRegularDuotone } from './SignInInsetRegularDuotone.js';
import { SignInInsetBold } from './SignInInsetBold.js';
import { SignInInsetBoldDuotone } from './SignInInsetBoldDuotone.js';
import { SignInInsetFill } from './SignInInsetFill.js';
import { SignInInsetFillDuotone } from './SignInInsetFillDuotone.js';

export interface SignInInsetProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * SignInInset - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { SignInInsetRegular } from 'stera-icons/icons/SignInInsetRegular';
 */
const SignInInset = memo(forwardRef<SVGSVGElement, SignInInsetProps>(({
  weight = 'regular',
  duotone = false,
  ...rest
}, ref) => {
  if (weight === 'bold' && duotone) return <SignInInsetBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <SignInInsetBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <SignInInsetFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <SignInInsetFill ref={ref} {...rest} />;
  if (duotone) return <SignInInsetRegularDuotone ref={ref} {...rest} />;
  return <SignInInsetRegular ref={ref} {...rest} />;
}));

SignInInset.displayName = 'SignInInset';

// Triple export pattern
export { SignInInset, SignInInset as SignInInsetIcon, SignInInset as SiSignInInset };
export default SignInInset;
