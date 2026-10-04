import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { AppleRegular } from './AppleRegular.js';
import { AppleRegularDuotone } from './AppleRegularDuotone.js';
import { AppleBold } from './AppleBold.js';
import { AppleBoldDuotone } from './AppleBoldDuotone.js';
import { AppleFill } from './AppleFill.js';
import { AppleFillDuotone } from './AppleFillDuotone.js';

export interface AppleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Apple - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { AppleRegular } from 'stera-icons/icons/AppleRegular';
 */
const Apple = memo(forwardRef<SVGSVGElement, AppleProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <AppleBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <AppleBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <AppleFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <AppleFill ref={ref} {...rest} />;
  if (duotone) return <AppleRegularDuotone ref={ref} {...rest} />;
  return <AppleRegular ref={ref} {...rest} />;
}));

Apple.displayName = 'Apple';

// Triple export pattern (lucide-react style)
export { Apple, Apple as AppleIcon, Apple as SiApple };
export default Apple;
