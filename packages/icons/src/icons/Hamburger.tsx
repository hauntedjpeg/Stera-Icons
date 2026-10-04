import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { HamburgerRegular } from './HamburgerRegular.js';
import { HamburgerRegularDuotone } from './HamburgerRegularDuotone.js';
import { HamburgerBold } from './HamburgerBold.js';
import { HamburgerBoldDuotone } from './HamburgerBoldDuotone.js';
import { HamburgerFill } from './HamburgerFill.js';
import { HamburgerFillDuotone } from './HamburgerFillDuotone.js';

export interface HamburgerProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Hamburger - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { HamburgerRegular } from 'stera-icons/icons/HamburgerRegular';
 */
const Hamburger = memo(forwardRef<SVGSVGElement, HamburgerProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <HamburgerBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <HamburgerBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <HamburgerFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <HamburgerFill ref={ref} {...rest} />;
  if (duotone) return <HamburgerRegularDuotone ref={ref} {...rest} />;
  return <HamburgerRegular ref={ref} {...rest} />;
}));

Hamburger.displayName = 'Hamburger';

// Triple export pattern (lucide-react style)
export { Hamburger, Hamburger as HamburgerIcon, Hamburger as SiHamburger };
export default Hamburger;
