import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { SignOutInsetRegular } from './SignOutInsetRegular.js';
import { SignOutInsetRegularDuotone } from './SignOutInsetRegularDuotone.js';
import { SignOutInsetBold } from './SignOutInsetBold.js';
import { SignOutInsetBoldDuotone } from './SignOutInsetBoldDuotone.js';
import { SignOutInsetFill } from './SignOutInsetFill.js';
import { SignOutInsetFillDuotone } from './SignOutInsetFillDuotone.js';

export interface SignOutInsetProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * SignOutInset - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { SignOutInsetRegular } from 'stera-icons/icons/SignOutInsetRegular';
 */
const SignOutInset = memo(forwardRef<SVGSVGElement, SignOutInsetProps>(({
  weight = 'regular',
  duotone = false,
  ...rest
}, ref) => {
  if (weight === 'bold' && duotone) return <SignOutInsetBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <SignOutInsetBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <SignOutInsetFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <SignOutInsetFill ref={ref} {...rest} />;
  if (duotone) return <SignOutInsetRegularDuotone ref={ref} {...rest} />;
  return <SignOutInsetRegular ref={ref} {...rest} />;
}));

SignOutInset.displayName = 'SignOutInset';

// Triple export pattern
export { SignOutInset, SignOutInset as SignOutInsetIcon, SignOutInset as SiSignOutInset };
export default SignOutInset;
